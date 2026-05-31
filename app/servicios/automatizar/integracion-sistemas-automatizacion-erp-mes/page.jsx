import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Integración de automatización con sistemas empresariales",
  description1: "Conectamos automatizaciones con los sistemas que ya usa tu empresa para evitar islas de información.",
  description2: "Revisamos qué datos deben viajar entre áreas, quién los valida y qué reglas aplican.",
  description3: "Construimos integraciones sostenibles para que la automatización no dependa de capturas manuales posteriores.",
  description4: "El resultado es una operación más conectada y menos vulnerable a errores humanos.",
  advantages: ["Flujos conectados: La información viaja entre áreas.", "Menos doble captura: Reduce errores y retrabajo.", "Reglas claras: Validaciones consistentes.", "Historial: Cada operación deja rastro.", "Reportes útiles: Dirección ve datos más confiables.", "Soporte: Integraciones documentadas y mantenibles."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
