'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Hackathon Winning Projects',
      description: '8x National and International Hackathon Champion. Developed cutting-edge solutions in AI, ML, and web technologies.',
      badges: ['AI', 'ML', 'Full-Stack'],
      highlight: true,
    },
    {
      title: 'Open Source Contributions',
      description: 'Active contributor to various open-source projects. Committed to building tools that help the developer community.',
      badges: ['Open Source', 'Community', 'GitHub'],
    },
    {
      title: 'AI/ML Models',
      description: 'Developed and trained machine learning models for various applications including NLP and Computer Vision.',
      badges: ['TensorFlow', 'PyTorch', 'Data Science'],
    },
    {
      title: 'Web Applications',
      description: 'Built responsive and modern web applications using React, Next.js, and Node.js with focus on user experience.',
      badges: ['React', 'Next.js', 'Full-Stack'],
    },
    {
      title: 'Data Visualization Dashboards',
      description: 'Created interactive dashboards for data analysis and visualization using modern tools and frameworks.',
      badges: ['Data Viz', 'Analytics', 'Dashboard'],
    },
    {
      title: 'Automation Projects',
      description: 'Developed automation solutions using Python and scripting to streamline various processes.',
      badges: ['Python', 'Automation', 'DevOps'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotate: -5, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center gradient-text">
          Projects & Achievements
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -20,
                rotateZ: 2,
                boxShadow: '0 30px 60px rgba(236, 72, 153, 0.25)',
              }}
              className={`group rounded-3xl border-2 transition-all overflow-hidden cursor-pointer relative ${
                project.highlight
                  ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 border-purple-400 md:col-span-2 lg:col-span-1 shadow-2xl'
                  : 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-purple-200 dark:border-purple-900/50 hover:border-pink-400 dark:hover:border-pink-700 hover:bg-white/80 dark:hover:bg-slate-800/90 shadow-lg'
              }`}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent pointer-events-none"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />

              <div className="p-8 h-full flex flex-col relative z-10">
                <h3 className={`text-2xl font-black mb-3 group-hover:scale-105 transition-transform ${
                  project.highlight
                    ? 'text-white'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-6 flex-grow text-lg leading-relaxed ${
                  project.highlight ? 'text-white/95' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`px-3 py-1 text-xs rounded-full transition-all font-bold ${
                        project.highlight
                          ? 'bg-white/25 text-white hover:bg-white/40'
                          : 'bg-gradient-to-r from-purple-100 dark:from-purple-900/40 to-pink-100 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700 hover:border-purple-600 dark:hover:border-purple-500'
                      }`}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
