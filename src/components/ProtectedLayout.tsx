import { auth } from "@/lib/auth";
import { AppLayout } from "./AppLayout";
import SessionProvider from "./SessionProvider";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        return null; // This should not happen due to middleware, but just in case
    }

    return (
        <SessionProvider>
            <AppLayout>{children}</AppLayout>
        </SessionProvider>
    );
}
