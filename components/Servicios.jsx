'use client';
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
    },
    {
      title: "Automatización de Líneas de Producción",
      description:
        "Diseñamos soluciones de automatización personalizadas que incrementan la capacidad de producción, mejoran la consistencia y reducen costos operativos.",
      imageSrc: "/automatizacion.jpg",
      imageAlt: "Automatización Industrial",
    },
    {
      title: "Consultoría en Transformación Digital",
      description:
        "Acompañamiento estratégico para digitalizar procesos operativos, comerciales y administrativos, mejorando la toma de decisiones y la eficiencia global.",
      imageSrc: "/digital.jpg",
      imageAlt: "Transformación Digital Manufacturera",
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
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {copy.services.map((service, index) => (
          <div
            key={index}
            className="group relative dark:bg-stone-900 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800"
          >
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              <Link
                href="#"
                className="mt-4 block text-lg font-medium text-custom-orange hover:text-custom-orange-dark transition-colors duration-300"
              >
                {copy.learnMore}
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}