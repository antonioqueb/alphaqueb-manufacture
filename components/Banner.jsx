import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline/next';

// Diccionario de textos (copy)
const copy = {
  title: "Tecnología para la industria mexicana",
  description: "Sistemas Industriales un signo de eficiencia, cumplimiento y resultados.",
  bannerAlt: "Consultoría tecnológica – Impulsa la eficiencia, competitividad y cumplimiento normativo de tu empresa industrial con Alphaqueb Consulting",
};



export default function Banner() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState(null);

  const handleSend = async () => {
    if (!phoneNumber || !name) {
      setStatus('empty');
      return;
    }

    const data = {
      name: name,
      phone_number: phoneNumber,
      user_id: 2,
      company_id: 1,
    };

    try {
      const response = await fetch('https://contact.alphaqueb.com/create_contact_phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error al enviar el número de teléfono');
      
      const result = await response.json();
      console.log('Respuesta de la API:', result);
      setStatus('success');
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
      <motion.div 
        className="text-start px-0 space-y-1 bg-white/0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CardHeader className="px-0">
        <CardTitle className="text-balance text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold text-zinc-800 mb-3 dark:text-zinc-100">
          {copy.title}
        </CardTitle>
        <CardDescription className="mb-12 pb-4 text-lg md:text-xl text-zinc-800 text-balance dark:text-zinc-100">
          {copy.description}
        </CardDescription>
        <div className="flex flex-col items-center w-full gap-4 md:flex-row md:items-start md:justify-start md:w-auto">
          <input
            type="text"
            className="w-full md:w-56 px-4 py-2 h-12 rounded-lg shadow-md border border-zinc-900 dark:border-zinc-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            className="w-full md:w-56 px-4 py-2 h-12 rounded-lg shadow-md border border-zinc-900 dark:border-zinc-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all duration-300 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500"
            placeholder="Teléfono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            className="bg-custom-orange text-white font-semibold px-4 py-2 h-12 rounded-lg text-xl shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 w-full md:w-auto"
            onClick={handleSend}
            disabled={!phoneNumber || !name || status === 'loading'}
          >
            Enviar
          </button>
        </div>
        {status === 'success' && <p className="mt-4 text-green-500">Número recibido con éxito.</p>}
        {status === 'error' && <p className="mt-4 text-red-500">Error al enviar el número de teléfono.</p>}
        {status === 'empty' && <p className="mt-4 text-yellow-500">Por favor, ingresa un nombre y un número de teléfono.</p>}
        </CardHeader>
      </motion.div>
    </div>


      <div className="w-full lg:w-5/12 py-2 flex items-center justify-center">
        <motion.div 
          className="relative w-full aspect-square"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="w-full h-full relative spline-container">
            <style>{`
              .spline-container a { display: none !important; }
            `}</style>
            <div className="absolute inset-0 z-10" />
            <Spline
              scene="https://prod.spline.design/5rtKOYNXop9ZZvTn/scene.splinecode" 
              style={{ width: '100%', height: '100%' }}
            />
            {/* Elemento superpuesto para ocultar la parte inferior */}
            <div className="absolute bottom-0 left-0 w-full h-14 md:h-16 bg-background z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}