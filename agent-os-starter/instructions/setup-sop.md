# Standard Operating Procedure: Setting Up a New Project

This SOP describes the steps to set up a new project using the Agent OS starter kit.

## 1. Clone the Starter Kit
Clone the `agent-os-starter` repository to your local machine.
```bash
git clone https://github.com/your-username/agent-os-starter.git new-project
cd new-project
```

## 2. Initialize a New Git Repository
Remove the existing Git history and initialize a new repository.
```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit from Agent OS starter kit"
```

## 3. Create a New GitHub Repository
Create a new repository on GitHub and push your local repository to it.
```bash
git remote add origin https://github.com/your-username/new-project.git
git push -u origin master
```

## 4. Install Dependencies
Install the project dependencies using npm.
```bash
npm install
```

## 5. Configure Environment Variables
- Rename `.env.example` to `.env`.
- Fill in the required environment variables for your project.
- **Do not commit the `.env` file to Git.**

## 6. Set Up Third-Party Services
- **Clerk:** Create a new project in Clerk and get your publishable key and secret key.
- **Convex:** Create a new project in Convex and get your deployment URL.
- **Stripe:** Create a new account in Stripe and get your API keys.
- **SendGrid:** Create a new account in SendGrid and get your API key.
- **OpenAI:** Create a new account in OpenAI and get your API key.

## 7. Customize the Project
- **Update `README.md`:** Update the `README.md` file with information about your project.
- **Update `business/` files:** Update the files in the `business/` directory with your project's mission, roadmap, and requirements.
- **Update `knowledge/` files:** Update the files in the `knowledge/` directory with your project's domain concepts and design tokens.
- **Delete example files:** Delete the example files in the `specs/` directory.

## 8. Run the Development Server
Start the development server to make sure everything is working correctly.
```bash
npm run dev
```

## 9. Deploy to Production
- Set up a new project with your hosting provider (e.g., Vercel).
- Add your production environment variables to your hosting provider's configuration.
- Connect your Git repository to your hosting provider to enable automatic deployments.
- Push your code to the main branch to trigger a new deployment.
