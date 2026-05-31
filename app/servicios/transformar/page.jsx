import ServiceIndexPage from "@/components/ServiceIndexPage";

const COPY = {
  title: "Sistemas empresariales a la medida de tu operación",
  description1: "Para empresas que ya crecieron con procesos propios, sistemas aislados o herramientas que ya no alcanzan. Ordenamos, integramos y construimos alrededor de la forma real en que opera tu negocio.",
  advantages: ["Claridad operativa: Documentamos cómo trabaja hoy tu empresa y dónde los sistemas actuales están frenando el crecimiento.", "Integración de áreas: Conectamos ventas, operación, inventario, administración y dirección para evitar islas de información.", "Menos retrabajo: Reducimos capturas duplicadas, archivos paralelos y decisiones tomadas con datos incompletos.", "Sistema flexible: Adaptamos procesos clave sin obligarte a romper lo que sí funciona en tu operación.", "Decisiones con información: Convertimos datos dispersos en reportes e indicadores entendibles para dirección.", "Soporte después del arranque: Acompañamos la evolución del sistema conforme aparecen nuevos procesos y necesidades."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};
const SERVICES = [
  {
    slug: "analisis-de-datos-e-inteligencia-de-negocio",
    name: "Tableros y análisis para dirección"
  },
  {
    slug: "automatizacion-procesos-administrativos-operativos",
    name: "Automatización de procesos administrativos y operativos"
  },
  {
    slug: "integramos-sistemas-empresariales",
    name: "Integración de sistemas empresariales"
  },
  {
    slug: "seguridad-infraestructura-digital",
    name: "Seguridad e infraestructura digital"
  },
  {
    slug: "transformamos-tus-procesos-productivos",
    name: "Digitalización de procesos productivos"
  }
];

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceIndexPage copy={COPY} services={SERVICES} basePath="/servicios/transformar" />;
}
