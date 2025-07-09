import React from 'react'

const PdfCV = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} style={{ fontFamily: 'Arial, sans-serif', color: '#222', background: '#fff', padding: 32, width: 800, maxWidth: '100%' }}>
    {/* Header */}
    <div style={{ borderBottom: '2px solid #7c3aed', marginBottom: 24, paddingBottom: 16 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>Robinson De Jesus Garcia Hidalgo</h1>
      <p style={{ margin: '8px 0 0 0', fontSize: 16 }}>Desarrollador Full Stack</p>
      <p style={{ margin: '4px 0 0 0', fontSize: 14 }}>
        Santo Domingo, República Dominicana | +1 829 872 1049 | Robinxonx37@gmail.com / robinxonx37@hotmail.com
      </p>
      <p style={{ margin: '4px 0 0 0', fontSize: 14 }}>
        GitHub: github.com/Astrssuy | LinkedIn: linkedin.com/in/robinson-de-jesus-garcia-hidalgo-617bb02b1/
      </p>
    </div>

    {/* Perfil */}
    <section style={{ marginBottom: 24 }}>
      <h2 style={{ color: '#7c3aed', fontSize: 20, marginBottom: 8 }}>Perfil</h2>
      <p style={{ fontSize: 15, margin: 0 }}>
        Desarrollador Full Stack apasionado por crear experiencias digitales únicas. Experiencia en tecnologías modernas, desarrollo web y diseño de soluciones innovadoras. En constante aprendizaje y mejora continua.
      </p>
    </section>

    {/* Educación */}
    <section style={{ marginBottom: 24 }}>
      <h2 style={{ color: '#7c3aed', fontSize: 20, marginBottom: 8 }}>Educación</h2>
      <ul style={{ paddingLeft: 16, margin: 0 }}>
        <li style={{ marginBottom: 8 }}>
          <strong>Software Development Technology</strong> – ITLA (2021 - 2025)
        </li>
        <li style={{ marginBottom: 8 }}>
          <strong>Introducción a la Programación</strong> – ITLA (2021)
        </li>
        <li style={{ marginBottom: 8 }}>
          <strong>Computer Technician</strong> – CENTLA (2015)
        </li>
      </ul>
    </section>

    {/* Certificaciones */}
    <section style={{ marginBottom: 24 }}>
      <h2 style={{ color: '#7c3aed', fontSize: 20, marginBottom: 8 }}>Certificaciones</h2>
      <ul style={{ paddingLeft: 16, margin: 0 }}>
        <li style={{ marginBottom: 8 }}>
          <strong>Ethical Hacker</strong> – Cisco (Mayo 2025)
        </li>
        <li style={{ marginBottom: 8 }}>
          <strong>Introduction to IoT</strong> – Cisco (Mayo 2025)
        </li>
        <li style={{ marginBottom: 8 }}>
          <strong>IT Essentials</strong> – Cisco (Diciembre 2021)
        </li>
      </ul>
    </section>

    {/* Habilidades */}
    <section style={{ marginBottom: 24 }}>
      <h2 style={{ color: '#7c3aed', fontSize: 20, marginBottom: 8 }}>Habilidades</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>React</li>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>TypeScript</li>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>Node.js</li>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>MySQL</li>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>Tailwind CSS</li>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>Framer Motion</li>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>HTML</li>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>CSS</li>
        <li style={{ background: '#ede9fe', color: '#7c3aed', borderRadius: 4, padding: '4px 12px', fontSize: 14 }}>JavaScript</li>
      </ul>
    </section>

    {/* Experiencia */}
    <section style={{ marginBottom: 24 }}>
      <h2 style={{ color: '#7c3aed', fontSize: 20, marginBottom: 8 }}>Experiencia</h2>
      <ul style={{ paddingLeft: 16, margin: 0 }}>
        <li style={{ marginBottom: 8 }}>
          <strong>Coseguros</strong> – Proyecto destacado: Desarrollo de plataforma web para gestión de coseguros, con integración de imágenes, carrusel y animaciones.
        </li>
      </ul>
    </section>

    {/* Contacto */}
    <section>
      <h2 style={{ color: '#7c3aed', fontSize: 20, marginBottom: 8 }}>Contacto</h2>
      <p style={{ fontSize: 15, margin: 0 }}>
        Email: Robinxonx37@gmail.com / robinxonx37@hotmail.com<br />
        Teléfono: +1 829 872 1049<br />
        Ubicación: Santo Domingo, República Dominicana
      </p>
    </section>
  </div>
))

export default PdfCV 