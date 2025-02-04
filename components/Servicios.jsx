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
    <div className="mx-auto pt-16 pb-4 px-4">
      <div className="text-start py-4">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
          {copy.description}
        </p>
      </div>

      {/* Timeline Horizontal */}
      <ol className="flex items-center justify-between w-full mt-8 space-x-4 sm:space-x-8">
        {copy.services.map((service, index) => (
          <li key={index} className="relative flex-1 text-center">
            {/* Línea horizontal que conecta cada paso, excepto el último */}
            {index < copy.services.length - 1 && (
              <div className="absolute top-1/2 left-full w-full h-0.5 bg-zinc-200 dark:bg-zinc-700 -translate-y-1/2"></div>
            )}

            {/* Círculo con el número del paso */}
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 bg-custom-orange text-white font-bold rounded-full">
              {index + 1}
            </div>

            {/* Contenido de cada paso */}
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              <Link
                href={`/servicios/${service.slug}`}
                className="inline-block mt-3 text-lg font-medium text-custom-orange hover:text-custom-orange-dark transition-colors duration-300"
              >
                {copy.learnMore}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
