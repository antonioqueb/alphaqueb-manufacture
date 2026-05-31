import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Integración con sistemas empresariales",
  description1: "Conectamos la información de planta con procesos administrativos para que producción, inventario y dirección trabajen con datos consistentes.",
  description2: "Definimos qué información debe subir, qué debe bajar y dónde se debe validar.",
  description3: "Construimos integraciones por etapas para evitar dependencias frágiles o flujos imposibles de mantener.",
  description4: "La integración correcta evita capturas dobles y permite que los datos de operación sí sirvan para decidir.",
  advantages: ["Datos conectados: La operación no queda aislada de administración.", "Menos captura doble: Reduce errores y tiempos muertos.", "Inventario alineado: Movimientos de producción con impacto administrativo.", "Trazabilidad: Historial entre planta y sistema empresarial.", "Reportes útiles: Dirección ve información más cercana a la realidad.", "Mantenimiento simple: Integraciones documentadas y sostenibles."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
