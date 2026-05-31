import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Optimización de recursos y costos operativos",
  description1: "Identificamos desperdicios, tiempos muertos y uso ineficiente de recursos para diseñar mejoras medibles.",
  description2: "No partimos de suposiciones: revisamos procesos, datos y responsables para encontrar dónde realmente se pierde valor.",
  description3: "Diseñamos automatizaciones, reportes o integraciones según el origen del problema.",
  description4: "La optimización debe poder sostenerse después de implementada, por eso dejamos seguimiento y soporte.",
  advantages: ["Variance: Detecta desviaciones de material, tiempo o información contra la línea base.", "Prioridades claras: Ataca primero lo que más pesa.", "Seguimiento: Mide si la mejora se sostiene.", "Menos improvisación: Procesos definidos para casos recurrentes.", "KPI ownership: Responsables claros por indicador, dato y decisión.", "Soporte continuo: Ajustes conforme la operación madura."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
