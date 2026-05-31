import ServiceIndexPage from "@/components/ServiceIndexPage";

const COPY = {
  title: "Transformación Digital para Manufactura 4.0",
  description1: "Nuestra consultoría te ayuda a digitalizar procesos clave de tu negocio para mejorar la toma de decisiones, aumentar la eficiencia y garantizar la sostenibilidad de tu empresa en un mundo cada vez más tecnológico. No importa el tamaño de tu empresa, estamos aquí para ayudarte a alcanzar una ventaja competitiva duradera.",
  advantages: [
      "Mejora en la toma de decisiones: Obtén acceso a datos en tiempo real y análisis avanzados que te permitirán tomar decisiones más informadas, reduciendo riesgos e identificando nuevas oportunidades de negocio.",
      "Optimización de procesos: Automatiza tareas repetitivas y elimina ineficiencias en procesos operativos, comerciales y administrativos, lo que aumenta la productividad de tu equipo y reduce costos.",
      "Aumento de la eficiencia global: Integra plataformas y herramientas digitales para mejorar la coordinación entre equipos, optimizando la gestión de proyectos y recursos en tiempo récord.",
      "Impulso a la innovación y agilidad: Implementa tecnologías modernas y adopta metodologías flexibles que permiten a tu empresa responder rápidamente a los cambios del mercado y las demandas de los clientes.",
      "Mejora de la experiencia del cliente: Ofrece soluciones digitales que optimicen la interacción con tus clientes, proporcionando servicios más rápidos, personalizados y efectivos que aumentan su satisfacción y fidelidad.",
      "Integración total: Conecta sistemas empresariales como CRM, ERP y MES para obtener una visión integral de tu negocio, facilitando la interoperabilidad y mejorando la gestión de todas las áreas de tu empresa."
  ]
};
const SERVICES = [
  {
    "slug": "analisis-de-datos-e-inteligencia-de-negocio",
    "name": "Análisis de Datos e Inteligencia de Negocio"
  },
  {
    "slug": "automatizacion-procesos-administrativos-operativos",
    "name": "Automatización de Procesos Administrativos y Operativos"
  },
  {
    "slug": "integramos-sistemas-empresariales",
    "name": "Integración de Sistemas Empresariales (ERP, MES y CRM)"
  },
  {
    "slug": "seguridad-infraestructura-digital",
    "name": "Seguridad y Gestión de Infraestructura Digital"
  },
  {
    "slug": "transformamos-tus-procesos-productivos",
    "name": "Digitalización de Procesos de Producción"
  }
];

export const metadata = { title: `${COPY.title} | Alphaqueb` };

export default function Page() {
  return <ServiceIndexPage copy={COPY} services={SERVICES} basePath="/servicios/transformar" />;
}
