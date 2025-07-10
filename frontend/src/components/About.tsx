import { motion } from 'framer-motion'
import { User, MapPin, Mail, Phone } from 'lucide-react'
import { useCVData } from '../context/CVDataContext'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { personalInfo, about, aboutSubtitle, aboutTitle, aboutHistory, isEditMode, updatePersonalInfo, updateAbout, updateAboutSubtitle, updateAboutTitle, updateAboutHistory, skillCategories, updateSkillCategories } = useCVData()
  const { themeColors } = useTheme()

  const personalInfoItems = [
    { icon: User, label: 'Nombre', value: personalInfo.name, key: 'name' },
    { icon: MapPin, label: 'Ubicación', value: personalInfo.location, key: 'location' },
    { icon: Phone, label: 'Teléfono', value: personalInfo.phone, key: 'phone' },
    { icon: Mail, label: 'Correo', value: personalInfo.email, key: 'email' },
    { icon: null, label: 'Título', value: personalInfo.title, key: 'title' },
    { icon: null, label: 'GitHub', value: personalInfo.github, key: 'github' },
    { icon: null, label: 'LinkedIn', value: personalInfo.linkedin, key: 'linkedin' },
  ]

  const handlePersonalInfoChange = (key: string, value: string) => {
    updatePersonalInfo({ [key]: value })
  }

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        if (typeof ev.target?.result === 'string') {
          // updateProfileImage(ev.target.result) // This line was removed as per the edit hint
        }
      }
      reader.readAsDataURL(file)
    }
  }

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
          <h2 className="section-title">
            {isEditMode ? (
              <input
                className="section-title bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                style={{ color: themeColors.text }}
                value={aboutTitle}
                onChange={e => updateAboutTitle(e.target.value)}
              />
            ) : (
              aboutTitle
            )}
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: themeColors.text }}>
            {isEditMode ? (
              <input
                className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                style={{ color: themeColors.text }}
                value={aboutSubtitle}
                onChange={e => updateAboutSubtitle(e.target.value)}
              />
            ) : (
              aboutSubtitle
            )}
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
              <div className="flex flex-col items-center mb-6">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-32 h-32 rounded-full object-cover border-4 shadow-lg"
                  style={{ borderColor: themeColors.primary }}
                />
                {isEditMode && (
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-2"
                    onChange={handleProfileImageChange}
                  />
                )}
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
                  {info.icon && (
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${themeColors.primary}20` }}
                    >
                      <info.icon className="w-5 h-5" style={{ color: themeColors.primary }} />
                    </div>
                  )}
                  <div>
                    <p className="text-sm" style={{ color: themeColors.text }}>
                      {info.label}
                    </p>
                    {isEditMode ? (
                      <input
                        className="font-medium bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        style={{ color: themeColors.text }}
                        value={info.value}
                        onChange={e => handlePersonalInfoChange(info.key, e.target.value)}
                      />
                    ) : (
                      <p className="font-medium" style={{ color: themeColors.text }}>
                        {info.value}
                      </p>
                    )}
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
              {isEditMode ? (
                <textarea
                  className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
                  style={{ color: themeColors.text }}
                  value={about}
                  onChange={e => updateAbout(e.target.value)}
                  rows={2}
                />
              ) : (
                <p>{about}</p>
              )}
              {aboutHistory.map((paragraph, idx) => (
                isEditMode ? (
                  <textarea
                    key={idx}
                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
                    style={{ color: themeColors.text }}
                    value={paragraph}
                    onChange={e => {
                      const newHistory = [...aboutHistory]
                      newHistory[idx] = e.target.value
                      updateAboutHistory(newHistory)
                    }}
                    rows={2}
                  />
                ) : (
                  <p key={idx}>{paragraph}</p>
                )
              ))}
              {isEditMode && (
                <button
                  className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                  onClick={() => updateAboutHistory([...aboutHistory, ''])}
                >
                  + Añadir párrafo
                </button>
              )}
            </div>

            {/* Skills Preview */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4" style={{ color: themeColors.text }}>
                {isEditMode ? (
                  <input
                    className="text-lg font-semibold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    style={{ color: themeColors.text }}
                    value="Habilidades Principales"
                    readOnly
                  />
                ) : (
                  'Habilidades Principales'
                )}
              </h4>
              <div className="flex flex-wrap gap-2">
                {isEditMode ? (
                  <>
                    {skillCategories.length > 0 && skillCategories[0].skills.slice(0, 5).map((skill, index) => (
                      <input
                        key={skill.name + index}
                        className="skill-tag bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        style={{ color: themeColors.text }}
                        value={skill.name}
                        onChange={e => {
                          const newCategories = [...skillCategories]
                          newCategories[0].skills[index].name = e.target.value
                          updateSkillCategories(newCategories)
                        }}
                      />
                    ))}
                    <button
                      className="px-2 py-1 bg-blue-500 text-white rounded"
                      onClick={() => {
                        if (skillCategories.length > 0) {
                          const newCategories = [...skillCategories]
                          newCategories[0].skills.push({ name: '', level: 50, category: newCategories[0].title })
                          updateSkillCategories(newCategories)
                        }
                      }}
                    >
                      +
                    </button>
                  </>
                ) : (
                  skillCategories.length > 0 && skillCategories[0].skills.slice(0, 5).map((skill, index) => (
                    <motion.span
                      key={skill.name + index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="skill-tag"
                    >
                      {skill.name}
                    </motion.span>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 