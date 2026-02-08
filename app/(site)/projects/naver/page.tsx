"use client"

import React from 'react';
import Link from 'next/link';

const NaverDetail = () => {
  const skillStack = [
    'HTML5', 'CSS3 (Grid/Flexbox)', 'JavaScript (Vanilla JS)', 
    '기상청 단기예보 API', 'Git', 'GitHub Pages'
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 pb-20">
      {/* 1 */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 z-10" />
          <img 
            src="/img/naver/전체이미지.png" 
            className="w-full h-full object-cover opacity-20 scale-105 blur-sm"
            alt="Naver Clone Background"
          />
        </div>
        
        <div className="relative z-20 text-center space-y-4 px-4">
          <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm mb-4">
            Clone Coding & API Integration
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4 font-black">
            NAVER PORTAL CLONE
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            "포털 사이트의 복잡한 레이아웃을 정교하게 분석하고, 
            <span className="text-green-400 font-medium"> 공공데이터 API를 활용한 실시간 데이터 바인딩</span>을 구현했습니다."
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
        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white border-l-4 border-green-500 pl-4 font-black">01. 고도로 구조화된 레이아웃</h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>• 네이버 메인 페이지의 복잡한 그리드 시스템을 분석하여 <strong>Semantic Markup</strong>을 기반으로 구조화했습니다.</p>
                <p>• <strong>Flexbox와 Grid</strong>를 적재적소에 활용하여 수많은 콘텐츠 영역이 유연하게 배치되도록 설계했습니다.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img src="/img/naver/전체이미지.png" alt="Full Layout" className="w-full shadow-2xl" />
            </div>
          </div>
        </section>

        {/* 3 */}
        <section className="p-10 md:p-16 rounded-[3rem] bg-neutral-900/40 border border-neutral-800 space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M17.5 19c.7 0 1.3-.2 1.8-.7s.7-1.1.7-1.8c0-1.4-1.1-2.5-2.5-2.5-.2 0-.4 0-.6.1C16 12.5 14.3 11 12.3 11c-1.5 0-2.8.9-3.4 2.1C8.3 13 7.7 13 7.1 13 5.4 13 4 14.4 4 16.1c0 1.7 1.3 3 3 3h10.5z"></path></svg>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border-4 border-neutral-800 shadow-inner group">
              <img src="/img/naver/실시간예보.png" alt="Weather API" className="w-full group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="space-y-6 text-neutral-400">
              <h3 className="text-2xl font-bold text-white">02. 실시간 단기예보 API 연동</h3>
              <div className="space-y-4">
                <p>• <strong>공공데이터포털의 기상청 API</strong>를 활용하여 사용자가 접속한 시점의 실시간 날씨 데이터를 비동기(Async/Await)로 호출합니다.</p>
                <p>• API로부터 받은 복잡한 JSON 데이터를 파싱하여 화면의 날씨 아이콘, 온도, 강수 형태 등에 <strong>동적으로 바인딩</strong>했습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 달력  */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight">03. JavaScript 로직의 실제 구현</h2>
              <div className="space-y-4 text-neutral-400">
                <p>• <strong>Custom Calendar</strong>: Date 객체를 활용해 현재 날짜에 맞는 달력을 생성하고, 오늘 날짜를 하이라이트 하는 등 실제 서비스와 동일한 로직을 구현했습니다.</p>
                <p>• <strong>Interactive UI</strong>: 검색창 포커스 효과, 탭 메뉴 전환 등 세밀한 인터랙션을 순수 자바스크립트로 제어했습니다.</p>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden border border-neutral-800 p-4 bg-neutral-900/20">
              <div className="rounded-2xl overflow-hidden border-4 border-neutral-800 shadow-inner group">
                <img src="/img/naver/달력.png" alt="Weather API" className="w-full group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Footer */}
        <footer className="pt-24 border-t border-neutral-800 text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
              ← 다른 프로젝트 보러가기
            </Link>
            <div className="flex gap-4">
              <a 
                href="https://min-ji97.github.io/Naver_clone/" 
                target="_blank" 
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all active:scale-95"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/min-ji97/Naver_clone" 
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

export default NaverDetail;