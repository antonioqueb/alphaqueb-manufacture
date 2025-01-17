import React from 'react';

function CallToAction() {
  return (
    <div className="bg-blue-500 text-white py-12 px-6 text-center rounded-md shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Listo para Impulsar tu Manufactura?</h2>
      <p className="text-lg mb-6">
        Transformamos la manufactura mexicana con soluciones tecnológicas innovadoras.
        Contáctanos hoy y descubre cómo podemos ayudarte a crecer.
      </p>
      <a
        href="/contacto" // Replace with your actual contact page URL
        className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-md hover:bg-blue-100 transition-colors duration-200"
      >
        Contáctanos
      </a>
    </div>
  );
}

export default CallToAction;