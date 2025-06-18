import { Flower } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

interface LoginPageProps {
    searchParams: Promise<{ error?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const { error } = await searchParams;

    async function authenticate(formData: FormData) {
        "use server";

        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        try {
            await signIn("credentials", {
                username,
                password,
                redirectTo: "/",
            });
        } catch (error) {
            // Check if it's a CredentialsSignin error (authentication failed)
            if (
                error instanceof AuthError &&
                error.type === "CredentialsSignin"
            ) {
                redirect(
                    `/login?error=${encodeURIComponent(
                        "Неверный логин или пароль"
                    )}`
                );
            }
            // Only catch actual authentication errors, not redirect errors
            if (error instanceof AuthError) {
                redirect(
                    `/login?error=${encodeURIComponent("Ошибка авторизации")}`
                );
            }
            // Re-throw any other errors (like NEXT_REDIRECT for successful login)
            throw error;
        }
    }

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link
                    href="https://flowers-salon-paris.ru"
                    target="_blank"
                    className="flex items-center gap-2 self-center font-medium"
                >
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <Flower className="size-4" />
                    </div>
                    Paris Flowers
                </Link>
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">
                                Добро пожаловать
                            </CardTitle>
                            <CardDescription>
                                Войдите в панель администратора
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={authenticate}>
                                <div className="grid gap-6">
                                    {error && (
                                        <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md dark:bg-red-950 dark:border-red-800 dark:text-red-400">
                                            {decodeURIComponent(error)}
                                        </div>
                                    )}
                                    <div className="grid gap-3">
                                        <Label htmlFor="username">Логин</Label>
                                        <Input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="admin"
                                            required
                                            className={
                                                error
                                                    ? "border-red-300 focus-visible:ring-red-500"
                                                    : ""
                                            }
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">
                                                Пароль
                                            </Label>
                                        </div>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className={
                                                error
                                                    ? "border-red-300 focus-visible:ring-red-500"
                                                    : ""
                                            }
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="cursor-pointer w-full"
                                    >
                                        Войти
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
