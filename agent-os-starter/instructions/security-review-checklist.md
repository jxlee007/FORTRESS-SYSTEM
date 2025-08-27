# Security Review Checklist

This checklist should be used to ensure that new features are secure before they are released. It is based on the OWASP ASVS.

## V1: Architecture, Design and Threat Modeling
- [ ] Has a threat model been created for the new feature?
- [ ] Have the security implications of the new feature been considered in the design?

## V2: Authentication
- [ ] Does the new feature properly enforce authentication controls?
- [ ] Are there any new authentication-related risks introduced by the new feature?

## V3: Session Management
- [ ] Does the new feature properly handle session management?
- [ ] Are there any new session management-related risks introduced by the new feature?

## V4: Access Control
- [ ] Does the new feature properly enforce access control?
- [ ] Are there any new access control-related risks introduced by the new feature?

## V5: Malicious Input Handling
- [ ] Is all input to the new feature properly validated and sanitized?
- [ ] Is the new feature protected against common injection attacks?

## V6: Cryptography at Rest
- [ ] Is all sensitive data handled by the new feature encrypted at rest?
- [ ] Are strong, industry-standard encryption algorithms used?

## V7: Error Handling and Logging
- [ ] Do error messages in the new feature avoid revealing sensitive information?
- [ ] Are all security-related events in the new feature logged?

## V8: Data Protection
- [ ] Is all PII handled by the new feature in accordance with privacy regulations?
- [ ] Are data retention policies enforced for any new data introduced by the feature?

## V9: Communications
- [ ] Is all communication in the new feature encrypted using TLS?
- [ ] Are strong cipher suites used?

## V10: Malicious Code
- [ ] Does the new feature introduce any new third-party libraries? If so, have they been vetted for security?

## V11: Business Logic
- [ ] Is the new feature protected against business logic flaws?
- [ ] Has the business logic of the new feature been thoroughly tested?

## V12: Files and Resources
- [ ] If the new feature handles file uploads, are they properly validated and handled?
- [ ] Is the new feature protected against path traversal attacks?

## V13: API and Web Service
- [ ] Is the API for the new feature properly secured?
- [ ] Are all API requests for the new feature authenticated and authorized?

## V14: Configuration
- [ ] Is the new feature securely configured?
- [ ] Are there any new configuration settings introduced by the new feature? Are they documented?
