import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Digitalización de procesos productivos",
  description1: "Llevamos procesos de producción, calidad y trazabilidad a un sistema claro cuando las hojas, capturas manuales o sistemas separados ya no alcanzan.",
  description2: "Mapeamos cómo se genera, transforma y libera información dentro de tu operación productiva.",
  description3: "Diseñamos flujos digitales para capturar datos, validar pasos, generar documentos y dar seguimiento a excepciones.",
  description4: "El objetivo es que producción pueda operar con menos ambigüedad y dirección pueda ver lo que está pasando.",
  advantages: ["Trazabilidad productiva: Cada etapa deja evidencia consultable.", "Calidad documentada: Inspecciones, liberaciones y hallazgos en un mismo flujo.", "Menos archivos paralelos: La información vive en el proceso, no en carpetas sueltas.", "Seguimiento de excepciones: Acciones correctivas y problemas visibles.", "Reportes claros: Dirección puede revisar avances y desviaciones.", "Mejora gradual: Se implementa por etapas para no detener la operación."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
