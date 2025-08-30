'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Instagram, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  // EmailJS 초기화
  useEffect(() => {
    emailjs.init('bGEKaDjWom43FZIBA')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 폼 유효성 검사
    if (!formData.name.trim()) {
      setSubmitStatus('error')
      setStatusMessage('이름을 입력해주세요.')
      return
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus('error')
      setStatusMessage('유효한 이메일 주소를 입력해주세요.')
      return
    }
    
    if (!formData.message.trim()) {
      setSubmitStatus('error')
      setStatusMessage('메시지를 입력해주세요.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    // 실제 이메일 전송을 위한 설정
    const EMAILJS_CONFIG = {
      serviceId: 'service_lmv4v58',
      templateId: 'template_d5aagoa',
      publicKey: 'bGEKaDjWom43FZIBA'
    }

    try {
      // 실제 이메일 전송 활성화
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: '윤현우',
          to_email: 'paperbit7@gmail.com'
        },
        EMAILJS_CONFIG.publicKey
      )

            if (result.status === 200) {
        setSubmitStatus('success')
        setStatusMessage('메시지가 성공적으로 전송되었습니다!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('이메일 전송에 실패했습니다.')
      }
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
      setStatusMessage('메시지 전송에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: '이메일',
      value: 'paperbit7@gmail.com',
      href: 'mailto:paperbit7@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '전화번호',
      value: '010-4518-5916',
      href: 'tel:010-4518-5916'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '위치',
      value: '부산시, 대한민국',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:bg-gray-900'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram',
      url: 'https://www.instagram.com/hyan._.woo/',
      color: 'hover:bg-pink-500'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-900/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            <span className="gradient-text">연락처</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            프로젝트 협업이나 궁금한 점이 있으시면 언제든 연락해주세요.
            빠른 시일 내에 답변드리겠습니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 왼쪽: 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                연락처 정보
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 cyber-card p-6 group"
                  >
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* 소셜 링크 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">
                소셜 미디어
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 cyber-card rounded-full text-gray-300 ${social.color} text-white transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* 추가 정보 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="cyber-card p-6"
            >
              <h4 className="text-lg font-semibold text-gray-100 mb-4">
                업무 시간
              </h4>
              <div className="space-y-2 text-gray-300">
                <p>평일: 09:00 - 18:00</p>
                <p>주말: 10:00 - 16:00</p>
                <p className="text-sm text-gray-400 mt-4">
                  * 긴급한 경우 언제든 연락 가능합니다.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* 오른쪽: 연락 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyber-card p-8"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              메시지 보내기
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="이름을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="이메일을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="메시지를 입력해주세요"
                />
              </div>

              {/* 상태 메시지 표시 */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 p-3 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                      : 'bg-red-500/20 border border-red-500/30 text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm">{statusMessage}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-3 px-6 rounded-lg font-semibold shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>메시지 보내기</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* 하단 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="cyber-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">
              함께 일하고 싶은 프로젝트가 있나요?
            </h3>
            <p className="text-gray-300 mb-6">
              새로운 도전과 협업을 기다리고 있습니다. 
              혁신적인 아이디어를 현실로 만들어보세요.
            </p>
            <motion.a
              href="mailto:paperbit7@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} />
              <span>지금 연락하기</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
