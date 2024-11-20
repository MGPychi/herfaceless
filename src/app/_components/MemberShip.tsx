import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import * as motion from "framer-motion/m";

export default function MemberShip() {
	return (
		<section className="lg:min-h-screen bg-ground  flex items-center justify-center p-6">
			<div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="relative"
				>
					<div className="aspect-[3/4] hidden lg:block h-[60vh] mx-auto  lg:h-auto relative rounded-[2.5rem] border-8 border-black bg-[#e5d0ba] overflow-hidden shadow-xl">
						<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
							<h2 className="text-3xl font-bold mb-4">
								SISTERS
								<br />
								INNER CIRCLE
							</h2>
							<div className="absolute top-1/2 right-0 w-1/2 h-full bg-black transform translate-x-1/4 rotate-12" />
							<div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/3 bg-[#4a3428] transform -rotate-45" />
							<Sparkles className="absolute top-1/4 right-1/4 w-6 h-6" />
							<Sparkles className="absolute bottom-1/3 right-1/3 w-4 h-4" />
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.1 }}
					className="space-y-6"
				>
					<div className="space-y-2">
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="text-[#b17f65] text-xl"
						>
							Introducing...
						</motion.p>
						<motion.h1
							initial={{ opacity: 0 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-4xl lg:text-5xl font-bold leading-tight"
						>
							Sisters Inner Circle Membership
						</motion.h1>
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="text-lg text-gray-700 leading-relaxed"
					>
						A comprehensive, on-demand membership you only need to
						teaches you how to create, launch, and sell digital
						products. This isn&apos;t just another course, it&apos;s
						a complete system that provides you with the tools,
						templates, and support you need to succeed.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
					>
						<Button
							aria-label="get instant access button"
							className="bg-[#e5d0ba] hover:bg-[#d4c0aa] text-black px-8 py-6 text-lg rounded-md"
						>
							Get Instant Access Now!
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
