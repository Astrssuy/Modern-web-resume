import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, GraduationCap, Award } from 'lucide-react'
import { useCVData } from '../context/CVDataContext'
import { useTheme } from '../context/ThemeContext'

const Experience = () => {
  const {
    educationTitle,
    educationSubtitle,
    certificationsTitle,
    certificationsSubtitle,
    education,
    certifications,
    isEditMode,
    updateEducationTitle,
    updateEducationSubtitle,
    updateCertificationsTitle,
    updateCertificationsSubtitle,
    updateEducation,
    updateCertifications
  } = useCVData()
  const { themeColors } = useTheme()

  // Handlers para edición
  const handleEducationChange = (idx: number, field: string, value: string) => {
    const newEducation = [...education]
    newEducation[idx] = { ...newEducation[idx], [field]: value }
    updateEducation(newEducation)
  }
  const handleAddEducation = () => {
    updateEducation([
      ...education,
      { title: '', institution: '', period: '', location: '', description: '' }
    ])
  }
  const handleRemoveEducation = (idx: number) => {
    const newEducation = [...education]
    newEducation.splice(idx, 1)
    updateEducation(newEducation)
  }
  const handleCertificationChange = (idx: number, field: string, value: string) => {
    const newCerts = [...certifications]
    newCerts[idx] = { ...newCerts[idx], [field]: value }
    updateCertifications(newCerts)
  }
  const handleAddCertification = () => {
    updateCertifications([
      ...certifications,
      { title: '', institution: '', period: '', location: '', description: '' }
    ])
  }
  const handleRemoveCertification = (idx: number) => {
    const newCerts = [...certifications]
    newCerts.splice(idx, 1)
    updateCertifications(newCerts)
  }

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
          {isEditMode ? (
            <input
              className="section-title bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-center"
              style={{ color: themeColors.text }}
              value={educationTitle}
              onChange={e => updateEducationTitle(e.target.value)}
            />
          ) : (
            <h2 className="section-title">{educationTitle}</h2>
          )}
          {isEditMode ? (
            <input
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-center mt-2"
              style={{ color: themeColors.text }}
              value={educationSubtitle}
              onChange={e => updateEducationSubtitle(e.target.value)}
            />
          ) : (
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">{educationSubtitle}</p>
          )}
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
            {isEditMode ? (
              <input
                className="text-2xl font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-100"
                value={educationTitle}
                onChange={e => updateEducationTitle(e.target.value)}
              />
            ) : (
              <h3 className="text-2xl font-bold text-gray-100">{educationTitle}</h3>
            )}
          </div>
          <div className="relative">
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
                  <div className="absolute left-6 top-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-dark-950 z-10"></div>
                  <div className="ml-16">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-dark-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          {isEditMode ? (
                            <>
                              <input
                                className="text-xl font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-100 mb-2"
                                value={item.title}
                                onChange={e => handleEducationChange(index, 'title', e.target.value)}
                              />
                              <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-2">
                                <input
                                  className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                                  value={item.institution}
                                  onChange={e => handleEducationChange(index, 'institution', e.target.value)}
                                  placeholder="Institución"
                                />
                                <input
                                  className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                                  value={item.period}
                                  onChange={e => handleEducationChange(index, 'period', e.target.value)}
                                  placeholder="Periodo"
                                />
                                <input
                                  className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                                  value={item.location}
                                  onChange={e => handleEducationChange(index, 'location', e.target.value)}
                                  placeholder="Ubicación"
                                />
                              </div>
                            </>
                          ) : (
                            <>
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
                            </>
                          )}
                        </div>
                        {isEditMode && (
                          <button className="text-red-500 ml-4" onClick={() => handleRemoveEducation(index)}>Eliminar</button>
                        )}
                      </div>
                      {isEditMode ? (
                        <textarea
                          className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-300 mb-2"
                          value={item.description}
                          onChange={e => handleEducationChange(index, 'description', e.target.value)}
                          placeholder="Descripción"
                          rows={2}
                        />
                      ) : (
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              {isEditMode && (
                <button className="mt-4 px-3 py-1 bg-blue-500 text-white rounded" onClick={handleAddEducation}>
                  + Añadir educación
                </button>
              )}
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
            {isEditMode ? (
              <input
                className="text-2xl font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-100"
                value={certificationsTitle}
                onChange={e => updateCertificationsTitle(e.target.value)}
              />
            ) : (
              <h3 className="text-2xl font-bold text-gray-100">{certificationsTitle}</h3>
            )}
          </div>
          {isEditMode ? (
            <input
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-center mb-4"
              style={{ color: themeColors.text }}
              value={certificationsSubtitle}
              onChange={e => updateCertificationsSubtitle(e.target.value)}
            />
          ) : (
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-4">{certificationsSubtitle}</p>
          )}
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
                  {isEditMode ? (
                    <input
                      className="text-lg font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-100"
                      value={cert.title}
                      onChange={e => handleCertificationChange(index, 'title', e.target.value)}
                    />
                  ) : (
                    <h4 className="text-lg font-bold text-gray-100">{cert.title}</h4>
                  )}
                </div>
                <div className="space-y-2 mb-4">
                  {isEditMode ? (
                    <>
                      <input
                        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm text-gray-400 mr-2"
                        value={cert.institution}
                        onChange={e => handleCertificationChange(index, 'institution', e.target.value)}
                        placeholder="Institución"
                      />
                      <input
                        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm text-gray-400 mr-2"
                        value={cert.period}
                        onChange={e => handleCertificationChange(index, 'period', e.target.value)}
                        placeholder="Periodo"
                      />
                      <input
                        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm text-gray-400 mr-2"
                        value={cert.location}
                        onChange={e => handleCertificationChange(index, 'location', e.target.value)}
                        placeholder="Ubicación"
                      />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
                {isEditMode ? (
                  <textarea
                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-300 mb-2"
                    value={cert.description}
                    onChange={e => handleCertificationChange(index, 'description', e.target.value)}
                    placeholder="Descripción"
                    rows={2}
                  />
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                )}
                {isEditMode && (
                  <button className="text-red-500 mt-2" onClick={() => handleRemoveCertification(index)}>Eliminar</button>
                )}
              </motion.div>
            ))}
            {isEditMode && (
              <button className="mt-4 px-3 py-1 bg-blue-500 text-white rounded" onClick={handleAddCertification}>
                + Añadir certificación
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 