"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ContactAnimation() {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetch("/contact-us.json")
          .then((res) => res.json())
          .then((data) => setAnimationData(data));
        observer.disconnect();
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-40 h-40 md:w-64 md:h-64 p-4 bg-white dark:bg-black rounded-xl shadow-lg"
    >
      {animationData && (
        <Lottie
          className="w-full h-full"
          animationData={animationData}
          loop
          autoplay
        />
      )}
    </div>
  );
}
