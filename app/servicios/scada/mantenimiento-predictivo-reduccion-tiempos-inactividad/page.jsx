import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Mantenimiento Predictivo y Reducción de Tiempos de Inactividad",
  description1: "Anticípate a fallos y optimiza el rendimiento de tus equipos con estrategias de mantenimiento predictivo basadas en datos en tiempo real.",
  description2: "El mantenimiento predictivo reduce tiempos de inactividad y costos de reparación al detectar anomalías antes de que se conviertan en fallos críticos.",
  description3: "Implementamos soluciones avanzadas que integran sensores IoT, machine learning y SCADA para monitorear continuamente el estado de tus activos industriales.",
  description4: "Optimiza la planificación del mantenimiento y maximiza la disponibilidad operativa con alertas automatizadas y análisis de tendencias en tus sistemas.",
  advantagesTitle: "Beneficios del mantenimiento predictivo:",
  advantages: [
    "Reducción de tiempos de inactividad: Evita paradas no programadas y mejora la eficiencia operativa.",
    "Disminución de costos de mantenimiento: Reduce reparaciones costosas con detección temprana de fallos.",
    "Mayor vida útil de los equipos: Optimiza el uso y rendimiento de maquinaria crítica.",
    "Alertas automatizadas: Recibe notificaciones en tiempo real sobre posibles fallos y mantenimientos requeridos.",
    "Integración con SCADA y ERP: Conecta datos en tiempo real para una gestión centralizada del mantenimiento.",
    "Análisis predictivo avanzado: Identifica patrones de desgaste y optimiza la planificación de mantenimiento."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo el mantenimiento predictivo puede optimizar tu operación.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Reduce tiempos de inactividad con estrategias de mantenimiento predictivo. Agenda una sesión y optimiza la gestión de tus activos industriales."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
