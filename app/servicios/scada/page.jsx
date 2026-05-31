import ServiceIndexPage from "@/components/ServiceIndexPage";

const COPY = {
  title: "Supervisión y control industrial para operaciones reales",
  description1: "Cuando producción, calidad y mantenimiento necesitan ver lo que pasa sin esperar reportes del día siguiente, construimos tableros, controles y trazabilidad para operar con información clara.",
  advantages: ["Visibilidad en tiempo real: Tu equipo puede saber qué ocurre en planta, qué está detenido y qué requiere atención.", "Calidad documentada: La evidencia queda asociada al proceso y lista para revisión interna o externa.", "Menos dependencia de hojas sueltas: Los datos críticos dejan de vivir dispersos entre archivos, correos y capturas manuales.", "Alertas y seguimiento: Identificamos condiciones fuera de rango antes de que se vuelvan problemas mayores.", "Conexión con operación: Integramos información de planta con procesos administrativos cuando el negocio lo requiere.", "Mejora continua: El sistema permite medir, ajustar y madurar la operación por etapas."],
  costDetails: "La entrada es un diagnóstico pagado de 30 a 40 horas. Primero entendemos procesos, sistemas actuales, datos y responsables; después definimos alcance, ruta y precio del proyecto."
};
const SERVICES = [
  {
    slug: "automatizacion-procesos-industriales",
    name: "Automatización de procesos industriales"
  },
  {
    slug: "implementacion-configuracion-sistemas-scada",
    name: "Configuración de sistemas de supervisión industrial"
  },
  {
    slug: "mantenimiento-predictivo-reduccion-tiempos-inactividad",
    name: "Mantenimiento preventivo basado en datos"
  },
  {
    slug: "ciberseguridad-proteccion-datos-en-scada",
    name: "Seguridad para sistemas industriales"
  },
  {
    slug: "integracion-scada-erp-mes-sistemas-gestion",
    name: "Integración con sistemas empresariales"
  }
];

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceIndexPage copy={COPY} services={SERVICES} basePath="/servicios/scada" />;
}
