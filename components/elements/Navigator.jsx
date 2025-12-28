"use client";
import React, { useEffect, useMemo , useState } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "./PlayListNav";
import { useRouter } from "next/router";

const Navigator = () => {

  const pathname = usePathname();
  const [activeId , setActiveId ] = useState("home");  // 현재 방문 중인 섹션 ID

  // 스크롤 감지 로직 
  useEffect(()=>{
    const sectionIds = ["home", "introduce", "project","contact","guestbook"];

    const observerOptions = {
      root: null,
      rootMargin : "-40% 0px -40% 0px", // 화면 중앙 부근에 들어왔을 때 감지
      threshold : 0,
    };

    const observerCallback = (entries) =>{
      entries.forEach((e) => {
        if(e.isIntersecting){
          setActiveId(e.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id)=>{
      const element = document.getElementById(id);
      if(element) observer.observe(element);
    });

    return () => observer.disconnect();

  },[]);

  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "Home",
        // isActive: pathname === "/",
        isActive: activeId === "home",
        href: "#home",
      },
      {
        icon: <FiMusic size={24} />,
        label: "Introduce",
        // isActive: pathname === "#introduce",
        isActive: activeId === "introduce",
        href: "#introduce",
      },
      {
        icon: <FiCompass size={24} />,
        label: "Project",
        isActive: activeId === "project",
        href: "#project",
      },
      {
        icon: <FiPlus size={24} />,
        label: "Contact",
        isActive: activeId === "contact",
        href: "#contact",
      },
      {
        icon: <FiPlus size={24} />,
        label: "방명록",
        isActive: activeId === "guestbook",
        href: "#guestbook",
      },
    ];
  // }, [pathname]);
  }, [activeId]);

  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href} scroll={false} onClick={(e)=>{
              e.preventDefault(); //기본 클릭 이벤트 막기
              const target = document.getElementById(route.href.slice(1));// href에서 '#'제거
              if(target){
                target.scrollIntoView( {behavior :'smooth'} )
              }
            }}>
              <div
                className={cn(
                  "text-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-lg p-2",
                  route.isActive && "bg-neutral-800"
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-700"></div>
      </section>

      {/* +재생 목록 표시 */}
      {/* <section className="px-6">
        <div
          className="hover:bg-neutral-700 cursor-pointer
         flex flex-row items-center bg-neutral-800 my-6 rounded-3xl p-2 font-[200] justify-center gap-2"
        >
          <FiPlus size={24}></FiPlus>
          <span>새 재생목록</span>
        </div>
      </section> */}

      {/* 플레이 리스트 목록 */}
      {/* <section>
        <ul className="flex flex-col">
          {dummyPlaylistArray.map((playlist) => {
            return (
              <PlayListNav key={playlist.id} playlist={playlist}></PlayListNav>
            );
          })}
        </ul>
      </section> */}
    </div>
  );
};

export default Navigator;


/**
 * 
 * "use client";
import React, { useMemo, useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigator = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("home"); // 현재 보고 있는 섹션 ID 저장

  // 스크롤 감지 로직 추가
  useEffect(() => {
    const sectionIds = ["home", "introduce", "project", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // 화면 중앙 부근에 들어왔을 때 감지
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "Home",
        isActive: activeId === "home", // 스크롤 상태에 따라 활성화
        href: "#home",
      },
      {
        icon: <FiMusic size={24} />,
        label: "Introduce",
        isActive: activeId === "introduce",
        href: "#introduce",
      },
      {
        icon: <FiCompass size={24} />,
        label: "Project",
        isActive: activeId === "project",
        href: "#project",
      },
      {
        icon: <FiPlus size={24} />,
        label: "Contact",
        isActive: activeId === "contact",
        href: "#contact",
      },
    ];
  }, [activeId]); // activeId가 바뀔 때마다 메뉴 갱신

  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route) => (
          <Link key={route.label} href={route.href}>
            <div
              className={cn(
                "text-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-lg p-2 transition-colors duration-300",
                route.isActive ? "bg-neutral-800 text-blue-400" : "text-neutral-400" 
                // 활성화됐을 때 색상을 blue-400 등으로 포인트를 주면 더 예뻐요!
              )}
            >
              {route.icon}
              <span className="font-medium">{route.label}</span>
            </div>
          </Link>
        ))}
      </section>
     //  ... 기존 하단 섹션들은 동일 ... 
      </div>
    );
  };
  
  export default Navigator;
 * 
 * 
 * 
 */
