"use client"

import React from 'react';
import Link from 'next/link';

const StarbucksDetail = () => {
  const skillStack = [
    'HTML5', 'CSS3', 'JavaScript (Vanilla JS)', 'GSAP & ScrollMagic', 'Swiper.js', 'Git'
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 pb-20">
      {/*  1   */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 z-10" />
          <img 
            src="/img/starbucks/Animation1.gif" 
            className="w-full h-full object-cover opacity-20 scale-110 blur-md"
            alt="Starbucks Background"
          />
        </div>
        
        <div className="relative z-20 text-center space-y-4 px-4">
          <div className="inline-block px-3 py-1 bg-green-600/20 border border-green-600/50 rounded-full text-green-400 text-sm mb-4">
            Clone Coding Project
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4 font-black">
            STARBUCKS CLONE
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            "웹 표준을 준수하며, <span className="text-green-400 font-medium">GSAP와 Swiper.js</span>를 활용하여 고도화된 인터랙티브 UI와 애니메이션 구현 능력을 다졌습니다."
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-8">
            {skillStack.map(skill => (
              <span key={skill} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300 backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 space-y-32">
        
        {/* 2 */}
        <section className="p-8 md:p-12 rounded-[2.5rem] bg-neutral-900/30 border border-neutral-800 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Interactive UI Key Points</h2>
            <p className="text-neutral-400">자바스크립트 라이브러리를 활용한 정교한 애니메이션 제어</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img src="/img/starbucks/Animation1.gif" alt="Scroll Animation" className="w-full" />
            </div>
            <div className="space-y-6 text-neutral-400">
              <h3 className="text-2xl font-bold text-green-400">01. GSAP </h3>
              <p className="leading-relaxed">
                단순한 CSS 애니메이션을 넘어, <strong>GSAP</strong>를 활용해 정교한 시퀀스 애니메이션을 구현했습니다. 
                스크롤 위치에 따라 요소가 나타나고 사라지도록 하여, 사용자 몰입감을 극대화하였습니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 text-neutral-400 text-right">
              <h3 className="text-2xl font-bold text-green-400">02. Swiper.js Customizing</h3>
              <p className="leading-relaxed">
                다양한 유형의 <strong>Swiper 슬라이더</strong>를 구축했습니다. 공지사항의 수직 슬라이더부터 프로모션의 
                다중 이미지 슬라이더까지, 복잡한 레이아웃을 안정적으로 구현했습니다.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img src="/img/starbucks/Animation2.gif" alt="Slider Animation" className="w-full" />
            </div>
          </div>
        </section>

        {/* 3 */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img src="/img/starbucks/Animation3.gif" alt="UI Detail" className="w-full" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white border-l-4 border-green-500 pl-4">03. UI/UX Detail & 성능</h2>
              <div className="space-y-4 text-neutral-400">
                <p>• GSAP와 Swiper 라이브러리를 활용하여 인터랙티브한 사용자 경험(UX)을 설계하고 최적화했습니다</p>
                <p>• 시멘틱 태그를 활용한 마크업으로 웹 표준을 준수하고, 직관적인 CSS 네이밍을 통해 유지보수를 고려한 코드를 작성했습니다</p>
                <p>• 순수 자바스크립트(Vanilla JS)를 통한 DOM 조작과 이벤트 리스너 관리 능력을 강화했습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Footer */}
        <footer className="pt-24 border-t border-neutral-800 text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
              ← 다른 프로젝트 보러가기
            </Link>
            <a 
              href="https://github.com/min-ji97/Starbucks_clone" 
              target="_blank" 
              className="px-10 py-4 bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-green-500/20"
            >
              GitHub Repository
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StarbucksDetail;