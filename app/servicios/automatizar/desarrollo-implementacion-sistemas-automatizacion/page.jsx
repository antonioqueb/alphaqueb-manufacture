import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Desarrollo e Implementación de Sistemas de Automatización",
  description1: "Optimiza la eficiencia y productividad de tu empresa con soluciones de automatización industrial a medida.",
  description2: "Diseñamos e implementamos sistemas de control automatizados que mejoran los procesos operativos y reducen costos.",
  description3: "Integramos tecnologías como PLCs, sensores IoT y software SCADA para una supervisión y control precisos en tiempo real.",
  description4: "Nuestras soluciones de automatización garantizan una mayor flexibilidad y escalabilidad para adaptarse a las necesidades de tu industria.",
  advantagesTitle: "Beneficios de la automatización industrial:",
  advantages: [
    "Optimización de procesos: Reduce tiempos de producción y mejora la eficiencia operativa.",
    "Reducción de errores: Minimiza fallos mediante sistemas de control precisos y automatizados.",
    "Monitoreo en tiempo real: Supervisa tus operaciones desde cualquier lugar con tecnología IoT.",
    "Ahorro de costos: Disminuye el consumo de energía y reduce desperdicios en la producción.",
    "Integración con otros sistemas: Conecta la automatización con ERP, MES y SCADA para un control total.",
    "Escalabilidad y adaptabilidad: Diseñamos soluciones flexibles que crecen junto con tu empresa."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tus necesidades y te mostraremos cómo la automatización puede mejorar tu negocio.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la automatización puede transformar tu industria. Agenda una sesión y optimiza tu producción."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
