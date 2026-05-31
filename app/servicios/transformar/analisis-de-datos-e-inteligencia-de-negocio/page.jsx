import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Tableros y análisis para dirección",
  description1: "Convertimos datos dispersos en reportes claros para que dirección pueda decidir sin esperar capturas manuales ni perseguir archivos.",
  description2: "Revisamos qué información existe, quién la captura, dónde se duplica y qué decisiones dependen de ella.",
  description3: "Diseñamos tableros y reportes con indicadores entendibles para operación, administración y dirección.",
  description4: "El objetivo no es llenar pantallas: es que cada dato ayude a detectar desviaciones, priorizar trabajo o tomar mejores decisiones.",
  advantages: ["Indicadores claros: Métricas entendibles para dirección y responsables de proceso.", "Datos confiables: Reducimos versiones diferentes del mismo dato.", "Seguimiento operativo: Visualiza pendientes, avances y puntos críticos.", "Menos reportes manuales: Automatiza consolidaciones que hoy consumen tiempo.", "Decisiones oportunas: Detecta problemas antes de que se vuelvan urgencias.", "Mejora continua: Usa datos históricos para ajustar procesos."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
