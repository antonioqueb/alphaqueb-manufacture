import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Reducción de Costos Operativos mediante Optimización de Recursos",
  description1: "Mejora la rentabilidad de tu empresa con estrategias de optimización de recursos que reducen costos y maximizan la eficiencia operativa.",
  description2: "Implementamos soluciones avanzadas para la gestión eficiente de energía, materiales y tiempo de producción, reduciendo desperdicios y costos innecesarios.",
  description3: "Nuestra tecnología permite un análisis detallado del uso de recursos en tiempo real para una toma de decisiones informada y precisa.",
  description4: "Integramos herramientas de monitoreo inteligente, automatización y analítica de datos para optimizar cada aspecto de la operación industrial.",
  advantagesTitle: "Beneficios de la optimización de recursos:",
  advantages: [
    "Reducción de costos energéticos: Optimiza el consumo de energía para disminuir gastos operativos.",
    "Gestión eficiente de materiales: Minimiza desperdicios y mejora la planificación de insumos.",
    "Automatización de procesos: Mejora la eficiencia productiva reduciendo la intervención manual.",
    "Monitoreo en tiempo real: Controla y ajusta el uso de recursos de manera continua.",
    "Análisis de datos avanzado: Detecta oportunidades de ahorro y mejora en cada área del negocio.",
    "Sostenibilidad y responsabilidad ambiental: Implementa estrategias más ecológicas y rentables."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo optimizar tus recursos y reducir costos operativos.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la optimización de recursos puede reducir costos y mejorar la eficiencia. Agenda una sesión y optimiza tu negocio."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
