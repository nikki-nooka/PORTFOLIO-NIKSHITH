'use client'

import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'nookanikshithllpsdsnr@gmail.com',
      link: 'mailto:nookanikshithllpsdsnr@gmail.com',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nikshith-nooka-2580302a7',
      color: 'hover:text-blue-600',
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      link: '#',
      color: 'hover:text-gray-400',
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      link: '#',
      color: 'hover:text-blue-400',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto w-full"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center gradient-text">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-semibold">
              I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out if you'd like to connect!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border-2 border-purple-200 dark:border-purple-900/50 hover:border-pink-400 dark:hover:border-pink-700 hover:shadow-lg transition-all group"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      className="text-3xl text-purple-600 dark:text-purple-400 group-hover:scale-125 transition-transform"
                    >
                      <Icon />
                    </motion.div>
                    <div>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-bold uppercase">{info.label}</p>
                      <p className="font-black text-gray-800 dark:text-gray-200">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="flex flex-col items-center justify-center gap-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 font-black">Connect with me on social platforms</p>
              <div className="flex gap-8 justify-center">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{
                        scale: 1.4,
                        y: -10,
                        boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)',
                      }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                      className={`text-5xl text-purple-600 dark:text-purple-400 transition-all ${social.color} dark:hover:text-purple-300`}
                      title={social.name}
                    >
                      <Icon />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full"
            >
              <motion.a
                href="mailto:nookanikshithllpsdsnr@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(236, 72, 153, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-2xl font-black text-lg text-center block shadow-xl hover:shadow-2xl transition-all"
              >
                ✉️ Send Me an Email
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
