import React from 'react';

const AccessibilityPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-gray-200">Política de Accesibilidad</h1>
      <p className="mb-4 dark:text-gray-200">
        En Alphaqueb Consulting, estamos comprometidos con la accesibilidad y la inclusión de todos los usuarios en nuestro sitio web y servicios. Esta política de accesibilidad describe los esfuerzos que realizamos para asegurar que nuestro contenido sea accesible para personas con discapacidades.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">1. Compromiso con la Accesibilidad</h2>
      <p className="mb-4 dark:text-gray-200">
        Nos esforzamos por cumplir con los estándares de accesibilidad web, incluyendo las directrices de Accesibilidad Web (WCAG) de nivel AA. Nuestro objetivo es que nuestro sitio web sea usable y accesible para todas las personas, independientemente de sus capacidades.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">2. Medidas de Accesibilidad</h2>
      <p className="mb-4 dark:text-gray-200">
        Implementamos varias medidas para mejorar la accesibilidad de nuestro sitio web:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
        <li><strong>Texto Alternativo para Imágenes:</strong> Proporcionamos texto alternativo para todas las imágenes para que sean comprensibles para personas con discapacidades visuales.</li>
        <li><strong>Estructura Semántica:</strong> Utilizamos elementos HTML semánticos para mejorar la navegación y la comprensión del contenido.</li>
        <li><strong>Contraste de Colores:</strong> Mantenemos un alto contraste entre los colores de texto y fondo para facilitar la lectura.</li>
        <li><strong>Navegación por Teclado:</strong> Permitimos la navegación completa del sitio web usando solo el teclado.</li>
        <li><strong>Compatibilidad con Lectores de Pantalla:</strong> Optimizamos el contenido para ser compatible con lectores de pantalla y otras tecnologías de asistencia.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">3. Formularios y Controles Interactivos</h2>
      <p className="mb-4 dark:text-gray-200">
        Aseguramos que todos los formularios y controles interactivos sean accesibles:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
        <li><strong>Etiquetas Descriptivas:</strong> Utilizamos etiquetas descriptivas para todos los campos de entrada y botones.</li>
        <li><strong>Validación de Formularios:</strong> Implementamos validaciones de formularios claras y fáciles de entender.</li>
        <li><strong>Instrucciones Claras:</strong> Proporcionamos instrucciones claras para completar formularios y usar controles interactivos.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">4. Contenido Dinámico y Multimedia</h2>
      <p className="mb-4 dark:text-gray-200">
        Mejoramos la accesibilidad del contenido dinámico y multimedia:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
        <li><strong>Transcripciones de Videos:</strong> Proporcionamos transcripciones para todos los videos.</li>
        <li><strong>Lectura de Audio:</strong> Ofrecemos opciones de lectura de audio para contenido escrito.</li>
        <li><strong>Descripciones de Video:</strong> Incluimos descripciones de video para personas con discapacidades visuales.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">5. Pruebas de Accesibilidad</h2>
      <p className="mb-4 dark:text-gray-200">
        Realizamos pruebas regulares de accesibilidad para identificar y corregir problemas:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
        <li><strong>Pruebas Automáticas:</strong> Utilizamos herramientas de prueba automáticas para detectar problemas de accesibilidad.</li>
        <li><strong>Pruebas Manuales:</strong> Realizamos pruebas manuales con personas con discapacidades para obtener feedback real.</li>
        <li><strong>Pruebas con Tecnologías de Asistencia:</strong> Probamos nuestro sitio web con diferentes tecnologías de asistencia.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">6. Capacitación del Personal</h2>
      <p className="mb-4 dark:text-gray-200">
        Capacitamos a nuestro equipo para asegurar la accesibilidad:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
        <li><strong>Cursos de Accesibilidad:</strong> Ofrecemos cursos de capacitación sobre accesibilidad web a nuestro personal.</li>
        <li><strong>Guías de Estilo:</strong> Creamos guías de estilo y procedimientos para la creación de contenido accesible.</li>
        <li><strong>Revisión Continua:</strong> Realizamos revisiones continuas de nuestro contenido para asegurar su accesibilidad.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">7. Contacto</h2>
      <p className="mb-4 dark:text-gray-200">
        Si tienes alguna pregunta, inquietud o sugerencia sobre la accesibilidad de nuestro sitio web, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>. Estamos comprometidos a mejorar continuamente la accesibilidad y valoramos tu retroalimentación.
      </p>
    </div>
  );
};

export default AccessibilityPolicy;