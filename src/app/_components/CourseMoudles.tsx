import Image from "next/image";
import * as motion from 'framer-motion/m';
import { Card } from '@/components/ui/card';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: 'Module 01',
    lessonsCount: 6,
    lessons: [
      'Welcome (Start Here)',
      'What is a Digital Product?',
      'Top Niches & Tools to Start Selling Digital Products.',
      'Make a Perfect Store',
      'And more...'
    ]
  },
  {
    title: 'Module 02',
    lessonsCount: 12,
    lessons: [
      'The Smartest Path to Your First 10,000 Followers',
      'How to Convert More Viewers Into Followers',
      'Training The Algorithm',
      'And more...'
    ]
  },

  {
    title: 'Module 03',
    lessonsCount: 2,
    lessons: [
      'Unlock the bonuses',
    ]
  }
];

export default function ModulesComponent() {
  return (
    <div className="min-h-screen  bg-ground pt-4 py-4 md:py-6 lg:py-12 md:px-4 bg-gray-50">

      <div className="container mx-auto  ">

        <div className="bg-secondary mx-auto max-w-[250px] text-center py-2  text-white my-4 font-bold rounded-full px-8 ">
          Curriculum
        </div>
        <div className="flex flex-col lg:flex-row  items-center">
          {/* Left side - Course modules */}
          <div className="w-full lg:w-1/2 rounded-2xl py-2 px-4 md:px-8 py-8 space-y-8">
            {modules.map((mod, index) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative  hidden md:block  mt-2 flex h-4 w-4 flex-shrink-0 items-center justify-center">
                    <div className="h-4 w-4rounded-full bg-black" />
                  </div>
                  {/* Card */}
                  <Card className="flex-1 border-none bg-white shadow-md">
                    <div className="flex justify-between items-center p-6 border-b">
                      <h3 className="text-xl font-semibold text-gray-900">{mod.title}</h3>
                      <span className="bg-[#B8A394] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {mod.lessonsCount} Lessons
                      </span>
                    </div>
                    <div className="p-6 space-y-3">
                      {mod.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="text-gray-800 hover:text-gray-900 cursor-pointer "
                        >
                          -{lesson}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Device mockups */}
          <div className="relative flex  items-center w-full lg:w-1/2">
            <Image
              src="/modules-image.png"
              alt="Course content displayed on multiple devices showing Canva interface"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <motion.div className="text-center  md:m-0 bg-ground py-4  "> {/* Increased vertical padding */}
        <motion.h4
          className='text-2xl sm:text-4xl lg:text-5xl text-black font-bold tracking-tight leading-tight'
        // Increased size, added tracking-tight and leading-tight for compact, impactful look
        >
          Join 30-DAY FACELESS LAUNCHPAD
        </motion.h4>
        <motion.p
          className='mt-4 text-sm sm:text-lg italic  text-slate-700 max-w-lg md:max-w-xl mx-auto'
        // Adjusted size, softer color (slate-700), controlled width, and top margin
        >
          Get the tools to fast-track your digital product success.
        </motion.p>
        <motion.div
          className="mt-8 md:mt-6" // Increased margin for button
        >
          <Link href="#pricing">
            <Button size="lg" className="text-lg"> {/* Example: slightly larger padding and text for button */}
              I&apos;am Ready To Entroll
            </Button>
          </Link>
          <p className="mt-4 text-sm sm:text-base italic  text-slate-700 max-w-lg md:max-w-xl mx-auto mt-4">
            And claim all the bonuses...
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
