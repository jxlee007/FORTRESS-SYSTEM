# Convex Integration Patterns

This document describes the patterns for integrating Convex for schema definition, serverless functions, authentication middleware, and access patterns.

## Schema
- **File:** The database schema will be defined in `convex/schema.ts`.
- **Tables:** Tables will be defined using the `defineTable` function.
- **Indexes:** Indexes will be defined using the `index` method to optimize queries.

## Serverless Functions
- **Location:** Serverless functions will be defined in the `convex/` directory.
- **Types:**
    - **Queries:** For reading data from the database. Defined with `query`.
    - **Mutations:** For writing data to the database. Defined with `mutation`.
    - **Actions:** For running server-side logic that may have side effects (e.g., calling a third-party API). Defined with `action`.

## Authentication Middleware
- **Clerk Integration:** Convex will be integrated with Clerk for authentication.
- **`auth.ts`:** An `auth.ts` file will be created in the `convex/` directory to configure the JWT provider.
- **Authenticated Functions:** The `ctx.auth` object will be used in serverless functions to get the authenticated user's information.

## Access Patterns
- **`useQuery` Hook:** The `useQuery` hook from the `convex/react` package will be used to subscribe to query results in real-time.
- **`useMutation` Hook:** The `useMutation` hook will be used to call mutations from the frontend.
- **`useAction` Hook:** The `useAction` hook will be used to call actions from the frontend.

## Example: Authenticated Query
```typescript
// convex/myFunctions.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getMyData = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated call to query");
    }
    // Return data for the authenticated user
    return await ctx.db
      .query("myTable")
      .withIndex("by_user", (q) => q.eq("userId", identity.subject))
      .collect();
  },
});
```
