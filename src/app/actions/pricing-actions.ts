"use server";
import {
	insertPricingSchema,
	pricing,
	pricingItem,
	updatePricingSchema,
} from "@/db/schema";
import { actionClient, protectedActionClient } from "@/utils/safe-actions";
import { eq } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

export const createNewPricing = actionClient
	.schema(insertPricingSchema)
	.action(async ({ ctx, parsedInput }) => {
		try {
			const pricingId = (
				await ctx.db
					.insert(pricing)
					.values(parsedInput)
					.returning({ insertedId: pricing.id })
			)[0];
			parsedInput.pricingItems.forEach(async (item) => {
				await ctx.db
					.insert(pricingItem)
					.values({ ...item, pricingId: pricingId.insertedId });
			});
		} catch (err) {
			console.error(err);
			return { success: false };
		}
		revalidateTag("pricing");
		revalidatePath("/admin/dashboard/pricing");
		return { success: true };
	});

export const updatePricing = actionClient
	.schema(updatePricingSchema)
	.action(async ({ ctx, parsedInput }) => {
		try {
			await ctx.db
				.update(pricing)
				.set({
					stripeUrl: parsedInput.stripeUrl,
					price: parsedInput.price,
					title: parsedInput.title,
				})
				.where(eq(pricing.id, parsedInput.id));

			await ctx.db
				.delete(pricingItem)
				.where(eq(pricingItem.pricingId, parsedInput.id));

			for (const item of parsedInput.pricingItems) {
				await ctx.db.insert(pricingItem).values({
					body: item.body,
					pricingId: parsedInput.id,
				});
			}
		} catch (err) {
			console.error(err);
			return { success: false };
		}
		revalidateTag("pricing");
		revalidatePath("/admin/dashboard/pricing");
		return { success: true };
	});

export const deletePricing = protectedActionClient
	.schema(z.object({ id: z.string() }))
	.action(async ({ ctx, parsedInput }) => {
		try {
			if (ctx.user.role != "admin") return { success: false };
			await ctx.db.delete(pricing).where(eq(pricing.id, parsedInput.id));
			await ctx.db
				.delete(pricingItem)
				.where(eq(pricingItem.pricingId, parsedInput.id));
		} catch (err) {
			console.log(err);
			return { success: false };
		}
		revalidateTag("pricing");
		revalidatePath("/admin/dashboard/pricing");
		return { success: true };
	});
