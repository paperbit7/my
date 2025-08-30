'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ChevronDown, Github, Mail, Code, Zap, Sparkles, Instagram, School, Calendar, MapPin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isClient, setIsClient] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsClient(true)
    
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { innerWidth, innerHeight } = window
      const x = (clientX - innerWidth / 2) / 100
      const y = (clientY - innerHeight / 2) / 100
      mouseX.set(x)
      mouseY.set(y)
    }

    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(timeInterval)
    }
  }, [mouseX, mouseY])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 타입라이터 효과를 위한 텍스트
  const typewriterTexts = [
    "프론트엔드 개발자",
    "React 전문가",
    "UI/UX 디자이너",
    "창의적인 문제 해결사",
    "미래의 개발자"
  ]

  return (
    <section ref={containerRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-bg">
      {/* 스캔 라인 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-line w-full h-1 opacity-30"></div>
      </div>

      {/* 마우스 추적 배경 효과 */}
      {isClient && (
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </motion.div>
      )}

      {/* 메인 콘텐츠 */}
      <div className="container-max relative z-10 text-center">
        <motion.div
          style={{ y, opacity }}
          className="space-y-8"
        >
          {/* 상단 아이콘들 */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center space-x-4 mb-8"
          >
            {[Code, Zap, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-12 h-12 cyber-card rounded-full flex items-center justify-center text-cyan-400 neon-glow"
              >
                <Icon size={24} />
              </motion.div>
            ))}
          </motion.div>

          {/* 개인 정보 카드 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="cyber-card p-6 mb-8 max-w-md mx-auto"
          >
            <div className="grid grid-cols-1 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <School className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">경성전자고등학교 2학년</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">만 16세</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">부산시</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">키움증권 재직</span>
              </div>
            </div>
          </motion.div>

          {/* 메인 타이틀 */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-gray-100 cyber-font"
            >
              안녕하세요, <br />
              <motion.span 
                className="gradient-text inline-block glitch"
                data-text="윤현우"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                윤현우
              </motion.span>
              <br />
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                입니다
              </motion.span>
            </motion.h1>
            
            {/* 타입라이터 효과 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="h-8 flex justify-center items-center"
            >
              <motion.span
                className="text-xl md:text-2xl text-cyan-400 cyber-font"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                {typewriterTexts[Math.floor((Date.now() / 2000) % typewriterTexts.length)]}
              </motion.span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              사용자 경험을 중시하며, 아름답고 기능적인 웹 애플리케이션을 만드는 것을 좋아합니다.
              React, TypeScript, Next.js를 주로 사용하여 현대적인 웹 개발을 하고 있습니다.
            </motion.p>
          </div>

          {/* 실시간 시계 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="cyber-card p-4 max-w-xs mx-auto"
          >
            <div className="text-cyan-400 cyber-font text-lg">
              {currentTime.toLocaleTimeString('ko-KR', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
            <div className="text-gray-400 text-sm">
              {currentTime.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
              })}
            </div>
          </motion.div>

          {/* 소셜 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com", color: "hover:bg-gray-900" },
              { icon: Instagram, href: "https://www.instagram.com/hyan._.woo/", color: "hover:bg-pink-500" },
              { icon: Mail, href: "mailto:contact@example.com", color: "hover:bg-red-500" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 cyber-card rounded-full neon-glow text-gray-300 ${social.color} text-white`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* 스크롤 다운 버튼 */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <ChevronDown size={32} />
              {/* 펄스 효과 */}
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-400/20"
                animate={{ 
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* 홀로그램 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-400/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-400/30 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  )
}

export default Hero
