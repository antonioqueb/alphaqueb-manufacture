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
    <div ref={containerRef} className="w-24 h-24 md:w-32 md:h-32">
      {animationData && <Lottie animationData={animationData} loop autoplay />}
    </div>
  );
}
