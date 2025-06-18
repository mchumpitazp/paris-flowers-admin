import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Simple hardcoded admin credentials - you can change these
                if (
                    credentials?.username === process.env.ADMIN_USERNAME &&
                    credentials?.password === process.env.ADMIN_PASSWORD
                ) {
                    return {
                        id: "1",
                        name: "Admin",
                        email: "admin@parisflowers.ru",
                    };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnLogin = nextUrl.pathname === "/login";

            // If logged in and trying to access login, redirect to home
            if (isLoggedIn && isOnLogin) {
                return Response.redirect(new URL("/", nextUrl));
            }

            // Allow access to login page when not authenticated
            if (isOnLogin) {
                return true;
            }

            // Protect all other routes - require authentication
            if (!isLoggedIn) {
                return Response.redirect(new URL("/login", nextUrl));
            }

            return true;
        },
    },
    secret: process.env.AUTH_SECRET,
    session: { strategy: "jwt" },
    trustHost: true,
});
