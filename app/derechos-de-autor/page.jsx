import React from 'react';

const CopyrightNotice = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-gray-200">Derechos de Autor</h1>
      <p className="mb-4 dark:text-gray-200">
        En Alphaqueb Consulting, valoramos la protección de los derechos de autor y respetamos la propiedad intelectual de todos. Este aviso de derechos de autor explica cómo se utiliza y protege el contenido disponible en nuestro sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">1. Propiedad Intelectual</h2>
      <p className="mb-4 dark:text-gray-200">
        Todos los derechos de propiedad intelectual sobre el contenido disponible en este sitio web, incluyendo textos, imágenes, gráficos, logotipos, diseños y software, pertenecen a Alphaqueb Consulting o a sus respectivos titulares de derechos de autor. El uso no autorizado del contenido está prohibido.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">2. Uso Autorizado del Contenido</h2>
      <p className="mb-4 dark:text-gray-200">
        El usuario puede visualizar y descargar el contenido del sitio web únicamente para su uso personal y no comercial. No está permitido:
        <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
          <li>Reproducir, copiar, distribuir o transmitir el contenido sin el permiso previo por escrito de Alphaqueb Consulting.</li>
          <li>Modificar, adaptar o crear trabajos derivados del contenido sin autorización.</li>
          <li>Usar el contenido para fines comerciales o promocionales sin el consentimiento expreso de Alphaqueb Consulting.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">3. Marcas Registradas</h2>
      <p className="mb-4 dark:text-gray-200">
        Los nombres de marcas, logotipos y signos distintivos utilizados en este sitio web son marcas registradas de Alphaqueb Consulting o de terceros. El uso no autorizado de estas marcas registradas está prohibido.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">4. Licencias de Software</h2>
      <p className="mb-4 dark:text-gray-200">
        Cualquier software disponible en este sitio web está protegido por derechos de autor y otras leyes de propiedad intelectual. El usuario solo puede utilizar el software de acuerdo con los términos y condiciones del contrato de licencia correspondiente. No está permitido:
        <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
          <li>Copiar, modificar, distribuir o sublicenciar el software sin el permiso previo por escrito de Alphaqueb Consulting.</li>
          <li>Descompilar, desensamblar o intentar obtener el código fuente del software sin autorización.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">5. Exclusión de Garantías</h2>
      <p className="mb-4 dark:text-gray-200">
        El contenido disponible en este sitio web se proporciona "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas. Alphaqueb Consulting no garantiza que el contenido sea preciso, completo o actualizado, ni que el uso del contenido no infrinja los derechos de terceros.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">6. Limitación de Responsabilidad</h2>
      <p className="mb-4 dark:text-gray-200">
        Alphaqueb Consulting no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que pueda surgir del uso o la imposibilidad de usar el contenido del sitio web. Esto incluye, pero no se limita a, daños por pérdida de beneficios, pérdida de datos o costos de reemplazo.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">7. Contacto</h2>
      <p className="mb-4 dark:text-gray-200">
        Si tienes alguna pregunta o inquietud sobre este aviso de derechos de autor, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default CopyrightNotice;