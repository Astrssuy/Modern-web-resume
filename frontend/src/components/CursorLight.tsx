import { useEffect, useState } from 'react'

const CursorLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([])

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
        <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/20 via-purple-400/15 to-purple-600/20 blur-xl"></div>
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
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/30 via-purple-300/25 to-purple-500/30 blur-lg"></div>
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
        <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-600/10 via-purple-500/8 to-purple-700/10 blur-2xl"></div>
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
            className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/60 via-purple-300/50 to-purple-500/60 blur-sm"
            style={{
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.3)',
            }}
          />
        </div>
      ))}
    </>
  )
}

export default CursorLight 