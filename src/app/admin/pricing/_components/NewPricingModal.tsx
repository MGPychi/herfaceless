import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import PricingForm from "./NewPricingForm";

export default function NewPricingModal() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">
					<PlusCircle className="mr-2 h-4 w-4" />
					New Pricing Plan
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] md:max-w-[700px] max-h-[95vh] overflow-y-scroll">
				<DialogHeader>
					<DialogTitle>Create New Pricing Plan</DialogTitle>
					<DialogDescription className="py-2">
						Fill out the form below to create a new pricing plan.
						Click submit when you are done.
					</DialogDescription>
				</DialogHeader>
				<PricingForm />
			</DialogContent>
		</Dialog>
	);
}
