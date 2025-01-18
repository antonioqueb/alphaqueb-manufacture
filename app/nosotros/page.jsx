'use client';
import React from 'react';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

// Diccionario de textos (copy)
const copy = {
  title: "Impulsamos la manufactura con tecnología de vanguardia",
  description:
    "Bienvenido a Alphaqueb Consulting. Aquí, transformamos la manufactura a través de la innovación tecnológica. No solo ofrecemos soluciones, sino que construimos el futuro de tu empresa. Entendemos las complejidades de la producción, la cadena de suministro y las listas de materiales como nadie más en el sector. Nuestra misión es llevar tu empresa manufacturera al siguiente nivel.",
  tagline: "Soluciones a tu medida. Resultados excepcionales.",
  history: {
    title: "Nuestro recorrido en la evolución de la manufactura",
    content:
      "Desde 2017, lideramos la transformación en la manufactura. Con una visión audaz, creamos Alphaqueb Consulting para redefinir cómo las empresas abordan sus operaciones. Nuestra evolución hacia una Sociedad por Acciones Simplificada (SAS) en 2023, es solo un reflejo de nuestro compromiso con la excelencia y la innovación constante. Hemos crecido para que tu empresa crezca.",
  },
  mission: {
    title: "Nuestra misión es ser tu aliado de confianza en la transformación digital",
    content:
      "Nuestro objetivo es claro: liderar la transformación digital en la manufactura. Proporcionamos soluciones tecnológicas que impulsan tu crecimiento y competitividad en un mercado que exige más. Nos adaptamos a tus necesidades, y juntos, alcanzaremos nuevos estándares de éxito.",
  },
  values: {
    title: "Nuestros cimientos",
    items: [
      {
        title: "Enfoque exclusivo en manufactura",
        description:
          "Dominamos la manufactura a profundidad. Conocemos las dinámicas de producción, la cadena de suministro y las listas de materiales como ningún otro consultor.",
      },
      {
        title: "Atención personalizada y cercana",
        description:
          "Nos involucramos contigo personalmente, a través de videoconferencias y visitas, entendiendo tus necesidades y adaptando nuestras soluciones. Tu comodidad es nuestra prioridad.",
      },
      {
        title: "Alcance global con presencia en méxico",
        description:
          "Estamos donde nos necesitas. Operamos dentro de México, Estados Unidos, Europa y Latinoamérica, asegurando soluciones sin fronteras. Con una base sólida en México, entendemos tus necesidades locales.",
      },
      {
        title: "Confidencialidad como prioridad",
        description:
          "La seguridad y la privacidad de tu información son intocables. Protegemos tus datos con el máximo rigor en cada fase de nuestros procesos.",
      },
      {
        title: "Escalabilidad y resiliencia",
        description:
          "Construimos sistemas que crecen contigo y se mantienen firmes ante cualquier desafío. Prevenimos desastres, aseguramos tu continuidad.",
      },
      {
        title: "Independencia en la nube",
        description:
          "No dependemos de un único proveedor. Nuestras soluciones multicloud garantizan la estabilidad y la continuidad de tus operaciones.",
      },
      {
        title: "Seguridad en cada capa",
        description:
          "Protegemos tu información con sistemas de seguridad multicapa, manteniéndote siempre un paso adelante en la seguridad.",
      },
      {
        title: "Comprensión profunda de tus procesos",
        description:
          "Priorizamos entender tus procesos antes de ofrecer cualquier solución. No vendemos sistemas, creamos resultados.",
      },
      {
        title: "Soluciones a tu medida, no más",
        description:
          "Creamos soluciones únicas, diseñadas para lograr tus objetivos específicos. Tu visión, nuestra herramienta.",
      },
      {
        title: "Discreción y compromiso inquebrantable",
        description:
          "Nuestra integridad es parte de nuestra marca. Trabajamos con discreción y garantizamos la confidencialidad en cada proyecto. Tu confianza, nuestra responsabilidad.",
      },
    ],
  },
  imageSrc: "/dark.png",
  imageAlt: "Alphaqueb Consulting tu socio en la manufactura",
};

export default function Nosotros() {
  return (
    <div className="mx-auto pt-16 pb-4 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 text-start py-4">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="mx-auto text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
          {copy.description}
        </p>
      </div>
      <div className="mt-2">
        <div className="gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter dark:text-zinc-50">
              {copy.history.title}
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {copy.history.content}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tighter dark:text-zinc-50">
            {copy.mission.title}
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {copy.mission.content}
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold tracking-tighter dark:text-zinc-50 mb-6">
          {copy.values.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {copy.values.items.map((value, index) => (
            <div key={index} className="p-6 bg-white dark:bg-stone-900 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold text-zinc-800 dark:text-zinc-50">
                {value.title}
              </h4>
              <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
}