'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: 'Xyzon Innovations Private Limited',
      position: 'Artificial Intelligence Intern',
      period: 'February 2026 - Present',
      location: 'Chennai',
      description: 'Developing AI solutions and implementing machine learning models for production systems.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Elite Coders',
      position: 'Open Source Contributor',
      period: 'January 2026 - Present',
      location: 'Remote',
      description: 'Contributing to open-source projects and collaborating with global developers.',
      color: 'from-pink-500 to-orange-500',
    },
    {
      company: 'The Student Spot',
      position: 'Operations and Community Lead',
      period: 'January 2026 - Present',
      location: 'Remote',
      description: 'Leading operations and building community initiatives for student engagement.',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      company: 'Google',
      position: 'Campus Ambassador',
      period: 'August 2025 - Present',
      location: 'Hyderabad, India',
      description: 'Representing Google on campus and promoting Google technologies to students.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      company: 'Swecha Telangana',
      position: 'Frontend Developer',
      period: 'September 2025 - November 2025',
      location: 'Hyderabad, India',
      description: 'Developed responsive web interfaces using React and modern web technologies.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      company: 'HexSoftwares',
      position: 'Artificial Intelligence Intern',
      period: 'September 2025 - October 2025',
      location: 'Hyderabad, India',
      description: 'Implemented AI algorithms and worked on machine learning projects.',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center gradient-text">
          Experience
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="relative"
        >
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 opacity-30 dark:opacity-40 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'} ml-28 md:ml-0`}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute left-0 md:left-1/2 top-6 w-5 h-5 bg-gradient-to-br ${exp.color} rounded-full border-4 border-white dark:border-slate-800 shadow-lg transform -translate-x-2.5 md:translate-x-1.5`}
                whileHover={{ scale: 1.3 }}
              />

              <motion.div
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-2 border-purple-200 dark:border-purple-900/50 rounded-2xl p-6 ml-8 md:ml-0 hover:border-pink-400 dark:hover:border-pink-700 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className={`text-2xl font-black bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.position}
                  </h3>
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-bold mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-bold text-lg mb-1">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 font-semibold">📍 {exp.location}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
