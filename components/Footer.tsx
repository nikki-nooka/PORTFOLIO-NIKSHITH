'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-white/80 dark:from-slate-900/80 via-purple-50/80 dark:via-purple-950/80 to-pink-50/80 dark:to-pink-950/80 backdrop-blur-lg border-t-2 border-purple-200 dark:border-purple-900/50 py-12 px-4 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.p 
          className="text-gray-800 dark:text-gray-200 mb-3 font-black text-lg gradient-text"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          © {currentYear} Nikshith Nooka. All rights reserved.
        </motion.p>
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Built with <span className="font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Next.js</span>, <span className="font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">React</span>, and <span className="font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tailwind CSS</span> ✨
        </motion.p>
      </motion.div>
    </footer>
  )
}
