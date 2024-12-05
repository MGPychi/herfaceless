"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import * as motion from "framer-motion/m";
import { useState } from "react";

const DownloadBook = () => {
	const [isDownloading, setIsDownloading] = useState(false);
	const handleDownload = async () => {
		setIsDownloading(true);
		try {
			const response = await fetch("/api/download");
			if (!response.ok) throw new Error("Download failed");

			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.style.display = "none";
			a.href = url;
			a.download = "The-UltimateDigitalCourse.pdf";
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			document.body.removeChild(a);
		} catch (error) {
			console.error("Error downloading file:", error);
			alert("Failed to download the file. Please try again.");
		} finally {
			setIsDownloading(false);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.6 }}
		>
			<Button
				className="w-full h-12 text-lg bg-[#96735f] hover:bg-[#96735f]/90 text-white"
				onClick={handleDownload}
				disabled={isDownloading}
			>
				<Download className="mr-2 h-5 w-5" />
				{isDownloading ? "Downloading..." : "Download Your Course"}
			</Button>
		</motion.div>
	);
};

export default DownloadBook;
