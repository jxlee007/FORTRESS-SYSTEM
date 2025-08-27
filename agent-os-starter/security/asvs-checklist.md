# OWASP Application Security Verification Standard (ASVS) Checklist

This checklist is based on the OWASP ASVS 4.0. It should be used to verify the security of the application at each stage of the development lifecycle.

## V1: Architecture, Design and Threat Modeling
- [ ] 1.1 Verify that there is a security architecture document.
- [ ] 1.2 Verify that the system is designed with a secure-by-default approach.
- [ ] 1.3 Verify that a threat model has been created for the system.

## V2: Authentication
- [ ] 2.1 Verify that all authentication controls are implemented on a trusted system.
- [ ] 2.2 Verify that password policies are enforced.
- [ ] 2.3 Verify that MFA is available and enforced for privileged users.

## V3: Session Management
- [ ] 3.1 Verify that session tokens are generated with sufficient entropy.
- [ ] 3.2 Verify that session tokens are protected against disclosure.
- [ ] 3.3 Verify that session tokens are invalidated upon logout.

## V4: Access Control
- [ ] 4.1 Verify that the principle of least privilege is enforced.
- [ ] 4.2 Verify that access control decisions are made on the server side.
- [ ] 4.3 Verify that access control rules are regularly reviewed.

## V5: Malicious Input Handling
- [ ] 5.1 Verify that all input is validated on the server side.
- [ ] 5.2 Verify that the application is protected against Cross-Site Scripting (XSS).
- [ ] 5.3 Verify that the application is protected against SQL injection.

## V6: Cryptography at Rest
- [ ] 6.1 Verify that all sensitive data is encrypted at rest.
- [ ] 6.2 Verify that strong, industry-standard encryption algorithms are used.
- [ ] 6.3 Verify that cryptographic keys are securely managed.

## V7: Error Handling and Logging
- [ ] 7.1 Verify that error messages do not reveal sensitive information.
- [ ] 7.2 Verify that all security-related events are logged.
- [ ] 7.3 Verify that logs are protected against tampering.

## V8: Data Protection
- [ ] 8.1 Verify that PII is handled in accordance with privacy regulations.
- [ ] 8.2 Verify that data retention policies are enforced.
- [ ] 8.3 Verify that data is securely disposed of when no longer needed.

## V9: Communications
- [ ] 9.1 Verify that all communication is encrypted using TLS.
- [ ] 9.2 Verify that strong cipher suites are used.
- [ ] 9.3 Verify that the server is not vulnerable to known TLS attacks.

## V10: Malicious Code
- [ ] 10.1 Verify that the application is protected against the inclusion of malicious code.
- [ ] 10.2 Verify that all third-party libraries are from trusted sources.
- [ ] 10.3 Verify that a process is in place to regularly scan for vulnerabilities in third-party libraries.

## V11: Business Logic
- [ ] 11.1 Verify that the application is protected against business logic flaws.
- [ ] 11.2 Verify that all business logic flows are documented and tested.
- [ ] 11.3 Verify that the application is resilient to unexpected user behavior.

## V12: Files and Resources
- [ ] 12.1 Verify that file uploads are properly validated and handled.
- [ ] 12.2 Verify that the application is protected against path traversal attacks.
- [ ] 12.3 Verify that access to sensitive files and resources is restricted.

## V13: API and Web Service
- [ ] 13.1 Verify that the API is properly secured.
- [ ] 13.2 Verify that all API requests are authenticated and authorized.
- [ ] 13.3 Verify that the API is protected against common attacks such as replay attacks.

## V14: Configuration
- [ ] 14.1 Verify that the application is securely configured.
- [ ] 14.2 Verify that all security-related configuration settings are documented.
- [ ] 14.3 Verify that the application does not use any default credentials.
