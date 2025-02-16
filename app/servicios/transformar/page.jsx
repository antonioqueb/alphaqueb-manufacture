import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Transformación Digital para Manufactura 4.0",
  description1: "Nuestra consultoría te ayuda a digitalizar procesos clave de tu negocio para mejorar la toma de decisiones, aumentar la eficiencia y garantizar la sostenibilidad de tu empresa en un mundo cada vez más tecnológico.",
  advantages: [
      "Mejora en la toma de decisiones: Obtén acceso a datos en tiempo real y análisis avanzados que te permitirán tomar decisiones más informadas, reduciendo riesgos e identificando nuevas oportunidades de negocio.",
      "Optimización de procesos: Automatiza tareas repetitivas y elimina ineficiencias en procesos operativos, comerciales y administrativos, lo que aumenta la productividad de tu equipo y reduce costos.",
      "Aumento de la eficiencia global: Integra plataformas y herramientas digitales para mejorar la coordinación entre equipos, optimizando la gestión de proyectos y recursos en tiempo récord.",
      "Impulso a la innovación y agilidad: Implementa tecnologías modernas y adopta metodologías flexibles que permiten a tu empresa responder rápidamente a los cambios del mercado y las demandas de los clientes.",
      "Mejora de la experiencia del cliente: Ofrece soluciones digitales que optimicen la interacción con tus clientes, proporcionando servicios más rápidos, personalizados y efectivos que aumentan su satisfacción y fidelidad.",
      "Integración total: Conecta sistemas empresariales como CRM, ERP y MES para obtener una visión integral de tu negocio, facilitando la interoperabilidad y mejorando la gestión de todas las áreas de tu empresa."
  ],
  subPages: [
    { name: "Análisis de Datos e Inteligencia de Negocio", path: "/servicios/transformar/analisis-de-datos-e-inteligencia-de-negocio" },
    { name: "Automatización de Procesos Administrativos y Operativos", path: "/servicios/transformar/automatizacion-procesos-administrativos-operativos" },
    { name: "Integración de Sistemas Empresariales", path: "/servicios/transformar/integramos-sistemas-empresariales" },
    { name: "Seguridad e Infraestructura Digital", path: "/servicios/transformar/seguridad-infraestructura-digital" },
    { name: "Transformación de Procesos Productivos", path: "/servicios/transformar/transformamos-tus-procesos-productivos" },
  ],
};

const App = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent">
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
            <Image src="/fulfillment.jpg" alt="Digital Transformation" fill className="object-cover object-center" quality={100} priority />
          </div>
        </div>
      </section>

      {/* Sección de Subpáginas */}
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {COPY.subPages.map((page, index) => (
          <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
              {page.name}
            </h4>
            <Link href={page.path}>
              <Button variant="outline" className="text-custom-orange border-custom-orange">
                Ver más
              </Button>
            </Link>
          </div>
        ))}
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
        <ContactSection />
      </section>
    </div>
  );
};

export default App;
