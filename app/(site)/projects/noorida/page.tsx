"use client"

import React from 'react';
import Link from 'next/link';

const NooridaDetail = () => {
  const skillStack = [
    '담당 : 프론트엔드 (4인 팀 프로젝트)', 'AWS', 'MariaDB', 'Vue.js', 'Vuex', 
    'Node.js', 'Express.js', 'Knex.js', 'WebPack', 'Axios'
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 pb-20">
      {/* 1 */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 z-10" />
          <img 
            src="/img/noorida/예시3.png" 
            className="w-full h-full object-cover opacity-20 scale-110 blur-sm"
            alt="Noorida Background"
          />  
        </div>
        
        <div className="relative z-20 text-center space-y-4 px-4">
          <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-400 text-sm mb-4">
            Graduation Project
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4 font-black">
            누리다 (NOORIDA)
          </h1>
          {/* max-w-3xl */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed font-light">
            사용자의 실시간 위치 정보를 기반으로 지역 소식을 공유하는 
            <span className="text-blue-400 font-medium"> 위치기반 소셜 네트워크 서비스</span>입니다.
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
        
        {/* 2. Project Overview */}
        <section className="p-8 md:p-12 rounded-[2.5rem] bg-neutral-900/30 border border-neutral-800 space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">주요 시스템 아키텍처</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-blue-400 font-bold tracking-widest text-xs uppercase">Location Based</div>
              <h3 className="text-xl font-bold text-white">위치 기반 서비스</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">접속 위치를 실시간으로 획득하여 해당 지역의 게시물, 핫 토픽, 구독 리스트를 제공합니다.</p>
            </div>
            <div className="space-y-3">
              <div className="text-green-400 font-bold tracking-widest text-xs uppercase">Cloud Computing</div>
              <h3 className="text-xl font-bold text-white">AWS 인프라</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">AWS 클라우드 환경에서 서비스를 배포하고 MariaDB를 통해 대규모 소셜 데이터를 안정적으로 관리합니다.</p>
            </div>
            <div className="space-y-3">
              <div className="text-purple-400 font-bold tracking-widest text-xs uppercase">Social Interaction</div>
              <h3 className="text-xl font-bold text-white">소셜 인터랙션</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">스크랩, 신고, 차단, 감정표현 및 사용자 간 구독 시스템을 통해 활발한 커뮤니티 환경을 조성했습니다.</p>
            </div>
          </div>
        </section>

        {/* 3. 계정 및 인증 */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white border-l-4 border-blue-500 pl-4">01. 계정 관리 시스템</h2>
              <div className="space-y-4 text-neutral-400">
                <p>• 기본 로그인/회원가입은 물론, <strong>아이디 및 비밀번호 찾기 로직</strong>을 구현하여 사용자 편의성을 높였습니다.</p>
                <p>• 사이드 메뉴를 통해 프로필 관리, 비밀번호 변경, 계정 탈퇴 등 <strong>자기 주도적 계정 관리 기능</strong>을 제공합니다.</p>
              </div>
            </div>
            <div className="space-y-4">
               <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl hover:border-blue-500/50 transition-colors">
                 <img src="/img/noorida/예시1.png" alt="Login & Join" className="w-full" />
               </div>
               <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl hover:border-blue-500/50 transition-colors">
                 <img src="/img/noorida/예시2.png" alt="Find ID/PW" className="w-full" />
               </div>
            </div>
          </div>
        </section>

        {/* 4. 게시물 리스트 & 검색 */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white text-right border-r-4 border-green-500 pr-4">02. 지역 기반 콘텐츠 큐레이션</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
               <img src="/img/noorida/예시3.png" alt="List Preview" className="w-full" />
            </div>
            <div className="order-1 md:order-2 space-y-6 text-neutral-400">
              <p>• <strong>탭 메뉴 구성</strong>: 지역 소식, 구독 게시물, 핫 토픽으로 구분하여 사용자가 원하는 정보를 빠르게 필터링할 수 있습니다.</p>
              <p>• <strong>다차원 검색 기능</strong>: 지역명뿐만 아니라 리포터(사용자), 게시물 제목 등 다각도의 검색 엔진을 구축했습니다.</p>
            </div>
          </div>
        </section>

        {/* 5. 게시글 작성 및 상세 기능 */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white">03. 위치 획득 기반 게시글 작성</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                  <img src="/img/noorida/예시5.png" alt="Write Post" className="w-full" />
                </div>
                <p className="text-sm text-neutral-500 italic">게시글 작성 시 현재 위치 좌표 동기화</p>
             </div>
             <div className="space-y-6 text-neutral-400 leading-relaxed">
               <p>• <strong>1인 1조회수 제한</strong>: 무분별한 조회수 조작을 방지하는 로직을 적용했습니다.</p>
               <p>• <strong>유저 상호작용</strong>: 타 유저 게시물 스크랩, 차단, 신고 및 감정표현 기능을 통해 건전하고 활발한 소셜 네트워크를 지향합니다.</p>
               <div className="rounded-2xl overflow-hidden border border-neutral-800 mt-4">
                 <img src="/img/noorida/예시4.png" alt="Detail Post" className="w-full" />
               </div>
             </div>
          </div>
        </section>

        {/* 6. 프로필 시스템 */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white border-l-4 border-indigo-500 pl-4">04. 고도화된 프로필 시스템</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="group space-y-4">
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl group-hover:border-indigo-500/50 transition-all">
                  <img src="/img/noorida/졸업작품_3.png" className="w-full" alt="My Profile" />
                </div>
                <p className="text-neutral-400 text-sm font-medium text-center">나의 프로필: 작성글, 스크랩, 차단 목록 통합 관리</p>
             </div>
             <div className="group space-y-4">
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl group-hover:border-indigo-500/50 transition-all">
                  <img src="/img/noorida/예시6.png" className="w-full" alt="Other Profile" />
                </div>
                <p className="text-neutral-400 text-sm font-medium text-center">타인 프로필: 구독 및 소셜 관계 맺기</p>
             </div>
          </div>
        </section>

        {/* 7. Footer */}
        <footer className="pt-24 border-t border-neutral-800 text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
              ← 다른 프로젝트 보러가기
            </Link>
            <a 
              href="https://github.com/JJ-Min/noorida" 
              target="_blank" 
              className="px-10 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-blue-500/20"
            >
              GitHub Repository
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NooridaDetail;