# Next.js Integration Patterns

This document describes the patterns for integrating Next.js, including the App Router, SSR/ISR strategies, API routes, and edge considerations.

## App Router
- **Structure:** The application will use the App Router for routing.
- **Layouts:** Layouts will be used to share UI between multiple pages.
- **Pages:** Pages will be used to define the UI for a specific route.
- **Loading UI:** A loading UI will be created to show a loading state while a page is being rendered.
- **Error Handling:** An error UI will be created to show an error state if a page fails to render.

## SSR/ISR Strategies
- **Server-Side Rendering (SSR):** Used for pages that require fresh data on every request.
- **Incremental Static Regeneration (ISR):** Used for pages that can be statically generated at build time and revalidated periodically.
- **Static Site Generation (SSG):** Used for pages that are completely static and do not require any data fetching.

## API Routes
- **Location:** API routes will be defined in the `app/api/` directory.
- **Route Handlers:** Route handlers will be used to create API endpoints.
- **Use Cases:**
    - Handling webhooks from third-party services.
    - Providing a backend for the frontend application.
    - Interacting with the Convex database.

## Edge Considerations
- **Edge Functions:** Edge functions will be used for performance-critical API routes.
- **Middleware:** Middleware will be used to run code before a request is completed.
- **Use Cases for Edge:**
    - A/B testing
    - Geolocation
    - Authentication

## Example: API Route
```typescript
// app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello, World!' })
}
```

## Example: SSR Page
```jsx
// app/posts/[id]/page.tsx
async function getPost(id) {
  const res = await fetch(`https://.../posts/${id}`)
  const post = await res.json()
  return post
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
```
