import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Wrappers from "@/components/Wrappers";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";


export const metadata: Metadata = {
  title: "Her faceless",
  description: "HerFaceless: Learn How to Make Money with Faceless Content on Canva and Instagram. Discover step-by-step tutorials, tips, and strategies to create faceless content that stands out. Whether you're a beginner or looking to grow your side hustle, HerFaceless teaches you how to monetize content creation without showing your face. Master Canva for designing eye-catching visuals and leverage Instagram to build a profitable, faceless brand. Start your journey to financial freedom today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Wrappers>{children}</Wrappers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
