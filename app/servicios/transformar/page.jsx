import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link'; // Importamos el componente Link

const COPY = {
  title: "Transformación Digital para Manufactura 4.0",
  description1: "Nuestra consultoría te ayuda a digitalizar procesos clave de tu negocio para mejorar la toma de decisiones, aumentar la eficiencia y garantizar la sostenibilidad de tu empresa en un mundo cada vez más tecnológico. No importa el tamaño de tu empresa, estamos aquí para ayudarte a alcanzar una ventaja competitiva duradera.",
  advantages: [
      "Mejora en la toma de decisiones: Obtén acceso a datos en tiempo real y análisis avanzados que te permitirán tomar decisiones más informadas, reduciendo riesgos e identificando nuevas oportunidades de negocio.",
      "Optimización de procesos: Automatiza tareas repetitivas y elimina ineficiencias en procesos operativos, comerciales y administrativos, lo que aumenta la productividad de tu equipo y reduce costos.",
      "Aumento de la eficiencia global: Integra plataformas y herramientas digitales para mejorar la coordinación entre equipos, optimizando la gestión de proyectos y recursos en tiempo récord.",
      "Impulso a la innovación y agilidad: Implementa tecnologías modernas y adopta metodologías flexibles que permiten a tu empresa responder rápidamente a los cambios del mercado y las demandas de los clientes.",
      "Mejora de la experiencia del cliente: Ofrece soluciones digitales que optimicen la interacción con tus clientes, proporcionando servicios más rápidos, personalizados y efectivos que aumentan su satisfacción y fidelidad.",
      "Integración total: Conecta sistemas empresariales como CRM, ERP y MES para obtener una visión integral de tu negocio, facilitando la interoperabilidad y mejorando la gestión de todas las áreas de tu empresa."
  ]
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              {/* Botón para ir a la sección de contacto */}
              <Link href="#contacto">
                <Button variant="default" size="lg" style={{ backgroundColor: '#ff943d', color: '#0d0d0d', margin: '2rem 0rem', padding: '0.75rem 2rem' }}>
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/integrations.jpg"
                alt="Digital Transformation"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>
        {/* Sección de Ventajas */}
        <section className="grid lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-lg shadow-md col-span-1">
            <ul className="space-y-8">
              {COPY.advantages.slice(0, Math.ceil(COPY.advantages.length / 2)).map((advantage, index) => {
                const [key, value] = advantage.split(": ");
                const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, 
                              <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
                
                return (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-6 text-custom-orange">
                      <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                        {React.cloneElement(icons[index], { className: 'w-6 h-6' })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                        {key}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-lg shadow-md col-span-1">
            <ul className="space-y-8">
              {COPY.advantages.slice(Math.ceil(COPY.advantages.length / 2)).map((advantage, index) => {
                const [key, value] = advantage.split(": ");
                const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, 
                              <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
                
                return (
                  <li key={index + Math.ceil(COPY.advantages.length / 2)} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-6 text-custom-orange">
                      <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                        {React.cloneElement(icons[index + Math.ceil(COPY.advantages.length / 2)], { className: 'w-6 h-6' })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                        {key}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> {/* Añadimos el id "contacto" */}
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;