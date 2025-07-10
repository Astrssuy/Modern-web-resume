import { motion } from 'framer-motion'
import { Code, Database, Palette, Cloud } from 'lucide-react'
import { useCVData } from '../context/CVDataContext'
import { useTheme } from '../context/ThemeContext'

const iconMap = { Code, Database, Palette, Cloud }

const Skills = () => {
  const {
    skillsTitle,
    skillsSubtitle,
    skillCategories,
    otherSkills,
    isEditMode,
    updateSkillsTitle,
    updateSkillsSubtitle,
    updateSkillCategories,
    updateOtherSkills
  } = useCVData()
  const { themeColors } = useTheme()

  // Handlers para edición
  const handleCategoryTitleChange = (idx: number, value: string) => {
    const newCategories = [...skillCategories]
    newCategories[idx].title = value
    updateSkillCategories(newCategories)
  }
  const handleCategoryIconChange = (idx: number, value: string) => {
    const newCategories = [...skillCategories]
    newCategories[idx].icon = value
    updateSkillCategories(newCategories)
  }
  const handleSkillChange = (catIdx: number, skillIdx: number, field: string, value: string | number) => {
    const newCategories = [...skillCategories]
    newCategories[catIdx].skills[skillIdx] = {
      ...newCategories[catIdx].skills[skillIdx],
      [field]: value
    }
    updateSkillCategories(newCategories)
  }
  const handleAddSkill = (catIdx: number) => {
    const newCategories = [...skillCategories]
    newCategories[catIdx].skills.push({ name: '', level: 50, category: newCategories[catIdx].title })
    updateSkillCategories(newCategories)
  }
  const handleRemoveSkill = (catIdx: number, skillIdx: number) => {
    const newCategories = [...skillCategories]
    newCategories[catIdx].skills.splice(skillIdx, 1)
    updateSkillCategories(newCategories)
  }
  const handleAddCategory = () => {
    updateSkillCategories([
      ...skillCategories,
      { title: 'Nueva Categoría', icon: 'Code', skills: [] }
    ])
  }
  const handleRemoveCategory = (catIdx: number) => {
    const newCategories = [...skillCategories]
    newCategories.splice(catIdx, 1)
    updateSkillCategories(newCategories)
  }
  const handleOtherSkillChange = (idx: number, value: string) => {
    const newOtherSkills = [...otherSkills]
    newOtherSkills[idx] = value
    updateOtherSkills(newOtherSkills)
  }
  const handleAddOtherSkill = () => {
    updateOtherSkills([...otherSkills, ''])
  }
  const handleRemoveOtherSkill = (idx: number) => {
    const newOtherSkills = [...otherSkills]
    newOtherSkills.splice(idx, 1)
    updateOtherSkills(newOtherSkills)
  }

  return (
    <section id="skills" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              value={skillsTitle}
              onChange={e => updateSkillsTitle(e.target.value)}
            />
          ) : (
            <h2 className="section-title">{skillsTitle}</h2>
          )}
          {isEditMode ? (
            <input
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-center mt-2"
              style={{ color: themeColors.text }}
              value={skillsSubtitle}
              onChange={e => updateSkillsSubtitle(e.target.value)}
            />
          ) : (
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">{skillsSubtitle}</p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Code
            return (
              <motion.div
                key={category.title + categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  {isEditMode ? (
                    <>
                      <input
                        className="text-xl font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-gray-100"
                        value={category.title}
                        onChange={e => handleCategoryTitleChange(categoryIndex, e.target.value)}
                      />
                      <select
                        className="ml-2 bg-dark-900 text-gray-100 border-b border-gray-300 focus:outline-none"
                        value={category.icon}
                        onChange={e => handleCategoryIconChange(categoryIndex, e.target.value)}
                      >
                        {Object.keys(iconMap).map(icon => (
                          <option key={icon} value={icon}>{icon}</option>
                        ))}
                      </select>
                      <button className="ml-2 text-red-500" onClick={() => handleRemoveCategory(categoryIndex)}>Eliminar</button>
                    </>
                  ) : (
                    <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
                  )}
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name + skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        {isEditMode ? (
                          <>
                            <input
                              className="text-gray-300 font-medium bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                              value={skill.name}
                              onChange={e => handleSkillChange(categoryIndex, skillIndex, 'name', e.target.value)}
                            />
                            <input
                              type="number"
                              min={0}
                              max={100}
                              className="w-16 text-purple-400 font-semibold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                              value={skill.level}
                              onChange={e => handleSkillChange(categoryIndex, skillIndex, 'level', Number(e.target.value))}
                            />
                            <button className="text-red-500" onClick={() => handleRemoveSkill(categoryIndex, skillIndex)}>Eliminar</button>
                          </>
                        ) : (
                          <>
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-purple-400 font-semibold">{skill.level}%</span>
                          </>
                        )}
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                          className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                  {isEditMode && (
                    <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded" onClick={() => handleAddSkill(categoryIndex)}>
                      + Añadir skill
                    </button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
        {isEditMode && (
          <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded" onClick={handleAddCategory}>
            + Añadir categoría
          </button>
        )}

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-100 text-center mb-8">Otras Habilidades</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {isEditMode ? (
              <>
                {otherSkills.map((skill, idx) => (
                  <span key={idx} className="flex items-center">
                    <input
                      className="skill-tag bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
                      value={skill}
                      onChange={e => handleOtherSkillChange(idx, e.target.value)}
                    />
                    <button className="text-red-500" onClick={() => handleRemoveOtherSkill(idx)}>x</button>
                  </span>
                ))}
                <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={handleAddOtherSkill}>
                  +
                </button>
              </>
            ) : (
              otherSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 