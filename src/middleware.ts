import { auth } from "@/lib/auth"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Allow access to login page
  if (nextUrl.pathname === "/login") {
    // If already logged in, redirect to dashboard
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl))
    }
    return
  }

  // Protect all other routes
  if (!isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl))
  }
})

export const config = {
  // Protect all routes except API routes, static files, and _next
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} 