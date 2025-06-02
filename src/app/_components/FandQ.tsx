"use client";

import * as motion from "framer-motion/m";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Monitor,
  HeadphonesIcon,
  MapPin,
  HelpCircle,
  Users,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How soon can I start?",
    answer: "You can start immediately after completing your registration. All course materials and resources will be instantly available to you.",
    icon: Clock,
  },
  {
    question: "Will this work if I use different platforms?",
    answer: "Yes! Our system is platform-agnostic and works across all major platforms and devices.",
    icon: Monitor,
  },
  {
    question: "Is there any live support?",
    answer: "We offer 24/7 live support through our dedicated support team to help you with any questions or concerns.",
    icon: HeadphonesIcon,
  },
  {
    question: "What will I receive once I purchase?",
    answer: "You'll get immediate access to all course materials, templates, resources, and our community platform.",
    icon: MapPin,
  },
  {
    question:
      "I've never created a digital product before. Will this work for me?",
    answer: "Our program is designed for beginners and includes step-by-step guidance to help you succeed.",
    icon: HelpCircle,
  },
  {
    question: "Can I use this if I want to create products for my clients?",
    answer: "Yes! You can use our resources to create products for both yourself and your clients.",
    icon: Users,
  },
  {
    question: "Why the Course priced the way it is?",
    answer: "Our pricing reflects the comprehensive value of our program, including all resources, support, and community access.",
    icon: DollarSign,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FandQ() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-ground to-white ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">FAQs</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our Course
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <motion.div key={index} variants={item}>
                <Accordion
                  type="single"
                  collapsible
                  className="bg-white rounded-lg shadow-md"
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="flex flex-col gap-6 items-center py-8 pt-12 md:pt-16 text-center max-w-3xl mx-auto">
          <h4 className="font-bold uppercase text-3xl md:text-4xl  tracking-tight text-secondary    ">
            Join 30-day Faceless Launchpad
          </h4>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Learn how to create, launch, and sell digital products successfully - without wasting time or money.
          </p>
          <Button className="text-lg px-8 py-6 rounded-full    hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all">
            Yes, I Want In
          </Button>
          <p className="text-lg text-gray-500 italic">
            Offer may go back to $129 soon. Claim all the bonuses before it's too late!
          </p>
        </div>
      </div>
    </section>
  );
}
