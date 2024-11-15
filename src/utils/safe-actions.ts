import { createSafeActionClient } from "next-safe-action";
import { db } from "@/db";
import { auth } from "@/lib/auth";
export const actionClient = createSafeActionClient().use(
	async ({ next, ctx }) => {
		return next({ ctx: { ...ctx, db } });
	},
);
export const protectedActionClient = actionClient.use(async ({ next, ctx }) => {
	const session = await auth();
	if (!session || !session.user) throw new Error("Unauthorized");
	return next({ ctx: { ...ctx, user: session.user } });
});
