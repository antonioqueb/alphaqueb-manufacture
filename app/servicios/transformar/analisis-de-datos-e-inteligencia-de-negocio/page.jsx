import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Análisis de Datos e Inteligencia de Negocio",
  description1: "Transforma tus datos en información valiosa para tomar decisiones estratégicas y mejorar la rentabilidad de tu empresa. Descubre patrones, optimiza procesos y anticipa tendencias con análisis avanzado.",
  description2: "La inteligencia de negocio permite convertir datos en acciones. Con herramientas avanzadas de analítica, visualización e interpretación, optimizamos la toma de decisiones en cada nivel de tu empresa.",
  description3: "Desarrollamos soluciones de análisis de datos personalizadas, integrando modelos predictivos, dashboards interactivos y reportes automatizados que permiten monitorear en tiempo real el desempeño de tu negocio.",
  description4: "Nuestro equipo combina experiencia en Big Data, Machine Learning y Business Intelligence para brindarte una estrategia completa que impulse la eficiencia y el crecimiento empresarial.",
  advantagesTitle: "Beneficios del análisis de datos e inteligencia de negocio:",
  advantages: [
      "Toma de decisiones basada en datos: Reduce la incertidumbre y optimiza estrategias con información precisa.",
      "Identificación de tendencias: Detecta patrones de consumo y comportamiento para adelantarte al mercado.",
      "Optimización operativa: Identifica cuellos de botella y mejora la eficiencia en cada área del negocio.",
      "Dashboards interactivos: Visualiza métricas clave en tiempo real para un control total.",
      "Modelos predictivos: Anticipa cambios y ajusta tu estrategia con herramientas de predicción avanzada.",
      "Automatización de reportes: Reduce la carga operativa y accede a información crítica al instante."
  ],
  costDetails: "Empieza a transformar tu negocio con una consultoría inicial por solo **1 dólar**. Evaluaremos tus datos actuales y te mostraremos cómo la inteligencia de negocio puede impulsar tu crecimiento.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Convierte tus datos en información estratégica. Agenda una sesión y descubre cómo mejorar la rentabilidad de tu empresa."
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
                src="/service/pexels-freestockpro-12969403.jpg"
                alt="Análisis de Datos e Inteligencia de Negocio"
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
