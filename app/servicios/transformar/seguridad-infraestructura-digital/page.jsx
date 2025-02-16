import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Seguridad y Gestión de Infraestructura Digital",
  description1: "Protege tu empresa con soluciones avanzadas de ciberseguridad y gestión de infraestructura digital. Asegura la continuidad operativa y previene vulnerabilidades antes de que se conviertan en problemas críticos.",
  description2: "La seguridad digital es un pilar clave en la transformación tecnológica. Implementamos estrategias robustas para garantizar la protección de tus datos y sistemas frente a amenazas internas y externas.",
  description3: "Desde monitoreo en tiempo real hasta soluciones de recuperación ante desastres, ofrecemos un enfoque integral en la gestión de infraestructura digital. Nuestro objetivo es brindarte tranquilidad con sistemas seguros y eficientes.",
  description4: "Trabajamos con tecnologías de última generación para fortalecer la seguridad de tu red, proteger accesos y optimizar el rendimiento de tus sistemas sin comprometer su estabilidad.",
  advantagesTitle: "Beneficios de una infraestructura digital segura:",
  advantages: [
      "Protección avanzada contra ciberataques: Implementa medidas de seguridad efectivas para evitar intrusiones y accesos no autorizados.",
      "Monitoreo en tiempo real: Detecta amenazas y vulnerabilidades antes de que afecten tus operaciones.",
      "Gestión eficiente de servidores y redes: Optimiza el rendimiento de tu infraestructura digital con administración especializada.",
      "Cumplimiento normativo: Asegura que tu empresa cumpla con las regulaciones de seguridad y privacidad de datos.",
      "Planes de recuperación ante desastres: Garantiza la continuidad operativa incluso ante incidentes imprevistos.",
      "Optimización del rendimiento: Mejora la eficiencia y velocidad de tus sistemas con una infraestructura digital segura."
  ],
  costDetails: "Refuerza la seguridad digital de tu empresa con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y diseñaremos una estrategia de protección adaptada a tus necesidades.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Asegura la estabilidad y seguridad de tu infraestructura digital. Reserva una sesión y protege tu empresa de amenazas cibernéticas."
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
                src="/service/pexels-divinetechygirl-1181354.jpg"
                alt="Seguridad y Gestión de Infraestructura Digital"
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
