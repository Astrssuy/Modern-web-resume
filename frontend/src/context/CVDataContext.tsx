import React, { createContext, useContext, useState } from 'react'

interface CVDataContextType {
  personalInfo: {
    name: string
    title: string
    location: string
    phone: string
    email: string
    github: string
    linkedin: string
  }
  about: string
  education: Array<{
    degree: string
    institution: string
    period: string
  }>
  certifications: Array<{
    name: string
    issuer: string
    date: string
  }>
  skills: Array<{
    name: string
    category: string
  }>
  experience: Array<{
    company: string
    position: string
    period: string
    description: string
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    images: string[]
  }>
  updatePersonalInfo: (info: Partial<CVDataContextType['personalInfo']>) => void
  updateAbout: (about: string) => void
  updateEducation: (education: CVDataContextType['education']) => void
  updateCertifications: (certifications: CVDataContextType['certifications']) => void
  updateSkills: (skills: CVDataContextType['skills']) => void
  updateExperience: (experience: CVDataContextType['experience']) => void
  updateProjects: (projects: CVDataContextType['projects']) => void
}

const CVDataContext = createContext<CVDataContextType | undefined>(undefined)

export const CVDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Robinson De Jesus Garcia Hidalgo',
    title: 'Desarrollador Full Stack',
    location: 'Santo Domingo, República Dominicana',
    phone: '+1 829 872 1049',
    email: 'Robinxonx37@gmail.com',
    github: 'github.com/Astrssuy',
    linkedin: 'linkedin.com/in/robinson-de-jesus-garcia-hidalgo-617bb02b1/',
  })

  const [about, setAbout] = useState(
    'Desarrollador Full Stack apasionado por crear experiencias digitales únicas. Experiencia en tecnologías modernas, desarrollo web y diseño de soluciones innovadoras. En constante aprendizaje y mejora continua.'
  )

  const [education, setEducation] = useState([
    {
      degree: 'Software Development Technology',
      institution: 'ITLA',
      period: '2021 - 2025',
    },
    {
      degree: 'Introducción a la Programación',
      institution: 'ITLA',
      period: '2021',
    },
    {
      degree: 'Computer Technician',
      institution: 'CENTLA',
      period: '2015',
    },
  ])

  const [certifications, setCertifications] = useState([
    {
      name: 'Ethical Hacker',
      issuer: 'Cisco',
      date: 'Mayo 2025',
    },
    {
      name: 'Introduction to IoT',
      issuer: 'Cisco',
      date: 'Mayo 2025',
    },
    {
      name: 'IT Essentials',
      issuer: 'Cisco',
      date: 'Diciembre 2021',
    },
  ])

  const [skills, setSkills] = useState([
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
  ])

  const [experience, setExperience] = useState([
    {
      company: 'Coseguros',
      position: 'Desarrollador Full Stack',
      period: '2024 - Presente',
      description: 'Desarrollo de plataforma web para gestión de coseguros, con integración de imágenes, carrusel y animaciones.',
    },
  ])

  const [projects, setProjects] = useState([
    {
      name: 'Coseguros',
      description: 'Plataforma web para gestión de coseguros con interfaz moderna y funcionalidades avanzadas.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      images: ['/coseguros1.jpg', '/coseguros2.jpg', '/coseguros3.jpg', '/coseguros4.jpg'],
    },
  ])

  const updatePersonalInfo = (info: Partial<CVDataContextType['personalInfo']>) => {
    setPersonalInfo(prev => ({ ...prev, ...info }))
  }

  const updateAbout = (newAbout: string) => {
    setAbout(newAbout)
  }

  const updateEducation = (newEducation: CVDataContextType['education']) => {
    setEducation(newEducation)
  }

  const updateCertifications = (newCertifications: CVDataContextType['certifications']) => {
    setCertifications(newCertifications)
  }

  const updateSkills = (newSkills: CVDataContextType['skills']) => {
    setSkills(newSkills)
  }

  const updateExperience = (newExperience: CVDataContextType['experience']) => {
    setExperience(newExperience)
  }

  const updateProjects = (newProjects: CVDataContextType['projects']) => {
    setProjects(newProjects)
  }

  return (
    <CVDataContext.Provider value={{
      personalInfo,
      about,
      education,
      certifications,
      skills,
      experience,
      projects,
      updatePersonalInfo,
      updateAbout,
      updateEducation,
      updateCertifications,
      updateSkills,
      updateExperience,
      updateProjects,
    }}>
      {children}
    </CVDataContext.Provider>
  )
}

export const useCVData = () => {
  const context = useContext(CVDataContext)
  if (context === undefined) {
    throw new Error('useCVData must be used within a CVDataProvider')
  }
  return context
} 