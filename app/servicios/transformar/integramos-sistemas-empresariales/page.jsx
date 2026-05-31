import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Integración de sistemas empresariales",
  description1: "Conectamos sistemas que hoy trabajan aislados para que ventas, operación, inventario, administración y dirección compartan información confiable.",
  description2: "Identificamos qué sistema debe mandar, qué datos deben sincronizarse y qué procesos no pueden depender de copiar y pegar.",
  description3: "Construimos integraciones por etapas, priorizando los flujos que más afectan la operación diaria.",
  description4: "La meta es evitar islas de información y crear una operación que pueda crecer sin perder control.",
  advantages: ["Una sola fuente confiable: Reduce versiones distintas del mismo dato.", "Menos capturas manuales: Disminuye errores y tiempo perdido.", "Áreas conectadas: Ventas, inventario, operación y administración trabajan con la misma base.", "Trazabilidad: Cada movimiento importante deja historial.", "Mejor soporte: Las fallas son más fáciles de detectar y corregir.", "Crecimiento ordenado: La integración deja espacio para nuevas etapas."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
