"use server";
import { PAGE_SIZE } from "@/constants";
import { db } from "@/db";
import { pricing } from "@/db/schema";
import { and, count, gte, or, sql } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const getAllPricing = unstable_cache(
	async () => {
		return await db.query.pricing.findMany({
			with: {
				pricingItems: true,
			},
		});
	},
	["pricing"],
	{
		tags: ["pricing"],
	},
);
export const getPricing = cache(
	async ({ page, q }: { page: number; q?: string }) => {
		const data =await  db.query.pricing.findMany({
			where:	and(
						q
							? or(
									sql`${pricing.title} LIKE ${`%${q}%`}`,
									sql`${pricing.price} LIKE ${`%${q}%`}`,
								)
							: undefined,
					),
			limit: PAGE_SIZE,
			offset: (page - 1) * PAGE_SIZE,
			with:{
				pricingItems:true
			}
			
		})

		// Get total pricing count after filters
		const c = await getPricingCount({ q });
		const pageCount = Math.ceil(c / PAGE_SIZE);
		const hasNext = page < pageCount;
		const hasPrev = page > 1;

		return { data , hasNext, hasPrev, count: c, pageCount };
	},
);
export const getPricingCount = cache(async ({ q }: { q?: string }) => {
	const filteredPricing = db.$with("filtered_pricing").as(
		db
			.select()
			.from(pricing)
			.where(
				and(
					q
						? or(
								sql`${pricing.title} LIKE ${`%${q}%`}`,
								sql`${pricing.price} LIKE ${`%${q}%`}`,
							)
						: undefined,
				),
			),
	);

	const [result] = await db
		.with(filteredPricing)
		.select({ count: count() })
		.from(filteredPricing);

	return result.count;
});

export const getPricingCountToday = cache(async () => {
	const [result] = await db
		.select({ count: count() })
		.from(pricing)
		.where(gte(pricing.createdAt, new Date()));
	return result.count;
});

export const getTotalPricingCount = cache(async () => {
	const result = await db.select({ count: count() }).from(pricing);
	const c = result[0];
	return c.count;
});
export const getTotalPricingCountToDay = cache(async () => {
	const today = new Date();
	today.setHours(0, 0, 0, 0); //
	const result = await db
		.select({ count: count() })
		.from(pricing)
		.where(sql`DATE(created_at) = ${today.toISOString().split("T")[0]}`);
	const c = result[0];
	return c.count;
});
