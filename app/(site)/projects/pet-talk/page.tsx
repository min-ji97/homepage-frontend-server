"use client"

import React from 'react';
import Link from 'next/link';

const PetTalkDetail = () => {
  const skillStack = [
    'IDE : VS Code', 'Database : MySQL', 'Git', 'NPM', 'WebPack', 
    'Vue.js', 'Vuex', 'Node.js', 'Express', 'Axios', 'Multer', 'Tiptap'
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 pb-20">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 z-10" />
          <img 
            src="/img/pet_board/홈화면_1.png" 
            className="w-full h-full object-cover opacity-30 scale-110 blur-sm"
            alt="Background"
          />
        </div>
        
        <div className="relative z-20 text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 font-black">
            PET TALK!
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
            반려인들이 자유롭게 일상을 공유하고 유용한 정보를 교환할 수 있는 커뮤니티 공간을 목표로 제작했습니다. 
            <span className="text-purple-400 font-medium"> 사용자 경험(UX) 중심의 CRUD 기능 구현</span>에 집중했습니다.
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
        
        {/* 2. 로그인 & 보안 */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight underline decoration-purple-500 underline-offset-8">01. 인증 및 보안 시스템</h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>• <strong>Passport.js 기반의 전략적 인증 시스템</strong>을 구축하여 안정적인 사용자 검증을 구현했습니다.</p>
                <p>• 세션과 쿠키를 활용하여 <strong>상태 유지(Stateful) 서비스</strong>를 구현했으며, 보안성을 고려한 아이디/닉네임 <strong>실시간 중복 검사 로직</strong>을 적용했습니다.</p>
              </div>
            </div>
            <div className="space-y-4">
               <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl hover:border-purple-500/50 transition-colors">
                 <img src="/img/pet_board/로그인.png" alt="로그인" className="w-full" />
               </div>
               <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl hover:border-purple-500/50 transition-colors">
                 <img src="/img/pet_board/회원가입.png" alt="회원가입" className="w-full" />
               </div>
            </div>
          </div>
        </section>

        {/* 3. 게시판 전략 */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white border-l-4 border-blue-500 pl-4">02. 맞춤형 게시판 아키텍처</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400">
            <div className="space-y-4">
               <img src="/img/pet_board/홈화면_1.png" className="rounded-2xl border border-neutral-800 hover:scale-[1.02] transition-transform shadow-xl" alt="홈화면" />
               <p className="text-sm font-medium text-blue-400">Home: 반려동물 소개 및 자랑 (이미지 필수 조건)</p>
            </div>
            <div className="space-y-4">
               <img src="/img/pet_board/큐엔에이.png" className="rounded-2xl border border-neutral-800 hover:scale-[1.02] transition-transform shadow-xl" alt="Q&A" />
               <p className="text-sm font-medium text-pink-400">Q&A: 반려인 정보 공유 및 커뮤니티</p>
            </div>
          </div>
          <p className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 text-neutral-400 leading-relaxed italic">
            게시글 목록 및 상세 보기는 <strong>재사용 가능한 Component</strong>로 설계하여 코드 중복을 최소화하고 유지보수 효율을 높였습니다.
          </p>
        </section>

        {/* 4. 에디터 & 이미지 처리 */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">03. 리치 에디터 & 최적화된 파일 처리</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img src="/img/pet_board/홈화면_글작성.png" alt="글작성" className="w-full" />
            </div>
            <div className="space-y-6 text-neutral-400">
              <p>• <strong>Tiptap 에디터 도입</strong>을 통해 풍부한 텍스트 편집 환경을 제공하고, 모든 콘텐츠를 정형화된 HTML 데이터로 관리합니다.</p>
              <p>• <strong>효율적인 이미지 자산 관리</strong>에 대한 기술적 고민을 바탕으로, 이미지를 직접 DB에 저장하는 대신 <strong>Multer를 활용한 서버 저장 및 DB 경로 매핑 방식</strong>을 채택하여 최적의 성능을 확보했습니다.</p>
            </div>
          </div>
        </section>

        {/* 5. 권한 기반 UI 및 댓글 */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white border-l-4 border-pink-500 pl-4">04. 사용자 권한 기반 UI & 댓글 시스템</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                <img src="/img/pet_board/home 메인페이지.png" alt="상세페이지" className="w-full" />
             </div>
             <div className="space-y-6 text-neutral-400 leading-relaxed">
               <p>• <strong>권한 기반 조건부 렌더링</strong>을 적용하여 작성자 본인에게만 수정/삭제 인터페이스가 노출되도록 설계했습니다.</p>
               <p>• 댓글 수정 시 <strong>인라인 에디팅(Inline Editing)</strong> 방식을 구현하여 페이지 전환 없는 매끄러운 사용자 경험을 제공합니다.</p>
             </div>
          </div>
        </section>

        {/* 6. 게시글 삭제 */}
        <section className="p-12 rounded-[2rem] bg-gradient-to-b from-neutral-900/50 to-transparent border border-neutral-800 space-y-12">
          <h2 className="text-3xl font-bold text-white text-center">05. 안정적인 데이터 관리 </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 text-center">
              <img src="/img/pet_board/게시글수정_수정중.png" className="rounded-xl border border-neutral-700 shadow-lg" />
              <span className="text-xs text-neutral-500">데이터 수정 로직</span>
            </div>
            <div className="space-y-2 text-center">
              <img src="/img/pet_board/댓글수정_수정중.png" className="rounded-xl border border-neutral-700 shadow-lg" />
              <span className="text-xs text-neutral-500">인라인 수정 구현</span>
            </div>
            <div className="space-y-2 text-center">
              <img src="/img/pet_board/게시글삭제_알림.png" className="rounded-xl border border-neutral-700 shadow-lg" />
              <span className="text-xs text-neutral-500">삭제 프로세스</span>
            </div>
          </div>
          <div className="text-neutral-400 space-y-6 max-w-3xl mx-auto border-t border-neutral-800 pt-8 text-center">
            <p>• <strong>Soft Delete(논리 삭제) 전략</strong>: 물리적인 데이터 삭제 대신 <code>active = 'N'</code> 상태 값을 부여하여 데이터 복구 가능성과 정합성을 유지합니다.</p>
            <p>• <strong>데이터 무결성</strong>: 활성화된 데이터만을 필터링하여 사용자에게 제공함으로써 신뢰할 수 있는 정보를 관리합니다.</p>
          </div>
        </section>

        {/* 7. 회원정보 관리 */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white underline decoration-blue-500 underline-offset-8">06. 통합 마이페이지 및 정보 변경</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
                <img src="/img/pet_board/회원정보변경_1.png" className="rounded-2xl border border-neutral-800 shadow-xl" />
                <p className="text-neutral-400 text-sm italic border-l-2 border-blue-500 pl-3">프로필 사진 프리뷰 및 실시간 중복 검사 시스템</p>
             </div>
             <div className="space-y-4">
                <img src="/img/pet_board/내가쓴글_홈화면.png" className="rounded-2xl border border-neutral-800 shadow-xl" />
                <p className="text-neutral-400 text-sm italic border-l-2 border-pink-500 pl-3">개인 활동 내역 모아보기 기능</p>
             </div>
          </div>
        </section>

        {/* 8. Footer */}
        <footer className="pt-24 border-t border-neutral-800 text-center space-y-12">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
              ← 메인 포트폴리오로 돌아가기
            </Link>
            <a 
              href="https://github.com/min-ji97/pet_board" 
              target="_blank" 
              className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-purple-500/20 active:scale-95"
            >
              GitHub Repository
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PetTalkDetail;