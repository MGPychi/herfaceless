import * as motion from "framer-motion/m";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
	{
		step: "STEP 1",
		title: "Conceptualize",
		description:
			"Learn how to brainstorm and validate your product ideas to ensure they meet market demand.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="h-6 w-6 text-[#8B7355]"
				strokeWidth="2"
			>
				<path d="M12 4L4 8L12 12L20 8L12 4Z" />
				<path d="M4 12L12 16L20 12" />
				<path d="M4 16L12 20L20 16" />
			</svg>
		),
	},
	{
		step: "STEP 2",
		title: "Create",
		description:
			"Follow our step-by-step guides to create your product, whether it's an e-book, course, or printable.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="h-6 w-6 text-[#8B7355]"
				strokeWidth="2"
			>
				<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
			</svg>
		),
	},
	{
		step: "STEP 3",
		title: "Launch",
		description:
			"Discover how to set up your sales funnel, write compelling copy, and create buzz around your launch.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="h-6 w-6 text-[#8B7355]"
				strokeWidth="2"
			>
				<path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z" />
				<path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
				<path d="M12 9v6" />
				<path d="M9 12h6" />
			</svg>
		),
	},
	{
		step: "STEP 4",
		title: "Sell",
		description:
			"Master the art of social media marketing and learn how to turn your followers into customers.",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="h-6 w-6 text-[#8B7355]"
				strokeWidth="2"
			>
				<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
			</svg>
		),
	},
];

export default function GamePlan() {
	return (
		<section className="relative min-h-screen overflow-hidden bg-ground px-6 py-16">
			{/* Decorative Background */}
			<div className="pointer-events-none absolute inset-0">
				<svg
					className="absolute left-0 top-0 h-full w-1/2 text-[#8B7355]/10"
					viewBox="0 0 100 100"
				>
					<g transform="translate(0,30) rotate(-10)">
						<path
							d="M0,0 Q25,-20 50,0 T100,0"
							fill="currentColor"
						/>
						<path
							d="M0,20 Q25,0 50,20 T100,20"
							fill="currentColor"
						/>
						<path
							d="M0,40 Q25,20 50,40 T100,40"
							fill="currentColor"
						/>
					</g>
				</svg>
				<svg
					className="absolute right-0 top-0 h-full w-1/2 text-[#8B7355]/10"
					viewBox="0 0 100 100"
				>
					<g transform="translate(0,50) rotate(10)">
						<path
							d="M0,0 Q25,-20 50,0 T100,0"
							fill="currentColor"
						/>
						<path
							d="M0,20 Q25,0 50,20 T100,20"
							fill="currentColor"
						/>
						<path
							d="M0,40 Q25,20 50,40 T100,40"
							fill="currentColor"
						/>
					</g>
				</svg>
			</div>

			<div className="relative mx-auto max-w-3xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<p className="text-sm font-medium uppercase tracking-wider text-gray-700">
						IN 30 DAYS,
					</p>
					<p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-700">
						THIS PROGRAM WILL HELP YOU WITH...
					</p>
					<h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
						GAME PLAN SUCCESS
					</h2>
					<p className="mb-12 text-lg text-gray-700">
						Here is your 4-step plan to go from zero to a profitable
						digital product:
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-[1.65rem] top-0 h-full w-px bg-gray-300" />

					{/* Steps */}
					<div className="space-y-8">
						{steps.map((step, index) => (
							<motion.div
								key={step.title}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
							>
								<div className="flex gap-6">
									{/* Timeline dot */}
									<div className="relative mt-2 flex h-4 w-4 flex-shrink-0 items-center justify-center">
										<div className="h-4 w-4 rounded-full bg-black" />
									</div>
									{/* Card */}
									<Card className="flex-1 border-none bg-white shadow-md">
										<div className="flex gap-4 p-6">
											<div className="flex-shrink-0">
												{step.icon}
											</div>
											<div>
												<p className="text-sm font-medium text-[#8B7355]">
													{step.step}
												</p>
												<h3 className="mb-2 text-xl font-semibold text-gray-900">
													{step.title}
												</h3>
												<p className="text-sm text-gray-600">
													{step.description}
												</p>
											</div>
										</div>
									</Card>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-16 text-center"
				>
					<p className="mx-auto mb-8 max-w-2xl text-gray-700">
						After mastering the tools and strategies inside our
						Passion To Profit Membership, you can expect to create
						products that consistently generate sales and grow your
						online business.
					</p>
					<Button
						size="lg"
						className="bg-black px-8 py-6 text-sm font-semibold uppercase tracking-wider text-white hover:bg-gray-800"
					>
						START YOUR TRANSFORMATION NOW!
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
