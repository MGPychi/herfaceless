import React from 'react';
import * as motion from "framer-motion/m"

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={cardVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Ready to see results like this?
          </h1>
          <p className="text-lg text-slate-600">
            Some of the results I&apos;ve achieved with digital products:
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={cardVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Image Placeholder 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square bg-slate-200 flex items-center justify-center">
              <div className="text-slate-400 text-center">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm">Image Placeholder 1</p>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square bg-slate-200 flex items-center justify-center">
              <div className="text-slate-400 text-center">
                <div className="text-2xl mb-2">💰</div>
                <p className="text-sm">Image Placeholder 2</p>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square bg-slate-200 flex items-center justify-center">
              <div className="text-slate-400 text-center">
                <div className="text-2xl mb-2">📈</div>
                <p className="text-sm">Image Placeholder 3</p>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square bg-slate-200 flex items-center justify-center">
              <div className="text-slate-400 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm">Image Placeholder 4</p>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder 5 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square bg-slate-200 flex items-center justify-center">
              <div className="text-slate-400 text-center">
                <div className="text-2xl mb-2">🚀</div>
                <p className="text-sm">Image Placeholder 5</p>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder 6 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square bg-slate-200 flex items-center justify-center">
              <div className="text-slate-400 text-center">
                <div className="text-2xl mb-2">💎</div>
                <p className="text-sm">Image Placeholder 6</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultsSection;
