# agents.MD

# Agent OS Starter Kit Generator — Fortress System Implementation

## Overview
This agent specification directs Jules to generate a robust Agent OS starter kit repository. The starter kit implements the Fortress system architecture for SaaS projects with five modular layers: Business, Security, Knowledge, Technical, and Documentation. Each file is capped at 500 lines for optimal agent context management. The repo will be importable into any new or existing project to bootstrap an Agent OS spec-driven development process.

---

## Goals
- Create a clear and shallow folder structure mapped to Fortress layers
- Ensure all files are focused, meaningful, and contextually independent (≤ 500 lines)
- Use Diátaxis documentation framework in the Documentation layer
- Include AI workflow support for LangChain/LangFlow with observability
- Integrate security best practices aligned to OWASP ASVS standards
- Provide automation scripts for enforcing line limits, validating links, and generating TOCs
- Include detailed instructions and SOPs for Agent OS installation and usage

---

## Structure Requirements

- Root folder: `agent-os-starter/`
- Modular subfolders for each Fortress layer:
  - `business/`
  - `security/`
  - `knowledge/`
  - `technical/`
  - `documentation/`
  - `specs/`
  - `instructions/`
  - `scripts/`
  - `recaps/`

- Key root files:
  - README.md explaining repo purpose and usage
  - .env.example for env var placeholders
  - file-length-policy.md outlining ≤500 line rule

---

## File and Purpose Mapping

## File and Purpose Mapping

### Business Layer
- product-context.md: Defines mission, personas, success metrics, key flows, and Figma links  
- roadmap.md: Details release priorities, dependencies, and scope guardrails  
- non-functional-requirements.md: Captures performance, availability, compliance, and cost constraints  

### Security Layer
- security-policy.md: AuthN/Z, data handling, session, transport, and logging policy aligned to ASVS   
- asvs-checklist.md: Feature-level OWASP ASVS verification checklist  
- threat-model.md: Assets, trust boundaries, STRIDE risks, and mitigations  
-api-security.md:Rate-limiting,CORS,CSRF,firewalls,XSS,Injections,error-handling,input-validation,APi-versioning,Usage-api-gateway,HTTPS 

### Knowledge Layer
- glossary.md: Canonical terms to unify team and agent understanding  
- domain-concepts.md: Entities, relationships, invariants, and lifecycles definitions  
- design-tokens.md: Color, typography, spacing, animation tokens for cross-platform design  
- ux-guidelines.md: UX patterns for merged desktop/mobile components and interaction rules  

### Technical Layer
- api-design.md: Convex API endpoints, models, errors, pagination, Clerk integration points  
- auth-integration.md: Clerk session, billing flows, token refresh, and error states  
- notification-system.md: Events, channels, retries, and UX contracts for desktop and mobile  
- ai-workflows.md: LangChain/LangFlow orchestration, agent roles, memory, and guardrails  
- langchain-config.md: LangChain model, provider, routing, persistence, and eval config  
- langflow-config.md: LangFlow import/export, environment, and tracing setup  
- prompt-templates.md: Reusable prompts with inputs, constraints, outputs, and fallbacks  
- ai-observability.md: LangSmith/Langfuse tracing, metrics, and error taxonomy  
- testing-guidelines.md: Unit, integration, and E2E test standards for all shells  
- devops-config.md: CI caching, pruned builds, env var scopes, and Turborepo/Nx config  
- clerk-integration.md: Provider setup, webhooks, session, and billing patterns  
- convex-integration.md: Schema, serverless functions, auth middleware, and access patterns  
- nextjs-integration.md: App router, SSR/ISR strategies, API routes, and edge considerations  
- react-native-integration.md: Navigation, storage, offline, push, and react-native-web notes  
- shadcn-ui-integration.md: Composition, tokens mapping, and accessibility best practices  

### Documentation Layer
- docs-index.md: Diátaxis documentation map linking tutorials, how-to guides, references, and explanations  
- tutorials.md: Step-by-step learning materials  
- how-to-guides.md: Task-focused procedural guides  
- reference.md: Factual API, CLI, and config references  
- explanation.md: Background and conceptual overviews  

### Specs Folder
- spec-template.md: Atomic feature spec template with acceptance criteria  
- example-auth.md: Sample spec illustrating auth and billing workflows  
- example-notifications.md: Sample spec for notification flows and retry logic  

### Instructions Folder
- setup-sop.md: Standard operating procedure for installing and using Agent OS  
- new-project-checklist.md: Quick checklist to start fresh with this starter repo  
- spec-review-checklist.md: QA checklist to ensure spec clarity and completeness  
- security-review-checklist.md: ASVS mapped security review gates  
- release-checklist.md: Instructions to cut, tag, verify, announce, and rollback releases  

### Scripts Folder
- enforce_line_limit.js: CI script to fail builds if any file exceeds 500 lines  
- validate_internal_links.js: Verifies cross-file markdown links are valid  
- generate_toc.js: Automated table of contents generation per file for navigation  

### Recaps Folder
- recap-template.md: Post-task and post-release retrospective template to capture lessons and improvements  


---

## Content Guidelines

- Each markdown file should start with a concise header describing its purpose
- Include clear instructions, acceptance criteria, or conceptual overviews per file
- Make use of cross-links to related files where relevant to reduce duplication
- File content must not exceed 500 lines
- Scripts should be well-commented and designed for easy CI integration

---

## Workflow Instructions for Jules

1. Generate the root `agent-os-starter/` folder.
2. Create each subfolder as per the Fortress system layers plus supporting folders.
3. Populate each folder with the described markdown or script file, following content guidelines.
4. Ensure headers and file descriptions are clear and informative.
5. Add a top-level README.md that explains:
   - The repo purpose
   - Layer explanations
   - How to import and use in new/existing projects
   - The 500-line file length policy
   - Basic instructions for running the included scripts
6. Create `.env.example` with placeholders for environment variables typical of SaaS and AI workflows.
7. Include a file-length-policy.md describing why the 500-line limit exists and how to split files as needed.
8. Populate example files in `specs/` with minimal but clear specifications.
9. Add script files with robust comments to ensure easy modification and reuse.
10. Finish with a recap template in `recaps/` to log lessons and improvements per project/import.

---
## Best Practices Enforcement

- Use consistent markdown formatting and clear, human-readable language
- Apply modular separation reflecting Fortress layers
- Minimize file interdependency beyond explicit cross-references
- Follow Diátaxis principles in documentation files (tutorials, how-tos, references, explanations)
- Align security files with OWASP ASVS mapping and principle-based threat modeling
- Design AI workflow files supporting LangChain and LangFlow with observability hooks
- Make scripts idempotent and simple to integrate into CI/CD pipelines
  
---
## Example Top-Level README.md Excerpt
