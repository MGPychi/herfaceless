"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

const DownloadNewsLetters = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleDownload = async () => {
		setIsLoading(true);
		try {
			const response = await fetch("/api/download-newsletter");
			if (!response.ok) throw new Error("Download failed");
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.style.display = "none";
			a.href = url;
			a.download = "emails.csv";
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			document.body.removeChild(a);
		} catch (error) {
			console.error("Error downloading file:", error);
			toast("Failed to download the file. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div>
			<Button disabled={isLoading} onClick={handleDownload} className={`${isLoading&&"opacity-9e0"}`}>Downland</Button>
		</div>
	);
};

export default DownloadNewsLetters;
