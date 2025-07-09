import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Astrssuy', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/robinson-de-jesus-garcia-hidalgo-617bb02b1/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Robinxonx37@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-dark-950 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 mb-6 md:mb-0"
          >
            <span className="text-gray-400">
              © 2025 Robinson De Jesus Garcia Hidalgo. Hecho con
            </span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-gray-400">y mucho café</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4 mb-6 md:mb-0"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg text-purple-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <ArrowUp size={16} />
            <span>Volver arriba</span>
          </motion.button>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-purple-500/20 text-center"
        >
          <p className="text-gray-400 text-sm">
            Construido con React, TypeScript, Tailwind CSS y Framer Motion
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Optimizado para rendimiento y accesibilidad
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 