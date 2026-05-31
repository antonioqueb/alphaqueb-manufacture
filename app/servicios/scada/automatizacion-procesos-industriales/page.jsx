import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Automatización de Procesos Industriales",
  description1: "Optimiza la producción y reduce costos con soluciones de automatización industrial diseñadas para mejorar la eficiencia operativa y la seguridad.",
  description2: "Nuestros sistemas de automatización integran tecnologías avanzadas para el control y monitoreo de procesos, minimizando errores y maximizando la productividad.",
  description3: "Desarrollamos soluciones a medida que incluyen controladores lógicos programables (PLC), robots industriales, sensores y software de gestión inteligente.",
  description4: "Implementamos estrategias de automatización flexibles y escalables para adaptarnos a las necesidades de tu industria, mejorando la calidad y tiempos de producción.",
  advantagesTitle: "Beneficios de la automatización industrial:",
  advantages: [
    "Incremento de la productividad: Reduce tiempos de producción y optimiza la eficiencia operativa.",
    "Reducción de errores: Minimiza fallos en los procesos gracias a sistemas automatizados y precisos.",
    "Seguridad mejorada: Disminuye riesgos laborales mediante la implementación de robots y controles automatizados.",
    "Integración con sistemas ERP y SCADA: Garantiza un flujo de información en tiempo real para una gestión óptima.",
    "Ahorro en costos operativos: Reduce desperdicios de materiales y consumo energético.",
    "Escalabilidad: Diseñamos soluciones modulares para crecer según las necesidades de tu empresa."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tus procesos actuales y te mostraremos cómo la automatización puede mejorar tu producción.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la automatización puede transformar tu industria. Agenda una sesión y optimiza tu producción."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
