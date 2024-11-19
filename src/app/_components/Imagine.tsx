import { Button } from "@/components/ui/button";
import * as motion from "framer-motion/m";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const content = [
	{
		title: "Imagine...",
		text: "You could wake up every day knowing that your financial worries are a thing of the past.",
		delay: 0.1,
	},
	{
		title: "Picture yourself",
		text: "Having the freedom to spend quality time with your loved ones, without the stress of juggling bills or making ends meet.",
		delay: 0.2,
	},
	{
		text: "Or you're being able to treat your family to special outings, like a cozy weekend getaway or a fun family dinner, without checking your bank account first.",
		delay: 0.2,
	},
	{
		text: "Or imagine being able to invest in your passions, whether it's a new hobby, travel, or simply creating a comfortable space where you feel truly at home.",
		delay: 0.2,
	},
	{
		title: "Fast-forward to a day when your phone buzzes with payment notifications...",
		text: "And you think, \"Alhamdulillah, I can't believe how far I've come.\"",
		delay: 0.2,
	},
	{
		text: "Your digital product isn't just making you money, it's giving you the freedom to live the life you've always dreamed of, with the people you cherish most.",
		delay: 0.2,
	},
	{
		text: "With the extra income from a successful digital product, you can create lasting memories with those who matter most.",
		delay: 0.2,
	},
	{
		text: "You'll have the peace of mind to know you're providing for your family's needs and securing their future, all while enjoying the flexibility to live life on your own terms.",
		delay: 0.2,
	},
];

const DecorativeSVG = () => (
	<motion.svg
		initial={{ opacity: 0, scale: 0.8 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
		className="absolute right-0 top-1/4 -z-10 h-64 w-64 text-primary/10"
		viewBox="0 0 100 100"
		fill="currentColor"
	>
		<circle cx="50" cy="50" r="40" />
		<path
			d="M20,50 L80,50 M50,20 L50,80"
			strokeWidth="2"
			stroke="currentColor"
			fill="none"
		/>
	</motion.svg>
);

export default function Imagine() {
	return (
		<section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b bg-ground  to-background">
			<div className="max-w-4xl mx-auto">
				<DecorativeSVG />

				<div className="space-y-12">
					{content.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: item.delay }}
						>
							<Card className="border-none bg-white/80 backdrop-blur">
								<CardContent className="p-6">
									{item.title && (
										<h2 className="text-2xl font-bold text-gray-900 mb-4">
											{item.title}
										</h2>
									)}
									<p className="text-lg text-gray-700 leading-relaxed">
										{item.text}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.8 }}
					className="mt-16 text-center"
				>
					<Card className="border-none bg-primary/5 backdrop-blur">
						<CardContent className="p-8">
							<h3 className="text-xl font-bold text-primary mb-4">
								All of this is possible with our membership.
							</h3>
							<p className="text-gray-700 mb-8 max-w-2xl mx-auto">
								It is not just about creating a product, it is
								about transforming your life and the lives of
								those you love. Grab this opportunity today to
								make a real difference and watch how your world
								changes for the better.
							</p>
							<Link href="/#pricing">
								<Button
									aria-label="start now button"
									size="lg"
									className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg"
								>
									Start Your Journey Here!
								</Button>
							</Link>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
