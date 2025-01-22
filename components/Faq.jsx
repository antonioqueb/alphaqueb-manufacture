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
    question: "¿Qué tipo de soluciones ofrece Alphaqueb para la industria manufacturera?",
    answer: "Ofrecemos soluciones de automatización industrial, implementación de sistemas SCADA, y consultoría en transformación digital, todo diseñado específicamente para el sector manufacturero. Buscamos reducir costos, aumentar la productividad y mejorar la calidad en tus procesos.",
  },
  {
    question: "¿Cómo pueden ayudar los sistemas SCADA a mi planta de producción?",
    answer: "Los sistemas SCADA permiten el monitoreo y control en tiempo real de tus procesos industriales, optimizando la supervisión, reduciendo tiempos de inactividad hasta un 40%, y proporcionando datos clave para la toma de decisiones.",
  },
  {
     question: "¿Qué tipo de automatización industrial ofrecen?",
    answer: "Diseñamos soluciones de automatización personalizadas que incrementan la capacidad de producción, mejoran la consistencia y reducen costos operativos en tus líneas de producción.",
  },
    {
    question: "¿Cómo funciona su consultoría en transformación digital para manufactura?",
     answer: "Acompañamos a tu empresa en el proceso de digitalización de procesos operativos, comerciales y administrativos, mejorando la toma de decisiones y la eficiencia global a través de estrategias personalizadas."
    },
  {
    question: "¿Cómo puedo obtener una cotización para mi proyecto?",
     answer: "Puedes contactarnos a través de nuestro formulario en la página web o enviarnos un email. Evaluaremos tus necesidades y te proporcionaremos una cotización personalizada en un plazo breve."
   },
  {
    question: "¿En qué países tienen presencia?",
    answer: "Tenemos presencia en México, Estados Unidos, Europa y Latinoamérica, lo que nos permite ofrecer soluciones sin fronteras.",
  },
   {
    question: "¿Cómo garantizan la seguridad de mi información?",
    answer: "La seguridad y privacidad de tu información son prioritarias. Protegemos tus datos con el máximo rigor en cada fase de nuestros procesos, con sistemas de seguridad multicapa y una política estricta de confidencialidad.",
  },
  {
    question: "¿Qué pasa si no estoy satisfecho con el servicio?",
    answer: "Nos comprometemos a trabajar contigo hasta alcanzar tu satisfacción. Si, a pesar de nuestros esfuerzos, no estás satisfecho, buscaremos soluciones alternativas o la devolución de tu inversión, según el caso.",
  },
   {
    question: "¿Cómo puedo contactar a soporte técnico?",
    answer: "Puedes solicitar soporte técnico a través de nuestro chat en vivo en la página web o enviando un email a soporte@alphaqueb.online. Estamos aquí para ayudarte."
  },
  {
    question: "¿Qué los diferencia de otras empresas de consultoría para manufactura?",
    answer: "Nuestro enfoque exclusivo en el sector manufacturero, la atención personalizada y cercana, nuestra comprensión profunda de los procesos industriales, y nuestra capacidad de ofrecer soluciones escalables y resilientes nos diferencian. No vendemos sistemas, creamos resultados a tu medida."
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