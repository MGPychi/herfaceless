"use server";
import { PAGE_SIZE } from "@/constants";
import { db } from "@/db";
import { newsletter } from "@/db/schema";
import { and, count, gte, or, sql } from "drizzle-orm";
import { cache } from "react";
export const getNewsletter = cache(
	async ({ page, q }: { page: number; q?: string }) => {
		const filteredNewsletter = db.$with("filtered_newsletter").as(
			db
				.select()
				.from(newsletter)
				.where(
					and(
						q
							? or(
									sql`${newsletter.name} LIKE ${`%${q}%`}`,
									sql`${newsletter.email} LIKE ${`%${q}%`}`,
								)
							: undefined,
					),
				),
		);

		const result = await db
			.with(filteredNewsletter)
			.select()
			.from(filteredNewsletter)
			.limit(PAGE_SIZE)
			.offset((page - 1) * PAGE_SIZE);

		// Get total newsletter count after filters
		const c = await getNewsletterCount({ q });
		const pageCount = Math.ceil(c / PAGE_SIZE);
		const hasNext = page < pageCount;
		const hasPrev = page > 1;

		return { data: result, hasNext, hasPrev, count: c, pageCount };
	},
);
export const getNewsletterCount = cache(async ({ q }: { q?: string }) => {
	const filteredNewsletter = db.$with("filtered_newsletter").as(
		db
			.select()
			.from(newsletter)
			.where(
				and(
					q
						? or(
								sql`${newsletter.name} LIKE ${`%${q}%`}`,
								sql`${newsletter.email} LIKE ${`%${q}%`}`,
							)
						: undefined,
				),
			),
	);

	const [result] = await db
		.with(filteredNewsletter)
		.select({ count: count() })
		.from(filteredNewsletter);

	return result.count;
});

export const getNewsletterCountToday = cache(async () => {
	const [result] = await db
		.select({ count: count() })
		.from(newsletter)
		.where(gte(newsletter.createdAt, new Date()));
	return result.count;
});

export const getTotalNewslettersCount = cache(async () => {
	const result = await db.select({ count: count() }).from(newsletter);
	const c = result[0];
	return c.count;
});
export const getTotalNewslettersCountToDay = cache(async () => {
	const today = new Date();
	today.setHours(0, 0, 0, 0); //
	const result = await db
		.select({ count: count() })
		.from(newsletter)
		.where(sql`DATE(created_at) = ${today.toISOString().split("T")[0]}`);
	const c = result[0];
	return c.count;
});
