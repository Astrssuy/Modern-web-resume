import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { useCVData } from '../context/CVDataContext'
import { useTheme } from '../context/ThemeContext'

const iconMap = { Mail, Phone, MapPin, Github, Linkedin }

const Contact = () => {
  const {
    contactTitle,
    contactSubtitle,
    contactMessage,
    contactMethods,
    isEditMode,
    updateContactTitle,
    updateContactSubtitle,
    updateContactMessage,
    updateContactMethods
  } = useCVData()
  const { themeColors } = useTheme()

  // Handlers para edición
  const handleMethodChange = (idx: number, field: string, value: string) => {
    const newMethods = [...contactMethods]
    newMethods[idx] = { ...newMethods[idx], [field]: value }
    updateContactMethods(newMethods)
  }
  const handleAddMethod = () => {
    updateContactMethods([
      ...contactMethods,
      { type: 'custom', label: '', value: '', icon: '', url: '' }
    ])
  }
  const handleRemoveMethod = (idx: number) => {
    const newMethods = [...contactMethods]
    newMethods.splice(idx, 1)
    updateContactMethods(newMethods)
  }

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: `${themeColors.cardBg}50` }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              value={contactTitle}
              onChange={e => updateContactTitle(e.target.value)}
            />
          ) : (
            <h2 className="section-title">{contactTitle}</h2>
          )}
          {isEditMode ? (
            <input
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-center mt-2"
              style={{ color: themeColors.text }}
              value={contactSubtitle}
              onChange={e => updateContactSubtitle(e.target.value)}
            />
          ) : (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.text }}>{contactSubtitle}</p>
          )}
        </motion.div>
        <div className="bg-dark-900/50 rounded-xl p-8 shadow-lg border border-purple-500/20">
          {isEditMode ? (
            <textarea
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-center mb-6"
              style={{ color: themeColors.text }}
              value={contactMessage}
              onChange={e => updateContactMessage(e.target.value)}
              rows={2}
            />
          ) : (
            <p className="text-center mb-6" style={{ color: themeColors.text }}>{contactMessage}</p>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = iconMap[method.icon as keyof typeof iconMap] || Mail
              return (
                <div key={idx} className="flex items-center space-x-4 p-4 rounded-lg border" style={{ backgroundColor: `${themeColors.cardBg}50`, borderColor: `${themeColors.primary}20` }}>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${themeColors.primary}20` }}>
                    <Icon className="w-5 h-5" style={{ color: themeColors.primary }} />
                  </div>
                  <div className="flex-1">
                    {isEditMode ? (
                      <>
                        <input
                          className="font-medium bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-1"
                          style={{ color: themeColors.text }}
                          value={method.label}
                          onChange={e => handleMethodChange(idx, 'label', e.target.value)}
                          placeholder="Etiqueta"
                        />
                        <input
                          className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-1"
                          style={{ color: themeColors.text }}
                          value={method.value}
                          onChange={e => handleMethodChange(idx, 'value', e.target.value)}
                          placeholder="Valor"
                        />
                        <input
                          className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-1"
                          style={{ color: themeColors.text }}
                          value={method.url || ''}
                          onChange={e => handleMethodChange(idx, 'url', e.target.value)}
                          placeholder="URL (opcional)"
                        />
                        <select
                          className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full mb-1"
                          style={{ color: themeColors.text }}
                          value={method.icon || ''}
                          onChange={e => handleMethodChange(idx, 'icon', e.target.value)}
                        >
                          <option value="Mail">Mail</option>
                          <option value="Phone">Phone</option>
                          <option value="MapPin">MapPin</option>
                          <option value="Github">Github</option>
                          <option value="Linkedin">Linkedin</option>
                        </select>
                        <button className="text-red-500 mt-1" onClick={() => handleRemoveMethod(idx)}>Eliminar</button>
                      </>
                    ) : (
                      <>
                        <p className="text-sm" style={{ color: themeColors.text }}>{method.label}</p>
                        {method.url ? (
                          <a href={method.url} className="font-medium" style={{ color: themeColors.text }} target="_blank" rel="noopener noreferrer">{method.value}</a>
                        ) : (
                          <p className="font-medium" style={{ color: themeColors.text }}>{method.value}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )
            })}
            {isEditMode && (
              <button className="mt-4 px-3 py-1 bg-blue-500 text-white rounded" onClick={handleAddMethod}>
                + Añadir método de contacto
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 