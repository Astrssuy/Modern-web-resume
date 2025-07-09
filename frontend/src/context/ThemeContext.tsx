import React, { createContext, useContext, useState, useEffect } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
  selectedColor: string
  setSelectedColor: (color: string) => void
  themeColors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    cardBg: string
    border: string
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const colorPalettes = {
  purple: {
    primary: '#8B5CF6',
    secondary: '#A855F7',
    accent: '#7C3AED',
  },
  blue: {
    primary: '#3B82F6',
    secondary: '#2563EB',
    accent: '#1D4ED8',
  },
  green: {
    primary: '#10B981',
    secondary: '#059669',
    accent: '#047857',
  },
  red: {
    primary: '#EF4444',
    secondary: '#DC2626',
    accent: '#B91C1C',
  },
  orange: {
    primary: '#F97316',
    secondary: '#EA580C',
    accent: '#C2410C',
  },
  pink: {
    primary: '#EC4899',
    secondary: '#DB2777',
    accent: '#BE185D',
  },
  teal: {
    primary: '#14B8A6',
    secondary: '#0D9488',
    accent: '#0F766E',
  },
  indigo: {
    primary: '#6366F1',
    secondary: '#4F46E5',
    accent: '#4338CA',
  },
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const [selectedColor, setSelectedColor] = useState('purple')

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const themeColors = {
    primary: colorPalettes[selectedColor as keyof typeof colorPalettes].primary,
    secondary: colorPalettes[selectedColor as keyof typeof colorPalettes].secondary,
    accent: colorPalettes[selectedColor as keyof typeof colorPalettes].accent,
    background: isDark ? '#0A0A0A' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#1F2937',
    cardBg: isDark ? '#1A1A1A' : '#F9FAFB',
    border: isDark ? '#2D2D2D' : '#E5E7EB',
  }

  // Aplicar colores al CSS
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', themeColors.primary)
    root.style.setProperty('--color-secondary', themeColors.secondary)
    root.style.setProperty('--color-accent', themeColors.accent)
    root.style.setProperty('--color-background', themeColors.background)
    root.style.setProperty('--color-text', themeColors.text)
    root.style.setProperty('--color-card-bg', themeColors.cardBg)
    root.style.setProperty('--color-border', themeColors.border)
  }, [themeColors])

  return (
    <ThemeContext.Provider value={{
      isDark,
      toggleTheme,
      selectedColor,
      setSelectedColor,
      themeColors,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 