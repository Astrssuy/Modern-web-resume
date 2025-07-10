import React, { createContext, useContext, useState } from 'react'

interface Skill {
  name: string
  level: number
  category: string
}

interface SkillCategory {
  title: string
  icon: string // nombre del icono, para simplificar
  skills: Skill[]
}

interface EducationItem {
  title: string
  institution: string
  period: string
  location: string
  description: string
}
interface CertificationItem {
  title: string
  institution: string
  period: string
  location: string
  description: string
}
interface ProjectItem {
  title: string
  description: string
  technologies: string[]
  images: string[]
  liveUrl: string
  githubUrl: string
}
interface ContactMethod {
  type: string // e.g. 'email', 'phone', 'github', 'linkedin', 'custom'
  label: string
  value: string
  icon?: string // nombre del icono opcional
  url?: string // para links
}
interface CVDataContextType {
  personalInfo: {
    name: string
    title: string
    location: string
    phone: string
    email: string
    github: string
    linkedin: string
    profileImage: string
  }
  about: string
  aboutSubtitle: string
  aboutTitle: string
  aboutHistory: string[]
  mainMessage: string
  mainAvailable: string
  education: EducationItem[]
  certifications: CertificationItem[]
  experience: Array<{
    company: string
    position: string
    period: string
    description: string
  }>
  projects: ProjectItem[]
  updatePersonalInfo: (info: Partial<CVDataContextType['personalInfo']>) => void
  updateAbout: (about: string) => void
  updateAboutSubtitle: (subtitle: string) => void
  updateAboutTitle: (title: string) => void
  updateAboutHistory: (history: string[]) => void
  updateMainMessage: (msg: string) => void
  updateMainAvailable: (msg: string) => void
  updateEducation: (education: EducationItem[]) => void
  updateCertifications: (certifications: CertificationItem[]) => void
  updateExperience: (experience: CVDataContextType['experience']) => void
  updateProjects: (projects: ProjectItem[]) => void
  updateProfileImage: (url: string) => void
  isEditMode: boolean
  setEditMode: (edit: boolean) => void
  skillsTitle: string
  skillsSubtitle: string
  skillCategories: SkillCategory[]
  otherSkills: string[]
  updateSkillsTitle: (title: string) => void
  updateSkillsSubtitle: (subtitle: string) => void
  updateSkillCategories: (categories: SkillCategory[]) => void
  updateOtherSkills: (skills: string[]) => void
  educationTitle: string
  educationSubtitle: string
  certificationsTitle: string
  certificationsSubtitle: string
  updateEducationTitle: (title: string) => void
  updateEducationSubtitle: (subtitle: string) => void
  updateCertificationsTitle: (title: string) => void
  updateCertificationsSubtitle: (subtitle: string) => void
  projectsTitle: string
  projectsSubtitle: string
  updateProjectsTitle: (title: string) => void
  updateProjectsSubtitle: (subtitle: string) => void
  contactTitle: string
  contactSubtitle: string
  contactMessage: string
  contactMethods: ContactMethod[]
  updateContactTitle: (title: string) => void
  updateContactSubtitle: (subtitle: string) => void
  updateContactMessage: (msg: string) => void
  updateContactMethods: (methods: ContactMethod[]) => void
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
    profileImage: '/I.jpg', // valor por defecto
  })

  const [about, setAbout] = useState(
    'Desarrollador Full Stack apasionado por crear experiencias digitales únicas. Experiencia en tecnologías modernas, desarrollo web y diseño de soluciones innovadoras. En constante aprendizaje y mejora continua.'
  )

  const [aboutSubtitle, setAboutSubtitle] = useState('Desarrollador apasionado con experiencia en tecnologías modernas y diseño de experiencias de usuario excepcionales.')
  const [aboutTitle, setAboutTitle] = useState('Sobre Mí')
  const [aboutHistory, setAboutHistory] = useState([
    'Mi pasión por la tecnología comenzó cuando era adolescente, y desde entonces he estado constantemente aprendiendo y mejorando mis habilidades. Me encanta resolver problemas complejos y crear soluciones innovadoras.',
    'Cuando no estoy programando, disfruto de la fotografía, la música y los videojuegos. Creo que estas actividades me ayudan a mantener una mente creativa y fresca.'
  ])
  const [mainMessage, setMainMessage] = useState('Desarrollador Full Stack apasionado por crear experiencias digitales únicas desde Santo Domingo, República Dominicana')
  const [mainAvailable, setMainAvailable] = useState('Disponible para nuevos proyectos')

  const [educationTitle, setEducationTitle] = useState('Educación')
  const [educationSubtitle, setEducationSubtitle] = useState('Mi formación académica que respalda mi experiencia técnica.')
  const [certificationsTitle, setCertificationsTitle] = useState('Certificaciones')
  const [certificationsSubtitle, setCertificationsSubtitle] = useState('Certificaciones profesionales que respaldan mi experiencia técnica.')
  const [education, setEducation] = useState<EducationItem[]>([
    {
      title: 'Software Development Technology',
      institution: 'ITLA',
      period: '2021 - 2025',
      location: 'Santo Domingo, República Dominicana',
      description: 'Formación en desarrollo de software con enfoque en tecnologías modernas y mejores prácticas de programación.'
    },
    {
      title: 'Computer Technician',
      institution: 'CENTLA',
      period: '2015',
      location: 'Santo Domingo, República Dominicana',
      description: 'Formación técnica en informática y sistemas computacionales.'
    }
  ])
  const [certifications, setCertifications] = useState<CertificationItem[]>([
    {
      title: 'Ethical Hacker',
      institution: 'Cisco',
      period: 'Mayo 2025',
      location: 'Online',
      description: 'Certificación en seguridad informática y técnicas de hacking ético.'
    },
    {
      title: 'Introduction to IoT',
      institution: 'Cisco',
      period: 'Mayo 2025',
      location: 'Online',
      description: 'Fundamentos de Internet de las Cosas y tecnologías IoT.'
    },
    {
      title: 'IT Essentials',
      institution: 'Cisco',
      period: 'Diciembre 2021',
      location: 'Online',
      description: 'Fundamentos de tecnologías de la información y sistemas computacionales.'
    }
  ])
  const updateEducationTitle = (title: string) => setEducationTitle(title)
  const updateEducationSubtitle = (subtitle: string) => setEducationSubtitle(subtitle)
  const updateCertificationsTitle = (title: string) => setCertificationsTitle(title)
  const updateCertificationsSubtitle = (subtitle: string) => setCertificationsSubtitle(subtitle)
  const updateEducation = (education: EducationItem[]) => setEducation(education)
  const updateCertifications = (certifications: CertificationItem[]) => setCertifications(certifications)

  const [skillsTitle, setSkillsTitle] = useState('Habilidades & Tecnologías')
  const [skillsSubtitle, setSkillsSubtitle] = useState('Mi conjunto de habilidades técnicas que he desarrollado a lo largo de mi carrera profesional.')
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([
    {
      title: 'Frontend',
      icon: 'Code',
      skills: [
        { name: 'React', level: 90, category: 'Frontend' },
        { name: 'TypeScript', level: 85, category: 'Frontend' },
        { name: 'Next.js', level: 80, category: 'Frontend' },
        { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
        { name: 'Vue.js', level: 75, category: 'Frontend' },
      ]
    },
    {
      title: 'Backend',
      icon: 'Database',
      skills: [
        { name: 'Node.js', level: 85, category: 'Backend' },
        { name: 'Python', level: 80, category: 'Backend' },
        { name: 'Express.js', level: 90, category: 'Backend' },
        { name: 'PostgreSQL', level: 75, category: 'Backend' },
        { name: 'MongoDB', level: 70, category: 'Backend' },
      ]
    },
    {
      title: 'Diseño',
      icon: 'Palette',
      skills: [
        { name: 'Figma', level: 80, category: 'Diseño' },
        { name: 'Adobe XD', level: 75, category: 'Diseño' },
        { name: 'Photoshop', level: 70, category: 'Diseño' },
        { name: 'UI/UX', level: 85, category: 'Diseño' },
        { name: 'Prototipado', level: 80, category: 'Diseño' },
      ]
    },
    {
      title: 'DevOps',
      icon: 'Cloud',
      skills: [
        { name: 'Docker', level: 75, category: 'DevOps' },
        { name: 'AWS', level: 70, category: 'DevOps' },
        { name: 'Git', level: 90, category: 'DevOps' },
        { name: 'CI/CD', level: 80, category: 'DevOps' },
        { name: 'Linux', level: 75, category: 'DevOps' },
      ]
    }
  ])
  const [otherSkills, setOtherSkills] = useState<string[]>([
    'Agile/Scrum', 'REST APIs', 'GraphQL', 'Redux', 'Zustand', 'Jest', 'Cypress',
    'Webpack', 'Vite', 'NPM/Yarn', 'Postman', 'Insomnia', 'VS Code', 'Terminal',
    'Responsive Design', 'Progressive Web Apps', 'SEO', 'Performance Optimization'
  ])
  const updateSkillsTitle = (title: string) => setSkillsTitle(title)
  const updateSkillsSubtitle = (subtitle: string) => setSkillsSubtitle(subtitle)
  const updateSkillCategories = (categories: SkillCategory[]) => setSkillCategories(categories)
  const updateOtherSkills = (skills: string[]) => setOtherSkills(skills)

  const [experience, setExperience] = useState([
    {
      company: 'Coseguros',
      position: 'Desarrollador Full Stack',
      period: '2024 - Presente',
      description: 'Desarrollo de plataforma web para gestión de coseguros, con integración de imágenes, carrusel y animaciones.',
    },
  ])

  const [projectsTitle, setProjectsTitle] = useState('Proyecto Destacado')
  const [projectsSubtitle, setProjectsSubtitle] = useState('Proyecto profesional desarrollado para el sector asegurador.')
  const [projects, setProjects] = useState<ProjectItem[]>([
    {
      title: 'Coseguros',
      description: 'Sistema web para la gestión y control de coseguros, permitiendo la administración eficiente de pólizas, reportes y usuarios en el sector asegurador.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind CSS'],
      images: [
        '/coseguro/1.svg',
        '/coseguro/2.svg',
        '/coseguro/3.svg',
        '/coseguro/4.svg',
        '/coseguro/5.svg',
        '/coseguro/6.svg',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Astrssuy',
    }
  ])
  const updateProjectsTitle = (title: string) => setProjectsTitle(title)
  const updateProjectsSubtitle = (subtitle: string) => setProjectsSubtitle(subtitle)
  const updateProjects = (projects: ProjectItem[]) => setProjects(projects)

  const [contactTitle, setContactTitle] = useState('Contacto')
  const [contactSubtitle, setContactSubtitle] = useState('¿Quieres trabajar conmigo o tienes alguna pregunta? ¡Contáctame!')
  const [contactMessage, setContactMessage] = useState('Estoy disponible para nuevos proyectos y colaboraciones.')
  const [contactMethods, setContactMethods] = useState<ContactMethod[]>([
    { type: 'email', label: 'Correo', value: 'Robinxonx37@gmail.com', icon: 'Mail', url: 'mailto:Robinxonx37@gmail.com' },
    { type: 'phone', label: 'Teléfono', value: '+1 829 872 1049', icon: 'Phone', url: 'tel:+18298721049' },
    { type: 'github', label: 'GitHub', value: 'github.com/Astrssuy', icon: 'Github', url: 'https://github.com/Astrssuy' },
    { type: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/robinson-de-jesus-garcia-hidalgo-617bb02b1/', icon: 'Linkedin', url: 'https://linkedin.com/in/robinson-de-jesus-garcia-hidalgo-617bb02b1/' },
    { type: 'location', label: 'Ubicación', value: 'Santo Domingo, República Dominicana', icon: 'MapPin' }
  ])
  const updateContactTitle = (title: string) => setContactTitle(title)
  const updateContactSubtitle = (subtitle: string) => setContactSubtitle(subtitle)
  const updateContactMessage = (msg: string) => setContactMessage(msg)
  const updateContactMethods = (methods: ContactMethod[]) => setContactMethods(methods)

  const [editMode, setEditMode] = useState(false)

  const updatePersonalInfo = (info: Partial<CVDataContextType['personalInfo']>) => {
    setPersonalInfo(prev => ({ ...prev, ...info }))
  }

  const updateAbout = (newAbout: string) => {
    setAbout(newAbout)
  }

  const updateAboutSubtitle = (subtitle: string) => setAboutSubtitle(subtitle)
  const updateAboutTitle = (title: string) => setAboutTitle(title)
  const updateAboutHistory = (history: string[]) => setAboutHistory(history)
  const updateMainMessage = (msg: string) => setMainMessage(msg)
  const updateMainAvailable = (msg: string) => setMainAvailable(msg)

  const updateExperience = (newExperience: CVDataContextType['experience']) => {
    setExperience(newExperience)
  }

  const updateProfileImage = (url: string) => {
    setPersonalInfo(prev => ({ ...prev, profileImage: url }))
  }

  return (
    <CVDataContext.Provider value={{
      personalInfo,
      about,
      aboutSubtitle,
      aboutTitle,
      aboutHistory,
      mainMessage,
      mainAvailable,
      education,
      certifications,
      experience,
      projects,
      updatePersonalInfo,
      updateAbout,
      updateAboutSubtitle,
      updateAboutTitle,
      updateAboutHistory,
      updateMainMessage,
      updateMainAvailable,
      updateEducation,
      updateCertifications,
      updateExperience,
      updateProjects,
      updateProfileImage,
      isEditMode: editMode,
      setEditMode,
      skillsTitle,
      skillsSubtitle,
      skillCategories,
      otherSkills,
      updateSkillsTitle,
      updateSkillsSubtitle,
      updateSkillCategories,
      updateOtherSkills,
      educationTitle,
      educationSubtitle,
      certificationsTitle,
      certificationsSubtitle,
      updateEducationTitle,
      updateEducationSubtitle,
      updateCertificationsTitle,
      updateCertificationsSubtitle,
      projectsTitle,
      projectsSubtitle,
      updateProjectsTitle,
      updateProjectsSubtitle,
      contactTitle,
      contactSubtitle,
      contactMessage,
      contactMethods,
      updateContactTitle,
      updateContactSubtitle,
      updateContactMessage,
      updateContactMethods,
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