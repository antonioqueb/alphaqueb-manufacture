"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

    if (!hasAcceptedCookies) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("cookiesAccepted", "true");

        // 🔹 Hacer tracking solo después de 3 segundos
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "accept_cookies", {
            event_category: "Cookies",
            event_label: "El usuario aceptó las cookies automáticamente",
          });
        }
      }, 5000);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white text-sm p-3 text-center z-50">
      Usamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas el uso de cookies. 
      <a 
        href="https://alphaqueb.com/politica-de-coockies" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline text-blue-400 ml-2 hover:text-blue-300"
      >
        Ver política de cookies
      </a>
    </div>
  );
}
