export { auth as middleware } from "@/lib/auth";

export const config = {
    // Protect all routes except API routes, static files, and _next
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
