import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Integración de Sistemas Empresariales (ERP, MES y CRM)",
  description1: "Conecta y optimiza todas las áreas de tu empresa con una integración fluida entre sistemas ERP, MES y CRM. Mejora la colaboración, la visibilidad de datos y la toma de decisiones estratégicas en tiempo real.",
  description2: "La integración de sistemas empresariales no solo mejora la eficiencia, sino que también reduce la duplicidad de datos y facilita la automatización de procesos clave. Esto permite un control más preciso y una mejor planificación operativa.",
  description3: "Implementamos soluciones que sincronizan todas tus herramientas de gestión empresarial para garantizar un flujo de información sin interrupciones. Desde la gestión de inventarios hasta la automatización de ventas, nuestros sistemas trabajan en conjunto para impulsar tu negocio.",
  description4: "Nuestro enfoque asegura que cada solución se adapte a las necesidades específicas de tu industria, minimizando errores y aumentando la productividad. Te ayudamos a transformar tu infraestructura digital con integración inteligente y efectiva.",
  advantagesTitle: "Beneficios de integrar tus sistemas empresariales:",
  advantages: [
      "Centralización de datos: Mantén toda la información de la empresa en un solo lugar, accesible en tiempo real.",
      "Automatización de procesos: Reduce tareas manuales repetitivas y optimiza flujos de trabajo.",
      "Mejora en la toma de decisiones: Datos actualizados y precisos para estrategias más efectivas.",
      "Mayor eficiencia operativa: Conectividad entre departamentos para mejorar la comunicación interna.",
      "Escalabilidad empresarial: Adapta tu infraestructura digital a medida que crece tu negocio.",
      "Seguridad y control: Protección avanzada de datos y mejor trazabilidad de operaciones."
  ],
  costDetails: "Transforma la gestión de tu empresa con una consultoría inicial por solo **1 dólar**. Evaluaremos tus sistemas actuales y diseñaremos una estrategia personalizada de integración.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza tu empresa con una integración inteligente. Reserva una sesión y descubre cómo conectar tus sistemas para maximizar el rendimiento."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
