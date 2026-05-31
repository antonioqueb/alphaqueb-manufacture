import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Automatización de Procesos Administrativos y Operativos",
  description1: "Optimiza la eficiencia de tu empresa mediante la automatización de procesos clave. Reduce costos, minimiza errores y libera recursos para enfocarte en la estrategia y el crecimiento.",
  description2: "La automatización es la clave para mejorar la productividad. Permite eliminar tareas repetitivas, mejorar la gestión de tiempos y asegurar que cada proceso funcione con la máxima eficiencia.",
  description3: "Implementamos soluciones de automatización adaptadas a las necesidades de tu empresa, desde flujos de trabajo digitales hasta la integración con sistemas empresariales para un funcionamiento más ágil y preciso.",
  description4: "Nuestro equipo de expertos trabaja contigo para diseñar estrategias de automatización que reduzcan la carga operativa y mejoren la eficiencia en cada nivel de tu organización.",
  advantagesTitle: "Beneficios de la automatización de procesos:",
  advantages: [
      "Reducción de errores: Minimiza riesgos y garantiza la precisión en cada tarea.",
      "Ahorro de tiempo: Elimina tareas manuales repetitivas y optimiza los flujos de trabajo.",
      "Mayor productividad: Permite a tu equipo enfocarse en tareas estratégicas de mayor valor.",
      "Integración con sistemas existentes: Sincroniza procesos con ERP, CRM y otras herramientas clave.",
      "Escalabilidad: Adapta la automatización a las necesidades crecientes de tu negocio.",
      "Monitoreo y control: Mejora la visibilidad y gestión de procesos en tiempo real."
  ],
  costDetails: "Empieza a transformar tu empresa con una consultoría inicial por solo **1 dólar**. Evaluaremos tus procesos actuales y diseñaremos una estrategia de automatización adaptada a tus necesidades.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza la gestión de tu empresa con la automatización de procesos. Reserva una sesión y descubre cómo mejorar la eficiencia operativa."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
