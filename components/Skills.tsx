'use client'

import { motion } from 'framer-motion'
import { Code2, FileCode, Zap, Server, Database, Palette, Layers, Cloud, GitCommit, TestTube } from 'lucide-react'

const Skills = () => {
  const categories = [
    {
      title: '프론트엔드',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 90, icon: <Code2 className="w-5 h-5" /> },
        { name: 'TypeScript', level: 85, icon: <FileCode className="w-5 h-5" /> },
        { name: 'Next.js', level: 80, icon: <Zap className="w-5 h-5" /> },
        { name: 'JavaScript', level: 95, icon: <Code2 className="w-5 h-5" /> },
        { name: 'HTML/CSS', level: 90, icon: <Palette className="w-5 h-5" /> }
      ]
    },
    {
      title: '백엔드 & 데이터베이스',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 75, icon: <Server className="w-5 h-5" /> },
        { name: 'Firebase', level: 80, icon: <Database className="w-5 h-5" /> },
        { name: 'MongoDB', level: 70, icon: <Database className="w-5 h-5" /> },
        { name: 'REST API', level: 85, icon: <Layers className="w-5 h-5" /> }
      ]
    },
    {
      title: '개발 도구 & 배포',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 85, icon: <GitCommit className="w-5 h-5" /> },
        { name: 'Docker', level: 70, icon: <Cloud className="w-5 h-5" /> },
        { name: 'AWS', level: 65, icon: <Cloud className="w-5 h-5" /> },
        { name: 'Testing', level: 75, icon: <TestTube className="w-5 h-5" /> }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-900/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            <span className="gradient-text">기술 스택</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            다양한 기술을 활용하여 효율적이고 확장 가능한 웹 애플리케이션을 개발합니다.
            지속적으로 새로운 기술을 학습하고 적용하고 있습니다.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="cyber-card p-8"
            >
              {/* 카테고리 헤더 */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-cyan-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-100">{category.title}</h3>
              </div>

              {/* 스킬 그리드 */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {/* 스킬 헤더 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-cyan-400">
                          {skill.icon}
                        </div>
                        <span className="font-semibold text-gray-100">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-cyan-400">{skill.level}%</span>
                    </div>

                    {/* 진행률 바 */}
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative"
                        >
                          {/* 글로우 효과 */}
                          <motion.div
                            animate={{ 
                              opacity: [0.5, 1, 0.5],
                              scale: [1, 1.02, 1]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-white opacity-20 rounded-full"
                          />
                        </motion.div>
                      </div>
                      
                      {/* 애니메이션된 점들 */}
                      <div className="absolute inset-0 flex justify-between items-center px-2">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 1 + skillIndex * 0.1 + i * 0.1 
                            }}
                            viewport={{ once: true }}
                            className="w-1 h-1 bg-cyan-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 추가 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              지속적인 <span className="gradient-text">학습</span>과 <span className="gradient-text">성장</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-gray-300">년 개발 경험</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-300">마스터한 기술</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-300">학습 의지</div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 leading-relaxed">
              새로운 기술 트렌드를 항상 주시하며, 실무에 적용할 수 있는 
              최신 기술들을 꾸준히 학습하고 있습니다. 코드의 품질과 
              사용자 경험을 최우선으로 생각하며 개발하고 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
