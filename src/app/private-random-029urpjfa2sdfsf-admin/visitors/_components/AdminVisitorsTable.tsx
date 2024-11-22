"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	// TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
// import { useToast } from "@/hooks/use-toast";
import { Check, MoreHorizontalIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getVisitors } from "@/data/visitors-data";
import toast from "react-hot-toast";
import { deleteVisitor } from "@/app/actions/visitors-actions";
import { ADMIN_PAGE } from "@/constants";

interface Props {
	data: Awaited<ReturnType<typeof getVisitors>>["data"];
	count: number;
	currentPage: number;
	searchTerm: string;
}

export default function AdminVisitorsTable({
	data,
	count,
	currentPage,
	searchTerm,
}: Props) {
	const router = useRouter();
	const [searchInput, setSearchInput] = useState(searchTerm || "");
	const [debounceTimeout, setDebounceTimeout] =
		useState<NodeJS.Timeout | null>(null);

	// Handle search with debounce
	const handleSearch = (value: string) => {
		setSearchInput(value);

		// Clear previous timeout if user keeps typing
		if (debounceTimeout) {
			clearTimeout(debounceTimeout);
		}

		// Set a new timeout to wait for 500ms before executing search
		const timeout = setTimeout(() => {
			router.push(
				`${ADMIN_PAGE}/dashboard/visitors?search=${value}&page=${currentPage}`,
			);
		}, 500);

		setDebounceTimeout(timeout);
	};

	return (
		<Card className="w-full">
			<CardHeader>
				<div className="flex items-center justify-between space-x-6">
					<CardTitle>Visitors Dashboard</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="min-h-[calc(100vh-328px)]">
				<div className="mb-6 flex flex-col gap-4 md:flex-row">
					<Input
						placeholder="Search Visitors..."
						value={searchInput}
						onChange={(e) => handleSearch(e.target.value)}
						className="md:w-1/3"
					/>
				</div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>IP</TableHead>
							<TableHead>Clicked Pricing</TableHead>
							<TableHead>Pricing</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.ip}</TableCell>
								<TableCell>{item.clickedOnThePricing ?<Check/>:<X/>}</TableCell>
								<TableCell>{item.pricingType??"None" }</TableCell>
								<TableCell>
									{item.createdAt?.toLocaleDateString()}
								</TableCell>
								<TableCell onClick={(e) => e.stopPropagation()}>
									<UserActionsMenu id={item.id} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className="flex w-full justify-center">
				<span className="text-sm text-muted-foreground">
					{count} Visitors
				</span>
			</CardFooter>
		</Card>
	);
}

interface UserActionsMenuProps {
	id: string;
}

export const UserActionsMenu = ({ id }: UserActionsMenuProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="size-8 p-0">
					<MoreHorizontalIcon className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-32">
				<DropdownMenuItem>
					<Button
						className="w-full"
						variant="destructive"
						size="sm"
						onClick={async () => {
							const result = await deleteVisitor({
								id: id,
							});
							if (result?.data?.success) {
								toast("visitor deleted");
							} else {
								toast("Failed to delete visitor");
							}
						}}
					>
						Delete
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
