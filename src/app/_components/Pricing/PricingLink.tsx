"use client";
import { createVisitor } from "@/app/actions/visitors-actions";
import { getAllPricing } from "@/data/pricing-data";
import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
	plan: Awaited<ReturnType<typeof getAllPricing>>[0];
	children: ReactNode;
}
const PricingLink = ({ plan, children }: Props) => {
	const handlePricingClick = async(p: typeof plan) => {
        await createVisitor({ pricingType: p.title });
	};
	return (
		<Link
			className="w-full"
			onClick={() => handlePricingClick(plan)}
			target="_blank"
			href={plan.stripeUrl}
		>
			{children}
		</Link>
	);
};

export default PricingLink;
