# Clerk Integration Patterns

This document describes the patterns for integrating Clerk for provider setup, webhooks, session management, and billing.

## Provider Setup
- **React Provider:** The `<ClerkProvider>` component will be used to wrap the root of the React application.
- **Publishable Key:** The Clerk publishable key will be stored as an environment variable and passed to the provider.

## Webhooks
- **Endpoint:** A dedicated API endpoint will be created to handle webhooks from Clerk.
- **Signature Verification:** The signature of all incoming webhooks will be verified to ensure they are from Clerk.
- **Events:** The application will handle the following webhook events:
    - `user.created`
    - `user.updated`
    - `user.deleted`
    - `session.created`
    - `session.ended`

## Session Management
- **`useAuth` Hook:** The `useAuth` hook will be used to access the user's authentication state.
- **`useUser` Hook:** The `useUser` hook will be used to access the user's profile information.
- **Protected Routes:** The `<SignedIn>` and `<SignedOut>` components will be used to create protected routes.

## Billing
- **Stripe Integration:** Clerk will be integrated with Stripe for billing.
- **Subscription Management:** The application will use Clerk's billing components to allow users to manage their subscriptions.
- **Webhook Handling:** The application will handle Stripe webhook events forwarded by Clerk to update the user's subscription status.

## Example: Protected Route
```jsx
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <SignedIn>
        <DashboardPage />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
```
