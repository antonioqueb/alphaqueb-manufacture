import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

// Diccionario de textos (copy)
const copy = {
  title: "Innovación en Manufactura: Soluciones TI Industriales",
  description: "Alphaqueb Consulting: Automatización y digitalización para manufactureras. Reducimos costos, aumentamos productividad y mejoramos la calidad. ¿Listo para crecer? Contáctanos.",
  bannerAlt: "Consultoría tecnológica - Impulsa la eficiencia y competitividad de tu empresa manufacturera con Alphaqueb Consulting",
};
export default function Banner() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState(null);

  const handleSend = async () => {
    // Validar que el número de teléfono y el nombre no estén vacíos
    if (!phoneNumber || !name) {
      setStatus('empty');
      return;
    }

    const data = {
      name: name,
      phone_number: phoneNumber,
      user_id: 2,     // ID del usuario
      company_id: 1,  // ID de la empresa
    };

    try {
      const response = await fetch('https://contact.alphaqueb.com/create_contact_phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Agrega cualquier encabezado adicional si es necesario
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el número de teléfono');
      }

      const result = await response.json();
      console.log('Respuesta de la API:', result);
      setStatus('success');
      // Limpiar el número de teléfono y el nombre después de enviar
      setPhoneNumber("");
      setName("");
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="w-full flex flex-col lg:flex-row xl:pb-2">
      <div className="w-full lg:w-7/12 py-2 flex flex-col justify-center">
        <CardHeader className="text-start animate-fade-in-up px-0">
          <CardTitle className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-zinc-800 mb-3 dark:text-zinc-100">
            {copy.title}
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-zinc-800 mb-3 text-balance dark:text-zinc-100 lg:pr-16">
            {copy.description}
          </CardDescription>
          <div className="flex flex-col md:flex-row items-center pt-12 space-y-4 md:space-y-0 md:space-x-4 w-full">
            {/* Input de Nombre */}
            <input
              type="text"
              className="w-56 px-4 py-2 h-12 rounded-lg shadow-md border border-zinc-900 dark:border-zinc-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 dark:bg-zinc-800 text-zinc-900  dark:text-white"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* Input de Teléfono */}
            <input
              type="tel"
              className="w-56 px-4 py-2 h-12 rounded-lg shadow-md border border-zinc-900 dark:border-zinc-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 dark:bg-zinc-800 text-zinc-900  dark:text-white"
              placeholder="Teléfono"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {/* Botón */}
            <button
              className="bg-custom-orange text-white font-semibold px-4 py-2 h-12 rounded-lg text-xl shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={handleSend}
              disabled={!phoneNumber || !name || status === 'loading'}
            >
              Enviar
            </button>
          </div>
          {/* Mensajes de Éxito y Error */}
          {status === 'success' && (
            <p className="mt-4 text-green-500">Número enviado con éxito.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500">Error al enviar el número de teléfono.</p>
          )}
          {status === 'empty' && (
            <p className="mt-4 text-yellow-500">Por favor, ingresa un nombre y un número de teléfono.</p>
          )}
        </CardHeader>
      </div>
      <div className="w-full lg:w-5/12 py-4 flex items-center justify-center">
        <Image
          src="/industrial.png"
          width={450}
          height={150}
          alt={copy.bannerAlt}
          className="lg:w-[640px] lg:h-[440px] 2xl:w-[640px] 2xl:h-[525px]"
        />
      </div>
    </section>
  );
}