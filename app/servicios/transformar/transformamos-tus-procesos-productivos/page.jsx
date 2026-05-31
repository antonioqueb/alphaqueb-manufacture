import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Digitalización de Procesos de Producción",
  description1: "Optimiza tus operaciones con tecnología avanzada y digitalización inteligente. Automatiza procesos, mejora la eficiencia y reduce costos operativos sin comprometer la calidad de producción.",
  description2: "La digitalización de procesos no es solo una mejora tecnológica; es una transformación operativa. Permite una gestión más precisa y ágil, mejorando la trazabilidad, el control de calidad y la eficiencia general en cada etapa de producción.",
  description3: "Ofrecemos soluciones personalizadas de digitalización que integran software de monitoreo, automatización y análisis de datos. Conectamos tu producción con herramientas inteligentes para facilitar la toma de decisiones basadas en datos en tiempo real.",
  description4: "Nuestro equipo de expertos trabaja contigo para garantizar una transición fluida hacia la digitalización, minimizando interrupciones y maximizando el retorno de inversión en cada implementación.",
  advantagesTitle: "Beneficios de digitalizar tu producción:",
  advantages: [
      "Automatización inteligente: Reduce errores manuales y agiliza los procesos productivos.",
      "Monitoreo en tiempo real: Obtén datos precisos de cada etapa de producción al instante.",
      "Optimización de recursos: Usa materiales y energía de manera eficiente, reduciendo desperdicios.",
      "Integración con sistemas ERP y MES: Conecta toda tu operación para mejorar la toma de decisiones.",
      "Reducción de costos operativos: Digitaliza tareas repetitivas y optimiza el flujo de trabajo.",
      "Mejora en la trazabilidad: Asegura el cumplimiento de estándares de calidad y normativas industriales."
  ],
  costDetails: "Transforma tu producción con una consultoría inicial por solo **1 dólar**. Evaluaremos tus necesidades y diseñaremos una estrategia personalizada para digitalizar tus procesos de producción.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la digitalización puede llevar tu producción a otro nivel. Agenda una sesión y optimiza tu operación con tecnología avanzada."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
