'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'],
      icon: '💻',
    },
    {
      category: 'AI/ML & Data',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Google Gemini'],
      icon: '🤖',
    },
    {
      category: 'Databases & Tools',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Git', 'Docker', 'AWS'],
      icon: '🗄️',
    },
    {
      category: 'Specializations',
      skills: ['Machine Learning', 'Deep Learning', 'Data Visualization', 'Automation', 'Web Development', 'Open Source'],
      icon: '⚡',
    },
  ]

  const certifications = [
    'Introduction to Career Skills in Data Analytics',
    'GenAI 101',
    'CRUD Operations in MongoDB',
    'Data Visualization Fundamentals',
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.15)' }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-2 border-purple-200 dark:border-purple-900/50 rounded-2xl p-8 hover:border-pink-400 dark:hover:border-pink-700 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl group-hover:animate-bounce">{category.icon || '💡'}</span>
                <h3 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 dark:from-purple-900/40 to-pink-100 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm border-2 border-purple-300 dark:border-purple-700 hover:border-purple-600 dark:hover:border-purple-500 hover:shadow-lg transition-all font-bold cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-black gradient-text mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="bg-gradient-to-r from-purple-100 dark:from-purple-900/40 to-pink-100 dark:to-pink-900/40 border-2 border-purple-300 dark:border-purple-700 rounded-xl p-5 text-gray-800 dark:text-gray-200 hover:border-purple-600 dark:hover:border-purple-500 hover:shadow-lg transition-all font-bold flex items-center gap-3"
              >
                <span className="text-2xl">✓</span> {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
