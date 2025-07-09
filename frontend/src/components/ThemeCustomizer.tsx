import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ThemeCustomizer = () => {
  const { isDark, toggleTheme, selectedColor, setSelectedColor, themeColors } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const colorOptions = [
    { name: 'purple', color: '#8B5CF6' },
    { name: 'blue', color: '#3B82F6' },
    { name: 'green', color: '#10B981' },
    { name: 'red', color: '#EF4444' },
    { name: 'orange', color: '#F97316' },
    { name: 'pink', color: '#EC4899' },
    { name: 'teal', color: '#14B8A6' },
    { name: 'indigo', color: '#6366F1' },
  ]

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Botón principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.secondary})`,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      </motion.button>

      {/* Panel de personalización */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6"
            style={{
              backgroundColor: themeColors.cardBg,
              borderColor: themeColors.border,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold" style={{ color: themeColors.text }}>
                Personalizar
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Selector de tema */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3" style={{ color: themeColors.text }}>
                Tema
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => !isDark && toggleTheme()}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    isDark 
                      ? 'text-white shadow-lg' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  style={{
                    backgroundColor: isDark ? themeColors.primary : 'transparent',
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Oscuro
                  </div>
                </button>
                <button
                  onClick={() => isDark && toggleTheme()}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    !isDark 
                      ? 'text-white shadow-lg' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  style={{
                    backgroundColor: !isDark ? themeColors.primary : 'transparent',
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Claro
                  </div>
                </button>
              </div>
            </div>

            {/* Selector de colores */}
            <div>
              <h4 className="text-sm font-semibold mb-3" style={{ color: themeColors.text }}>
                Color principal
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {colorOptions.map((option) => (
                  <motion.button
                    key={option.name}
                    onClick={() => setSelectedColor(option.name)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                      selectedColor === option.name ? 'ring-2 ring-offset-2' : ''
                    }`}
                    style={{
                      backgroundColor: option.color,
                      borderColor: selectedColor === option.name ? themeColors.primary : 'transparent',
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedColor === option.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Vista previa */}
            <div className="mt-6 p-4 rounded-lg border" style={{ borderColor: themeColors.border }}>
              <h4 className="text-sm font-semibold mb-2" style={{ color: themeColors.text }}>
                Vista previa
              </h4>
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: themeColors.primary }}
                />
                <div 
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: themeColors.secondary }}
                />
                <div 
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: themeColors.accent }}
                />
                <span className="text-sm" style={{ color: themeColors.text }}>
                  {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeCustomizer 