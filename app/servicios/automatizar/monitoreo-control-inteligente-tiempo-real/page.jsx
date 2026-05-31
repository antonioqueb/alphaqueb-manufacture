import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Monitoreo y control en tiempo real",
  description1: "Diseñamos monitoreo para operaciones que necesitan detectar condiciones críticas sin esperar a que alguien cierre un reporte.",
  description2: "Identificamos qué variables importan, cuándo deben alertar y quién debe actuar.",
  description3: "Creamos vistas, alertas y reportes para que el seguimiento sea práctico y accionable.",
  description4: "El monitoreo sirve cuando provoca decisiones, no cuando solo acumula datos.",
  advantages: ["Visibilidad inmediata: Estado de procesos clave.", "Alertas útiles: Notificaciones con criterio operativo.", "Responsables claros: Cada desviación puede asignarse.", "Historial: Datos consultables para análisis.", "Control: Ajustes basados en información real.", "Mejora continua: Aprende de eventos repetidos."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
