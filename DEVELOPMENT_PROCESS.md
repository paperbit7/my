�� 포트폴리오 웹사이트 전문 소개
개발자 프로필
윤현우 - 경성전자고등학교 2학년, 현재 키움증권에서 재직 중인 프론트엔드 개발자
핵심 기술 구현
🎯 Next.js 14 App Router 아키텍처
// app/page.tsx - 컴포넌트 기반 구조
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
⚡ Framer Motion 고급 애니메이션
// Hero.tsx - 마우스 추적 및 스프링 애니메이션
const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)
const springX = useSpring(mouseX, { damping: 25, stiffness: 700 })

// 스크롤 기반 패럴랙스
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end start"]
})
const y = useTransform(scrollYProgress, [0, 1], [0, -300])
�� Tailwind CSS 커스터마이징
// tailwind.config.js - 사이버펑크 테마
colors: {
  cyber: {
    500: '#00ffff',  // 네온 시안
    600: '#00cccc',
  },
  neon: {
    cyan: '#00ffff',
    purple: '#8000ff',
  }
},
animation: {
  'glow': 'glow 2s ease-in-out infinite alternate',
  'pulse-neon': 'pulseNeon 1.5s ease-in-out infinite',
}
��️ TypeScript 타입 안정성
// 컴포넌트 Props 타입 정의
interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}
구현된 주요 기능
📱 반응형 디자인 시스템
CSS Grid & Flexbox 기반 레이아웃
모바일 우선 접근법 (Mobile-First)
브레이크포인트: sm(640px), md(768px), lg(1024px), xl(1280px)
�� 인터랙티브 애니메이션
마우스 추적 배경 효과
스크롤 기반 패럴랙스
호버 시 네온 글로우 효과
타입라이터 텍스트 애니메이션
�� 사이버펑크 디자인
네온 색상 팔레트 (시안, 퍼플, 블루)
Orbitron 폰트로 미래지향적 타이포그래피
글리치 효과와 스캔 라인 애니메이션
backdrop-blur와 glassmorphism 효과
📊 프로젝트 전시 시스템
]
기술 스택 상세
Frontend Framework
Next.js 14: App Router, SSR, SSG 최적화
React 18: 함수형 컴포넌트, 훅 기반 개발
TypeScript: 정적 타입 검사, 개발 생산성 향상
Styling & Animation
Tailwind CSS: 유틸리티 퍼스트 CSS 프레임워크
Framer Motion: 고급 애니메이션 라이브러리
CSS Custom Properties: 동적 스타일링
Deployment & Tools
Firebase Hosting: 정적 사이트 호스팅
EmailJS: 클라이언트 사이드 이메일 전송
Lucide React: 일관된 아이콘 시스템  