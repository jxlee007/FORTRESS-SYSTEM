# Testing Guidelines

This document provides guidelines for writing unit, integration, and end-to-end (E2E) tests for all shells of the application.

## Unit Tests
- **Purpose:** To test individual functions or components in isolation.
- **Framework:** [Jest](https://jestjs.io/)
- **Location:** `__tests__` directory next to the file being tested.
- **Guidelines:**
    - Each test case should be independent.
    - Mock all external dependencies.
    - Aim for at least 80% code coverage.

## Integration Tests
- **Purpose:** To test the interaction between multiple components.
- **Framework:** [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Location:** `__tests__` directory in the feature folder.
- **Guidelines:**
    - Test the component as a user would.
    - Avoid testing implementation details.
    - Use mock data to simulate real-world scenarios.

## End-to-End (E2E) Tests
- **Purpose:** To test the application from the user's perspective.
- **Framework:** [Cypress](https://www.cypress.io/)
- **Location:** `cypress/integration` directory.
- **Guidelines:**
    - Test critical user flows.
    - Use a dedicated test environment.
    - Avoid brittle tests that rely on specific UI elements.

## AI Model Testing
- **Purpose:** To test the quality and performance of the AI models.
- **Framework:** [Giskard](https://www.giskard.ai/)
- **Location:** `ai_tests/` directory.
- **Guidelines:**
    - Test for bias, robustness, and performance.
    - Use a variety of test cases to cover different scenarios.
    - Continuously monitor the model's performance in production.

## Running Tests
- **Unit and Integration Tests:** `npm test`
- **E2E Tests:** `npm run cypress:open`
- **AI Model Tests:** `python -m pytest ai_tests/`

## Continuous Integration
- All tests will be run automatically in the CI/CD pipeline on every push to the main branch.
- A build will fail if any of the tests fail.
- Test reports will be published to the CI/CD dashboard.
