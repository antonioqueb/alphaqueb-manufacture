import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Integración de robots y controles industriales",
  description1: "Integramos equipos y controles cuando una tarea requiere precisión, repetición o seguridad mayor a la que permite el proceso manual.",
  description2: "Antes de proponer equipo, revisamos el proceso, el volumen, el riesgo y el retorno operativo esperado.",
  description3: "Diseñamos la integración pensando en operación diaria, mantenimiento y trazabilidad.",
  description4: "La meta no es presumir tecnología: es resolver un cuello de botella real.",
  advantages: ["Precisión: Tareas repetitivas con menor variación.", "Seguridad: Menor exposición del personal a tareas riesgosas.", "Trazabilidad: Registro de operación y eventos.", "Control: Integración con validaciones del proceso.", "Mantenimiento: Criterios claros para soporte y revisión.", "Escalabilidad: Crecimiento gradual según necesidad."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
