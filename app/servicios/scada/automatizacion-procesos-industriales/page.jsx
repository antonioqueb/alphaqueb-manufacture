import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Automatización de procesos industriales",
  description1: "Automatizamos procesos donde la operación necesita reducir variabilidad, errores manuales o tiempos muertos.",
  description2: "Primero revisamos qué proceso realmente conviene automatizar y qué parte debe seguir bajo criterio humano.",
  description3: "Diseñamos controles, validaciones y flujos que ayudan a operar con mayor consistencia.",
  description4: "La automatización se conecta con reportes y seguimiento para que no sea una caja negra.",
  advantages: ["Consistencia: Menos variaciones entre turnos o responsables.", "Menos errores: Validaciones en pasos críticos.", "Control visible: Lo automatizado puede revisarse y medirse.", "Mejor respuesta: Alertas ante condiciones fuera de rango.", "Integración: Conexión con reportes o sistemas internos.", "Escalabilidad: Automatización por etapas según prioridad."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
