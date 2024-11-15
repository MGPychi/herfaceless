"use client";
import { DialogHeader } from "@/components/ui/dialog";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import UpdatePricingForm from "./UpdatePricingForm";
import { z } from "zod";
import { updatePricingSchema } from "@/db/schema";
interface Props {
	pricing: z.infer<typeof updatePricingSchema>;
    isOpen:boolean;
    setIsOpen:(value:boolean)=>void
}
export default function UpdatePricingModal({ pricing,isOpen,setIsOpen }: Props) {

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="sm:max-w-[425px] md:max-w-[700px] max-h-[95vh] overflow-y-scroll">
				<DialogHeader>
					<DialogTitle>Update Pricing Plan</DialogTitle>
					<DialogDescription className="py-2">
						Fill out the form below to create a update pricing plan.
						Click submit when you are done.
					</DialogDescription>
				</DialogHeader>
				<UpdatePricingForm pricing={pricing} />
			</DialogContent>
		</Dialog>
	);
}
