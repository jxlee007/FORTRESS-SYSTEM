# How-To Guides

This document provides task-focused procedural guides to help you accomplish specific goals.

## Integrating with a New API
This guide will show you how to connect your agent to a new third-party API.

### Steps
1.  **Create a new action in `convex/actions.ts`:**
    - This action will be responsible for calling the third-party API.
2.  **Add the API key to your environment variables:**
    - Store the API key securely in your `.env` file.
3.  **Call the action from your frontend:**
    - Use the `useAction` hook to call the action from your React components.
4.  **Update your agent's prompt:**
    - Modify your agent's prompt to include the new capability.

## Customizing the UI
This guide will show you how to customize the look and feel of the application.

### Steps
1.  **Update the design tokens:**
    - Modify the design tokens in `knowledge/design-tokens.md` to match your brand's colors, typography, etc.
2.  **Update the Tailwind CSS configuration:**
    - Map the new design tokens to the Tailwind CSS configuration in `tailwind.config.js`.
3.  **Customize the components:**
    - Copy the components from `node_modules/@shadcn/ui/` to your `components/ui` directory and customize them as you see fit.

## Deploying to Production
This guide will show you how to deploy the application to a production environment.

### Steps
1.  **Configure your hosting provider:**
    - Set up a new project with your hosting provider (e.g., Vercel, Netlify).
2.  **Set up environment variables:**
    - Add your production environment variables to your hosting provider's configuration.
3.  **Connect your Git repository:**
    - Connect your Git repository to your hosting provider to enable automatic deployments.
4.  **Deploy the application:**
    - Push your code to the main branch to trigger a new deployment.
