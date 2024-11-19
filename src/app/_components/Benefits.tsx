"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Info,
	Mic,
	Lightbulb,
	DollarSign,
	LineChart,
	Video,
	ChevronRight,
} from "lucide-react";
import * as motion from "framer-motion/m";
// import { m as motion} from "framer-motion";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const benefits = [
	{
		icon: <Mic className="w-6 h-6" />,
		title: "Expert Insights WEEKLY",
		description:
			"Weekly expert guidance and actionable strategies to keep you on track and motivated.",
	},
	{
		icon: <Lightbulb className="w-6 h-6" />,
		title: "Strategic Implementation Plans",
		description:
			"Step-by-step blueprints for business growth, tailored to your industry and goals.",
	},
	{
		icon: <DollarSign className="w-6 h-6" />,
		title: "Revenue Acceleration Tactics",
		description:
			"Proven strategies to boost your income and scale your business efficiently.",
	},
	{
		icon: <LineChart className="w-6 h-6" />,
		title: "Business & Personal Growth",
		description:
			"Develop leadership skills and business acumen to become a top performer in your field.",
	},
	{
		icon: <Video className="w-6 h-6" />,
		title: "Exclusive Content Access",
		description:
			"Behind-the-scenes insights and private content to give you a competitive edge.",
	},
];

export default function Benefits() {
	return (
		<section className="py-4 md:py-24 px-4 bg-gradient-to-b  bg-ground  overflow-hidden">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeInOut" }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-secondary">
						Here is What You Get Inside
						<br className="hidden md:inline" /> the Membership:
					</h2>
					<p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
						Unlock a suite of powerful tools and resources designed
						to skyrocket your business growth and personal
						development.
					</p>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="relative mx-auto lg:mx-0 order-2 lg:order-1">
							<Card className="bg-[#f0f8ff] p-8 rounded-2xl shadow-xl max-w-md transform hover:scale-105 transition-transform duration-300">
								<div className="relative aspect-square">
									<IllustrationBusiness />
									<div className="absolute bottom-0 right-0 w-1/4 h-1/4">
										<IllustrationPlant />
									</div>
								</div>
							</Card>
						</div>

						<div className="space-y-4 order-1 lg:order-2">
							<TooltipProvider>
								{benefits.map((benefit, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: 50 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.2,
											ease: "easeOut",
										}}
									>
										<BenefitItem benefit={benefit} />
									</motion.div>
								))}
							</TooltipProvider>
						</div>
					</div>

					<div className="mt-10  text-center">
						<Link href="/#pricing">
							<Button
								aria-label="join button"
								className="bg-secondary  text-white hover:ring-2 hover:ring-secondary hover:bg-secondary text-xs sm:text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform "
							>
								Join Now and Accelerate Your Success
								<ChevronRight className="ml-2 w-5 h-5" />
							</Button>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

interface Benefit {
	icon: JSX.Element;
	title: string;
	description: string;
}

function BenefitItem({ benefit }: { benefit: Benefit }) {
	return (
		<Card className="p-2 py-4 md:!p-6 flex min-h-[135px]  items-start gap-4 group hover:bg-[#f0f8ff] transition-colors duration-300 cursor-pointer">
			<div className="p-3 rounded-full bg-secondary text-white shrink-0">
				{benefit.icon}
			</div>
			<div className="flex-grow">
				<h3 className=" md:text-xl font-semibold text-secondary mb-2 group-hover:text-[#0066cc] transition-colors duration-300">
					{benefit.title}
				</h3>
				<p className="text-gray-600 text-xs">{benefit.description}</p>
			</div>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						aria-label="info button"
						variant="ghost"
						size="icon"
						className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
					>
						<Info className="w-5 h-5" />
					</Button>
				</TooltipTrigger>
				<TooltipContent side="left" className="max-w-xs">
					<p>{benefit.description}</p>
				</TooltipContent>
			</Tooltip>
		</Card>
	);
}

function IllustrationBusiness() {
	return (
		<svg viewBox="0 0 200 200" className="w-full h-full">
			<rect
				x="60"
				y="80"
				width="80"
				height="100"
				rx="10"
				className="fill-[#003366]"
			/>
			<circle cx="100" cy="100" r="25" className="fill-[#0066cc]" />
			<rect
				x="75"
				y="90"
				width="50"
				height="60"
				rx="25"
				className="fill-[#0066cc]"
			/>
			<rect
				x="85"
				y="110"
				width="40"
				height="30"
				rx="5"
				className="fill-[#e6f2ff]"
			/>
			<rect
				x="85"
				y="130"
				width="40"
				height="5"
				rx="2"
				className="fill-[#003366]"
			/>
			<path
				d="M40,150 Q30,140 40,130 Q50,140 40,150"
				className="fill-[#666]"
			/>
			<circle cx="35" cy="140" r="8" className="fill-[#666]" />
		</svg>
	);
}

function IllustrationPlant() {
	return (
		<svg viewBox="0 0 50 50" className="w-full h-full">
			<rect
				x="20"
				y="35"
				width="10"
				height="15"
				className="fill-[#0066cc]"
			/>
			<path
				d="M25,35 Q15,25 25,15 Q35,25 25,35"
				className="fill-[#003366]"
			/>
			<path
				d="M25,30 Q35,20 25,10 Q15,20 25,30"
				className="fill-[#003366]"
			/>
		</svg>
	);
}
