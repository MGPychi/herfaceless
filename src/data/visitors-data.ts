
"use server";
import { PAGE_SIZE } from "@/constants";
import { db } from "@/db";
import { visitors } from "@/db/schema";
import { and, count,  gte, or, sql } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const getAllVisitors = unstable_cache(
	async () => {
		return await db.query.visitors.findMany({});
	},
	["visitors"],
	{
		tags: ["visitors"],
	},
);
interface IGeoLocationReponse {
	country: string;
	countryCode: string;
	regionName: string;
	city: string;

}
export const getVisitors = cache(
	async ({ page, q }: { page: number; q?: string }) => {
		const data = await db.query.visitors.findMany({
			where: and(
				q
					? or(
							sql`${visitors.ip} LIKE ${`%${q}%`}`,
							sql`${visitors.pricingType} LIKE ${`%${q}%`}`,
						)
					: undefined,
			),
			limit: PAGE_SIZE,
			offset: (page - 1) * PAGE_SIZE,
		});

		// Get total visitors count after filters
		const c = await getVisitorsCount({ q });
		const pageCount = Math.ceil(c / PAGE_SIZE);
		const hasNext = page < pageCount;
		const hasPrev = page > 1;
		const dataWithLocation = await Promise.all(data.map(async (visitor) => {
			const countryResponse = await fetch(`http://ip-api.com/json/${visitor.ip}`);
			const countryData = (await countryResponse.json()) as IGeoLocationReponse;
			return { ...visitor, ...countryData };

		}))
		return { data:dataWithLocation, hasNext, hasPrev, count: c, pageCount };
	},
);
export const getVisitorsCount = cache(async ({ q }: { q?: string }) => {
	const filteredVisitors = db.$with("filtered_visitors").as(
		db
			.select()
			.from(visitors)
			.where(
				and(
					q
						? or(
								sql`${visitors.ip} LIKE ${`%${q}%`}`,
								sql`${visitors.pricingType} LIKE ${`%${q}%`}`,
							)
						: undefined,
				),
			),
	);

	const [result] = await db
		.with(filteredVisitors)
		.select({ count: count() })
		.from(filteredVisitors);

	return result.count;
});

export const getVisitorsCountToday = cache(async () => {
	const [result] = await db
		.select({ count: count() })
		.from(visitors)
		.where(gte(visitors.createdAt, new Date()));
	return result.count;
});

export const getTotalVisitorsCount = cache(async () => {
	const result = await db.select({ count: count() }).from(visitors);
	const c = result[0];
	return c.count;
});
export const getTotalVisitorsCountToDay = cache(async () => {
	const today = new Date();
	today.setHours(0, 0, 0, 0); //
	const result = await db
		.select({ count: count() })
		.from(visitors)
		.where(sql`DATE(created_at) = ${today.toISOString().split("T")[0]}`);
	const c = result[0];
	return c.count;
});
