"use client";
import { DollarSign, TextCursor, Home, Inbox } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ADMIN_PAGE } from "@/constants";
import Link from "next/link";

// Menu items.
const items = [
	{
		title: "Dashboard",
		url: `${ADMIN_PAGE}`,
		icon: Home,
	},
	{
		title: "Newsletter",
		url: `${ADMIN_PAGE}/newsletter`,
		icon: Inbox,
	},
	{
		title: "Pricing",
		url: `${ADMIN_PAGE}/pricing`,
		icon: DollarSign,
	},
	{
		title: "Reviews",
		url: `${ADMIN_PAGE}/reviews`,
		icon: TextCursor,
	},
];

export default function AdminSideBar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
												<item.icon />
												<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
