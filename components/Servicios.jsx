"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";

// Diccionario de textos (copy)
const copy = {
  title: "Nuestros Servicios de Consultoría para Manufactura",
  description:
    "Transformamos procesos industriales mediante soluciones tecnológicas avanzadas que reducen costos, optimizan la producción y mejoran la competitividad de tu empresa manufacturera.",
  services: [
    {
      title: "Implementación de Sistemas SCADA",
      description:
        "Monitoreo y control en tiempo real de procesos industriales, optimizando la supervisión y reduciendo tiempos de inactividad hasta un 40%.",
      imageSrc: "/scada.jpg",
      imageAlt: "Sistemas SCADA para Manufactura",
      slug: "scada",
    },
    {
      title: "Automatización de Líneas de Producción",
      description:
        "Diseñamos soluciones de automatización personalizadas que incrementan la capacidad de producción, mejoran la consistencia y reducen costos operativos.",
      imageSrc: "/automatizacion.jpg",
      imageAlt: "Automatización Industrial",
      slug: "automatizar",
    },
    {
      title: "Consultoría en Transformación Digital",
      description:
        "Acompañamiento estratégico para digitalizar procesos operativos, comerciales y administrativos, mejorando la toma de decisiones y la eficiencia global.",
      imageSrc: "/digital.jpg",
      imageAlt: "Transformación Digital Manufacturera",
      slug: "transformar",
    },
  ],
  learnMore: "Conoce más →",
};

export default function Servicios() {
  return (
    <div className="mx-auto pt-16 pb-4">
      <div className="space-y-4 text-start py-4">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="mx-auto text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
          {copy.description}
        </p>
      </div>

      {/* Contenedor en forma de 'timeline' vertical para reflejar la secuencia */}
      <ol className="relative border-l border-zinc-200 dark:border-zinc-700 mt-6 ml-4">
        {copy.services.map((service, index) => (
          <li key={index} className="mb-10 ml-6">
            {/* Indicador numérico del paso */}
            <span className="absolute flex items-center justify-center w-8 h-8 bg-custom-orange text-white font-bold rounded-full -left-4 ring-8 ring-white dark:ring-stone-900">
              {index + 1}
            </span>
            {/* Contenido del servicio */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-60 h-36 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-2 sm:pt-0">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-50">
                  {service.title}
                </h3>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className="inline-block mt-4 text-lg font-medium text-custom-orange hover:text-custom-orange-dark transition-colors duration-300"
                >
                  {copy.learnMore}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
