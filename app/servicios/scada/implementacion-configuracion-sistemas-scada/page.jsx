import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Implementación y Configuración de Sistemas SCADA",
  description1: "Optimiza el monitoreo y control de tus procesos industriales con un sistema SCADA diseñado a la medida. Mejora la eficiencia operativa, reduce costos y aumenta la seguridad en tu planta.",
  description2: "Los sistemas SCADA permiten la supervisión en tiempo real, recolección de datos y automatización de procesos críticos, garantizando una mayor visibilidad y control sobre tu producción.",
  description3: "Nuestra experiencia en la integración de software y hardware nos permite diseñar soluciones SCADA personalizadas que se adaptan a las necesidades específicas de tu industria.",
  description4: "Implementamos arquitecturas escalables, seguras y eficientes, integrando PLCs, sensores y dispositivos IoT para un control total de tus operaciones.",
  advantagesTitle: "Beneficios de implementar un sistema SCADA:",
  advantages: [
    "Monitoreo en tiempo real: Obtén visibilidad total de tu producción desde cualquier dispositivo.",
    "Automatización y control: Reduce la intervención manual y optimiza la operación de maquinaria.",
    "Análisis de datos históricos: Identifica patrones y optimiza la toma de decisiones estratégicas.",
    "Seguridad y alarmas inteligentes: Detecta fallos y recibe alertas antes de que impacten la producción.",
    "Integración con otros sistemas: Conectamos SCADA con ERP, MES y otros sistemas para una gestión unificada.",
    "Reducción de costos operativos: Minimiza desperdicios, mejora la eficiencia y reduce tiempos de inactividad."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Analizaremos tu infraestructura y te mostraremos cómo un sistema SCADA puede optimizar tu producción.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza el control de tus procesos con SCADA. Agenda una sesión y descubre cómo mejorar la eficiencia de tu empresa."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
