# Domain Concepts

This document defines the key entities, relationships, and invariants of the domain.

## Entities

### User
- **Description:** A person who uses the application.
- **Attributes:**
    - `id`: A unique identifier.
    - `email`: The user's email address.
    - `name`: The user's name.
    - `role`: The user's role (e.g., 'admin', 'user').
- **Relationships:**
    - A User can have many Agents.

### Agent
- **Description:** An AI agent that performs tasks on behalf of a user.
- **Attributes:**
    - `id`: A unique identifier.
    - `name`: The name of the agent.
    - `prompt`: The prompt that defines the agent's behavior.
    - `status`: The current status of the agent (e.g., 'active', 'inactive').
- **Relationships:**
    - An Agent belongs to a User.

### Task
- **Description:** A unit of work to be performed by an Agent.
- **Attributes:**
    - `id`: A unique identifier.
    - `description`: A description of the task.
    - `status`: The current status of the task (e.g., 'pending', 'in_progress', 'completed').
- **Relationships:**
    - A Task is assigned to an Agent.

## Invariants
- A User's email address must be unique.
- An Agent must always belong to a User.
- A Task must always be assigned to an Agent.

## Lifecycles

### User Lifecycle
1.  **Registration:** A new user registers for an account.
2.  **Activation:** The user activates their account via email.
3.  **Usage:** The user interacts with the application.
4.  **Deactivation:** The user deactivates their account.

### Agent Lifecycle
1.  **Creation:** A user creates a new agent.
2.  **Configuration:** The user configures the agent's prompt and other settings.
3.  **Activation:** The user activates the agent.
4.  **Execution:** The agent performs tasks.
5.  **Deactivation:** The user deactivates the agent.

### Task Lifecycle
1.  **Creation:** A user creates a new task.
2.  **Assignment:** The task is assigned to an agent.
3.  **Execution:** The agent performs the task.
4.  **Completion:** The task is marked as completed.
