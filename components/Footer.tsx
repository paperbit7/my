'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const scrollToTop = () => {
    if (isClient) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 브랜드 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              윤현우
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              프론트엔드 개발자로서 사용자 경험을 중시하며, 
              아름답고 기능적인 웹 애플리케이션을 만드는 것을 좋아합니다.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/hyan._.woo/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 rounded-full text-gray-300 hover:bg-pink-500 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* 빠른 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              {[
                { name: '홈', href: '#home' },
                { name: '소개', href: '#about' },
                { name: '프로젝트', href: '#projects' },
                { name: '기술 스택', href: '#skills' },
                { name: '연락처', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">연락처</h4>
            <div className="space-y-2 text-sm">
              <p>이메일: contact@example.com</p>
              <p>전화: 010-4518-5916</p>
              <p>위치: 부산시, 대한민국</p>
            </div>
          </motion.div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 mb-4 md:mb-0"
            >
              © {currentYear} 윤현우. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-gray-400"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={16} />
              </motion.div>
              <span>by 윤현우</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 스크롤 to top 버튼 */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
