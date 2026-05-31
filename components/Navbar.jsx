"use client";

import { useState } from "react";
import Link from "next/link";
import AqLogo from "@/components/AqLogo";

const SERVICES = [
  { href: "/servicios/transformar", title: "Sistemas a la medida", description: "Operación, procesos, datos e integración cuando el software estándar ya se quedó corto." },
  { href: "/servicios/scada", title: "Supervisión industrial", description: "Visibilidad de planta, control operativo, trazabilidad y evidencia para decisiones reales." },
  { href: "/servicios/automatizar", title: "Automatización operativa", description: "Automatizar procesos críticos sin romper lo que ya funciona en tu operación." },
];

const LINKS = [
  { href: "/#servicios", title: "Servicios" },
  { href: "/#enfoque", title: "Enfoque" },
  { href: "/#verticales", title: "Verticales" },
  { href: "/#casos", title: "Casos" },
  { href: "/blogs", title: "Insights" },
  { href: "/nosotros", title: "Nosotros" },
  { href: "/#contacto", title: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="aq-nav">
      <div className="aq-wrap">
        <div className="aq-nav-row">
          <AqLogo />
          <div className="aq-nav-links">
            <div className="aq-nav-dropdown">
              <button type="button">Servicios</button>
              <div className="aq-nav-dropdown-panel">
                {SERVICES.map((item) => (
                  <Link key={item.href} href={item.href} className="aq-nav-card">
                    <b>{item.title}</b>
                    <span>{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/#enfoque">Enfoque</Link>
            <Link href="/#verticales">Verticales</Link>
            <Link href="/#casos">Casos</Link>
            <Link href="/blogs">Insights</Link>
            <Link href="/nosotros">Nosotros</Link>
          </div>
          <Link href="/#contacto" className="aq-nav-cta">Plantea tu reto</Link>
          <button className="aq-mobile-toggle" onClick={() => setOpen((v) => !v)} type="button">Menú</button>
        </div>
        <div className={`aq-mobile-menu ${open ? "open" : ""}`}>
          {LINKS.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.title}</Link>)}
          {SERVICES.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.title}</Link>)}
        </div>
      </div>
    </nav>
  );
}
