import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Play } from "lucide-react";
import * as motion from "framer-motion/m";
import MainVideo from "../MainVideo";
import Link from "next/link";
import VisitorsCounter from "./VisitorsCounter";

export default function Hero() {
  return (
    <section className="min-h-[90vh]    !bg-ground relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
        whileInView={{ opacity: 0.2, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 w-[400px] h-[400px]"
      >
        <GeometricPattern />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
        whileInView={{ opacity: 0.2, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-0 bottom-0 w-[400px] h-[400px] rotate-180"
      >
        <GeometricPattern />
      </motion.div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center text-center  mx-auto space-y-8">
          <VisitorsCounter />
          {/* Badge */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-secondary text-white text-sm px-6  py-2 rounded-full uppercase tracking-wider"
          >
            The Ultimate Faceless Digital Course
          </motion.div>
          */}

          {/* Headings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              delay: 0.1,
            }}
            className="space-y-4"
          >
            <h1 className="text-2xl uppercase sm:text-4xl md:text-5xl font-bold leading-tight">
              30-DAY faceless launchpad
              <br />
            </h1>
            <p className="text-gray-700  sm:text-lg  max-w-3xl mx-auto">
              Build a Profitable Brand in 30 Days - With or Without Showing Your Face No followers. No experience. No adds. Just digital products & a system that works.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full"
          >
            <Card className="max-w-5xl mx-auto aspect-video  relative shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div>
                  <MainVideo />
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              delay: 0.2,
            }}
          >
            <Link href="/#pricing">
              <Button
                aria-label="join now button"
                className="  text-lg px-8 py-2 h-auto"
              >
                Get instant Access NOW!
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </section>
  );
}

function GeometricPattern() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full fill-current text-[#cce0ff]"
    >
      <rect x="0" y="0" width="33" height="33" />
      <rect x="33" y="33" width="33" height="33" />
      <rect x="66" y="66" width="33" height="33" />
    </svg>
  );
}

// function IllustrationFigure() {
// return (
//   <svg viewBox="0 0 100 100" className="w-full h-full">
//     <path
//       d="M50,20 C60,20 70,30 70,50 C70,70 60,80 50,80 C40,80 30,70 30,50 C30,30 40,20 50,20"
//       className="fill-[#003366]"
//     />
//     <path
//       d="M45,40 C55,40 65,45 65,60 C65,75 55,80 45,80 C35,80 25,75 25,60 C25,45 35,40 45,40"
//       className="fill-[#0066cc]"
//     />
//     <rect x="40" y="30" width="20" height="10" className="fill-[#e6f2ff]" />
//   </svg>
// );
// }
