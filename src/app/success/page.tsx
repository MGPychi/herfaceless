import Image from "next/image";
import { Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import * as motion from "framer-motion/m";
import { Metadata } from "next";
import Footer from "@/components/layout/Footer";
export const metadata: Metadata = {
	title: "success page",
};

export default function SuccessPage() {
	return (
		<>
			<main className="min-h-screen bg-[#f8efe8] flex items-center justify-center p-4">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Card className="max-w-2xl w-full bg-white/50 backdrop-blur-sm">
						<CardContent className="p-6 md:p-12 flex flex-col items-center text-center">
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 260,
									damping: 20,
									delay: 0.2,
								}}
								className="w-20 h-20 bg-[#b08b75] rounded-full flex items-center justify-center mb-8 relative"
							>
								<svg
									className="w-10 h-10 text-white"
									viewBox="0 0 24 24"
								>
									<motion.path
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M20 6L9 17L4 12"
										initial={{ pathLength: 0, opacity: 0 }}
										animate={{ pathLength: 1, opacity: 1 }}
										transition={{
											duration: 0.8,
											delay: 0.5,
											ease: "easeInOut",
										}}
									/>
								</svg>
								<motion.div
									className="absolute inset-0 rounded-full border-4 border-white"
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.2 }}
								/>
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="text-3xl font-bold mb-4 text-[#2d2d2d]"
							>
								Payment Successful!
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className=" text-muted-foreground mb-8"
							>
								Thank you for your purchase. Your digital empire
								journey begins now!
							</motion.p>

							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className="relative  h-[300px] w-[300px] max-w-sm aspect-square mb-8 rounded-2xl overflow-hidden shadow-lg"
							>
								<Image
									src="/placeholder.svg"
									alt="Digital Course Cover"
									width={100}
									height={200}
									className="object-cover"
								/>
							</motion.div>

							<div className="space-y-4 w-full max-w-md">
								<Link href={"/download"}>
									<motion.div>
										<Button className="w-full h-12 text-lg bg- hover:bg-[#96735f]">
											<Download className="mr-2 h-5 w-5" />
											Download Your Course
										</Button>
									</motion.div>
								</Link>

								<motion.div>
									<Link href={"/community"}>
										<Button
											variant="outline"
											className="w-full h-12 text-lg border-[#7289da] text-[#7289da] hover:bg-[#7289da] hover:text-white"
										>
											<Users className="mr-2 h-5 w-5" />
											Join Our Community
										</Button>
									</Link>
								</motion.div>

								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.7 }}
									className="text-sm text-muted-foreground"
								>
									Having trouble? Contact our support team at
									support@example.com
								</motion.p>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</main>
			<Footer />
		</>
	);
}
