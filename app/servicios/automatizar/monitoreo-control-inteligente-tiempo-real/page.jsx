import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Monitoreo y Control Inteligente en Tiempo Real",
  description1: "Optimiza la supervisión de tus procesos con soluciones avanzadas de monitoreo en tiempo real y control inteligente.",
  description2: "Implementamos sistemas basados en IoT, sensores inteligentes y SCADA para garantizar una gestión eficiente y automatizada.",
  description3: "Nuestra tecnología permite visualizar y analizar datos en tiempo real para una toma de decisiones precisa y efectiva.",
  description4: "Integramos herramientas de inteligencia artificial y analítica predictiva para mejorar la operatividad y reducir tiempos de respuesta.",
  advantagesTitle: "Beneficios del monitoreo y control inteligente:",
  advantages: [
    "Supervisión en tiempo real: Obtén visibilidad instantánea de tus procesos industriales.",
    "Automatización de decisiones: Integra sistemas inteligentes para mejorar la eficiencia.",
    "Reducción de tiempos de inactividad: Detecta anomalías y toma medidas preventivas automáticamente.",
    "Integración con IoT y SCADA: Conecta sensores y dispositivos para una gestión avanzada.",
    "Análisis predictivo: Anticipa fallos y optimiza el mantenimiento de tus equipos.",
    "Mayor seguridad operativa: Minimiza riesgos y mejora la seguridad en tus instalaciones."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo el monitoreo inteligente puede mejorar tu operación.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo el monitoreo inteligente puede transformar tu negocio. Agenda una sesión y optimiza tu operación."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
