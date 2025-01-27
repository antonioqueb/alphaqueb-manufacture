import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import ContactSection from '@/components/ContactSection';

const COPY = {
  title: "Transforma Radicalmente Tu Industria con Sistemas SCADA",
  description1: "¿Estás preparado para llevar el control de tu planta al siguiente nivel? Imagina supervisar y gestionar cada detalle de tus procesos industriales en tiempo real, reduciendo tiempos muertos, maximizando tu eficiencia y detectando oportunidades de mejora antes de que los problemas aparezcan. Esto es lo que nuestros sistemas SCADA (Supervisory Control and Data Acquisition) pueden hacer por ti: transformar la manera en que operas, con resultados medibles desde el día uno.",
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