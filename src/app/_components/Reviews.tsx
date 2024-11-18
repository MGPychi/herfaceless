import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
// import { m as motion  } from "framer-motion"
import * as motion from "framer-motion/m";
import { getAllReviews } from "@/data/reviews-data";
import { z } from "zod";
import { selectReviewSchema } from "@/db/schema";

export default async function Reviews() {
	const reviews = await getAllReviews();
	return (
		<div className="bg-gradient-to-b  bg-ground py-24 px-4">
			<div className="container mx-auto max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-secondary mb-4">
							Here is What Our Clients
							<br />
							Are Achieving:
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Real results from real entrepreneurs who took action
							and transformed their businesses.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 mb-16">
						{reviews.map((testimonial, index) => (
							<TestimonialCard
								key={testimonial.id}
								testimonial={testimonial}
								delay={index * 0.2}
							/>
						))}
					</div>

					<div className="text-center">
						<p className="text-2xl font-semibold text-[#003366] mb-6">
							Imagine what is possible for you with access to
							these proven, life-changing strategies!
						</p>
						<CallToActionButton />
					</div>
				</motion.div>
			</div>
		</div>
	);
}

function TestimonialCard({
	testimonial,
	delay,
}: {
	testimonial: z.infer<typeof selectReviewSchema>;
	delay: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, rotateX: 45 }}
			whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.6, ease: "easeOut" }}
		>
			<Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-16 h-16 bg-secondary transform rotate-45 translate-x-8 -translate-y-8"></div>
				<div className="absolute top-2 right-2 text-white z-10">
					{/* {testimonial.icon} */}
				</div>
				<Badge variant="secondary" className="mb-4 text-white">
					{testimonial.value}
				</Badge>
				<p className="text-gray-700 text-lg mb-4">{testimonial.body}</p>
				<div className="flex items-center gap-4">
					<Avatar>
						<AvatarImage src={""} alt={testimonial.client} />
						<AvatarFallback>{testimonial.client}</AvatarFallback>
					</Avatar>
					<div>
						<p className="font-semibold text-[#003366]">
							{testimonial.client}
						</p>
						<div className="flex items-center">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className="w-4 h-4 fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>
					</div>
				</div>
			</Card>
		</motion.div>
	);
}

function CallToActionButton() {
	return (
		<motion.button
			className="bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#004080] transition-colors duration-300"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			Join Our Success Stories
		</motion.button>
	);
}
