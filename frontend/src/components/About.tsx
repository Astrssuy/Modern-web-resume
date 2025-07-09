import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Nombre', value: 'Robinson De Jesus Garcia Hidalgo' },
    { icon: MapPin, label: 'Ubicación', value: 'República Dominicana, Santo Domingo' },
    { icon: Calendar, label: 'Teléfono', value: '+1 829 872 1049' },
    { icon: Mail, label: 'Correo', value: 'Robinxonx37@gmail.com / robinxonx37@hotmail.com' },
  ]

  return (
    <section id="about" className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre Mí</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Desarrollador apasionado con experiencia en tecnologías modernas y diseño de experiencias de usuario excepcionales.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Información Personal</h3>
            <div className="space-y-4">
              {/* Imagen de perfil */}
              <div className="flex justify-center mb-6">
                <img src="/I.jpg" alt="Robinson De Jesus Garcia Hidalgo" className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-lg" />
              </div>
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-dark-800/50 rounded-lg border border-purple-500/20"
                >
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <info.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-gray-100 font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Mi Historia</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Soy un desarrollador Full Stack con experiencia en el desarrollo web. 
                Me especializo en crear aplicaciones modernas y escalables utilizando las últimas tecnologías.
              </p>
              <p>
                Mi pasión por la tecnología comenzó cuando era adolescente, y desde entonces he estado 
                constantemente aprendiendo y mejorando mis habilidades. Me encanta resolver problemas 
                complejos y crear soluciones innovadoras.
              </p>
              <p>
                Cuando no estoy programando, disfruto de la fotografía, la música y los videojuegos. 
                Creo que estas actividades me ayudan a mantener una mente creativa y fresca.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-100 mb-4">Habilidades Principales</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind CSS'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 