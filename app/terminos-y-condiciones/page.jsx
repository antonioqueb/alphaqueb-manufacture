import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-gray-200">Términos y Condiciones</h1>
      <p className="mb-4 dark:text-gray-200">
        Bienvenido a Alphaqueb Consulting. Al utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con estos términos, no puedes utilizar nuestros servicios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">1. Definiciones</h2>
      <p className="mb-4 dark:text-gray-200">
        <strong>Cliente:</strong> La persona o entidad que utiliza los servicios ofrecidos por Alphaqueb Consulting.<br />
        <strong>Servicios:</strong> Los servicios de consultoría tecnológica, automatización, digitalización y optimización proporcionados por Alphaqueb Consulting.<br />
        <strong>Contenido:</strong> Todo el material, información, texto, gráficos, imágenes, videos y otros elementos disponibles en el sitio web de Alphaqueb Consulting.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">2. Uso de los Servicios</h2>
      <p className="mb-4 dark:text-gray-200">
        El Cliente acepta utilizar los Servicios de manera legal y conforme a estos Términos y Condiciones. El Cliente no podrá:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
        <li>Utilizar los Servicios de manera fraudulenta o dañina.</li>
        <li>Intentar acceder o utilizar sistemas o redes no autorizadas.</li>
        <li>Reproducir, distribuir, modificar o vender cualquier Contenido sin el permiso previo de Alphaqueb Consulting.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">3. Propiedad Intelectual</h2>
      <p className="mb-4 dark:text-gray-200">
        Todos los derechos de propiedad intelectual sobre el sitio web y los Servicios pertenecen a Alphaqueb Consulting. El Cliente no adquiere ningún derecho de propiedad intelectual al utilizar los Servicios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">4. Privacidad y Protección de Datos</h2>
      <p className="mb-4 dark:text-gray-200">
        La protección de la información personal del Cliente es importante para nosotros. Consulta nuestra <a href="/aviso-de-privacidad" className="text-orange-500 hover:underline">Aviso de Privacidad</a> para obtener más detalles sobre cómo manejamos tus datos.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">5. Modificaciones de los Términos y Condiciones</h2>
      <p className="mb-4 dark:text-gray-200">
        Alphaqueb Consulting se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en el sitio web. El Cliente será responsable de revisar periódicamente los Términos y Condiciones. El uso continuo de los Servicios después de las modificaciones constituirá la aceptación de los nuevos términos.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">6. Limitación de Responsabilidad</h2>
      <p className="mb-4 dark:text-gray-200">
        Alphaqueb Consulting no será responsable por cualquier daño directo, indirecto, incidental, especial o consecuente que pueda surgir del uso o la imposibilidad de usar los Servicios. Esto incluye, pero no se limita a, daños por pérdida de beneficios, pérdida de datos o costos de reemplazo.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">7. Indemnización</h2>
      <p className="mb-4 dark:text-gray-200">
        El Cliente indemniza y exime a Alphaqueb Consulting y a sus afiliados, directores, empleados y agentes de cualquier reclamación, demanda, daño, responsabilidad, costo y gasto, incluidos los honorarios legales razonables, que surjan del uso de los Servicios o de la violación de estos Términos y Condiciones.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">8. Ley Aplicable y Jurisdicción</h2>
      <p className="mb-4 dark:text-gray-200">
        Estos Términos y Condiciones se rigen por y se interpretarán de acuerdo con las leyes del Estado de [Estado], México, sin considerar sus conflictos de leyes. Cualquier disputa relacionada con estos Términos y Condiciones estará sujeta a la jurisdicción exclusiva de los tribunales competentes ubicados en [Ciudad], México.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">9. Resolución de Disputas</h2>
      <p className="mb-4 dark:text-gray-200">
        En caso de cualquier disputa entre el Cliente y Alphaqueb Consulting, ambas partes acuerdan intentar resolver la disputa mediante negociaciones amistosas antes de iniciar cualquier procedimiento legal.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">10. Renuncia</h2>
      <p className="mb-4 dark:text-gray-200">
        Si alguna disposición de estos Términos y Condiciones resulta inválida o inaplicable, dicha disposición será anulada o limitada en la medida mínima necesaria para hacerla válida y aplicable, y el resto de los Términos y Condiciones permanecerán en pleno vigor y efecto.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">11. Contacto</h2>
      <p className="mb-4 dark:text-gray-200">
        Si tienes alguna pregunta o inquietud sobre estos Términos y Condiciones, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
