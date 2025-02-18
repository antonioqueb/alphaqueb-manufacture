import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Reducción de Costos Operativos mediante Optimización de Recursos",
  description1: "Mejora la rentabilidad de tu empresa con estrategias de optimización de recursos que reducen costos y maximizan la eficiencia operativa.",
  description2: "Implementamos soluciones avanzadas para la gestión eficiente de energía, materiales y tiempo de producción, reduciendo desperdicios y costos innecesarios.",
  description3: "Nuestra tecnología permite un análisis detallado del uso de recursos en tiempo real para una toma de decisiones informada y precisa.",
  description4: "Integramos herramientas de monitoreo inteligente, automatización y analítica de datos para optimizar cada aspecto de la operación industrial.",
  advantagesTitle: "Beneficios de la optimización de recursos:",
  advantages: [
    "Reducción de costos energéticos: Optimiza el consumo de energía para disminuir gastos operativos.",
    "Gestión eficiente de materiales: Minimiza desperdicios y mejora la planificación de insumos.",
    "Automatización de procesos: Mejora la eficiencia productiva reduciendo la intervención manual.",
    "Monitoreo en tiempo real: Controla y ajusta el uso de recursos de manera continua.",
    "Análisis de datos avanzado: Detecta oportunidades de ahorro y mejora en cada área del negocio.",
    "Sostenibilidad y responsabilidad ambiental: Implementa estrategias más ecológicas y rentables."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo optimizar tus recursos y reducir costos operativos.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la optimización de recursos puede reducir costos y mejorar la eficiencia. Agenda una sesión y optimiza tu negocio."
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
                src="/service/pexels-karolina-grabowska-5900135.jpg"
                alt="Reducción de Costos Operativos mediante Optimización de Recursos"
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