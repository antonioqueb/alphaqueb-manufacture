'use client';
import React from 'react';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

// Diccionario de textos (copy)
const copy = {
  title: "Transformando la Industria Manufacturera a Través de la Tecnología",
  description:
    "Bienvenidos a Alphaqueb Consulting, donde la tecnología y la innovación se unen para revolucionar la industria manufacturera. Somos una empresa líder en consultoría especializada, dedicada a proporcionar soluciones tecnológicas avanzadas que optimizan procesos, reducen costos y potencian la competitividad de nuestros clientes. Cada día, trabajamos con pasión para ayudar a las empresas a alcanzar sus metas y superar los desafíos del mercado.",
  history: {
    title: "Nuestro recorrido",
    content:
      "Todo comenzó en 2017, cuando un grupo de visionarios decidió cambiar el panorama de la industria manufacturera. Fundamos Alphaqueb Consulting con una misión clara: transformar la manera en que las empresas abordan sus operaciones mediante la adopción de tecnologías innovadoras. Desde entonces, hemos recorrido un camino lleno de éxitos, aprendizajes y crecimiento constante. En agosto de 2023, dimos un paso importante al consolidarnos como una Sociedad por Acciones Simplificada (SAS) bajo el nombre comercial Alphaqueb Consulting. Este hito no solo reafirma nuestro compromiso con la excelencia y la innovación, sino que también nos permite expandir nuestras capacidades para seguir siendo un aliado estratégico confiable para nuestros clientes.",
  },
  mission: {
    title: "Ser el principal aliado confiable en la transformación digital de tu empresa manufacturera",
    content:
      "Nuestra misión es simple pero poderosa: ser el socio confiable en la transformación digital de la industria manufacturera. Nos esforzamos por proporcionar soluciones tecnológicas avanzadas que impulsen el crecimiento y la competitividad de nuestros clientes, asegurando que estén siempre un paso adelante en un mercado cada vez más dinámico y exigente.",
  },
  values: {
    title: "La base de nuestro exito",
    items: [
      {
        title: "Innovación",
        description:
          "Estamos comprometidos con la innovación constante. No nos conformamos con lo convencional; buscamos continuamente nuevas formas de resolver los desafíos más complejos de la industria.",
      },
      {
        title: "Experiencia",
        description:
          "Contamos con un equipo de expertos con más de 20 años de experiencia en la industria manufacturera. Esta vasta experiencia nos permite ofrecer asesoramiento y soluciones altamente especializadas que realmente marcan la diferencia.",
      },
      {
        title: "Integridad",
        description:
          "Actuamos con integridad y transparencia en todas nuestras relaciones y proyectos. Creemos firmemente que la confianza es la base de cualquier relación exitosa.",
      },
      {
        title: "Colaboración",
        description:
          "Fomentamos la colaboración estrecha con nuestros clientes. Entendemos que cada cliente es único, y trabajamos mano a mano para entender sus necesidades específicas y superar sus expectativas, construyendo relaciones duraderas basadas en el éxito mutuo.",
      },
    ],
  },
  imageSrc: "/dark.png",
  imageAlt: "Nuestra Empresa Consultora",
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