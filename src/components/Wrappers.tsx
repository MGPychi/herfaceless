"use client";
import React, { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { PostHogProvider } from "posthog-js/react";


const Wrappers = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<LazyMotion features={domAnimation}>
				<PostHogProvider>
				{children}
				</PostHogProvider>
				</LazyMotion>
			<Toaster position="bottom-right" />
		</>
	);
};

export default Wrappers;
