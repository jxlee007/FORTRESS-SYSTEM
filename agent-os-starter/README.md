# Agent OS Starter Kit

This repository provides a robust starter kit for building SaaS projects using the Fortress system architecture. It is designed to be used with AI agents like Jules to accelerate the development process.

## Fortress System Architecture
The starter kit is organized into five modular layers:

- **`business/`:** Defines the mission, roadmap, and requirements of the project.
- **`security/`:** Implements security best practices to protect the application and its users.
- **`knowledge/`:** Contains the domain knowledge and design tokens for the project.
- **`technical/`:** Includes the code and configuration for the application.
- **`documentation/`:** Provides documentation for the project.

This modular architecture makes it easy to understand, maintain, and extend the application.

## How to Use
1.  Clone this repository.
2.  Follow the instructions in `instructions/setup-sop.md` to set up a new project.
3.  Use the checklists in the `instructions/` directory to guide you through the development process.

## 500-Line File Length Policy
To ensure that the code remains manageable and easy to understand for both humans and AI agents, this project enforces a 500-line limit per file. See `file-length-policy.md` for more details.

## Scripts
This repository includes several scripts to help you maintain the quality of your code:

- **`enforce_line_limit.js`:** Checks that all files are within the 500-line limit.
- **`validate_internal_links.js`:** Validates that all internal markdown links are valid.
- **`generate_toc.js`:** Generates a table of contents for each markdown file.

To run the scripts, use the following commands:
```bash
node scripts/enforce_line_limit.js
node scripts/validate_internal_links.js
node scripts/generate_toc.js
```
