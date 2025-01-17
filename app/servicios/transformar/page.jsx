import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import ContactSection from '@/components/ContactSection';

const COPY = {
  title: "Impulsa Tu Negocio con Consultoría en Transformación Digital",
  description1: "La transformación digital no es solo una tendencia, es una necesidad estratégica en un mercado donde la innovación marca la diferencia. Nuestra consultoría te ayuda a digitalizar procesos clave de tu negocio —operativos, comerciales y administrativos— para mejorar la toma de decisiones, aumentar la eficiencia y garantizar la sostenibilidad de tu empresa en un mundo cada vez más tecnológico. No importa el tamaño de tu empresa, estamos aquí para ayudarte a alcanzar una ventaja competitiva duradera.",
  description2: "La digitalización de tu empresa comienza con una evaluación detallada de tus procesos actuales. Nuestro enfoque consiste en identificar oportunidades de mejora, implementar soluciones tecnológicas avanzadas y personalizar cada estrategia para maximizar los resultados. Ya sea que busques automatizar tareas, integrar plataformas o mejorar la experiencia de tus clientes, nuestra consultoría se adapta a tus necesidades específicas, asegurando que cada acción tenga un impacto tangible en la productividad y el crecimiento de tu negocio.",
  description3: "Nuestro equipo de expertos combina experiencia y metodologías probadas con tecnologías de vanguardia para ofrecer resultados efectivos y sostenibles. No se trata solo de implementar tecnología, sino de ayudarte a transformar la cultura de tu empresa, promoviendo una mentalidad ágil y orientada a la innovación. Desde la evaluación inicial hasta el soporte post-implementación, trabajamos contigo para garantizar que cada etapa del proceso sea un éxito.",
  description4: "Invertir en transformación digital es invertir en el futuro de tu negocio. La digitalización no solo mejora la eficiencia operativa, sino que también fomenta la colaboración, impulsa la innovación y permite tomar decisiones estratégicas basadas en datos. Con nuestra consultoría, estarás mejor preparado para enfrentar los retos del mercado, superar a la competencia y construir una organización resiliente y adaptable.",
  advantagesTitle: "Beneficios que cambiarán tu forma de hacer negocios:",
  advantages: [
      "Mejora en la toma de decisiones: Obtén acceso a datos en tiempo real y análisis avanzados que te permitirán tomar decisiones más informadas, reduciendo riesgos e identificando nuevas oportunidades de negocio.",
      "Optimización de procesos: Automatiza tareas repetitivas y elimina ineficiencias en procesos operativos, comerciales y administrativos, lo que aumenta la productividad de tu equipo y reduce costos.",
      "Aumento de la eficiencia global: Integra plataformas y herramientas digitales para mejorar la coordinación entre equipos, optimizando la gestión de proyectos y recursos en tiempo récord.",
      "Impulso a la innovación y agilidad: Implementa tecnologías modernas y adopta metodologías flexibles que permiten a tu empresa responder rápidamente a los cambios del mercado y las demandas de los clientes.",
      "Mejora de la experiencia del cliente: Ofrece soluciones digitales que optimicen la interacción con tus clientes, proporcionando servicios más rápidos, personalizados y efectivos que aumentan su satisfacción y fidelidad.",
      "Integración total: Conecta sistemas empresariales como CRM, ERP y MES para obtener una visión integral de tu negocio, facilitando la interoperabilidad y mejorando la gestión de todas las áreas de tu empresa."
  ],
  costDetails: "Transformar tu negocio comienza con un paso accesible y estratégico. Por solo **1 dólar**, ofrecemos una consultoría inicial donde evaluaremos tus procesos actuales, identificaremos oportunidades de mejora y diseñaremos un plan personalizado para digitalizar tu empresa. Este pequeño costo representa un gran salto hacia el futuro de tu negocio, garantizando resultados tangibles y sostenibles.",
  buttonLabel: "Reserva Tu Consultoría por $1 →",
  tooltipContent: "Lleva a tu empresa al siguiente nivel con nuestras soluciones personalizadas. Reserva tu consultoría inicial por $1 y descubre cómo la transformación digital puede impulsar tu éxito."
};

const App = () => {
  return (
       <TooltipProvider>
         <div className="p-6">
       
             <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">{COPY.title}</h2>
             <p className="text-lg mb-4 text-gray-700 dark:text-gray-200">{COPY.description1}</p>
             <p className="text-base mb-4 text-gray-600 dark:text-gray-200">{COPY.description2}</p>
             <p className="text-base mb-4 text-gray-600 dark:text-gray-200">{COPY.description3}</p>
             <p className="text-base mb-4 font-semibold text-gray-900">{COPY.advantagesTitle}</p>
             <ul className="list-disc pl-6 mb-6 space-y-2">
               {COPY.advantages.map((advantage, index) => {
                 const [key, value] = advantage.split(": ");
                 return (
                   <li key={index} className="text-gray-600 dark:text-gray-200">
                     <strong className="text-gray-900 dark:text-gray-200">{key}:</strong> {value}
                   </li>
                 );
               })}
             </ul>
             <div className="flex items-center">
               <Button size="lg" variant="solid" color="primary" asChild>
                 <a href="/more-info" className="text-white no-underline">
                   {COPY.buttonLabel}
                 </a>
               </Button>
               <Tooltip>
                 <TooltipContent>
                   <p className="text-sm text-gray-700 dark:text-gray-200">{COPY.tooltipContent}</p>
                 </TooltipContent>
               </Tooltip>
             </div>
             <ContactSection/>
         </div>
       </TooltipProvider>
  );
};

export default App;