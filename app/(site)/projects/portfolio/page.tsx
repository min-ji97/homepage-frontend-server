"use client"

import React from 'react';
import Link from 'next/link';

const PortfolioDetail = () => {
  const skillStack = [
    'Next.js 14 (App Router)', 'React', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'AI Pair Programming (Gemini)'
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 pb-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 z-10" />
          <img 
            src="/img/portfolio/thumbnail.png" 
            className="w-full h-full object-cover opacity-20 scale-105 blur-sm"
            alt="Portfolio Background"
          />
        </div>
        
        <div className="relative z-20 text-center space-y-4 px-4">
          <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 text-sm mb-4">
            Continuous Evolution Project
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4 font-black">
            Portfolio Evolution
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            단순한 결과물을 넘어, <span className="text-purple-400 font-medium">AI와 협업하며 기술적 한계를 돌파</span>하는 과정을 담은 저의 성장 기록입니다.
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
        
        <section className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">Project Journey</h2>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                처음 리액트를 학습하며 제작했던 포트폴리오는 기술적으로 부족함이 많았습니다. 하지만 저는 여기서 멈추지 않고 <strong>AI(Gemini)와 페어 프로그래밍</strong>을 진행하며 프로젝트를 재설계했습니다.
              </p>
              <p>
                아래 시연 영상이 기존 포트폴리오 입니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-white font-bold mb-2">Step 1. 기초 다지기</h4>
                  <p className="text-sm">기존 React와 SCSS를 활용해 컴포넌트 구조의 기본기 학습</p>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                  <h4 className="text-purple-400 font-bold mb-2">Step 2. 기술 고도화</h4>
                  <p className="text-sm">Next.js 14 전환, Tailwind CSS 도입 및 AI를 활용한 디자인 시스템 최적화</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white border-l-4 border-purple-500 pl-4 font-black">Responsive Showcase</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* PC */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-200">PC Version</h3>
              <div className="aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <video src="/img/portfolio/포트폴리오_pc.mp4" controls muted loop className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Tablet */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-200">Tablet Version</h3>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <video src="/img/portfolio/포트폴리오_탭.mp4" controls muted loop className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Mobile */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-200">Mobile Version</h3>
              <div className="aspect-[9/16] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
                <video src="/img/portfolio/포트폴리오_모바일.mp4" controls muted loop className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-neutral-400 text-lg">
             <h3 className="text-2xl font-bold text-white tracking-tight underline decoration-purple-500 underline-offset-8 mb-8">AI와의 협업, 그리고 깨달음</h3>
             <p>• 단순히 코드를 복사하는 것이 아니라, AI가 제안하는 구조를 분석하고 내 프로젝트에 맞춰 **커스텀**하는 능력을 길렀습니다.</p>
             <p>• **Next.js의 App Router**와 서버 컴포넌트의 개념을 AI와 대화하며 실전 프로젝트에 적용했습니다.</p>
             <p>• 사용자 경험(UX)을 위해 **애니메이션 디테일**을 수정하고 최적화하는 과정을 거쳤습니다.</p>
          </div>  
        </section>

        <footer className="pt-24 border-t border-neutral-800 text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
              ← 다른 프로젝트 보러가기
            </Link>
            <div className="flex gap-4">
              <a 
                  href="https://min-ji97.github.io/portfolio-react/" 
                  target="_blank" 
                  className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all active:scale-95"
                >
                  Live Demo
                </a>
              <a 
                href="https://github.com/min-ji97/portfolio-react" 
                target="_blank" 
                className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-purple-500/20"
              >
                GitHub
              </a>
            </div>
            
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioDetail;