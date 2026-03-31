'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center gradient-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -10 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative aspect-square rounded-3xl shadow-2xl overflow-hidden border border-white/40 dark:border-slate-700/60">
              <Image
                src="/profile.jpeg"
                alt="Nikshith Nooka"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed break-text">
              I'm an AI/ML undergraduate at Malla Reddy University with a passion for building intelligent solutions. As a Google Campus Ambassador, I actively contribute to the tech community and mentor aspiring developers.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              With 8 national and international hackathon wins, I've demonstrated my ability to innovate under pressure and deliver impactful solutions. I'm an open-source contributor and have experience with cutting-edge AI technologies including Google Gemini, PyTorch, and TensorFlow.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My journey spans from AI development and machine learning to web development and full-stack engineering. I'm driven by curiosity and the desire to solve real-world problems through technology.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-purple-600 dark:text-purple-400 text-sm uppercase tracking-widest mb-4 font-black">📍 Location</p>
              <p className="text-gray-800 dark:text-gray-200 text-lg font-black">Hyderabad, Telangana, India</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
