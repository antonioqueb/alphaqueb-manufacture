import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Configuración de sistemas de supervisión industrial",
  description1: "Creamos vistas operativas para que planta, calidad y dirección sepan qué ocurre sin esperar reportes manuales.",
  description2: "Definimos qué variables importan, dónde se capturan y cómo deben visualizarse para tomar decisiones.",
  description3: "Configuramos pantallas, alertas, historiales y reportes pensando en usuarios reales.",
  description4: "El objetivo es visibilidad accionable: no más pantallas bonitas que nadie usa.",
  advantages: ["Visibilidad: Estado de operación consultable.", "Alertas: Condiciones críticas detectadas a tiempo.", "Historial: Datos disponibles para análisis posterior.", "Reportes: Información clara para revisión y dirección.", "Usabilidad: Pantallas diseñadas para operadores reales.", "Control: Menos dependencia de observación manual."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
