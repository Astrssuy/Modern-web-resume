import React from 'react'
import { useCVData } from '../context/CVDataContext'
import { useTheme } from '../context/ThemeContext'

const PdfCV = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { personalInfo, about, education, certifications, skillCategories, otherSkills, experience, projects } = useCVData()
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
        <div>
          <h3>Educación</h3>
          <ul>
            {education.map((edu, idx) => (
              <li key={edu.title + idx}>
                <strong>{edu.title}</strong> – {edu.institution} ({edu.period})<br />
                <span>{edu.location}</span><br />
                <span>{edu.description}</span>
              </li>
            ))}
          </ul>
        </div>
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
        <div>
          <h3>Certificaciones</h3>
          <ul>
            {certifications.map((cert, idx) => (
              <li key={cert.title + idx}>
                <strong>{cert.title}</strong> – {cert.institution} ({cert.period})<br />
                <span>{cert.location}</span><br />
                <span>{cert.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills principales */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ 
          color: themeColors.primary, 
          fontSize: 20, 
          marginBottom: 8 
        }}>
          Habilidades
        </h2>
        <div>
          <h3>Skills principales</h3>
          <ul>
            {skillCategories.length > 0 && skillCategories[0].skills.map((skill, index) => (
              <li key={skill.name + index}>{skill.name} ({skill.level}%)</li>
            ))}
          </ul>
          <h4>Otras habilidades</h4>
          <ul>
            {otherSkills.map((skill, idx) => (
              <li key={skill + idx}>{skill}</li>
            ))}
          </ul>
        </div>
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
        <div>
          <h3>Proyectos</h3>
          <ul>
            {projects.map((project, idx) => (
              <li key={project.title + idx}>
                <strong>{project.title}</strong><br />
                <span>{project.description}</span><br />
                <span>Tecnologías: {project.technologies.join(', ')}</span><br />
                <span>Demo: {project.liveUrl}</span><br />
                <span>Código: {project.githubUrl}</span>
              </li>
            ))}
          </ul>
        </div>
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