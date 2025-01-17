import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import ContactSection from '@/components/ContactSection';

const COPY = {
  title: "Potencia Tu Producción con Automatización Avanzada",
  description1: "¿Te imaginas una línea de producción que nunca se detiene, opera con máxima eficiencia y entrega resultados consistentemente de alta calidad? Esto es lo que nuestras soluciones de automatización avanzada pueden hacer por tu industria. Desde aumentar la capacidad productiva hasta reducir costos operativos, te ayudamos a transformar tus procesos con tecnología de vanguardia, diseñada específicamente para las necesidades de la manufactura moderna.",
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
      <div className="p-6">
    
          <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-200">{COPY.title}</h2>
          <p className="text-lg mb-4 text-zinc-700 dark:text-zinc-200">{COPY.description1}</p>
          <p className="text-base mb-4 text-zinc-600 dark:text-zinc-200">{COPY.description2}</p>
          <p className="text-base mb-4 text-zinc-600 dark:text-zinc-200">{COPY.description3}</p>
          <p className="text-base mb-4 font-semibold text-zinc-900">{COPY.advantagesTitle}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            {COPY.advantages.map((advantage, index) => {
              const [key, value] = advantage.split(": ");
              return (
                <li key={index} className="text-zinc-600 dark:text-zinc-200">
                  <strong className="text-zinc-900 dark:text-zinc-200">{key}:</strong> {value}
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
                <p className="text-sm text-zinc-700 dark:text-zinc-200">{COPY.tooltipContent}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <ContactSection/>
      </div>
    </TooltipProvider>
  );
};

export default App;