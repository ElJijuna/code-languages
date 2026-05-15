import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const languagesDir = "src/languages";
const reportPath = "language-version-report.json";

const manualChecks = {
  abap: "ABAP Platform releases should be reviewed manually against SAP Help Portal because the source page is rendered dynamically.",
  actionscript:
    "ActionScript is effectively stable at 3.0 and should be reviewed manually against Adobe AIR and Flash platform documentation.",
  assembly:
    "Assembly versions are architecture-specific and should be reviewed manually against assembler and ISA documentation.",
  c: "ISO standards do not expose a stable free machine-readable latest-version endpoint.",
  batch:
    "Batch is tied to DOS and Windows Command Processor releases rather than an independent language version.",
  cobol: "COBOL standards should be reviewed manually against ISO/IEC 1989 publications.",
  cpp: "ISO standards do not expose a stable free machine-readable latest-version endpoint.",
  css: "CSS is maintained as living specifications rather than one package version.",
  dockerfile:
    "Dockerfile syntax versions depend on the BuildKit frontend image and should be reviewed manually.",
  html: "HTML is maintained as a living standard.",
  ini: "INI is an informal configuration format without a single formal versioned specification.",
  javascript:
    "ECMAScript editions are published yearly and should be checked against ECMA-262 release status.",
  json: "RFC 8259 is stable and should be reviewed manually when a replacement RFC appears.",
  lisp: "Common Lisp is standardized as ANSI INCITS 226-1994 and should be reviewed manually against ANSI/INCITS publications.",
  metal:
    "Metal versions are tied to Apple platform SDKs and should be reviewed manually against Apple Developer Metal documentation.",
  "objective-c":
    "Objective-C language versioning is effectively stable and should be reviewed manually against Apple documentation and runtime updates.",
  sql: "SQL standards should be reviewed manually against ISO/IEC 9075 publications.",
  svg: "SVG specifications should be reviewed manually against w3.org/TR/SVG and W3C publication history.",
  webassembly: "WebAssembly standards should be reviewed manually against webassembly.org/specs.",
  xaml: "XAML support is platform-specific across WPF, UWP, WinUI, .NET MAUI, and related frameworks.",
  xml: "XML 1.0 Fifth Edition is stable and should be reviewed manually if W3C publishes a new edition.",
  yaml: "YAML specification updates should be reviewed manually against yaml.org/spec.",
};

