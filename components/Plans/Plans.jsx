import React from 'react';

function Plans() {
  return (
    <div className="bg-zinc-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8 text-zinc-800">
        Nuestros Planes de Implementación
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Plan 1 */}
        <div className="bg-white p-6 rounded-md shadow-md flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-zinc-700">
            Plan Básico
          </h3>
          <ul className="text-left text-zinc-600 mb-6">
            <li className="mb-2">
              <span className="font-semibold">Implementación:</span> Modulos
              básicos
            </li>
            <li className="mb-2">
              <span className="font-semibold">Capacitación:</span>
              Introducción al sistema
            </li>
            <li className="mb-2">
              <span className="font-semibold">Soporte:</span> 1 mes
            </li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Seleccionar
          </button>
        </div>

        {/* Plan 2 */}
        <div className="bg-white p-6 rounded-md shadow-md flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-zinc-700">
            Plan Estándar
          </h3>
          <ul className="text-left text-zinc-600 mb-6">
            <li className="mb-2">
              <span className="font-semibold">Implementación:</span> Modulos
              avanzados
            </li>
            <li className="mb-2">
              <span className="font-semibold">Capacitación:</span>
              Completa a los usuarios
            </li>
            <li className="mb-2">
              <span className="font-semibold">Soporte:</span> 3 meses
            </li>
          </ul>
           <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Seleccionar
          </button>
        </div>

        {/* Plan 3 */}
        <div className="bg-white p-6 rounded-md shadow-md flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-zinc-700">
            Plan Premium
          </h3>
          <ul className="text-left text-zinc-600 mb-6">
            <li className="mb-2">
              <span className="font-semibold">Implementación:</span>
              Implementación personalizada
            </li>
            <li className="mb-2">
              <span className="font-semibold">Capacitación:</span>
              Soporte prioritario
            </li>
            <li className="mb-2">
              <span className="font-semibold">Soporte:</span> Ilimitado
            </li>
          </ul>
           <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;