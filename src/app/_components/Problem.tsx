"use client"

import * as motion  from "framer-motion/m"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Problem() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* First Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-24"
        >
          <div className="md:order-2">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              You know you should be earning money from digital products now, but there is only one problem...
            </h1>
            <p className="text-lg text-zinc-600">
              You have no idea where to start, and every time you try, you feel overwhelmed by the endless possibilities and steps involved.
            </p>
          </div>
          <div className="md:order-1">
            <Image
              src="/placeholder.svg"
              alt="Person working with laptop and cat"
              width={500}
              height={400}
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">I want you to imagine this...</h2>
            <div className="space-y-4 text-zinc-600">
              <p>You have spent weeks trying to piece together free resources, only to feel more confused than when you started.</p>
              <p>The idea of launching your own digital product feels daunting.</p>
              <p>You are worried you all waste time, energy, and money on something that might not even sell.</p>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Person frustrated at laptop"
              width={500}
              height={400}
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 inline-block bg-black text-white px-4 py-2">
            But what if there was a clear, proven path that guided you every step of the way?
          </h2>
          
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-[#D2B48C] hover:bg-[#C1A47B] text-black font-bold text-lg px-8 py-6 h-auto"
            >
              I WANT TO START EARNING MONEY!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}