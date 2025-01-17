import React from 'react';

const SecurityPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-gray-200">Política de Seguridad</h1>
      <p className="mb-4 dark:text-gray-200">
        En Alphaqueb Consulting, valoramos la seguridad de la información personal y de los datos de nuestros clientes. Esta política de seguridad describe las medidas que tomamos para proteger la información que recopilamos y manejamos en nuestro sitio web y servicios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">1. Recopilación de Información</h2>
      <p className="mb-4 dark:text-gray-200">
        Recopilamos información personal de los usuarios a través de diversas formas, incluyendo:
        <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
          <li>Formularios de contacto.</li>
          <li>Registros de acceso a nuestro sitio web.</li>
          <li>Cookies y tecnologías similares.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">2. Uso de la Información</h2>
      <p className="mb-4 dark:text-gray-200">
        Utilizamos la información recopilada para:
        <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
          <li>Proporcionar y mejorar nuestros servicios.</li>
          <li>Enviar comunicaciones relevantes, como ofertas y actualizaciones.</li>
          <li>Analizar el tráfico del sitio web y comprender mejor las necesidades de nuestros usuarios.</li>
          <li>Cumplir con nuestras obligaciones legales y contractuales.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">3. Protección de la Información</h2>
      <p className="mb-4 dark:text-gray-200">
        Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Estas medidas incluyen:
        <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
          <li>Uso de protocolos de cifrado SSL/TLS para transacciones seguras.</li>
          <li>Control de acceso a los sistemas y datos.</li>
          <li>Actualizaciones y parches de seguridad regulares.</li>
          <li>Prácticas de seguridad de datos sólidas.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">4. Compartir Información</h2>
      <p className="mb-4 dark:text-gray-200">
        No vendemos ni compartimos tu información personal con terceros sin tu consentimiento, a menos que sea necesario para:
        <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
          <li>Cumplir con las leyes aplicables.</li>
          <li>Prevenir fraudes o actividades ilegales.</li>
          <li>Colaborar con proveedores de servicios que nos ayuden a proporcionar nuestros servicios.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">5. Tus Derechos</h2>
      <p className="mb-4 dark:text-gray-200">
        Tienes derecho a:
        <ul className="list-disc ml-6 mt-2 dark:text-gray-200">
          <li>Acceder a la información personal que tenemos sobre ti.</li>
          <li>Corregir o actualizar la información personal que tengamos.</li>
          <li>Solicitar la eliminación de tu información personal.</li>
          <li>Oponerte al uso de tu información personal para fines de marketing.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">6. Cambios en esta Política de Seguridad</h2>
      <p className="mb-4 dark:text-gray-200">
        Nos reservamos el derecho de modificar esta política de seguridad en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio web. El usuario será responsable de revisar periódicamente la política para estar al tanto de cualquier cambio.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-gray-200">7. Contacto</h2>
      <p className="mb-4 dark:text-gray-200">
        Si tienes alguna pregunta o inquietud sobre esta política de seguridad, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default SecurityPolicy;