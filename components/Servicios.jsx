"use client";
import React from "react";
import Link from "next/link";

/* ───────────── Copy en español neutro ───────────── */
const copy = {
  title: "Sistemas Especializados",
  description:
    "Convertimos tus procesos industriales en flujos digitales eficientes. Implantamos y configuramos ERP, CRM o sistemas MES exactamente donde generan valor, garantizando la adopción total mediante capacitación y soporte continuo.",

  service: {
    title: "Flujo Integral de Implementación de Sistemas",
    slug: "integracion-sistemas",
    phases: [
      {
        title: "Levantamiento y diagnóstico profundo",
        description:
          "Mapeamos cada área operativa, detectamos cuellos de botella y cuantificamos el beneficio económico de digitalizar tus procesos.",
      },
      {
        title: "Diseño de la solución",
        description:
          "Seleccionamos el sistema (ERP, CRM o MES) y la arquitectura más eficiente, priorizando resultados rápidos y retorno de inversión medible.",
      },
      {
        title: "Implementación y configuración",
        description:
          "Parametrizamos la plataforma para reflejar tus flujos reales; migramos datos y aseguramos cero interrupciones en la operación.",
      },
      {
        title: "Personalización específica",
        description:
          "Cuando el sistema estándar no cubre una necesidad crítica, desarrollamos módulos o integraciones a la medida.",
      },
      {
        title: "Capacitación y adopción",
        description:
          "Entrenamos a tus equipos con casos prácticos, garantizando que cada usuario domine la herramienta antes de la puesta en marcha.",
      },
      {
        title: "Soporte y mejora continua",
        description:
          "Monitoreamos indicadores clave, liberamos mejoras iterativas y mantenemos el sistema alineado con tu crecimiento.",
      },
    ],
  },

  learnMore: "Descubre cómo transformar tu operación →",
};

/* ───────────── Componente ───────────── */
export default function Servicios() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      {/* Encabezado */}
      <header className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-600 md:text-xl dark:text-zinc-400 max-w-3xl mx-auto">
          {copy.description}
        </p>
      </header>

      {/* Nombre del servicio */}
      <h3 className="text-center text-2xl md:text-3xl font-semibold text-custom-orange dark:text-custom-orange-light">
        {copy.service.title}
      </h3>

      {/* Línea de tiempo en forma de cuadrícula */}
      <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {copy.service.phases.map((phase, index) => (
          <li
            key={index}
            className="flex flex-col items-center text-center gap-6"
          >
            {/* Círculo numerado */}
            <span
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-custom-orange text-white font-bold rounded-full text-2xl"
              style={{ animation: "pulse 1.8s infinite" }}
            >
              {index + 1}
            </span>

            {/* Contenido */}
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
      <div className="mt-16 text-center">
        <Link
          href={`/servicios/${copy.service.slug}`}
          className="inline-block text-lg md:text-xl font-medium text-custom-orange hover:text-custom-orange-dark transition-colors duration-300"
        >
          {copy.learnMore}
        </Link>
      </div>

      {/* Animación */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
