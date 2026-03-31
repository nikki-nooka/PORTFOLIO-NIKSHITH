'use client'

import { useEffect, useState } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setThemeMode } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-1 rounded-xl border border-purple-300/60 dark:border-purple-700/60 bg-white/70 dark:bg-slate-900/60 p-1 backdrop-blur">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setThemeMode('light')}
        className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
          theme === 'light'
            ? 'bg-purple-600 text-white'
            : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
        }`}
        title="Enable light mode"
      >
        <BsSun size={14} />
        Light
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setThemeMode('dark')}
        className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all ${
          theme === 'dark'
            ? 'bg-purple-600 text-white'
            : 'text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
        }`}
        title="Enable dark mode"
      >
        <BsMoon size={14} />
        Dark
      </motion.button>
    </div>
  )
}
