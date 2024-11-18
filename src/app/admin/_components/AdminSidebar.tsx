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

// Menu items.
const items = [
	{
		title: "Dashboard",
		url: "/admin/dashboard",
		icon: Home,
	},
	{
		title: "Newsletter",
		url: "/admin/newsletter",
		icon: Inbox,
	},
	{
		title: "Pricing",
		url: "/admin/pricing",
		icon: DollarSign,
	},
	{
		title: "Reviews",
		url: "/admin/reviews",
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
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
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
