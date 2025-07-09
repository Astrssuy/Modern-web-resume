import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react'
import { useCVData } from '../context/CVDataContext'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { personalInfo, about, skills } = useCVData()
  const { themeColors } = useTheme()

  const personalInfoItems = [
    { icon: User, label: 'Nombre', value: personalInfo.name },
    { icon: MapPin, label: 'Ubicación', value: personalInfo.location },
    { icon: Phone, label: 'Teléfono', value: personalInfo.phone },
    { icon: Mail, label: 'Correo', value: personalInfo.email },
  ]

  return (
    <section id="about" className="py-20" style={{ backgroundColor: `${themeColors.cardBg}50` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre Mí</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: themeColors.text }}>
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
            <h3 className="text-2xl font-bold mb-6" style={{ color: themeColors.text }}>
              Información Personal
            </h3>
            <div className="space-y-4">
              {/* Imagen de perfil */}
              <div className="flex justify-center mb-6">
                <img 
                  src="/I.jpg" 
                  alt={personalInfo.name} 
                  className="w-32 h-32 rounded-full object-cover border-4 shadow-lg"
                  style={{ borderColor: themeColors.primary }}
                />
              </div>
              {personalInfoItems.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg border"
                  style={{
                    backgroundColor: `${themeColors.cardBg}50`,
                    borderColor: `${themeColors.primary}20`,
                  }}
                >
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${themeColors.primary}20` }}
                  >
                    <info.icon className="w-5 h-5" style={{ color: themeColors.primary }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: themeColors.text }}>
                      {info.label}
                    </p>
                    <p className="font-medium" style={{ color: themeColors.text }}>
                      {info.value}
                    </p>
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
            <h3 className="text-2xl font-bold mb-6" style={{ color: themeColors.text }}>
              Mi Historia
            </h3>
            <div className="space-y-4" style={{ color: themeColors.text }}>
              <p>
                {about}
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
              <h4 className="text-lg font-semibold mb-4" style={{ color: themeColors.text }}>
                Habilidades Principales
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 5).map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-tag"
                  >
                    {skill.name}
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