const checkers = {
  async astro() {
    const json = await fetchJson("https://registry.npmjs.org/astro/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/astro/latest",
    };
  },
  async asp() {
    const html = await fetchText(
      "https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework",
    );
    const match = html.match(/\.NET Framework\s+(\d+\.\d+\.\d+)\s+is the latest version/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework",
    };
  },
  async bash() {
    const html = await fetchText("https://ftp.gnu.org/gnu/bash/");
    const versions = [...html.matchAll(/bash-(\d+\.\d+(?:\.\d+)?)\.tar\.gz/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://ftp.gnu.org/gnu/bash/",
    };
  },
  async csharp() {
    const markdown = await fetchText(
      "https://raw.githubusercontent.com/dotnet/docs/main/docs/csharp/whats-new/csharp-version-history.md",
    );
    const versions = [...markdown.matchAll(/^## C# version (\d+(?:\.\d+)?)/gm)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestNumeric(versions),
      sourceUrl:
        "https://raw.githubusercontent.com/dotnet/docs/main/docs/csharp/whats-new/csharp-version-history.md",
    };
  },
  async cmake() {
    const html = await fetchText("https://cmake.org/download/");
    const match = html.match(/Latest Release \((\d+\.\d+\.\d+)\)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://cmake.org/download/",
    };
  },
  async cuda() {
    const html = await fetchText("https://developer.nvidia.com/cuda-toolkit-archive");
    const versions = [...html.matchAll(/CUDA Toolkit\s+(\d+\.\d+\.\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://developer.nvidia.com/cuda-toolkit-archive",
    };
  },
  async crystal() {
    const json = await fetchJson("https://crystal-lang.org/api/versions.json");
    const latest = json.versions?.find((entry) => entry.released !== false);

    return {
      latestVersion: latest?.name,
      sourceUrl: "https://crystal-lang.org/api/versions.json",
    };
  },
  async coffeescript() {
    const json = await fetchJson("https://registry.npmjs.org/coffeescript/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/coffeescript/latest",
    };
  },
  async dart() {
    const json = await fetchJson(
      "https://storage.googleapis.com/dart-archive/channels/stable/release/latest/VERSION",
    );

    return {
      latestVersion: json.version,
      sourceUrl:
        "https://storage.googleapis.com/dart-archive/channels/stable/release/latest/VERSION",
    };
  },
  async fsharp() {
    const html = await fetchText("https://learn.microsoft.com/en-us/dotnet/fsharp/whats-new/");
    const versions = [...html.matchAll(/F#\s+(\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestNumeric(versions),
      sourceUrl: "https://learn.microsoft.com/en-us/dotnet/fsharp/whats-new/",
    };
  },
  async git() {
    const html = await fetchText("https://git-scm.com/docs/git");
    const match = html.match(/git last updated in (\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://git-scm.com/docs/git",
    };
  },
  async go() {
    const text = await fetchText("https://go.dev/VERSION?m=text");
    const match = text.match(/^go(\d+\.\d+(?:\.\d+)?)/m);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://go.dev/VERSION?m=text",
    };
  },
  async gradle() {
    const html = await fetchText("https://docs.gradle.org/current/release-notes.html");
    const match = html.match(/Gradle\s+(\d+\.\d+(?:\.\d+)?)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://docs.gradle.org/current/release-notes.html",
    };
  },
  async graphql() {
    const html = await fetchText("https://spec.graphql.org/");
    const match = html.match(/>([A-Z][a-z]+ \d{4})</);

    return {
      latestVersion: match?.[1]?.trim(),
      sourceUrl: "https://spec.graphql.org/",
    };
  },
  async groovy() {
    const xml = await fetchText(
      "https://repo1.maven.org/maven2/org/apache/groovy/groovy/maven-metadata.xml",
    );
    const versions = [...xml.matchAll(/<version>([^<]+)<\/version>/g)]
      .map((match) => match[1])
      .filter((version) => /^\d+\.\d+\.\d+$/.test(version));

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://repo1.maven.org/maven2/org/apache/groovy/groovy/maven-metadata.xml",
    };
  },
  async java() {
    const json = await fetchJson("https://api.adoptium.net/v3/info/available_releases");
    const releases = json.available_releases ?? [];
    const latest = Math.max(...releases.map(Number).filter(Number.isFinite));

    return {
      latestVersion: String(latest),
      sourceUrl: "https://api.adoptium.net/v3/info/available_releases",
    };
  },
  async julia() {
    const json = await fetchJson("https://api.github.com/repos/JuliaLang/julia/releases/latest");

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: "https://api.github.com/repos/JuliaLang/julia/releases/latest",
    };
  },
  async kotlin() {
    const json = await fetchJson("https://api.github.com/repos/JetBrains/kotlin/releases/latest");

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: "https://api.github.com/repos/JetBrains/kotlin/releases/latest",
    };
  },
  async less() {
    const json = await fetchJson("https://registry.npmjs.org/less/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/less/latest",
    };
  },
  async lua() {
    const html = await fetchText("https://www.lua.org/download.html");
    const match = html.match(/lua-(\d+\.\d+\.\d+)\.tar\.gz/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://www.lua.org/download.html",
    };
  },
  async makefile() {
    const html = await fetchText("https://ftp.gnu.org/gnu/make/");
    const versions = [...html.matchAll(/make-(\d+\.\d+(?:\.\d+)?)\.tar\.gz/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://ftp.gnu.org/gnu/make/",
    };
  },
  async matlab() {
    const html = await fetchText("https://www.mathworks.com/company/newsroom.html");
    const match = html.match(/\bR(\d{4}[ab])\b/i);

    return {
      latestVersion: match ? `R${match[1]}` : undefined,
      sourceUrl: "https://www.mathworks.com/company/newsroom.html",
    };
  },
  async markdown() {
    const html = await fetchText("https://spec.commonmark.org/");
    const versions = [...html.matchAll(/\/(\d+\.\d+(?:\.\d+)?)\//g)].map((match) => match[1]);

    return {
      latestVersion: `CommonMark ${latestSemver(versions)}`,
      sourceUrl: "https://spec.commonmark.org/",
    };
  },
  async meson() {
    const json = await fetchJson("https://pypi.org/pypi/meson/json");

    return {
      latestVersion: json.info?.version,
      sourceUrl: "https://pypi.org/pypi/meson/json",
    };
  },
  async nginx() {
    const html = await fetchText("https://nginx.org/en/download.html");
    const stableSection = html.match(/Stable version[\s\S]*?(?:Legacy versions|Source Code)/i)?.[0];
    const match = stableSection?.match(/nginx-(\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://nginx.org/en/download.html",
    };
  },
  async pascal() {
    const html = await fetchText("https://www.freepascal.org/download.html.en");
    const match = html.match(/latest release is[\s\S]{0,80}?(\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://www.freepascal.org/download.html.en",
    };
  },
  async php() {
    const json = await fetchJson("https://api.github.com/repos/php/php-src/releases/latest");

    return {
      latestVersion: normalizeVersion(String(json.tag_name ?? "").replace(/^php-/i, "")),
      sourceUrl: "https://api.github.com/repos/php/php-src/releases/latest",
    };
  },
  async powershell() {
    const html = await fetchText("https://github.com/PowerShell/PowerShell/releases");
    const versions = [...html.matchAll(/v(\d+\.\d+\.\d+) Release of PowerShell/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://github.com/PowerShell/PowerShell/releases",
    };
  },
  async pug() {
    const json = await fetchJson("https://registry.npmjs.org/pug/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/pug/latest",
    };
  },
  async python() {
    const html = await fetchText("https://www.python.org/downloads/");
    const versions = [...html.matchAll(/Python (\d+\.\d+\.\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://www.python.org/downloads/",
    };
  },
  async r() {
    const html = await fetchText("https://www.r-project.org/");
    const versions = [...html.matchAll(/R version\s+(\d+\.\d+\.\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://www.r-project.org/",
    };
  },
  async rust() {
    const toml = await fetchText("https://static.rust-lang.org/dist/channel-rust-stable.toml");
    const match = toml.match(/pkg\.rust\]\s+version = "(\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://static.rust-lang.org/dist/channel-rust-stable.toml",
    };
  },
  async scala() {
    const json = await fetchJson("https://api.github.com/repos/scala/scala3/releases/latest");

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: "https://api.github.com/repos/scala/scala3/releases/latest",
    };
  },
  async ruby() {
    const html = await fetchText("https://www.ruby-lang.org/en/downloads/");
    const match = html.match(/current stable version is (\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://www.ruby-lang.org/en/downloads/",
    };
  },
  async scss() {
    const json = await fetchJson("https://registry.npmjs.org/sass/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/sass/latest",
    };
  },
  async svelte() {
    const json = await fetchJson("https://registry.npmjs.org/svelte/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/svelte/latest",
    };
  },
  async swift() {
    const json = await fetchJson("https://api.github.com/repos/swiftlang/swift/releases/latest");
    const match = String(json.tag_name ?? json.name ?? "").match(
      /swift-(\d+\.\d+(?:\.\d+)?)-RELEASE/,
    );

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://api.github.com/repos/swiftlang/swift/releases/latest",
    };
  },
  async toml() {
    const json = await fetchJson("https://api.github.com/repos/toml-lang/toml/releases/latest");

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: "https://api.github.com/repos/toml-lang/toml/releases/latest",
    };
  },
  async typescript() {
    const json = await fetchJson("https://registry.npmjs.org/typescript/latest");

    return {
      latestVersion: majorMinor(json.version),
      sourceUrl: "https://registry.npmjs.org/typescript/latest",
    };
  },
  async "visual-basic"() {
    const html = await fetchText(
      "https://learn.microsoft.com/en-us/dotnet/visual-basic/whats-new/",
    );
    const match = html.match(/Current version[\s\S]*?Visual Basic (\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://learn.microsoft.com/en-us/dotnet/visual-basic/whats-new/",
    };
  },
  async vue() {
    const json = await fetchJson("https://registry.npmjs.org/vue/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/vue/latest",
    };
  },
  async zig() {
    const json = await fetchJson("https://ziglang.org/download/index.json");
    const versions = Object.keys(json).filter((version) => /^\d+\.\d+\.\d+$/.test(version));

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://ziglang.org/download/index.json",
    };
  },
  async zsh() {
    const html = await fetchText("https://zsh.sourceforge.io/Arc/source.html");
    const versions = [...html.matchAll(/Download zsh (\d+\.\d+(?:\.\d+)?)/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://zsh.sourceforge.io/Arc/source.html",
    };
  },
};

async function main() {
  const options = parseOptions(process.argv.slice(2));
  const languages = await readLanguages();
  const report = await buildReport(languages);

  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  printReport(report);

  if (options.createIssues) {
    await createIssues(report.updates);
  }

  if (options.createPullRequests) {
    await createPullRequests(report.updates);
  }

  if (report.errors.length > 0 && options.failOnError) {
    process.exitCode = 1;
  }
}

function parseOptions(args) {
  return {
    createIssues: args.includes("--create-issues"),
    createPullRequests: args.includes("--create-pull-requests"),
    failOnError: args.includes("--fail-on-error"),
  };
}

async function readLanguages() {
  const files = await readdir(languagesDir);
  const languages = [];

  for (const file of files.filter((name) => name.endsWith(".ts")).sort()) {
    const filePath = join(languagesDir, file);
    const source = await readFile(filePath, "utf8");
    const slug = source.match(/slug:\s*"([^"]+)"/)?.[1];
    const version = source.match(/version:\s*"([^"]+)"/)?.[1];
    const name = source.match(/name:\s*"([^"]+)"/)?.[1] ?? slug;

    if (slug && version) {
      languages.push({ filePath, name, slug, version });
    }
  }

  return languages;
}

async function buildReport(languages) {
  const report = {
    checkedAt: new Date().toISOString(),
    updates: [],
    current: [],
    skipped: [],
    errors: [],
  };

  for (const language of languages) {
    const checker = checkers[language.slug];

    if (!checker) {
      report.skipped.push({
        ...language,
        reason: manualChecks[language.slug] ?? "No automated version checker configured yet.",
      });
      continue;
    }

    try {
      const result = await checker(language);

      if (!result.latestVersion) {
        throw new Error("Could not detect latest version from source");
      }

      const item = {
        ...language,
        latestVersion: result.latestVersion,
        sourceUrl: result.sourceUrl,
      };

      if (isUpdateAvailable(language.version, result.latestVersion)) {
        report.updates.push(item);
      } else {
        report.current.push(item);
      }
    } catch (error) {
      report.errors.push({
        ...language,
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  return report;
}

async function createIssues(updates) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;

  if (!token || !repository) {
    throw new Error("GITHUB_TOKEN and GITHUB_REPOSITORY are required to create issues");
  }

  const [owner, repo] = repository.split("/");

  for (const update of updates) {
    await syncVersionUpdateIssue({ owner, repo, token, update });
  }
}

async function createPullRequests(updates) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;
  const baseBranch = process.env.GITHUB_REF_NAME ?? "main";

  if (!token || !repository) {
    throw new Error("GITHUB_TOKEN and GITHUB_REPOSITORY are required to create pull requests");
  }

  const [owner, repo] = repository.split("/");

  for (const update of updates) {
    await syncVersionUpdatePullRequest({ baseBranch, owner, repo, token, update });
  }
}

async function syncVersionUpdateIssue({ owner, repo, token, update }) {
  const title = issueTitle(update);
  const body = issueBody(update);
  const existingIssue = await findOpenVersionUpdateIssue({ owner, repo, token, update });

  if (!existingIssue) {
    await githubRequest(`/repos/${owner}/${repo}/issues`, {
      method: "POST",
      token,
      body: {
        title,
        body,
      },
    });

    console.log(`Created issue: ${title}`);
    return;
  }

  const previousVersion = extractDetectedVersion(existingIssue);

  if (normalizeComparable(previousVersion) === normalizeComparable(update.latestVersion)) {
    console.log(`Issue already up to date for ${update.name}: ${existingIssue.html_url}`);
    return;
  }

  await githubRequest(`/repos/${owner}/${repo}/issues/${existingIssue.number}`, {
    method: "PATCH",
    token,
    body: {
      title,
      body,
    },
  });

  await githubRequest(`/repos/${owner}/${repo}/issues/${existingIssue.number}/comments`, {
    method: "POST",
    token,
    body: {
      body: [
        `The automated language version check detected a newer ${update.name} version.`,
        "",
        `- Previous detected version: ${previousVersion ?? "unknown"}`,
        `- New detected version: ${update.latestVersion}`,
        `- Source: ${update.sourceUrl}`,
      ].join("\n"),
    },
  });

  console.log(`Updated issue for ${update.name}: ${existingIssue.html_url}`);
}

async function syncVersionUpdatePullRequest({ baseBranch, owner, repo, token, update }) {
  const branch = `chore/update-${update.slug}-metadata`;
  const title = issueTitle(update);
  const existingPullRequest = await findOpenVersionUpdatePullRequest({
    baseBranch,
    branch,
    owner,
    repo,
    token,
  });
  const issue = await findOpenVersionUpdateIssue({ owner, repo, token, update });
  const body = pullRequestBody(update, issue);

  await ensureBranch({ baseBranch, branch, owner, repo, token });

  await updateRepositoryFileContent({
    branch,
    message: issueTitle(update),
    owner,
    path: update.filePath,
    repo,
    token,
    update,
    updateContent: updateLanguageVersion,
  });

  await updateRepositoryFileContent({
    branch,
    message: issueTitle(update),
    owner,
    path: "README.md",
    repo,
    token,
    update,
    updateContent: updateReadmeLanguageVersion,
  });

  if (!existingPullRequest) {
    await githubRequest(`/repos/${owner}/${repo}/pulls`, {
      method: "POST",
      token,
      body: {
        title,
        head: branch,
        base: baseBranch,
        body,
        maintainer_can_modify: true,
      },
    });

    console.log(`Created pull request: ${title}`);
    return;
  }

  await githubRequest(`/repos/${owner}/${repo}/pulls/${existingPullRequest.number}`, {
    method: "PATCH",
    token,
    body: {
      title,
      body,
    },
  });

  console.log(`Updated pull request for ${update.name}: ${existingPullRequest.html_url}`);
}

async function findOpenVersionUpdateIssue({ owner, repo, token, update }) {
  const titlePrefix = `fix: update ${update.name} metadata`;
  const marker = issueMarker(update.slug);
  const query = `repo:${owner}/${repo} is:issue is:open "language-version-update:${update.slug}"`;
  const result = await githubRequest(`/search/issues?q=${encodeURIComponent(query)}`, {
    token,
  });

  const markerMatch = result.items?.find((issue) => issue.body?.includes(marker));

  if (markerMatch) {
    return markerMatch;
  }

  return (
    (await findOpenVersionUpdateIssueByTitle({ owner, repo, titlePrefix, token })) ??
    findOpenVersionUpdateIssueByTitle({
      owner,
      repo,
      titlePrefix: `chore: update ${update.name} metadata`,
      token,
    })
  );
}

async function findOpenVersionUpdateIssueByTitle({ owner, repo, titlePrefix, token }) {
  const query = `repo:${owner}/${repo} is:issue is:open in:title "${titlePrefix}"`;
  const result = await githubRequest(`/search/issues?q=${encodeURIComponent(query)}`, {
    token,
  });

  return result.items?.find((issue) => issue.title?.startsWith(titlePrefix));
}

async function findOpenVersionUpdatePullRequest({ baseBranch, branch, owner, repo, token }) {
  const head = encodeURIComponent(`${owner}:${branch}`);
  const base = encodeURIComponent(baseBranch);
  const pullRequests = await githubRequest(
    `/repos/${owner}/${repo}/pulls?state=open&head=${head}&base=${base}`,
    { token },
  );

  return pullRequests.at(0);
}

async function ensureBranch({ baseBranch, branch, owner, repo, token }) {
  const existingBranch = await githubRequest(`/repos/${owner}/${repo}/git/ref/heads/${branch}`, {
    allowNotFound: true,
    token,
  });

  if (existingBranch) {
    return;
  }

  const baseRef = await githubRequest(`/repos/${owner}/${repo}/git/ref/heads/${baseBranch}`, {
    token,
  });

  await githubRequest(`/repos/${owner}/${repo}/git/refs`, {
    method: "POST",
    token,
    body: {
      ref: `refs/heads/${branch}`,
      sha: baseRef.object.sha,
    },
  });

  console.log(`Created branch: ${branch}`);
}

async function getRepositoryFile({ branch, owner, path, repo, token }) {
  const file = await githubRequest(
    `/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`,
    { token },
  );

  return {
    content: Buffer.from(file.content, "base64").toString("utf8"),
    sha: file.sha,
  };
}

async function updateRepositoryFileContent({
  branch,
  message,
  owner,
  path,
  repo,
  token,
  update,
  updateContent,
}) {
  const file = await getRepositoryFile({
    branch,
    owner,
    path,
    repo,
    token,
  });
  const updatedContent = updateContent(file.content, update);

  if (updatedContent === file.content) {
    console.log(`${path} already has ${update.name} ${update.latestVersion}`);
    return;
  }

  await updateRepositoryFile({
    branch,
    content: updatedContent,
    message,
    owner,
    path,
    repo,
    sha: file.sha,
    token,
  });

  console.log(`Updated ${path} on ${branch}`);
}

async function updateRepositoryFile({ branch, content, message, owner, path, repo, sha, token }) {
  await githubRequest(`/repos/${owner}/${repo}/contents/${path}`, {
    method: "PUT",
    token,
    body: {
      branch,
      message,
      content: Buffer.from(content).toString("base64"),
      sha,
    },
  });
}

function updateLanguageVersion(content, update) {
  return content.replace(/version:\s*"[^"]+"/, `version: "${update.latestVersion}"`);
}

function updateReadmeLanguageVersion(content, update) {
  const importPath = `code-languages/${update.slug}`;
  const rowPattern = new RegExp(
    `^(\\| .*? \\| .*? \\| \`${escapeRegExp(update.slug)}\` \\| .*? \\| )\`?[^|\\n]+\`?( \\| \`${escapeRegExp(importPath)}\` \\|)$`,
    "m",
  );

  return content.replace(rowPattern, `$1\`${update.latestVersion}\`$2`);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function issueMarker(slug) {
  return `<!-- language-version-update:${slug} -->`;
}

function issueTitle(update) {
  return `fix: update ${update.name} metadata to ${update.latestVersion}`;
}

function issueBody(update) {
  return [
    `The automated language version check found a pending ${update.name} update.`,
    "",
    `- Language: ${update.name} (${update.slug})`,
    `- Current version: ${update.version}`,
    `- Detected version: ${update.latestVersion}`,
    `- Source: ${update.sourceUrl}`,
    `- File: \`${update.filePath}\``,
    "",
    "Please verify the upstream source before updating the metadata.",
    "",
    issueMarker(update.slug),
    issueVersionMarker(update.latestVersion),
  ].join("\n");
}

function pullRequestBody(update, issue) {
  const issueLine = issue ? `Closes #${issue.number}` : "Related issue: not found";

  return [
    `Updates ${update.name} metadata to ${update.latestVersion}.`,
    "",
    `- Language: ${update.name} (${update.slug})`,
    `- Previous version: ${update.version}`,
    `- New version: ${update.latestVersion}`,
    `- Source: ${update.sourceUrl}`,
    `- File: \`${update.filePath}\``,
    "",
    issueLine,
    "",
    "This pull request was created by the manual language version check workflow.",
    "",
    issueMarker(update.slug),
    issueVersionMarker(update.latestVersion),
  ].join("\n");
}

function issueVersionMarker(version) {
  return `<!-- detected-version:${version} -->`;
}

function extractDetectedVersion(issue) {
  const bodyVersion = issue.body?.match(/<!-- detected-version:([^>]+) -->/)?.[1];
  const titleVersion = issue.title?.match(/\bmetadata to (.+)$/)?.[1];

  return bodyVersion ?? titleVersion;
}

async function fetchJson(url) {
  const response = await fetchWithHeaders(url);

  return response.json();
}

async function fetchText(url) {
  const response = await fetchWithHeaders(url);

  return response.text();
}

async function fetchWithHeaders(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "code-languages-version-check",
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status} for ${url}`);
  }

  return response;
}

async function githubRequest(path, { allowNotFound = false, body, method = "GET", token }) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "code-languages-version-check",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 404 && allowNotFound) {
    return undefined;
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub request failed with ${response.status}: ${text}`);
  }

  return response.json();
}

function latestSemver(versions) {
  return [...new Set(versions)].sort(compareSemver).at(-1);
}

function latestNumeric(versions) {
  return [...new Set(versions)]
    .map(Number)
    .filter(Number.isFinite)
    .sort((a, b) => a - b)
    .at(-1)
    ?.toString();
}

function compareSemver(left, right) {
  const a = left.split(".").map(Number);
  const b = right.split(".").map(Number);

  for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
    const difference = (a[index] ?? 0) - (b[index] ?? 0);

    if (difference !== 0) {
      return difference;
    }
  }

  return 0;
}

function normalizeVersion(value) {
  return String(value ?? "")
    .replace(/^v/i, "")
    .replace(/^kotlin-?/i, "")
    .trim();
}

function majorMinor(value) {
  const match = String(value ?? "").match(/^(\d+\.\d+)/);

  return match?.[1] ?? value;
}

function normalizeComparable(value) {
  return normalizeVersion(value)
    .replace(/^commonmark\s+/i, "")
    .replace(/^r(\d{4})a$/i, "$1.1")
    .replace(/^r(\d{4})b$/i, "$1.2")
    .replace(/(\d{4})\s+fps(\d+)/i, "$1.$2")
    .trim()
    .toLowerCase();
}

function isUpdateAvailable(currentVersion, latestVersion) {
  const current = normalizeComparable(currentVersion);
  const latest = normalizeComparable(latestVersion);
  const currentSemver = current.match(/\d+(?:\.\d+){0,2}/)?.[0];
  const latestSemver = latest.match(/\d+(?:\.\d+){0,2}/)?.[0];

  if (currentSemver && latestSemver) {
    return compareSemver(currentSemver, latestSemver) < 0;
  }

  return current !== latest;
}

function printReport(report) {
  console.log(`Checked at: ${report.checkedAt}`);
  console.log(`Current: ${report.current.length}`);
  console.log(`Updates: ${report.updates.length}`);
  console.log(`Skipped: ${report.skipped.length}`);
  console.log(`Errors: ${report.errors.length}`);

  for (const update of report.updates) {
    console.log(
      `Update available: ${update.name} ${update.version} -> ${update.latestVersion} (${update.sourceUrl})`,
    );
  }

  for (const error of report.errors) {
    console.log(`Error: ${error.name} (${error.slug}) - ${error.message}`);
  }
}

await main();
