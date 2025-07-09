import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const CursorLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([])
  const { themeColors } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  // Bubbles effect
  useEffect(() => {
    const createBubble = () => {
      const side = Math.random() > 0.5 ? 'left' : 'right'
      const x = side === 'left' ? Math.random() * 100 : window.innerWidth - Math.random() * 100
      const y = window.innerHeight + 50
      const size = Math.random() * 30 + 15 // Tamaños más grandes
      const speed = Math.random() * 1.5 + 0.8 // Velocidad más lenta para mejor visibilidad
      
      return {
        id: Date.now() + Math.random(),
        x,
        y,
        size,
        speed
      }
    }

    const interval = setInterval(() => {
      setBubbles(prev => {
        // Remove bubbles that are off screen
        const filtered = prev.filter(bubble => bubble.y > -100)
        
        // Add new bubble more frequently (70% chance every 100ms)
        if (Math.random() < 0.7) {
          return [...filtered, createBubble()]
        }
        
        return filtered
      })
    }, 100)

    // Update bubble positions
    const animationFrame = () => {
      setBubbles(prev => 
        prev.map(bubble => ({
          ...bubble,
          y: bubble.y - bubble.speed,
          x: bubble.x + (Math.random() - 0.5) * 0.3 // Menos movimiento horizontal
        }))
      )
      requestAnimationFrame(animationFrame)
    }
    
    requestAnimationFrame(animationFrame)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      {/* Main cursor light */}
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <div 
          className="w-80 h-80 rounded-full blur-xl"
          style={{
            background: `linear-gradient(to right, ${themeColors.primary}20, ${themeColors.secondary}15, ${themeColors.accent}20)`
          }}
        />
      </div>

      {/* Secondary cursor light */}
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-200"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          opacity: isVisible ? 0.4 : 0,
        }}
      >
        <div 
          className="w-32 h-32 rounded-full blur-lg"
          style={{
            background: `linear-gradient(to right, ${themeColors.secondary}30, ${themeColors.primary}25, ${themeColors.accent}30)`
          }}
        />
      </div>

      {/* Interactive elements highlight */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-300"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          opacity: isVisible ? 0.1 : 0,
        }}
      >
        <div 
          className="w-48 h-48 rounded-full blur-2xl"
          style={{
            background: `linear-gradient(to right, ${themeColors.accent}10, ${themeColors.primary}8, ${themeColors.secondary}10)`
          }}
        />
      </div>

      {/* Bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="fixed pointer-events-none z-30"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            opacity: 0.8, // Mayor opacidad
            transform: `translate(-50%, -50%)`,
          }}
        >
          <div 
            className="w-full h-full rounded-full blur-sm"
            style={{
              background: `linear-gradient(to bottom right, ${themeColors.secondary}60, ${themeColors.primary}50, ${themeColors.accent}60)`,
              boxShadow: `0 0 15px ${themeColors.primary}50, 0 0 30px ${themeColors.primary}30`,
            }}
          />
        </div>
      ))}
    </>
  )
}

export default CursorLight 