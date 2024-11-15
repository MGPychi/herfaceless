import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Wrappers from "@/components/Wrappers";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
	title: "Her faceless",
	description: "A faceless learning platform for the modern web",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` `}>
				<Wrappers>{children}</Wrappers>
			</body>
		</html>
	);
}
