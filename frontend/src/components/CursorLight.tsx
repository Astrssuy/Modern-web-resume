import { useEffect, useState } from 'react'

const CursorLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

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

      {/* Small cursor dot */}
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-100"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-purple-400 shadow-lg shadow-purple-500/50"></div>
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
    </>
  )
}

export default CursorLight 