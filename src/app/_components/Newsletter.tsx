"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import * as motion from "framer-motion/m";
import NewsLetterForm from "./NewsLetterForm";

export default function NewsletterSubscription() {
	const [isVisible, setIsVisible] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);
	const [hasSubscribed, setHasSubscribed] = useState(false);
	useEffect(() => {
		const newsletterEmail = localStorage.getItem("newsletter_email");
		if (newsletterEmail) {
			setHasSubscribed(true);
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;

			// Show the component when user has scrolled 25% of the page
			if (scrollPosition > windowHeight * 0.45 && !hasScrolled) {
				setHasScrolled(true);
				setIsVisible(true);
			}

			// Hide the component when user scrolls back to top
			if (scrollPosition < windowHeight * 0.1) {
				setIsVisible(false);
			} else if (hasScrolled) {
				setIsVisible(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [hasScrolled]);

	return (
		<AnimatePresence>
			{isVisible && !hasSubscribed && (
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 50, opacity: 0 }}
					transition={{ type: "spring", stiffness: 100, damping: 20 }}
					className="fixed bottom-4 right-4 z-50"
				>
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="bg-gradient-to-br from-[#f3e4d7] to-[#e8c9b0] p-6 rounded-3xl shadow-lg max-w-sm border border-[#d4b094]"
					>
						<Button
							aria-label="close newsletter button"
							variant="ghost"
							size="icon"
							onClick={() => {
								setIsVisible(false);
								setHasSubscribed(true);
								setHasScrolled(false); // Reset so it can appear again on next scroll
							}}
						>
							<X className="h-4 w-4" />
						</Button>
						<h2 className="text-2xl font-bold mb-4 text-[#8b5e3c]">
							Join Our Community
						</h2>
						<p className="mb-4 text-[#6d4b30]">
							Subscribe for exclusive updates, tips, and special
							offers.
						</p>
						<NewsLetterForm
							setHasScrolled={setHasScrolled}
							setHasSubscribed={setHasSubscribed}
							setIsVisible={setIsVisible}
						/>
					</motion.div>
					<motion.div
						animate={{
							boxShadow: [
								"0px 0px 0px rgba(236, 72, 153, 0)",
								"0px 0px 20px rgba(139, 94, 60, 0.3)",
								"0px 0px 0px rgba(236, 72, 153, 0)",
							],
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
							times: [0, 0.5, 1],
							repeat: Infinity,
							repeatDelay: 1,
						}}
						className="absolute inset-0 rounded-3xl z-[-1]"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
