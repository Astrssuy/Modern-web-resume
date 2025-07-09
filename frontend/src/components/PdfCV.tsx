import React from 'react'
import { useCVData } from '../context/CVDataContext'
import { useTheme } from '../context/ThemeContext'

const PdfCV = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { personalInfo, about, education, certifications, skills, experience, projects } = useCVData()
  const { themeColors, isDark } = useTheme()

  return (
    <div 
      ref={ref} 
      style={{ 
        fontFamily: 'Arial, sans-serif', 
        color: isDark ? '#FFFFFF' : '#222', 
        background: isDark ? '#1A1A1A' : '#FFFFFF', 
        padding: 32, 
        width: 800, 
        maxWidth: '100%',
        minHeight: '100vh'
      }}
    >
      {/* Header */}
      <div style={{ 
        borderBottom: `2px solid ${themeColors.primary}`, 
        marginBottom: 24, 
        paddingBottom: 16 
      }}>
        <h1 style={{ 
          fontSize: 32, 
          fontWeight: 700, 
          margin: 0,
          color: themeColors.primary
        }}>
          {personalInfo.name}
        </h1>
        <p style={{ 
          margin: '8px 0 0 0', 
          fontSize: 16,
          color: themeColors.text
        }}>
          {personalInfo.title}
        </p>
        <p style={{ 
          margin: '4px 0 0 0', 
          fontSize: 14,
          color: themeColors.text
        }}>
          {personalInfo.location} | {personalInfo.phone} | {personalInfo.email}
        </p>
        <p style={{ 
          margin: '4px 0 0 0', 
          fontSize: 14,
          color: themeColors.text
        }}>
          GitHub: {personalInfo.github} | LinkedIn: {personalInfo.linkedin}
        </p>
      </div>

      {/* Perfil */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ 
          color: themeColors.primary, 
          fontSize: 20, 
          marginBottom: 8 
        }}>
          Perfil
        </h2>
        <p style={{ 
          fontSize: 15, 
          margin: 0,
          color: themeColors.text
        }}>
          {about}
        </p>
      </section>

      {/* Educación */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ 
          color: themeColors.primary, 
          fontSize: 20, 
          marginBottom: 8 
        }}>
          Educación
        </h2>
        <ul style={{ 
          paddingLeft: 16, 
          margin: 0,
          color: themeColors.text
        }}>
          {education.map((edu, index) => (
            <li key={index} style={{ marginBottom: 8 }}>
              <strong>{edu.degree}</strong> – {edu.institution} ({edu.period})
            </li>
          ))}
        </ul>
      </section>

      {/* Certificaciones */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ 
          color: themeColors.primary, 
          fontSize: 20, 
          marginBottom: 8 
        }}>
          Certificaciones
        </h2>
        <ul style={{ 
          paddingLeft: 16, 
          margin: 0,
          color: themeColors.text
        }}>
          {certifications.map((cert, index) => (
            <li key={index} style={{ marginBottom: 8 }}>
              <strong>{cert.name}</strong> – {cert.issuer} ({cert.date})
            </li>
          ))}
        </ul>
      </section>

      {/* Habilidades */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ 
          color: themeColors.primary, 
          fontSize: 20, 
          marginBottom: 8 
        }}>
          Habilidades
        </h2>
        <ul style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 8, 
          listStyle: 'none', 
          padding: 0, 
          margin: 0 
        }}>
          {skills.map((skill, index) => (
            <li key={index} style={{ 
              background: isDark ? `${themeColors.primary}20` : `${themeColors.primary}10`, 
              color: themeColors.primary, 
              borderRadius: 4, 
              padding: '4px 12px', 
              fontSize: 14,
              border: `1px solid ${themeColors.primary}30`
            }}>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Experiencia */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ 
          color: themeColors.primary, 
          fontSize: 20, 
          marginBottom: 8 
        }}>
          Experiencia
        </h2>
        <ul style={{ 
          paddingLeft: 16, 
          margin: 0,
          color: themeColors.text
        }}>
          {experience.map((exp, index) => (
            <li key={index} style={{ marginBottom: 8 }}>
              <strong>{exp.company}</strong> – {exp.position} ({exp.period})<br />
              {exp.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Proyectos */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ 
          color: themeColors.primary, 
          fontSize: 20, 
          marginBottom: 8 
        }}>
          Proyectos Destacados
        </h2>
        <ul style={{ 
          paddingLeft: 16, 
          margin: 0,
          color: themeColors.text
        }}>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: 8 }}>
              <strong>{project.name}</strong><br />
              {project.description}<br />
              <em>Tecnologías: {project.technologies.join(', ')}</em>
            </li>
          ))}
        </ul>
      </section>

      {/* Contacto */}
      <section>
        <h2 style={{ 
          color: themeColors.primary, 
          fontSize: 20, 
          marginBottom: 8 
        }}>
          Contacto
        </h2>
        <p style={{ 
          fontSize: 15, 
          margin: 0,
          color: themeColors.text
        }}>
          Email: {personalInfo.email}<br />
          Teléfono: {personalInfo.phone}<br />
          Ubicación: {personalInfo.location}
        </p>
      </section>
    </div>
  )
})

export default PdfCV 