"use client";
import React from "react";
import Link from "next/link";

/* ───────────── Copy ───────────── */
const copy = {
  title: "Integración y Adaptación de Sistemas Empresariales",
  description:
    "Convertimos tus procesos industriales en flujos digitales fluidos. Implantamos y configuramos ERP, CRM o sistemas de manufactura (MES) exactamente donde generan valor, garantizando adopción total a través de capacitación y soporte continuo.",

  service: {
    title: "Servicio Integral de Implementación de Sistemas",
    slug:  "integracion-sistemas",
    phases: [
      {
        title: "Levantamiento & Diagnóstico Profundo",
        description:
          "Mapeamos cada área operativa, detectamos cuellos de botella y cuantificamos el impacto económico de digitalizar tus procesos.",
      },
      {
        title: "Diseño de Solución",
        description:
          "Seleccionamos el sistema (ERP, CRM o MES) y la arquitectura más eficiente, priorizando quick-wins y ROI medible.",
      },
      {
        title: "Implementación & Configuración",
        description:
          "Parametrizamos la plataforma para reflejar tus flujos reales; migramos datos y garantizamos cero interrupciones en la operación.",
      },
      {
        title: "Personalización Específica",
        description:
          "Cuando el sistema estándar no cubre una necesidad crítica, desarrollamos módulos o integraciones a medida.",
      },
      {
        title: "Capacitación & Adopción",
        description:
          "Entrenamos a tus equipos con casos reales, asegurando que cada usuario domine la herramienta antes del Go-Live.",
      },
      {
        title: "Soporte & Mejora Continua",
        description:
          "Monitoreamos KPIs, liberamos mejoras iterativas y mantenemos el sistema alineado con tu crecimiento.",
      },
    ],
  },

  learnMore: "Descubre cómo transformar tu operación →",
};

/* ───────────── Componente ───────────── */
export default function Servicios() {
  return (
    <div className="mx-auto pt-16 pb-28 px-4">
      {/* Encabezado principal */}
      <header className="text-start py-4">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
          {copy.description}
        </p>
      </header>

      {/* Título del servicio */}
      <h3 className="mt-12 text-2xl md:text-3xl font-semibold text-custom-orange dark:text-custom-orange-light">
        {copy.service.title}
      </h3>

      {/* Timeline de fases */}
      <ol className="flex flex-col md:flex-row md:flex-wrap gap-8 mt-8 w-full">
        {copy.service.phases.map((phase, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row md:basis-1/2 items-start gap-6"
          >
            {/* Círculo numerado */}
            <span
              className="flex items-center justify-center w-16 md:w-20 aspect-square bg-custom-orange text-white font-bold rounded-full text-2xl"
              style={{ animation: "pulse 1.5s infinite" }}
            >
              {index + 1}
            </span>

            {/* Contenido de la fase */}
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-zinc-50">
                {phase.title}
              </h4>
              <p className="mt-2 text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                {phase.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* CTA */}
      <div className="mt-12">
        <Link
          href={`/servicios/${copy.service.slug}`}
          className="inline-block text-lg md:text-xl font-medium text-custom-orange hover:text-custom-orange-dark transition-colors duration-300"
        >
          {copy.learnMore}
        </Link>
      </div>

      {/* Animación pulse */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
