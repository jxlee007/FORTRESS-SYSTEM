# File Length Policy

## The 500-Line Limit
This project enforces a strict 500-line limit per file. This policy is in place for several reasons:

- **Cognitive Load:** Smaller files are easier to read, understand, and maintain for human developers.
- **AI Agent Context:** Large language models (LLMs) and AI agents have a limited context window. Keeping files small ensures that the agent can have the full context of a file when working on it.
- **Modularity:** The line limit encourages developers to write smaller, more focused modules that are easier to test and reuse.
- **Code Review:** Smaller files are easier and faster to review.

## How to Split Files
If a file is approaching the 500-line limit, it should be split into smaller files. Here are some guidelines for splitting files:

- **By Responsibility:** Split the file based on the single responsibility principle. Each file should have one clear responsibility.
- **By Feature:** Split the file by feature. For example, a large component could be split into smaller sub-components.
- **By Type:** Split the file by type. For example, a file containing multiple related classes could be split into one file per class.

## Enforcement
The 500-line limit is enforced automatically by the `enforce_line_limit.js` script, which is run as part of the CI/CD pipeline. If a file exceeds the limit, the build will fail.

## Exceptions
In rare cases, it may be necessary to exceed the 500-line limit. For example, a generated file or a file containing a large data structure may not be able to be split. In these cases, an exception can be made by adding the file to the ignore list in the `enforce_line_limit.js` script. However, this should be done sparingly and only with the approval of the project maintainers.
