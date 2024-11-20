import React from "react";
import { Button } from "@/components/ui/button";
import * as motion from "framer-motion/m";
import Link from "next/link";
import Image from "next/image";
import FirstImage from "../../../public/1.webp";
import SecondImage from "../../../public/2.webp";

// Define animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
};

const Problem = () => {
	return (
		<section className="min-h-[80vh] bg-ground">
			<div className="container mx-auto px-4 py-16">
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="grid md:grid-cols-2 gap-12 items-center mb-32"
				>
					<motion.div variants={fadeInUp} className="md:order-2">
						<h1 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
							You know you should be earning money from digital
							products now, but there is only one problem...
						</h1>
						<motion.p
							variants={fadeInUp}
							className="md:text-lg text-zinc-600"
						>
							You have no idea where to start, and every time you
							try, you feel overwhelmed by the endless
							possibilities and steps involved.
						</motion.p>
					</motion.div>
					<motion.div variants={fadeInUp} className="md:order-1  ">
						<Image src={FirstImage} alt="instagram account image" className="rounded-lg"  />
						
					</motion.div>
				</motion.div>

				{/* Middle Section */}
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
					className="grid md:grid-cols-2 gap-12 mb-32"
				>
					<motion.div variants={fadeInUp} className="space-y-6">
						<h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
							I want you to imagine this...
						</h2>
						<motion.div
							variants={fadeInUp}
							className="space-y-4 text-zinc-600"
						>
							{[
								"- You've spent weeks trying to piece together free resources, only to feel more confused than when you started.",
								"- The idea of launching your own digital product feels daunting.",
								"- You're worried you'll waste time, energy, and money on something that might not even sell.",
							].map((text, index) => (
								<motion.p key={index} variants={fadeInUp}>
									{text}
								</motion.p>
							))}
						</motion.div>
					</motion.div>
					<motion.div variants={fadeInUp}>

						<Image src={SecondImage} alt="instagram account image" className="rounded-lg"  />
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="text-center space-y-8"
				>
					<motion.h2
						variants={fadeInUp}
						className="text-xl md:text-2xl font-bold text-white inline-block bg-zinc-900 px-6 py-3 rounded-lg shadow-md"
					>
						But what if there was a clear, proven path that guided
						you every step of the way?
					</motion.h2>

					<motion.div
						variants={fadeInUp}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.4 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link href="/#pricing">
							<Button
								aria-label="i want to start earing money button"
								className="bg-[#D2B48C]   hover:bg-[#C1A47B] text-zinc-900 font-bold  px-6 py-3 h-auto rounded-full shadow-lg transition-all duration-300 ease-in-out"
							>
								I WANT TO START EARNING MONEY!
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Problem;
