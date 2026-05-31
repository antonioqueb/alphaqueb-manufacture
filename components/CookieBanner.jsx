"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setIsVisible(true);
  }, []);
  const accept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "accept_cookies", { event_category: "Cookies", event_label: "El usuario aceptó las cookies" });
    }
  };
  if (!isVisible) return null;
  return <div className="aq-cookie"><span>Usamos cookies para mejorar la experiencia y medir el rendimiento del sitio. <Link href="/politica-de-coockies">Ver política de cookies</Link></span><button type="button" onClick={accept}>Aceptar</button></div>;
}
