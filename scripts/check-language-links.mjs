import { writeFile } from 'node:fs/promises';

import { languages } from '../dist/index.js';

/**
 * Checks that every language `logo` and `website` URL is reachable.
 *
 * Writes `language-link-report.json` and exits nonzero when broken links are
 * found. With `--create-issue`, opens or updates a GitHub issue listing the
 * broken URLs (requires GITHUB_TOKEN and GITHUB_REPOSITORY).
 */

const createIssue = process.argv.includes('--create-issue');
const reportPath = 'language-link-report.json';
const concurrency = Number(process.env.LINK_CHECK_CONCURRENCY ?? '5');
const requestTimeoutMs = Number(process.env.LINK_CHECK_TIMEOUT_MS ?? '15000');
const issueTitle = 'Broken language logo or website links';
const requestHeaders = {
  'user-agent': 'code-languages-link-checker (+https://github.com/ElJijuna/code-languages)',
  accept: '*/*',
};
const fetchStatus = async (url, method) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);

  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: requestHeaders,
    });

    return response.status;
  } catch {
    return 0;
  } finally {
    clearTimeout(timeout);
  }
};
const checkUrl = async (url) => {
  let status = await fetchStatus(url, 'HEAD');

  // Some servers reject HEAD or bot-looking requests; retry once with GET.
  if (status === 0 || status >= 400) {
    status = await fetchStatus(url, 'GET');
  }

  // 403/405 mean the server is reachable but blocks non-browser clients,
  // so the link is not considered broken.
  return { url, status, ok: (status >= 200 && status < 400) || status === 403 || status === 405 };
};
const urlUsers = new Map();

for (const language of languages) {
  for (const [field, url] of [
    ['logo', language.logo],
    ['website', language.website],
  ]) {
    const users = urlUsers.get(url) ?? [];

    users.push(`${language.slug} (${field})`);
    urlUsers.set(url, users);
  }
}

const urls = [...urlUsers.keys()];
const results = [];

let cursor = 0;

const worker = async () => {
  while (cursor < urls.length) {
    const url = urls[cursor];

    cursor += 1;
    results.push(await checkUrl(url));
  }
};

await Promise.all(Array.from({ length: concurrency }, worker));

const broken = results
  .filter((result) => !result.ok)
  .map((result) => ({ ...result, usedBy: urlUsers.get(result.url) }))
  .sort((first, second) => first.url.localeCompare(second.url));
const report = {
  generatedAt: new Date().toISOString(),
  totalUrls: urls.length,
  brokenCount: broken.length,
  broken,
};

await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Checked ${urls.length} unique URLs across ${languages.length} languages.`);

if (broken.length === 0) {
  console.log('All logo and website links are reachable.');
  process.exit(0);
}

console.error(`Found ${broken.length} broken links:`);

for (const entry of broken) {
  console.error(`  [${entry.status}] ${entry.url} — used by ${entry.usedBy.join(', ')}`);
}

if (createIssue) {
  const { GITHUB_TOKEN, GITHUB_REPOSITORY } = process.env;

  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY) {
    console.error('GITHUB_TOKEN and GITHUB_REPOSITORY are required for --create-issue.');
    process.exit(1);
  }

  const apiHeaders = {
    authorization: `Bearer ${GITHUB_TOKEN}`,
    accept: 'application/vnd.github+json',
    'user-agent': requestHeaders['user-agent'],
  };
  const lines = broken.map(
    (entry) => `- \`${entry.status}\` ${entry.url} — used by ${entry.usedBy.join(', ')}`,
  );
  const body = [
    'The scheduled link checker found unreachable `logo` or `website` URLs in the language catalog.',
    '',
    ...lines,
    '',
    `_Report generated at ${report.generatedAt} by \`scripts/check-language-links.mjs\`._`,
  ].join('\n');
  const searchResponse = await fetch(
    `https://api.github.com/repos/${GITHUB_REPOSITORY}/issues?state=open&per_page=100`,
    { headers: apiHeaders },
  );
  const openIssues = searchResponse.ok ? await searchResponse.json() : [];
  const existing = openIssues.find((issue) => issue.title === issueTitle);
  const endpoint = existing
    ? `https://api.github.com/repos/${GITHUB_REPOSITORY}/issues/${existing.number}`
    : `https://api.github.com/repos/${GITHUB_REPOSITORY}/issues`;
  const response = await fetch(endpoint, {
    method: existing ? 'PATCH' : 'POST',
    headers: apiHeaders,
    body: JSON.stringify({ title: issueTitle, body }),
  });

  if (!response.ok) {
    console.error(`Failed to ${existing ? 'update' : 'create'} the issue: ${response.status}`);
    process.exit(1);
  }

  console.error(`${existing ? 'Updated' : 'Created'} issue "${issueTitle}".`);
}

process.exit(1);
