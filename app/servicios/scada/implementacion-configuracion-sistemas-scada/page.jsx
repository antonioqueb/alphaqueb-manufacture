import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Implementación y Configuración de Sistemas SCADA",
  description1: "Optimiza el monitoreo y control de tus procesos industriales con un sistema SCADA diseñado a la medida. Mejora la eficiencia operativa, reduce costos y aumenta la seguridad en tu planta.",
  description2: "Los sistemas SCADA permiten la supervisión en tiempo real, recolección de datos y automatización de procesos críticos, garantizando una mayor visibilidad y control sobre tu producción.",
  description3: "Nuestra experiencia en la integración de software y hardware nos permite diseñar soluciones SCADA personalizadas que se adaptan a las necesidades específicas de tu industria.",
  description4: "Implementamos arquitecturas escalables, seguras y eficientes, integrando PLCs, sensores y dispositivos IoT para un control total de tus operaciones.",
  advantagesTitle: "Beneficios de implementar un sistema SCADA:",
  advantages: [
    "Monitoreo en tiempo real: Obtén visibilidad total de tu producción desde cualquier dispositivo.",
    "Automatización y control: Reduce la intervención manual y optimiza la operación de maquinaria.",
    "Análisis de datos históricos: Identifica patrones y optimiza la toma de decisiones estratégicas.",
    "Seguridad y alarmas inteligentes: Detecta fallos y recibe alertas antes de que impacten la producción.",
    "Integración con otros sistemas: Conectamos SCADA con ERP, MES y otros sistemas para una gestión unificada.",
    "Reducción de costos operativos: Minimiza desperdicios, mejora la eficiencia y reduce tiempos de inactividad."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Analizaremos tu infraestructura y te mostraremos cómo un sistema SCADA puede optimizar tu producción.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza el control de tus procesos con SCADA. Agenda una sesión y descubre cómo mejorar la eficiencia de tu empresa."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-ibrahimboran-3582392.jpg"
                alt="Implementación y Configuración de Sistemas SCADA"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
