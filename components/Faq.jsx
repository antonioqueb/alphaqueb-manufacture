import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Definir constantes para los textos de las respuestas
const FAQ_ITEMS = [
  {
    question: "¿Qué tipo de sistemas empresariales implementan?",
    answer: "Implementamos ERP, CRM, sistemas SCADA, y soluciones personalizadas orientadas a optimizar procesos industriales, comerciales y administrativos, adaptándonos a la medida de tu empresa."
  },
  {
    question: "¿Cuánto tiempo tarda en implementarse un sistema nuevo?",
    answer: "El tiempo promedio oscila entre 4 y 12 meses dependiendo del tamaño, la complejidad del proyecto y las integraciones necesarias. Realizamos un análisis inicial para darte un cronograma exacto."
  },
  {
    question: "¿Mi empresa debe detener operaciones durante la implementación?",
    answer: "No es necesario detener operaciones. Nuestras implementaciones se planifican para minimizar el impacto operativo, realizando migraciones graduales o programadas en horas no productivas."
  },
  {
    question: "¿Qué debo tener listo antes de comenzar una implementación de sistema?",
    answer: "Es recomendable contar con documentación básica de procesos internos, asignar responsables internos, y definir claramente objetivos y expectativas del proyecto."
  },
  {
    question: "¿Cómo puedo saber si necesito un ERP o un CRM?",
    answer: "Si necesitas optimizar operaciones internas, controlar inventarios o producción, un ERP es ideal. Si buscas mejorar relaciones comerciales, ventas y atención al cliente, un CRM es más apropiado. Podemos evaluar juntos qué conviene más."
  },
  {
    question: "¿Qué tan seguros estarán mis datos con los sistemas que implementan?",
    answer: "Garantizamos seguridad total con cifrado avanzado, control de accesos por rol, auditorías periódicas y cumplimiento estricto de normativas internacionales de privacidad y protección de datos."
  },
  {
    question: "¿Puedo integrar su sistema con otras aplicaciones que ya tengo funcionando?",
    answer: "Sí, nuestras soluciones son abiertas y flexibles, permitiendo integraciones con múltiples plataformas y aplicaciones existentes, desde sistemas contables hasta herramientas especializadas."
  },
  {
    question: "¿Qué sucede con mis datos actuales al implementar un sistema nuevo?",
    answer: "Nos encargamos de la migración completa y segura de tus datos existentes hacia la nueva plataforma, garantizando integridad, disponibilidad y continuidad operativa desde el día uno."
  },
  {
    question: "¿Proveen capacitación para mi equipo después de implementar el sistema?",
    answer: "Sí, realizamos capacitaciones completas y personalizadas, adaptadas al rol y funciones de cada usuario, asegurando una adopción efectiva del nuevo sistema por parte de tu equipo."
  },
  {
    question: "¿Qué tipo de soporte ofrecen después de la implementación?",
    answer: "Ofrecemos soporte técnico continuo a través de diferentes canales, incluyendo asistencia remota, seguimiento personalizado, y mejoras continuas para asegurar que tu sistema funcione siempre de manera óptima."
  },
  {
    question: "¿Qué criterios debo considerar al elegir un sistema empresarial?",
    answer: "Debes considerar la escalabilidad del sistema, facilidad de uso, soporte técnico disponible, costos de implementación y mantenimiento, además de la capacidad para integrarse con otros sistemas que ya utilizas."
  },
  {
    question: "¿Es posible personalizar un sistema una vez implementado?",
    answer: "Sí, ofrecemos servicios de personalización continua para adaptar el sistema a nuevas necesidades o procesos que puedan surgir con el tiempo, garantizando siempre la máxima eficiencia operativa."
  },
  {
    question: "¿Cómo puedo asegurar una buena adopción del nuevo sistema por parte de mi equipo?",
    answer: "La clave está en una capacitación efectiva, comunicación clara de beneficios, acompañamiento durante la transición y un soporte técnico receptivo para resolver rápidamente dudas o problemas."
  },
  {
    question: "¿Qué hago si experimento problemas técnicos tras la implementación?",
    answer: "Nuestro equipo de soporte técnico está disponible para atender cualquier problema inmediatamente. Puedes comunicarte con nosotros por múltiples canales para asegurar una solución rápida y efectiva."
  },
  {
    question: "¿Cuáles son los principales beneficios de digitalizar mis procesos empresariales?",
    answer: "Los principales beneficios incluyen mayor productividad, reducción de errores humanos, mejor control y visibilidad de operaciones, optimización de costos y una ventaja competitiva importante en tu sector."
  },
  {
    question: "¿Ofrecen soluciones en la nube o solo locales?",
    answer: "Ofrecemos soluciones tanto en la nube como locales, dependiendo de tus necesidades específicas, infraestructura disponible y preferencias operativas."
  },
  {
    question: "¿Cuánto cuesta implementar un sistema empresarial?",
    answer: "El costo varía según la escala y complejidad del proyecto, pero realizamos una evaluación inicial gratuita para ofrecerte una cotización precisa adaptada a tus necesidades específicas."
  },
  {
    question: "¿Qué garantías ofrecen sobre la funcionalidad del sistema implementado?",
    answer: "Garantizamos que nuestros sistemas cumplirán con los objetivos establecidos durante la consultoría inicial. Si existe algún desajuste, trabajamos sin costo adicional hasta cumplir tus expectativas."
  },
  {
    question: "¿Es necesario contar con personal técnico especializado interno para gestionar el sistema?",
    answer: "No es imprescindible. Nuestros sistemas están diseñados para ser amigables con usuarios sin formación técnica avanzada, y además ofrecemos soporte y capacitación continua para facilitar la gestión."
  },
  {
    question: "¿Qué experiencia tiene Alphaqueb en implementaciones exitosas?",
    answer: "Contamos con amplia experiencia y casos de éxito en múltiples sectores industriales, comerciales y administrativos, con empresas que han mejorado significativamente sus resultados operativos tras nuestras implementaciones."
  },
  {
    question: "¿Cuáles son las fases típicas de una implementación de sistemas empresariales?",
    answer: "Las fases incluyen diagnóstico inicial, planificación detallada, personalización del sistema, migración de datos, capacitación del personal, puesta en marcha y soporte continuo posterior a la implementación."
  },
  {
    question: "¿Cómo miden el éxito de una implementación?",
    answer: "Medimos el éxito basado en indicadores específicos (KPIs) definidos conjuntamente con tu empresa, tales como mejora en eficiencia operativa, reducción de costos, satisfacción del usuario final, y cumplimiento de objetivos estratégicos."
  },
  {
    question: "¿Pueden realizar una demostración del sistema antes de contratarlo?",
    answer: "Sí, realizamos demostraciones completas para que puedas evaluar las funcionalidades y beneficios del sistema antes de tomar cualquier decisión de inversión."
  },
  {
    question: "¿Qué ocurre si necesito hacer ajustes en el alcance del proyecto después de iniciado?",
    answer: "Trabajamos con metodologías ágiles que permiten ajustes flexibles durante el proyecto, adaptándonos siempre a nuevas necesidades o cambios de prioridades sin perder eficiencia."
  },
  {
    question: "¿Necesito infraestructura especial para implementar sus soluciones?",
    answer: "No necesariamente. Ofrecemos tanto soluciones en la nube que no requieren infraestructura propia, como opciones locales que pueden adaptarse a tu infraestructura existente."
  },
  {
    question: "¿Ofrecen soluciones móviles o acceso remoto?",
    answer: "Sí, todas nuestras soluciones permiten acceso móvil y remoto seguro, facilitando la gestión operativa desde cualquier lugar y en tiempo real."
  },
  {
    question: "¿Cómo gestionan los riesgos durante la implementación?",
    answer: "Contamos con una metodología estricta de gestión de riesgos que incluye identificación temprana, análisis constante y acciones preventivas para garantizar que los proyectos avancen según lo planeado."
  },
  {
    question: "¿Qué documentos recibo al finalizar la implementación?",
    answer: "Te entregamos documentación técnica completa, manuales de usuario, guías de operación, y reportes detallados del proyecto para asegurar autonomía operativa y continuidad."
  },
  {
    question: "¿Hay costos ocultos que debería considerar en la implementación?",
    answer: "No. Desde el inicio te proporcionamos una cotización clara y detallada, especificando todos los costos relacionados para evitar sorpresas durante o después del proyecto."
  },
  {
    question: "¿Qué pasa con el soporte después del primer año?",
    answer: "Después del primer año puedes optar por renovar el soporte técnico bajo un esquema anual, mensual o según demanda, siempre adaptado a tus necesidades específicas."
  }

];

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12">
      <div className="w-full">
        <CardHeader className="mb-10 p-0 justify-start ">
          <CardTitle className="text-3xl xl:text-5xl font-semibold dark:text-zinc-50">Preguntas Frecuentes</CardTitle>
          <CardDescription className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
            Si tienes alguna pregunta personalizada,{" "}
            <a href="#contacto" className="text-custom-orange hover:underline">
              contacta soporte
            </a>{" "}
            para recibir respuestas.
          </CardDescription>
        </CardHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {[0, 1].map((colIndex) => (
            <div key={colIndex}>
              <Accordion type="single" collapsible>
                {FAQ_ITEMS.slice(colIndex * 2, colIndex * 2 + 2).map((item, index) => (
                  <AccordionItem key={index} value={`item-${colIndex * 2 + index + 1}`}>
                    <AccordionTrigger className="text-lg md:text-xl text-left dark:text-white">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="mt-2 text-base md:text-lg text-left text-zinc-600 dark:text-zinc-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}