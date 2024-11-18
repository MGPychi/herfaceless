// import {m as  motion } from "framer-motion"
import * as motion from "framer-motion/m";
import { Card, CardContent } from "@/components/ui/card";
import { PenLine, DollarSign, Handshake } from "lucide-react";
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const benefits = [
	{
		icon: PenLine,
		title: "Create Digital Products Fast",
		description:
			"Learn how to build your digital products from scratch in less than 30 days, using step-by-step guides and easy-to-follow templates.",
	},
	{
		icon: DollarSign,
		title: "Sell with Confidence",
		description:
			"Master social media marketing strategies that convert followers into paying customers, even if you're new to sales and have small followers.",
	},
	{
		icon: Handshake,
		title: "Ongoing Support & Community",
		description:
			"Get access to a supportive community of fellow sisters and live Q&A sessions to help you overcome any obstacles.",
	},
];

export default function TopBenefits() {
	return (
		<section className="py-24 px-4 bg-ground">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-4xl font-bold text-center mb-16"
				>
					TOP BENEFITS
				</motion.h2>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					viewport={{ once: true }}
					whileInView={"visible"}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{benefits.map((benefit, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card className="border-none bg-transparent shadow-none">
								<CardContent className="flex flex-col items-center text-center pt-6">
									<div className="bg-black p-4 rounded-lg mb-6">
										<benefit.icon className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold mb-4">
										{benefit.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{benefit.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
