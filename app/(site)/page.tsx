"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import PagePadding from "@/components/PagePadding";
import Comment from "./Comment";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaVuejs,
  FaReact,
  FaNode,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { link } from "fs";

// Skill Component
const SkillComponent = ({ value, icon: Icon }: { value: string; icon?: React.ComponentType<{ size?: number; className?: string }> }) => {
  return (
    <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg text-sm hover:bg-neutral-700 transition-colors">
      {Icon && <Icon size={18} className="text-blue-400" />}
      {value}
    </span>
  );
};

// Project Component with 3D hover effect
const ProjectComponent = ({ 
  img, 
  pjName, 
  dataType, 
  className 
}: { 
  img: string; 
  pjName: string; 
  dataType: string; 
  className: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      let offsetX = e.clientX - rect.left - centerX;
      let offsetY = e.clientY - rect.top - centerY;

      const rotateX = (offsetY / centerY) * 20;
      const rotateY = (offsetX / centerX) * -20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = "transform 0.1s";
    };

    const handleMouseLeave = () => {
      if (card) {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        card.style.transition = "transform 0.3s";
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${className} project-card group cursor-pointer`}
      data-type={dataType}
    >
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 shadow-lg">
      <Image 
          src={`/${img}`} // public 폴더 기준: /img/momentum/thumbnail.png 로 인식됨
          alt={pjName}
          fill
          className="object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        {/* 이미지 위에 텍스트 보여줌 */}
        {/* <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-3xl md:text-4xl font-bold text-white/30 group-hover:text-white/50 transition-colors duration-300">
            {pjName}
          </div>
        </div> */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </div>
      <div className="mt-4 text-center">
        <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {pjName}
        </span>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterKey, setFilterKey] = useState(0); // Force re-render for animation
  const mainHeaderRef = useRef<HTMLDivElement>(null);
  const introduceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);

  const skillFront = [
    { value: "HTML5", icon: FaHtml5 },
    { value: "CSS3", icon: FaCss3Alt },
    { value: "SCSS", icon: FaSass },
    { value: "JavaScript", icon: FaJs },
    { value: "Vue.js", icon: FaVuejs },
    { value: "React.js", icon: FaReact },
  ];

  const skillBack = [
    { value: "Node.js", icon: FaNode },
    { value: "Express.js", icon: null },
    { value: "MySQL", icon: null },
    { value: "MariaDB", icon: null },
  ];

  const skillEtc = [
    { value: "Git", icon: FaGithub },
    { value: "Figma", icon: FaFigma },
  ];

  const projectLists = [
    {
      img: "img/momentum/thumbnail.png",
      pjName: "Momentum",
      dataType: "js",
      className: "project-content--js",
      pjLink: "/projects/momentum",
    },
    {
      img: "img/portfolio/thumbnail.png",
      pjName: "Portfolio React",
      dataType: "react",
      className: "project-content--react",
      pjLink: "/projects/portfolio",
    },
    {
      img: "img/naver/thumbnail.png",
      pjName: "네이버 클론코딩",
      dataType: "js",
      className: "project-content--js",
      pjLink: "/projects/naver",
    },
    {
      img: "img/starbucks/thumbnail.png",
      pjName: "스타벅스 클론코딩",
      dataType: "js",
      className: "project-content--js",
      pjLink: "/projects/starbucks",
    },
    {
      img: "img/pet_board/thumbnail.png",
      pjName: "CRUD 게시판 Pet Talk!",
      dataType: "vue",
      className: "project-content--vue",
      pjLink: "/projects/pet-talk",
    },
    {
      img: "img/noorida/thumbnail.png",
      pjName: "졸업작품 : 누리다",
      dataType: "vue",
      className: "project-content--vue",
      pjLink: "/projects/noorida",
    },
  ];

  const handleProjectFilter = (filter: string) => {
    setActiveFilter(filter);
    setFilterKey((prev) => prev + 1); // Trigger animation reset
  };

  const filteredProjects =
    activeFilter === "All"
      ? projectLists
      : projectLists.filter((project) => {
          if (activeFilter === "Vue") return project.dataType === "vue";
          if (activeFilter === "React") return project.dataType === "react";
          if (activeFilter === "JavaScript") return project.dataType === "js";
          return true;
        });

  return (
    
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <PagePadding>
        {/* Home Section */}
        <section
          id="home"
          ref={mainHeaderRef}
          className="min-h-screen flex flex-col justify-center items-center text-center py-20"
        >
          <div className="mb-12">
            <div className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shine">
              MINJI&apos;s
            </div>
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shine">
              Portfolio
            </div>
          </div>
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">안녕하세요</h1>
            <h2 className="text-xl md:text-2xl text-neutral-300">
              프론트엔드 신입 개발자를 꿈꾸는 조민지 입니다.
            </h2>
            <div className="flex justify-center items-center gap-2 mt-8">
              {/* animate-pulse VS animate-bounce 고민*/}
              <span className="w-2 h-2 bg-blue-400 rounded-full  animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-purple-400 rounded-full  delay-75 animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-pink-400 rounded-full  delay-150 animate-bounce"></span>
            </div>
          </div>
        </section>

        {/* Introduce Section */}
        <section
          id="introduce"
          ref={introduceRef}
          className="min-h-screen py-20 space-y-16"
        >
          {/* About Me */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-3">
                <span className="text-neutral-400">이름:</span>
                <span>조민지</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400">생년월일:</span>
                <span>1997.11.10</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400">주소:</span>
                <span>경기도 이천</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-400">이메일:</span>
                <span>whalswl576@gmail.com</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <span className="text-neutral-400">학력:</span>
                <div className="flex flex-col">
                  <span>남서울대학교 컴퓨터소프트웨어학과 졸업 <span className="text-neutral-500"> 2016.02 ~ 2020.02</span></span>
                  <span>코리아IT 아카데미 이수<span className="text-neutral-500"> 2025.06 ~ 2025.12</span></span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
              {/* <HiOutlineDocumentText size={40} /> */}
              Certificate
            </h1>
            <div className="space-y-3 text-lg">
              <div className="px-4 py-3 bg-neutral-900 rounded-lg border border-neutral-800">
                정보처리기사
              </div>
              <div className="px-4 py-3 bg-neutral-900 rounded-lg border border-neutral-800">
                MOS MASTER : Word, Excel, Powerpoint, Access
              </div>
              <div className="px-4 py-3 bg-neutral-900 rounded-lg border border-neutral-800">
                SQLD
              </div>
              <div className="px-4 py-3 bg-neutral-900 rounded-lg border border-neutral-800">
                리눅스 마스터
              </div>
              <div className="px-4 py-3 bg-neutral-900 rounded-lg border border-neutral-800">
                AZ-900 : Microsoft Azure Fundamentals
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Front-End</h2>
                <div className="flex flex-wrap gap-3">
                  {skillFront.map((skill, index) => (
                    <SkillComponent key={index} value={skill.value} icon={skill.icon} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Back-End</h2>
                <div className="flex flex-wrap gap-3">
                  {skillBack.map((skill, index) => (
                    <SkillComponent key={index} value={skill.value} icon={skill.icon || undefined} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-pink-400">Etc.</h2>
                <div className="flex flex-wrap gap-3">
                  {skillEtc.map((skill, index) => (
                    <SkillComponent key={index} value={skill.value} icon={skill.icon} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section
          id="project"
          ref={projectRef}
          className="min-h-screen py-20 space-y-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            PROJECT
          </h1>

          <div className="space-y-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {["All", "Vue", "React", "JavaScript"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleProjectFilter(filter)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105"
                      : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={filterKey}>
              {filteredProjects.map((project, index) => (
                <Link 
                  href={`${project.pjLink}`}
                  key={`${project.pjName}-${index}-${filterKey}`}
                  className="opacity-0 animate-fade-in-up block group" // group 클래스 추가 (호버 효과용)
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="transition-transform duration-300 group-hover:-translate-y-2">
                    <ProjectComponent
                      img={project.img}
                      pjName={project.pjName}
                      dataType={project.dataType}
                      className={project.className}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className="min-h-screen py-20 flex flex-col items-center justify-center space-y-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CONTACT
          </h1>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
            {/* GitHub Card */}
            <div className="group relative w-[280px] h-[200px] perspective-1000">
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl border border-neutral-700 flex items-center justify-center">
                  <div className="text-2xl font-bold">GITHUB</div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex flex-col items-center justify-center gap-4">
                  <FaGithub size={48} />
                  <a
                    href="https://github.com/min-ji97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
                  >
                    바로가기
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div className="group relative w-[280px] h-[200px] perspective-1000">
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl border border-neutral-700 flex items-center justify-center">
                  <div className="text-2xl font-bold">B-LOG</div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex flex-col items-center justify-center gap-4">
                  <HiOutlineDocumentText size={48} />
                  <a
                    href="https://min-coding.tistory.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
                  >
                    바로가기
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative w-[280px] h-[200px] perspective-1000">
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl border border-neutral-700 flex items-center justify-center">
                  <div className="text-xl font-bold text-center px-4">EMAIL</div>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-600 to-red-600 rounded-xl flex flex-col items-center justify-center gap-4">
                  <MdEmail size={48} />
                  <div className="text-sm font-semibold text-center px-4">
                    whalswl576@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-neutral-700" style={{ height: '1px', marginBottom: '50px' }}></div>

        <section 
          id="comment"
          ref={commentRef}>
            
          <Comment></Comment>
        </section>
        <footer className="py-10 text-center text-neutral-500 border-t border-neutral-900">
          <p>© 2025 joeMinJi. All rights reserved.</p>

        </footer>
      </PagePadding>

    </div>
  );
};

export default PortfolioPage;
