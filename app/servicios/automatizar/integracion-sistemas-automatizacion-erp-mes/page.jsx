import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Integración de Sistemas de Automatización con ERP y MES",
  description1: "Optimiza la gestión de tu empresa con la integración de sistemas de automatización con ERP y MES para un control total de la producción.",
  description2: "Conectamos sistemas SCADA, PLCs y dispositivos IoT con plataformas ERP y MES para una gestión unificada y eficiente.",
  description3: "Nuestra solución permite una supervisión en tiempo real, automatización de procesos y toma de decisiones basada en datos precisos.",
  description4: "Mejoramos la trazabilidad, optimizamos la cadena de suministro y aumentamos la productividad con una integración inteligente y escalable.",
  advantagesTitle: "Beneficios de la integración de automatización con ERP y MES:",
  advantages: [
    "Centralización de la información: Unifica datos operativos y administrativos en una sola plataforma.",
    "Automatización de procesos: Reduce errores y mejora la eficiencia en la gestión de producción.",
    "Monitoreo en tiempo real: Supervisa el estado de la producción y toma decisiones informadas.",
    "Optimización de la cadena de suministro: Ajusta la producción a la demanda en tiempo real.",
    "Reducción de costos operativos: Minimiza desperdicios y maximiza la rentabilidad.",
    "Escalabilidad y flexibilidad: Diseñamos soluciones adaptadas al crecimiento de tu empresa."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo integrar tus sistemas de automatización con ERP y MES.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la integración de sistemas de automatización con ERP y MES puede transformar tu producción. Agenda una sesión y optimiza tu negocio."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
