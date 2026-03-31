'use client'

import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 z-[150]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      
      <nav className="fixed w-full top-0 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl z-50 border-b border-purple-200/50 dark:border-purple-900/50 shadow-lg dark:shadow-2xl dark:shadow-purple-900/20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl font-black gradient-text"
            >
              NN
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex gap-1"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold group transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="md:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pb-4 space-y-2 bg-gradient-to-b from-white dark:from-slate-900 to-purple-50 dark:to-slate-950/50 rounded-b-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-semibold rounded-lg hover:bg-purple-100/50 dark:hover:bg-purple-900/40 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  )
}
