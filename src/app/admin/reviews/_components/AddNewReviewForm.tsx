"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { insertReviewSchema } from "@/db/schema";
import { Textarea } from "@/components/ui/textarea";
import { createReview } from "@/app/actions/reviews-actions";
import toast from "react-hot-toast";

const initialValues: z.infer<typeof insertReviewSchema> = {
	body: "",
	client: "",
	value: "",
};
const AddNewReviewForm = () => {
	const form = useForm({
		resolver: zodResolver(insertReviewSchema),
		defaultValues: initialValues,
	});

	const onSubmit = async (data: z.infer<typeof insertReviewSchema>) => {
		const response = await createReview({
			...data,
		});
		if (response?.data?.success) {
			toast("Created");
			form.reset();
		} else {
			toast("Failed to create review");
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4  "
			>
				<div className="grid grid-cols-1 ">
					<FormField
						control={form.control}
						name="client"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Client</FormLabel>
								<FormControl>
									<Input
										placeholder="Client name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="value"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Value</FormLabel>
								<FormControl>
									<Input
										placeholder="Offered value"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="body"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Body </FormLabel>
								<FormControl>
									<Textarea
										rows={10}
										className="resize-none"
										placeholder="Body "
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex w-full justify-end">
					<Button
						type="submit"
						className="flex px-8 gap-2 active:scale-[95%] items-center"
						disabled={form.formState.isSubmitting}
					>
						<span>create</span>
						{form.formState.isSubmitting && (
							<Loader2 className="h-4 w-4 animate-spin" />
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default AddNewReviewForm;
