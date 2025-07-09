import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, GraduationCap, Award } from 'lucide-react'

const Experience = () => {
  const education = [
    {
      title: 'Software Development Technology',
      institution: 'ITLA',
      period: '2021 - 2025',
      location: 'Santo Domingo, República Dominicana',
      description: 'Formación en desarrollo de software con enfoque en tecnologías modernas y mejores prácticas de programación.',
      type: 'education'
    },
    {
      title: 'Computer Technician',
      institution: 'CENTLA',
      period: '2015',
      location: 'Santo Domingo, República Dominicana',
      description: 'Formación técnica en informática y sistemas computacionales.',
      type: 'education'
    }
  ]

  const certifications = [
    {
      title: 'Ethical Hacker',
      institution: 'Cisco',
      period: 'Mayo 2025',
      location: 'Online',
      description: 'Certificación en seguridad informática y técnicas de hacking ético.',
      type: 'certification'
    },
    {
      title: 'Introduction to IoT',
      institution: 'Cisco',
      period: 'Mayo 2025',
      location: 'Online',
      description: 'Fundamentos de Internet de las Cosas y tecnologías IoT.',
      type: 'certification'
    },
    {
      title: 'IT Essentials',
      institution: 'Cisco',
      period: 'Diciembre 2021',
      location: 'Online',
      description: 'Fundamentos de tecnologías de la información y sistemas computacionales.',
      type: 'certification'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Educación y Certificaciones</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Mi formación académica y certificaciones profesionales que respaldan mi experiencia técnica.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="text-purple-500 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-100">Educación</h3>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-dark-950 z-10"></div>

                  <div className="ml-16">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-100 mb-2">{item.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <GraduationCap size={16} />
                              <span>{item.institution}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{item.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <Award className="text-purple-500 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-100">Certificaciones</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Award className="text-purple-500 mr-3" size={24} />
                  <h4 className="text-lg font-bold text-gray-100">{cert.title}</h4>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Briefcase size={14} />
                    <span>{cert.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Calendar size={14} />
                    <span>Expedición: {cert.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <MapPin size={14} />
                    <span>{cert.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 