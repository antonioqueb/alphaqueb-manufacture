import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Mantenimiento Predictivo y Reducción de Tiempos de Inactividad",
  description1: "Anticípate a fallos y optimiza el rendimiento de tus equipos con estrategias de mantenimiento predictivo basadas en datos en tiempo real.",
  description2: "El mantenimiento predictivo reduce tiempos de inactividad y costos de reparación al detectar anomalías antes de que se conviertan en fallos críticos.",
  description3: "Implementamos soluciones avanzadas que integran sensores IoT, machine learning y SCADA para monitorear continuamente el estado de tus activos industriales.",
  description4: "Optimiza la planificación del mantenimiento y maximiza la disponibilidad operativa con alertas automatizadas y análisis de tendencias en tus sistemas.",
  advantagesTitle: "Beneficios del mantenimiento predictivo:",
  advantages: [
    "Reducción de tiempos de inactividad: Evita paradas no programadas y mejora la eficiencia operativa.",
    "Disminución de costos de mantenimiento: Reduce reparaciones costosas con detección temprana de fallos.",
    "Mayor vida útil de los equipos: Optimiza el uso y rendimiento de maquinaria crítica.",
    "Alertas automatizadas: Recibe notificaciones en tiempo real sobre posibles fallos y mantenimientos requeridos.",
    "Integración con SCADA y ERP: Conecta datos en tiempo real para una gestión centralizada del mantenimiento.",
    "Análisis predictivo avanzado: Identifica patrones de desgaste y optimiza la planificación de mantenimiento."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo el mantenimiento predictivo puede optimizar tu operación.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Reduce tiempos de inactividad con estrategias de mantenimiento predictivo. Agenda una sesión y optimiza la gestión de tus activos industriales."
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
                src="/service/pexels-kateryna-babaieva-1423213-2760241.jpg"
                alt="Mantenimiento Predictivo y Reducción de Tiempos de Inactividad"
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
