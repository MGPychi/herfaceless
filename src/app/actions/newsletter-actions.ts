"use server";
import { ADMIN_PAGE } from "@/constants";
import { insertNewsLetterSchema, newsletter } from "@/db/schema";
import { actionClient, protectedActionClient } from "@/utils/safe-actions";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createNewsLetterAction = actionClient
	.schema(insertNewsLetterSchema)
	.action(async ({ ctx, parsedInput }) => {
		try {
			await ctx.db.insert(newsletter).values(parsedInput);
		} catch (err) {
			console.error(err);
			return { success: false };
		}
		return { success: true };
	});

export const deleteNewsletter = protectedActionClient
	.schema(z.object({ id: z.string() }))
	.action(async ({ ctx, parsedInput }) => {
		try {
			if (ctx.user.role != "admin") return { success: false };
			await ctx.db
				.delete(newsletter)
				.where(eq(newsletter.id, parsedInput.id));
		} catch (err) {
			console.log(err);
			return { success: false };
		}
		revalidatePath(`${ADMIN_PAGE}/newsletter`);
		return { success: true };
	});

export const changeNewsLetterToPaidOrCreate = actionClient
	.schema(z.object({ email: z.string() }))
	.action(async ({ ctx, parsedInput }) => {
		try {
			await ctx.db.insert(newsletter).values({ email: parsedInput.email,isPaid:true }).onConflictDoUpdate({
				target: [newsletter.email],
				set: { isPaid: true },
			});
		} catch (err) {
			console.error(err);
			return { success: false };
		}
		return { success: true };
	});
