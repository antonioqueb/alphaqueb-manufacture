import ServiceDetailPage from "@/components/ServiceDetailPage";

const COPY = {
  title: "Ciberseguridad y Protección de Datos en SCADA",
  description1: "Protege la infraestructura crítica de tu empresa con soluciones avanzadas de ciberseguridad para sistemas SCADA.",
  description2: "Reducimos vulnerabilidades y protegemos redes industriales frente a ataques cibernéticos mediante estrategias de seguridad robustas y proactivas.",
  description3: "Implementamos firewalls industriales, segmentación de redes y cifrado de datos para garantizar la integridad y disponibilidad de la información operativa.",
  description4: "Monitoreamos continuamente amenazas potenciales y realizamos auditorías de seguridad para fortalecer la resiliencia de tu sistema SCADA.",
  advantagesTitle: "Beneficios de la ciberseguridad en SCADA:",
  advantages: [
    "Protección contra ciberataques: Defiende tu infraestructura crítica de accesos no autorizados y amenazas avanzadas.",
    "Cumplimiento normativo: Garantiza que tu empresa cumpla con regulaciones de seguridad industrial y estándares internacionales.",
    "Monitoreo continuo: Detección en tiempo real de actividades sospechosas y respuesta automatizada a incidentes.",
    "Integridad y disponibilidad de datos: Asegura la confiabilidad de la información operativa y evita pérdidas de datos.",
    "Control de accesos: Implementamos autenticación multifactor y permisos granulares para mitigar riesgos internos.",
    "Evaluación y mitigación de vulnerabilidades: Identificamos puntos débiles en la red y aplicamos estrategias para reforzar la seguridad."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos la seguridad de tu infraestructura SCADA y te ayudaremos a fortalecer la protección de tus datos.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Protege tus sistemas SCADA con estrategias avanzadas de ciberseguridad. Agenda una sesión y refuerza la seguridad de tu empresa."
};

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceDetailPage copy={COPY} />;
}
