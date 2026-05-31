import ServiceIndexPage from "@/components/ServiceIndexPage";

const COPY = {
  title: "Automatización operativa sin romper lo que ya funciona",
  description1: "Automatizamos procesos críticos cuando el trabajo manual ya genera errores, retrasos o falta de visibilidad. La prioridad no es automatizar por moda, sino construir control donde la operación lo necesita.",
  advantages: ["Menos errores manuales: Reducimos capturas repetidas, pasos ambiguos y dependencias de memoria operativa.", "Flujos más claros: Convertimos procesos críticos en rutas visibles, medibles y fáciles de seguir.", "Ahorro de tiempo: Quitamos carga operativa donde el equipo repite tareas que un sistema puede resolver mejor.", "Control por etapas: Automatizamos lo que tiene sentido primero y dejamos espacio para crecer sin rehacer todo.", "Integración de información: Conectamos datos de operación, inventario, administración o proveedores cuando el flujo lo requiere.", "Adopción real: Diseñamos pensando en las personas que usarán el sistema todos los días."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};
const SERVICES = [
  {
    slug: "desarrollo-implementacion-sistemas-automatizacion",
    name: "Desarrollo e implementación de automatizaciones"
  },
  {
    slug: "integracion-sistemas-automatizacion-erp-mes",
    name: "Integración de automatización con sistemas empresariales"
  },
  {
    slug: "integracion-robots-industriales-sistemas-control",
    name: "Integración de robots y controles industriales"
  },
  {
    slug: "monitoreo-control-inteligente-tiempo-real",
    name: "Monitoreo y control en tiempo real"
  },
  {
    slug: "reduccion-costos-operativos-optimizacion-recursos",
    name: "Optimización de recursos y costos operativos"
  }
];

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceIndexPage copy={COPY} services={SERVICES} basePath="/servicios/automatizar" />;
}
