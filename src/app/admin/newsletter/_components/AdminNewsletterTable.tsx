"use client";
import { getNewsletter } from "@/data/newsletter-data";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
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
import { deleteNewsletter } from "@/app/actions/newsletter-actions";

// import { deleteEmailAction } from "../actions";

interface Props {
	data: Awaited<ReturnType<typeof getNewsletter>>["data"];
	count: number;
	currentPage: number;
	searchTerm: string;
}

export default function AdminNewsletterTable({
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
				`/admin/newsletter?search=${value}&page=${currentPage}`,
			);
		}, 500);

		setDebounceTimeout(timeout);
	};

	return (
		<Card className="w-full">
			<CardHeader>
				<div className="flex items-center justify-between space-x-6">
					<CardTitle>Newsletter Dashboard</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="min-h-[calc(100vh-328px)]">
				<div className="mb-6 flex flex-col gap-4 md:flex-row">
					<Input
						placeholder="Search newsletter..."
						value={searchInput}
						onChange={(e) => handleSearch(e.target.value)}
						className="md:w-1/3"
					/>
				</div>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Paid</TableHead>
							<TableHead>Registred at</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.name ?? "None"}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>
									{item.isPaid ? (
										<Check className="text-gray-500" />
									) : (
										<X className="text-red-400" />
									)}
								</TableCell>
								<TableCell>
									{item.createdAt?.toLocaleDateString()}
								</TableCell>
								<TableCell>
									<NewsletterActionsMenu userId={item.id} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className="flex w-full justify-center">
				<span className="text-sm text-muted-foreground">
					{count} newsletter
				</span>
			</CardFooter>
		</Card>
	);
}

interface NewsletterActionsMenuProps {
	userId: string;
}

export const NewsletterActionsMenu = ({
	userId,
}: NewsletterActionsMenuProps) => {
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
							const result = await deleteNewsletter({
								id: userId,
							});
							if (result?.data?.success) {
								toast("deleted");
							} else {
								toast("unable to delete");
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
