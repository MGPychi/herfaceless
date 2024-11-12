import React from 'react';
import { Button } from '@/components/ui/button';
import * as motion from "framer-motion/m"

// Define animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Problem = () => {
  return (
    <div className="min-h-screen bg-ground">
      <div className="container mx-auto px-4 py-16">
        {/* First Section */}
        <motion.div
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-32"
        >
          <motion.div variants={fadeInUp} className="md:order-2">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
              You know you should be earning money from digital products now, but there is only one problem...
            </h1>
            <motion.p variants={fadeInUp} className="text-lg text-zinc-600">
              You have no idea where to start, and every time you try, you feel overwhelmed by the endless possibilities and steps involved.
            </motion.p>
          </motion.div>
          <motion.div variants={fadeInUp} className="md:order-1">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              <rect width="400" height="300" fill="#f3f4f6" />
              <circle cx="200" cy="150" r="80" fill="#d1d5db" />
              <rect x="160" y="220" width="80" height="60" fill="#9ca3af" />
              <circle cx="200" cy="130" r="30" fill="#6b7280" />
              <rect x="185" y="170" width="30" height="20" fill="#4b5563" />
              <path d="M140 230 Q200 180 260 230" fill="none" stroke="#4b5563" strokeWidth="4" />
              <circle cx="320" cy="70" r="20" fill="#d1d5db" />
              <path d="M320 90 Q340 110 360 90" fill="none" stroke="#9ca3af" strokeWidth="3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-12 mb-32"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">I want you to imagine this...</h2>
            <motion.div variants={fadeInUp} className="space-y-4 text-zinc-600">
              {[
                "You've spent weeks trying to piece together free resources, only to feel more confused than when you started.",
                "The idea of launching your own digital product feels daunting.",
                "You're worried you'll waste time, energy, and money on something that might not even sell.",
              ].map((text, index) => (
                <motion.p key={index} variants={fadeInUp}>
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              <rect width="400" height="300" fill="#f3f4f6" />
              <rect x="50" y="50" width="300" height="200" rx="10" fill="#d1d5db" />
              <rect x="70" y="70" width="260" height="160" rx="5" fill="#9ca3af" />
              <circle cx="200" cy="150" r="50" fill="#6b7280" />
              <path d="M180 170 L220 130 M180 130 L220 170" stroke="#f3f4f6" strokeWidth="8" />
              <rect x="100" y="230" width="200" height="10" rx="5" fill="#4b5563" />
              <rect x="150" y="250" width="100" height="10" rx="5" fill="#4b5563" />
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{ duration: 0.4 }}
          className="text-center space-y-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-2xl font-bold text-white inline-block bg-zinc-900 px-6 py-3 rounded-lg shadow-md"
          >
            But what if there was a clear, proven path that guided you every step of the way?
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#D2B48C]  hover:bg-[#C1A47B] text-zinc-900 font-bold  px-6 py-3 h-auto rounded-full shadow-lg transition-all duration-300 ease-in-out">
              I WANT TO START EARNING MONEY!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Problem;