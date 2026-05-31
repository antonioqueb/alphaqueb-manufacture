import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Seguridad e infraestructura digital",
  description1: "Fortalecemos la base técnica para que tus sistemas operen con estabilidad, accesos controlados y menor riesgo de interrupciones.",
  description2: "Revisamos servidores, respaldos, accesos, disponibilidad y puntos débiles que puedan afectar la continuidad del negocio.",
  description3: "Diseñamos medidas de seguridad y operación acordes con el tamaño real de tu empresa, sin sobredimensionar la infraestructura.",
  description4: "La infraestructura debe sostener el sistema, no convertirse en otra fuente de incertidumbre.",
  advantages: ["Continuidad operativa: Menos riesgo de caídas que detengan procesos críticos.", "Accesos controlados: Cada usuario entra solo a lo que necesita.", "Respaldo y recuperación: Información protegida ante errores o incidentes.", "Base escalable: Preparada para nuevas etapas del sistema.", "Menos dependencia informal: Documentación y administración clara.", "Mejor soporte: Incidentes más fáciles de diagnosticar."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
