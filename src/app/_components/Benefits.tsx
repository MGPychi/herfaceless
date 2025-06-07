"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Info,
  Mic,
  Lightbulb,
  DollarSign,
  ScanFaceIcon,
} from "lucide-react";
import * as motion from "framer-motion/m";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import SectionImage from "../../../public/phones.webp"

const benefits = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "The exact content system i use",
    description: "Weekly expert guidance and actionable strategies to keep you on track and motivated.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "How to pick a profitable niche",
    description:
      "Step-by-step blueprints for business growth, tailored to your industry and goals.",
  },

  {
    icon: <ScanFaceIcon className="w-6 h-6 " />,
    title: "How to go faceless and still grow fast",
    description: "",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "How to make your first sale in 30 days",
    description:
      "Proven strategies to boost your income and scale your business efficiently.",
  },
];

export default function Benefits() {
  return (
    <>
      <section className="py-4 md:py-24 px-4 bg-gradient-to-b   bg-ground  overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-secondary">
              Here is What You Get Inside
              <br className="hidden md:inline" /> the Course:
            </h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Everything you need in one place.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative mx-auto lg:mx-0 order-2 lg:order-1">
                <div className="relative aspect-square">
                  <Image src={SectionImage} alt="section image" />
                </div>
              </div>

              <div className="space-y-4 order-1 lg:order-2">
                <TooltipProvider>
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <BenefitItem benefit={benefit} />
                    </motion.div>
                  ))}
                </TooltipProvider>
              </div>
            </div>

          </motion.div >
        </div>
      </section >

      <motion.div className="text-center bg-white py-12 md:py-20"> {/* Increased vertical padding */}
        <motion.h4
          className='text-2xl sm:text-4xl lg:text-4xl text-black font-bold tracking-tight leading-tight'
        // Increased size, added tracking-tight and leading-tight for compact, impactful look
        >
          Unlock my digital product system
        </motion.h4>
        <motion.p
          className='mt-4 text-sm sm:text-base  text-slate-700 max-w-lg md:max-w-xl mx-auto'
        // Adjusted size, softer color (slate-700), controlled width, and top margin
        >
          Join now to access proven strategies for building your digital product empire.
        </motion.p>
        <motion.div
          className="mt-8 md:mt-6" // Increased margin for button
        >
          <Link href="#pricing">
            <Button size="lg" className="text-lg"> {/* Example: slightly larger padding and text for button */}
              Claim Your Spot Now
            </Button>
          </Link>
          <p className="mt-4 text-sm sm:text-base  text-slate-700 max-w-lg md:max-w-xl mx-auto mt-4">
            And claim all the bonuses...
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

function BenefitItem({ benefit }: { benefit: Benefit }) {
  return (
    <Card className="p-2 py-4 md:!p-6 flex min-h-[135px]  items-start gap-4 group hover:bg-[#f0f8ff] transition-colors duration-300 cursor-pointer">
      <div className="p-3 rounded-full bg-secondary text-white shrink-0">
        {benefit.icon}
      </div>
      <div className="flex-grow">
        <h3 className=" md:text-xl font-semibold text-secondary mb-2 group-hover:text-[#0066cc] transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-gray-600 text-xs">{benefit.description}</p>
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="info button"
            variant="ghost"
            size="icon"
            className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Info className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        {/*
        <TooltipContent side="left" className="max-w-xs">
          <p>{benefit.description}</p>
        </TooltipContent>
        */}
      </Tooltip>
    </Card>

  );
}


