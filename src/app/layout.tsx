import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProtectedLayout from "@/components/ProtectedLayout";
import { auth } from "@/lib/auth";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Paris Flowers Admin",
    description: "Admin panel for Paris Flowers",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    const isLoginPage = !session; // If no session, assume it's login page due to middleware

    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {isLoginPage ? (
                            children
                        ) : (
                            <ProtectedLayout>{children}</ProtectedLayout>
                        )}
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
