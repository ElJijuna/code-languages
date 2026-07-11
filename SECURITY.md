# Security Policy

## Supported Versions

`code-languages` is released continuously via [semantic-release](https://semantic-release.gitbook.io/) directly from `main`; there are no maintained release branches. Only the latest published version on npm receives security fixes.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest | :x:                |

If you are on an older version, please upgrade to the latest release before reporting an issue, to confirm it is still reproducible.

## Reporting a Vulnerability

Please **do not** report security vulnerabilities through public GitHub issues, discussions, or pull requests.

Instead, report it privately using one of the following channels:

1. **Preferred:** Use GitHub's [private vulnerability reporting](https://github.com/ElJijuna/code-languages/security/advisories/new) for this repository (Security tab → "Report a vulnerability").
2. **Alternative:** Email [pilmee@gmail.com](mailto:pilmee@gmail.com) with a description of the issue.

Please include as much of the following as you can:

- A description of the vulnerability and its potential impact.
- Steps to reproduce, or a minimal proof-of-concept.
- The affected version(s) of `code-languages`.
- Any known mitigations or workarounds.

### What to expect

- Acknowledgement of your report within **5 business days**.
- An initial assessment of the report, including whether it is accepted or declined, within **10 business days**.
- If accepted, a fix will be prioritized and released as a patch version; you will be credited in the advisory unless you prefer to remain anonymous.
- If declined, an explanation of why the report does not qualify as a vulnerability.

### Scope

`code-languages` is a zero-runtime-dependency TypeScript data library: it ships static, structured metadata about programming languages plus small, pure lookup/detection/localization functions. It performs no network requests, file system access, dynamic code evaluation, or handling of untrusted user input at runtime.

In-scope examples:

- Prototype pollution, code injection, or ReDoS in any exported function (`detectLanguage`, `localizeLanguage`, `api.*`, etc.).
- Malicious or unsafe content embedded in package metadata or generated build output (`dist/`).
- Supply-chain issues in the published npm package (e.g. `package.json`, `exports` map, or build artifacts diverging from source).

Out-of-scope examples:

- Vulnerabilities in `devDependencies` that do not ship in the published package (report those upstream instead).
- Issues that only reproduce in the documentation website (`docs/`) build tooling, which is not part of the published package.
- Data accuracy issues (incorrect language metadata, outdated versions, broken logo URLs) — please file those as a regular [GitHub issue](https://github.com/ElJijuna/code-languages/issues) instead.
