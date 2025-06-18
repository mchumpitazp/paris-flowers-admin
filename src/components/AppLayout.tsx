"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./ModeToggle";
import { Breadcrumbs } from "./Breadcrumbs";

interface AppLayoutProps {
    children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-1 flex-col overflow-x-hidden">
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-2 sm:px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumbs />
                    </div>
                    <div className="invisible px-2 sm:px-4">
                        <ModeToggle />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-2 sm:p-4 pt-0 overflow-x-hidden">
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 w-full">
                        {children}
                    </div>
                </div>
            </main>
        </SidebarProvider>
    );
}
