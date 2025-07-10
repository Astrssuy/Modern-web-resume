import { motion } from 'framer-motion'
import { ExternalLink, Github, Grid } from 'lucide-react'
import { useCVData } from '../context/CVDataContext'
import { useTheme } from '../context/ThemeContext'

const Projects = () => {
  const {
    projectsTitle,
    projectsSubtitle,
    projects,
    isEditMode,
    updateProjectsTitle,
    updateProjectsSubtitle,
    updateProjects
  } = useCVData()
  const { themeColors } = useTheme()

  // Handlers para edición
  const handleProjectChange = (idx: number, field: string, value: string | string[]) => {
    const newProjects = [...projects]
    newProjects[idx] = { ...newProjects[idx], [field]: value }
    updateProjects(newProjects)
  }
  const handleTechChange = (projIdx: number, techIdx: number, value: string) => {
    const newProjects = [...projects]
    newProjects[projIdx].technologies[techIdx] = value
    updateProjects(newProjects)
  }
  const handleAddTech = (projIdx: number) => {
    const newProjects = [...projects]
    newProjects[projIdx].technologies.push('')
    updateProjects(newProjects)
  }
  const handleRemoveTech = (projIdx: number, techIdx: number) => {
    const newProjects = [...projects]
    newProjects[projIdx].technologies.splice(techIdx, 1)
    updateProjects(newProjects)
  }
  const handleImageChange = (projIdx: number, imgIdx: number, file: File) => {
    const reader = new FileReader()
    reader.onload = (ev) => {
      if (typeof ev.target?.result === 'string') {
        const newProjects = [...projects]
        newProjects[projIdx].images[imgIdx] = ev.target.result
        updateProjects(newProjects)
      }
    }
    reader.readAsDataURL(file)
  }
  const handleAddImage = (projIdx: number) => {
    const newProjects = [...projects]
    newProjects[projIdx].images.push('')
    updateProjects(newProjects)
  }
  const handleRemoveImage = (projIdx: number, imgIdx: number) => {
    const newProjects = [...projects]
    newProjects[projIdx].images.splice(imgIdx, 1)
    updateProjects(newProjects)
  }
  const handleAddProject = () => {
    updateProjects([
      ...projects,
      {
        title: '',
        description: '',
        technologies: [],
        images: [],
        liveUrl: '',
        githubUrl: ''
      }
    ])
  }
  const handleRemoveProject = (idx: number) => {
    const newProjects = [...projects]
    newProjects.splice(idx, 1)
    updateProjects(newProjects)
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
          {isEditMode ? (
            <input
              className="section-title bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-center"
              style={{ color: themeColors.text }}
              value={projectsTitle}
              onChange={e => updateProjectsTitle(e.target.value)}
            />
          ) : (
            <h2 className="section-title">{projectsTitle}</h2>
          )}
          {isEditMode ? (
            <input
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-center mt-2"
              style={{ color: themeColors.text }}
              value={projectsSubtitle}
              onChange={e => updateProjectsSubtitle(e.target.value)}
            />
          ) : (
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">{projectsSubtitle}</p>
          )}
        </motion.div>

        {projects.map((project, projIdx) => (
          <div key={projIdx} className="group relative bg-dark-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/40 transition-all duration-300 mb-12">
            <div className="relative p-6">
              <div className="flex items-center justify-center mb-6">
                <Grid className="text-purple-400 mr-2" size={24} />
                {isEditMode ? (
                  <input
                    className="text-xl font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-100"
                    value={project.title}
                    onChange={e => handleProjectChange(projIdx, 'title', e.target.value)}
                  />
                ) : (
                  <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                )}
                {isEditMode && (
                  <button className="ml-4 text-red-500" onClick={() => handleRemoveProject(projIdx)}>Eliminar</button>
                )}
              </div>
              {/* Grid de imágenes */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {project.images.map((image, imgIdx) => (
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: imgIdx * 0.1 }}
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
                        alt={`Project screenshot ${imgIdx + 1}`}
                        className="w-full h-32 md:h-40 object-cover rounded-lg transition-all duration-300 group-hover/image:scale-110"
                      />
                      {isEditMode && (
                        <div className="absolute bottom-2 left-2 flex gap-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={e => {
                              if (e.target.files && e.target.files[0]) handleImageChange(projIdx, imgIdx, e.target.files[0])
                            }}
                          />
                          <button className="text-red-500" onClick={() => handleRemoveImage(projIdx, imgIdx)}>x</button>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      <div className="absolute top-2 right-2 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {imgIdx + 1}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
                {isEditMode && (
                  <button className="col-span-2 md:col-span-3 mt-2 px-3 py-1 bg-blue-500 text-white rounded" onClick={() => handleAddImage(projIdx)}>
                    + Añadir imagen
                  </button>
                )}
              </div>
              {/* Descripción del proyecto */}
              <div className="bg-dark-800/30 rounded-lg p-6 border border-purple-500/10">
                {isEditMode ? (
                  <textarea
                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-300 mb-2"
                    value={project.description}
                    onChange={e => handleProjectChange(projIdx, 'description', e.target.value)}
                    placeholder="Descripción"
                    rows={2}
                  />
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                )}
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {isEditMode ? (
                    <>
                      {project.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="flex items-center">
                          <input
                            className="skill-tag text-xs bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                            value={tech}
                            onChange={e => handleTechChange(projIdx, techIdx, e.target.value)}
                          />
                          <button className="text-red-500" onClick={() => handleRemoveTech(projIdx, techIdx)}>x</button>
                        </span>
                      ))}
                      <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => handleAddTech(projIdx)}>
                        +
                      </button>
                    </>
                  ) : (
                    project.technologies.map((tech, techIndex) => (
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
                    ))
                  )}
                </div>
                {/* Project Links */}
                <div className="flex space-x-3">
                  {isEditMode ? (
                    <>
                      <input
                        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-purple-400 mr-2"
                        value={project.liveUrl}
                        onChange={e => handleProjectChange(projIdx, 'liveUrl', e.target.value)}
                        placeholder="URL Demo"
                      />
                      <input
                        className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-400 mr-2"
                        value={project.githubUrl}
                        onChange={e => handleProjectChange(projIdx, 'githubUrl', e.target.value)}
                        placeholder="URL Código"
                      />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {isEditMode && (
          <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded" onClick={handleAddProject}>
            + Añadir proyecto
          </button>
        )}
      </div>
    </section>
  )
}

export default Projects 