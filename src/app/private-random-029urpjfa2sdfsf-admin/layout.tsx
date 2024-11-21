import { getUserOrRedirectToLogin } from "@/lib/auth";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";
import AdminSideBar from "./_components/AdminSidebar";

export const metadata: Metadata = {
	title: "Admin dashboard",
};

export default async function Layout({ children }: { children: ReactNode }) {
	await getUserOrRedirectToLogin();

	return (
		<SidebarProvider>
			<AdminSideBar />
			<main className="w-full px-4 py-4 space-y-4">
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
