'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-purple-200/40 dark:from-purple-900/40 to-pink-200/40 dark:to-pink-900/40 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ top: '-10%', left: '-5%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-cyan-200/40 dark:from-cyan-900/40 to-blue-200/40 dark:to-blue-900/40 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ bottom: '-10%', right: '-5%' }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 dark:from-purple-900/40 to-pink-100 dark:to-pink-900/40 rounded-full border border-purple-300/50 dark:border-purple-700/50 text-sm font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            ✨ Welcome to my digital space
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          <span className="gradient-text">Nikshith</span>
          <br />
          <span className="text-gray-800 dark:text-gray-100">Nooka</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-bold"
        >
          AI/ML Innovator | Hackathon Champion | Google Campus Ambassador
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Building intelligent solutions that solve real-world problems | 8x Hackathon Winner | Open-Source Enthusiast
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
          >
            Explore My Work
            <motion.span
              className="group-hover:translate-x-2 transition-transform"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HiArrowRight />
            </motion.span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-xl font-bold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all"
          >
            Let\'s Connect
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <p className="text-gray-600 dark:text-gray-400 font-semibold mb-3">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-3xl text-purple-600 dark:text-purple-400"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
