import { motion } from 'framer-motion'
import { ExternalLink, Github, Grid } from 'lucide-react'

const coseguroImages = [
  '/coseguro/1.svg',
  '/coseguro/2.svg',
  '/coseguro/3.svg',
  '/coseguro/4.svg',
  '/coseguro/5.svg',
  '/coseguro/6.svg',
]

const Projects = () => {
  const project = {
    title: 'Coseguros',
    description: 'Sistema web para la gestión y control de coseguros, permitiendo la administración eficiente de pólizas, reportes y usuarios en el sector asegurador.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Astrssuy',
    featured: true
  }

  return (
    <section id="projects" className="py-20 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Proyecto Destacado</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Proyecto profesional desarrollado para el sector asegurador.
          </p>
        </motion.div>

        <div className="group relative bg-dark-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/40 transition-all duration-300">
          {/* Galería Futurista */}
          <div className="relative p-6">
            <div className="flex items-center justify-center mb-6">
              <Grid className="text-purple-400 mr-2" size={24} />
              <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
            </div>
            
            {/* Grid de imágenes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {coseguroImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    zIndex: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group/image"
                >
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 group-hover/image:border-purple-400/60 transition-all duration-300">
                    <motion.img
                      src={image}
                      alt={`Coseguros screenshot ${index + 1}`}
                      className="w-full h-32 md:h-40 object-cover rounded-lg transition-all duration-300 group-hover/image:scale-110"
                    />
                    {/* Overlay con efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    {/* Indicador de número */}
                    <div className="absolute top-2 right-2 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Efecto de borde brillante en hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>

            {/* Descripción del proyecto */}
            <div className="bg-dark-800/30 rounded-lg p-6 border border-purple-500/10">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="skill-tag text-xs"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              {/* Project Links */}
              <div className="flex space-x-3">
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Ver Demo</span>
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                >
                  <Github size={16} />
                  <span>Código</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 