import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Mantenimiento preventivo basado en datos",
  description1: "Ayudamos a detectar señales de desgaste, fallas recurrentes y condiciones anormales antes de que impacten la producción.",
  description2: "Revisamos qué equipos son críticos y qué información existe para anticipar problemas.",
  description3: "Diseñamos tableros, alertas y registros para que mantenimiento pueda actuar con evidencia.",
  description4: "La meta es reducir urgencias y construir disciplina operativa alrededor de los activos clave.",
  advantages: ["Equipos críticos visibles: Prioriza lo que realmente puede detener la operación.", "Alertas tempranas: Detecta desviaciones antes de una falla mayor.", "Historial de eventos: Documenta patrones y decisiones.", "Mejor planeación: Mantenimiento con contexto, no solo calendario.", "Menos urgencias: Reduce correcciones improvisadas.", "Decisiones con evidencia: Justifica refacciones, ajustes o paros programados."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
