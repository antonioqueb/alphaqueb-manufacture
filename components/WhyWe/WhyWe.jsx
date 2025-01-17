import React from 'react';
import Image from 'next/image'

function WhyWe() {
  return (
    <div className="bg-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-zinc-800">
          Por Qué Elegir Alphaqueb Consulting
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Reason 1 */}
          <div className="flex-1 p-4">
          <div className="relative w-full h-48 mb-4">
          <Image
              src="/img/whywe1.jpg"
              alt="reason 1"
              fill
              className="object-cover"
            />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-zinc-700">
              Experiencia en Manufactura
            </h3>
            <p className="text-zinc-600">
              Conocemos a fondo los desafíos y oportunidades del sector manufacturero.
            </p>
          </div>
          {/* Reason 2 */}
          <div className="flex-1 p-4">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/img/whywe2.jpg"
              alt="reason 2"
              fill
              className="object-cover"
            />
           </div>
            <h3 className="text-2xl font-semibold mb-4 text-zinc-700">
              Soluciones Personalizadas
            </h3>
            <p className="text-zinc-600">
              Implementamos soluciones a la medida de tus necesidades específicas.
            </p>
          </div>
          {/* Reason 3 */}
          <div className="flex-1 p-4">
           <div className="relative w-full h-48 mb-4">
             <Image
              src="/img/whywe3.jpg"
              alt="reason 3"
              fill
              className="object-cover"
            />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-zinc-700">
              Resultados Comprobados
            </h3>
            <p className="text-zinc-600">
              Ayudamos a las empresas a mejorar la eficiencia y reducir costos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWe;