import {
  type ClerkMiddlewareAuth,
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server'
import type { NextRequest } from 'next/server'

const isPrivateRoute = createRouteMatcher(['/area-restrita(.*)'])

export default clerkMiddleware(
  async (auth: ClerkMiddlewareAuth, req: NextRequest) => {
    const { redirectToSignIn, userId } = await auth()

    if (isPrivateRoute(req) && !userId) {
      redirectToSignIn()
    }
  }
)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
