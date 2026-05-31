import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Integración SCADA con ERP, MES y Sistemas de Gestión",
  description1: "Optimiza la conectividad y el flujo de información entre tus sistemas SCADA, ERP y MES para una gestión industrial eficiente y centralizada.",
  description2: "La integración de SCADA con sistemas de gestión permite una supervisión en tiempo real, automatización avanzada y mejor toma de decisiones basadas en datos precisos.",
  description3: "Conectamos plataformas industriales para que tu producción, inventarios y mantenimiento operen de manera sincronizada, mejorando la trazabilidad y eficiencia operativa.",
  description4: "Implementamos arquitecturas escalables que permiten una integración flexible y segura, adaptada a las necesidades de tu empresa.",
  advantagesTitle: "Beneficios de la integración SCADA con ERP y MES:",
  advantages: [
    "Supervisión en tiempo real: Conecta datos de producción con tu sistema de gestión empresarial.",
    "Automatización y control centralizado: Mejora la coordinación entre producción y gestión de recursos.",
    "Optimización del mantenimiento: Detecta fallos y genera órdenes de trabajo de manera automática.",
    "Gestión eficiente de inventarios: Sincroniza niveles de stock con la producción en tiempo real.",
    "Reducción de costos operativos: Minimiza desperdicios y optimiza la planificación de recursos.",
    "Mayor trazabilidad: Registra y analiza datos históricos para mejorar la toma de decisiones estratégicas."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo una integración SCADA eficiente puede potenciar tu operación.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza la conectividad de tus sistemas industriales. Agenda una sesión y descubre cómo mejorar la gestión de tu empresa."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
