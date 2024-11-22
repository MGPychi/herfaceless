"use server";
import { ADMIN_PAGE } from "@/constants";
import { visitors } from "@/db/schema";
import { actionClient, protectedActionClient } from "@/utils/safe-actions";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
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

export const deleteVisitor = protectedActionClient.schema(z.object({id: z.string()})).action(async ({ctx, parsedInput}) => {
    try {
        await ctx.db.delete(visitors).where(eq(visitors.id, parsedInput.id))
    } catch (e) {
        console.error(e);
        return {success: false};
    }
    revalidatePath(`${ADMIN_PAGE}/visitors`);
    return {success: true};

})
