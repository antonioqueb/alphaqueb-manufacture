'use client';
import React from 'react';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

// Diccionario de textos (copy)
const copy = {
  title: "Transformando la Industria Manufacturera a Través de la Tecnología",
  description:
    "Bienvenidos a Alphaqueb Consulting, tu aliado estratégico en la manufactura. Entendemos la manufactura mejor que nadie, y fusionamos tecnología e innovación para revolucionar tus operaciones. Ofrecemos soluciones tecnológicas avanzadas que optimizan procesos, reducen costos y potencian la competitividad. Somos expertos en la manufactura, trabajamos con pasión para que tu empresa alcance sus metas en un mercado dinámico.",
    
  tagline: "Expertos en la Manufactura. Soluciones a tu medida", 
  
  history: {
    title: "Nuestro Recorrido: Crecemos Contigo",
    content:
      "Fundada en 2017 por visionarios de la manufactura, Alphaqueb Consulting nació con una misión clara: transformar la operación de las empresas a través de tecnologías innovadoras. Desde entonces, nuestro crecimiento ha ido de la mano con el éxito de nuestros clientes. En agosto de 2023, nos consolidamos como Sociedad por Acciones Simplificada (SAS), reafirmando nuestro compromiso con la excelencia y la innovación. Hoy, seguimos siendo tu aliado estratégico confiable.",
  },
  mission: {
    title: "Nuestra Misión: El Socio Confiable en Tu Transformación Digital",
    content:
      "Ser el socio confiable en la transformación digital de la industria manufacturera, es nuestro principal objetivo. Ofrecemos soluciones tecnológicas avanzadas que impulsan el crecimiento y la competitividad de nuestros clientes, para que estén siempre un paso adelante en un mercado exigente. Nos adaptamos a tu ritmo y necesidades.",
  },
  values: {
    title: "La Base de Nuestro Éxito: Tu Éxito",
    items: [
      {
        title: "Especialización en Manufactura",
        description:
          "Nos enfocamos exclusivamente en la industria manufacturera, lo que nos permite entender las dinámicas de producción, cadena de suministro y listas de materiales a profundidad. Somos expertos en la manufactura.",
      },
      {
        title: "Atención Personalizada 1 a 1",
        description:
          "Establecemos relaciones personales con nuestros clientes a través de videoconferencias y visitas presenciales, ofreciendo un trato cercano y adaptándonos a sus necesidades. Disponibilidad a tu alcance.",
      },
      {
          title: "Movilidad Global con Enfoque en México",
          description:
            "Tenemos capacidad para viajar tanto dentro de México como a Estados Unidos, Europa y Latinoamérica, brindando soporte donde nos necesites, con un enfoque en México.",
        },
      {
        title: "Confidencialidad Extrema",
        description:
          "La privacidad es fundamental. Tratamos tus datos con la máxima confidencialidad y seguridad en cada paso de nuestros procesos. La seguridad es nuestra prioridad.",
      },
     {
        title: "Escalabilidad y Prevención de Desastres",
        description:
          "Diseñamos sistemas escalables e independientes de un solo punto de fallo, asegurando tu continuidad y protegiendo tus operaciones. Sistemas construidos para crecer contigo. Infraestructuras robustas.",
      },
      {
        title: "Plataforma Multicloud",
        description:
          "Ofrecemos soluciones multicloud para evitar la dependencia de un solo proveedor y asegurar la estabilidad de tus operaciones. La tranquilidad de no tener una plataforma única. No dependemos de una sola nube.",
       },
       {
         title: "Sistemas Altamente Seguros",
         description:
           "Protegemos la información de nuestros clientes con sistemas de seguridad multicapa. La seguridad es nuestra prioridad en cada comunicación. ",
        },
        {
          title: "Énfasis en los Procesos Internos",
         description:
           "Nos enfocamos en entender los procesos de tu empresa, no en vender sistemas. Priorizamos el cumplimiento de tus necesidades. No nos casamos con ningún sistema en particular.",
       },
       {
           title: "Soluciones Personalizadas",
           description:
            "Entendemos tus necesidades y proponemos soluciones hechas a la medida. Nos enfocamos en tus objetivos, más que en la herramienta en sí.",
         },
         {
           title: "Integridad en Nuestra Operación",
           description:
            "Trabajamos con discreción y aseguramos la confidencialidad de tus procesos. Tus servicios son confidenciales y tu información está protegida.",
          },
    ],
  },
  imageSrc: "/dark.png",
  imageAlt: "Alphaqueb Consulting: Expertos en la Manufactura",
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