"use client"

import React from 'react';
import Link from 'next/link';

const MomentumDetail = () => {
  const skillStack = [
    'HTML5', 'SCSS', 'JavaScript (Vanilla JS)', 
    'OpenWeather API', 'LocalStorage', 'Git'
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 pb-20">
      {/* 1 */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 z-10" />
          <img 
            src="/img/momentum/thumbnail.png" 
            className="w-full h-full object-cover opacity-20 scale-105 blur-sm"
            alt="Momentum Background"
          />
        </div>
        
        <div className="relative z-20 text-center space-y-4 px-4">
          <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-sm mb-4">
            Productivity App Project
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4 font-black">
            MOMENTUM DASHBOARD
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            "바닐라 자바스크립트를 활용하여 <span className="text-orange-400 font-medium">데이터 지속성(LocalStorage)</span>과 
            외부 API 연동을 포함한 인터랙티브 대시보드를 구현했습니다."
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-4 border-orange-500 pl-4 font-black">01. 사용자 중심 대시보드</h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed text-lg">
              <p>• <strong>일정 관리(To-Do List)</strong>: 사용자의 할 일을 등록, 삭제하고 상태를 관리하는 핵심 기능을 구현했습니다.</p>
              <p>• <strong>북마크 시스템</strong>: 자주 방문하는 사이트를 빠르게 이동할 수 있는 편의 기능을 제공합니다.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img src="/img/momentum/thumbnail.png" alt="Momentum Main" className="w-full shadow-2xl" />
          </div>
        </section>

        {/* 3 */}
        <section className="p-10 md:p-16 rounded-[3rem] bg-neutral-900/40 border border-neutral-800 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 text-neutral-400">
              <h3 className="text-2xl font-bold text-white">02. 데이터 지속성 및 외부 연동</h3>
              <div className="space-y-4">
                <p>• <strong>LocalStorage 활용</strong>: 별도의 데이터베이스 없이 브라우저 저장소를 활용하여 페이지를 새로고침해도 할 일 목록과 사용자 정보가 유지되도록 설계했습니다.</p>
                <p>• <strong>OpenWeather API 연동</strong>: Geolocation API로 사용자의 위도와 경도를 파악하고, 날씨 API를 호출하여 실시간 지역 정보를 제공합니다.</p>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700 text-center">
               <div className="inline-block p-4 rounded-full bg-orange-500/10 mb-4">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 19.07-1.41-1.41"/><path d="M12 20v2"/><path d="m6.34 17.66-1.41 1.41"/><path d="M2 12h2"/><path d="m7.76 7.76-1.41 1.41"/><circle cx="12" id="12" r="4"/></svg>
               </div>
               <p className="text-orange-400 font-bold">Real-time Weather Data Binding</p>
               <p className="text-sm text-neutral-500 mt-2">OpenWeather API & Geolocation</p>
            </div>
          </div>
        </section>

        {/* 4 */}
        <section className="space-y-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white">03. 효율적인 스타일링 (SCSS)</h2>
          <p className="text-neutral-400 leading-relaxed text-lg">
            단순 CSS를 넘어 <strong>SCSS(Sass)</strong>를 도입하여 변수 활용, 중첩(Nesting), 믹스인(Mixin) 등을 통해 
            코드의 재사용성을 높이고 체계적인 스타일 시트 관리 구조를 경험했습니다.
          </p>
        </section>

        {/* 5   */}
        <footer className="pt-24 border-t border-neutral-800 text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
              ← 다른 프로젝트 보러가기
            </Link>
            <div className="flex gap-4">
              <a 
                href="https://min-ji97.github.io/momentum/" 
                target="_blank" 
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all active:scale-95"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/min-ji97/momentum" 
                target="_blank" 
                className="px-8 py-4 bg-neutral-800 text-white rounded-full font-bold hover:bg-neutral-700 transition-all border border-neutral-700 active:scale-95"
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

export default MomentumDetail;