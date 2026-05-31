import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Desarrollo e implementación de automatizaciones",
  description1: "Creamos automatizaciones para procesos donde el trabajo manual ya provoca errores, retrasos o falta de control.",
  description2: "Analizamos primero qué pasos deben automatizarse y cuáles requieren criterio humano.",
  description3: "Construimos flujos con reglas, validaciones y evidencia para que el proceso sea más estable.",
  description4: "La automatización se entrega con acompañamiento para que el equipo la adopte y pueda sostenerla.",
  advantages: ["Menos tareas repetitivas: Libera tiempo operativo.", "Menos errores: Validaciones en pasos críticos.", "Flujo claro: Cada paso queda definido.", "Evidencia: El sistema deja historial.", "Adopción: Diseñado para usuarios reales.", "Crecimiento: Se amplía por etapas."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
