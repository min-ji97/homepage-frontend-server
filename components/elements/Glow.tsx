"use client";

import React, { useEffect, useState, useCallback } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  vx: number; // 가로 확산 속도
  vy: number; // 세로 확산 속도
  size: number;
  opacity: number;
}

const Glow = () => {
  const [stars, setStars] = useState<Star[]>([]);

  const addStar = useCallback((x: number, y: number) => {
    
    const newStars = Array.from({ length: 3 }).map(() => ({
      id: Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 4, 
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 3 + 2,
      opacity: 1,
    }));

    setStars((prev) => [...prev, ...newStars].slice(-40)); // 입자 수를 40개로 늘림
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => addStar(e.clientX, e.clientY);
    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars
          .map((star) => ({
            ...star,
            x: star.x + star.vx, // 속도만큼 이동 (확산)
            y: star.y + star.vy, // 속도만큼 이동 (확산)
            opacity: star.opacity - 0.03, // 서서히 사라짐
          }))
          .filter((star) => star.opacity > 0)
      );
    }, 30);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [addStar]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full shadow-[0_0_8px_white]"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            // 로고 색상과 똑같은 그라데이션 적용
            background: "linear-gradient(45deg, #60a5fa, #a855f7, #f472b6)",
            transform: `translate(-50%, -50%) scale(${star.opacity})`,
          }}
        />
      ))}
    </div>
  );
};

export default Glow;