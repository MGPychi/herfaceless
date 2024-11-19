"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { createNewsLetterAction } from "../actions/newsletter-actions";
import { Check, X } from "lucide-react";
import toast from "react-hot-toast";
import clsx from "clsx";
interface Props {
	setHasSubscribed: (value: boolean) => void;
	setIsVisible: (value: boolean) => void;
	setHasScrolled: (value: boolean) => void;
	className?: string;
	iClassName?: string;
}
const NewsLetterForm = ({
	setHasSubscribed,
	iClassName,
	className,
	setIsVisible,
	setHasScrolled,
}: Props) => {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e: React.FormEvent) => {
		setIsLoading(true);
		e.preventDefault();
		console.log("Submitted email:", email);

		const response = await createNewsLetterAction({ email });
		if (response?.data?.success) {
			toast("subscribed", {
				icon: <Check className="text-green-500 w-5 h-5" />,
			});
			setHasSubscribed(true);
			localStorage.setItem("newsletter_email", email);
		} else {
			toast("failed to subscribe ", {
				icon: <X className="w-5 h-5 text-red-500" />,
			});
		}

		setIsVisible(false);
		setHasScrolled(false); // Reset so it can appear again on next scroll
		setIsLoading(false);
	};
	return (
		<form onSubmit={handleSubmit} className={clsx(className, "space-y-4")}>
			<Input
				type="email"
				placeholder="Your email address"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
				className={clsx(
					"w-full px-4 h-11 bg-white/50 border-[#d4b094] focus:border-[#8b5e3c] rounded-full text-[#6d4b30]",
					iClassName,
				)}
			/>
			<Button
				disabled={isLoading}
				aria-label="subscribe now button"
				type="submit"
				className={`${isLoading && "opacity-90"} w-full bg-gradient-to-r from-[#8b5e3c] to-[#6d4b30] text-[#f3e4d7] hover:from-[#7a5235] hover:to-[#5c3f28] rounded-full transition-all duration-300 ease-in-out transform hover:scale-105`}
			>
				Subscribe Now
			</Button>
		</form>
	);
};

export default NewsLetterForm;
