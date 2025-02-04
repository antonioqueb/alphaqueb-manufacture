"use client";
import React from 'react';
import Link from "next/link";

// Diccionario de textos (copy)
const copy = {
  title: "Nuestros Servicios de Consultoría para Manufactura",
  description:
    "Transformamos procesos industriales mediante soluciones tecnológicas avanzadas que reducen costos, optimizan la producción y mejoran la competitividad de tu empresa manufacturera.",
  services: [
    {
      title: "Consultoría en Transformación Digital",
      description:
        "Acompañamiento estratégico para digitalizar procesos operativos, comerciales y administrativos, mejorando la toma de decisiones y la eficiencia global.",
      slug: "transformar",
    },
    {
      title: "Automatización de Líneas de Producción",
      description:
        "Diseñamos soluciones de automatización personalizadas que incrementan la capacidad de producción, mejoran la consistencia y reducen costos operativos.",
      slug: "automatizar",
    },
    {
      title: "Implementación de Sistemas SCADA",
      description:
        "Monitoreo y control en tiempo real de procesos industriales, optimizando la supervisión y reduciendo tiempos de inactividad hasta un 40%.",
      slug: "scada",
    },
  ],
  learnMore: "Conoce más →",
};

export default function Servicios() {
  return (
    <div className="mx-auto pt-16 pb-28 px-4">
      <div className="text-start py-4">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
          {copy.description}
        </p>
      </div>

      {/* Timeline Responsivo */}
      <ol className="flex flex-col md:flex-row justify-between items-start w-full mt-8 gap-8">
        {copy.services.map((service, index) => (
          <li key={index} className="flex flex-col md:flex-row items-start gap-6 text-left flex-1">
            {/* Círculo animado */}
            <div
              className="flex items-center justify-center aspect-square w-16 md:w-32 bg-custom-orange text-white font-bold rounded-full text-2xl relative"
              style={{
                animation: "pulse 1.5s infinite",
              }}
            >
              {index + 1}
            </div>

            {/* Contenido de cada paso */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-2 text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              <Link
                href={`/servicios/${service.slug}`}
                className="inline-block mt-3 text-base md:text-lg font-medium text-custom-orange hover:text-custom-orange-dark transition-colors duration-300"
              >
                {copy.learnMore}
              </Link>
            </div>
          </li>
        ))}
      </ol>

      {/* Estilos en línea para la animación */}
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
