import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorLight from './components/CursorLight'
import ThemeCustomizer from './components/ThemeCustomizer'
import { ThemeProvider } from './context/ThemeContext'
import { CVDataProvider, useCVData } from './context/CVDataContext'

function App() {
  // Botón de edición global
  const EditButton = () => {
    const { isEditMode, setEditMode } = useCVData();
    return (
      <button
        onClick={() => setEditMode(!isEditMode)}
        className={`fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full shadow-lg font-bold transition-colors duration-200 ${isEditMode ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
        style={{ outline: 'none' }}
      >
        {isEditMode ? 'Salir de edición' : 'Editar CV'}
      </button>
    );
  };

  return (
    <ThemeProvider>
      <CVDataProvider>
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--color-background)' }}>
          <EditButton />
          {/* Theme Customizer */}
          <ThemeCustomizer />
          
          {/* Cursor Light Effect */}
          <CursorLight />
          
          {/* Animated background particles */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-float" style={{ backgroundColor: 'var(--color-primary)' }}></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full animate-float" style={{ backgroundColor: 'var(--color-secondary)', animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full animate-float" style={{ backgroundColor: 'var(--color-accent)', animationDelay: '4s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full animate-float" style={{ backgroundColor: 'var(--color-primary)', animationDelay: '1s' }}></div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </div>
      </CVDataProvider>
    </ThemeProvider>
  )
}

export default App 