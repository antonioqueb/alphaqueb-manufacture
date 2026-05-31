import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Seguridad para sistemas industriales",
  description1: "Protegemos sistemas operativos críticos con controles de acceso, segmentación, respaldos y criterios de continuidad.",
  description2: "Analizamos qué sistemas están expuestos, quién entra, qué datos se mueven y qué pasa si algo falla.",
  description3: "Proponemos medidas realistas para reducir riesgo sin paralizar la operación.",
  description4: "La seguridad debe cuidar la continuidad: no complicar tanto el sistema que el equipo termine evadiéndolo.",
  advantages: ["Accesos controlados: Usuarios y permisos claros.", "Menor exposición: Separación de áreas y sistemas críticos.", "Respaldo: Información protegida ante errores o incidentes.", "Continuidad: Plan de respuesta si algo falla.", "Documentación: Configuración y responsables claros.", "Operación segura: Seguridad alineada con el día a día."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
