'use client';
import React from 'react';
import Image from 'next/image';
import { Rocket, Zap, BarChart, ShieldCheck, Globe, Users, Layers, Lock, Terminal, CheckCircle } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

const copy = {
  title: "Impulsamos la manufactura con tecnología de vanguardia",
  description:
    "Bienvenido a Alphaqueb Consulting. Aquí, transformamos la manufactura a través de la innovación tecnológica. No solo ofrecemos soluciones, sino que construimos el futuro de tu empresa. Nuestra misión es llevar tu empresa manufacturera al siguiente nivel.",
  history: {
    title: "Nuestro recorrido en la evolución de la manufactura",
    content:
      "Desde 2017, lideramos la transformación en la manufactura. Con una visión audaz, creamos Alphaqueb Consulting para redefinir cómo las empresas abordan sus operaciones. Nuestra evolución hacia una Sociedad por Acciones Simplificada (SAS) en 2023 es un reflejo de nuestro compromiso con la excelencia y la innovación constante.",
  },
  mission: {
    title: "Nuestra misión es ser tu aliado de confianza en la transformación digital",
    content:
      "Nuestro objetivo es claro: liderar la transformación digital en la manufactura. Proporcionamos soluciones tecnológicas que impulsan tu crecimiento y competitividad en un mercado que exige más.",
  },
  values: {
    title: "Nuestros valores fundamentales",
    items: [
      { title: "Enfoque en manufactura", description: "Dominamos la manufactura y la optimización de procesos.", icon: <Zap /> },
      { title: "Atención personalizada", description: "Nos adaptamos a tus necesidades con cercanía.", icon: <Users /> },
      { title: "Alcance global", description: "Operamos en México, EE.UU. y Europa.", icon: <Globe /> },
      { title: "Confidencialidad", description: "Protegemos tu información con rigor.", icon: <ShieldCheck /> },
      { title: "Escalabilidad", description: "Creamos sistemas robustos y flexibles.", icon: <Layers /> },
      { title: "Seguridad", description: "Mantenemos la integridad de tus datos.", icon: <Lock /> },
      { title: "Independencia cloud", description: "Soluciones sin ataduras a un solo proveedor.", icon: <Terminal /> },
      { title: "Precisión y compromiso", description: "Entendemos tus procesos antes de proponer soluciones.", icon: <CheckCircle /> }
    ],
  },
  imageSrc: "/dark.png",
};

export default function Nosotros() {
  return (
    <div className="mx-auto pt-16 pb-4 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 text-start py-4">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {copy.description}
        </p>
      </div>
      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-2xl font-semibold dark:text-zinc-50">
            {copy.history.title}
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {copy.history.content}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold dark:text-zinc-50">
            {copy.mission.title}
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {copy.mission.content}
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold dark:text-zinc-50 mb-6">
          {copy.values.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {copy.values.items.map((value, index) => (
            <div key={index} className="p-6 bg-white dark:bg-stone-900 rounded-2xl shadow-lg flex items-start">
              <div className="w-12 h-12 bg-custom-orange/20 rounded-lg flex items-center justify-center text-custom-orange mr-4">
                {value.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-zinc-800 dark:text-zinc-50">
                  {value.title}
                </h4>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
