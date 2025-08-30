'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, BookOpen, BarChart3, Users, MessageSquare, Star, TrendingUp } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    setIsClient(true)
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const projects = [
    {
      title: 'BookHub',
      subtitle: '독서 커뮤니티 플랫폼',
      description: '독서의 즐거움을 나누는 공간으로, 도서 목록 관리, 리뷰 시스템, 토론 기능을 제공하는 웹 애플리케이션입니다. 사용자들이 책에 대한 다양한 의견을 나누고 깊이 있는 토론을 할 수 있는 플랫폼을 구축했습니다.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Firebase', 'JavaScript', 'CSS3', 'HTML5'],
      githubUrl: 'https://github.com',
      liveUrl: 'http://study-5251f.web.app',
      featured: true,
      stats: {
        books: 0,
        reviews: 0,
        users: 0,
        discussions: 0
      },
      features: [
        '다양한 도서 카테고리 관리',
        '별점 및 리뷰 시스템',
        '자유로운 토론 공간',
        '베스트셀러 자동 업데이트'
      ]
    },
    {
      title: 'Dashboard Analytics',
      subtitle: '데이터 분석 대시보드',
      description: '실시간 데이터 시각화와 분석을 제공하는 대시보드 애플리케이션입니다. 복잡한 데이터를 직관적인 차트와 그래프로 표현하여 사용자가 쉽게 인사이트를 얻을 수 있도록 설계했습니다.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Firebase', 'Chart.js', 'JavaScript', 'CSS3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://dcad-2d7f1.web.app/dashboard',
      featured: true,
      stats: {
        charts: 15,
        dataPoints: 1000,
        users: 50,
        reports: 25
      },
      features: [
        '실시간 데이터 시각화',
        '다양한 차트 타입 지원',
        '인터랙티브 대시보드',
        '데이터 필터링 및 검색'
      ]
    }
  ]

  const floatingIcons = [
    { icon: '📚', delay: 0 },
    { icon: '📊', delay: 0.5 },
    { icon: '💬', delay: 1 },
    { icon: '⭐', delay: 1.5 },
    { icon: '📈', delay: 2 },
    { icon: '🎯', delay: 2.5 }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-900/30 relative overflow-hidden">
      {/* 배경 애니메이션 요소들 */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl opacity-10"
              initial={{ 
                x: Math.random() * windowSize.width, 
                y: Math.random() * windowSize.height,
                rotate: 0 
              }}
              animate={{ 
                x: Math.random() * windowSize.width, 
                y: Math.random() * windowSize.height,
                rotate: 360 
              }}
              transition={{ 
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      )}

      <div className="container-max relative z-10" ref={containerRef}>
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-100 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">프로젝트</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            실제 개발한 프로젝트들을 소개합니다. 
            각 프로젝트는 사용자 경험과 기능성을 중시하여 개발되었습니다.
          </motion.p>
        </motion.div>

        {/* 프로젝트 카드들 */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* 카드 배경 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl transform rotate-1 scale-105 opacity-50"></div>
              
              <div className="cyber-card rounded-3xl overflow-hidden relative">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* 왼쪽: 프로젝트 이미지 및 정보 */}
                  <div className="relative p-8 lg:p-12">
                    {/* 프로젝트 헤더 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl"
                        >
                          {index === 0 ? <BookOpen size={24} /> : <BarChart3 size={24} />}
                        </motion.div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-100">{project.title}</h3>
                          <p className="text-lg text-cyan-400 font-medium">{project.subtitle}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* 프로젝트 설명 */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-gray-300 leading-relaxed mb-8 text-lg"
                    >
                      {project.description}
                    </motion.p>

                    {/* 주요 기능 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <h4 className="text-lg font-semibold text-gray-100 mb-4">주요 기능</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 + featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* 기술 스택 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <h4 className="text-lg font-semibold text-gray-100 mb-4">사용 기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 + techIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* 링크 버튼들 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      viewport={{ once: true }}
                      className="flex space-x-4"
                    >
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-gray-800 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
                      >
                        <Github size={20} />
                        <span>GitHub</span>
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* 오른쪽: 통계 및 시각적 요소 */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 lg:p-12 relative">
                    {/* 통계 카드들 */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + statIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="cyber-card p-4 text-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 + statIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold gradient-text mb-1"
                          >
                            {value}
                          </motion.div>
                          <div className="text-sm text-gray-300 capitalize">
                            {key === 'books' && '도서'}
                            {key === 'reviews' && '리뷰'}
                            {key === 'users' && '사용자'}
                            {key === 'discussions' && '토론'}
                            {key === 'charts' && '차트'}
                            {key === 'dataPoints' && '데이터'}
                            {key === 'reports' && '리포트'}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* 시각적 요소들 */}
                    <div className="space-y-6">
                      {/* 진행률 바 */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-300">완성도</span>
                          <span className="text-sm font-bold text-cyan-400">95%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative"
                          >
                            <motion.div
                              animate={{ 
                                x: [0, 100, 0],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute inset-0 bg-white opacity-30 rounded-full"
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* 아이콘 애니메이션 */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="flex justify-center space-x-6"
                      >
                        {[Users, MessageSquare, Star, TrendingUp].map((Icon, iconIndex) => (
                          <motion.div
                            key={iconIndex}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 cyber-card rounded-full flex items-center justify-center text-cyan-400"
                          >
                            <Icon size={24} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">더 많은 프로젝트를 기대해주세요!</h3>
            <p className="text-lg opacity-90 mb-6">
              지속적으로 새로운 기술을 학습하고 혁신적인 프로젝트를 개발하고 있습니다.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              포트폴리오 더 보기
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
