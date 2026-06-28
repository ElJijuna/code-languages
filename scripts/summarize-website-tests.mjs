import { readFile, rm, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const inputFile = new URL('../docs/data/unit-results.json', import.meta.url);
const outputFile = new URL('../docs/data/unit-summary.json', import.meta.url);
const report = JSON.parse(await readFile(inputFile, 'utf8'));
const files = report.testResults.map((result) => {
  const assertions = result.assertionResults ?? [];

  return {
    file: basename(result.name),
    path: result.name,
    status: result.status,
    tests: assertions.length,
    passed: assertions.filter((assertion) => assertion.status === 'passed').length,
    failed: assertions.filter((assertion) => assertion.status === 'failed').length,
    durationMs: Math.max(0, (result.endTime ?? result.startTime) - result.startTime),
  };
});
const summary = {
  generatedAt: new Date().toISOString(),
  success: report.success,
  totalSuites: report.numTotalTestSuites,
  passedSuites: report.numPassedTestSuites,
  failedSuites: report.numFailedTestSuites,
  totalTests: report.numTotalTests,
  passedTests: report.numPassedTests,
  failedTests: report.numFailedTests,
  files: files.sort((first, second) => first.file.localeCompare(second.file)),
};

await writeFile(outputFile, `${JSON.stringify(summary, null, 2)}\n`);
await rm(inputFile, { force: true });

console.log(
  `Generated website unit test summary: ${summary.passedTests}/${summary.totalTests} passing.`,
);
