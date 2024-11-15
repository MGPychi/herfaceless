import * as motion from "framer-motion/m";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { getAllPricing } from "@/data/pricing-data";
import Link from "next/link";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};
export default async function Pricing() {
	const plans = await getAllPricing();

	return (
		<div className="min-h-screen bg-ground py-20 px-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="container  mx-auto text-center mb-12"
			>
				<h1 className="text-4xl md:text-5xl font-bold">
					Find your{" "}
					<span className="text-[#b17f65]">Perfect Plan!</span>
				</h1>
			</motion.div>

			<div className=" container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{plans.map((plan, index) => (
					<motion.div
						key={plan.id}
						initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Card className="h-full flex flex-col">
							<CardHeader>
								<CardTitle className="text-2xl">
									{plan.title}
								</CardTitle>
								{/* <p className="text-sm text-muted-foreground">{plan.commitment}</p> */}
								<p className="text-sm text-muted-foreground">
									(Billed Monthly)
								</p>
								<div className="text-4xl font-bold mt-4">
									<span className="text-[#b17f65]">
										${plan.price}
									</span>
									<span className="text-xl font-normal">
										/mo
									</span>
								</div>
							</CardHeader>
							<CardContent className="flex-grow">
								<motion.ul
									variants={container}
									initial="hidden"
									whileInView="show"
									className="space-y-4"
								>
									{plan.pricingItems.map((planFeature) => (
										<motion.li
											key={planFeature.id}
											variants={item}
											className="flex items-start gap-2"
										>
											<Check className="h-5 w-5 text-[#b17f65] mt-1 flex-shrink-0" />
											<span>{planFeature.body}</span>
										</motion.li>
									))}
								</motion.ul>
							</CardContent>
							<CardFooter className="mt-auto">
								<Button
									asChild
									aria-label="sign me up button"
									className="w-full bg-[#dbc1b0] hover:bg-[#b17f65] text-black py-6 text-lg"
								>
									<Link href={plan.stripeUrl}>
										Sign Me Up
									</Link>
								</Button>
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</div>
		</div>
	);
}
