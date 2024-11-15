"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Search, User } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
} from "@/components/ui/sidebar";

const versions = ["1.0.0", "1.1.0", "2.0.0-beta"];

const navItems = [
	{
		title: "Getting Started",
		items: [
			{ title: "Introduction", url: "#" },
			{ title: "Installation", url: "#" },
		],
	},
	{
		title: "Components",
		items: [
			{ title: "Button", url: "#" },
			{ title: "Dropdown", url: "#" },
			{ title: "Sidebar", url: "#", isActive: true },
		],
	},
	{
		title: "Guides",
		items: [
			{ title: "Authentication", url: "#" },
			{ title: "Deployment", url: "#" },
		],
	},
];

export default function Component() {
	const [selectedVersion, setSelectedVersion] = React.useState(versions[0]);

	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton
										size="lg"
										className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
									>
										<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
											<ChevronsUpDown className="size-4" />
										</div>
										<div className="flex flex-col gap-0.5 leading-none">
											<span className="font-semibold">
												Documentation
											</span>
											<span className="text-xs">
												v{selectedVersion}
											</span>
										</div>
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="w-[--radix-dropdown-menu-trigger-width]"
									align="start"
								>
									{versions.map((version) => (
										<DropdownMenuItem
											key={version}
											onSelect={() =>
												setSelectedVersion(version)
											}
										>
											v{version}{" "}
											{version === selectedVersion && (
												<Check className="ml-auto" />
											)}
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					</SidebarMenu>
					<SidebarGroup className="py-0">
						<SidebarGroupContent className="relative">
							<Label htmlFor="search" className="sr-only">
								Search
							</Label>
							<Input
								id="search"
								placeholder="Search..."
								className="pl-8"
							/>
							<Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarHeader>
				<SidebarContent>
					{navItems.map((section) => (
						<SidebarGroup key={section.title}>
							<SidebarGroupLabel>
								{section.title}
							</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									{section.items.map((item) => (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton
												asChild
												isActive={item.isActive}
											>
												<a href={item.url}>
													{item.title}
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					))}
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton size="lg">
										<User className="size-4" />
										<span>John Doe</span>
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="start"
									className="w-[--radix-dropdown-menu-trigger-width]"
								>
									<DropdownMenuItem>Profile</DropdownMenuItem>
									<DropdownMenuItem>
										Settings
									</DropdownMenuItem>
									<DropdownMenuItem>Logout</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
				<SidebarRail />
			</Sidebar>
		</SidebarProvider>
	);
}
