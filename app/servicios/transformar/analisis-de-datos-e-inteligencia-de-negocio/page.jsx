import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Análisis de Datos e Inteligencia de Negocio",
  description1: "Transforma tus datos en información valiosa para tomar decisiones estratégicas y mejorar la rentabilidad de tu empresa. Descubre patrones, optimiza procesos y anticipa tendencias con análisis avanzado.",
  description2: "La inteligencia de negocio permite convertir datos en acciones. Con herramientas avanzadas de analítica, visualización e interpretación, optimizamos la toma de decisiones en cada nivel de tu empresa.",
  description3: "Desarrollamos soluciones de análisis de datos personalizadas, integrando modelos predictivos, dashboards interactivos y reportes automatizados que permiten monitorear en tiempo real el desempeño de tu negocio.",
  description4: "Nuestro equipo combina experiencia en Big Data, Machine Learning y Business Intelligence para brindarte una estrategia completa que impulse la eficiencia y el crecimiento empresarial.",
  advantagesTitle: "Beneficios del análisis de datos e inteligencia de negocio:",
  advantages: [
      "Toma de decisiones basada en datos: Reduce la incertidumbre y optimiza estrategias con información precisa.",
      "Identificación de tendencias: Detecta patrones de consumo y comportamiento para adelantarte al mercado.",
      "Optimización operativa: Identifica cuellos de botella y mejora la eficiencia en cada área del negocio.",
      "Dashboards interactivos: Visualiza métricas clave en tiempo real para un control total.",
      "Modelos predictivos: Anticipa cambios y ajusta tu estrategia con herramientas de predicción avanzada.",
      "Automatización de reportes: Reduce la carga operativa y accede a información crítica al instante."
  ],
  costDetails: "Empieza a transformar tu negocio con una consultoría inicial por solo **1 dólar**. Evaluaremos tus datos actuales y te mostraremos cómo la inteligencia de negocio puede impulsar tu crecimiento.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Convierte tus datos en información estratégica. Agenda una sesión y descubre cómo mejorar la rentabilidad de tu empresa."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
