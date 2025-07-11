import { motion } from 'framer-motion'
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useCallback, useRef } from 'react'
import PdfCV from './PdfCV'
import { useTheme } from '../context/ThemeContext'
import { useCVData } from '../context/CVDataContext'

const Hero = () => {
  const { themeColors } = useTheme()
  const { personalInfo, isEditMode, updatePersonalInfo, mainMessage, updateMainMessage, mainAvailable, updateMainAvailable } = useCVData()
  
  const socialLinks = [
    { icon: Github, href: `https://${personalInfo.github}`, label: 'GitHub' },
    { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  // Ref para el componente PDF
  const pdfRef = useRef<HTMLDivElement>(null)

  // Función para generar el PDF del componente especial
  const handleDownloadPDF = useCallback(async () => {
    const html2pdf = (await import('html2pdf.js')).default
    if (!pdfRef.current) return
    html2pdf()
      .set({
        margin: 0,
        filename: 'CV-Robinson-Garcia.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#fff' },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      })
      .from(pdfRef.current)
      .save()
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* PDF CV oculto para exportar */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }} aria-hidden="true">
        <PdfCV ref={pdfRef} />
      </div>
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, ${themeColors.background}, ${themeColors.cardBg}, ${themeColors.primary}20)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center flex flex-col items-center">
          {/* Imagen de perfil */}
          <motion.img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 rounded-full object-cover border-4 shadow-lg mb-6"
            style={{ borderColor: themeColors.primary }}
          />
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span style={{ color: themeColors.text }}>Hola, soy </span>
              {isEditMode ? (
                <input
                  className="gradient-text font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  style={{ fontSize: 'inherit', color: themeColors.text }}
                  value={personalInfo.name}
                  onChange={e => updatePersonalInfo({ name: e.target.value })}
                />
              ) : (
                <span className="gradient-text">{personalInfo.name}</span>
              )}
            </h1>
            {isEditMode ? (
              <textarea
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                style={{ color: themeColors.text, width: '100%' }}
                value={mainMessage}
                onChange={e => updateMainMessage(e.target.value)}
                rows={2}
              />
            ) : (
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: themeColors.text }}>
                {mainMessage}
              </p>
            )}
          </motion.div>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div 
              className="inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-6 py-3"
              style={{
                backgroundColor: `${themeColors.cardBg}80`,
                border: `1px solid ${themeColors.primary}20`,
              }}
            >
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: themeColors.primary }}
              />
              <span className="font-medium" style={{ color: themeColors.primary }}>
                {isEditMode ? (
                  <input
                    className="font-medium bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    style={{ color: themeColors.primary }}
                    value={mainAvailable}
                    onChange={e => updateMainAvailable(e.target.value)}
                  />
                ) : (
                  mainAvailable
                )}
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.secondary})`,
                boxShadow: `0 10px 25px -5px ${themeColors.primary}25`,
              }}
            >
              <Download size={20} />
              <span>Descargar CV</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              style={{
                border: `1px solid ${themeColors.primary}30`,
                color: themeColors.primary,
              }}
            >
              <span>Ver Proyectos</span>
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 backdrop-blur-sm rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: `${themeColors.cardBg}80`,
                  border: `1px solid ${themeColors.primary}20`,
                  color: themeColors.primary,
                }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: themeColors.primary }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: themeColors.primary }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 