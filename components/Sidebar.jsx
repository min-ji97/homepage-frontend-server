"use client";
import React, { useState } from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
// import usePlayerState from "@/hooks/usePlayerState";
import { cn } from "@/lib/utils";
import { HiMenu, HiX } from "react-icons/hi";
import Glow from "./elements/Glow";
const Sidebar = ({ children }) => {
  // const { isVisiblePlayer } = usePlayerState();
  const [isOpen , setIsOpen] = useState(false); // 모바일 사이드바 - 열려있는 상태
  
  return (
    <div
      className={cn("flex flex-col lg:flex-row h-full ")}
    >
      <Glow />
      
      {/* 헤더 - 모바일 시 상단 바 */}
      <header className="lg:hidden flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Logo />
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
        
        {/* 모바일 - 드롭다운 메뉴 */}
        <div className={cn(
          "absolute top-[80px] right-6 w-[280px] sm:w-[320px] bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl z-40 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        )}>
          <div className="flex flex-col p-3 gap-1" onClick={() => setIsOpen(false)}>
            <Navigator />
          </div>
        </div>


      </header>
      
      {/* 사이드바 */}
      <nav className={cn(
        "fixed inset-y-0 left-0 z-40 w-[260px] bg-black border-r border-neutral-800 transition-transform duration-300 ease-in-out transform", // 기본
        "lg:relative lg:translate-x-0 lg:block", // PC일때 
        isOpen ? "hidden" : "-translate-x-full" // 모바일 토글
      )}>
      {/* <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600 "> */}
        <div className="p-[24px] hidden lg:block">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="w-full h-full overflow-y-auto lg:w-[calc(100%-240px)] ">{children}</div>
    </div>
  );
};

export default Sidebar;
