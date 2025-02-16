import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link'; // Importamos el componente Link

const COPY = {
  title: "Automatización Avanzada para la manufactura moderna",
  description1: "Desde aumentar la capacidad productiva hasta reducir costos operativos, te ayudamos a transformar tus procesos con tecnología de vanguardia, diseñada específicamente para las necesidades de la manufactura moderna.",
  description2: "La automatización avanzada no es un lujo, es una necesidad estratégica para cualquier negocio industrial que quiera mantenerse competitivo. Nuestras soluciones personalizadas te permiten optimizar cada etapa del proceso productivo, desde la planificación hasta la ejecución. Con un monitoreo constante y un control preciso, aseguramos un flujo de trabajo sin interrupciones, minimizamos errores y maximizamos la productividad en todas las áreas de tu operación.",
  description3: "Nuestro enfoque no se limita a implementar sistemas de automatización: construimos soluciones a tu medida. Ya sea que necesites aumentar la velocidad de tu producción, reducir el consumo de recursos, o integrar tus procesos con otros sistemas empresariales como ERP o MES, tenemos la experiencia y las herramientas necesarias para hacer realidad tu visión. Además, acompañamos a tu equipo en todo el proceso: desde la consultoría inicial hasta el soporte post-implementación, garantizando resultados sólidos y sostenibles.",
  description4: "Con años de experiencia en la industria manufacturera, nuestro equipo entiende los desafíos operativos a los que te enfrentas: tiempos muertos, inconsistencias en la calidad y altos costos de operación. Por eso, nuestras soluciones no solo automatizan procesos, sino que optimizan la totalidad de tu sistema de producción, permitiéndote obtener el máximo rendimiento de tus recursos. Al invertir en automatización avanzada, estarás garantizando no solo una mejora en la eficiencia, sino también la sostenibilidad y competitividad de tu empresa a largo plazo.",
  advantagesTitle: "Ventajas que transformarán tu línea de producción:",
  advantages: [
      "Aumento de la capacidad de producción: Eleva la velocidad y eficiencia de tu línea de producción sin sacrificar calidad. Nuestros sistemas manejan altos volúmenes con precisión y consistencia.",
      "Consistencia garantizada: Evita variabilidades y errores. Nuestra tecnología asegura resultados uniformes en cada ciclo de producción, mejorando la calidad final de tus productos.",
      "Reducción de costos operativos: Identifica y elimina ineficiencias en el uso de mano de obra y materiales, maximizando la rentabilidad en cada etapa del proceso.",
      "Monitoreo constante: Obtén visibilidad total sobre tus operaciones con paneles personalizados y datos en tiempo real. Esto te permite tomar decisiones rápidas e informadas.",
      "Control preciso y dinámico: Realiza ajustes en tiempo real con nuestras interfaces intuitivas, manteniendo un desempeño óptimo incluso en entornos industriales complejos.",
      "Integración total: Conecta tu sistema de automatización con plataformas empresariales como ERP y MES, logrando una gestión completamente integrada y eficiente."
  ],
  costDetails: "Dar el primer paso hacia la transformación de tu producción nunca fue tan accesible. Por solo **1 dólar**, ofrecemos una consultoría inicial donde analizaremos tus procesos actuales, identificaremos oportunidades clave y diseñaremos un plan personalizado para implementar automatización avanzada en tu negocio. Este no es solo un servicio; es una inversión estratégica que puede cambiar el rumbo de tu empresa.",
  buttonLabel: "Reserva Tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo nuestras soluciones de automatización pueden transformar tu producción. Reserva tu consultoría inicial y empieza a optimizar tu negocio hoy mismo."
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
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};


export default App;