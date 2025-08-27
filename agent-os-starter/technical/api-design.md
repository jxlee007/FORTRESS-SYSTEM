# API Design

This document describes the design of the Convex API, including endpoints, models, errors, pagination, and Clerk integration points.

## Endpoints

### Users
- `GET /users`: Get a list of all users.
- `GET /users/{id}`: Get a single user by ID.
- `POST /users`: Create a new user.
- `PATCH /users/{id}`: Update an existing user.
- `DELETE /users/{id}`: Delete a user.

### Agents
- `GET /agents`: Get a list of all agents.
- `GET /agents/{id}`: Get a single agent by ID.
- `POST /agents`: Create a new agent.
- `PATCH /agents/{id}`: Update an existing agent.
- `DELETE /agents/{id}`: Delete an agent.

### Tasks
- `GET /tasks`: Get a list of all tasks.
- `GET /tasks/{id}`: Get a single task by ID.
- `POST /tasks`: Create a new task.
- `PATCH /tasks/{id}`: Update an existing task.
- `DELETE /tasks/{id}`: Delete a task.

## Models

### User
```json
{
  "id": "string",
  "email": "string",
  "name": "string",
  "role": "string"
}
```

### Agent
```json
{
  "id": "string",
  "name": "string",
  "prompt": "string",
  "status": "string",
  "userId": "string"
}
```

### Task
```json
{
  "id": "string",
  "description": "string",
  "status": "string",
  "agentId": "string"
}
```

## Errors
- `400 Bad Request`: The request was invalid.
- `401 Unauthorized`: The user is not authenticated.
- `403 Forbidden`: The user is not authorized to perform the action.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.

## Pagination
- The API will use cursor-based pagination.
- The `limit` parameter can be used to specify the number of results to return (default: 20, max: 100).
- The `cursor` parameter can be used to get the next page of results.

## Clerk Integration
- The API will use Clerk for user authentication.
- The `Authorization` header will contain a JWT issued by Clerk.
- The API will use the JWT to identify the user and enforce access control.
