'use client';
import React from 'react';
import Image from 'next/image';
import { Factory, User, Globe, Lock, TrendingUp, Cloud, ShieldAlert, Search, Wrench, ShieldUser } from 'lucide-react';
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
        icon: <Factory className="w-6 h-6" />
      },
      {
        title: "Atención personalizada y cercana",
        description:
          "Nos involucramos contigo personalmente, a través de videoconferencias y visitas, entendiendo tus necesidades y adaptando nuestras soluciones. Tu comodidad es nuestra prioridad.",
        icon: <User className="w-6 h-6" />
      },
      {
        title: "Alcance global con presencia en méxico",
        description:
          "Estamos donde nos necesitas. Operamos dentro de México, Estados Unidos, Europa y Latinoamérica, asegurando soluciones sin fronteras. Con una base sólida en México, entendemos tus necesidades locales.",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Confidencialidad como prioridad",
        description:
          "La seguridad y la privacidad de tu información son intocables. Protegemos tus datos con el máximo rigor en cada fase de nuestros procesos.",
        icon: <Lock className="w-6 h-6" />
      },
      {
        title: "Escalabilidad y resiliencia",
        description:
          "Construimos sistemas que crecen contigo y se mantienen firmes ante cualquier desafío. Prevenimos desastres, aseguramos tu continuidad.",
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        title: "Independencia en la nube",
        description:
          "No dependemos de un único proveedor. Nuestras soluciones multicloud garantizan la estabilidad y la continuidad de tus operaciones.",
        icon: <Cloud className="w-6 h-6" />
      },
      {
        title: "Seguridad en cada capa",
        description:
          "Protegemos tu información con sistemas de seguridad multicapa, manteniéndote siempre un paso adelante en la seguridad.",
        icon: <ShieldAlert className="w-6 h-6" />
      },
      {
        title: "Comprensión profunda de tus procesos",
        description:
          "Priorizamos entender tus procesos antes de ofrecer cualquier solución. No vendemos sistemas, creamos resultados.",
        icon: <Search className="w-6 h-6" />
      },
      {
        title: "Soluciones a tu medida, no más",
        description:
          "Creamos soluciones únicas, diseñadas para lograr tus objetivos específicos. Tu visión, nuestra herramienta.",
        icon: <Wrench className="w-6 h-6" />
      },
      {
        title: "Discreción y compromiso inquebrantable",
        description:
          "Nuestra integridad es parte de nuestra marca. Trabajamos con discreción y garantizamos la confidencialidad en cada proyecto. Tu confianza, nuestra responsabilidad.",
        icon: <ShieldUser className="w-6 h-6" />
      },
    ],
  },
  imageSrc: "/brand/white.png",
  imageAlt: "Alphaqueb Consulting tu socio en la manufactura",
};

export default function Nosotros() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Sección Hero */}
      <section className="relative py-10 md:py-24 dark:bg-stone-900 rounded-3xl overflow-hidden mb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texto principal */}
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent dark:from-orange-400 dark:to-zinc-300">
              {copy.title}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {copy.description}
            </p>
          </div>
          {/* Imagen de apoyo en el hero */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={copy.imageSrc}
              alt={copy.imageAlt}
              fill
              className="object-contain md:object-cover dark:opacity-90"
              priority
            />
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="space-y-6 mb-10">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl dark:text-zinc-50">
          {copy.history.title}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {copy.history.content}
        </p>
      </section>

      {/* Misión */}
      <section className="space-y-6 mb-10">
        <h3 className="text-2xl font-semibold tracking-tighter dark:text-zinc-50">
          {copy.mission.title}
        </h3>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {copy.mission.content}
        </p>
      </section>

      {/* Valores */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold tracking-tighter dark:text-zinc-50 mb-6">
          {copy.values.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copy.values.items.map((value, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white dark:bg-stone-900 rounded-2xl shadow-lg"
            >
              {/* Ícono a la izquierda */}
              <div className="w-12 h-12 mr-4 flex items-center justify-center bg-orange-100 dark:bg-orange-900/20 rounded-xl">
                {value.icon}
              </div>
              {/* Texto del valor */}
              <div>
                <h4 className="text-xl font-semibold text-zinc-800 dark:text-zinc-50 mb-2">
                  {value.title}
                </h4>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="border-t pt-6 border-zinc-300 dark:border-zinc-700">
        <ContactSection />
      </section>
    </div>
  );
}
