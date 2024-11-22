"use client";
import React, { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "react-hot-toast";
import CSPostHogProvider from "./providers/PostHogProvider";


const Wrappers = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<LazyMotion features={domAnimation}>
				<CSPostHogProvider>
				{children}
				</CSPostHogProvider>
				</LazyMotion>
			<Toaster position="bottom-right" />
		</>
	);
};

export default Wrappers;
