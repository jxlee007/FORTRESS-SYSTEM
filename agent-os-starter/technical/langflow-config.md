# LangFlow Configuration

This document describes the configuration of LangFlow, including import/export, environment, and tracing setup.

## Import/Export
- **Format:** LangFlow workflows will be exported as JSON files.
- **Storage:** Exported workflows will be stored in the `specs/` directory.
- **Versioning:** Workflows will be versioned using Git.

## Environment
- **Local Development:** LangFlow will be run locally as a Docker container.
- **Production:** LangFlow will be deployed to a cloud service such as [Google Cloud Run](https://cloud.google.com/run).
- **Environment Variables:** All necessary environment variables (e.g., API keys) will be stored in a `.env` file and loaded into the LangFlow environment.

## Tracing
- **LangSmith:** LangFlow will be integrated with LangSmith for tracing and debugging.
- **Traces:** All runs will be traced, and the traces will be stored in LangSmith.
- **Debugging:** Traces will be used to debug issues with the AI workflows.

## Example Workflow Export
```json
{
  "data": {
    "nodes": [
      {
        "id": "OpenAI-1",
        "data": {
          "node": {
            "template": {
              "model_name": {
                "type": "str",
                "required": true,
                "list": false,
                "show": true,
                "placeholder": "text-davinci-003",
                "value": "gpt-4"
              }
            }
          }
        }
      }
    ]
  }
}
```

## Setup Instructions
1.  Install Docker.
2.  Run `docker-compose up` to start the LangFlow container.
3.  Open `http://localhost:7860` in your browser.
4.  Import a workflow from the `specs/` directory.
5.  Configure the necessary environment variables in the LangFlow UI.
6.  Run the workflow.
