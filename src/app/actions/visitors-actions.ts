"use server";
import { visitors } from "@/db/schema";
import { actionClient } from "@/utils/safe-actions";
import { headers } from "next/headers";
import { z } from "zod";

export const createVisitor = actionClient
	.schema(
		z.object({
			pricingType: z.string().min(1).max(100),
		}),
	)
	.action(async ({ ctx, parsedInput }) => {
		try {
			const userIp = headers().get("x-forwarded-for");
			await ctx.db
				.insert(visitors)
				.values({
					ip: userIp ?? "None",
					clickedOnThePricing: true,
					pricingType: parsedInput.pricingType,
				})
				.returning();
		} catch (e) {
			console.error(e);
			return { success: false };
		}
		return { success: true };
	});
