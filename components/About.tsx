'use client'

import { motion } from 'framer-motion'
import { User, Code, Heart, Target } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '현대적인 기술',
      description: 'React, TypeScript, Next.js 등 최신 기술 스택을 활용하여 효율적이고 확장 가능한 코드를 작성합니다.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '사용자 중심',
      description: '사용자 경험을 최우선으로 생각하며, 직관적이고 아름다운 인터페이스를 만드는 것을 좋아합니다.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '성능 최적화',
      description: '빠른 로딩 속도와 부드러운 애니메이션을 통해 최고의 사용자 경험을 제공합니다.'
    },
    {
      icon: <User className="w-8 h-8" />,
      title: '협업 능력',
      description: '팀워크를 중시하며, 명확한 커뮤니케이션과 코드 리뷰를 통해 프로젝트의 품질을 높입니다.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-900/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            <span className="gradient-text">소개</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            3년간의 프론트엔드 개발 경험을 바탕으로 사용자에게 의미 있는 가치를 전달하는 
            웹 애플리케이션을 개발하고 있습니다. 현재 키움증권에서 개발 업무를 담당하고 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* 왼쪽: 텍스트 내용 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-100">
              개발에 대한 <span className="gradient-text">열정</span>과 <span className="gradient-text">도전</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              새로운 기술을 배우는 것을 좋아하며, 항상 더 나은 사용자 경험을 제공하기 위해 
              끊임없이 연구하고 개선하고 있습니다. 코드의 가독성과 유지보수성을 중요하게 
              생각하며, 팀과의 협업을 통해 더 큰 가치를 만들어내는 것을 목표로 합니다.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              현재는 React 생태계를 중심으로 개발하고 있으며, 키움증권에서 금융 서비스 개발을 
              담당하고 있습니다. 백엔드 지식도 함께 습득하여 풀스택 개발자로 성장하고 있으며, 
              사용자 중심의 설계와 최신 웹 기술을 활용하여 혁신적인 웹 애플리케이션을 만들어가고 있습니다.
            </p>
          </motion.div>

          {/* 오른쪽: 이미지 또는 통계 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyber-card p-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                <div className="text-gray-300">년 개발 경험</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">20+</div>
                <div className="text-gray-300">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-300">기술 스택</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-300">고객 만족도</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 특징 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card p-6 card-hover"
            >
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
