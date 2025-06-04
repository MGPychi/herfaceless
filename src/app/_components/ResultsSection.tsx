import React from 'react';
import * as motion from "framer-motion/m"; // Assuming this path is correct for your project setup
import { Button } from '@/components/ui/button'; // Make sure this path is correct

// Define your images array
const resultImages = [
  {
    id: 1,
    src: '/first-results/1.png',
    alt: 'Screenshot of sales results showing €277.13 gross volume',
  },
  {
    id: 2,
    src: '/first-results/2.png',
    alt: 'Screenshot of sales results showing €54.67 gross volume',
  },
  {
    id: 3,
    src: '/first-results/3.png',
    alt: 'Beacons notification: You made a sale for $112.20',
  },
  {
    id: 4,
    src: '/first-results/4.png',
    alt: 'Beacons notification: You made a sale for $97.00 for Ultimate Faceless Bundle',
  },
  {
    id: 5,
    src: '/first-results/5.png',
    alt: 'Dashboard showing $122.50 from 134 sales',
  },
  {
    id: 6,
    src: '/first-results/6.png',
    alt: 'Screenshot of total sales: $211.63 with a graph',
  },
];

const ResultsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Variants for the text block elements for a consistent reveal
  const textBlockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={cardVariants} // Re-using cardVariants, or create specific ones
          className="text-center mb-12 md:mb-16" // Added more bottom margin
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 md:mb-4 tracking-tight">
            Ready to see results like this?
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
            Some of the results I&apos;ve achieved with digital products:
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10" // Adjusted gap slightly for consistency
        >
          {resultImages.map((image) => (
            <motion.div
              key={image.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              // Added back shadow classes and ensured hover effect is smooth
              className="bg-white rounded-2xl  overflow-hidden transition-all duration-300 ease-out "
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Improved Text Section - Call to Action */}
        <motion.div className="text-center py-12 md:py-20"> {/* Increased vertical padding */}
          <motion.h4
            variants={textBlockVariants} // Apply animation
            className='text-3xl sm:text-4xl lg:text-4xl text-black font-bold tracking-tight leading-tight'
          // Increased size, added tracking-tight and leading-tight for compact, impactful look
          >
            Start selling your digital products today
          </motion.h4>
          <motion.p
            variants={textBlockVariants} // Apply animation
            className='mt-4 text-base sm:text-lg text-slate-700 max-w-lg md:max-w-xl mx-auto'
          // Adjusted size, softer color (slate-700), controlled width, and top margin
          >
            Join 30-DAY FACELESS LAUNCHPAD and start earning with digital products today.
          </motion.p>
          <motion.div
            variants={textBlockVariants} // Apply animation
            className="mt-8 md:mt-10" // Increased margin for button
          >
            <Button size="lg" className="text-lg"> {/* Example: slightly larger padding and text for button */}
              I am ready to Enroll {/* Corrected typos */}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultsSection;
