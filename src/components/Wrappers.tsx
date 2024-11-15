"use client";
import React, { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "react-hot-toast";
const Wrappers = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<LazyMotion features={domAnimation}>{children}</LazyMotion>
			<Toaster position="bottom-right" />
		</>
	);
};

export default Wrappers;
