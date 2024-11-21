"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { insertPricingSchema } from "@/db/schema";
import { createNewPricing } from "@/app/actions/pricing-actions";
import toast from "react-hot-toast";

type FormValues = z.infer<typeof insertPricingSchema>;

export default function PricingForm() {
	const form = useForm<FormValues>({
		resolver: zodResolver(insertPricingSchema),
		defaultValues: {
			stripeUrl: "",
			price: 0,
			title: "",
			pricingItems: [],
		},
	});

	const { fields, append, remove } = useFieldArray({
		name: "pricingItems",
		control: form.control,
	});

	async function onSubmit(data: FormValues) {
		console.log(data);
		const response = await createNewPricing(data);
		if (response?.data?.success) {
			toast("pricing added");
		} else {
			toast("failed to add pricing");
		}
	}

	return (
		<Card className="w-full max-w-2xl mx-auto p-4">
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter title"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										The title of the pricing plan.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="stripeUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Stripe URL</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter Stripe URL"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										The URL for the Stripe payment page.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Enter price"
											{...field}
											onChange={(e) =>
												field.onChange(
													Number(e.target.value),
												)
											}
										/>
									</FormControl>
									<FormDescription>
										The price of the plan in cents.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex flex-col gap-2">
							<FormLabel>Pricing Items</FormLabel>
							{fields.map((field, index) => (
								<FormField
									key={field.id}
									control={form.control}
									name={`pricingItems.${index}.body`}
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<div className="flex items-center space-x-2 mt-2">
													<Input
														placeholder={`Enter pricing item ${index + 1}`}
														{...field}
													/>
													<Button
														disabled={
															form.formState
																.isSubmitting
														}
														className={`${form.formState.isSubmitSuccessful && "opacity-90"}`}
														type="button"
														variant="outline"
														size="icon"
														onClick={() =>
															remove(index)
														}
													>
														<Trash2 className="h-4 w-4" />
													</Button>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
							<Button
								type="button"
								variant="outline"
								size="sm"
								className="mt-2"
								onClick={() => append({ body: "" })}
							>
								<Plus className="mr-2 h-4 w-4" /> Add Pricing
								Item
							</Button>
						</div>
						<div className="flex justify-end">
							<Button
								disabled={form.formState.isLoading}
								className={`${form.formState.isLoading && "opacity-90"} w-32`}
								variant={"default"}
								type="submit"
							>
								<span>Save</span>
								{form.formState.isSubmitting && (
									<Loader2 className="h-4 w-4 animate-spin" />
								)}
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
