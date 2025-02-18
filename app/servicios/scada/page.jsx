import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import {  Settings, Server, Shield, Factory, Cpu, Lock, Database } from "lucide-react";

import Link from 'next/link'; // Importamos el componente Link

const COPY = {
  title: "Servicio de integración de sistemas SCADA para la industria",
  description1: "Imagina supervisar y gestionar cada detalle de tus procesos industriales en tiempo real, reduciendo tiempos muertos, maximizando tu eficiencia y detectando oportunidades de mejora antes de que los problemas aparezcan. ",
  description2: "Los sistemas SCADA son más que una herramienta tecnológica: son una inversión estratégica. Te brindan una visión clara, precisa y completa de tus operaciones, desde la producción hasta la logística, garantizando que cada decisión que tomes esté respaldada por datos reales y procesables. En un mercado donde cada minuto cuenta, un sistema SCADA marca la diferencia entre mantenerte competitivo o quedarte atrás.",
  description3: "Nuestra oferta no se limita a la instalación de software. Ofrecemos una solución integral diseñada para manufactura. Esto incluye el diseño del sistema, la implementación técnica, el soporte continuo y la capacitación a tu equipo. Trabajamos contigo para personalizar cada aspecto del sistema, asegurándonos de que se adapte a las especificidades de tu planta y tus procesos. Ya sea que necesites monitoreo de líneas de producción, gestión energética, mantenimiento predictivo o integraciones avanzadas con otros sistemas empresariales, estamos listos para hacerlo realidad.",
  description4: "Nuestro enfoque está respaldado por tecnología de vanguardia y un equipo con años de experiencia en la industria manufacturera. Entendemos los retos operativos que enfrentas: tiempos de inactividad no planificados, pérdidas en la producción, ineficiencias energéticas y problemas de integración tecnológica. Por eso, nuestra misión es clara: ayudarte a eliminarlos con soluciones inteligentes y prácticas. Al invertir en un sistema SCADA, no solo modernizas tu operación; aseguras la sostenibilidad de tu negocio en un entorno competitivo y en constante evolución.",
  advantagesTitle: "Beneficios que harán crecer tu industria:",
  advantages: [
      "Monitoreo en tiempo real: Observa el desempeño de toda tu planta minuto a minuto, con alertas automáticas que permiten una rápida identificación y resolución de problemas. Desde gráficos avanzados hasta tableros personalizados, tendrás el control absoluto de tus operaciones.",
      "Automatización y eficiencia operativa: Olvídate de los procesos manuales que consumen tiempo y generan errores. Con un sistema SCADA, optimizas cada paso, asegurándote de que cada recurso sea aprovechado al máximo.",
      "Reducción de tiempos de inactividad: Los fallos no planificados son cosa del pasado. Con diagnósticos predictivos y alertas anticipadas, mantén tus operaciones funcionando sin interrupciones.",
      "Optimización de costos y recursos: Descubre cómo aprovechar mejor la energía, los materiales y el personal, reduciendo desperdicios y aumentando la rentabilidad.",
      "Seguridad avanzada: Protege tus datos y operaciones con protocolos de ciberseguridad robustos, asegurando que tu negocio esté blindado contra amenazas externas.",
      "Integración total: Conecta SCADA con sistemas como ERP, MES y otros softwares críticos para centralizar la gestión y mejorar la toma de decisiones estratégicas."
  ],
  costDetails: "La implementación de un sistema SCADA es una decisión que transformará tu industria. Para empezar, ofrecemos una consultoría inicial por solo **1 dólar**. Este es un pequeño paso hacia una gran transformación. Durante la consultoría, analizaremos tus procesos, identificaremos oportunidades y te presentaremos un plan personalizado para implementar SCADA en tu negocio. No se trata de un gasto, sino de una inversión estratégica que comienza con el costo más accesible del mercado.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Haz que cada minuto de tu producción cuente. Reserva una sesión personalizada y descubre cómo un sistema SCADA puede transformar tus operaciones industriales."
};

const services = [
  { name: "Automatización de Procesos Industriales", slug: "automatizacion-procesos-industriales", icon: <Cpu className="w-6 h-6 text-custom-orange" /> },
  { name: "Implementación y Configuración de Sistemas SCADA", slug: "implementacion-configuracion-sistemas-scada", icon: <Server className="w-6 h-6 text-custom-orange" /> },
  { name: "Mantenimiento Predictivo y Reducción de Tiempos de Inactividad", slug: "mantenimiento-predictivo-reduccion-tiempos-inactividad", icon: <Zap className="w-6 h-6 text-custom-orange" /> },
  { name: "Ciberseguridad y Protección de Datos en SCADA", slug: "ciberseguridad-proteccion-datos-en-scada", icon: <Lock className="w-6 h-6 text-custom-orange" /> },
  { name: "Integración SCADA con ERP y MES", slug: "integracion-scada-erp-mes-sistemas-gestion", icon: <Database className="w-6 h-6 text-custom-orange" /> },
];


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
                src="/fulfillment.jpg"
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
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const [key, value] = advantage.split(": ");
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, 
                            <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
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
              </div>
            );
          })}
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-extrabold text-custom-orange dark:text-zinc-100 mb-12">
        Servicios Especializados
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link key={service.slug} href={`/servicios/scada/${service.slug}`} passHref>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex items-start hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-zinc-700">
              <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                <div className="w-12 h-12 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                  {service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  {service.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
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