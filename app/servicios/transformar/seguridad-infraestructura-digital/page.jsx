import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Seguridad y Gestión de Infraestructura Digital",
  description1: "Protege tu empresa con soluciones avanzadas de ciberseguridad y gestión de infraestructura digital. Asegura la continuidad operativa y previene vulnerabilidades antes de que se conviertan en problemas críticos.",
  description2: "La seguridad digital es un pilar clave en la transformación tecnológica. Implementamos estrategias robustas para garantizar la protección de tus datos y sistemas frente a amenazas internas y externas.",
  description3: "Desde monitoreo en tiempo real hasta soluciones de recuperación ante desastres, ofrecemos un enfoque integral en la gestión de infraestructura digital. Nuestro objetivo es brindarte tranquilidad con sistemas seguros y eficientes.",
  description4: "Trabajamos con tecnologías de última generación para fortalecer la seguridad de tu red, proteger accesos y optimizar el rendimiento de tus sistemas sin comprometer su estabilidad.",
  advantagesTitle: "Beneficios de una infraestructura digital segura:",
  advantages: [
      "Protección avanzada contra ciberataques: Implementa medidas de seguridad efectivas para evitar intrusiones y accesos no autorizados.",
      "Monitoreo en tiempo real: Detecta amenazas y vulnerabilidades antes de que afecten tus operaciones.",
      "Gestión eficiente de servidores y redes: Optimiza el rendimiento de tu infraestructura digital con administración especializada.",
      "Cumplimiento normativo: Asegura que tu empresa cumpla con las regulaciones de seguridad y privacidad de datos.",
      "Planes de recuperación ante desastres: Garantiza la continuidad operativa incluso ante incidentes imprevistos.",
      "Optimización del rendimiento: Mejora la eficiencia y velocidad de tus sistemas con una infraestructura digital segura."
  ],
  costDetails: "Refuerza la seguridad digital de tu empresa con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y diseñaremos una estrategia de protección adaptada a tus necesidades.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Asegura la estabilidad y seguridad de tu infraestructura digital. Reserva una sesión y protege tu empresa de amenazas cibernéticas."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
