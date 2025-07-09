import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Robinxonx37@gmail.com',
      href: 'mailto:Robinxonx37@gmail.com'
    },
    {
      icon: Mail,
      label: 'Email alternativo',
      value: 'robinxonx37@hotmail.com',
      href: 'mailto:robinxonx37@hotmail.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+1 829 872 1049',
      href: 'tel:+18298721049'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'República Dominicana, Santo Domingo',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Astrssuy', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/robinson-de-jesus-garcia-hidalgo-617bb02b1/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Robinxonx37@gmail.com', label: 'Email' },
  ]

  return (
    <section id="contact" className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contacto</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él! Estoy siempre abierto a nuevas oportunidades.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label + info.value}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-dark-800/50 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                  >
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <info.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-gray-100 font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-100 mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg text-purple-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-gray-100">Disponible para proyectos</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Actualmente estoy disponible para nuevos proyectos freelance y oportunidades de colaboración.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Envíame un Mensaje</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-dark-900/50 border border-purple-500/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-dark-900/50 border border-purple-500/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="tu.email@ejemplo.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-dark-900/50 border border-purple-500/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-900/50 border border-purple-500/30 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 