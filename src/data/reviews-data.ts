"use server";
import { PAGE_SIZE } from "@/constants";
import { db } from "@/db";
import { reviews } from "@/db/schema";
import { and, count, gte, or, sql } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const getAllReviews = unstable_cache(
	async () => {
		return await db.query.reviews.findMany({
		});
	},
	["reviews"],
	{
		tags: ["reviews"],
	},
);
export const getReviews = cache(
	async ({ page, q }: { page: number; q?: string }) => {
		const data =await  db.query.reviews.findMany({
			where:	and(
						q
							? or(
									sql`${reviews.body} LIKE ${`%${q}%`}`,
									sql`${reviews.client} LIKE ${`%${q}%`}`,
									sql`${reviews.value} LIKE ${`%${q}%`}`,
								)
							: undefined,
					),
			limit: PAGE_SIZE,
			offset: (page - 1) * PAGE_SIZE,
			
		})

		// Get total reviews count after filters
		const c = await getReviewsCount({ q });
		const pageCount = Math.ceil(c / PAGE_SIZE);
		const hasNext = page < pageCount;
		const hasPrev = page > 1;

		return { data , hasNext, hasPrev, count: c, pageCount };
	},
);
export const getReviewsCount = cache(async ({ q }: { q?: string }) => {
	const filteredReviews = db.$with("filtered_reviews").as(
		db
			.select()
			.from(reviews)
			.where(
				and(
					q
						? or(
									sql`${reviews.body} LIKE ${`%${q}%`}`,
									sql`${reviews.client} LIKE ${`%${q}%`}`,
									sql`${reviews.value} LIKE ${`%${q}%`}`,
							)
						: undefined,
				),
			),
	);

	const [result] = await db
		.with(filteredReviews)
		.select({ count: count() })
		.from(filteredReviews);

	return result.count;
});

export const getReviewsCountToday = cache(async () => {
	const [result] = await db
		.select({ count: count() })
		.from(reviews)
		.where(gte(reviews.createdAt, new Date()));
	return result.count;
});

export const getTotalReviewsCount = cache(async () => {
	const result = await db.select({ count: count() }).from(reviews);
	const c = result[0];
	return c.count;
});
export const getTotalReviewsCountToDay = cache(async () => {
	const today = new Date();
	today.setHours(0, 0, 0, 0); //
	const result = await db
		.select({ count: count() })
		.from(reviews)
		.where(sql`DATE(created_at) = ${today.toISOString().split("T")[0]}`);
	const c = result[0];
	return c.count;
});
