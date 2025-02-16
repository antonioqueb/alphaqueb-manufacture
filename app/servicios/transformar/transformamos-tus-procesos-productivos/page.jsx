import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Digitalización de Procesos de Producción",
  description1: "Optimiza tus operaciones con tecnología avanzada y digitalización inteligente. Automatiza procesos, mejora la eficiencia y reduce costos operativos sin comprometer la calidad de producción.",
  description2: "La digitalización de procesos no es solo una mejora tecnológica; es una transformación operativa. Permite una gestión más precisa y ágil, mejorando la trazabilidad, el control de calidad y la eficiencia general en cada etapa de producción.",
  description3: "Ofrecemos soluciones personalizadas de digitalización que integran software de monitoreo, automatización y análisis de datos. Conectamos tu producción con herramientas inteligentes para facilitar la toma de decisiones basadas en datos en tiempo real.",
  description4: "Nuestro equipo de expertos trabaja contigo para garantizar una transición fluida hacia la digitalización, minimizando interrupciones y maximizando el retorno de inversión en cada implementación.",
  advantagesTitle: "Beneficios de digitalizar tu producción:",
  advantages: [
      "Automatización inteligente: Reduce errores manuales y agiliza los procesos productivos.",
      "Monitoreo en tiempo real: Obtén datos precisos de cada etapa de producción al instante.",
      "Optimización de recursos: Usa materiales y energía de manera eficiente, reduciendo desperdicios.",
      "Integración con sistemas ERP y MES: Conecta toda tu operación para mejorar la toma de decisiones.",
      "Reducción de costos operativos: Digitaliza tareas repetitivas y optimiza el flujo de trabajo.",
      "Mejora en la trazabilidad: Asegura el cumplimiento de estándares de calidad y normativas industriales."
  ],
  costDetails: "Transforma tu producción con una consultoría inicial por solo **1 dólar**. Evaluaremos tus necesidades y diseñaremos una estrategia personalizada para digitalizar tus procesos de producción.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la digitalización puede llevar tu producción a otro nivel. Agenda una sesión y optimiza tu operación con tecnología avanzada."
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
                src="/service/pexels-rdne-7947955.jpg"
                alt="Digitalización de Procesos"
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
