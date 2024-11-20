import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";
import * as motion from "framer-motion/m";
const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, x: -20 },
	show: { opacity: 1, x: 0 },
};

export default function SayGoodBTo() {
	return (
		<section className=" bg-ground flex items-center justify-center px-6 py-20">
			<Card className="max-w-2xl bg-transparent border-none shadow-none">
				<CardContent className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center space-y-2"
					>
						<p className="text-2xl leading-relaxed">
							With our{" "}
							<span className="font-semibold">
								SIS Inner Circle Membership
							</span>
							, you&apos;ll learn how to{" "}
							<span className="font-bold">
								create digital products that sell
							</span>
							, and never feel{" "}
							<span className="italic">stuck or overwhelmed</span>{" "}
							again!
						</p>
					</motion.div>

					<div className="space-y-8">
						<motion.div
							variants={container}
							initial="hidden"
							viewport={{ once: true }}
							whileInView="show"
							className="space-y-6"
						>
							<h2 className="text-2xl font-semibold">
								Say goodbye to...
							</h2>
							{[
								"Feeling overwhelmed and stuck, unsure of where to start or what to create.",
								"Wasting time on free resources that don't give you the full picture.",
								"Launching products that don't sell, leaving you frustrated and discouraged.",
							].map((text, index) => (
								<motion.div
									key={index}
									variants={item}
									className="flex font-medium items-start gap-3"
								>
									<X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
									<p>{text}</p>
								</motion.div>
							))}
						</motion.div>

						<motion.div
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="space-y-6"
						>
							<h2 className="text-2xl font-semibold">
								Instead you&apos;ll...
							</h2>
							{[
								"Wake up to notifications of new sales and customers satisfaction, knowing your hard work is paying off.",
								"Feel confident in your ability to create and launch digital products that resonate with your audience.",
								"Build a sustainable income stream that allows you to focus on what you love",
							].map((text, index) => (
								<motion.div
									key={index}
									variants={item}
									className="flex font-medium items-start gap-3"
								>
									<Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
									<p>{text}</p>
								</motion.div>
							))}
						</motion.div>
					</div>

					<div className="py-4" />
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.7 }}
						className="flex justify-center"
					>
						<Button
							aria-label="count me in button"
							className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-md"
						>
							COUNT ME IN!
						</Button>
					</motion.div>
				</CardContent>
			</Card>
		</section>
	);
}
