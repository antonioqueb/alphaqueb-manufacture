import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Integración de Robots Industriales y Sistemas de Control",
  description1: "Optimiza la producción y eficiencia operativa con la integración de robots industriales en tus procesos de manufactura.",
  description2: "Desarrollamos soluciones de automatización con robots colaborativos, AGVs y brazos robóticos para mejorar la precisión y seguridad en el entorno industrial.",
  description3: "Integramos sistemas de control avanzados con PLCs, SCADA y sensores inteligentes para un monitoreo preciso y toma de decisiones en tiempo real.",
  description4: "Nuestra experiencia en automatización permite la adaptación de robots industriales a diversas industrias, maximizando la productividad y reduciendo costos operativos.",
  advantagesTitle: "Beneficios de la integración de robots industriales:",
  advantages: [
    "Aumento de la eficiencia: Reduce tiempos de producción y optimiza el uso de recursos.",
    "Mayor precisión y calidad: Minimiza errores en procesos repetitivos y mejora la calidad del producto final.",
    "Seguridad laboral: Disminuye riesgos en tareas peligrosas mediante la automatización con robots.",
    "Monitoreo inteligente: Implementamos análisis de datos en tiempo real para optimizar el desempeño de los robots.",
    "Escalabilidad: Diseñamos soluciones modulares que crecen con las necesidades de tu empresa.",
    "Integración con ERP y SCADA: Conectamos robots con sistemas de gestión para un control total de la producción."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo la robótica industrial puede mejorar tu negocio.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la robótica industrial puede transformar tu producción. Agenda una sesión y optimiza tu operación."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
