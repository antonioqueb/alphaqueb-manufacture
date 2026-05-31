import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Automatización de procesos administrativos y operativos",
  description1: "Reducimos tareas repetitivas, capturas dobles y pasos manuales que frenan a tu equipo cuando la empresa ya creció.",
  description2: "Analizamos cómo se mueve la información entre áreas y dónde se generan esperas, errores o retrabajo.",
  description3: "Automatizamos flujos con validaciones, responsables, documentos y seguimiento para que el proceso sea claro.",
  description4: "La automatización se diseña alrededor de usuarios reales, no alrededor de una pantalla que nadie termina usando.",
  advantages: ["Menos retrabajo: Elimina capturas duplicadas y revisiones innecesarias.", "Responsables claros: Cada paso tiene dueño y seguimiento.", "Procesos medibles: La operación deja rastro y puede mejorarse.", "Adopción real: Interfaces pensadas para el equipo que opera todos los días.", "Control interno: Reglas y validaciones reducen errores críticos.", "Escalabilidad: El flujo puede crecer sin rehacer la operación desde cero."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
