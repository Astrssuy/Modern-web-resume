import { motion } from 'framer-motion'
import { Code, Database, Palette, Cloud } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 90 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
      ]
    },
    {
      title: 'Diseño',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 75 },
        { name: 'Photoshop', level: 70 },
        { name: 'UI/UX', level: 85 },
        { name: 'Prototipado', level: 80 },
      ]
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 75 },
      ]
    }
  ]

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
          <h2 className="section-title">Habilidades & Tecnologías</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Mi conjunto de habilidades técnicas que he desarrollado a lo largo de mi carrera profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
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
              </div>
            </motion.div>
          ))}
        </div>

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
            {[
              'Agile/Scrum', 'REST APIs', 'GraphQL', 'Redux', 'Zustand', 'Jest', 'Cypress',
              'Webpack', 'Vite', 'NPM/Yarn', 'Postman', 'Insomnia', 'VS Code', 'Terminal',
              'Responsive Design', 'Progressive Web Apps', 'SEO', 'Performance Optimization'
            ].map((skill, index) => (
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 