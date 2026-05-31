## `app/api/health/route.js`
```js
import { NextResponse } from "next/server";

// Desactiva el caching para obtener valores en tiempo real
export const dynamic = "force-dynamic";

// Función para formatear el tiempo de actividad en formato hh:mm:ss
function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  
  return `${h}h ${m}m ${s}s`;
}

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      uptime: formatUptime(process.uptime()), // Tiempo real
      timestamp: new Date().toLocaleString(), // Formato legible
    },
    { status: 200 }
  );
}
```

## `app/aviso-de-cumplimiento-ambiental/page.jsx`
```jsx
import React from 'react';

const EnvironmentalComplianceNotice = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Aviso de Cumplimiento Ambiental</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, nos comprometemos a promover prácticas ambientales responsables y a minimizar nuestro impacto ambiental. Aunque nuestro trabajo es 100% remoto, seguimos un conjunto de políticas y prácticas para contribuir a un entorno más sostenible.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Introducción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Este aviso de cumplimiento ambiental establece los principios y acciones que tomamos para minimizar nuestro impacto ambiental y promover la sostenibilidad en todas nuestras operaciones remotas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Compromiso Ambiental</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos comprometemos a:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Reducir el Consumo de Energía:</strong> Fomentar el uso de dispositivos energéticamente eficientes y promover prácticas de ahorro de energía.</li>
        <li><strong>Minimizar el Uso de Papel:</strong> Promover la digitalización de documentos y el uso de medios electrónicos para comunicaciones y almacenamiento de información.</li>
        <li><strong>Reciclaje y Gestión de Residuos:</strong> Implementar programas de reciclaje y gestionar adecuadamente los residuos electrónicos y de papel.</li>
        <li><strong>Concienciación Ambiental:</strong> Capacitar a nuestros empleados sobre prácticas ambientales responsables y promover la concienciación ambiental.</li>
        <li><strong>Uso Sostenible de Recursos:</strong> Fomentar el uso sostenible de recursos naturales en nuestras operaciones remotas.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Reducción del Consumo de Energía</h2>
      <p className="mb-4 dark:text-zinc-200">
        Para reducir nuestro consumo de energía, implementamos las siguientes prácticas:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Dispositivos Energéticamente Eficientes:</strong> Utilizar computadoras y dispositivos electrónicos con certificaciones de eficiencia energética.</li>
        <li><strong>Ahorro de Energía:</strong> Apagar los dispositivos cuando no se estén utilizando y ajustar la configuración de energía para ahorrar.</li>
        <li><strong>Iluminación Ecológica:</strong> Utilizar lámparas LED y ajustar la iluminación según sea necesario.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Minimización del Uso de Papel</h2>
      <p className="mb-4 dark:text-zinc-200">
        Para minimizar el uso de papel, adoptamos las siguientes prácticas:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Documentos Digitales:</strong> Utilizar formatos digitales para documentos y comunicaciones internas y externas.</li>
        <li><strong>Impresión Responsable:</strong> Imprimir solo cuando sea necesario y utilizar ambos lados del papel.</li>
        <li><strong>Archivos Digitales:</strong> Almacenar documentos en formatos digitales para facilitar el acceso y la conservación.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Reciclaje y Gestión de Residuos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Para promover el reciclaje y la gestión adecuada de residuos, implementamos las siguientes prácticas:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Programas de Reciclaje:</strong> Participar en programas de reciclaje locales para papel, plástico y otros materiales.</li>
        <li><strong>Gestión de Residuos Electrónicos:</strong> Desposeer de equipos electrónicos de manera responsable y utilizar empresas autorizadas para su reciclaje.</li>
        <li><strong>Reducción de Residuos:</strong> Minimizar la generación de residuos mediante la digitalización y el uso de materiales reutilizables.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Concienciación Ambiental</h2>
      <p className="mb-4 dark:text-zinc-200">
        Para fomentar la concienciación ambiental, realizamos las siguientes acciones:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cursos y Talleres:</strong> Ofrecer cursos y talleres sobre prácticas ambientales responsables a nuestros empleados.</li>
        <li><strong>Material Informativo:</strong> Distribuir materiales informativos sobre la importancia de la sostenibilidad y prácticas ambientales.</li>
        <li><strong>Campañas de Sensibilización:</strong> Realizar campañas periódicas para sensibilizar a los empleados sobre temas ambientales.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Uso Sostenible de Recursos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Para fomentar el uso sostenible de recursos, adoptamos las siguientes prácticas:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Recursos Digitales:</strong> Utilizar recursos digitales en lugar de impresos siempre que sea posible.</li>
        <li><strong>Software de Bajo Impacto:</strong> Utilizar software y aplicaciones que tengan un bajo impacto ambiental.</li>
        <li><strong>Optimización de Redes:</strong> Optimizar el uso de redes para reducir el consumo de datos y energía.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">8. Responsabilidad Ambiental de los Empleados</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cada empleado es responsable de:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cumplir con la Política Ambiental:</strong> Se comprometen a seguir las prácticas y políticas ambientales establecidas.</li>
        <li><strong>Reportar Incidencias:</strong> Informar de cualquier actividad que pueda afectar negativamente el medio ambiente.</li>
        <li><strong>Participar en Formación:</strong> Asistir a cursos y talleres de concienciación ambiental.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">9. Evaluación y Mejora Continua</h2>
      <p className="mb-4 dark:text-zinc-200">
        Evaluamos regularmente nuestro desempeño ambiental y buscamos oportunidades para mejorar:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Monitoreo de Impacto Ambiental:</strong> Realizar un seguimiento regular de nuestro consumo de energía y generación de residuos.</li>
        <li><strong>Análisis de Riesgos:</strong> Identificar y gestionar riesgos ambientales asociados con nuestras operaciones.</li>
        <li><strong>Mejoras Continuas:</strong> Implementar mejoras continuas en nuestras prácticas ambientales basadas en evaluaciones y feedback.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">10. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre nuestro aviso de cumplimiento ambiental, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>. Estamos comprometidos a mantener altos estándares de sostenibilidad y valoramos tu contribución para mejorar nuestra organización.
      </p>
    </div>
  );
};

export default EnvironmentalComplianceNotice;```

## `app/aviso-de-privacidad/page.jsx`
```jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-8 rounded-lg  max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Aviso de Privacidad</h1>
      <p className="mb-4 dark:text-zinc-200">
        En [Nombre de la Empresa], somos conscientes de la importancia de proteger la información personal de nuestros usuarios. Este aviso de privacidad explica cómo recopilamos, usamos, compartimos y protegemos la información personal que nos proporcionas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Información que Recopilamos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Recopilamos información personal que nos proporcionas cuando te registras en nuestro sitio web, realizas una compra, te suscribes a nuestras noticias o interactúas con nosotros a través de otros medios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Cómo Usamos tu Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        Utilizamos la información personal que recopilamos para proporcionarte servicios y experiencias personalizadas, mejorar nuestros productos y servicios, enviar comunicaciones relevantes y cumplir con nuestras obligaciones legales.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Compartir tu Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        No vendemos ni compartimos tu información personal con terceros sin tu consentimiento, a menos que sea necesario para cumplir con las leyes aplicables o para prevenir fraudes o actividades ilegales.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Protección de la Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Tus Derechos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Tienes derecho a acceder, corregir o eliminar la información personal que tenemos sobre ti. También puedes optar por no recibir comunicaciones de marketing de nuestra parte.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Cambios en este Aviso de Privacidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de actualizar este aviso de privacidad periódicamente. Te recomendamos revisarlo regularmente para estar al tanto de cualquier cambio.
      </p>
      
      <p className="mt-8 text-center dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre este aviso de privacidad, no dudes en contactarnos a través de hola@alphaqueb.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;```

## `app/aviso-legal/page.jsx`
```jsx
import React from 'react';

const LegalNotice = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Aviso Legal</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, estamos comprometidos con proporcionar información precisa y actualizada sobre nuestros servicios. Este aviso legal establece los términos y condiciones generales de uso de nuestro sitio web y servicios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Identificación del Responsable</h2>
      <p className="mb-4 dark:text-zinc-200">
        <strong>Razón Social:</strong> Alphaqueb Consulting SAS<br />
        <strong>Email:</strong> hola@alphaqueb.com<br />
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Objeto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Este aviso legal tiene como objeto informar a los usuarios sobre la identidad del responsable del sitio web, los términos y condiciones generales de uso del mismo, así como sobre la protección de los datos personales de los usuarios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Condiciones de Uso</h2>
      <p className="mb-4 dark:text-zinc-200">
        El uso de este sitio web implica la aceptación de estos términos y condiciones. El responsable se reserva el derecho de modificar estos términos en cualquier momento, sin necesidad de previo aviso. El usuario será responsable de revisar periódicamente estos términos y condiciones.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Propiedad Intelectual</h2>
      <p className="mb-4 dark:text-zinc-200">
        Todos los derechos de propiedad intelectual sobre el sitio web y los contenidos publicados en él pertenecen a Alphaqueb Consulting. El usuario no podrá reproducir, distribuir, modificar o vender cualquier contenido sin el permiso previo por escrito de Alphaqueb Consulting.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Limitación de Responsabilidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        Alphaqueb Consulting no se hace responsable de los daños y perjuicios de cualquier naturaleza que puedan derivarse del uso del sitio web o de la información contenida en él. El usuario utiliza el sitio web bajo su propio riesgo.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Política de Privacidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        La protección de la información personal del usuario es importante para nosotros. Consulta nuestra <a href="/aviso-de-privacidad" className="text-orange-500 hover:underline">Aviso de Privacidad</a> para obtener más detalles sobre cómo manejamos tus datos.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Enlaces a Otros Sitios Web</h2>
      <p className="mb-4 dark:text-zinc-200">
        Este sitio web puede contener enlaces a otros sitios web de terceros. Alphaqueb Consulting no se hace responsable del contenido, políticas de privacidad o prácticas de otros sitios web. El usuario asume el riesgo completo al hacer clic en enlaces a sitios web externos.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">8. Ley Aplicable y Jurisdicción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Estos términos y condiciones se rigen por y se interpretarán de acuerdo con las leyes del Estado de [Estado], México, sin considerar sus conflictos de leyes. Cualquier disputa relacionada con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los tribunales competentes ubicados en [Ciudad], México.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">9. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre este aviso legal, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default LegalNotice;```

## `app/blogs/[slug]/layout.jsx`
```jsx
import ContactSection from '@/components/ContactSection';
import React from 'react';

export default function BlogLayout({ children }) {
  return (
    <div>
   
      <main className="container mx-auto px-4 py-8">
          {children}
          <ContactSection />
        </main>
      
    </div>
  );
}```

## `app/blogs/[slug]/page.jsx`
```jsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Generar metadatos de la página
export async function generateMetadata({ params }) {
    if (!params || !params.slug) {
        return {};
    }

    // Obtenemos el post a partir del slug
    const post = await getPost({ slug: params.slug });

    // Dominio fijo (en vez de usar variables de entorno)
    const siteUrl = 'https://alphaqueb.com';

    // Generar una URL absoluta para la imagen
    // Ej. si post.frontMatter.image = '/images/mi-banner.jpg'
    // => https://alphaqueb.com/images/mi-banner.jpg
    const imageUrl = new URL(post.frontMatter.image, siteUrl).href;

    return {
        title: post.frontMatter.title || 'Servicio de Implementación Odoo ERP',
        description: post.frontMatter.description,
        openGraph: {
            title: post.frontMatter.title,
            description: post.frontMatter.description,
            url: `${siteUrl}/blogs/${params.slug}`, // Esto ayuda a que las redes sepan la URL principal
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.frontMatter.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.frontMatter.title,
            description: post.frontMatter.description,
            images: [imageUrl],
        },
        // Next.js recomienda proveer una base para los metadatos
        // aunque no uses .env, debe ser una URL válida
        metadataBase: new URL(siteUrl),
    };
}

// Obtener las rutas de los posts para la generación estática
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'blogs');
    const files = fs.readdirSync(postsDirectory);
    const paths = files.map((filename) => ({
        slug: filename.replace('.mdx', ''),
    }));
    return paths;
}

// Función asincrónica que obtiene el post basado en el slug
async function getPost({ slug }) {
    const postsDirectory = path.join(process.cwd(), 'blogs');
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    // Verificar si el archivo existe antes de leerlo
    if (!fs.existsSync(filePath)) {
        notFound();  // Si el archivo no existe, redirigir a la página 404
    }

    const markdownFile = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter, content } = matter(markdownFile);
    if (!frontMatter.title) {
        notFound();  // Si no tiene título, redirigir a 404
    }
    return {
        frontMatter,
        slug,
        content,
    };
}

export default async function BlogPostPage({ params }) {
    if (!params || !params.slug) {
        notFound();  // Si no se encuentra el `slug`, redirigir a la página 404
    }

    // Obtenemos la información del post
    const post = await getPost({ slug: params.slug });

    return (
        <article className="max-w-3xl mx-auto py-8 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4 text-zinc-800 dark:text-zinc-200">
                {post.frontMatter.title}
            </h1>
            <Image
                src={post.frontMatter.image}
                alt={post.frontMatter.title}
                width={1024}
                height={424}
                className="w-full h-auto rounded-md mb-6"
            />
            <div className="prose prose-lg max-w-none dark:prose-invert">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
```

## `app/blogs/page.jsx`
```jsx
import LastNews from '../../components/LastNews/LastNews';

export const metadata = {
  title: {
    absolute: 'Blog',
  },
  description: 'Personalizamos tu implementación odoo para cumplir tus metas',
};

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto py-8 px-4">
      <LastNews />
    </main>
  );
}```

## `app/derechos-de-autor/page.jsx`
```jsx
import React from 'react';

const CopyrightNotice = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Derechos de Autor</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, valoramos la protección de los derechos de autor y respetamos la propiedad intelectual de todos. Este aviso de derechos de autor explica cómo se utiliza y protege el contenido disponible en nuestro sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Propiedad Intelectual</h2>
      <p className="mb-4 dark:text-zinc-200">
        Todos los derechos de propiedad intelectual sobre el contenido disponible en este sitio web, incluyendo textos, imágenes, gráficos, logotipos, diseños y software, pertenecen a Alphaqueb Consulting o a sus respectivos titulares de derechos de autor. El uso no autorizado del contenido está prohibido.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Uso Autorizado del Contenido</h2>
      <p className="mb-4 dark:text-zinc-200">
        El usuario puede visualizar y descargar el contenido del sitio web únicamente para su uso personal y no comercial. No está permitido:
        <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
          <li>Reproducir, copiar, distribuir o transmitir el contenido sin el permiso previo por escrito de Alphaqueb Consulting.</li>
          <li>Modificar, adaptar o crear trabajos derivados del contenido sin autorización.</li>
          <li>Usar el contenido para fines comerciales o promocionales sin el consentimiento expreso de Alphaqueb Consulting.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Marcas Registradas</h2>
      <p className="mb-4 dark:text-zinc-200">
        Los nombres de marcas, logotipos y signos distintivos utilizados en este sitio web son marcas registradas de Alphaqueb Consulting o de terceros. El uso no autorizado de estas marcas registradas está prohibido.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Licencias de Software</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cualquier software disponible en este sitio web está protegido por derechos de autor y otras leyes de propiedad intelectual. El usuario solo puede utilizar el software de acuerdo con los términos y condiciones del contrato de licencia correspondiente. No está permitido:
        <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
          <li>Copiar, modificar, distribuir o sublicenciar el software sin el permiso previo por escrito de Alphaqueb Consulting.</li>
          <li>Descompilar, desensamblar o intentar obtener el código fuente del software sin autorización.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Exclusión de Garantías</h2>
      <p className="mb-4 dark:text-zinc-200">
        El contenido disponible en este sitio web se proporciona "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas. Alphaqueb Consulting no garantiza que el contenido sea preciso, completo o actualizado, ni que el uso del contenido no infrinja los derechos de terceros.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Limitación de Responsabilidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        Alphaqueb Consulting no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que pueda surgir del uso o la imposibilidad de usar el contenido del sitio web. Esto incluye, pero no se limita a, daños por pérdida de beneficios, pérdida de datos o costos de reemplazo.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre este aviso de derechos de autor, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default CopyrightNotice;```

## `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## `app/layout.js`
```js
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner"; // ⬅️ Importamos el nuevo componente

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Manufactura Inteligente | Alphaqueb Consulting",
  description:
    "Transformamos tu industria con tecnología avanzada: automatización, digitalización de procesos y software industrial. Conectamos tus sistemas para mejorar la producción y reducir errores en la manufactura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans mx-6 xl:mx-8 2xl:mx-16`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WR7YX9PG6P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WR7YX9PG6P');
          `}
        </Script>

        {/* Theme Provider */}
        <ThemeProvider>
          <Navbar />
          {children}
          <Toaster />
          <CookieBanner />  {/* ⬅️ Agregamos la barra de cookies aquí */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## `app/nosotros/page.jsx`
```jsx
'use client';
import React from 'react';
import Image from 'next/image';
import { Rocket, Zap, BarChart, ShieldCheck, Globe, Users, Layers, Lock, Terminal, CheckCircle } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

const copy = {
  title: "Impulsamos la manufactura con tecnología de vanguardia",
  description:
    "Bienvenido a Alphaqueb Consulting. Aquí, transformamos la manufactura a través de la innovación tecnológica. No solo ofrecemos soluciones, sino que construimos el futuro de tu empresa. Nuestra misión es llevar tu empresa manufacturera al siguiente nivel.",
  history: {
    title: "Nuestro recorrido en la evolución de la manufactura",
    content:
      "Desde 2017, lideramos la transformación en la manufactura. Con una visión audaz, creamos Alphaqueb Consulting para redefinir cómo las empresas abordan sus operaciones. Nuestra evolución hacia una Sociedad por Acciones Simplificada (SAS) en 2023 es un reflejo de nuestro compromiso con la excelencia y la innovación constante.",
  },
  mission: {
    title: "Nuestra misión es ser tu aliado de confianza en la transformación digital",
    content:
      "Nuestro objetivo es claro: liderar la transformación digital en la manufactura. Proporcionamos soluciones tecnológicas que impulsan tu crecimiento y competitividad en un mercado que exige más.",
  },
  values: {
    title: "Nuestros valores fundamentales",
    items: [
      { title: "Enfoque en manufactura", description: "Dominamos la manufactura y la optimización de procesos.", icon: <Zap /> },
      { title: "Atención personalizada", description: "Nos adaptamos a tus necesidades con cercanía.", icon: <Users /> },
      { title: "Alcance global", description: "Operamos en México, EE.UU. y Europa.", icon: <Globe /> },
      { title: "Confidencialidad", description: "Protegemos tu información con rigor.", icon: <ShieldCheck /> },
      { title: "Escalabilidad", description: "Creamos sistemas robustos y flexibles.", icon: <Layers /> },
      { title: "Seguridad", description: "Mantenemos la integridad de tus datos.", icon: <Lock /> },
      { title: "Independencia cloud", description: "Soluciones sin ataduras a un solo proveedor.", icon: <Terminal /> },
      { title: "Precisión y compromiso", description: "Entendemos tus procesos antes de proponer soluciones.", icon: <CheckCircle /> }
    ],
  },
  imageSrc: "/dark.png",
};

export default function Nosotros() {
  return (
    <div className="mx-auto pt-16 pb-4 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 text-start py-4">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl dark:text-zinc-50">
          {copy.title}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {copy.description}
        </p>
      </div>
      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-2xl font-semibold dark:text-zinc-50">
            {copy.history.title}
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {copy.history.content}
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold dark:text-zinc-50">
            {copy.mission.title}
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {copy.mission.content}
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold dark:text-zinc-50 mb-6">
          {copy.values.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {copy.values.items.map((value, index) => (
            <div key={index} className="p-6 bg-white dark:bg-stone-900 rounded-2xl shadow-lg flex items-start">
              <div className="w-12 h-12 bg-custom-orange/20 rounded-lg flex items-center justify-center text-custom-orange mr-4">
                {value.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-zinc-800 dark:text-zinc-50">
                  {value.title}
                </h4>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
```

## `app/page.js`
```js
'use client'
import Servicios from '@/components/Servicios';
import Faq from '@/components/Faq';
import Baner from '@/components/Banner';
import ContactSection from '@/components/ContactSection';
import MultiCards from '@/components/MultiCards';
import CoverageMap from '@/components/CoverageMap';


export default function Home() {
 
  return (
    <>
      
      <Baner />
      <MultiCards  />
      <Servicios />
      <CoverageMap />
      {/* <Testimonials /> */}
      {/* <Hero /> */}
      {/* <LastProjects /> */}
      <ContactSection />
      {/* <ContentCardsBlog /> */}
      <Faq />
     
      

    </>
  );
}
```

## `app/politica-de-accesibilidad/page.jsx`
```jsx
import React from 'react';

const AccessibilityPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Accesibilidad</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, estamos comprometidos con la accesibilidad y la inclusión de todos los usuarios en nuestro sitio web y servicios. Esta política de accesibilidad describe los esfuerzos que realizamos para asegurar que nuestro contenido sea accesible para personas con discapacidades.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Compromiso con la Accesibilidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos esforzamos por cumplir con los estándares de accesibilidad web, incluyendo las directrices de Accesibilidad Web (WCAG) de nivel AA. Nuestro objetivo es que nuestro sitio web sea usable y accesible para todas las personas, independientemente de sus capacidades.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Medidas de Accesibilidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        Implementamos varias medidas para mejorar la accesibilidad de nuestro sitio web:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Texto Alternativo para Imágenes:</strong> Proporcionamos texto alternativo para todas las imágenes para que sean comprensibles para personas con discapacidades visuales.</li>
        <li><strong>Estructura Semántica:</strong> Utilizamos elementos HTML semánticos para mejorar la navegación y la comprensión del contenido.</li>
        <li><strong>Contraste de Colores:</strong> Mantenemos un alto contraste entre los colores de texto y fondo para facilitar la lectura.</li>
        <li><strong>Navegación por Teclado:</strong> Permitimos la navegación completa del sitio web usando solo el teclado.</li>
        <li><strong>Compatibilidad con Lectores de Pantalla:</strong> Optimizamos el contenido para ser compatible con lectores de pantalla y otras tecnologías de asistencia.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Formularios y Controles Interactivos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Aseguramos que todos los formularios y controles interactivos sean accesibles:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Etiquetas Descriptivas:</strong> Utilizamos etiquetas descriptivas para todos los campos de entrada y botones.</li>
        <li><strong>Validación de Formularios:</strong> Implementamos validaciones de formularios claras y fáciles de entender.</li>
        <li><strong>Instrucciones Claras:</strong> Proporcionamos instrucciones claras para completar formularios y usar controles interactivos.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Contenido Dinámico y Multimedia</h2>
      <p className="mb-4 dark:text-zinc-200">
        Mejoramos la accesibilidad del contenido dinámico y multimedia:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Transcripciones de Videos:</strong> Proporcionamos transcripciones para todos los videos.</li>
        <li><strong>Lectura de Audio:</strong> Ofrecemos opciones de lectura de audio para contenido escrito.</li>
        <li><strong>Descripciones de Video:</strong> Incluimos descripciones de video para personas con discapacidades visuales.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Pruebas de Accesibilidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        Realizamos pruebas regulares de accesibilidad para identificar y corregir problemas:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Pruebas Automáticas:</strong> Utilizamos herramientas de prueba automáticas para detectar problemas de accesibilidad.</li>
        <li><strong>Pruebas Manuales:</strong> Realizamos pruebas manuales con personas con discapacidades para obtener feedback real.</li>
        <li><strong>Pruebas con Tecnologías de Asistencia:</strong> Probamos nuestro sitio web con diferentes tecnologías de asistencia.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Capacitación del Personal</h2>
      <p className="mb-4 dark:text-zinc-200">
        Capacitamos a nuestro equipo para asegurar la accesibilidad:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cursos de Accesibilidad:</strong> Ofrecemos cursos de capacitación sobre accesibilidad web a nuestro personal.</li>
        <li><strong>Guías de Estilo:</strong> Creamos guías de estilo y procedimientos para la creación de contenido accesible.</li>
        <li><strong>Revisión Continua:</strong> Realizamos revisiones continuas de nuestro contenido para asegurar su accesibilidad.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta, inquietud o sugerencia sobre la accesibilidad de nuestro sitio web, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>. Estamos comprometidos a mejorar continuamente la accesibilidad y valoramos tu retroalimentación.
      </p>
    </div>
  );
};

export default AccessibilityPolicy;```

## `app/politica-de-anti-soborno-y-corrupcion/page.jsx`
```jsx
import React from 'react';

const AntiCorruptionPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Anti-Soborno y Corrupción</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, estamos comprometidos con la integridad y la transparencia en todas nuestras operaciones. Esta política de anti-soborno y corrupción establece los principios y procedimientos que guian nuestro comportamiento y decisiones para prevenir cualquier forma de soborno y corrupción.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Introducción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Esta política de anti-soborno y corrupción define los estándares de conducta esperados de todos los empleados, socios y contratistas de Alphaqueb Consulting. Nuestro objetivo es prevenir cualquier forma de soborno y corrupción y mantener la integridad en todas nuestras operaciones.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Definiciones</h2>
      <p className="mb-4 dark:text-zinc-200">
        <strong>Soborno:</strong> Es una oferta, pago, promesa de pago o cualquier otra cosa de valor ofrecida, dada o prometida, directa o indirectamente, para influir en una decisión o acción de un funcionario público o empleado de una empresa.
      </p>
      <p className="mb-4 dark:text-zinc-200">
        <strong>Corrupción:</strong> Es el uso indebido de poder para obtener algún beneficio personal, generalmente a costa de la legalidad o de la integridad.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Principios de Ética</h2>
      <p className="mb-4 dark:text-zinc-200">
        Los siguientes principios de ética guían nuestro comportamiento en el trabajo:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>No Sobornos:</strong> No aceptaremos ni ofreceremos sobornos en ninguna circunstancia.</li>
        <li><strong>No Corrupción:</strong> No participaremos en actividades corruptas ni colaboraremos con individuos o entidades corruptas.</li>
        <li><strong>Integridad:</strong> Actuaremos con integridad en todas nuestras acciones y decisiones.</li>
        <li><strong>Transparencia:</strong> Mantendremos la transparencia en todas nuestras operaciones y transacciones.</li>
        <li><strong>Respeto:</strong> Valoramos y respetamos a todas las personas con las que interactuamos.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Prohibiciones Específicas</h2>
      <p className="mb-4 dark:text-zinc-200">
        Prohibimos explícitamente las siguientes acciones:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Aceptación de Sobornos:</strong> No aceptaremos sobornos en ninguna forma, ya sea directa o indirecta.</li>
        <li><strong>Ofrecimiento de Sobornos:</strong> No ofreceremos sobornos a funcionarios públicos, empleados de otras empresas o terceros.</li>
        <li><strong>Participación en Corrupción:</strong> No participaremos en actividades corruptas ni colaboraremos con individuos o entidades corruptas.</li>
        <li><strong>Uso de Fondos Corporativos:</strong> No utilizaremos fondos corporativos para fines corruptos o ilícitos.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Cumplimiento Legal</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cumplimos con todas las leyes y regulaciones aplicables relacionadas con la prevención de sobornos y corrupción:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Leyes Anticorrupción:</strong> Cumplimos con todas las leyes anticorrupción nacionales e internacionales.</li>
        <li><strong>Normativas Internacionales:</strong> Cumplimos con las normativas internacionales de prevención de sobornos.</li>
        <li><strong>Reporte de Transacciones:</strong> Reportamos todas las transacciones significativas a las autoridades competentes.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Formación y Capacitación</h2>
      <p className="mb-4 dark:text-zinc-200">
        Ofrecemos formación y capacitación regular a nuestros empleados para asegurar que comprendan y cumplan con nuestra política de anti-soborno y corrupción:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cursos de Ética:</strong> Realizamos cursos y talleres sobre ética y prevención de sobornos.</li>
        <li><strong>Materiales de Referencia:</strong> Distribuimos materiales informativos sobre nuestra política de anti-soborno y corrupción.</li>
        <li><strong>Capacitación Continua:</strong> Actualizamos regularmente la formación para adaptarnos a cambios legales y regulatorios.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Denuncias y Reclamaciones</h2>
      <p className="mb-4 dark:text-zinc-200">
        Fomentamos un ambiente donde los empleados puedan denunciar comportamientos inapropiados sin temor a represalias:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Canales de Denuncia:</strong> Proporcionamos canales seguros para denunciar comportamientos inapropiados o actividades sospechosas.</li>
        <li><strong>Confidencialidad:</strong> Protegemos la confidencialidad de las denuncias y tratamos todas las reclamaciones de manera justa e imparcial.</li>
        <li><strong>Investigaciones:</strong> Realizamos investigaciones exhaustivas de todas las denuncias y reclamaciones.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">8. Responsabilidad de los Empleados</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cada empleado es responsable de:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cumplir con la Política de Anti-Soborno y Corrupción:</strong> Se comprometen a cumplir con todos los principios y valores establecidos en esta política.</li>
        <li><strong>Reportar Incidencias:</strong> Informan de cualquier actividad que pueda infringir la política de anti-soborno y corrupción.</li>
        <li><strong>Participar en Formación:</strong> Asisten a cursos y talleres de prevención de sobornos y corrupción.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">9. Consecuencias de la Infracción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cualquier infracción a esta política de anti-soborno y corrupción puede resultar en:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Advertencias:</strong> Se proporcionará una advertencia inicial para primeras infracciones menores.</li>
        <li><strong>Sanciones Disciplinarias:</strong> Se aplicarán sanciones disciplinarias para infracciones más graves, incluyendo suspensiones y despido.</li>
        <li><strong>Responsabilidades Legales:</strong> Se podrán tomar acciones legales contra empleados que infrinjan la ley.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">10. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de anti-soborno y corrupción, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>. Estamos comprometidos a mantener altos estándares de integridad y valoramos tu contribución para mejorar nuestra organización.
      </p>
    </div>
  );
};

export default AntiCorruptionPolicy;```

## `app/politica-de-comentarios-o-contenido-generado-por-usuarios/page.jsx`
```jsx
import React from 'react';

const UserGeneratedContentPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Comentarios o Contenido Generado por Usuarios</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, valoramos la interacción y los comentarios de nuestros usuarios. Esta política de comentarios o contenido generado por usuarios establece las directrices para la publicación y gestión del contenido que comparten en nuestro sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Objetivo de la Política</h2>
      <p className="mb-4 dark:text-zinc-200">
        El objetivo de esta política es mantener un ambiente seguro, respetuoso y productivo para todos los usuarios. Nos comprometemos a monitorear y moderar los comentarios y contenido generado por usuarios para garantizar que cumplan con nuestras normas y valores.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Reglas para Comentarios y Contenido Generado por Usuarios</h2>
      <p className="mb-4 dark:text-zinc-200">
        Al publicar comentarios o contenido en nuestro sitio web, aceptas cumplir con las siguientes reglas:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Respeto:</strong> No se permiten comentarios o contenido ofensivos, abusivos, difamatórios, irrespetuosos o que inciten a la discriminación.</li>
        <li><strong>Precisión:</strong> Los comentarios deben ser precisos y factuales. No se permiten comentarios falsos o engañosos.</li>
        <li><strong>Contenido Propio:</strong> Solo puedes publicar contenido que hayas creado tú mismo o que tengas permiso para compartir.</li>
        <li><strong>Privacidad:</strong> No se permiten comentarios o contenido que infrinjan la privacidad de terceros.</li>
        <li><strong>Spam:</strong> No se permiten comentarios o contenido promocional no solicitado o spam.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Moderación de Contenido</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de moderar, editar o eliminar cualquier comentario o contenido que no cumpla con estas reglas sin necesidad de previo aviso. Además, nos reservamos el derecho de bloquear a usuarios que violen repetidamente estas reglas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Propiedad Intelectual</h2>
      <p className="mb-4 dark:text-zinc-200">
        El contenido que publicas en nuestro sitio web permanece tu propiedad. Sin embargo, al publicar contenido en nuestro sitio web, otorgas a Alphaqueb Consulting una licencia no exclusiva, transferible, gratuita, sublicenciable, perpetua y mundial para usar, copiar, modificar, publicar, distribuir y mostrar dicho contenido para fines de operar, promocionar y mejorar nuestro sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Responsabilidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        No nos hacemos responsables de los comentarios o contenido generado por usuarios. El usuario publica el contenido bajo su propio riesgo y es responsable de cualquier daño o perjuicio que pueda causar.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Cambios en la Política</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de modificar esta política de comentarios o contenido generado por usuarios en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio web. El usuario será responsable de revisar periódicamente la política para estar al tanto de cualquier cambio.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de comentarios o contenido generado por usuarios, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default UserGeneratedContentPolicy;```

## `app/politica-de-coockies/page.jsx`
```jsx
import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Cookies</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web y proporcionarte servicios personalizados. Este aviso de cookies explica qué tipos de cookies utilizamos, cómo las usamos y cómo puedes gestionarlas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Qué son las Cookies</h2>
      <p className="mb-4 dark:text-zinc-200">
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estos archivos contienen información que puede ser utilizada por el sitio web para recordar tus preferencias, mejorar la funcionalidad y proporcionar estadísticas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Tipos de Cookies que Utilizamos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Utilizamos diferentes tipos de cookies para diversos fines:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web y la prestación de servicios.</li>
        <li><strong>Cookies analíticas:</strong> Para recopilar información sobre el uso del sitio web y mejorar la experiencia del usuario.</li>
        <li><strong>Cookies de personalización:</strong> Para ofrecer contenido y publicidad personalizados basados en tus intereses.</li>
        <li><strong>Cookies de publicidad:</strong> Para mostrar anuncios relevantes y medir su efectividad.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Cómo Usamos las Cookies</h2>
      <p className="mb-4 dark:text-zinc-200">
        Utilizamos las cookies para:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li>Personalizar tu experiencia en nuestro sitio web.</li>
        <li>Mejorar la funcionalidad y rendimiento del sitio web.</li>
        <li>Analizar el tráfico del sitio web y comprender mejor las necesidades de nuestros usuarios.</li>
        <li>Mostrar publicidad relevante y medir su efectividad.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Cómo Gestiona las Cookies</h2>
      <p className="mb-4 dark:text-zinc-200">
        Puedes gestionar las cookies en tu navegador según tus preferencias. Aquí te mostramos cómo hacerlo en algunos navegadores populares:
      </p>
      <p className="mb-4 dark:text-zinc-200">
      Puedes gestionar las cookies en tu navegador según tus preferencias. Aquí te mostramos cómo hacerlo en algunos navegadores populares:
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Google Chrome:</strong> Configuración - Privacidad y seguridad - Configuración de cookies y otros datos de sitios web.</li>
        <li><strong>Mozilla Firefox:</strong> Opciones - Privacidad y seguridad - Cookies y datos del sitio web.</li>
        <li><strong>Microsoft Edge:</strong> Configuración - Privacidad, búsqueda y servicios - Configuración de cookies.</li>
        <li><strong>Safari:</strong> Preferencias - Privacidad - Cookies.</li>
      </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Desactivar las Cookies</h2>
      <p className="mb-4 dark:text-zinc-200">
        Puedes desactivar las cookies en tu navegador, pero esto puede afectar la funcionalidad del sitio web y limitar tu experiencia. Algunas funciones del sitio web pueden no funcionar correctamente si desactivas las cookies.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">Cambios en esta Política de Cookies</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de actualizar esta política de cookies periódicamente. Te recomendamos revisarla regularmente para estar al tanto de cualquier cambio. Cualquier modificación entrará en vigor una vez publicada en nuestro sitio web.
      </p>
      
      <p className="mt-8 text-center dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de cookies, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default CookiePolicy;

```

## `app/politica-de-cumplimiento-regulatorio/page.jsx`
```jsx
import React from 'react';

const RegulatoryCompliancePolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Cumplimiento Regulatorio</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, estamos comprometidos con el cumplimiento de todas las leyes, regulaciones y estándares aplicables en todas nuestras operaciones. Esta política de cumplimiento regulatorio establece los principios y procedimientos que guian nuestro comportamiento y decisiones para asegurar el cumplimiento regulatorio.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Introducción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Esta política de cumplimiento regulatorio define los estándares de conducta esperados de todos los empleados, socios y contratistas de Alphaqueb Consulting. Nuestro objetivo es garantizar que todas nuestras operaciones estén en conformidad con las leyes y regulaciones aplicables para mantener la integridad y la transparencia.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Compromiso con el Cumplimiento Regulatorio</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos comprometemos a:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cumplir con las Leyes y Regulaciones:</strong> Cumplir con todas las leyes, regulaciones y estándares aplicables en todas nuestras operaciones.</li>
        <li><strong>Transparencia:</strong> Mantener la transparencia en todas nuestras acciones y decisiones.</li>
        <li><strong>Integridad:</strong> Actuar con integridad en todas nuestras operaciones.</li>
        <li><strong>Educación y Formación:</strong> Proporcionar formación continua a nuestros empleados sobre cumplimiento regulatorio.</li>
        <li><strong>Denuncias y Reclamaciones:</strong> Fomentar un ambiente donde se puedan denunciar comportamientos inapropiados sin temor a represalias.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Ámbito de Aplicación</h2>
      <p className="mb-4 dark:text-zinc-200">
        Esta política se aplica a:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Empleados:</strong> Todos los empleados de Alphaqueb Consulting.</li>
        <li><strong>Socios:</strong> Socios y miembros del consejo de administración.</li>
        <li><strong>Contratistas:</strong> Proveedores y contratistas de servicios.</li>
        <li><strong>Subcontratistas:</strong> Subcontratistas y asociados.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Cumplimiento de Leyes y Regulaciones</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cumplimos con todas las leyes y regulaciones aplicables, incluyendo:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Leyes Laborales:</strong> Cumplimos con todas las leyes laborales y regulaciones de seguridad y salud en el trabajo.</li>
        <li><strong>Leyes de Protección de Datos:</strong> Protegemos la información personal de nuestros clientes y empleados de acuerdo con las leyes de protección de datos aplicables.</li>
        <li><strong>Leyes Ambientales:</strong> Implementamos prácticas sostenibles y cumplimos con las leyes ambientales.</li>
        <li><strong>Leyes de Competencia:</strong> Cumplimos con las leyes de competencia y antimonopolio.</li>
        <li><strong>Leyes de Impuestos:</strong> Cumplimos con todas las leyes fiscales y tributarias aplicables.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Formación y Capacitación</h2>
      <p className="mb-4 dark:text-zinc-200">
        Ofrecemos formación y capacitación regular a nuestros empleados para asegurar que comprendan y cumplan con nuestra política de cumplimiento regulatorio:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cursos de Cumplimiento Regulatorio:</strong> Realizamos cursos y talleres sobre cumplimiento regulatorio.</li>
        <li><strong>Materiales de Referencia:</strong> Distribuimos materiales informativos sobre leyes y regulaciones aplicables.</li>
        <li><strong>Capacitación Continua:</strong> Actualizamos regularmente la formación para adaptarnos a cambios legales y regulatorios.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Monitoreo y Evaluación</h2>
      <p className="mb-4 dark:text-zinc-200">
        Realizamos monitoreo y evaluación periódicas para asegurar el cumplimiento regulatorio:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Auditorías Internas:</strong> Realizamos auditorías internas periódicas para evaluar el cumplimiento regulatorio.</li>
        <li><strong>Revisión de Políticas:</strong> Revisamos y actualizamos nuestras políticas y procedimientos periódicamente.</li>
        <li><strong>Seguimiento de Incidentes:</strong> Seguimos y documentamos cualquier incidente que pueda afectar el cumplimiento regulatorio.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Denuncias y Reclamaciones</h2>
      <p className="mb-4 dark:text-zinc-200">
        Fomentamos un ambiente donde los empleados puedan denunciar comportamientos inapropiados sin temor a represalias:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Canales de Denuncia:</strong> Proporcionamos canales seguros para denunciar comportamientos inapropiados o actividades sospechosas.</li>
        <li><strong>Confidencialidad:</strong> Protegemos la confidencialidad de las denuncias y tratamos todas las reclamaciones de manera justa e imparcial.</li>
        <li><strong>Investigaciones:</strong> Realizamos investigaciones exhaustivas de todas las denuncias y reclamaciones.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">8. Responsabilidad de los Empleados</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cada empleado es responsable de:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cumplir con la Política de Cumplimiento Regulatorio:</strong> Se comprometen a cumplir con todos los principios y valores establecidos en esta política.</li>
        <li><strong>Reportar Incidencias:</strong> Informan de cualquier actividad que pueda infringir la política de cumplimiento regulatorio.</li>
        <li><strong>Participar en Formación:</strong> Asisten a cursos y talleres de cumplimiento regulatorio.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">9. Consecuencias de la Infracción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cualquier infracción a esta política de cumplimiento regulatorio puede resultar en:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Advertencias:</strong> Se proporcionará una advertencia inicial para primeras infracciones menores.</li>
        <li><strong>Sanciones Disciplinarias:</strong> Se aplicarán sanciones disciplinarias para infracciones más graves, incluyendo suspensiones y despido.</li>
        <li><strong>Responsabilidades Legales:</strong> Se podrán tomar acciones legales contra empleados que infrinjan la ley.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">10. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de cumplimiento regulatorio, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>. Estamos comprometidos a mantener altos estándares de cumplimiento regulatorio y valoramos tu contribución para mejorar nuestra organización.
      </p>
    </div>
  );
};

export default RegulatoryCompliancePolicy;```

## `app/politica-de-enlaces-externos/page.jsx`
```jsx
import React from 'react';

const ExternalLinksPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Enlaces Externos</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, comprendemos la importancia de proporcionar enlaces útiles y relevantes a nuestros usuarios. Esta política de enlaces externos explica cómo gestionamos y utilizamos los enlaces a sitios web de terceros en nuestro sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Objetivo de la Política</h2>
      <p className="mb-4 dark:text-zinc-200">
        El objetivo de esta política es establecer las directrices para el uso de enlaces externos en nuestro sitio web, garantizando que los enlaces sean relevantes, seguros y de calidad. Además, esta política ayuda a proteger la reputación de Alphaqueb Consulting y a garantizar que nuestros usuarios tengan una experiencia positiva.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Uso de Enlaces Externos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cuando incluimos enlaces a sitios web de terceros en nuestro sitio web, nos aseguramos de que estos enlaces sean relevantes y de alta calidad. Sin embargo, una vez que el usuario hace clic en un enlace externo, ya no estamos responsables del contenido, políticas de privacidad o prácticas de los sitios web de terceros.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Responsabilidad de los Enlaces Externos</h2>
      <p className="mb-4 dark:text-zinc-200">
        No nos hacemos responsables de los contenidos, políticas de privacidad, prácticas comerciales o cualquier otro aspecto de los sitios web de terceros a los que enlazamos. El usuario asume el riesgo completo al hacer clic en enlaces a sitios web externos.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Política de Enlaces Recíprocos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si deseas enlazar a nuestro sitio web, te pedimos que sigas las siguientes políticas:
        <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
          <li>El enlace debe dirigirse a la página principal de nuestro sitio web (<a href="https://www.alphaqueb.com" className="text-orange-500 hover:underline  dark:text-zinc-200">https://www.alphaqueb.com</a>).</li>
          <li>No se permiten enlaces a páginas que contengan contenido ilegal, obsceno, difamatório, ofensivo o que viole los derechos de terceros.</li>
          <li>Debes solicitar permiso por escrito antes de enlazar a nuestro sitio web. Envía tu solicitud a <strong>hola@alphaqueb.com</strong>.</li>
          <li>Los enlaces deben ser visibles y claros, sin usar técnicas engañosas para redirigir a los usuarios a nuestro sitio web.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2  dark:text-zinc-200">5. Remoción de Enlaces</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de solicitar la eliminación de enlaces a nuestro sitio web en cualquier momento, sin necesidad de previo aviso. Si recibimos una solicitud de eliminación de enlace, la procesaremos lo antes posible.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Cambios en la Política</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de modificar esta política de enlaces externos en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio web. El usuario será responsable de revisar periódicamente la política para estar al tanto de cualquier cambio.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de enlaces externos, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default ExternalLinksPolicy;```

## `app/politica-de-etica-empresarial/page.jsx`
```jsx
import React from 'react';

const EthicsPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Ética Empresarial</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, estamos comprometidos con la integridad y la ética en todas nuestras operaciones. Esta política de ética empresarial establece los principios y valores que guían nuestro comportamiento y decisiones en el día a día.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Introducción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Esta política de ética empresarial define los estándares de conducta esperados de todos los empleados, socios y contratistas de Alphaqueb Consulting. Nuestro objetivo es construir relaciones sólidas basadas en la confianza, la honestidad y la responsabilidad.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Valores Corporativos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nuestros valores corporativos son fundamentales para nuestra ética empresarial:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Honestidad:</strong> Actuamos con transparencia y integridad en todas nuestras acciones.</li>
        <li><strong>Responsabilidad:</strong> Somos responsables de nuestras acciones y decisiones.</li>
        <li><strong>Respeto:</strong> Valoramos y respetamos a todas las personas con las que interactuamos.</li>
        <li><strong>Innovación:</strong> Buscamos constantemente nuevas formas de mejorar y crecer.</li>
        <li><strong>Excelencia:</strong> Nos esforzamos por alcanzar altos estándares de calidad en todo lo que hacemos.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Principios de Ética</h2>
      <p className="mb-4 dark:text-zinc-200">
        Los siguientes principios de ética guían nuestro comportamiento en el trabajo:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>No Discriminación:</strong> No discriminamos a nadie en base a su raza, género, orientación sexual, religión, edad o discapacidad.</li>
        <li><strong>Igualdad de Oportunidades:</strong> Proporcionamos oportunidades iguales para todos los empleados y candidatos.</li>
        <li><strong>Confidencialidad:</strong> Protegemos la información confidencial y privada de nuestros clientes y empleados.</li>
        <li><strong>Honestidad en las Relaciones Comerciales:</strong> Mantenemos relaciones comerciales justas y transparentes con nuestros clientes, proveedores y socios.</li>
        <li><strong>No Competencia Desleal:</strong> No participamos en prácticas de competencia desleal o actividades que puedan perjudicar a nuestros competidores legítimos.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Conducta Esperada</h2>
      <p className="mb-4 dark:text-zinc-200">
        Esperamos que todos los miembros de nuestro equipo cumplan con los siguientes comportamientos:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Trabajo en Equipo:</strong> Colaboramos de manera efectiva con nuestros compañeros de trabajo.</li>
        <li><strong>Comunicación Clara:</strong> Nos comunicamos de manera clara y concisa en todas nuestras interacciones.</li>
        <li><strong>Resolución de Conflictos:</strong> Resolvemos conflictos de manera constructiva y profesional.</li>
        <li><strong>Prevención de Fraudes:</strong> Reportamos cualquier actividad sospechosa o potencial fraude a los canales adecuados.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Cumplimiento Legal</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cumplimos con todas las leyes y regulaciones aplicables en todas nuestras operaciones. Esto incluye:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Leyes Laborales:</strong> Cumplimos con todas las leyes laborales y regulaciones de seguridad y salud en el trabajo.</li>
        <li><strong>Leyes de Protección de Datos:</strong> Protegemos la información personal de nuestros clientes y empleados de acuerdo con las leyes de protección de datos aplicables.</li>
        <li><strong>Leyes Ambientales:</strong> Implementamos prácticas sostenibles y cumplimos con las leyes ambientales.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Formación y Capacitación</h2>
      <p className="mb-4 dark:text-zinc-200">
        Ofrecemos formación y capacitación regular a nuestros empleados para asegurar que comprendan y cumplan con nuestra política de ética empresarial:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cursos de Ética:</strong> Realizamos cursos y talleres sobre ética empresarial.</li>
        <li><strong>Materiales de Referencia:</strong> Distribuimos materiales informativos sobre nuestra política de ética.</li>
        <li><strong>Capacitación Continua:</strong> Actualizamos regularmente la formación para adaptarnos a cambios legales y regulatorios.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Denuncias y Reclamaciones</h2>
      <p className="mb-4 dark:text-zinc-200">
        Fomentamos un ambiente donde los empleados puedan denunciar comportamientos inapropiados sin temor a represalias:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Canales de Denuncia:</strong> Proporcionamos canales seguros para denunciar comportamientos inapropiados o actividades sospechosas.</li>
        <li><strong>Confidencialidad:</strong> Protegemos la confidencialidad de las denuncias y tratamos todas las reclamaciones de manera justa e imparcial.</li>
        <li><strong>Investigaciones:</strong> Realizamos investigaciones exhaustivas de todas las denuncias y reclamaciones.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">8. Responsabilidad de los Empleados</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cada empleado es responsable de:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cumplir con la Política de Ética Empresarial:</strong> Se comprometen a cumplir con todos los principios y valores establecidos en esta política.</li>
        <li><strong>Reportar Incidencias:</strong> Informan de cualquier actividad que pueda infringir la política de ética.</li>
        <li><strong>Participar en Formación:</strong> Asisten a cursos y talleres de ética empresarial.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">9. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de ética empresarial, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>. Estamos comprometidos a mantener altos estándares de ética y valoramos tu contribución para mejorar nuestra organización.
      </p>
    </div>
  );
};

export default EthicsPolicy;```

## `app/politica-de-proteccion-de-datos-personales/page.jsx`
```jsx
import React from 'react';

const DataProtectionPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Protección de Datos Personales</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, valoramos la privacidad y la seguridad de la información personal de nuestros usuarios. Esta política de protección de datos personales explica cómo recopilamos, usamos, compartimos y protegemos la información personal que nos proporcionas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Información que Recopilamos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Recopilamos información personal que nos proporcionas cuando interactúas con nuestro sitio web, incluyendo:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Información de Contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono.</li>
        <li><strong>Información de Perfil:</strong> Información que proporcionas al crear una cuenta o perfil.</li>
        <li><strong>Información de Uso:</strong> Datos sobre cómo interactúas con nuestro sitio web y servicios.</li>
        <li><strong>Información de Cookies:</strong> Datos recopilados a través de cookies y tecnologías similares.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Uso de la Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        Utilizamos la información personal que recopilamos para:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li>Proporcionarte servicios y experiencias personalizadas.</li>
        <li>Enviar comunicaciones relevantes, como ofertas y actualizaciones sobre nuestros servicios.</li>
        <li>Mejorar nuestros productos y servicios para satisfacer tus necesidades.</li>
        <li>Cumplir con nuestras obligaciones legales y contractuales.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Compartir Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        No vendemos ni compartimos tu información personal con terceros sin tu consentimiento, a menos que sea necesario para:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li>Cumplir con las leyes aplicables.</li>
        <li>Prevenir fraudes o actividades ilegales.</li>
        <li>Colaborar con proveedores de servicios que nos ayuden a proporcionar nuestros servicios.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Protección de la Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Utilizamos tecnologías de cifrado y protocolos de seguridad estándar para garantizar la protección de tus datos.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Tus Derechos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Tienes derecho a:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li>Acceder a la información personal que tenemos sobre ti.</li>
        <li>Corregir o actualizar la información personal que tengamos.</li>
        <li>Solicitar la eliminación de tu información personal.</li>
        <li>Oponerte al uso de tu información personal para fines de marketing.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Cambios en esta Política de Protección de Datos Personales</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de modificar esta política de protección de datos personales en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio web. El usuario será responsable de revisar periódicamente la política para estar al tanto de cualquier cambio.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de protección de datos personales, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default DataProtectionPolicy;```

## `app/politica-de-seguridad/page.jsx`
```jsx
import React from 'react';

const SecurityPolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Seguridad</h1>
      <p className="mb-4 dark:text-zinc-200">
        En Alphaqueb Consulting, valoramos la seguridad de la información personal y de los datos de nuestros clientes. Esta política de seguridad describe las medidas que tomamos para proteger la información que recopilamos y manejamos en nuestro sitio web y servicios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Recopilación de Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        Recopilamos información personal de los usuarios a través de diversas formas, incluyendo:
        <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
          <li>Formularios de contacto.</li>
          <li>Registros de acceso a nuestro sitio web.</li>
          <li>Cookies y tecnologías similares.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Uso de la Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        Utilizamos la información recopilada para:
        <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
          <li>Proporcionar y mejorar nuestros servicios.</li>
          <li>Enviar comunicaciones relevantes, como ofertas y actualizaciones.</li>
          <li>Analizar el tráfico del sitio web y comprender mejor las necesidades de nuestros usuarios.</li>
          <li>Cumplir con nuestras obligaciones legales y contractuales.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Protección de la Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        Implementamos medidas de seguridad para proteger tu información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Estas medidas incluyen:
        <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
          <li>Uso de protocolos de cifrado SSL/TLS para transacciones seguras.</li>
          <li>Control de acceso a los sistemas y datos.</li>
          <li>Actualizaciones y parches de seguridad regulares.</li>
          <li>Prácticas de seguridad de datos sólidas.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Compartir Información</h2>
      <p className="mb-4 dark:text-zinc-200">
        No vendemos ni compartimos tu información personal con terceros sin tu consentimiento, a menos que sea necesario para:
        <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
          <li>Cumplir con las leyes aplicables.</li>
          <li>Prevenir fraudes o actividades ilegales.</li>
          <li>Colaborar con proveedores de servicios que nos ayuden a proporcionar nuestros servicios.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Tus Derechos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Tienes derecho a:
        <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
          <li>Acceder a la información personal que tenemos sobre ti.</li>
          <li>Corregir o actualizar la información personal que tengamos.</li>
          <li>Solicitar la eliminación de tu información personal.</li>
          <li>Oponerte al uso de tu información personal para fines de marketing.</li>
        </ul>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Cambios en esta Política de Seguridad</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de modificar esta política de seguridad en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio web. El usuario será responsable de revisar periódicamente la política para estar al tanto de cualquier cambio.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de seguridad, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default SecurityPolicy;```

## `app/politica-de-uso-aceptable-de-recursos-tecnologicos/page.jsx`
```jsx
import React from 'react';

const AcceptableUsePolicy = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Política de Uso Aceptable de Recursos Tecnológicos</h1>
      <p className="mb-4">
        En Alphaqueb Consulting, valoramos la integridad y la seguridad de nuestros recursos tecnológicos. Esta política de uso aceptable establece las normas y procedimientos que guian el uso de nuestros recursos tecnológicos por parte de los empleados, socios y contratistas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Introducción</h2>
      <p className="mb-4">
        Esta política de uso aceptable define los estándares de conducta esperados en el uso de los recursos tecnológicos proporcionados por Alphaqueb Consulting. Nuestro objetivo es garantizar que todos los usuarios utilicen estos recursos de manera responsable y segura.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Alcance</h2>
      <p className="mb-4 dark:text-zinc-200">
        Esta política se aplica a:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Empleados:</strong> Todos los empleados de Alphaqueb Consulting.</li>
        <li><strong>Socios:</strong> Socios y miembros del consejo de administración.</li>
        <li><strong>Contratistas:</strong> Proveedores y contratistas de servicios.</li>
        <li><strong>Subcontratistas:</strong> Subcontratistas y asociados.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Uso Responsable de los Recursos Tecnológicos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Los recursos tecnológicos proporcionados por Alphaqueb Consulting, incluyendo computadoras, dispositivos móviles, software, redes y sistemas de comunicación, deben usarse de manera responsable y conforme a esta política. Los usuarios no deben:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Usar los recursos para fines personales no autorizados:</strong> Los recursos tecnológicos deben usarse principalmente para propósitos laborales.</li>
        <li><strong>Instalar software no autorizado:</strong> Solo se permite instalar software que haya sido aprobado por la administración de TI.</li>
        <li><strong>Acceder a sistemas o redes no autorizadas:</strong> Los usuarios no deben intentar acceder a sistemas o redes a los que no tengan acceso autorizado.</li>
        <li><strong>Compartir credenciales de acceso:</strong> No se permiten compartir contraseñas o credenciales de acceso con terceros.</li>
        <li><strong>Realizar actividades ilegales:</strong> Los recursos tecnológicos no deben usarse para actividades ilegales o dañinas.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Protección de Datos</h2>
      <p className="mb-4 dark:text-zinc-200">
        Los usuarios deben proteger la información y datos sensibles de la empresa:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Confidencialidad:</strong> Mantener la confidencialidad de la información y datos sensibles de la empresa.</li>
        <li><strong>Seguridad de Datos:</strong> Utilizar medidas de seguridad adecuadas para proteger los datos de la empresa.</li>
        <li><strong>Reporte de Incidentes:</strong> Reportar cualquier incidente de seguridad o pérdida de datos a la administración de TI.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Uso de Internet y Correo Electrónico</h2>
      <p className="mb-4 dark:text-zinc-200">
        El uso de internet y correo electrónico en los recursos tecnológicos proporcionados por Alphaqueb Consulting está sujeto a las siguientes reglas:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Contenido Adecuado:</strong> No se permiten el acceso o el envío de contenido ilegal, ofensivo, difamatório o que viole los derechos de terceros.</li>
        <li><strong>Uso Comercial:</strong> No se permiten actividades comerciales no autorizadas mediante el uso de la red corporativa.</li>
        <li><strong>Privacidad:</strong> Respetar la privacidad de los demás usuarios y no interceptar o leer correos electrónicos o mensajes no autorizados.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Monitoreo y Auditoría</h2>
      <p className="mb-4 dark:text-zinc-200">
        La administración de TI de Alphaqueb Consulting se reserva el derecho de monitorear y auditar el uso de los recursos tecnológicos en cualquier momento:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Monitoreo:</strong> Podemos monitorear el uso de los recursos tecnológicos para garantizar el cumplimiento de esta política.</li>
        <li><strong>Auditoría:</strong> Realizamos auditorías periódicas para evaluar el uso adecuado de los recursos tecnológicos.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Consecuencias de la Infracción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Cualquier infracción a esta política de uso aceptable puede resultar en:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Advertencias:</strong> Se proporcionará una advertencia inicial para primeras infracciones menores.</li>
        <li><strong>Sanciones Disciplinarias:</strong> Se aplicarán sanciones disciplinarias para infracciones más graves, incluyendo suspensiones y despido.</li>
        <li><strong>Responsabilidades Legales:</strong> Se podrán tomar acciones legales contra empleados que infrinjan la ley.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">8. Formación y Capacitación</h2>
      <p className="mb-4 dark:text-zinc-200">
        Ofrecemos formación y capacitación regular a nuestros empleados para asegurar que comprendan y cumplan con nuestra política de uso aceptable:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li><strong>Cursos de Uso Aceptable:</strong> Realizamos cursos y talleres sobre el uso aceptable de recursos tecnológicos.</li>
        <li><strong>Materiales de Referencia:</strong> Distribuimos materiales informativos sobre esta política.</li>
        <li><strong>Capacitación Continua:</strong> Actualizamos regularmente la formación para adaptarnos a cambios en las políticas y tecnologías.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">9. Cambios en la Política</h2>
      <p className="mb-4 dark:text-zinc-200">
        Nos reservamos el derecho de modificar esta política de uso aceptable en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en nuestro sitio web o comunicadas a los usuarios. Los usuarios serán responsables de revisar periódicamente la política para estar al tanto de cualquier cambio.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">10. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre esta política de uso aceptable de recursos tecnológicos, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>. Estamos comprometidos a mantener altos estándares de uso responsable y valoramos tu contribución para mejorar nuestra organización.
      </p>
    </div>
  );
};

export default AcceptableUsePolicy;```

## `app/servicios/automatizar/desarrollo-implementacion-sistemas-automatizacion/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Desarrollo e Implementación de Sistemas de Automatización",
  description1: "Optimiza la eficiencia y productividad de tu empresa con soluciones de automatización industrial a medida.",
  description2: "Diseñamos e implementamos sistemas de control automatizados que mejoran los procesos operativos y reducen costos.",
  description3: "Integramos tecnologías como PLCs, sensores IoT y software SCADA para una supervisión y control precisos en tiempo real.",
  description4: "Nuestras soluciones de automatización garantizan una mayor flexibilidad y escalabilidad para adaptarse a las necesidades de tu industria.",
  advantagesTitle: "Beneficios de la automatización industrial:",
  advantages: [
    "Optimización de procesos: Reduce tiempos de producción y mejora la eficiencia operativa.",
    "Reducción de errores: Minimiza fallos mediante sistemas de control precisos y automatizados.",
    "Monitoreo en tiempo real: Supervisa tus operaciones desde cualquier lugar con tecnología IoT.",
    "Ahorro de costos: Disminuye el consumo de energía y reduce desperdicios en la producción.",
    "Integración con otros sistemas: Conecta la automatización con ERP, MES y SCADA para un control total.",
    "Escalabilidad y adaptabilidad: Diseñamos soluciones flexibles que crecen junto con tu empresa."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tus necesidades y te mostraremos cómo la automatización puede mejorar tu negocio.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la automatización puede transformar tu industria. Agenda una sesión y optimiza tu producción."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-thisisengineering-3862627.jpg"
                alt="Desarrollo e Implementación de Sistemas de Automatización"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/automatizar/integracion-robots-industriales-sistemas-control/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Integración de Robots Industriales y Sistemas de Control",
  description1: "Optimiza la producción y eficiencia operativa con la integración de robots industriales en tus procesos de manufactura.",
  description2: "Desarrollamos soluciones de automatización con robots colaborativos, AGVs y brazos robóticos para mejorar la precisión y seguridad en el entorno industrial.",
  description3: "Integramos sistemas de control avanzados con PLCs, SCADA y sensores inteligentes para un monitoreo preciso y toma de decisiones en tiempo real.",
  description4: "Nuestra experiencia en automatización permite la adaptación de robots industriales a diversas industrias, maximizando la productividad y reduciendo costos operativos.",
  advantagesTitle: "Beneficios de la integración de robots industriales:",
  advantages: [
    "Aumento de la eficiencia: Reduce tiempos de producción y optimiza el uso de recursos.",
    "Mayor precisión y calidad: Minimiza errores en procesos repetitivos y mejora la calidad del producto final.",
    "Seguridad laboral: Disminuye riesgos en tareas peligrosas mediante la automatización con robots.",
    "Monitoreo inteligente: Implementamos análisis de datos en tiempo real para optimizar el desempeño de los robots.",
    "Escalabilidad: Diseñamos soluciones modulares que crecen con las necesidades de tu empresa.",
    "Integración con ERP y SCADA: Conectamos robots con sistemas de gestión para un control total de la producción."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo la robótica industrial puede mejorar tu negocio.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la robótica industrial puede transformar tu producción. Agenda una sesión y optimiza tu operación."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-thisisengineering-3862632.jpg"
                alt="Integración de Robots Industriales y Sistemas de Control"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;```

## `app/servicios/automatizar/integracion-sistemas-automatizacion-erp-mes/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Integración de Sistemas de Automatización con ERP y MES",
  description1: "Optimiza la gestión de tu empresa con la integración de sistemas de automatización con ERP y MES para un control total de la producción.",
  description2: "Conectamos sistemas SCADA, PLCs y dispositivos IoT con plataformas ERP y MES para una gestión unificada y eficiente.",
  description3: "Nuestra solución permite una supervisión en tiempo real, automatización de procesos y toma de decisiones basada en datos precisos.",
  description4: "Mejoramos la trazabilidad, optimizamos la cadena de suministro y aumentamos la productividad con una integración inteligente y escalable.",
  advantagesTitle: "Beneficios de la integración de automatización con ERP y MES:",
  advantages: [
    "Centralización de la información: Unifica datos operativos y administrativos en una sola plataforma.",
    "Automatización de procesos: Reduce errores y mejora la eficiencia en la gestión de producción.",
    "Monitoreo en tiempo real: Supervisa el estado de la producción y toma decisiones informadas.",
    "Optimización de la cadena de suministro: Ajusta la producción a la demanda en tiempo real.",
    "Reducción de costos operativos: Minimiza desperdicios y maximiza la rentabilidad.",
    "Escalabilidad y flexibilidad: Diseñamos soluciones adaptadas al crecimiento de tu empresa."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo integrar tus sistemas de automatización con ERP y MES.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la integración de sistemas de automatización con ERP y MES puede transformar tu producción. Agenda una sesión y optimiza tu negocio."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-luis-gomes-166706-546819.jpg"
                alt="Integración de Sistemas de Automatización con ERP y MES"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/automatizar/monitoreo-control-inteligente-tiempo-real/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Monitoreo y Control Inteligente en Tiempo Real",
  description1: "Optimiza la supervisión de tus procesos con soluciones avanzadas de monitoreo en tiempo real y control inteligente.",
  description2: "Implementamos sistemas basados en IoT, sensores inteligentes y SCADA para garantizar una gestión eficiente y automatizada.",
  description3: "Nuestra tecnología permite visualizar y analizar datos en tiempo real para una toma de decisiones precisa y efectiva.",
  description4: "Integramos herramientas de inteligencia artificial y analítica predictiva para mejorar la operatividad y reducir tiempos de respuesta.",
  advantagesTitle: "Beneficios del monitoreo y control inteligente:",
  advantages: [
    "Supervisión en tiempo real: Obtén visibilidad instantánea de tus procesos industriales.",
    "Automatización de decisiones: Integra sistemas inteligentes para mejorar la eficiencia.",
    "Reducción de tiempos de inactividad: Detecta anomalías y toma medidas preventivas automáticamente.",
    "Integración con IoT y SCADA: Conecta sensores y dispositivos para una gestión avanzada.",
    "Análisis predictivo: Anticipa fallos y optimiza el mantenimiento de tus equipos.",
    "Mayor seguridad operativa: Minimiza riesgos y mejora la seguridad en tus instalaciones."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo el monitoreo inteligente puede mejorar tu operación.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo el monitoreo inteligente puede transformar tu negocio. Agenda una sesión y optimiza tu operación."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-amorie-sam-468180864-30481728.jpg"
                alt="Monitoreo y Control Inteligente en Tiempo Real"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;```

## `app/servicios/automatizar/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link'; // Importamos el componente Link
import { Cpu, Server, Lock, Database, Settings, Bot, Eye, TrendingDown } from "lucide-react";


const COPY = {
  title: "Automatización Avanzada para la manufactura moderna",
  description1: "Desde aumentar la capacidad productiva hasta reducir costos operativos, te ayudamos a transformar tus procesos con tecnología de vanguardia, diseñada específicamente para las necesidades de la manufactura moderna.",
  description2: "La automatización avanzada no es un lujo, es una necesidad estratégica para cualquier negocio industrial que quiera mantenerse competitivo. Nuestras soluciones personalizadas te permiten optimizar cada etapa del proceso productivo, desde la planificación hasta la ejecución. Con un monitoreo constante y un control preciso, aseguramos un flujo de trabajo sin interrupciones, minimizamos errores y maximizamos la productividad en todas las áreas de tu operación.",
  description3: "Nuestro enfoque no se limita a implementar sistemas de automatización: construimos soluciones a tu medida. Ya sea que necesites aumentar la velocidad de tu producción, reducir el consumo de recursos, o integrar tus procesos con otros sistemas empresariales como ERP o MES, tenemos la experiencia y las herramientas necesarias para hacer realidad tu visión. Además, acompañamos a tu equipo en todo el proceso: desde la consultoría inicial hasta el soporte post-implementación, garantizando resultados sólidos y sostenibles.",
  description4: "Con años de experiencia en la industria manufacturera, nuestro equipo entiende los desafíos operativos a los que te enfrentas: tiempos muertos, inconsistencias en la calidad y altos costos de operación. Por eso, nuestras soluciones no solo automatizan procesos, sino que optimizan la totalidad de tu sistema de producción, permitiéndote obtener el máximo rendimiento de tus recursos. Al invertir en automatización avanzada, estarás garantizando no solo una mejora en la eficiencia, sino también la sostenibilidad y competitividad de tu empresa a largo plazo.",
  advantagesTitle: "Ventajas que transformarán tu línea de producción:",
  advantages: [
      "Aumento de la capacidad de producción: Eleva la velocidad y eficiencia de tu línea de producción sin sacrificar calidad. Nuestros sistemas manejan altos volúmenes con precisión y consistencia.",
      "Consistencia garantizada: Evita variabilidades y errores. Nuestra tecnología asegura resultados uniformes en cada ciclo de producción, mejorando la calidad final de tus productos.",
      "Reducción de costos operativos: Identifica y elimina ineficiencias en el uso de mano de obra y materiales, maximizando la rentabilidad en cada etapa del proceso.",
      "Monitoreo constante: Obtén visibilidad total sobre tus operaciones con paneles personalizados y datos en tiempo real. Esto te permite tomar decisiones rápidas e informadas.",
      "Control preciso y dinámico: Realiza ajustes en tiempo real con nuestras interfaces intuitivas, manteniendo un desempeño óptimo incluso en entornos industriales complejos.",
      "Integración total: Conecta tu sistema de automatización con plataformas empresariales como ERP y MES, logrando una gestión completamente integrada y eficiente."
  ],
  costDetails: "Dar el primer paso hacia la transformación de tu producción nunca fue tan accesible. Por solo **1 dólar**, ofrecemos una consultoría inicial donde analizaremos tus procesos actuales, identificaremos oportunidades clave y diseñaremos un plan personalizado para implementar automatización avanzada en tu negocio. Este no es solo un servicio; es una inversión estratégica que puede cambiar el rumbo de tu empresa.",
  buttonLabel: "Reserva Tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo nuestras soluciones de automatización pueden transformar tu producción. Reserva tu consultoría inicial y empieza a optimizar tu negocio hoy mismo."
};

const services = [
  { 
    name: "Desarrollo e Implementación de Sistemas de Automatización", 
    slug: "desarrollo-implementacion-sistemas-automatizacion", 
    icon: <Settings className="w-6 h-6 text-custom-orange" /> 
  },
  { 
    name: "Integración de Sistemas de Automatización con ERP y MES", 
    slug: "integracion-sistemas-automatizacion-erp-mes", 
    icon: <Database className="w-6 h-6 text-custom-orange" /> 
  },
  { 
    name: "Integración de Robots Industriales con Sistemas de Control", 
    slug: "integracion-robots-industriales-sistemas-control", 
    icon: <Bot className="w-6 h-6 text-custom-orange" /> 
  },
  { 
    name: "Monitoreo y Control Inteligente en Tiempo Real", 
    slug: "monitoreo-control-inteligente-tiempo-real", 
    icon: <Eye className="w-6 h-6 text-custom-orange" /> 
  },
  { 
    name: "Reducción de Costos Operativos y Optimización de Recursos", 
    slug: "reduccion-costos-operativos-optimizacion-recursos", 
    icon: <TrendingDown className="w-6 h-6 text-custom-orange" /> 
  },
];

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/fulfillment.jpg"
                alt="Digital Transformation"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const [key, value] = advantage.split(": ");
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, 
                            <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                    {key}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            );
          })}
        </section>



        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-extrabold text-custom-orange dark:text-zinc-100 mb-12">
        Servicios Especializados
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link key={service.slug} href={`/servicios/automatizar/${service.slug}`} passHref>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex items-start hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-zinc-700">
              <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                <div className="w-12 h-12 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                  {service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  {service.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};


export default App;```

## `app/servicios/automatizar/reduccion-costos-operativos-optimizacion-recursos/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Reducción de Costos Operativos mediante Optimización de Recursos",
  description1: "Mejora la rentabilidad de tu empresa con estrategias de optimización de recursos que reducen costos y maximizan la eficiencia operativa.",
  description2: "Implementamos soluciones avanzadas para la gestión eficiente de energía, materiales y tiempo de producción, reduciendo desperdicios y costos innecesarios.",
  description3: "Nuestra tecnología permite un análisis detallado del uso de recursos en tiempo real para una toma de decisiones informada y precisa.",
  description4: "Integramos herramientas de monitoreo inteligente, automatización y analítica de datos para optimizar cada aspecto de la operación industrial.",
  advantagesTitle: "Beneficios de la optimización de recursos:",
  advantages: [
    "Reducción de costos energéticos: Optimiza el consumo de energía para disminuir gastos operativos.",
    "Gestión eficiente de materiales: Minimiza desperdicios y mejora la planificación de insumos.",
    "Automatización de procesos: Mejora la eficiencia productiva reduciendo la intervención manual.",
    "Monitoreo en tiempo real: Controla y ajusta el uso de recursos de manera continua.",
    "Análisis de datos avanzado: Detecta oportunidades de ahorro y mejora en cada área del negocio.",
    "Sostenibilidad y responsabilidad ambiental: Implementa estrategias más ecológicas y rentables."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo optimizar tus recursos y reducir costos operativos.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la optimización de recursos puede reducir costos y mejorar la eficiencia. Agenda una sesión y optimiza tu negocio."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-karolina-grabowska-5900135.jpg"
                alt="Reducción de Costos Operativos mediante Optimización de Recursos"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;```

## `app/servicios/scada/automatizacion-procesos-industriales/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Automatización de Procesos Industriales",
  description1: "Optimiza la producción y reduce costos con soluciones de automatización industrial diseñadas para mejorar la eficiencia operativa y la seguridad.",
  description2: "Nuestros sistemas de automatización integran tecnologías avanzadas para el control y monitoreo de procesos, minimizando errores y maximizando la productividad.",
  description3: "Desarrollamos soluciones a medida que incluyen controladores lógicos programables (PLC), robots industriales, sensores y software de gestión inteligente.",
  description4: "Implementamos estrategias de automatización flexibles y escalables para adaptarnos a las necesidades de tu industria, mejorando la calidad y tiempos de producción.",
  advantagesTitle: "Beneficios de la automatización industrial:",
  advantages: [
    "Incremento de la productividad: Reduce tiempos de producción y optimiza la eficiencia operativa.",
    "Reducción de errores: Minimiza fallos en los procesos gracias a sistemas automatizados y precisos.",
    "Seguridad mejorada: Disminuye riesgos laborales mediante la implementación de robots y controles automatizados.",
    "Integración con sistemas ERP y SCADA: Garantiza un flujo de información en tiempo real para una gestión óptima.",
    "Ahorro en costos operativos: Reduce desperdicios de materiales y consumo energético.",
    "Escalabilidad: Diseñamos soluciones modulares para crecer según las necesidades de tu empresa."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tus procesos actuales y te mostraremos cómo la automatización puede mejorar tu producción.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la automatización puede transformar tu industria. Agenda una sesión y optimiza tu producción."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-rezwan-1216589.jpg"
                alt="Automatización de Procesos Industriales"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;```

## `app/servicios/scada/ciberseguridad-proteccion-datos-en-scada/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Ciberseguridad y Protección de Datos en SCADA",
  description1: "Protege la infraestructura crítica de tu empresa con soluciones avanzadas de ciberseguridad para sistemas SCADA.",
  description2: "Reducimos vulnerabilidades y protegemos redes industriales frente a ataques cibernéticos mediante estrategias de seguridad robustas y proactivas.",
  description3: "Implementamos firewalls industriales, segmentación de redes y cifrado de datos para garantizar la integridad y disponibilidad de la información operativa.",
  description4: "Monitoreamos continuamente amenazas potenciales y realizamos auditorías de seguridad para fortalecer la resiliencia de tu sistema SCADA.",
  advantagesTitle: "Beneficios de la ciberseguridad en SCADA:",
  advantages: [
    "Protección contra ciberataques: Defiende tu infraestructura crítica de accesos no autorizados y amenazas avanzadas.",
    "Cumplimiento normativo: Garantiza que tu empresa cumpla con regulaciones de seguridad industrial y estándares internacionales.",
    "Monitoreo continuo: Detección en tiempo real de actividades sospechosas y respuesta automatizada a incidentes.",
    "Integridad y disponibilidad de datos: Asegura la confiabilidad de la información operativa y evita pérdidas de datos.",
    "Control de accesos: Implementamos autenticación multifactor y permisos granulares para mitigar riesgos internos.",
    "Evaluación y mitigación de vulnerabilidades: Identificamos puntos débiles en la red y aplicamos estrategias para reforzar la seguridad."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos la seguridad de tu infraestructura SCADA y te ayudaremos a fortalecer la protección de tus datos.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Protege tus sistemas SCADA con estrategias avanzadas de ciberseguridad. Agenda una sesión y refuerza la seguridad de tu empresa."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-joshsorenson-1054397.jpg"
                alt="Ciberseguridad y Protección de Datos en SCADA"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/scada/implementacion-configuracion-sistemas-scada/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Implementación y Configuración de Sistemas SCADA",
  description1: "Optimiza el monitoreo y control de tus procesos industriales con un sistema SCADA diseñado a la medida. Mejora la eficiencia operativa, reduce costos y aumenta la seguridad en tu planta.",
  description2: "Los sistemas SCADA permiten la supervisión en tiempo real, recolección de datos y automatización de procesos críticos, garantizando una mayor visibilidad y control sobre tu producción.",
  description3: "Nuestra experiencia en la integración de software y hardware nos permite diseñar soluciones SCADA personalizadas que se adaptan a las necesidades específicas de tu industria.",
  description4: "Implementamos arquitecturas escalables, seguras y eficientes, integrando PLCs, sensores y dispositivos IoT para un control total de tus operaciones.",
  advantagesTitle: "Beneficios de implementar un sistema SCADA:",
  advantages: [
    "Monitoreo en tiempo real: Obtén visibilidad total de tu producción desde cualquier dispositivo.",
    "Automatización y control: Reduce la intervención manual y optimiza la operación de maquinaria.",
    "Análisis de datos históricos: Identifica patrones y optimiza la toma de decisiones estratégicas.",
    "Seguridad y alarmas inteligentes: Detecta fallos y recibe alertas antes de que impacten la producción.",
    "Integración con otros sistemas: Conectamos SCADA con ERP, MES y otros sistemas para una gestión unificada.",
    "Reducción de costos operativos: Minimiza desperdicios, mejora la eficiencia y reduce tiempos de inactividad."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Analizaremos tu infraestructura y te mostraremos cómo un sistema SCADA puede optimizar tu producción.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza el control de tus procesos con SCADA. Agenda una sesión y descubre cómo mejorar la eficiencia de tu empresa."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-ibrahimboran-3582392.jpg"
                alt="Implementación y Configuración de Sistemas SCADA"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/scada/integracion-scada-erp-mes-sistemas-gestion/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Integración SCADA con ERP, MES y Sistemas de Gestión",
  description1: "Optimiza la conectividad y el flujo de información entre tus sistemas SCADA, ERP y MES para una gestión industrial eficiente y centralizada.",
  description2: "La integración de SCADA con sistemas de gestión permite una supervisión en tiempo real, automatización avanzada y mejor toma de decisiones basadas en datos precisos.",
  description3: "Conectamos plataformas industriales para que tu producción, inventarios y mantenimiento operen de manera sincronizada, mejorando la trazabilidad y eficiencia operativa.",
  description4: "Implementamos arquitecturas escalables que permiten una integración flexible y segura, adaptada a las necesidades de tu empresa.",
  advantagesTitle: "Beneficios de la integración SCADA con ERP y MES:",
  advantages: [
    "Supervisión en tiempo real: Conecta datos de producción con tu sistema de gestión empresarial.",
    "Automatización y control centralizado: Mejora la coordinación entre producción y gestión de recursos.",
    "Optimización del mantenimiento: Detecta fallos y genera órdenes de trabajo de manera automática.",
    "Gestión eficiente de inventarios: Sincroniza niveles de stock con la producción en tiempo real.",
    "Reducción de costos operativos: Minimiza desperdicios y optimiza la planificación de recursos.",
    "Mayor trazabilidad: Registra y analiza datos históricos para mejorar la toma de decisiones estratégicas."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo una integración SCADA eficiente puede potenciar tu operación.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza la conectividad de tus sistemas industriales. Agenda una sesión y descubre cómo mejorar la gestión de tu empresa."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-tima-miroshnichenko-6169641.jpg"
                alt="Integración SCADA con ERP, MES y Sistemas de Gestión"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/scada/mantenimiento-predictivo-reduccion-tiempos-inactividad/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Mantenimiento Predictivo y Reducción de Tiempos de Inactividad",
  description1: "Anticípate a fallos y optimiza el rendimiento de tus equipos con estrategias de mantenimiento predictivo basadas en datos en tiempo real.",
  description2: "El mantenimiento predictivo reduce tiempos de inactividad y costos de reparación al detectar anomalías antes de que se conviertan en fallos críticos.",
  description3: "Implementamos soluciones avanzadas que integran sensores IoT, machine learning y SCADA para monitorear continuamente el estado de tus activos industriales.",
  description4: "Optimiza la planificación del mantenimiento y maximiza la disponibilidad operativa con alertas automatizadas y análisis de tendencias en tus sistemas.",
  advantagesTitle: "Beneficios del mantenimiento predictivo:",
  advantages: [
    "Reducción de tiempos de inactividad: Evita paradas no programadas y mejora la eficiencia operativa.",
    "Disminución de costos de mantenimiento: Reduce reparaciones costosas con detección temprana de fallos.",
    "Mayor vida útil de los equipos: Optimiza el uso y rendimiento de maquinaria crítica.",
    "Alertas automatizadas: Recibe notificaciones en tiempo real sobre posibles fallos y mantenimientos requeridos.",
    "Integración con SCADA y ERP: Conecta datos en tiempo real para una gestión centralizada del mantenimiento.",
    "Análisis predictivo avanzado: Identifica patrones de desgaste y optimiza la planificación de mantenimiento."
  ],
  costDetails: "Empieza con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y te mostraremos cómo el mantenimiento predictivo puede optimizar tu operación.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Reduce tiempos de inactividad con estrategias de mantenimiento predictivo. Agenda una sesión y optimiza la gestión de tus activos industriales."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-kateryna-babaieva-1423213-2760241.jpg"
                alt="Mantenimiento Predictivo y Reducción de Tiempos de Inactividad"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/scada/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import {  Settings, Server, Shield, Factory, Cpu, Lock, Database } from "lucide-react";

import Link from 'next/link'; // Importamos el componente Link

const COPY = {
  title: "Servicio de integración de sistemas SCADA para la industria",
  description1: "Imagina supervisar y gestionar cada detalle de tus procesos industriales en tiempo real, reduciendo tiempos muertos, maximizando tu eficiencia y detectando oportunidades de mejora antes de que los problemas aparezcan. ",
  description2: "Los sistemas SCADA son más que una herramienta tecnológica: son una inversión estratégica. Te brindan una visión clara, precisa y completa de tus operaciones, desde la producción hasta la logística, garantizando que cada decisión que tomes esté respaldada por datos reales y procesables. En un mercado donde cada minuto cuenta, un sistema SCADA marca la diferencia entre mantenerte competitivo o quedarte atrás.",
  description3: "Nuestra oferta no se limita a la instalación de software. Ofrecemos una solución integral diseñada para manufactura. Esto incluye el diseño del sistema, la implementación técnica, el soporte continuo y la capacitación a tu equipo. Trabajamos contigo para personalizar cada aspecto del sistema, asegurándonos de que se adapte a las especificidades de tu planta y tus procesos. Ya sea que necesites monitoreo de líneas de producción, gestión energética, mantenimiento predictivo o integraciones avanzadas con otros sistemas empresariales, estamos listos para hacerlo realidad.",
  description4: "Nuestro enfoque está respaldado por tecnología de vanguardia y un equipo con años de experiencia en la industria manufacturera. Entendemos los retos operativos que enfrentas: tiempos de inactividad no planificados, pérdidas en la producción, ineficiencias energéticas y problemas de integración tecnológica. Por eso, nuestra misión es clara: ayudarte a eliminarlos con soluciones inteligentes y prácticas. Al invertir en un sistema SCADA, no solo modernizas tu operación; aseguras la sostenibilidad de tu negocio en un entorno competitivo y en constante evolución.",
  advantagesTitle: "Beneficios que harán crecer tu industria:",
  advantages: [
      "Monitoreo en tiempo real: Observa el desempeño de toda tu planta minuto a minuto, con alertas automáticas que permiten una rápida identificación y resolución de problemas. Desde gráficos avanzados hasta tableros personalizados, tendrás el control absoluto de tus operaciones.",
      "Automatización y eficiencia operativa: Olvídate de los procesos manuales que consumen tiempo y generan errores. Con un sistema SCADA, optimizas cada paso, asegurándote de que cada recurso sea aprovechado al máximo.",
      "Reducción de tiempos de inactividad: Los fallos no planificados son cosa del pasado. Con diagnósticos predictivos y alertas anticipadas, mantén tus operaciones funcionando sin interrupciones.",
      "Optimización de costos y recursos: Descubre cómo aprovechar mejor la energía, los materiales y el personal, reduciendo desperdicios y aumentando la rentabilidad.",
      "Seguridad avanzada: Protege tus datos y operaciones con protocolos de ciberseguridad robustos, asegurando que tu negocio esté blindado contra amenazas externas.",
      "Integración total: Conecta SCADA con sistemas como ERP, MES y otros softwares críticos para centralizar la gestión y mejorar la toma de decisiones estratégicas."
  ],
  costDetails: "La implementación de un sistema SCADA es una decisión que transformará tu industria. Para empezar, ofrecemos una consultoría inicial por solo **1 dólar**. Este es un pequeño paso hacia una gran transformación. Durante la consultoría, analizaremos tus procesos, identificaremos oportunidades y te presentaremos un plan personalizado para implementar SCADA en tu negocio. No se trata de un gasto, sino de una inversión estratégica que comienza con el costo más accesible del mercado.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Haz que cada minuto de tu producción cuente. Reserva una sesión personalizada y descubre cómo un sistema SCADA puede transformar tus operaciones industriales."
};

const services = [
  { name: "Automatización de Procesos Industriales", slug: "automatizacion-procesos-industriales", icon: <Cpu className="w-6 h-6 text-custom-orange" /> },
  { name: "Implementación y Configuración de Sistemas SCADA", slug: "implementacion-configuracion-sistemas-scada", icon: <Server className="w-6 h-6 text-custom-orange" /> },
  { name: "Mantenimiento Predictivo y Reducción de Tiempos de Inactividad", slug: "mantenimiento-predictivo-reduccion-tiempos-inactividad", icon: <Zap className="w-6 h-6 text-custom-orange" /> },
  { name: "Ciberseguridad y Protección de Datos en SCADA", slug: "ciberseguridad-proteccion-datos-en-scada", icon: <Lock className="w-6 h-6 text-custom-orange" /> },
  { name: "Integración SCADA con ERP y MES", slug: "integracion-scada-erp-mes-sistemas-gestion", icon: <Database className="w-6 h-6 text-custom-orange" /> },
];


const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/fulfillment.jpg"
                alt="Digital Transformation"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const [key, value] = advantage.split(": ");
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, 
                            <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                    {key}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-extrabold text-custom-orange dark:text-zinc-100 mb-12">
        Servicios Especializados
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link key={service.slug} href={`/servicios/scada/${service.slug}`} passHref>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex items-start hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-zinc-700">
              <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                <div className="w-12 h-12 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                  {service.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  {service.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};


export default App;```

## `app/servicios/transformar/analisis-de-datos-e-inteligencia-de-negocio/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Análisis de Datos e Inteligencia de Negocio",
  description1: "Transforma tus datos en información valiosa para tomar decisiones estratégicas y mejorar la rentabilidad de tu empresa. Descubre patrones, optimiza procesos y anticipa tendencias con análisis avanzado.",
  description2: "La inteligencia de negocio permite convertir datos en acciones. Con herramientas avanzadas de analítica, visualización e interpretación, optimizamos la toma de decisiones en cada nivel de tu empresa.",
  description3: "Desarrollamos soluciones de análisis de datos personalizadas, integrando modelos predictivos, dashboards interactivos y reportes automatizados que permiten monitorear en tiempo real el desempeño de tu negocio.",
  description4: "Nuestro equipo combina experiencia en Big Data, Machine Learning y Business Intelligence para brindarte una estrategia completa que impulse la eficiencia y el crecimiento empresarial.",
  advantagesTitle: "Beneficios del análisis de datos e inteligencia de negocio:",
  advantages: [
      "Toma de decisiones basada en datos: Reduce la incertidumbre y optimiza estrategias con información precisa.",
      "Identificación de tendencias: Detecta patrones de consumo y comportamiento para adelantarte al mercado.",
      "Optimización operativa: Identifica cuellos de botella y mejora la eficiencia en cada área del negocio.",
      "Dashboards interactivos: Visualiza métricas clave en tiempo real para un control total.",
      "Modelos predictivos: Anticipa cambios y ajusta tu estrategia con herramientas de predicción avanzada.",
      "Automatización de reportes: Reduce la carga operativa y accede a información crítica al instante."
  ],
  costDetails: "Empieza a transformar tu negocio con una consultoría inicial por solo **1 dólar**. Evaluaremos tus datos actuales y te mostraremos cómo la inteligencia de negocio puede impulsar tu crecimiento.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Convierte tus datos en información estratégica. Agenda una sesión y descubre cómo mejorar la rentabilidad de tu empresa."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-freestockpro-12969403.jpg"
                alt="Análisis de Datos e Inteligencia de Negocio"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/transformar/automatizacion-procesos-administrativos-operativos/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Automatización de Procesos Administrativos y Operativos",
  description1: "Optimiza la eficiencia de tu empresa mediante la automatización de procesos clave. Reduce costos, minimiza errores y libera recursos para enfocarte en la estrategia y el crecimiento.",
  description2: "La automatización es la clave para mejorar la productividad. Permite eliminar tareas repetitivas, mejorar la gestión de tiempos y asegurar que cada proceso funcione con la máxima eficiencia.",
  description3: "Implementamos soluciones de automatización adaptadas a las necesidades de tu empresa, desde flujos de trabajo digitales hasta la integración con sistemas empresariales para un funcionamiento más ágil y preciso.",
  description4: "Nuestro equipo de expertos trabaja contigo para diseñar estrategias de automatización que reduzcan la carga operativa y mejoren la eficiencia en cada nivel de tu organización.",
  advantagesTitle: "Beneficios de la automatización de procesos:",
  advantages: [
      "Reducción de errores: Minimiza riesgos y garantiza la precisión en cada tarea.",
      "Ahorro de tiempo: Elimina tareas manuales repetitivas y optimiza los flujos de trabajo.",
      "Mayor productividad: Permite a tu equipo enfocarse en tareas estratégicas de mayor valor.",
      "Integración con sistemas existentes: Sincroniza procesos con ERP, CRM y otras herramientas clave.",
      "Escalabilidad: Adapta la automatización a las necesidades crecientes de tu negocio.",
      "Monitoreo y control: Mejora la visibilidad y gestión de procesos en tiempo real."
  ],
  costDetails: "Empieza a transformar tu empresa con una consultoría inicial por solo **1 dólar**. Evaluaremos tus procesos actuales y diseñaremos una estrategia de automatización adaptada a tus necesidades.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza la gestión de tu empresa con la automatización de procesos. Reserva una sesión y descubre cómo mejorar la eficiencia operativa."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-valentin-sarte-2902892-12048264.jpg"
                alt="Automatización de Procesos Administrativos y Operativos"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/transformar/integramos-sistemas-empresariales/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Integración de Sistemas Empresariales (ERP, MES y CRM)",
  description1: "Conecta y optimiza todas las áreas de tu empresa con una integración fluida entre sistemas ERP, MES y CRM. Mejora la colaboración, la visibilidad de datos y la toma de decisiones estratégicas en tiempo real.",
  description2: "La integración de sistemas empresariales no solo mejora la eficiencia, sino que también reduce la duplicidad de datos y facilita la automatización de procesos clave. Esto permite un control más preciso y una mejor planificación operativa.",
  description3: "Implementamos soluciones que sincronizan todas tus herramientas de gestión empresarial para garantizar un flujo de información sin interrupciones. Desde la gestión de inventarios hasta la automatización de ventas, nuestros sistemas trabajan en conjunto para impulsar tu negocio.",
  description4: "Nuestro enfoque asegura que cada solución se adapte a las necesidades específicas de tu industria, minimizando errores y aumentando la productividad. Te ayudamos a transformar tu infraestructura digital con integración inteligente y efectiva.",
  advantagesTitle: "Beneficios de integrar tus sistemas empresariales:",
  advantages: [
      "Centralización de datos: Mantén toda la información de la empresa en un solo lugar, accesible en tiempo real.",
      "Automatización de procesos: Reduce tareas manuales repetitivas y optimiza flujos de trabajo.",
      "Mejora en la toma de decisiones: Datos actualizados y precisos para estrategias más efectivas.",
      "Mayor eficiencia operativa: Conectividad entre departamentos para mejorar la comunicación interna.",
      "Escalabilidad empresarial: Adapta tu infraestructura digital a medida que crece tu negocio.",
      "Seguridad y control: Protección avanzada de datos y mejor trazabilidad de operaciones."
  ],
  costDetails: "Transforma la gestión de tu empresa con una consultoría inicial por solo **1 dólar**. Evaluaremos tus sistemas actuales y diseñaremos una estrategia personalizada de integración.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Optimiza tu empresa con una integración inteligente. Reserva una sesión y descubre cómo conectar tus sistemas para maximizar el rendimiento."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-gustavo-fring-6720502.jpg"
                alt="Integración de Sistemas Empresariales"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/transformar/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link'; // Importamos el componente Link
import { BarChart as BarChartIcon, Settings, Server, Shield, Factory } from "lucide-react"; 

const COPY = {
  title: "Transformación Digital para Manufactura 4.0",
  description1: "Nuestra consultoría te ayuda a digitalizar procesos clave de tu negocio para mejorar la toma de decisiones, aumentar la eficiencia y garantizar la sostenibilidad de tu empresa en un mundo cada vez más tecnológico. No importa el tamaño de tu empresa, estamos aquí para ayudarte a alcanzar una ventaja competitiva duradera.",
  advantages: [
      "Mejora en la toma de decisiones: Obtén acceso a datos en tiempo real y análisis avanzados que te permitirán tomar decisiones más informadas, reduciendo riesgos e identificando nuevas oportunidades de negocio.",
      "Optimización de procesos: Automatiza tareas repetitivas y elimina ineficiencias en procesos operativos, comerciales y administrativos, lo que aumenta la productividad de tu equipo y reduce costos.",
      "Aumento de la eficiencia global: Integra plataformas y herramientas digitales para mejorar la coordinación entre equipos, optimizando la gestión de proyectos y recursos en tiempo récord.",
      "Impulso a la innovación y agilidad: Implementa tecnologías modernas y adopta metodologías flexibles que permiten a tu empresa responder rápidamente a los cambios del mercado y las demandas de los clientes.",
      "Mejora de la experiencia del cliente: Ofrece soluciones digitales que optimicen la interacción con tus clientes, proporcionando servicios más rápidos, personalizados y efectivos que aumentan su satisfacción y fidelidad.",
      "Integración total: Conecta sistemas empresariales como CRM, ERP y MES para obtener una visión integral de tu negocio, facilitando la interoperabilidad y mejorando la gestión de todas las áreas de tu empresa."
  ]
};

const services = [
  { name: "Análisis de Datos e Inteligencia de Negocio", slug: "analisis-de-datos-e-inteligencia-de-negocio", icon: <BarChart className="w-6 h-6 text-custom-orange" /> },
  { name: "Automatización de Procesos Administrativos y Operativos", slug: "automatizacion-procesos-administrativos-operativos", icon: <Settings className="w-6 h-6 text-custom-orange" /> },
  { name: "Integramos Sistemas Empresariales", slug: "integramos-sistemas-empresariales", icon: <Server className="w-6 h-6 text-custom-orange" /> },
  { name: "Seguridad e Infraestructura Digital", slug: "seguridad-infraestructura-digital", icon: <Shield className="w-6 h-6 text-custom-orange" /> },
  { name: "Transformamos tus Procesos Productivos", slug: "transformamos-tus-procesos-productivos", icon: <Factory className="w-6 h-6 text-custom-orange" /> },
];

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/fulfillment.jpg"
                alt="Digital Transformation"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const [key, value] = advantage.split(": ");
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, 
                            <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                    {key}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-extrabold text-custom-orange dark:text-zinc-100 mb-12">
        Servicios Especializados
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Link key={service.slug} href={`/servicios/transformar/${service.slug}`} passHref>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex items-start hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-zinc-700">
              {/* Icono dentro de un fondo estilizado */}
              <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                <div className="w-12 h-12 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                  {service.icon}
                </div>
              </div>
              {/* Texto del servicio */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  {service.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>



        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};


export default App;```

## `app/servicios/transformar/seguridad-infraestructura-digital/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Seguridad y Gestión de Infraestructura Digital",
  description1: "Protege tu empresa con soluciones avanzadas de ciberseguridad y gestión de infraestructura digital. Asegura la continuidad operativa y previene vulnerabilidades antes de que se conviertan en problemas críticos.",
  description2: "La seguridad digital es un pilar clave en la transformación tecnológica. Implementamos estrategias robustas para garantizar la protección de tus datos y sistemas frente a amenazas internas y externas.",
  description3: "Desde monitoreo en tiempo real hasta soluciones de recuperación ante desastres, ofrecemos un enfoque integral en la gestión de infraestructura digital. Nuestro objetivo es brindarte tranquilidad con sistemas seguros y eficientes.",
  description4: "Trabajamos con tecnologías de última generación para fortalecer la seguridad de tu red, proteger accesos y optimizar el rendimiento de tus sistemas sin comprometer su estabilidad.",
  advantagesTitle: "Beneficios de una infraestructura digital segura:",
  advantages: [
      "Protección avanzada contra ciberataques: Implementa medidas de seguridad efectivas para evitar intrusiones y accesos no autorizados.",
      "Monitoreo en tiempo real: Detecta amenazas y vulnerabilidades antes de que afecten tus operaciones.",
      "Gestión eficiente de servidores y redes: Optimiza el rendimiento de tu infraestructura digital con administración especializada.",
      "Cumplimiento normativo: Asegura que tu empresa cumpla con las regulaciones de seguridad y privacidad de datos.",
      "Planes de recuperación ante desastres: Garantiza la continuidad operativa incluso ante incidentes imprevistos.",
      "Optimización del rendimiento: Mejora la eficiencia y velocidad de tus sistemas con una infraestructura digital segura."
  ],
  costDetails: "Refuerza la seguridad digital de tu empresa con una consultoría inicial por solo **1 dólar**. Evaluaremos tu infraestructura y diseñaremos una estrategia de protección adaptada a tus necesidades.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Asegura la estabilidad y seguridad de tu infraestructura digital. Reserva una sesión y protege tu empresa de amenazas cibernéticas."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-divinetechygirl-1181354.jpg"
                alt="Seguridad y Gestión de Infraestructura Digital"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/servicios/transformar/transformamos-tus-procesos-productivos/page.jsx`
```jsx
import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactSection from '@/components/ContactSection';
import { Rocket, Zap, BarChart, Clock, Users, Terminal } from 'lucide-react';
import Link from 'next/link';

const COPY = {
  title: "Digitalización de Procesos de Producción",
  description1: "Optimiza tus operaciones con tecnología avanzada y digitalización inteligente. Automatiza procesos, mejora la eficiencia y reduce costos operativos sin comprometer la calidad de producción.",
  description2: "La digitalización de procesos no es solo una mejora tecnológica; es una transformación operativa. Permite una gestión más precisa y ágil, mejorando la trazabilidad, el control de calidad y la eficiencia general en cada etapa de producción.",
  description3: "Ofrecemos soluciones personalizadas de digitalización que integran software de monitoreo, automatización y análisis de datos. Conectamos tu producción con herramientas inteligentes para facilitar la toma de decisiones basadas en datos en tiempo real.",
  description4: "Nuestro equipo de expertos trabaja contigo para garantizar una transición fluida hacia la digitalización, minimizando interrupciones y maximizando el retorno de inversión en cada implementación.",
  advantagesTitle: "Beneficios de digitalizar tu producción:",
  advantages: [
      "Automatización inteligente: Reduce errores manuales y agiliza los procesos productivos.",
      "Monitoreo en tiempo real: Obtén datos precisos de cada etapa de producción al instante.",
      "Optimización de recursos: Usa materiales y energía de manera eficiente, reduciendo desperdicios.",
      "Integración con sistemas ERP y MES: Conecta toda tu operación para mejorar la toma de decisiones.",
      "Reducción de costos operativos: Digitaliza tareas repetitivas y optimiza el flujo de trabajo.",
      "Mejora en la trazabilidad: Asegura el cumplimiento de estándares de calidad y normativas industriales."
  ],
  costDetails: "Transforma tu producción con una consultoría inicial por solo **1 dólar**. Evaluaremos tus necesidades y diseñaremos una estrategia personalizada para digitalizar tus procesos de producción.",
  buttonLabel: "Reserva tu Consultoría por $1 →",
  tooltipContent: "Descubre cómo la digitalización puede llevar tu producción a otro nivel. Agenda una sesión y optimiza tu operación con tecnología avanzada."
};

const App = () => {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section con imagen */}
        <section className="relative dark:bg-zinc-900 py-10 md:py-28 rounded-3xl overflow-hidden mb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-custom-orange to-orange-700 bg-clip-text text-transparent dark:from-custom-orange dark:to-zinc-400 leading-tight">
                {COPY.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                {COPY.description1}
              </p>
              <Link href="#contacto">
                <Button variant="default" size="lg" className="bg-orange-500 text-black py-3 px-6 rounded-lg">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service/pexels-rdne-7947955.jpg"
                alt="Digitalización de Procesos"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>
        </section>

        {/* Sección de Ventajas */}
        <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {COPY.advantages.map((advantage, index) => {
            const icons = [<Zap key="0" />, <BarChart key="1" />, <Clock key="2" />, <Terminal key="3" />, <Users key="4" />, <Rocket key="5" />];
            return (
              <div key={index} className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-custom-orange">
                  <div className="w-10 h-10 bg-custom-orange/20 rounded-lg flex items-center justify-center p-2">
                    {React.cloneElement(icons[index % icons.length], { className: 'w-6 h-6' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {advantage}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
       
        {/* Sección de Contacto */}
        <section id="contacto" className="border-t pt-5 border-zinc-200 dark:border-zinc-700"> 
          <ContactSection />
        </section>
      </div>
    </TooltipProvider>
  );
};

export default App;
```

## `app/terminos-y-condiciones/page.jsx`
```jsx
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="p-8 rounded-lg max-w-4xl mx-auto dark:text-zinc-200">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-zinc-200">Términos y Condiciones</h1>
      <p className="mb-4 dark:text-zinc-200">
        Bienvenido a Alphaqueb Consulting. Al utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con estos términos, no puedes utilizar nuestros servicios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">1. Definiciones</h2>
      <p className="mb-4 dark:text-zinc-200">
        <strong>Cliente:</strong> La persona o entidad que utiliza los servicios ofrecidos por Alphaqueb Consulting.<br />
        <strong>Servicios:</strong> Los servicios de consultoría tecnológica, automatización, digitalización y optimización proporcionados por Alphaqueb Consulting.<br />
        <strong>Contenido:</strong> Todo el material, información, texto, gráficos, imágenes, videos y otros elementos disponibles en el sitio web de Alphaqueb Consulting.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">2. Uso de los Servicios</h2>
      <p className="mb-4 dark:text-zinc-200">
        El Cliente acepta utilizar los Servicios de manera legal y conforme a estos Términos y Condiciones. El Cliente no podrá:
      </p>
      <ul className="list-disc ml-6 mt-2 dark:text-zinc-200">
        <li>Utilizar los Servicios de manera fraudulenta o dañina.</li>
        <li>Intentar acceder o utilizar sistemas o redes no autorizadas.</li>
        <li>Reproducir, distribuir, modificar o vender cualquier Contenido sin el permiso previo de Alphaqueb Consulting.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">3. Propiedad Intelectual</h2>
      <p className="mb-4 dark:text-zinc-200">
        Todos los derechos de propiedad intelectual sobre el sitio web y los Servicios pertenecen a Alphaqueb Consulting. El Cliente no adquiere ningún derecho de propiedad intelectual al utilizar los Servicios.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">4. Privacidad y Protección de Datos</h2>
      <p className="mb-4 dark:text-zinc-200">
        La protección de la información personal del Cliente es importante para nosotros. Consulta nuestra <a href="/aviso-de-privacidad" className="text-orange-500 hover:underline">Aviso de Privacidad</a> para obtener más detalles sobre cómo manejamos tus datos.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">5. Modificaciones de los Términos y Condiciones</h2>
      <p className="mb-4 dark:text-zinc-200">
        Alphaqueb Consulting se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en el sitio web. El Cliente será responsable de revisar periódicamente los Términos y Condiciones. El uso continuo de los Servicios después de las modificaciones constituirá la aceptación de los nuevos términos.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">6. Limitación de Responsabilidad</h2>
      <p className="mb-4 dark:text-zinc-200">
        Alphaqueb Consulting no será responsable por cualquier daño directo, indirecto, incidental, especial o consecuente que pueda surgir del uso o la imposibilidad de usar los Servicios. Esto incluye, pero no se limita a, daños por pérdida de beneficios, pérdida de datos o costos de reemplazo.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">7. Indemnización</h2>
      <p className="mb-4 dark:text-zinc-200">
        El Cliente indemniza y exime a Alphaqueb Consulting y a sus afiliados, directores, empleados y agentes de cualquier reclamación, demanda, daño, responsabilidad, costo y gasto, incluidos los honorarios legales razonables, que surjan del uso de los Servicios o de la violación de estos Términos y Condiciones.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">8. Ley Aplicable y Jurisdicción</h2>
      <p className="mb-4 dark:text-zinc-200">
        Estos Términos y Condiciones se rigen por y se interpretarán de acuerdo con las leyes del Estado de [Estado], México, sin considerar sus conflictos de leyes. Cualquier disputa relacionada con estos Términos y Condiciones estará sujeta a la jurisdicción exclusiva de los tribunales competentes ubicados en [Ciudad], México.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">9. Resolución de Disputas</h2>
      <p className="mb-4 dark:text-zinc-200">
        En caso de cualquier disputa entre el Cliente y Alphaqueb Consulting, ambas partes acuerdan intentar resolver la disputa mediante negociaciones amistosas antes de iniciar cualquier procedimiento legal.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">10. Renuncia</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si alguna disposición de estos Términos y Condiciones resulta inválida o inaplicable, dicha disposición será anulada o limitada en la medida mínima necesaria para hacerla válida y aplicable, y el resto de los Términos y Condiciones permanecerán en pleno vigor y efecto.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2 dark:text-zinc-200">11. Contacto</h2>
      <p className="mb-4 dark:text-zinc-200">
        Si tienes alguna pregunta o inquietud sobre estos Términos y Condiciones, no dudes en contactarnos a través de <strong>hola@alphaqueb.com</strong>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
```

## `blogs/automatizacion-industrial-procesos-productivos-la-revolucion-en-fabricas-y-como-tu-competencia-se-esta-beneficiando.mdx`
```mdx
---
title: Automatización Industrial Revolucionando las Fábricas Inteligentes
date: 2025-01-11
description: La automatización industrial es mucho más que robots realizando tareas. Se trata de integrar sistemas inteligentes que optimizan cada paso de tu proceso productivo.
image: /img/pexels-hoang-nc-483165236-16045335.jpg
---

**El Despertar de la Manufactura Inteligente**

¿Te has preguntado por qué algunas fábricas parecen operar con una **precisión quirúrgica** mientras otras luchan por mantenerse al día? La respuesta reside en un cambio silencioso pero poderoso: la **automatización industrial** . En un mundo donde la presión por reducir costos, la escasez de mano de obra y la demanda de productos de alta calidad son constantes, la automatización se ha convertido en la clave para la supervivencia y el crecimiento. Este post te mostrará por qué la automatización no es solo una opción, sino una **necesidad** para el futuro de tu fábrica.

**¿Qué es Realmente la Automatización Industrial? (Más Allá de Robots)**

La automatización industrial es mucho más que robots realizando tareas. Se trata de integrar sistemas inteligentes que optimizan cada paso de tu proceso productivo. Desde **brazos robóticos** que ensamblan con precisión milimétrica hasta **software** que analiza datos en tiempo real para anticipar problemas, la automatización transforma la forma en que fabricamos.

Existen diferentes tipos de automatización:

- **Automatización Fija** : Diseñada para tareas **repetitivas y estandarizadas** , la automatización fija es ideal para **líneas de producción en masa** . Esta tipo de automatización se caracteriza por su eficiencia en la realización de tareas específicas y consistentes, lo que la hace perfecta para industrias que requieren una alta producción de productos idénticos. Al minimizar la variabilidad y maximizar la velocidad, la automatización fija reduce costos y aumenta la productividad.
- **Automatización Programable** : Permite ajustar los procesos para adaptarse a diferentes productos, ideal para **fabricación a medida** . La automatización programable ofrece flexibilidad al permitir que los sistemas sean reconfigurados y programados para manejar una variedad de tareas y productos. Esto es especialmente útil en industrias donde la diversidad de productos y la personalización son cruciales, ya que permite una rápida adaptación a las cambiantes demandas del mercado sin necesidad de grandes inversiones en nuevo equipo.
- **Automatización Flexible** : Ofrece la máxima **versatilidad** , capaz de manejar una amplia variedad de productos y procesos **sin interrupciones significativas** . La automatización flexible es ideal para entornos donde la diversidad y la adaptabilidad son esenciales. Esta tecnología permite cambiar rápidamente entre diferentes productos y configuraciones, minimizando el tiempo de inactividad y maximizando la eficiencia. Es especialmente valiosa en industrias que requieren una alta personalización y una rápida respuesta a los cambios en la demanda del mercado.

No confundas automatización con robotización. La automatización es un concepto más amplio que engloba la integración de tecnologías para hacer procesos más eficientes, desde hardware avanzado hasta software de gestión de datos.

**Los Beneficios Reales (No Solo Reducción de Costos)**

La automatización industrial va mucho más allá de la simple reducción de costos. Aquí te presentamos una visión más completa de los beneficios que puede aportar a tu empresa:

1. **Operaciones Sin Interrupciones** :
    - **Tiempo de Actividad Máximo** : Las líneas de producción automatizadas pueden funcionar 24/7, lo que maximiza el tiempo de actividad y la eficiencia operativa.
    - **Menor Tiempo de Downtime** : La automatización minimiza las paradas no planificadas, lo que reduce el tiempo muerto y aumenta la productividad.
2. **Calidad Consistente** :
    - **Precisión Milimétrica** : Los sistemas automatizados realizan tareas con un nivel de precisión que supera al humano, garantizando productos de alta calidad.
    - **Control de Calidad en Tiempo Real** : Sensores y software avanzados monitorean continuamente los procesos, detectando y corrigiendo defectos de manera inmediata.
3. **Reducción de Errores Humanos** :
    - **Menos Defectos** : La automatización elimina la variabilidad humana, reduciendo significativamente los errores y el desperdicio.
    - **Mayor Fiabilidad** : Los procesos automatizados son más predecibles y confiables, lo que mejora la consistencia de los resultados.
4. **Entorno de Trabajo Más Seguro** :
    - **Reducción de Riesgos** : Al automatizar tareas peligrosas, se disminuye la exposición de los trabajadores a riesgos laborales.
    - **Mejor Ergonomía** : Los sistemas automatizados pueden asumir tareas físicamente exigentes, mejorando las condiciones de trabajo y la salud de los empleados.
5. **Flexibilidad y Adaptabilidad** :
    - **Rápida Adaptación al Mercado** : La automatización flexible permite ajustar rápidamente los procesos para satisfacer cambios en la demanda del mercado.
    - **Personalización a Gran Escala** : Tecnologías como la impresión 3D y la robótica colaborativa facilitan la producción de productos personalizados de manera eficiente y económica.
6. **Ventaja Competitiva** :
    - **Impulso a la Innovación** : La automatización libera recursos y tiempo para enfocarse en la innovación y el desarrollo de nuevos productos.
    - **Mejora Continua** : Los sistemas automatizados recopilan y analizan datos en tiempo real, permitiendo la identificación y corrección de problemas de manera proactiva.
    - **Optimización de Costos** : Además de reducir los costos operativos, la automatización permite una mejor gestión de los recursos, lo que se traduce en mayor rentabilidad.

**¿Cómo Empezar? (Guía Práctica para la Transformación)**

La transformación hacia la automatización industrial puede parecer abrumadora, pero con un enfoque estructurado y metódico, puedes lograr una implementación exitosa. Aquí te presentamos una guía práctica para empezar:

1. **Evaluación de Procesos Actuales** :
    - **Análisis Detallado** : Evalúa tus procesos actuales para identificar áreas donde la automatización puede generar el mayor impacto. Considera factores como la eficiencia, la calidad, la seguridad y la repetitividad de las tareas.
    - **Identificación de Bottlenecks** : Identifica los cuellos de botella y las áreas de mayor desperdicio en tu línea de producción.
2. **Definición de Objetivos Claros** :
    - **Metas Específicas** : Define objetivos claros y medibles, como reducir el tiempo de producción en un 20%, aumentar la calidad del producto en un 30% o reducir los costos operativos en un 15%.
    - **Priorización de Proyectos** : Prioriza los proyectos que ofrecen los mayores beneficios y que son más factibles de implementar en un corto plazo.
3. **Plan de Implementación** :
    - **Presupuesto** : Establece un presupuesto realista que considere los costos iniciales de adquisición, instalación y mantenimiento de los sistemas automatizados.
    - **Capacitación del Personal** : Planifica la formación y capacitación del personal para operar y mantener los nuevos sistemas. Esto incluye tanto a los operadores como a los técnicos de mantenimiento.
    - **Integración con Sistemas Existentes** : Evalúa cómo los nuevos sistemas se integrarán con tu infraestructura actual. Considera la compatibilidad de hardware y software, así como la necesidad de actualizaciones o modificaciones.
4. **Proyectos Piloto** :
    - **Implementación Gradual** : No intentes automatizar todo de una vez. Comienza con proyectos piloto en áreas específicas para probar y validar los beneficios de la automatización.
    - **Monitoreo y Ajuste** : Monitorea de cerca los resultados de los proyectos piloto y realiza ajustes según sea necesario. Recopila feedback de los empleados y utiliza datos para optimizar los procesos.
5. **Colaboración con Expertos** :
    - **Asesoramiento Técnico** : Trabaja con expertos en automatización para asegurar que tu implementación sea técnica y operativamente sólida. Estos profesionales pueden proporcionar insights valiosos y soluciones personalizadas.
    - **Socios de Confianza** : Busca socios de confianza que tengan experiencia en la industria y un historial comprobado de éxito en proyectos similares.
6. **Gestión del Cambio** :
    - **Comunicación Efectiva** : Comunica claramente los beneficios de la automatización a todos los niveles de la organización. Aborda las preocupaciones y resistencias de los empleados de manera proactiva.
    - **Apoyo y Compromiso** : Obtén el apoyo y compromiso de la gerencia y los líderes de equipo. Su involucración es crucial para el éxito del proyecto.
7. **Evaluación y Escalado** :
    - **Revisión Regular** : Realiza revisiones regulares de los proyectos piloto y la implementación general para evaluar el progreso y los resultados.
    - **Escalado Gradual** : Una vez que hayas validado los beneficios y optimizado los procesos, escala gradualmente la automatización a otras áreas de tu fábrica.

**Una Mirada al Mañana**

Prepárate para ver cómo la **inteligencia artificial** y el **aprendizaje automático** llevan la automatización a un nivel superior. El **Internet de las Cosas (IoT)** conectará todos tus dispositivos y máquinas, permitiéndote analizar datos en tiempo real y tomar decisiones más inteligentes. Los **robots colaborativos (cobots)** trabajarán junto a tus empleados, aumentando su productividad y seguridad. La **automatización cognitiva** creará sistemas que se adaptarán a situaciones cambiantes y tomarán decisiones por sí mismos. El futuro de la manufactura es **inteligente, conectado y autónomo** .

**El Momento de Actuar (No Te Quedes Atrás)**

La automatización industrial no es una moda pasajera; es una transformación irreversible que está redefiniendo la manufactura. Si quieres que tu fábrica siga siendo **competitiva y rentable** , debes abrazar la automatización **ahora** . No esperes a que tu competencia te deje atrás.

Contáctanos hoy mismo para descubrir cómo nuestra consultora puede ayudarte a implementar la automatización y llevar tu fábrica al siguiente nivel. Estamos listos para transformar tu futuro. No te quedes atrás; el momento de actuar es **ahora** .```

## `blogs/consultoria-industrial-versus-consultoria-tecnologica-cual-es-la-mejor-opcion-para-tu-fabrica-analisis-comparativo.mdx`
```mdx
---
title: Consultoría Industrial vs. Tecnológica, ¿Cuál es la mejor opción para tu fábrica?
date: 2025-01-15
description: Cada fábrica tiene necesidades, objetivos y desafíos únicos, y la clave para lograr una transformación efectiva radica en realizar una evaluación exhaustiva de estas variables antes de decidir sobre la mejor ruta a seguir.
image: /img/businessman-2798562_640.jpg
---
La decisión de optar por una consultoría industrial o tecnológica depende en gran medida de las necesidades, objetivos y desafíos específicos de tu fábrica. Aunque ambas opciones presentan enfoques distintos, pueden complementarse para maximizar la eficiencia y la competitividad en el entorno manufacturero.

Una consultoría industrial se centra en optimizar procesos operativos, mejorar la productividad y reducir costos mediante análisis detallados de flujos de trabajo, gestión de recursos y estrategias de mejora continua. Por otro lado, una consultoría tecnológica se enfoca en la implementación de soluciones innovadoras y tecnológías avanzadas que impulsen la transformación digital, aumenten la capacidad de respuesta y faciliten la toma de decisiones basada en datos.

Al integrar ambos enfoques, puedes obtener un panorama más completo y estratégico. La combinación de mejoras operativas con avances tecnológicos permite no solo resolver problemas actuales, sino también anticiparse a futuros desafíos y oportunidades. Este enfoque híbrido puede ser clave para mantenerse a la vanguardia en un mercado cada vez más dinámico y competitivo.

---

### **¿Qué es una Consultoría Industrial?**

La consultoría industrial se centra en optimizar los procesos operativos de la planta. Su objetivo principal es mejorar la productividad, la calidad y la eficiencia general mediante ajustes en los métodos de trabajo, el diseño de procesos y la gestión de recursos.

**Áreas de Enfoque:**

1. **Optimización de Procesos:**
    - **Rediseño de líneas de producción para reducir tiempos de ciclo:** Este enfoque implica analizar y reconfigurar las líneas de producción existentes para eliminar pasos innecesarios, mejorar la sincronización entre etapas y maximizar el flujo continuo del trabajo. El objetivo es acortar los tiempos de ciclo sin comprometer la calidad del producto final.
    - **Identificación y eliminación de cuellos de botella que afectan la eficiencia operativa:** Los cuellos de botella son puntos críticos dentro de un proceso donde la capacidad de producción se ve limitada, causando demoras y disminuyendo la eficiencia general. A través de técnicas como el análisis de valor (value stream mapping) y la observación directa, los consultores identifican estos puntos débiles y desarrollan soluciones específicas para eliminarlos o mitigar su impacto. Esto puede incluir la redistribución de recursos, la implementación de tecnologías adicionales o cambios en los métodos de trabajo.
2. **Gestión de Recursos Humanos:**
    
    La gestión eficiente de los recursos humanos es fundamental para el éxito operativo de cualquier fábrica. Un enfoque estratégico en esta área puede mejorar significativamente la productividad, reducir errores y aumentar la satisfacción laboral del personal. A continuación se detallan las principales estrategias:
    
    - **Capacitación continua del personal para mejorar habilidades y conocimientos:**
        - La capacitación constante no solo mejora las habilidades técnicas de los empleados, sino que también les proporciona herramientas para adaptarse a nuevas tecnologías y metodologías. Esto incluye cursos formales, talleres prácticos, simulaciones y sesiones de coaching.
        - Ejemplo práctico: Una planta de manufactura electrónica implementó un programa de capacitación intensivo en automatización industrial, lo que permitió a los trabajadores operar máquinas más avanzadas con mayor precisión y eficiencia, mejorando la calidad del producto final.
    - **Asignación estratégica de roles basada en competencias individuales:**
        - Identificar las fortalezas y debilidades de cada empleado permite asignar tareas y responsabilidades de manera más efectiva. Este enfoque asegura que cada miembro del equipo esté en una posición donde pueda maximizar su potencial y contribuir al éxito general de la organización.
        - Ejemplo práctico: En una fábrica de textiles, se realizó una evaluación exhaustiva de las habilidades de todos los empleados. Con base en los resultados, se reorganizaron los equipos de producción, lo que resultó en un aumento del 15% en la eficiencia operativa y una disminución del 10% en los defectos del producto.
3. **Mantenimiento y Gestión de Activos:**
    
    La gestión eficiente de los activos y el mantenimiento adecuado de los equipos son cruciales para garantizar la continuidad operativa, minimizar tiempos de inactividad no planificados y maximizar la vida útil de las máquinas y herramientas. Las estrategias modernas de mantenimiento se centran en prevenir fallos antes de que ocurran y en optimizar el uso de los recursos disponibles.
    
    - **Desarrollo e implementación de estrategias como TPM (Total Productive Maintenance) para maximizar la disponibilidad de equipos:**
        - **TPM (Total Productive Maintenance)** es una filosofía de mantenimiento que involucra a todos los empleados en la mejora continua del rendimiento de los equipos. El objetivo principal es maximizar la disponibilidad de los equipos mediante la prevención de fallas, la reducción de tiempos de inactividad y la mejora de la calidad del producto.
        - **Estrategias clave dentro de TPM incluyen:**
            - **Autonomía:** Capacitar a los operarios para realizar tareas básicas de mantenimiento preventivo, como inspecciones regulares, lubricaciones y ajustes menores.
            - **Prevención sistemática:** Implementar programas de mantenimiento preventivo basados en calendarios y análisis históricos de fallas.
            - **Mejoras progresivas:** Involucrar a todo el personal en la identificación y solución de problemas recurrentes mediante sugerencias y mejoras continuas.
        - **Ejemplo práctico:** Una fábrica de automóviles adoptó TPM y capacitó a sus operadores para realizar inspecciones diarias y pequeñas reparaciones. Como resultado, lograron reducir el tiempo de inactividad no planificado en un 40% y aumentar la disponibilidad de los equipos en un 25%.
    - **Monitoreo y análisis predictivo para prevenir fallos y extender la vida útil de los activos:**
        - El monitoreo y análisis predictivo utiliza tecnologías avanzadas, como sensores IoT (Internet of Things), software de análisis de datos y algoritmos de inteligencia artificial, para supervisar el estado de los equipos en tiempo real.
        - **Beneficios clave:**
            - **Detección temprana de problemas:** Los sistemas pueden identificar anomalías y patrones que indican posibles fallos antes de que ocurran, permitiendo intervenciones preventivas.
            - **Optimización de la planificación del mantenimiento:** Con base en los datos recopilados, se pueden programar actividades de mantenimiento de manera más precisa y eficiente, evitando sobrecargas o interrupciones innecesarias.
            - **Extensión de la vida útil de los activos:** Al mantener los equipos en óptimas condiciones y corregir problemas antes de que se agraven, se puede prolongar significativamente su vida útil.
        - **Ejemplo práctico:** Una planta de procesamiento químico instaló sensores en sus equipos críticos y utilizó un sistema de análisis predictivo para monitorear parámetros como temperatura, vibración y presión. Gracias a esto, pudieron detectar un problema potencial en un compresor antes de que causara una falla catastrófica, lo que les permitió realizar una reparación programada y evitar una parada no planificada.
4. **Cumplimiento Normativo:**
    
    El cumplimiento normativo es un aspecto crucial en la gestión de cualquier fábrica o planta industrial. Garantizar que las operaciones se ajusten a las regulaciones ambientales, de seguridad y calidad no solo evita sanciones legales y multas, sino que también promueve una cultura de responsabilidad y sostenibilidad dentro de la organización. Además, el desarrollo de políticas internas que fomenten prácticas sostenibles puede mejorar la reputación corporativa y contribuir al bienestar de la comunidad y del medio ambiente.
    
    **Aseguramiento de que la planta cumple con regulaciones ambientales, de seguridad y calidad:**
    
    **Regulaciones Ambientales:**
    
    - **Objetivo:** Reducir el impacto negativo de las actividades industriales sobre el medio ambiente.
    - **Estrategias clave:**
        - **Gestión de residuos:** Implementar sistemas para la segregación, tratamiento y disposición adecuada de desechos sólidos, líquidos y gaseosos. Esto incluye reciclaje, compostaje y eliminación segura de sustancias peligrosas.
        - **Reducción de emisiones:** Utilizar tecnologías avanzadas para minimizar las emisiones de gases contaminantes, como dióxido de carbono (CO2) y óxidos de nitrógeno (NOx). Ejemplo: Instalar filtros de partículas y sistemas de captura de CO2.
        - **Eficiencia energética:** Optimizar el consumo de energía mediante la adopción de equipos más eficientes, iluminación LED y sistemas de control automatizados.
    
    **Regulaciones de Seguridad:**
    
    - **Objetivo:** Proteger la salud y la seguridad de los empleados y prevenir accidentes laborales.
    - **Estrategias clave:**
        - **Capacitación en seguridad:** Realizar entrenamientos regulares sobre procedimientos de seguridad, uso de equipos de protección personal (EPP) y protocolos de emergencia.
        - **Inspecciones periódicas:** Realizar auditorías frecuentes para identificar y corregir riesgos potenciales en las instalaciones, maquinaria y procesos.
        - **Sistemas de respuesta a emergencias:** Desarrollar planes detallados para manejar situaciones de emergencia, como incendios, fugas químicas o fallos mecánicos.

**Beneficios Clave:**

- Incremento significativo de la productividad general.
- Reducción de desperdicios en materiales y tiempos muertos, lo que reduce costos.
- Mejora notable en la calidad del producto final, lo que puede aumentar la satisfacción del cliente y la lealtad a la marca.

**Limitaciones:**

- El enfoque está limitado principalmente a los procesos físicos y operativos; no aborda problemas tecnológicos ni de automatización directamente.
- Puede requerir un tiempo considerable para implementar cambios y observar resultados tangibles.
- Dependiendo de la cultura organizacional, puede haber resistencia al cambio por parte del personal, lo que podría retrasar la adopción de nuevas prácticas.

---

### **¿Qué es una Consultoría Tecnológica?**

Una consultoría tecnológica se centra en implementar soluciones tecnológicas avanzadas para modernizar y automatizar los procesos de la fábrica. Esta disciplina abarca desde el software y hardware hasta la integración de Internet de las Cosas (IoT), análisis de datos y estrategias de transformación digital. El objetivo principal es optimizar operaciones, mejorar la toma de decisiones basada en datos y aumentar la competitividad mediante innovaciones tecnológicas.

**Áreas de Enfoque:**

1. **Digitalización:** Implementación de ERP, MES y sistemas de monitoreo en tiempo real.
    - **ERP (Enterprise Resource Planning):**
        - **Definición:** Un sistema ERP integra diversas funciones empresariales como finanzas, recursos humanos, producción y logística en una única plataforma centralizada.
        - **Beneficios Clave:**
            - **Mejora en la coordinación interna:** Todos los departamentos acceden a información actualizada y compartida, lo que facilita la colaboración y reduce errores.
            - **Optimización de recursos:** La visibilidad completa sobre todos los aspectos del negocio permite una mejor asignación de recursos financieros, materiales y humanos.
            - **Automatización de procesos administrativos:** Tareas repetitivas y manuales pueden ser automatizadas, ahorrando tiempo y reduciendo costos.
        - **Ejemplo Práctico:** Una empresa manufacturera implementó un sistema ERP que integró sus departamentos de ventas, inventario y producción. Como resultado, lograron reducir el tiempo de respuesta a pedidos en un 30% y mejorar la precisión de los pronósticos de inventario en un 25%.
    - **MES (Manufacturing Execution System):**
        - **Definición:** Un sistema MES gestiona y supervisa todas las operaciones dentro de una planta de fabricación, proporcionando datos en tiempo real sobre el rendimiento de la producción.
        - **Beneficios Clave:**
            - **Visibilidad en tiempo real:** Los gerentes pueden tomar decisiones rápidas y bien informadas basadas en datos actualizados sobre el estado de la producción.
            - **Mejora en la trazabilidad:** Permite rastrear cada etapa del proceso productivo, desde la recepción de materias primas hasta la entrega del producto final.
            - **Optimización de la eficiencia:** Identifica cuellos de botella y áreas de mejora en el flujo de trabajo, permitiendo ajustes inmediatos.
        - **Ejemplo Práctico:** Una planta química instaló un sistema MES que les permitió monitorear continuamente las condiciones de producción, como temperatura y presión. Esto resultó en una reducción del 15% en tiempos de ciclo y una mejora del 10% en la calidad del producto.
    - **Sistemas de Monitoreo en Tiempo Real:**
        - **Definición:** Estos sistemas utilizan sensores IoT y plataformas de análisis para recopilar y procesar datos en tiempo real sobre el estado de equipos y procesos.
        - **Beneficios Claves:**
            - **Detección temprana de problemas:** Alertas automáticas cuando los parámetros superan ciertos umbrales, permitiendo intervenciones preventivas antes de que ocurran fallos.
            - **Análisis predictivo:** Utiliza algoritmos avanzados para predecir futuros problemas y planificar mantenimientos de manera más efectiva.
            - **Optimización de recursos:** Mejora la eficiencia energética y la utilización de recursos al identificar patrones y oportunidades de mejora.
        - **Ejemplo Práctico:** Una fábrica de alimentos instaló sensores IoT en sus líneas de producción para monitorear la temperatura y humedad. Con base en los datos obtenidos, pudieron ajustar automáticamente los parámetros de control, reduciendo el desperdicio de productos perecederos en un 20%.
2. **Automatización:** Instalación de robots, sensores IoT y sistemas autónomos para optimizar tareas repetitivas.
    
    La automatización es un pilar fundamental en la transformación digital de las fábricas modernas. A través de la instalación de robots, sensores IoT (Internet of Things) y sistemas autónomos, las empresas pueden optimizar tareas repetitivas, mejorar la eficiencia operativa y reducir costos. Esta sección explora cómo estas tecnologías contribuyen a una mayor productividad y competitividad.
    
    **1. Instalación de Robots:**
    
    **Definición:**
    Los robots industriales son máquinas programadas para realizar tareas específicas con precisión y velocidad. Estos dispositivos pueden ser fijos o móviles y están diseñados para trabajar en entornos industriales, desde líneas de ensamblaje hasta procesos de manipulación de materiales.
    
    **Beneficios Clave:**
    
    - **Precisión y Consistencia:** Los robots pueden realizar tareas repetitivas con alta precisión y consistencia, minimizando errores humanos.
        - Ejemplo Práctico: En una planta automotriz, los robots de soldadura aseguran uniones perfectas entre piezas metálicas, mejorando la calidad del producto final y reduciendo defectos.
    - **Aumento de la Productividad:** Al trabajar continuamente sin necesidad de descanso, los robots pueden aumentar significativamente la producción.
        - Ejemplo Práctico: Una fábrica de electrónica utilizó robots para montar componentes en circuitos impresos, lo que incrementó la producción diaria en un 30%.
    - **Mejora de la Seguridad:** Los robots pueden asumir tareas peligrosas o físicamente exigentes, protegiendo la salud y seguridad de los empleados.
        - Ejemplo Práctico: En una planta química, los robots manejan sustancias peligrosas, reduciendo el riesgo de exposición de los trabajadores a productos tóxicos.
    
    **Aplicaciones Comunes:**
    
    - **Ensamblaje:** Montaje preciso de componentes pequeños y complejos.
    - **Manipulación de Materiales:** Transporte y posicionamiento de materias primas y productos semielaborados.
    - **Inspección y Control de Calidad:** Detección de defectos mediante cámaras y sensores integrados.
    
    **2. Sensores IoT (Internet of Things):**
    
    **Definición:**
    Los sensores IoT son dispositivos que recopilan datos sobre el entorno físico y los transmiten a sistemas centrales para su análisis y toma de decisiones. Estos sensores pueden medir variables como temperatura, presión, vibración, humedad y más.
    
    **Beneficios Clave:**
    
    - **Monitoreo en Tiempo Real:** Proporcionan información actualizada sobre el estado de equipos y procesos, permitiendo intervenciones rápidas y preventivas.
        - Ejemplo Práctico: Una planta de alimentos utiliza sensores IoT para monitorear constantemente la temperatura y humedad en cámaras frigoríficas, garantizando la conservación adecuada de productos perecederos.
    - **Análisis Predictivo:** Los datos recopilados por los sensores se analizan para predecir fallos futuros y planificar mantenimientos preventivos.
        - Ejemplo Práctico: Una fábrica de procesamiento químico instaló sensores en sus equipos críticos para detectar anomalías en tiempo real. Esto les permitió evitar una falla catastrófica en una bomba, ahorrando miles de dólares en reparaciones y tiempos de inactividad.
    - **Optimización de Recursos:** Identifican patrones de consumo energético y materiales, permitiendo ajustes para mejorar la eficiencia.
        - Ejemplo Práctico: Una planta de fabricación implementó sensores IoT para monitorizar el consumo de energía en diferentes áreas. Como resultado, lograron reducir el consumo energético en un 15% al optimizar el uso de maquinaria durante horas fuera de pico.
    
    **Aplicaciones Comunes:**
    
    - **Monitoreo de Equipos:** Supervisión continua del estado de maquinaria y activos críticos.
    - **Gestión de Inventarios:** Rastreo en tiempo real de niveles de inventario y ubicaciones de materiales.
    - **Control Ambiental:** Regulación de condiciones ambientales en áreas sensibles, como laboratorios y salas limpias.
    
    **3. Sistemas Autónomos:**
    
    **Definición:**
    Los sistemas autónomos son soluciones tecnológicas que funcionan de manera independiente sin intervención humana constante. Estos sistemas pueden incluir vehículos autónomos, drones y software inteligente que toman decisiones basadas en datos.
    
    **Beneficios Clave:**
    
    - **Autonomía Operativa:** Funcionan de manera autónoma, liberando a los empleados para tareas más estratégicas y creativas.
        - Ejemplo Práctico: Un almacén logístico implementó vehículos autónomos para mover palets y cajas, reduciendo el tiempo de entrega y aumentando la eficiencia operativa.
    - **Flexibilidad y Adaptabilidad:** Pueden ajustarse dinámicamente a cambios en el entorno y las condiciones de trabajo.
        - Ejemplo Práctico: Un sistema autónomo de inspección en una planta de energía solar utiliza drones para identificar paneles defectuosos, adaptándose a nuevas configuraciones de paneles según sea necesario.
    - **Toma de Decisiones Inteligente:** Utilizan algoritmos avanzados y aprendizaje automático para tomar decisiones óptimas basadas en datos en tiempo real.
        - Ejemplo Práctico: Un sistema de control autónomo en una planta de refinería ajusta automáticamente las variables de proceso para maximizar la eficiencia y minimizar desperdicios.
    
    **Aplicaciones Comunes:**
    
    - **Transporte Interno:** Vehículos autónomos para mover materiales dentro de las instalaciones.
    - **Inspección y Mantenimiento:** Drones y robots autónomos para inspeccionar infraestructuras y realizar tareas de mantenimiento.
    - **Control de Procesos:** Software autónomo que regula y optimiza procesos industriales en tiempo real.
3. **Análisis de Datos:** Uso de herramientas de Big Data e IA para tomar decisiones basadas en datos.
    
    La capacidad de procesar y analizar grandes volúmenes de datos ha revolucionado la forma en que las empresas toman decisiones estratégicas. **Big Data** se refiere a conjuntos de datos tan grandes y complejos que los métodos tradicionales de procesamiento son inadecuados. Por otro lado, la **Inteligencia Artificial (IA)** utiliza algoritmos avanzados para extraer patrones significativos y predecir tendencias futuras. Juntas, estas tecnologías permiten una toma de decisiones más precisa, rápida y efectiva.
    
    **Beneficios Clave:**
    
    - **Toma de Decisiones Informada:** Al acceder a datos precisos y actualizados, las empresas pueden tomar decisiones basadas en evidencia en lugar de intuición. Esto mejora la confianza y reduce el riesgo de errores.
        - **Ejemplo Práctico:** Una empresa de retail utilizó análisis de Big Data para identificar patrones de compra de sus clientes. Con base en estos datos, optimizó su inventario y estrategias de marketing, lo que resultó en un aumento del 20% en las ventas.
    - **Optimización Operativa:** La IA puede analizar grandes cantidades de datos en tiempo real para identificar áreas de mejora y sugerir ajustes. Esto permite optimizar procesos y reducir costos operativos.
        - **Ejemplo Práctico:** Una planta de manufactura implementó sistemas de IA para monitorear el rendimiento de sus máquinas. Los algoritmos detectaron ineficiencias en ciertos procesos y sugirieron mejoras que aumentaron la eficiencia energética en un 15%.
    - **Predicción de Tendencias:** Las herramientas de Big Data e IA pueden anticipar cambios en el mercado o problemas potenciales antes de que ocurran. Esto permite a las empresas adaptarse rápidamente y mantenerse competitivas.
        - **Ejemplo Práctico:** Un fabricante de automóviles utilizó análisis predictivo para anticipar la demanda de diferentes modelos. Ajustando la producción según las predicciones, evitó excesos de inventario y maximizó sus ingresos.
    - **Personalización del Producto y Servicio:** El análisis de datos permite a las empresas comprender mejor las preferencias individuales de los clientes, lo que facilita la personalización de productos y servicios.
        - **Ejemplo Práctico:** Un servicio de streaming utilizó análisis de Big Data para recomendar contenido personalizado a sus usuarios. Esto aumentó la satisfacción del cliente y redujo la tasa de cancelación de suscripciones.
    
    **Aplicaciones Comunes:**
    
    - **Marketing y Ventas:** Análisis de comportamiento del consumidor para optimizar campañas publicitarias y mejorar la conversión de ventas.
    - **Gestión de Inventario:** Monitoreo en tiempo real de niveles de stock para evitar sobrestock o desabastecimiento.
    - **Mantenimiento Predictivo:** Identificación de anomalías en equipos antes de que provoquen fallos, permitiendo intervenciones preventivas.
    - **Control de Calidad:** Detección de defectos en productos mediante inspecciones automatizadas y análisis de datos históricos.
4. **Ciberseguridad:** Protección de los sistemas digitales contra amenazas externas e internas.
    
    La ciberseguridad es un componente crítico en la gestión de cualquier empresa moderna, especialmente aquellas que dependen en gran medida de tecnologías avanzadas y datos sensibles. Su objetivo principal es proteger los sistemas digitales contra una variedad de amenazas, tanto externas como internas, garantizando la integridad, confidencialidad y disponibilidad de la información.
    
    **Amenazas Externas:**
    
    - **Hackers y Cibercriminales:** Personas o grupos que buscan acceder ilegalmente a sistemas para robar información, extorsionar mediante ransomware o causar daños.
        - **Ejemplo Práctico:** Una fábrica fue víctima de un ataque de ransomware que cifró todos sus datos críticos. Sin un plan adecuado de respaldo y recuperación, la producción se detuvo durante días, resultando en pérdidas significativas.
    - **Phishing y Ataques de Ingeniería Social:** Técnicas utilizadas para engañar a empleados y obtener acceso no autorizado a sistemas o información sensible.
        - **Ejemplo Práctico:** Un empleado de una empresa recibió un correo electrónico aparentemente legítimo que contenía un enlace malicioso. Al hacer clic, el sistema se infectó con malware, comprometiendo la seguridad de toda la red corporativa.
    - **Malware y Virus:** Software diseñado específicamente para dañar sistemas informáticos, robar datos o crear vulnerabilidades que pueden ser explotadas posteriormente.
        - **Ejemplo Práctico:** Una planta de procesamiento de alimentos sufrió un ataque de malware que afectó su sistema de control de calidad, lo que llevó a la distribución de productos defectuosos y una crisis de reputación.
    
    **Amenazas Internas:**
    
    - **Errores Humanos:** Acciones involuntarias por parte de empleados que pueden comprometer la seguridad de los sistemas, como el uso de contraseñas débiles o la descarga de software no autorizado.
        - **Ejemplo Práctico:** Un empleado de una fábrica automotriz utilizó una contraseña fácil de adivinar para acceder a un sistema crítico. Esto permitió que un hacker externo obtuviera acceso, exponiendo información confidencial sobre nuevos modelos de vehículos.
    - **Insider Threats (Amenazas Internas):** Empleados descontentos o malintencionados que deliberadamente intentan dañar los sistemas o robar información.
        - **Ejemplo Práctico:** Un trabajador despedido de una empresa de tecnología decidió vengarse eliminando archivos importantes del servidor antes de su salida. La falta de controles adecuados exacerbó el impacto del incidente.
    - **Acceso No Autorizado:** Situaciones en las que empleados sin la debida autorización acceden a áreas restringidas o manipulan datos sensibles.
        - **Ejemplo Práctico:** En una planta farmacéutica, un empleado de logística sin permiso accedió al sistema de formulación de medicamentos y modificó algunos parámetros, lo que podría haber tenido graves consecuencias si no se hubiera detectado a tiempo.
    
    **Estrategias Clave para Mejorar la Ciberseguridad:**
    
    - **Firewalls y Antivirus:** Implementar soluciones de protección perimetral que bloqueen accesos no autorizados y detecten malware en tiempo real.
        - **Ejemplo Práctico:** Una empresa instaló un firewall de última generación que filtraba tráfico sospechoso, previniendo múltiples intentos de intrusión antes de que pudieran causar daño.
    - **Encriptación de Datos:** Utilizar técnicas de encriptación para proteger la información sensible tanto en reposo como en tránsito.
        - **Ejemplo Práctico:** Una institución financiera encriptó todas las transacciones bancarias realizadas a través de su aplicación móvil, asegurando que incluso si los datos fueran interceptados, no podrían ser leídos por terceros no autorizados.
    - **Políticas de Contraseña y Autenticación Multifactor (MFA):** Establecer políticas estrictas para la creación y manejo de contraseñas, complementándolas con MFA para agregar una capa adicional de seguridad.
        - **Ejemplo Práctico:** Una compañía de telecomunicaciones implementó MFA para todos sus usuarios, reduciendo significativamente el riesgo de cuentas comprometidas debido a contraseñas débiles.
    - **Capacitación y Concienciación:** Educar a los empleados sobre prácticas seguras de navegación y reconocimiento de posibles amenazas, como phishing y malware.
        - **Ejemplo Práctico:** Una fábrica organizó talleres regulares sobre ciberseguridad, lo que aumentó la conciencia entre los empleados y redujo el número de incidentes relacionados con errores humanos.
    - **Respaldos y Planes de Recuperación:** Mantener copias de seguridad actualizadas y establecer planes claros para la recuperación en caso de un ataque exitoso.
        - **Ejemplo Práctico:** Una empresa de fabricación mantenía respaldos diarios de todos sus sistemas críticos. Cuando sufrieron un ataque de ransomware, pudieron restaurar rápidamente sus operaciones sin pagar rescate.
    - **Auditorías y Monitoreo Continuo:** Realizar auditorías periódicas para identificar vulnerabilidades y monitorear constantemente la actividad en la red para detectar anomalías.
        - **Ejemplo Práctico:** Una organización de servicios públicos implementó un sistema de monitoreo continuo que alertó a los administradores sobre un intento de acceso no autorizado, permitiéndoles tomar medidas preventivas antes de que ocurriera una brecha de seguridad.

**Beneficios Clave:**

- Toma de decisiones basadas en datos en tiempo real.
- Reducción de errores humanos mediante automatización.
- Mayor competitividad al adoptar tecnología de punta.

**Limitaciones:**

- Requiere una inversión inicial alta.
- Puede generar resistencia al cambio si no se acompaña de capacitación adecuada.

---

### **Factores para Decidir: ¿Cuál Conviene Más?**

**Estado Actual de la Fábrica:**

- **Consultoría Industrial:** Si los procesos manuales son ineficientes o la productividad está estancada, una consultoría industrial puede ser la mejor opción. Esta disciplina se enfoca en optimizar las operaciones existentes, mejorar la gestión de recursos humanos y maximizar la eficiencia general a través de ajustes en métodos de trabajo y diseño de procesos.
    - **Ejemplo Práctico:** Una fábrica que depende en gran medida de trabajadores manuales con tiempos de ciclo largos y altos niveles de desperdicio podría beneficiarse enormemente de una consultoría industrial que implemente estrategias como TPM (Total Productive Maintenance) y mejora continua.
- **Consultoría Tecnológica:** Si ya tienes procesos optimizados, pero necesitas digitalizarlos o automatizarlos para competir en la Industria 4.0, una consultoría tecnológica es la solución ideal. Esta aborda la transformación digital mediante la implementación de sistemas avanzados de ERP, IoT y análisis de datos.
    - **Ejemplo Práctico:** Una empresa que ha alcanzado un alto nivel de eficiencia operativa pero lucha por integrar sus sistemas y obtener información en tiempo real podría beneficiarse de una consultoría tecnológica que implemente soluciones de Big Data e IA para mejorar la toma de decisiones.

**Presupuesto Disponible:**

- **Consultoría Industrial:** Suele tener costos iniciales más bajos y no requiere inversiones significativas en tecnología. Las mejoras suelen centrarse en cambios en los métodos de trabajo, capacitación del personal y ajustes operativos.
    - **Ejemplo Práctico:** Una pequeña fábrica con un presupuesto limitado puede optar por una consultoría industrial que reorganice el flujo de trabajo y capacite al personal para aumentar la productividad sin necesidad de grandes inversiones tecnológicas.
- **Consultoría Tecnológica:** Necesita una inversión más alta, pero puede generar un retorno significativo a largo plazo. Aunque los costos iniciales pueden ser elevados, las mejoras en eficiencia y competitividad pueden compensar estos gastos rápidamente.
    - **Ejemplo Práctico:** Una gran corporación dispuesta a invertir en tecnología avanzada puede contratar una consultoría tecnológica para implementar sistemas de monitoreo en tiempo real y automatización robótica, lo que incrementará significativamente su productividad y reducirá costos operativos a largo plazo.

**Objetivos de Largo Plazo:**

- **Consultoría Industrial:** Ideal para fábricas que buscan estabilizar su producción y mejorar gradualmente su eficiencia operativa. Este tipo de consultoría se centra en la mejora continua y la optimización de procesos existentes.
    - **Ejemplo Práctico:** Una fábrica que enfrenta desafíos recurrentes de calidad y productividad puede utilizar una consultoría industrial para establecer programas de formación continua y sistemas de control de calidad que aseguren una producción estable y consistente.
- **Consultoría Tecnológica:** Perfecta para empresas que quieren liderar en innovación y eficiencia operativa. La adopción de tecnologías avanzadas permite a las empresas mantenerse a la vanguardia en un mercado global dinámico.
    - **Ejemplo Práctico:** Una empresa que busca posicionarse como líder en su industria puede adoptar una consultoría tecnológica para implementar soluciones de inteligencia artificial y análisis predictivo, lo que le permitirá anticipar tendencias y tomar decisiones estratégicas basadas en datos precisos.

**Capacidades del Equipo:**

- **Consultoría Industrial:** Enfocada en capacitar al personal en métodos de trabajo eficientes y mejores prácticas operativas. Esto incluye formación en TPM, gestión de recursos humanos y técnicas de mejora continua.
    - **Ejemplo Práctico:** Una planta que necesita mejorar la motivación y productividad de su personal puede contratar una consultoría industrial que desarrolle programas de incentivos y capacitación continua para fortalecer las habilidades del equipo.
- **Consultoría Tecnológica:** Requiere que el personal aprenda a usar nuevas herramientas tecnológicas y adapte sus roles a entornos digitales. Esto implica formación en software especializado, sistemas de monitoreo en tiempo real y plataformas de análisis de datos.
    - **Ejemplo Práctico:** Una empresa que planea implementar un sistema ERP avanzado puede contratar una consultoría tecnológica que capacite a su personal en el uso de esta plataforma, asegurando una transición fluida y eficiente hacia la nueva tecnología.

**Tipo de Problema a Resolver:**

- Si el problema es **logístico o humano** , la consultoría industrial es la opción adecuada. Esta disciplina se enfoca en resolver problemas relacionados con la organización del trabajo, la gestión de recursos humanos y la mejora de procesos manuales.
    - **Ejemplo Práctico:** Una fábrica que enfrenta problemas de coordinación entre departamentos y baja moral del personal puede beneficiarse de una consultoría industrial que implemente sistemas de gestión de recursos humanos y programas de capacitación para mejorar la colaboración y la motivación.
- Si el problema es **digital o técnico** , como la falta de automatización o integración de sistemas, la consultoría tecnológica es imprescindible. Esta aborda cuestiones relacionadas con la modernización de infraestructuras tecnológicas y la implementación de soluciones avanzadas de digitalización y automatización.
    - **Ejemplo Práctico:** Una empresa que tiene dificultades para integrar sus sistemas de producción y logística puede contratar una consultoría tecnológica que implemente soluciones de IoT y MES para optimizar la sincronización y comunicación entre diferentes áreas de la fábrica.

---

### **¿Por Qué No Ambas?**

En la práctica, combinar tanto una consultoría industrial como una consultoría tecnológica puede ser la solución ideal para muchas fábricas. Una estrategia híbrida no solo maximiza los beneficios de ambas disciplinas, sino que también crea una base sólida para la transformación digital y la mejora continua. A continuación se detallan las principales ventajas de esta combinación:

**Optimizar los procesos físicos primero y luego digitalizarlos para lograr la máxima eficiencia:**

- **Mejora Progresiva:** Al enfocarse primero en optimizar los procesos físicos mediante una consultoría industrial, se pueden identificar y corregir ineficiencias fundamentales antes de implementar soluciones tecnológicas. Esto asegura que cualquier inversión en tecnología esté respaldada por procesos bien estructurados.
    - **Ejemplo Práctico:** Una fábrica de alimentos comenzó con una consultoría industrial que reorganizó su línea de producción para reducir tiempos de ciclo y eliminar desperdicios. Posteriormente, contrató una consultoría tecnológica para implementar un sistema MES (Manufacturing Execution System) que monitoreara el rendimiento en tiempo real, lo que resultó en una mejora del 25% en la eficiencia general.
- **Base Sólida:** Los procesos optimizados proporcionan una base sólida sobre la cual construir soluciones digitales. Esto minimiza el riesgo de implementar tecnología avanzada en sistemas ineficientes o mal diseñados.
    - **Ejemplo Práctico:** Una planta automotriz utilizó una consultoría industrial para mejorar sus métodos de ensamblaje manual antes de implementar robots automatizados. Esta secuencia permitió una transición más fluida hacia la automatización, aumentando la productividad en un 30%.

**Diseñar una hoja de ruta tecnológica basada en una evaluación detallada de los procesos actuales:**

- **Visión Integral:** Combinar ambas consultorías permite desarrollar una hoja de ruta tecnológica que esté alineada con las necesidades específicas de la fábrica. La evaluación inicial realizada por la consultoría industrial ofrece una comprensión profunda de los procesos existentes, facilitando la planificación estratégica de la transformación digital.
    - **Ejemplo Práctico:** Una empresa química trabajó con una consultoría industrial para evaluar sus procesos críticos y luego con una consultoría tecnológica para diseñar una hoja de ruta que incluyera la implementación de sensores IoT y análisis predictivo. Este enfoque integrado permitió priorizar inversiones tecnológicas donde eran más necesarias, mejorando la eficiencia energética en un 15%.
- **Adaptabilidad:** Una hoja de ruta tecnológica basada en una evaluación exhaustiva de los procesos actuales es más adaptable a cambios futuros. Las soluciones tecnológicas pueden ajustarse según las necesidades cambiantes de la fábrica, asegurando una evolución constante y sostenible.
    - **Ejemplo Práctico:** Una fábrica de electrónica utilizó una consultoría industrial para mapear su flujo de trabajo y luego trabajó con una consultoría tecnológica para implementar un sistema ERP escalable. Esto permitió a la empresa adaptar su infraestructura tecnológica a medida que crecía y diversificaba su oferta de productos.

**Garantizar que tanto las máquinas como el personal estén preparados para la transformación digital:**

- **Capacitación Integral:** Una estrategia híbrida asegura que tanto el personal como las máquinas estén adecuadamente capacitados y preparados para adoptar nuevas tecnologías. La consultoría industrial se enfoca en capacitar al personal en mejores prácticas operativas, mientras que la consultoría tecnológica les enseña a utilizar herramientas digitales avanzadas.
    - **Ejemplo Práctico:** Una planta de manufactura contrató una consultoría industrial para capacitar a sus empleados en TPM (Total Productive Maintenance) y luego una consultoría tecnológica para formarlos en el uso de sistemas de monitoreo en tiempo real. Este enfoque dual mejoró tanto la competencia técnica como la capacidad de los empleados para aprovechar al máximo las nuevas tecnologías.
- **Integración Perfecta:** Garantizar que las máquinas estén listas para la digitalización implica realizar actualizaciones y mantenimientos preventivos que aseguren su compatibilidad con las nuevas tecnologías. La consultoría industrial puede identificar y abordar problemas técnicos antes de la implementación de soluciones tecnológicas.
    - **Ejemplo Práctico:** Una fábrica de plásticos utilizó una consultoría industrial para realizar un diagnóstico completo de su maquinaria y luego trabajó con una consultoría tecnológica para instalar sensores IoT. Esta preparación previa garantizó una integración sin problemas, lo que resultó en una reducción del 20% en tiempos de inactividad no planificados.

**Beneficios Clave de una Estrategia Híbrida:**

- **Mayor Eficiencia Operativa:** Al optimizar primero los procesos físicos y luego digitalizarlos, las empresas pueden alcanzar niveles de eficiencia superiores a los que podrían lograr utilizando una sola disciplina.
    - **Ejemplo Práctico:** Una empresa textil que combinó consultoría industrial y tecnológica logró mejorar su eficiencia operativa en un 40%, gracias a la reorganización de líneas de producción y la implementación de un sistema de gestión de inventarios basado en Big Data.
- **Reducción de Riesgos:** Implementar soluciones tecnológicas sobre procesos optimizados reduce significativamente el riesgo de fracaso o ineficacia de las inversiones tecnológicas.
    - **Ejemplo Práctico:** Una fábrica de metales trabajó primero en la optimización de sus procesos de fundición con una consultoría industrial antes de implementar un sistema de control autónomo con la ayuda de una consultoría tecnológica. Esta secuencia aseguró que la tecnología funcionara correctamente desde el principio, evitando costosas interrupciones.
- **Competitividad Mejorada:** Las empresas que adoptan una estrategia híbrida están mejor posicionadas para liderar en innovación y eficiencia operativa, lo que les permite mantenerse competitivas en un mercado global dinámico.
    - **Ejemplo Práctico:** Un fabricante de componentes electrónicos que combinó consultoría industrial y tecnológica pudo lanzar nuevos productos al mercado más rápidamente y con mayor precisión, lo que le permitió ganar cuota de mercado frente a sus competidores

---

### **Adaptarse para Competir**

En un entorno industrial cada vez más competitivo y dinámico, la capacidad de adaptarse y evolucionar es crucial para el éxito sostenible. La decisión entre una consultoría industrial o tecnológica no tiene que ser mutuamente excluyente; en muchos casos, la combinación de ambas puede ofrecer los mejores resultados.

- **Si tu fábrica está lidiando con problemas operativos básicos, comienza con una consultoría industrial.** Esta disciplina se enfoca en optimizar procesos físicos, mejorar la gestión de recursos humanos y maximizar la eficiencia general a través de ajustes en métodos de trabajo y diseño de procesos. Es ideal para estabilizar la producción, reducir desperdicios y aumentar la productividad cuando las operaciones manuales son ineficientes o la productividad está estancada.
    - **Ejemplo Práctico:** Una planta que enfrenta problemas recurrentes de calidad y productividad puede utilizar una consultoría industrial para establecer programas de formación continua y sistemas de control de calidad, asegurando una producción estable y consistente.
- **Si buscas innovar, automatizar y competir en mercados más exigentes, la consultoría tecnológica es imprescindible.** Esta aborda la transformación digital mediante la implementación de sistemas avanzados de ERP, IoT y análisis de datos. Es perfecta para empresas que quieren liderar en innovación y eficiencia operativa, utilizando tecnología de punta para mantenerse a la vanguardia en un mercado global dinámico.
    - **Ejemplo Práctico:** Un fabricante que busca posicionarse como líder en su industria puede adoptar una consultoría tecnológica para implementar soluciones de inteligencia artificial y análisis predictivo, lo que le permitirá anticipar tendencias y tomar decisiones estratégicas basadas en datos precisos.

**En última instancia, el éxito depende de identificar las áreas críticas de mejora y abordar los desafíos con la estrategia adecuada.** Cada fábrica tiene necesidades, objetivos y desafíos únicos, y la clave para lograr una transformación efectiva radica en realizar una evaluación exhaustiva de estas variables antes de decidir sobre la mejor ruta a seguir.

**¿Listo para transformar tu operación? Consulta con expertos para crear un plan personalizado que combine lo mejor de ambos mundos.**

Una estrategia híbrida que integre tanto la consultoría industrial como la tecnológica ofrece múltiples ventajas:

- **Optimización Progresiva:** Comenzar por optimizar los procesos físicos y luego digitalizarlos asegura una base sólida sobre la cual construir soluciones tecnológicas avanzadas.
- **Hoja de Ruta Integral:** Diseñar una hoja de ruta tecnológica basada en una evaluación detallada de los procesos actuales permite priorizar inversiones donde sean más necesarias y garantiza una evolución constante y sostenible.
- **Capacitación Integral:** Asegurar que tanto el personal como las máquinas estén preparados para la transformación digital minimiza el riesgo de fracaso y facilita una transición fluida hacia nuevas tecnologías.

Al trabajar con expertos en consultoría industrial y tecnológica, puedes desarrollar un plan personalizado que aproveche al máximo las fortalezas de ambas disciplinas. Esto no solo te permitirá resolver problemas actuales, sino también anticiparte a futuros desafíos y oportunidades, asegurando la competitividad y sostenibilidad de tu fábrica en el largo plazo.

La transformación no es solo una opción; es una necesidad para sobrevivir y prosperar en el panorama industrial moderno. ¿Estás listo para dar el siguiente paso y llevar tu operación al siguiente nivel?```

## `blogs/el-futuro-de-la-manufactura-en-2025.mdx`
```mdx
---
title: El Futuro de la Manufactura en 2025
date: 2025-01-01
description: Explorando las tendencias y tecnologías que están dando forma a la industria de la manufactura en 2025.
image: /img/manufactura2025.jpeg
---

A medida que avanzamos hacia 2025, la **industria de la manufactura** está experimentando una transformación significativa. Desde tecnologías de vanguardia hasta cambios en las cadenas de suministro globales, el panorama de la producción está evolucionando rápidamente.

## Principales Tendencias en la Manufactura para 2025

### 1. **Automatización y Robótica: La Alianza Inteligente Hombre-Máquina**

La automatización ya no es una promesa futurista, sino una realidad tangible que impulsa la productividad y la competitividad en la manufactura. Para 2025, esta tendencia se consolidará con el despliegue de **robots avanzados** y **sistemas de automatización impulsados por inteligencia artificial (IA)**. Estas tecnologías no solo ejecutarán tareas repetitivas, sino que también optimizarán procesos complejos, desde el ensamblaje de precisión hasta el control de calidad exhaustivo.

*   **Robots Colaborativos (Cobots): La Nueva Era de la Colaboración:** Los cobots marcarán una diferencia clave. Diseñados para trabajar codo a codo con los operadores humanos, estos robots colaborativos realizarán tareas pesadas y peligrosas, liberando a los trabajadores para enfocarse en actividades de mayor valor, como la resolución de problemas, la innovación y el control de procesos. Esta sinergia entre humanos y robots no solo aumentará la eficiencia, sino que también mejorará las condiciones laborales y la seguridad en el entorno de trabajo.

*   **Mantenimiento Predictivo Impulsado por IA: Anticipando el Futuro:** El tiempo de inactividad es el enemigo de la productividad. En 2025, la IA desempeñará un papel crucial en el mantenimiento de equipos, con sistemas que analizarán datos en tiempo real para **predecir posibles fallos y programar el mantenimiento preventivo**. Esta capacidad de anticipación reducirá drásticamente los tiempos de inactividad no planificados, optimizará la vida útil de los equipos y garantizará una producción más fluida y rentable.

### 2. **Fabricación Aditiva (Impresión 3D)**
La impresión 3D, también conocida como fabricación aditiva, ha dejado de ser un concepto futurista para convertirse en una fuerza disruptiva en la manufactura moderna. Para 2025, esta tecnología se consolidará como un pilar fundamental, transformando la forma en que diseñamos, producimos y personalizamos productos en diversas industrias. Prepárate para descubrir cómo la impresión 3D está abriendo nuevas posibilidades de innovación y eficiencia.

**La Impresión 3D: Creando el Futuro, Capa por Capa**

La fabricación aditiva permite la construcción de piezas y productos complejos directamente desde modelos digitales, eliminando la necesidad de procesos tradicionales de mecanizado y moldeo. Esta capacidad de transformar ideas en objetos físicos, con una precisión y flexibilidad sin precedentes, está revolucionando sectores clave como la **automotriz**, la **aeronáutica** y la **salud**.

*   **Impresión 3D de Metal: La Próxima Frontera:** Una de las mayores evoluciones para 2025 será la mejora en la **impresión 3D de metal**. La mayor precisión y la reducción de costos permitirán la fabricación de componentes estructurales complejos y robustos, con aplicaciones que van desde piezas para motores de aviones hasta implantes médicos personalizados. Esta tecnología está abriendo nuevas vías para la innovación en diseño y rendimiento de productos.

*   **Personalización Masiva: Productos a tu Medida:** La impresión 3D está democratizando la producción. Ya no estamos limitados a la fabricación en masa de productos genéricos. La **personalización masiva** será una realidad, con la posibilidad de crear productos a medida y adaptados a las necesidades individuales de cada cliente. Esta capacidad beneficiará enormemente a la **industria de consumo**, permitiendo a las empresas ofrecer productos únicos y personalizados a un costo asequible. Imagina ropa, calzado, dispositivos electrónicos y mucho más, fabricados bajo demanda y diseñados para ti.

### 3. **Internet de las Cosas (IoT) y Conectividad**
El Internet de las Cosas (IoT) ya no es un concepto abstracto, sino una realidad tangible que está transformando la manufactura. Para 2025, la conectividad será el sistema nervioso de la **fábrica inteligente**, con dispositivos, máquinas y sistemas interconectados que operan en perfecta armonía. Prepárate para descubrir cómo el IoT está revolucionando la toma de decisiones y optimizando las operaciones en tiempo real.

**La Revolución de la Conectividad: Un Ecosistema de Datos en la Manufactura**

La proliferación de sensores y dispositivos conectados está generando una cantidad masiva de datos en la planta de producción. Para 2025, esta información se convertirá en el combustible de la **fábrica inteligente**, permitiendo una visibilidad y un control sin precedentes sobre todos los procesos. Desde el estado de las máquinas hasta el rendimiento de cada línea de producción, el IoT está proporcionando la información necesaria para optimizar la eficiencia y reducir los costos.

*   **Monitoreo Remoto: La Planta en la Palma de tu Mano:** Los gerentes de planta ya no están atados a la oficina. Gracias al IoT, el **monitoreo remoto** será una realidad, permitiéndoles supervisar las operaciones desde cualquier lugar, a través de sus dispositivos móviles. Esta capacidad de obtener datos en tiempo real y tomar decisiones informadas, incluso fuera de la planta, mejorará la eficiencia, reducirá los costos operativos y permitirá una respuesta más rápida a problemas y oportunidades.

*   **Sistemas de Gestión de Producción Basados en Datos: La Inteligencia Artificial al Servicio de la Eficiencia:** La verdadera potencia del IoT reside en su capacidad para alimentar los **sistemas de gestión de producción basados en datos**. Estos sistemas utilizarán la inteligencia artificial (IA) y el aprendizaje automático para analizar grandes cantidades de datos y tomar decisiones automáticas en tiempo real. Desde la optimización de la cadena de suministro hasta la programación de la producción, estos sistemas trabajarán para mejorar la eficiencia, reducir el desperdicio y maximizar la rentabilidad.

### 4. **Sostenibilidad y Manufactura Verde**
La creciente presión para reducir las emisiones de gases de efecto invernadero y proteger los recursos naturales está transformando la manufactura. En 2025, las empresas adoptarán un enfoque holístico hacia la **manufactura verde**, implementando prácticas que reduzcan su huella de carbono, optimicen el uso de recursos y minimicen el desperdicio. Este cambio de paradigma no solo es una responsabilidad ética, sino también una estrategia inteligente para asegurar el éxito a largo plazo.

- **Energía Limpia: Impulsando la Producción con Recursos Sostenibles:** Las **energías renovables** serán la base de la operación de las fábricas del futuro. En 2025, es muy probable que veamos un aumento significativo en la adopción de la **energía solar, eólica** y otras fuentes de energía limpia, reduciendo la dependencia de los combustibles fósiles y disminuyendo las emisiones de carbono. Este cambio no solo contribuirá a la protección del medio ambiente, sino que también reducirá los costos operativos a largo plazo.
- **Materiales Reciclados: El Círculo Virtuoso de la Economía Circular:** La **reciclabilidad de los productos** será un factor clave en la manufactura sostenible. En 2025, se incrementará el uso de **materiales reciclados** en la producción, cerrando el ciclo de vida de los productos y reduciendo la demanda de recursos naturales. Esta transición hacia una **economía circular** no solo disminuirá el impacto ambiental, sino que también creará nuevas oportunidades de negocio en la gestión de residuos y el desarrollo de materiales sostenibles.

### 5. **Personalización en Masa**
La era de los productos genéricos está llegando a su fin. Los consumidores de hoy buscan experiencias únicas y personalizadas, y para 2025, la **personalización en masa** será una realidad en la manufactura. Las empresas se enfocarán en ofrecer productos hechos a medida, a gran escala, satisfaciendo la creciente demanda de exclusividad y adaptabilidad. Prepárate para descubrir cómo la manufactura está revolucionando la forma en que creamos y consumimos productos.

**La Personalización en Masa: Uniendo la Exclusividad con la Eficiencia Industrial**

La fabricación personalizada en masa es un enfoque que permite a las empresas crear productos únicos y adaptados a las necesidades individuales de cada cliente, sin sacrificar la eficiencia ni aumentar los costos significativamente. Esta capacidad de combinar la personalización con la producción a gran escala está transformando la relación entre las marcas y sus consumidores, abriendo un abanico de posibilidades para la innovación y el crecimiento.

- **Personalización en Línea: El Poder en Manos del Consumidor:** En 2025, los consumidores tendrán el control de la personalización de sus productos. A través de plataformas en línea intuitivas, podrán diseñar, configurar y adaptar productos a sus gustos y necesidades. Desde la elección de colores y materiales hasta la incorporación de diseños personalizados, los consumidores se convertirán en creadores, co-diseñando los productos que desean adquirir. Este empoderamiento del consumidor generará una mayor lealtad a la marca y una experiencia de compra más satisfactoria.
- **Fabricación a Medida sin Sacrificar la Eficiencia:** La personalización en masa no es sinónimo de procesos de producción lentos o costosos. Las fábricas del futuro utilizarán tecnologías avanzadas, como la impresión 3D, la automatización y la inteligencia artificial, para producir productos personalizados de manera rápida, eficiente y rentable. Esta capacidad de producir a medida sin sacrificar la eficiencia permitirá a las empresas adaptarse rápidamente a las cambiantes demandas del mercado y ofrecer productos únicos a un precio competitivo.

## Desafíos de la Manufactura en 2025

Aunque el futuro de la manufactura es prometedor, también existen varios desafíos que las empresas deben enfrentar:

### 1. **Escasez de Mano de Obra Calificada**
Mientras el futuro de la manufactura se vislumbra lleno de innovaciones y avances tecnológicos, también presenta desafíos significativos que las empresas deben abordar con estrategia y visión. Uno de los más apremiantes es la **escasez de mano de obra calificada**, un problema que puede obstaculizar el crecimiento y la adaptación a las nuevas demandas del mercado. En 2025, la capacidad de atraer, desarrollar y retener talento será un factor crítico de éxito en la industria manufacturera.

**La Brecha de Habilidades: Un Desafío para la Manufactura Inteligente**

La automatización, la robótica, la inteligencia artificial y otras tecnologías avanzadas están transformando la naturaleza del trabajo en la manufactura. Estas nuevas tecnologías no solo requieren operadores con habilidades técnicas, sino también personal capaz de comprender, gestionar y optimizar los procesos complejos que estas tecnologías habilitan. En 2025, las empresas enfrentarán la difícil tarea de encontrar, capacitar y retener una **fuerza laboral altamente calificada** que pueda navegar en este nuevo entorno.

- **La Demanda de Habilidades Técnicas:** Las nuevas tecnologías exigirán habilidades específicas en áreas como programación de robots, mantenimiento de sistemas automatizados, análisis de datos, gestión de plataformas IoT y diseño con herramientas CAD/CAM. Los trabajadores del futuro deberán tener una comprensión profunda de estas tecnologías y la capacidad de adaptarse a los cambios constantes.
- **La Necesidad de Habilidades Blandas:** Además de las habilidades técnicas, la industria manufacturera también demandará trabajadores con habilidades blandas como la resolución de problemas, el pensamiento crítico, la comunicación efectiva y el trabajo en equipo. La capacidad de colaborar con compañeros humanos y robots será esencial para el éxito en el entorno de la fábrica inteligente.
- **La Urgencia de la Capacitación Continua:** Las empresas deberán asumir la responsabilidad de capacitar a su personal en las nuevas tecnologías y habilidades demandadas. Esto implicará la creación de programas de capacitación continua, la inversión en recursos educativos y la colaboración con instituciones de formación para garantizar que los trabajadores estén preparados para el futuro del trabajo.

**Consecuencias de la Escasez de Mano de Obra Calificada:**

- **Obstáculos para la Innovación:** La falta de personal capacitado puede frenar la adopción de nuevas tecnologías y obstaculizar la innovación.
- **Reducción de la Productividad:** La incapacidad de operar y mantener las nuevas tecnologías puede disminuir la eficiencia y la productividad.
- **Aumento de Costos:** La búsqueda y retención de talento calificado puede aumentar los costos laborales y afectar la rentabilidad.
- **Pérdida de Competitividad:** Las empresas que no inviertan en la capacitación de su personal corren el riesgo de perder competitividad en el mercado.
- **Dificultad para la Expansión:** La falta de talento puede limitar la capacidad de las empresas para expandir sus operaciones y aprovechar nuevas oportunidades de negocio.

**Soluciones Potenciales:**

- **Invertir en Programas de Capacitación:** Las empresas deben crear y financiar programas de capacitación para desarrollar las habilidades técnicas y blandas que necesitan sus trabajadores.
- **Colaborar con Instituciones Educativas:** Establecer alianzas con universidades, colegios técnicos y centros de formación para desarrollar programas de capacitación alineados con las necesidades de la industria.
- **Ofrecer Remuneración Competitiva:** Atraer y retener talento calificado requiere ofrecer salarios competitivos y beneficios atractivos.
- **Fomentar una Cultura de Aprendizaje:** Crear un entorno laboral que promueva el aprendizaje continuo y el desarrollo profesional.
- **Promover la Diversidad e Inclusión:** Ampliar la búsqueda de talento para atraer a una fuerza laboral diversa y aprovechar diferentes perspectivas.

### 2. **Cadenas de Suministro Globales**
La globalización ha transformado la manufactura, creando complejas redes de suministro que abarcan todo el planeta. Sin embargo, eventos recientes, como la pandemia, han revelado la fragilidad de estas cadenas de suministro y la necesidad urgente de construir sistemas más resilientes y adaptables. En 2025, las empresas manufactureras enfrentarán el desafío de equilibrar la eficiencia global con la necesidad de asegurar la continuidad de sus operaciones en un mundo cada vez más impredecible.

**La Vulnerabilidad de las Cadenas de Suministro Globales: Lecciones Aprendidas**

Las interrupciones en las cadenas de suministro, ya sean causadas por eventos inesperados como desastres naturales, tensiones geopolíticas o crisis sanitarias, pueden tener un impacto devastador en la manufactura. La dependencia excesiva de un número reducido de proveedores y rutas de suministro ha demostrado ser una estrategia riesgosa, exponiendo a las empresas a retrasos, aumentos de costos y la incapacidad de satisfacer la demanda de sus clientes. En 2025, la **diversificación** y la **producción local** se convertirán en pilares fundamentales de la estrategia de la cadena de suministro.

- **Diversificación de Proveedores y Rutas de Suministro:** La dependencia de un solo proveedor o una ruta de suministro específica puede ser fatal en caso de interrupciones. Para minimizar los riesgos, las empresas deberán buscar proveedores en diferentes regiones y establecer rutas de suministro alternativas, reduciendo su exposición a eventos imprevistos.
- **Estrategias de Producción Local: Un Retorno a lo Cercano:** La pandemia ha impulsado un resurgimiento del interés en la **producción local**, lo que permite a las empresas reducir su dependencia de proveedores lejanos, acortar los tiempos de entrega, disminuir los costos de transporte y responder más rápidamente a las demandas locales. La producción local también puede generar beneficios económicos y sociales para las comunidades cercanas.
- **Tecnología y Visibilidad: La Clave para una Gestión Eficiente:** La adopción de tecnologías como la inteligencia artificial, el análisis de datos y el Internet de las Cosas (IoT) puede proporcionar una mayor visibilidad y control sobre las cadenas de suministro. Estas tecnologías permiten a las empresas monitorear el inventario, rastrear envíos, anticipar problemas y tomar decisiones informadas para mitigar los riesgos.

**Desafíos y Consideraciones:**

- **Complejidad de la Diversificación:** Diversificar las cadenas de suministro puede ser un proceso complejo que requiere tiempo, recursos y una cuidadosa evaluación de proveedores alternativos.
- **Inversión en Capacidad Local:** La transición hacia una producción local puede implicar inversiones en instalaciones, equipos y personal en nuevas regiones.
- **Equilibrio entre Costos y Resiliencia:** Las empresas deberán encontrar un equilibrio entre la eficiencia económica y la necesidad de construir cadenas de suministro más resilientes.
- **Consideraciones Geopolíticas:** La diversificación de las cadenas de suministro también debe tener en cuenta las consideraciones geopolíticas y las tensiones comerciales entre diferentes regiones.
- **Sostenibilidad de las Cadenas de Suministro:** Las empresas también deberán asegurar que sus cadenas de suministro sean sostenibles y respetuosas con el medio ambiente y los derechos humanos.

**Beneficios de una Cadena de Suministro Resiliente:**

- **Continuidad Operacional:** Las cadenas de suministro resilientes aseguran la continuidad de las operaciones, incluso en situaciones de crisis.
- **Reducción de Riesgos:** La diversificación y la producción local minimizan la exposición a interrupciones y retrasos.
- **Mayor Flexibilidad:** La capacidad de adaptarse rápidamente a las cambiantes demandas del mercado mejora la flexibilidad de la empresa.
- **Reducción de Costos a Largo Plazo:** La eficiencia, la reducción de desperdicios y la optimización del transporte pueden reducir los costos operativos a largo plazo.
- **Mayor Lealtad del Cliente:** La capacidad de cumplir con los compromisos de entrega mejora la lealtad y la satisfacción del cliente.
- **Mayor Competitividad:** Las empresas con cadenas de suministro resilientes están mejor posicionadas para competir en el mercado global.

### 3. **Ciberseguridad**
La transformación digital de la manufactura ha traído consigo numerosos beneficios, como la automatización, la eficiencia y la toma de decisiones basadas en datos. Sin embargo, esta creciente digitalización también ha abierto la puerta a nuevas vulnerabilidades y amenazas cibernéticas. En 2025, la **ciberseguridad** se convertirá en un tema crítico para la supervivencia de las empresas manufactureras, requiriendo inversiones y estrategias sólidas para proteger sus activos, datos y operaciones.

**La Amenaza Digital: El Nuevo Riesgo en la Manufactura Conectada**

Las fábricas inteligentes de hoy en día son altamente interconectadas, con sistemas de control, maquinaria, dispositivos IoT y redes corporativas trabajando juntos para producir bienes. Esta conectividad, si bien mejora la eficiencia, también crea una superficie de ataque más amplia para los ciberdelincuentes. Las amenazas pueden variar desde ataques de ransomware que paralizan la producción hasta robos de propiedad intelectual, espionaje industrial e interrupción de las cadenas de suministro. En 2025, las empresas manufactureras deberán adoptar un enfoque proactivo para la ciberseguridad, implementando medidas de protección en todos los niveles.

- **El Aumento de los Ataques a la Infraestructura Crítica:** Los sistemas de control industrial (ICS) y los sistemas de control y adquisición de datos (SCADA) utilizados en la manufactura son objetivos cada vez más atractivos para los ciberdelincuentes. Un ataque exitoso a estos sistemas puede paralizar la producción, causar daños a la maquinaria e incluso poner en peligro la seguridad de los trabajadores.
- **El Riesgo del IoT Industrial:** La proliferación de dispositivos IoT en la fábrica crea nuevas vulnerabilidades que los ciberdelincuentes pueden aprovechar para obtener acceso a la red y comprometer los sistemas. Los dispositivos IoT a menudo carecen de las mismas medidas de seguridad que los ordenadores tradicionales, lo que los convierte en puntos débiles en la cadena de seguridad.
- **La Importancia de la Protección de Datos:** Las empresas manufactureras almacenan una gran cantidad de datos confidenciales, como diseños de productos, información de clientes, datos financieros y secretos comerciales. La pérdida o el robo de esta información puede tener consecuencias devastadoras para las empresas, afectando su competitividad y reputación.

**Estrategias para una Ciberseguridad Robusta:**

- **Invertir en Seguridad Cibernética Avanzada:** Las empresas deben invertir en soluciones de seguridad cibernética de última generación, incluyendo firewalls, sistemas de detección de intrusiones, software antivirus y herramientas de cifrado.
- **Implementar una Arquitectura de Seguridad en Capas:** Utilizar una combinación de medidas de seguridad para proteger los sistemas y datos en diferentes niveles, desde la red hasta el punto final.
- **Realizar Evaluaciones de Riesgo Continuas:** Identificar y evaluar las vulnerabilidades de los sistemas y las amenazas potenciales, implementando medidas de mitigación.
- **Capacitar a los Empleados en Seguridad Cibernética:** Concienciar a los empleados sobre los riesgos cibernéticos y enseñarles cómo reconocer y evitar ataques de phishing y otras amenazas.
- **Implementar Políticas de Seguridad Sólidas:** Establecer políticas de seguridad claras y detalladas que cubran el acceso a la red, el uso de dispositivos, el manejo de datos y la respuesta a incidentes.
- **Realizar Copias de Seguridad Periódicas:** Realizar copias de seguridad periódicas de los datos importantes y almacenarlos de forma segura para poder recuperarlos en caso de un incidente.
- **Establecer un Plan de Respuesta a Incidentes:** Desarrollar un plan de respuesta a incidentes detallado que incluya los pasos a seguir en caso de un ataque cibernético.

**Consecuencias de la Falta de Ciberseguridad:**

- **Interrupción de la Producción:** Un ataque cibernético exitoso puede paralizar la producción, causando pérdidas económicas y retrasos en las entregas.
- **Daños a la Reputación:** La pérdida de datos confidenciales o un incidente de seguridad pueden dañar la reputación de la empresa y erosionar la confianza de los clientes.
- **Pérdida de Propiedad Intelectual:** Los ciberdelincuentes pueden robar información confidencial, como diseños de productos, secretos comerciales y datos de clientes, lo que puede dañar la competitividad de la empresa.
- **Costos de Recuperación:** La recuperación de un incidente cibernético puede resultar costosa, incluyendo la contratación de expertos en seguridad, la restauración de sistemas y la compensación a clientes.
- **Sanciones Legales:** Las empresas que no protejan adecuadamente los datos de sus clientes pueden enfrentar sanciones legales y multas.

## Conclusión

El año 2025 marca un punto de inflexión en la historia de la manufactura. Las tendencias que hemos explorado, desde la **automatización y la robótica** hasta la **personalización en masa** y la **sostenibilidad**, no son meras predicciones, sino fuerzas transformadoras que están redefiniendo la forma en que producimos bienes y servicios. La **fábrica inteligente**, impulsada por el **Internet de las Cosas (IoT)** y la **inteligencia artificial (IA)**, ofrece un futuro de eficiencia, productividad y adaptabilidad sin precedentes. La **fabricación aditiva (impresión 3D)** está democratizando la innovación, permitiendo la creación de productos personalizados y soluciones únicas a escala industrial. Y, lo que es más importante, la creciente conciencia ambiental está llevando a la adopción de prácticas de **manufactura verde**, que buscan un equilibrio entre la rentabilidad económica y la responsabilidad social.

Sin embargo, este futuro prometedor también presenta desafíos significativos. La **escasez de mano de obra calificada** requiere una inversión urgente en la formación y capacitación de la fuerza laboral del futuro. La vulnerabilidad de las **cadenas de suministro globales** nos exige construir redes más diversificadas y resilientes, apostando por la producción local y la tecnología para mitigar los riesgos. Y, por supuesto, la creciente **ciberseguridad** nos obliga a proteger nuestras operaciones y datos de las amenazas digitales, convirtiendo la seguridad cibernética en una prioridad estratégica.

En 2025, las empresas manufactureras que logren navegar estas oportunidades y desafíos serán las que prosperen y se mantengan competitivas en un mercado global cada vez más exigente. La clave del éxito residirá en la capacidad de adoptar las nuevas tecnologías, adaptarse a los cambios del mercado, invertir en el talento humano y comprometerse con la sostenibilidad. La manufactura del futuro será más inteligente, más conectada, más personalizada y más responsable, y aquellos que abracen esta visión estarán liderando la vanguardia de la innovación.

En definitiva, el 2025 no es un destino final, sino el comienzo de una nueva era para la manufactura. Prepárense para un futuro en el que la creatividad, la tecnología y la responsabilidad se fusionan para construir un mundo más eficiente, sostenible y próspero. La transformación de la manufactura ya está en marcha, y el momento de actuar es ahora.

---

¡Gracias por leer! En futuras publicaciones, exploraremos más sobre cómo las empresas manufactureras pueden aprovechar estas tendencias para seguir siendo competitivas en un mercado en constante cambio.
```

## `blogs/industria-4-0-mantenimiento-predictivo-evitar-fallos-maximizar-eficiencia-fabricas.mdx`
```mdx
---
title: Mantenimiento Predictivo Para Evitar Fallos en Fábricas
date: 2025-01-12
description: egún un estudio reciente de Deloitte, las organizaciones que adoptan estrategias de mantenimiento predictivo obtienen resultados significativos en términos de eficiencia y rentabilidad.
image: /img/man-8180076_640.jpg
---
**La Evolución del Mantenimiento Industrial**

En el competitivo entorno industrial, donde cada minuto de operación es crucial y los costos asociados a la inactividad pueden ascender rápidamente a miles de dólares, la implementación de tecnologías avanzadas se vuelve imprescindible. Según un estudio reciente de Deloitte, las organizaciones que adoptan estrategias de **mantenimiento predictivo** obtienen resultados significativos en términos de eficiencia y rentabilidad:

- **Reducción de costos de mantenimiento** : Las empresas logran una disminución del **25% al 30%** en los gastos relacionados con reparaciones y actividades preventivas, optimizando así sus recursos financieros.
- **Aumento de la disponibilidad de equipos** : La implementación de estas soluciones permite incrementar la disponibilidad operativa de maquinaria y sistemas clave entre un **20% y 25%** , garantizando una producción más continua y estable.

Además, este enfoque no solo mejora la eficiencia operativa, sino que también reduce el riesgo de fallos catastróficos, promueve una mejor toma de decisiones basada en datos reales y contribuye a extender la vida útil de los activos industriales. En un mercado donde la velocidad y la precisión son diferenciales, el mantenimiento predictivo se posiciona como una herramienta estratégica para mantener una ventaja competitiva sostenible.

---

### **¿Qué es el Mantenimiento Predictivo?**

El mantenimiento predictivo (PdM) es una estrategia proactiva que utiliza datos en tiempo real y tecnologías avanzadas para anticipar fallos en equipos, permitiendo intervenir antes de que ocurran problemas. A diferencia de otras estrategias de mantenimiento, el PdM se basa en el estado actual del equipo, lo que permite optimizar los recursos y reducir costos asociados a paradas no planificadas.

En comparación con otros tipos de mantenimiento:

- **Mantenimiento Reactivo** : Este enfoque implica reparar los equipos solo después de que han fallado. Si bien puede parecer menos costoso inicialmente, las paradas no planificadas generan gastos elevados debido a la interrupción de la producción. Además, su eficiencia es baja porque no se anticipa ni previene ningún problema, lo que puede llevar a daños mayores y más costosos.
- **Mantenimiento Preventivo** : En este caso, las inspecciones y actividades de mantenimiento se realizan de manera programada, independientemente del estado real del equipo. Aunque reduce el riesgo de fallos inesperados, puede generar un sobre-mantenimiento, lo que aumenta los costos y puede ser menos eficiente, ya que algunas intervenciones podrían no ser necesarias.
- **Mantenimiento Predictivo** : Al centrarse en el estado real del equipo mediante monitoreo continuo y análisis de datos, esta estrategia permite realizar intervenciones precisas solo cuando son necesarias. Esto resulta en un costo más bajo, ya que se evitan reparaciones innecesarias, y una alta eficiencia operativa, ya que se minimizan las interrupciones y se extiende la vida útil de los activos.

---

### **¿Cómo Funciona el Mantenimiento Predictivo?**

El PdM se sustenta en cuatro pilares tecnológicos fundamentales:

1. **Sensores IoT y Monitoreo Continuo**
    
    Sensores integrados miden con precisión variables críticas como vibración, temperatura o presión. Estos dispositivos permiten un monitoreo continuo y en tiempo real, asegurando que cualquier desviación sea detectada de inmediato. La recolección de datos es fundamental para prevenir fallos, optimizar el rendimiento y garantizar la seguridad operativa. Además, al analizar información proveniente de múltiples puntos, se pueden identificar patrones o anomalías que podrían pasar desapercibidas a simple vista. Esto facilita la toma de decisiones informadas y mejora la eficiencia general del sistema, reduciendo costos asociados a mantenimientos no programados o paradas imprevistas.
    
    - Por ejemplo, si un motor supera los 85°C, el sistema emite una alerta antes de que ocurra un sobrecalentamiento. Este tipo de monitoreo proactivo permite a los operadores tomar medidas correctivas inmediatas, como reducir la carga del motor o activar sistemas de enfriamiento adicionales. Al intervenir en esta etapa temprana, se evita el riesgo de daños permanentes al equipo y se prolonga su vida útil. Además, la capacidad de generar notificaciones automáticas garantiza que los responsables estén informados en tiempo real, incluso si no están físicamente presentes. Este nivel de control aumenta la confiabilidad del sistema y minimiza las interrupciones no planificadas, contribuyendo a una mayor eficiencia operativa y menores costos de mantenimiento.
2. **Análisis de Datos y Machine Learning**
    
    Plataformas como Azure IoT o AWS IoT Analytics procesan datos históricos y en tiempo real, permitiendo a las empresas obtener información valiosa para mejorar sus operaciones. Estas herramientas ofrecen capacidades avanzadas de análisis que facilitan la identificación de tendencias, patrones y anomalías en grandes volúmenes de datos provenientes de dispositivos conectados.
    
    - Por ejemplo, con Azure IoT, los usuarios pueden configurar flujos de trabajo automatizados que reaccionan instantáneamente a cambios en los datos en tiempo real, como ajustar parámetros del sistema o activar alarmas cuando se detectan condiciones fuera de lo normal. Además, la plataforma permite el almacenamiento seguro y eficiente de datos históricos, lo que es crucial para realizar análisis predictivos y mejorar la toma de decisiones estratégicas.
        
        Por su parte, AWS IoT Analytics proporciona funciones robustas para limpiar, procesar y analizar datos sin necesidad de una infraestructura compleja. Los usuarios pueden crear pipelines personalizados para transformar los datos en información útil y generar informes detallados que ayuden a optimizar procesos y prever posibles problemas antes de que ocurran.
        
        En ambos casos, estas plataformas permiten integrar fácilmente diferentes tipos de sensores y dispositivos, facilitando la implementación de soluciones escalables y flexibles. Al aprovechar el poder del análisis de datos en tiempo real y en retrospectiva, las organizaciones pueden mejorar la eficiencia operativa, reducir costos y garantizar un rendimiento óptimo de sus sistemas.
        
3. **Alertas y Toma de Decisiones**
    
    El sistema recomienda acciones específicas basadas en el análisis de datos en tiempo real y los patrones históricos, facilitando una toma de decisiones más precisa y eficiente.
    
    Por ejemplo:
    
    - "Cambiar el cojinete de la línea 3 en las próximas 72 horas".
    
    Este tipo de recomendación se genera cuando los sensores detectan un aumento anómalo en la vibración o temperatura del cojinete, indicando un posible fallo inminente. El sistema no solo identifica el problema, sino que también sugiere una acción concreta y un plazo específico para su ejecución, lo que permite a los operadores planificar adecuadamente el mantenimiento preventivo.
    
    Además, el sistema puede proporcionar información adicional que respalde esta recomendación, como:
    
    - Historial de vibraciones y temperaturas registradas durante las últimas semanas.
    - Comparaciones con límites de tolerancia establecidos para el equipo.
    - Análisis predictivo que estima el tiempo restante antes de un fallo catastrófico.
    
    Esto asegura que los responsables tengan toda la información necesaria para tomar decisiones informadas y evitar interrupciones costosas. Por ejemplo, si el sistema advierte sobre un posible fallo en un cojinete, pero los datos históricos muestran que este tipo de anomalía ha sido falsa alarma en ocasiones anteriores, los operadores pueden optar por realizar inspecciones adicionales antes de proceder con el cambio.
    
    En otro caso, si el análisis predictivo indica que el cojinete fallará dentro de las próximas 48 horas, el sistema podría ajustar automáticamente la prioridad de la tarea, enviando alertas de mayor urgencia y reprogramando otras actividades para minimizar el impacto operativo.
    
    Al integrar estas recomendaciones con plataformas de gestión de mantenimiento (como CMMS), las empresas pueden automatizar la asignación de recursos, la programación de personal y la compra de repuestos, optimizando así todo el proceso de mantenimiento y garantizando una respuesta rápida y efectiva ante cualquier contingencia.
    
4. **Integración con CMMS/EAM**
    
    Herramientas como IBM Maximo automatizan órdenes de trabajo, optimizando la gestión de repuestos y recursos, lo que resulta en una operación más eficiente y confiable.
    
    Por ejemplo:
    
    - **Automatización de Órdenes de Trabajo:** Cuando el sistema de monitoreo detecta un problema crítico, como el fallo inminente del cojinete mencionado anteriormente, puede generar automáticamente una orden de trabajo en IBM Maximo. Esta orden incluye todos los detalles necesarios: descripción del problema, prioridad, ubicación exacta del equipo y las acciones recomendadas. Los técnicos reciben notificaciones instantáneas y pueden acceder a la información relevante desde cualquier dispositivo móvil, facilitando una respuesta rápida y precisa.
    - **Gestión de Repuestos:** IBM Maximo también gestiona el inventario de repuestos de manera eficiente. Al recibir una alerta sobre la necesidad de cambiar un cojinete, el sistema verifica automáticamente si el repuesto está disponible en el almacén. Si no hay stock suficiente, se genera automáticamente una solicitud de compra o se activa un pedido automático a un proveedor preaprobado. Esto minimiza los tiempos de espera y asegura que los materiales necesarios estén disponibles cuando se requieran, reduciendo significativamente el tiempo de inactividad.
    - **Optimización de Recursos:** La integración permite asignar tareas de mantenimiento basadas en la disponibilidad y habilidades del personal técnico. Por ejemplo, si varios trabajos de mantenimiento están programados simultáneamente, IBM Maximo puede reorganizarlos para maximizar la utilización de los recursos humanos y evitar conflictos. Además, el sistema puede sugerir horarios óptimos para realizar intervenciones, considerando factores como la carga de trabajo actual, las capacidades de los equipos y las restricciones operativas.
    - **Historial y Análisis Predictivo:** IBM Maximo mantiene un historial detallado de todas las actividades de mantenimiento realizadas, lo que permite realizar análisis predictivos precisos. Este historial es fundamental para identificar patrones recurrentes de fallos y desarrollar estrategias preventivas. Por ejemplo, si un tipo específico de cojinete ha fallado varias veces en diferentes máquinas, el sistema puede recomendar cambios en los procedimientos de instalación o incluso la sustitución por un modelo más robusto.
    - **Informes y KPIs:** Las herramientas de CMMS/EAM generan informes detallados y métricas clave (KPIs) que ayudan a evaluar el rendimiento del programa de mantenimiento. Estos informes permiten a los gerentes tomar decisiones estratégicas basadas en datos objetivos, como la frecuencia de fallos, el costo promedio de reparaciones y el tiempo medio de respuesta. Además, estos indicadores pueden ser compartidos con otros departamentos para mejorar la coordinación y alineación de objetivos.

---

### **5 Beneficios Clave del Mantenimiento Predictivo**

1. **Reducción de Costos**
    
    Menos reparaciones de emergencia y menos inventario innecesario de repuestos. Al prevenir fallos antes de que ocurran, las empresas pueden evitar costosos tiempos de inactividad y realizar mantenimientos preventivos programados. Además, la gestión optimizada de inventarios asegura que solo se mantengan los repuestos necesarios, reduciendo gastos asociados con el almacenamiento y la obsolescencia de piezas.
    
2. **Mayor Vida Útil de los Equipos**
    
    Detectar desgastes menores evita fallos catastróficos. El monitoreo continuo permite identificar problemas incipientes como pequeñas vibraciones o cambios en la temperatura, permitiendo intervenciones tempranas que prolongan la vida útil del equipo. Esto no solo ahorra costos de reemplazo, sino que también mejora la confiabilidad y rendimiento general de los activos.
    
3. **Seguridad Mejorada**
    
    Fallos imprevistos son la principal causa de accidentes; el PdM (Mantenimiento Predictivo) los reduce significativamente. Al anticiparse a problemas potenciales, las empresas pueden planificar intervenciones seguras y controladas, minimizando riesgos para los operarios. Esto contribuye a un entorno laboral más seguro y cumple con estándares regulatorios y normativos de seguridad industrial.
    
4. **Eficiencia Operativa**
    
    Planifica mantenimientos durante horas de menor producción, maximizando la productividad. Con datos precisos sobre el estado de los equipos, es posible programar tareas de mantenimiento en momentos estratégicos, como fuera de los horarios pico de producción. Esto reduce interrupciones en las operaciones diarias y permite una mejor utilización de recursos humanos y materiales.
    
5. **Sostenibilidad**
    
    Optimización del uso energético y reducción de residuos industriales. Al mantener los equipos en condiciones óptimas, se reduce el consumo de energía y se minimiza la generación de residuos derivados de fallos y reparaciones. El mantenimiento predictivo promueve prácticas sostenibles al extender la vida útil de los activos y reducir la huella ambiental de las operaciones industriales. Además, las empresas pueden cumplir con metas de responsabilidad social y ambiental, mejorando su reputación corporativa.
    

---

### **Superando los Desafíos del PdM**

Implementar un programa de Mantenimiento Predictivo (PdM) puede presentar varios desafíos, pero con las estrategias adecuadas, es posible superarlos y obtener todos los beneficios que esta metodología ofrece. A continuación, se detallan algunos de los principales obstáculos y sus soluciones:

1. **Inversión Inicial**
    - **Desafío:** El costo inicial para implementar sistemas de monitoreo avanzados y herramientas analíticas puede ser elevado.
    - **Solución:** Inicia con un piloto en equipos críticos. Comenzar con una implementación limitada permite evaluar el impacto y ajustar el enfoque antes de expandirlo a toda la planta. Además, el retorno de inversión (ROI) suele lograrse en un plazo de 6 a 18 meses, dependiendo de la magnitud del proyecto y la eficiencia operativa alcanzada.
2. **Calidad de Datos**
    - **Desafío:** La precisión de las recomendaciones predictivas depende directamente de la calidad de los datos recopilados por los sensores.
    - **Solución:** Garantiza que los sensores estén calibrados correctamente y realiza limpieza de datos constante. Implementa protocolos rigurosos de mantenimiento preventivo para los dispositivos de monitoreo y utiliza software avanzado para filtrar y corregir cualquier anomalía en los datos. Esto asegura que las decisiones tomadas basadas en análisis sean confiables y efectivas.
3. **Capacitación del Personal**
    - **Desafío:** Los técnicos y personal operativo deben estar capacitados para utilizar y mantener los nuevos sistemas de PdM.
    - **Solución:** Invierte en formar a tus técnicos o colabora con proveedores especializados. Ofrecer programas de capacitación continua garantiza que el equipo esté actualizado sobre las últimas tecnologías y prácticas. Además, trabajar con expertos externos puede acelerar la adopción de nuevas herramientas y proporcionar apoyo durante la transición inicial.
4. **Integración con Sistemas Existentes**
    - **Desafío:** Integrar los nuevos sistemas de PdM con plataformas CMMS/EAM existentes puede ser complejo y requerir tiempo.
    - **Solución:** Planifica cuidadosamente la integración desde el principio, utilizando APIs y herramientas de interoperabilidad que faciliten la conexión entre sistemas. Colabora con proveedores que ofrezcan soluciones modulares y escalables, lo que permite una implementación gradual y minimiza interrupciones en las operaciones diarias.
5. **Cambio Cultural**
    - **Desafío:** Adoptar un nuevo paradigma de mantenimiento puede enfrentar resistencia debido a prácticas tradicionales y hábitos establecidos.
    - **Solución:** Fomenta una cultura organizacional que valore la innovación y la mejora continua. Comunica claramente los beneficios del PdM a todos los niveles de la empresa, destacando cómo estos cambios mejorarán tanto la eficiencia operativa como la seguridad laboral. Proporciona ejemplos concretos de éxito y reconoce públicamente los logros obtenidos mediante el uso de estas nuevas tecnologías.

---

### **El Futuro: Mantenimiento Predictivo 4.0**

La evolución continua de la tecnología está transformando el Mantenimiento Predictivo (PdM) hacia un enfoque más avanzado y eficiente, conocido como PdM 4.0. A continuación se detallan tres tendencias clave que están redefiniendo el futuro del mantenimiento predictivo:

1. **IA Generativa**
    - **Descripción:** La inteligencia artificial generativa, representada por modelos como ChatGPT, tiene el potencial de revolucionar la forma en que se generan informes y análisis a partir de datos recopilados.
    - **Beneficios:**
        - **Automatización de Informes:** Estos modelos pueden generar automáticamente informes detallados basados en los datos de monitoreo, reduciendo significativamente el tiempo y esfuerzo humano requerido para analizar grandes volúmenes de información.
        - **Personalización:** Los informes pueden ser personalizados según las necesidades específicas de cada departamento o usuario, proporcionando recomendaciones precisas y acciones concretas.
        - **Acceso Facilitado:** Con interfaces de usuario amigables, incluso personal no técnico puede acceder y comprender fácilmente los resultados de los análisis predictivos.
2. **Gemelos Digitales**
    - **Descripción:** Los gemelos digitales son réplicas virtuales de equipos físicos que permiten simular fallos y condiciones operativas antes de que ocurran en la realidad.
    - **Beneficios:**
        - **Simulación Avanzada:** Al crear un modelo digital exacto de una máquina, es posible realizar simulaciones detalladas para predecir cómo responderá bajo diferentes escenarios y condiciones.
        - **Prevención Proactiva:** Detectar posibles fallos antes de que afecten al equipo físico permite planificar intervenciones preventivas de manera más precisa y efectiva.
        - **Optimización Continua:** Los gemelos digitales pueden integrarse con sistemas de análisis en tiempo real, ajustándose constantemente a nuevas condiciones y mejorando su capacidad de predicción a lo largo del tiempo.
3. **Edge Computing**
    - **Descripción:** Edge computing implica procesar datos directamente en el borde de la red, cerca de donde se generan, en lugar de depender exclusivamente de la nube.
    - **Beneficios:**
        - **Respuestas en Tiempo Real:** Al procesar datos localmente, las decisiones y alertas se pueden generar instantáneamente, sin la latencia asociada con la transmisión de datos a servidores remotos.
        - **Reducción de Ancho de Banda:** Al minimizar la cantidad de datos que deben enviarse a la nube, edge computing reduce la demanda de ancho de banda y mejora la eficiencia general del sistema.
        - **Mayor Resiliencia:** En entornos donde la conectividad a la nube puede ser intermitente o inestable, edge computing garantiza que las operaciones críticas puedan continuar sin interrupciones, gracias a su capacidad de funcionamiento autónomo.

### **El Momento de Actuar es Ahora**

El mantenimiento predictivo no es solo una tendencia; es una herramienta esencial para liderar en la era de la Industria 4.0. Al adoptarlo, tu fábrica no solo evita fallos costosos, sino que se posiciona como líder en eficiencia y competitividad.

**¿Estás listo para transformar tu operación?**

- Realiza una auditoría de equipos críticos.
- Consulta con proveedores de IoT industrial.
- Capacita a tu equipo en análisis de datos.

**Invierte en mantenimiento predictivo hoy y evita pérdidas mañana.**```

## `blogs/que-es-automatizacion-lineas-de-produccion.mdx`
```mdx
---
title: ¿Qué es la Automatización de Líneas de Producción?
date: 2025-01-03
description: La Automatización de Líneas de Producción se refiere a la integración de tecnologías avanzadas, como robótica, sistemas de control computarizados, software especializado y sensores, en los procesos de fabricación. El objetivo principal es reducir o eliminar la intervención humana en las tareas repetitivas, peligrosas o que requieren alta precisión dentro de una línea de producción.
image: /pexels-mikhail-nilov-9242913.jpg
---
La Automatización de Líneas de Producción se refiere a la integración de tecnologías avanzadas, como robótica, sistemas de control computarizados, software especializado y sensores, en los procesos de fabricación. El objetivo principal es reducir o eliminar la intervención humana en las tareas repetitivas, peligrosas o que requieren alta precisión dentro de una línea de producción.

## **Beneficios de la Automatización**

### **1. Incremento en la Capacidad de Producción**

Con sistemas automatizados, las empresas pueden operar a mayor velocidad y durante periodos prolongados, eliminando los tiempos muertos. Esto resulta en un **incremento significativo en la producción** , lo que permite satisfacer la demanda del mercado de manera más eficiente. La capacidad de producir sin interrupciones no solo mejora la respuesta ante picos de demanda, sino que también optimiza el uso de recursos disponibles, asegurando que cada minuto de operación contribuya directamente al rendimiento global.

Además, la automatización facilita una mejor gestión de inventarios, ya que se puede ajustar la producción en tiempo real según las necesidades específicas. Los sistemas avanzados permiten prever con precisión los niveles de stock y coordinar la fabricación para evitar tanto excesos como faltantes. Esta flexibilidad es especialmente valiosa en industrias donde la variabilidad en los pedidos es alta, como en la moda o la electrónica de consumo.

Otro aspecto clave es la **precisión en la ejecución de tareas repetitivas** . Las máquinas automatizadas pueden realizar operaciones complejas con una consistencia inigualable por los humanos, lo que reduce errores y desperdicios. Esto no solo aumenta la cantidad de productos terminados, sino que también garantiza que estos cumplan con los estándares de calidad establecidos desde el inicio del proceso productivo. En resumen, la automatización no solo incrementa la capacidad de producción, sino que también eleva el nivel general de eficiencia operativa.

### **2. Mejora en la Consistencia y Calidad del Producto**

Los sistemas automatizados reducen el margen de error humano, garantizando **productos uniformes y de alta calidad** . Esto es especialmente crucial en industrias donde los estándares de precisión son fundamentales. Por ejemplo, en la fabricación de componentes electrónicos o dispositivos médicos, incluso pequeñas variaciones pueden tener consecuencias significativas. La automatización asegura que cada unidad producida cumpla con las mismas especificaciones técnicas, minimizando defectos y rechazos.

Además, la **implementación de tecnologías avanzadas de inspección** permite detectar y corregir errores en tiempo real. Cámaras de alta resolución, sensores ultrasensibles y sistemas de análisis de datos pueden identificar imperfecciones casi invisibles a simple vista, lo que mejora aún más la calidad final del producto. Estas herramientas no solo reducen los desperdicios materiales, sino que también optimizan el uso de recursos, contribuyendo a una producción más sostenible.

Otro factor importante es la capacidad de **mantener la consistencia en condiciones variables** . En entornos industriales, factores como la temperatura, la humedad o el desgaste de maquinaria pueden influir en la calidad del producto. Los sistemas automatizados están diseñados para ajustarse automáticamente a estas fluctuaciones, asegurando que la producción se mantenga dentro de los parámetros deseados sin necesidad de intervención manual constante. Esto no solo mejora la calidad, sino que también reduce el riesgo de fallos costosos.

### **3. Reducción de Costos Operativos**

Aunque la inversión inicial puede ser considerable, la **automatización disminuye costos a largo plazo** al optimizar el uso de materiales, reducir desperdicios y minimizar la necesidad de mano de obra intensiva. Este enfoque no solo mejora la eficiencia operativa, sino que también genera ahorros significativos que impactan positivamente en la rentabilidad de las empresas.

Una de las principales ventajas es la **optimización del uso de materiales** . Los sistemas automatizados están diseñados para trabajar con precisión milimétrica, lo que reduce significativamente el desperdicio de materias primas. Por ejemplo, en la industria textil, los cortadores automáticos pueden ajustar patrones para maximizar el uso de tela, mientras que en la fabricación de metales, las máquinas pueden moldear piezas con mínimas tolerancias, evitando residuos innecesarios. Esta eficiencia en el uso de recursos no solo reduce costos directos, sino que también contribuye a una producción más sostenible y respetuosa con el medio ambiente.

Otro aspecto clave es la **reducción de desperdicios** durante el proceso productivo. Las líneas automatizadas incorporan mecanismos de inspección y control en tiempo real que detectan fallos o defectos casi instantáneamente. Esto permite corregir problemas antes de que se conviertan en grandes pérdidas, ya sea reajustando parámetros de máquina o deteniendo procesos específicos para evitar la generación de productos defectuosos. En comparación con los métodos manuales, donde los errores pueden pasar desapercibidos hasta fases avanzadas de producción, la automatización garantiza un flujo constante de productos conformes a los estándares de calidad.

### **4. Seguridad Laboral**

Las soluciones automatizadas pueden asumir **tareas peligrosas** , reduciendo el riesgo de accidentes y mejorando las condiciones laborales para los empleados. Este cambio no solo protege la salud y bienestar de los trabajadores, sino que también contribuye a un entorno de trabajo más seguro y productivo.

En muchas industrias, como la minería, la construcción y la metalurgia, existen tareas que involucran exposición a sustancias tóxicas, temperaturas extremas o maquinaria pesada, lo que incrementa significativamente el riesgo de lesiones. La automatización permite transferir estas responsabilidades a máquinas diseñadas específicamente para manejar dichos desafíos de manera segura. Por ejemplo, robots industriales pueden manipular materiales pesados o cortantes sin exponer a los humanos al peligro. Esto disminuye la probabilidad de accidentes relacionados con esfuerzos físicos excesivos o contacto con elementos peligrosos.

Además, la automatización facilita la **implementación de sistemas de monitoreo en tiempo real**. Sensores y cámaras instalados en áreas críticas pueden detectar situaciones potencialmente peligrosas antes de que ocurran, enviando alertas inmediatas a los operadores para tomar medidas preventivas. Estos sistemas no solo previenen incidentes, sino que también permiten realizar análisis post-evento para identificar causas raíz y evitar recurrencias. En sectores donde la seguridad es primordial, como la petroquímica o la energía nuclear, este nivel de vigilancia constante es esencial para proteger tanto a los empleados como a las instalaciones.

Otro beneficio importante es la **reducción del estrés físico y mental** de los trabajadores. Tareas repetitivas, prolongadas horas de pie y movimientos forzados pueden llevar a problemas de salud a largo plazo, como lesiones musculoesqueléticas o fatiga crónica. Al delegar estas actividades a sistemas automatizados, los empleados pueden centrarse en labores menos exigentes y más satisfactorias, mejorando su calidad de vida y reduciendo el ausentismo laboral debido a enfermedades ocupacionales. Esto no solo beneficia a los individuos, sino que también optimiza la productividad general de la empresa, ya que los trabajadores están más motivados y comprometidos cuando se sienten seguros y valorados.

La automatización también puede mejorar la seguridad en emergencias . En caso de incendios, fugas químicas o fallas mecánicas, los sistemas automatizados pueden responder rápidamente para mitigar los daños. Robots autónomos pueden ser desplegados para apagar fuegos, contener derrames o evacuar áreas peligrosas sin poner en riesgo vidas humanas. Además, las plataformas de control centralizado permiten coordinar acciones de emergencia de manera eficiente, garantizando una respuesta rápida y efectiva ante cualquier contingencia.

## **Desafíos y Consideraciones**

Aunque la automatización ofrece innumerables beneficios, también conlleva retos:

- **Inversión inicial** : El costo de implementar sistemas de automatización puede ser significativo, especialmente para las empresas más pequeñas. Esto incluye no solo el precio de los equipos y software, sino también los costos asociados con la instalación, configuración y capacitación del personal. Además, es importante considerar que la tecnología evoluciona rápidamente, lo que puede requerir actualizaciones frecuentes o reemplazos de hardware y software, generando gastos adicionales a largo plazo.
- **Adaptación al cambio** : La transición de procesos manuales a automatizados implica un cambio cultural dentro de la organización. El personal puede resistirse a estos cambios por miedo a perder sus empleos o por incertidumbre sobre cómo se adaptará su rol en el nuevo entorno. Para mitigar esto, es crucial implementar programas de capacitación y comunicación efectiva. La gestión del cambio debe ser un proceso continuo que involucre a todos los niveles de la empresa, desde la alta dirección hasta los empleados de línea.
- **Mantenimiento** : Los sistemas automatizados requieren un soporte técnico continuo para garantizar su funcionamiento óptimo. Esto incluye la realización de mantenimientos preventivos regulares, la resolución rápida de problemas técnicos y la actualización constante de los sistemas para mantenerse al día con las últimas tecnologías. La falta de mantenimiento adecuado puede resultar en tiempos de inactividad prolongados, lo que puede afectar negativamente la productividad y la calidad del producto. Además, es importante contar con personal calificado y especializado en el manejo y reparación de estos sistemas, lo que puede suponer un desafío adicional en términos de contratación y formación.
- **Seguridad y ciberseguridad** : Con la creciente interconexión de los sistemas automatizados, la seguridad se convierte en una preocupación crítica. Las vulnerabilidades en los sistemas pueden ser explotadas por ciberdelincuentes, lo que podría comprometer la integridad de los procesos y la confidencialidad de la información. Es fundamental implementar medidas de seguridad robustas, como firewalls, sistemas de detección de intrusiones y protocolos de autenticación segura, para proteger la infraestructura automatizada.
- **Flexibilidad y escalabilidad** : A medida que las necesidades de producción cambian, los sistemas de automatización deben ser capaces de adaptarse y escalar de manera eficiente. La rigidez de algunos sistemas automatizados puede limitar la capacidad de la empresa para responder rápidamente a cambios en la demanda o en los requisitos del mercado. Por lo tanto, es importante diseñar sistemas que sean modularizados y flexibles, permitiendo la integración de nuevas tecnologías y la modificación de procesos existentes sin interrupciones significativas.
- **Impacto laboral** : La automatización puede llevar a la reducción de puestos de trabajo en ciertas áreas, lo que puede generar tensiones laborales y sociales. Sin embargo, también puede crear nuevas oportunidades laborales en campos relacionados con la tecnología y el mantenimiento de los sistemas automatizados. Es importante que las empresas trabajen en conjunto con los sindicatos y las autoridades laborales para gestionar este impacto de manera responsable y ética.
- **Regulaciones y estándares** : La implementación de sistemas de automatización debe cumplir con las regulaciones y estándares locales e internacionales. Esto puede implicar certificaciones de seguridad, normas de calidad y requisitos ambientales. Las empresas deben estar al tanto de estos marcos regulatorios y asegurarse de que sus sistemas de automatización estén en conformidad, lo que puede añadir complejidad y costos adicionales al proceso de implementación.

---

## **Conclusión**

La automatización de líneas de producción no es simplemente una tendencia tecnológica, sino una transformación fundamental en la forma en que concebimos la manufactura. Hemos visto cómo la adopción estratégica de estas soluciones impulsa la capacidad de producción, eleva la calidad y consistencia de los productos, reduce los costos operativos y mejora la seguridad laboral, creando un entorno de trabajo más seguro y eficiente. Sin embargo, este camino hacia la automatización no está exento de desafíos. La inversión inicial, la adaptación al cambio, el mantenimiento continuo, la seguridad, la flexibilidad y el impacto laboral son aspectos cruciales que deben ser abordados con planificación y visión estratégica.

En última instancia, la automatización de líneas de producción representa una oportunidad para que las empresas manufactureras no solo sobrevivan, sino que prosperen en un mercado global cada vez más competitivo. Al abrazar la innovación y alinear la tecnología con sus objetivos estratégicos, las empresas pueden construir un futuro manufacturero más inteligente, eficiente y sostenible. Este es un viaje que requiere un compromiso continuo con la mejora y la adaptación, pero los beneficios potenciales son innegables. La clave está en abordar la automatización no como un fin en sí mismo, sino como una herramienta poderosa para alcanzar la excelencia operativa y crear valor a largo plazo.

Es crucial que las empresas no vean la automatización como un reemplazo total de la mano de obra, sino como una oportunidad para que los empleados se enfoquen en tareas más estratégicas y de valor añadido. La capacitación y el desarrollo de habilidades son fundamentales para asegurar que los trabajadores puedan adaptarse a los nuevos roles y aprovechar las oportunidades que la automatización ofrece.

En resumen, la automatización de líneas de producción es una inversión en el futuro, un paso audaz hacia una manufactura más inteligente y eficiente, donde la innovación y la adaptabilidad son los pilares del éxito.

¡Gracias por llegar hasta el final de este post! Espero que esta información haya sido valiosa y te inspire a explorar las posibilidades que la automatización ofrece para tu empresa.
```

## `blogs/que-es-la-automatizacion-industrial-y-como-optimiza-la-produccion.mdx`
```mdx
---
title: ¿Qué es la automatización industrial y cómo optimiza la producción?
date: 2025-02-18
description: La automatización industrial es el uso de tecnología, como sistemas de control, software y maquinaria, para realizar tareas que antes dependían de la mano de obra humana. Su objetivo principal es mejorar la productividad, la calidad y la seguridad en las operaciones de manufactura. La evolución de la automatización ha permitido que las empresas manufactureras optimicen sus procesos, reduzcan costos operativos y aumenten la precisión en la producción, eliminando variaciones humanas y mejorando la repetibilidad de tareas complejas.
image: /img/machine-1651014_640.jpg
---
Si estás aquí, seguramente te preguntas cómo la automatización industrial puede mejorar la producción de tu empresa. La respuesta es sencilla: optimiza los procesos, reduce costos y aumenta la eficiencia. No vamos a darle vueltas al asunto. Vamos directo al grano.

## ¿Qué es la automatización industrial?

La automatización industrial es el uso de tecnología, como sistemas de control, software y maquinaria, para realizar tareas que antes dependían de la mano de obra humana. Su objetivo principal es mejorar la productividad, la calidad y la seguridad en las operaciones de manufactura. La evolución de la automatización ha permitido que las empresas manufactureras optimicen sus procesos, reduzcan costos operativos y aumenten la precisión en la producción, eliminando variaciones humanas y mejorando la repetibilidad de tareas complejas.

Hablamos de robots industriales, sistemas SCADA (Supervisory Control And Data Acquisition), PLCs (Controladores Lógicos Programables), sensores inteligentes, actuadores y software avanzado de monitoreo y control. Estos sistemas permiten que las líneas de producción trabajen con mínima intervención humana, maximizando la eficiencia y reduciendo errores. La automatización puede aplicarse en distintos niveles, desde la programación de procesos simples hasta la integración de sistemas ciberfísicos que permiten la toma de decisiones en tiempo real basadas en análisis de datos.

Los PLCs son dispositivos fundamentales en la automatización industrial, encargados de recibir información de sensores, procesarla y ejecutar acciones específicas a través de actuadores. Son ampliamente utilizados en el control de líneas de ensamblaje, sistemas de transporte y procesos de fabricación que requieren alta precisión y velocidad. En combinación con sensores inteligentes, permiten detectar condiciones como temperatura, presión, humedad, vibración y proximidad, lo que posibilita ajustes automáticos en los procesos productivos para evitar desperdicios y mejorar la calidad del producto final.

Los sistemas SCADA juegan un papel crucial en la supervisión y control de procesos industriales, al proporcionar una interfaz en la que los operadores pueden monitorear en tiempo real las condiciones de producción y tomar decisiones basadas en datos históricos y tendencias. Estos sistemas recopilan información de distintos dispositivos y permiten la configuración de alarmas y reportes para la identificación de problemas antes de que afecten la producción. En sectores como la manufactura, la energía y el tratamiento de agua, los SCADA son esenciales para optimizar la eficiencia operativa y minimizar tiempos de inactividad.

Los robots industriales han revolucionado la manufactura al permitir tareas como ensamblaje, soldadura, pintura y manipulación de materiales con una precisión inalcanzable para los humanos. Su implementación no solo reduce costos laborales, sino que también mejora la seguridad al evitar la exposición de trabajadores a entornos peligrosos. La automatización robótica se ha diversificado con la introducción de robots colaborativos (cobots), que pueden trabajar junto a humanos en tareas de ensamblaje y manipulación sin necesidad de barreras de seguridad, permitiendo mayor flexibilidad en la producción.

El Internet Industrial de las Cosas (IIoT) ha impulsado una nueva era en la automatización, conectando máquinas y sensores a redes digitales que recopilan y analizan datos en tiempo real para optimizar el rendimiento y predecir fallas. La integración de machine learning y análisis predictivo en sistemas automatizados permite anticiparse a problemas de mantenimiento, reduciendo paros no programados y mejorando la planificación de la producción. Con el IIoT, las fábricas pueden implementar estrategias de mantenimiento basado en condición en lugar de mantenimiento reactivo, lo que se traduce en una mayor eficiencia y menor desperdicio de recursos.

Uno de los mayores beneficios de la automatización industrial es la consistencia en la calidad del producto, ya que los sistemas automatizados operan con tolerancias precisas y repiten procesos sin desviaciones. Esto es especialmente relevante en industrias como la farmacéutica, la automotriz y la electrónica, donde la precisión es crítica y cualquier variación puede generar defectos o incumplimiento de normativas. Además, la automatización permite escalar la producción sin un incremento proporcional en costos laborales, haciendo que las empresas sean más competitivas a nivel global.

A pesar de sus ventajas, la automatización también presenta desafíos como la inversión inicial en infraestructura, la necesidad de capacitación especializada y la integración de nuevas tecnologías en procesos existentes. Muchas empresas enfrentan barreras en la adopción de automatización debido a la complejidad de la migración de sistemas tradicionales a entornos digitalizados. Sin embargo, la tendencia hacia fábricas inteligentes y manufactura conectada está llevando a un mayor desarrollo de soluciones accesibles y escalables que facilitan la transición hacia una producción más automatizada y eficiente.

El futuro de la automatización industrial se encuentra en la integración de inteligencia artificial, sensores avanzados y sistemas de control autónomos que permiten una mayor capacidad de adaptación a cambios en la demanda y optimización en tiempo real. Con el avance de la robótica y la computación en la nube, las empresas podrán operar con mayor flexibilidad y resiliencia, asegurando una producción eficiente y sostenible. La automatización seguirá siendo un pilar fundamental en la transformación digital de la manufactura, permitiendo que las industrias alcancen nuevos niveles de productividad y competitividad en un mercado global en constante evolución.

## Beneficios directos de la automatización industrial en la producción

La automatización no es exclusiva de grandes empresas; cualquier negocio manufacturero puede aprovechar sus ventajas.

1. **Mayor productividad**: Operación continua sin pausas ni fatiga, manteniendo un ritmo constante y eficiente.
2. **Menores costos operativos**: Reducción de errores, desperdicio de material y costos laborales en tareas repetitivas.
3. **Calidad consistente**: Precisión milimétrica que minimiza la variabilidad y mejora la uniformidad del producto.
4. **Más seguridad**: Reducción de accidentes al delegar tareas peligrosas a sistemas automatizados.
5. **Flexibilidad productiva**: Adaptación rápida a cambios en diseño o demanda con simples ajustes en el software.

## ¿Cómo empezar con la automatización en tu empresa?

Si quieres implementar automatización en tu planta, sigue estos pasos clave:

1. **Evalúa tu proceso actual** identificando las áreas de mayor ineficiencia, los cuellos de botella y las tareas repetitivas. Antes de iniciar cualquier proceso de automatización, es fundamental comprender cómo opera actualmente tu empresa y qué aspectos pueden mejorarse.
    - Para lograrlo, examina **métricas clave** como:
        - **Tiempos de ciclo:** cuánto tiempo tarda cada proceso en completarse y dónde se generan demoras innecesarias.
        - **Desperdicio de materiales:** qué cantidad de insumos se desperdician en cada fase de producción y si existen formas de optimizar su uso.
        - **Costos operativos:** cuánto cuesta mantener la producción actual y cómo se compararía con un sistema automatizado.
        - **Calidad del producto:** qué nivel de defectos o inconsistencias se presentan y qué impacto tienen en la satisfacción del cliente.
    - Identifica **procesos manuales con alta intervención humana**, que pueden generar:
        - **Inconsistencias en la producción**, debido a variaciones en la ejecución.
        - **Errores humanos recurrentes**, que afectan la eficiencia y calidad del producto.
        - **Costos innecesarios en personal y tiempo de trabajo**, que podrían optimizarse mediante sistemas automáticos.
    - Observa **qué tareas pueden beneficiarse de automatización total o parcial**, considerando:
        - **Procesos repetitivos y de alta frecuencia**, como ensamblaje, empaquetado o inspección de calidad.
        - **Operaciones que requieran precisión extrema**, donde el margen de error humano sea inaceptable.
        - **Flujos de trabajo que generan cuellos de botella**, ralentizando la producción general.
2. **Define objetivos claros** para asegurarte de que la automatización tenga un impacto positivo en la empresa. No todas las soluciones tecnológicas son adecuadas para todos los negocios, por lo que es importante establecer prioridades y expectativas realistas.
    - Para ello, pregúntate **qué quieres lograr con la automatización**:
        - **Si el objetivo es reducir costos**, considera soluciones que:
            - Minimicen el desperdicio de materiales mediante un control automatizado del uso de insumos.
            - Optimizan el uso de energía con sensores inteligentes y sistemas de eficiencia energética.
            - Reduzcan la necesidad de personal en tareas repetitivas, reasignándolos a actividades de mayor valor.
        - **Si buscas aumentar la velocidad de producción**, podrías:
            - Implementar **líneas de ensamblaje automatizadas** para reducir tiempos de manufactura.
            - Instalar **robots de manipulación y transporte de materiales** para agilizar la logística interna.
            - Usar **PLCs y SCADA** para monitoreo en tiempo real y ajuste automático de los procesos.
        - **Si tu prioridad es mejorar la calidad del producto**, asegúrate de:
            - Incluir **sensores de inspección automatizados** para detectar defectos.
            - Implementar **sistemas de control de calidad predictivo**, basados en machine learning.
            - Integrar **procesos de manufactura flexible**, que ajusten parámetros en función de la demanda.
    - Establecer objetivos medibles es clave para evaluar el éxito de la automatización:
        - Define **KPIs (Indicadores Clave de Desempeño)** que reflejen el impacto de los cambios.
        - Monitorea constantemente el progreso y ajusta la estrategia según los resultados obtenidos.
3. **Consulta con expertos** para garantizar que la implementación sea efectiva y rentable. La automatización es un proceso complejo que requiere conocimientos especializados, por lo que recurrir a empresas como Alphaqueb Consulting te permitirá tomar decisiones más informadas.
    - **Los beneficios de trabajar con especialistas incluyen**:
        - Un **análisis de viabilidad** que determine qué procesos pueden automatizarse con éxito.
        - **Estudios de retorno de inversión (ROI)** para evaluar la rentabilidad de la automatización en distintas áreas.
        - **Pruebas piloto** que permitan medir el desempeño de la automatización antes de realizar una inversión a gran escala.
    - Además, los expertos pueden ayudarte a **prever y mitigar posibles obstáculos**, como:
        - Problemas de **integración con sistemas actuales** de la empresa.
        - Necesidades de **adaptación del personal** para operar los nuevos sistemas.
        - Riesgos de **interrupción en la producción** durante la transición tecnológica.
4. **Empieza de manera escalonada** en lugar de intentar automatizar toda la planta de una sola vez. Implementar cambios de forma progresiva permite minimizar riesgos y facilita la adaptación de la empresa a la nueva tecnología.
    - Para esto, es recomendable **comenzar con procesos de alto impacto**, como:
        - Aquellos que **generan mayor retorno de inversión**, optimizando costos y tiempos.
        - Procesos **con alta tasa de defectos**, donde la automatización pueda mejorar la calidad.
        - Áreas **que representan cuellos de botella**, afectando la eficiencia global de la empresa.
    - **La estrategia de implementación debe incluir**:
        - **Soluciones modulares**, que permitan una integración gradual sin interrumpir la producción.
        - **Evaluación continua**, recopilando datos sobre eficiencia, costos y calidad en cada fase.
        - **Ajustes y optimización**, asegurando que cada fase se implemente correctamente antes de expandir la automatización.
    - **Los beneficios de un enfoque escalonado incluyen**:
        - Menor **impacto financiero inicial**, permitiendo inversiones progresivas en tecnología.
        - **Mayor flexibilidad**, permitiendo adaptaciones según la evolución de la empresa.
        - Reducción de **resistencia al cambio**, ya que el equipo se adapta paulatinamente a la automatización.
5. **Capacita a tu personal** para garantizar que la automatización sea bien gestionada y maximice sus beneficios. Uno de los errores más comunes en la adopción de tecnología es no preparar adecuadamente al equipo humano para la transición.
    - **Para lograr una integración eficiente, es necesario**:
        - Proporcionar **capacitaciones técnicas** sobre los nuevos sistemas y herramientas.
        - Fomentar una **cultura de innovación y adaptación**, evitando la percepción de que la automatización reemplazará empleos.
        - Desarrollar **planes de reubicación de personal**, asignando nuevas funciones que aporten más valor a la empresa.
    - **Los trabajadores deben ser entrenados en**:
        - **Supervisión y monitoreo** de los procesos automatizados.
        - **Mantenimiento básico** de los nuevos sistemas, para evitar fallos y tiempos de inactividad.
        - **Uso de herramientas digitales** para el análisis de datos y la optimización de la producción.
    - **Un equipo capacitado permite**:
        - Reducir **fallas en la operación**, garantizando una integración exitosa de la automatización.
        - Maximizar el **aprovechamiento de la tecnología**, asegurando que se utilice al máximo su potencial.
        - Asegurar una **transición sin fricciones**, manteniendo la estabilidad operativa de la empresa.

## Conclusión

La automatización industrial no es el futuro, es el presente. Empresas que la implementan mejoran su competitividad, reducen costos y aumentan su eficiencia operativa.

Si te interesa optimizar tu producción con tecnología de punta, en **Alphaqueb Consulting** te ayudamos a diseñar e implementar soluciones de automatización adaptadas a tus necesidades. Escríbenos y llevemos tu empresa al siguiente nivel.```

## `blogs/que-es-la-manufactura-inteligente.mdx`
```mdx
---
title: ¿Qué es la Manufactura Inteligente?
date: 2025-01-08
description: La Manufactura Inteligente, también conocida como Industria 4.0 o manufactura conectada, es la integración de tecnologías digitales avanzadas como el Internet de las Cosas (IoT), Inteligencia Artificial (IA), Machine Learning, Big Data, Robótica Avanzada, Cloud Computing, y Realidad Aumentada/Virtual en los procesos de producción.
image: /img/pexels-soner-mazlum-182555-6890357.jpg
---

La Manufactura Inteligente, también conocida como Industria 4.0 o manufactura conectada, es la integración de tecnologías digitales avanzadas como el Internet de las Cosas (IoT), Inteligencia Artificial (IA), Machine Learning, Big Data, Robótica Avanzada, Cloud Computing, y Realidad Aumentada/Virtual en los procesos de producción. Se trata de un enfoque que busca la eficiencia, la flexibilidad y la personalización a través de la interconexión de máquinas, sistemas y personas. En esencia, es la digitalización de la manufactura para crear fábricas más inteligentes y ágiles. La Manufactura Inteligente no solo implica la automatización de procesos, sino también la optimización de la cadena de suministro, la mejora de la calidad del producto, la reducción de costos y la creación de nuevos modelos de negocio.

**Tecnologías Clave de la Manufactura Inteligente**

La Manufactura Inteligente es una evolución transformadora del sector industrial, impulsada por un conjunto de tecnologías interconectadas que operan en sinergia. Estas tecnologías no solo mejoran la eficiencia y la productividad, sino que también abren nuevas posibilidades en términos de innovación y sostenibilidad. A continuación, se presentan algunas de las tecnologías más importantes:

1. **Internet de las Cosas Industrial (IIoT)** :
    - **Descripción** : Sensores y dispositivos conectados que recopilan datos en tiempo real sobre el rendimiento de las máquinas, el estado de los materiales y las condiciones ambientales. Estos dispositivos pueden incluir sensores de temperatura, humedad, presión, movimiento, y más, que se integran con sistemas de análisis avanzados para proporcionar información detallada y en tiempo real.
    - **Beneficios** : Mejora la monitorización continua, lo que permite una gestión más eficiente de los recursos y procesos. La detección temprana de problemas reduce el tiempo de inactividad y los costos de mantenimiento. Además, facilita la toma de decisiones basada en datos, lo que puede optimizar la productividad y la eficiencia operativa. Las empresas pueden utilizar estos datos para predecir fallas antes de que ocurran, ajustar procesos en tiempo real y mejorar la calidad del producto final.
2. **Análisis de Big Data** :
    - **Descripción** : Capacidad de procesar y analizar grandes volúmenes de datos generados por los sensores y sistemas de producción. Esta tecnología utiliza algoritmos avanzados y herramientas de análisis para extraer insights valiosos de conjuntos de datos complejos y heterogéneos.
    - **Beneficios** : Identificación de patrones y tendencias que no son evidentes a simple vista, predicción de fallos antes de que ocurran, optimización de procesos para aumentar la eficiencia y reducir costos, y mejora de la calidad del producto final. El análisis de big data también permite una toma de decisiones más informada y estratégica, lo que puede dar lugar a innovaciones y ventajas competitivas significativas.
3. **Inteligencia Artificial (IA) y Machine Learning (ML)** :
    - **Descripción** : Algoritmos y modelos que permiten a las máquinas aprender, adaptarse y tomar decisiones de forma autónoma. Estas tecnologías utilizan datos históricos y actuales para entrenar modelos que pueden predecir resultados, identificar patrones y realizar tareas que normalmente requieren intervención humana.
    - **Beneficios** :  Automatización de tareas complejas y repetitivas, lo que libera a los trabajadores para enfocarse en actividades de mayor valor. Mejora de la precisión en la producción, reduciendo errores y variaciones en la calidad del producto. Optimización de recursos, ya que los modelos de IA y ML pueden ajustarse dinámicamente a las condiciones cambiantes, maximizando la eficiencia y minimizando los desperdicios. Además, estas tecnologías pueden mejorar la seguridad en entornos industriales al detectar y prevenir situaciones peligrosas antes de que ocurran.
4. **Robótica Avanzada** :
    - **Descripción** : Uso de robots colaborativos (cobots) y sistemas de automatización para realizar tareas repetitivas, peligrosas o de alta precisión. Estos robots están diseñados para trabajar junto a los humanos en entornos industriales, mejorando la eficiencia y la precisión de los procesos.
    - **Beneficios** : Liberación de los empleados para que se enfoquen en actividades más estratégicas y creativas, lo que aumenta su satisfacción laboral y productividad. Aumento de la productividad general de la línea de producción, ya que los robots pueden trabajar sin descanso y con un alto nivel de precisión. Mejora de la seguridad laboral, ya que los robots pueden asumir tareas peligrosas y reducir el riesgo de accidentes. Además, la robótica avanzada permite una mayor flexibilidad en la producción, ya que los cobots pueden ser reprogramados fácilmente para adaptarse a diferentes tareas y productos.
5. **Impresión 3D (Manufactura Aditiva)** :
    - **Descripción** : Tecnología que permite la producción de prototipos y piezas personalizadas de manera rápida y eficiente. Utiliza materiales como plásticos, metales y cerámicas, depositándolos capa por capa para crear objetos tridimensionales según diseños digitales.
    - **Beneficios** : Reducción de tiempos de entrega, ya que se eliminan los largos plazos de fabricación tradicional y se pueden producir piezas a demanda. Disminución de costos de producción, especialmente para lotes pequeños y piezas complejas, ya que no requiere moldes o herramientas costosas. Mayor flexibilidad en el diseño y fabricación, permitiendo la creación de geometrías complejas y personalizadas que serían difíciles o imposibles de producir con métodos convencionales. Además, la impresión 3D reduce los residuos de material, contribuyendo a una producción más sostenible.
6. **Gemelos Digitales** :
    - **Descripción** : Representaciones virtuales de productos, procesos o fábricas que simulan el comportamiento y el rendimiento en diferentes escenarios. Estos modelos digitales se alimentan con datos en tiempo real y históricos para ofrecer una visión precisa y detallada de cómo funcionan los sistemas físicos.
    - **Beneficios** : Optimización de diseños y procesos antes de la implementación física, lo que permite identificar y corregir problemas potenciales de manera más eficiente y económica. Reducción de riesgos y costos de prueba, ya que se pueden realizar simulaciones y pruebas virtuales sin necesidad de prototipos físicos costosos. Mejora de la eficiencia operativa, ya que los gemelos digitales permiten monitorear y ajustar el rendimiento de los sistemas en tiempo real, asegurando que funcionen de manera óptima. Además, facilitan la formación y capacitación del personal, ya que se pueden crear escenarios de entrenamiento realistas y seguros.
7. **Realidad Aumentada (RA) y Realidad Virtual (RV)** :
    - **Descripción** : Herramientas que superponen información digital en el entorno físico (RA) o crean entornos virtuales inmersivos (RV). La RA se utiliza para añadir datos, instrucciones y guías visuales a la vista del usuario en tiempo real, mientras que la RV crea entornos completos que pueden ser explorados y manipulados.
    - **Beneficios** : Mejora en la capacitación de empleados, ya que permite simulaciones realistas y prácticas sin riesgos ni costos asociados a la formación en entornos reales. Asistencia en el mantenimiento de maquinaria, proporcionando guías paso a paso y visualizaciones de componentes internos para facilitar la reparación y el diagnóstico. Supervisión remota, permitiendo a los expertos y técnicos asistir y colaborar en tiempo real desde cualquier ubicación. Resolución de problemas en tiempo real, ya que los usuarios pueden acceder a información relevante y procedimientos de solución de problemas de manera instantánea, reduciendo el tiempo de inactividad y mejorando la eficiencia operativa. Además, estas tecnologías pueden mejorar la seguridad al proporcionar advertencias y recomendaciones en situaciones peligrosas.
8. **Ciberseguridad** :
    - **Descripción** : Medidas y tecnologías diseñadas para proteger los sistemas y datos contra amenazas cibernéticas. Incluye firewalls, sistemas de detección y prevención de intrusos, cifrado de datos, autenticación multifactor y protocols de seguridad robustos.
    - **Beneficios** : Garantiza la integridad y confidencialidad de la información, protegiendo los datos sensibles y críticos de la empresa. Prevención de interrupciones y ataques, minimizando el riesgo de paralizaciones no planificadas y daños a la reputación. Mantenimiento de la continuidad de los procesos de producción, asegurando que las operaciones se desarrollen sin interrupciones y que los sistemas estén siempre disponibles. Además, la ciberseguridad ayuda a cumplir con regulaciones y normativas de protección de datos, evitando multas y sanciones legales.
9. **Cloud Computing** :
    - Infraestructura y servicios de computación en la nube que permiten el almacenamiento, procesamiento y acceso a datos y aplicaciones desde cualquier lugar. Esta tecnología ofrece recursos computacionales y de almacenamiento a través de Internet, eliminando la necesidad de infraestructuras físicas propias.
    - **Beneficios** : Escalabilidad, ya que las empresas pueden ajustar rápidamente los recursos según sus necesidades, sin incurrir en costos de hardware adicionales. Flexibilidad, permitiendo el acceso a datos y aplicaciones desde cualquier dispositivo con conexión a Internet, lo que facilita la colaboración y el trabajo remoto. Reducción de costos de infraestructura, ya que se elimina la necesidad de invertir en servidores y otros equipos físicos, así como en su mantenimiento. Facilidad de colaboración entre diferentes ubicaciones geográficas, mejorando la comunicación y la eficiencia en proyectos multinacionales o distribuidos. Además, el cloud computing ofrece una alta disponibilidad y redundancia, asegurando que los datos y aplicaciones estén siempre accesibles y seguros.
10. **Edge Computing** :
    - **Descripción** : Procesamiento de datos cerca de donde se generan, en lugar de enviar todo a la nube. Esta tecnología distribuye el procesamiento y el almacenamiento de datos a dispositivos periféricos o "edge" cercanos a la fuente de los datos, como sensores, dispositivos IoT y gateways.
    - **Beneficios** : Reducción de latencias, ya que los datos se procesan localmente, lo que minimiza los tiempos de respuesta y mejora la eficiencia en aplicaciones que requieren decisiones en tiempo real. Mejora en la velocidad de respuesta, permitiendo reacciones más rápidas a eventos críticos, lo que es especialmente importante en entornos industriales donde la rapidez puede ser crucial. Gestión eficiente de grandes volúmenes de datos en tiempo real, reduciendo la carga en las redes y en los centros de datos centrales, lo que optimiza el uso de recursos y reduce los costos de transmisión de datos. Además, el edge computing mejora la privacidad y la seguridad, ya que los datos sensibles pueden ser procesados y almacenados localmente, minimizando el riesgo de exposición en la nube.

**Cómo Implementar la Manufactura Inteligente:**

La transición a la Manufactura Inteligente es un proceso complejo que requiere planificación y estrategia. Aquí te dejamos algunos pasos clave para comenzar:

**Evaluación de la Situación Actual** : Analiza tus procesos actuales, identifica los puntos débiles y define tus objetivos. Revisa tus procesos, desde la cadena de suministro hasta la producción y el servicio al cliente. Detecta áreas de ineficiencia, altos costos, baja calidad o problemas de seguridad. Establece metas claras y medibles, como mejorar la eficiencia, reducir costos, aumentar la calidad o mejorar la sostenibilidad.

**Definición de una Estrategia Digital** : Crea una hoja de ruta que detalle las tecnologías que necesitas, los plazos y los recursos necesarios. Desarrolla un plan detallado que incluya tecnologías necesarias como IIoT, Big Data, IA, robótica, impresión 3D, gemelos digitales, RA/RV, etc. Establece hitos y fechas límite para cada etapa del proyecto. Asegúrate de que la estrategia digital esté alineada con los objetivos generales de la empresa.

**Inversión en Tecnología** : Elige las soluciones adecuadas que se ajusten a tus necesidades y presupuesto. Investiga y selecciona proveedores con buena reputación y soporte técnico. Solicita demostraciones y pruebas piloto para evaluar el rendimiento de las tecnologías. Asegúrate de tener la infraestructura necesaria (redes, servidores, cloud) y medidas de ciberseguridad robustas.

**Capacitación del Personal** : Asegúrate de que tu equipo esté preparado para trabajar con las nuevas tecnologías. Organiza programas de formación y capacitación. Ofrece formación continua para mantener a tu equipo actualizado con las últimas tendencias y mejoras. Fomenta una cultura de innovación y adaptabilidad dentro de la organización.

**Implementación Gradual** : Comienza con proyectos piloto en áreas específicas para probar y validar las tecnologías. Analiza los resultados de los proyectos piloto y ajusta la estrategia según sea necesario. Expande gradualmente la implementación a otras áreas de la empresa, aprendiendo y mejorando en cada etapa.

**Seguimiento y Mejora Continua** : Mide los resultados, ajusta tu estrategia y busca la mejora continua. Define métricas y KPIs (Indicadores Clave de Rendimiento) para medir el éxito de la implementación. Utiliza herramientas de monitoreo para seguir el rendimiento de los procesos y sistemas. Realiza revisiones periódicas para identificar áreas de mejora y ajustar la estrategia según los resultados obtenidos. Encuentra formas de recoger feedback del personal y usarlo para mejorar los procesos y la adopción de las tecnologías.

**Colaboración y Ecosistema** : Busca colaboraciones con partners tecnológicos, proveedores y otros actores del ecosistema para maximizar los beneficios. Únete a comunidades y redes de empresas que están implementando Manufactura Inteligente para compartir conocimientos y mejores prácticas.

**Gestión del Cambio** : Lidera el cambio con visión y comunicación clara, explicando a todos los stakeholders los beneficios y la importancia de la transición. Proporciona apoyo y soporte a los empleados durante el proceso de cambio, abordando preocupaciones y resistencias.

**Casos de Éxito**

Para inspirarte, aquí te presentamos algunos ejemplos de empresas que han adoptado la Manufactura Inteligente con éxito:

- **Siemens Amberg Factory (Alemania)**: La fábrica de Siemens en Amberg, Alemania, destaca como un ejemplo primordial de fábrica inteligente, que encarna los principios de la Industria 4.0. Empleando una sofisticada red de sensores y dispositivos IIoT, la fábrica logra un monitoreo y control en tiempo real sobre sus procesos de producción. Esto conduce a una tasa de calidad de producción del 99.99885% con una tasa de defectos de sólo el 0.00115%. La fábrica produce aproximadamente 12 millones de PLC SIMATIC anualmente, alrededor de uno por segundo, con aproximadamente el 75% de los procesos de producción automatizados. Los gemelos digitales facilitan la simulación y la optimización, lo que acelera el desarrollo y garantiza productos de alta calidad. A través del análisis avanzado de datos y la integración, la planta ha logrado un aumento de la producción ocho veces superior sin ampliar su huella física ni el número de empleados. Esta fábrica muestra los importantes beneficios de la digitalización, la automatización y la toma de decisiones basada en datos en la fabricación moderna y se centra en las prácticas sostenibles, lo que reduce significativamente su huella de carbono.
- **General Electric (GE) Brilliant Factory (India)**: General Electric (GE) ha transformado su enfoque de fabricación con su iniciativa 'Brilliant Factory', que incorpora tecnologías IIoT, big data y aprendizaje automático en todas sus instalaciones. En su planta de Pune, Maharashtra, India, GE aprovecha una variedad de sensores, análisis de datos y algoritmos de IA para predecir fallas en las máquinas y optimizar los procesos de producción. Este enfoque permite a la fábrica realizar un mantenimiento predictivo, minimizando el tiempo de inactividad y mejorando la programación. Aunque no se han declarado aumentos específicos en la producción, las fábricas de la red de GE han experimentado una mejora en la eficiencia y la sostenibilidad. Las fábricas 'Brilliant Factories' de GE son indicativas de un cambio hacia una fabricación altamente eficiente y basada en datos.
- **Bosch Rexroth (Alemania)** : Bosch Rexroth, con sede en Alemania, ha implementado la manufactura inteligente en sus plantas de producción, utilizando una combinación de robótica avanzada, gemelos digitales y análisis de big data. Esta integración permite una mayor flexibilidad en la producción, lo que facilita una respuesta rápida a los cambios en la demanda del mercado y la personalización de productos. Los robots de alta tecnología se utilizan en una variedad de tareas complejas, mientras que los gemelos digitales permiten la simulación y la optimización de procesos sin interrumpir la producción. Los análisis de big data proporcionan información valiosa para optimizar aún más las operaciones y realizar un mantenimiento predictivo. La automatización de tareas repetitivas no solo ha mejorado la seguridad laboral al reducir el riesgo de lesiones, sino que también ha optimizado los costos operativos y permite a los empleados centrarse en tareas más especializadas. Bosch Rexroth crea un ecosistema conectado donde el flujo de datos garantiza decisiones en tiempo real e inteligentes. Reconocida como líder en soluciones de la Industria 4.0, la empresa aprovecha su experiencia para impulsar mejoras en eficiencia, seguridad y rentabilidad.
- **Fanuc (Japón)**: Fanuc, un referente mundial en robótica industrial, ha implementado la manufactura inteligente en sus propias fábricas utilizando robots autónomos y sistemas del Internet Industrial de las Cosas (IIoT) para monitorear y controlar la producción en tiempo real. La empresa ha desarrollado la plataforma de software FIELD (Fanuc Intelligent Edge Link and Drive), que integra datos de diversas fuentes como robots, máquinas y sensores para optimizar los procesos de producción. FIELD también emplea inteligencia artificial y aprendizaje automático para analizar datos y optimizar procesos. Este enfoque ha llevado a una reducción considerable de los tiempos de inactividad mediante un mantenimiento predictivo y un aumento de la eficiencia de la producción. Fanuc también emplea capacidades de supervisión remota, permitiendo a los ingenieros solucionar problemas de forma remota, reduciendo aún más el tiempo de inactividad. El enfoque de fabricación inteligente de Fanuc no solo ha mejorado su propia producción, sino que también permite a la empresa ofrecer soluciones similares a sus clientes y optimizar sus plantas. Con varias fábricas en todo el mundo, Fanuc demuestra su compromiso con la innovación y la eficiencia.
- **BMW Group (Alemania)**: BMW Group, con sede en Alemania, ha integrado la manufactura inteligente en sus plantas de ensamblaje, empleando tecnologías avanzadas como la realidad aumentada (RA) y los gemelos digitales. Los técnicos utilizan gafas de RA para visualizar instrucciones detalladas en tiempo real, incluyendo especificaciones de torque, colocación de piezas y diagramas de cableado, lo cual facilita un trabajo más preciso y eficiente. Estos sistemas de RA no solo se aplican en el ensamblaje, sino también en el control de calidad, la logística y la formación. Además, BMW utiliza gemelos digitales para crear representaciones virtuales de fábricas, máquinas y productos, permitiendo la simulación y optimización de procesos en toda la cadena de producción. A través del análisis de datos recopilados tanto en la fábrica física como en los gemelos digitales, BMW puede predecir el mantenimiento y optimizar el flujo de producción. La adopción de estas tecnologías ha permitido a BMW aumentar la personalización de sus vehículos y promover una cultura basada en datos para la mejora continua. Esta misma estrategia de fabricación inteligente se implementa en todas sus instalaciones a nivel mundial. Este enfoque representa un avance importante hacia la fabricación flexible y altamente eficiente.

**Conclusión**

La Manufactura Inteligente representa una transformación profunda en la industria manufacturera, impulsada por la integración de tecnologías digitales avanzadas. No se trata solo de automatizar procesos, sino de crear un ecosistema de producción interconectado, flexible y ágil. La adopción de tecnologías como el IIoT, el análisis de Big Data, la IA, la robótica avanzada, la impresión 3D y los gemelos digitales, entre otras, permite a las empresas optimizar sus operaciones, reducir costos, mejorar la calidad, aumentar la flexibilidad y tomar decisiones más informadas. Los beneficios son claros: mayor eficiencia, menos desperdicio, mejor calidad de los productos, mayor seguridad en el trabajo, operaciones más sostenibles y una mayor capacidad de innovar. Sin embargo, la transición hacia la Manufactura Inteligente es un proceso complejo que requiere planificación estratégica, inversión en tecnología, capacitación del personal y un enfoque de mejora continua. Las empresas que adoptan esta nueva forma de fabricar no solo se aseguran su supervivencia en un entorno competitivo, sino que también se posicionan como líderes en la innovación y la sostenibilidad. En última instancia, la Manufactura Inteligente no es solo el futuro de la industria, sino también la clave para construir un sector más eficiente, sostenible y competitivo.```

## `blogs/que-es-sistema-scada.mdx`
```mdx
---
title: ¿Qué es un Sistema SCADA?
date: 2025-01-04
description: SCADA (Supervisión, Control y Adquisición de Datos) es, en esencia, un sistema que actúa como los ojos y las manos de una operación industrial. ¿Qué hace? Básicamente, recopila datos de procesos, los presenta en tiempo real y permite tomar decisiones rápidas y precisas.
image: /scada-m.jpg
---

SCADA (Supervisión, Control y Adquisición de Datos) es, en esencia, un sistema que actúa como los ojos y las manos de una operación industrial. ¿Qué hace? Básicamente, recopila datos de procesos, los presenta en tiempo real y permite tomar decisiones rápidas y precisas.

Imagina tener una ventana mágica que te muestra todo lo que ocurre en tu planta industrial, desde la temperatura de las máquinas hasta la velocidad de las líneas de producción. Eso es SCADA, pero en lugar de magia, es pura tecnología.

Un sistema SCADA está compuesto por:

1. **Sensores y Dispositivos de Campo:**
    - **Sensores:** Dispositivos que detectan y miden parámetros físicos y ambientales, como temperatura, presión, flujo, nivel de líquidos, humedad, etc. Ejemplos comunes incluyen termómetros, transmisores de presión, sensores de flujo y sensores de nivel.
    - **Actuadores:** Dispositivos que realizan acciones basadas en los datos recopilados. Pueden ser válvulas, motores, relés, inversores de frecuencia, entre otros.
    - **Dispositivos de Entrada/Salida (I/O):** Interfaz que conecta los sensores y actuadores con los controladores. Pueden ser analógicos o digitales.
2. **Controladores (PLC - Programable Logic Controllers):**
    - **Funciones:** Reciben y procesan los datos de los sensores, toman decisiones basadas en lógica preprogramada y envían comandos a los actuadores.
    - **Características:** Son dispositivos robustos y confiables, diseñados para operar en entornos industriales adversos. Pueden realizar tareas de control en tiempo real y son programables para adaptarse a diferentes aplicaciones.
    - **Comunicación:** Utilizan protocolos de comunicación estándar, como Modbus, Profibus, EtherNet/IP, para intercambiar datos con otros dispositivos y sistemas.
3. **Software SCADA:**
    - **Interfaz de Usuario (HMI - Human Machine Interface):** Proporciona una interfaz gráfica para que los operadores puedan visualizar y controlar el sistema. Muestra datos en tiempo real, gráficos, tablas, alarmas y otros indicadores.
    - **Supervisión y Control:** Permite a los operadores iniciar, detener, ajustar y supervisar procesos desde una ubicación centralizada. Incluye funciones de registro de eventos, historial de datos y generación de informes.
    - **Configuración y Programación:** Herramientas para configurar y programar los PLCs y otros dispositivos del sistema. Facilita la creación de lógica de control, secuencias de operación y parámetros de funcionamiento.
    - **Seguridad:** Implementa medidas de seguridad para proteger el sistema contra accesos no autorizados, ataques cibernéticos y fallos de hardware/software.
4. **Red de Comunicación:**
    - **Infraestructura:** Conecta todos los componentes del sistema SCADA, permitiendo la transferencia de datos entre sensores, controladores, y el software de supervisión. Puede ser cableada (Ethernet, RS-485) o inalámbrica (Wi-Fi, 4G/5G, radio frecuencia).
    - **Protocolos:** Utiliza protocolos estandarizados para garantizar la interoperabilidad y fiabilidad de la comunicación. Ejemplos incluyen TCP/IP, MQTT, DNP3, y OPC UA.
5. **Servidores y Estaciones de Trabajo:**
    - **Servidores:** Almacenan y procesan grandes cantidades de datos, ejecutan aplicaciones de software SCADA y gestionan la comunicación con los dispositivos de campo.
    - **Estaciones de Trabajo:** Computadoras o terminales donde los operadores interactúan con el sistema. Pueden estar ubicadas en sitios remotos o en centros de control centralizados.
6. **Sistemas de Alarma y Notificación:**
    - **Alarma:** Genera alertas cuando se detectan condiciones anormales o peligrosas, como niveles de temperatura fuera de rango, fallos de equipo, o intrusiones no autorizadas.
    - **Notificación:** Envía notificaciones a los operadores y personal de mantenimiento a través de diversos canales, como correo electrónico, SMS, o aplicaciones móviles.
7. **Archivos de Datos y Historial:**
    - **Registro de Datos:** Almacena registros históricos de datos de sensores, eventos de sistema, y acciones de control. Facilita el análisis de tendencias, diagnóstico de problemas y cumplimiento normativo.
    - **Backup y Recuperación:** Implementa procedimientos de respaldo y recuperación de datos para asegurar la continuidad del negocio y la integridad de la información.

---

## ¿Por qué debería interesarte SCADA?

La tecnología SCADA es más relevante que nunca en el mundo moderno, especialmente en industrias que requieren un alto nivel de precisión y control. Aquí te presentamos algunas razones claras de por qué deberías interesarte en SCADA:

### **1. Todo bajo control, en tiempo real**

¿Quieres saber al instante si algo está funcionando mal? Con SCADA, puedes monitorear tus operaciones minuto a minuto. Si algo se sale de rango, te avisa de inmediato. Esto te permite:

- **Reaccionar rápidamente:** Corrige problemas antes de que se conviertan en desastres.
- **Optimizar procesos:** Ajusta parámetros en tiempo real para maximizar eficiencia.
- **Mejorar la seguridad:** Identifica y responde a situaciones peligrosas de manera inmediata.

### **2. Eficiencia operativa**

SCADA te ayuda a optimizar tus procesos y reducir costos:

- **Automatización:** Reduce la necesidad de intervención manual, lo que minimiza errores humanos.
- **Análisis de datos:** Utiliza datos históricos para identificar patrones y tendencias, mejorando la planificación y el mantenimiento predictivo.
- **Optimización de recursos:** Asegura que los recursos se utilicen de manera eficiente, reduciendo desperdicio.

### **3. Mejora la toma de decisiones**

Con acceso a datos en tiempo real y análisis detallados, tomas decisiones más informadas:

- **Informes y estadísticas:** Genera informes detallados que te ayudan a evaluar el rendimiento y tomar decisiones estratégicas.
- **Simulaciones y escenarios:** Prueba diferentes escenarios sin afectar las operaciones reales, lo que facilita la planificación y la innovación.

### **4. Aumenta la productividad**

SCADA permite que tus equipos y procesos funcionen de manera más eficiente:

- **Monitoreo remoto:** Supervisa y controla operaciones desde cualquier lugar, lo que aumenta la flexibilidad.
- **Mantenimiento predictivo:** Detecta problemas antes de que ocurran, reduciendo tiempos de inactividad y costos de reparación.
- **Integración de sistemas:** Combina múltiples sistemas y dispositivos en una plataforma unificada, simplificando la gestión.

### **5. Cumplimiento normativo y seguridad**

En toda industria, el cumplimiento de normativas y estándares de seguridad es crucial:

- **Registros y auditorías:** Mantén registros detallados de todas las operaciones, facilitando auditorías y cumplimiento normativo.
- **Seguridad cibernética:** Implementa medidas de seguridad avanzadas para proteger tus sistemas contra amenazas externas y accesos no autorizados.

### **6. Escalabilidad y adaptabilidad**

SCADA es altamente escalable y adaptable:

- **Expansión fácil:** Puedes agregar nuevos dispositivos y sistemas a medida que tu operación crece.
- **Personalización:** Configura el sistema para satisfacer las necesidades específicas de tu industria y operaciones.

### **7. Mejora la experiencia del usuario**

La interfaz de usuario (HMI) de SCADA es intuitiva y fácil de usar:

- **Visualización clara:** Muestra datos y procesos de manera clara y visual, facilitando la comprensión y el control.
- **Interfaz amigable:** Diseñada para que los operadores puedan interactuar con el sistema de manera eficiente y sin complicaciones.

---

## ¿Cómo funciona SCADA en la práctica?

Para entender mejor cómo SCADA funciona en la vida real, vamos a explorar un ejemplo concreto: una planta de tratamiento de agua. Este ejemplo ilustrará cómo SCADA integra sus componentes y funciones para mejorar la eficiencia, la seguridad y la calidad del proceso.

### **Ejemplo: Planta de Tratamiento de Agua**

1. **Sensores y Dispositivos de Campo:**
    - **Sensores de Calidad del Agua:** Miden parámetros como pH, turbidez, niveles de cloro, bacterias, y otros contaminantes.
    - **Sensores de Flujo:** Monitorean la cantidad de agua que fluye a través de las tuberías.
    - **Niveles de Tanques:** Sensores que miden el nivel de agua en tanques de almacenamiento.
    - **Actuadores:** Válvulas que controlan el flujo de agua, bombas que impulsan el agua a través del sistema, y dosificadores que añaden químicos.
2. **Controladores (PLC - Programable Logic Controllers):**
    - **Procesamiento de Datos:** Los PLCs reciben datos de los sensores y procesan esta información para determinar si los valores están dentro de los rangos aceptables.
    - **Ejecución de Comandos:** Si se detecta un problema (por ejemplo, niveles de cloro demasiado altos), el PLC puede enviar comandos a los actuadores para ajustar la dosificación de químicos o cerrar válvulas.
3. **Software SCADA:**
    - **Interfaz de Usuario (HMI - Human Machine Interface):** Muestra en tiempo real los datos de los sensores y el estado de los actuadores en una pantalla fácil de usar. Los operadores pueden ver gráficos, tablas y alarmas.
    - **Supervisión y Control:** Permite a los operadores ajustar parámetros y controlar el sistema desde una ubicación centralizada. Por ejemplo, un operador puede abrir o cerrar una válvula, ajustar la velocidad de una bomba, o cambiar la dosificación de químicos.
    - **Alarmas y Notificaciones:** Si un parámetro se sale de los límites establecidos, el sistema genera una alarma. Las notificaciones pueden enviarse a los operadores a través de correo electrónico, SMS, o aplicaciones móviles.
4. **Red de Comunicación:**
    - **Infraestructura:** Conecta todos los dispositivos y sistemas, permitiendo la transferencia de datos entre los sensores, controladores, y el software de supervisión. Puede utilizar Ethernet, Wi-Fi, o redes inalámbricas.
    - **Protocolos:** Utiliza protocolos estandarizados como Modbus, Profibus, o EtherNet/IP para garantizar la interoperabilidad y la fiabilidad de la comunicación.
5. **Servidores y Estaciones de Trabajo:**
    - **Servidores:** Almacenan y procesan grandes cantidades de datos, ejecutan aplicaciones de software SCADA, y gestionan la comunicación con los dispositivos de campo.
    - **Estaciones de Trabajo:** Computadoras o terminales donde los operadores interactúan con el sistema. Pueden estar ubicadas en la planta o en centros de control remotos.
6. **Sistemas de Alarma y Notificación:**
    - **Alarma:** Genera alertas cuando se detectan condiciones anormales, como niveles de cloro fuera de rango, fallos de bombas, o intrusiones no autorizadas.
    - **Notificación:** Envía notificaciones a los operadores y personal de mantenimiento para que puedan responder rápidamente.
7. **Archivos de Datos y Historial:**
    - **Registro de Datos:** Almacena registros históricos de datos de sensores, eventos de sistema, y acciones de control. Facilita el análisis de tendencias, el diagnóstico de problemas, y el cumplimiento normativo.
    - **Backup y Recuperación:** Implementa procedimientos de respaldo y recuperación de datos para asegurar la continuidad del negocio y la integridad de la información.

### **Aplicación en Otras Industrias**

El mismo principio de SCADA se aplica a diversas industrias:

- **Energía:** Monitoreo y control de generadores, subestaciones, y redes eléctricas.
- **Manufactura:** Control de líneas de producción, monitoreo de máquinas, y gestión de inventarios.
- **Transporte:** Gestión de tráfico, monitoreo de trenes y aviones, y control de señales.
- **Agricultura:** Monitoreo de cultivos, control de riego, y gestión de ganado.
- **Salud:** Monitoreo de equipos médicos, control de temperatura en laboratorios, y gestión de inventarios de medicamentos.

---

## ¿Cómo se implementa un Sistema SCADA?

Implementar un sistema SCADA puede parecer una tarea compleja, pero al seguir un proceso estructurado, se vuelve manejable y efectivo. Aquí te presentamos las etapas principales para implementar un sistema SCADA:

### **1. Define tus Necesidades**

La primera y quizás la etapa más crítica en la implementación de un sistema SCADA es definir claramente tus necesidades. Esta etapa establece la base para todas las decisiones posteriores y asegura que el sistema que implementes cumpla con tus objetivos y requisitos. Aquí te detallo cómo abordar esta etapa:

### **Objetivos**

Empieza por definir claramente qué quieres lograr con el sistema SCADA. Algunos objetivos comunes incluyen:

- **Monitoreo y Control de Procesos:** Quieres tener una vista en tiempo real de tus operaciones y la capacidad de controlar los procesos de manera remota.
- **Optimización de Eficiencia:** Buscas reducir costos y mejorar la productividad mediante la automatización y la optimización de procesos.
- **Mejora de la Seguridad:** Necesitas asegurar que tus operaciones cumplan con estándares de seguridad y minimizar riesgos.
- **Cumplimiento Normativo:** Debes cumplir con regulaciones y estándares de la industria.
- **Mejora de la Calidad:** Quieres asegurar que tus productos o servicios cumplan con altos estándares de calidad.
- **Reducción de Tiempos de Inactividad:** Deseas minimizar las interrupciones y tiempos de inactividad mediante la detección y corrección rápida de problemas.

### **Procesos a Monitorear**

Identifica los procesos y parámetros específicos que necesitas monitorear. Esto dependerá de tu industria y operaciones. Algunos ejemplos incluyen:

- **Planta de Tratamiento de Agua:**
    - Niveles de cloro
    - pH del agua
    - Flujo de agua
    - Niveles de tanques de almacenamiento
    - Presión en tuberías
- **Industria de Energía:**
    - Generación de electricidad
    - Distribución de energía
    - Consumo de energía
    - Estado de subestaciones
- **Manufactura:**
    - Temperatura y presión en máquinas
    - Velocidad de líneas de producción
    - Niveles de inventario
    - Calidad de productos
- **Transporte:**
    - Velocidad y posición de vehículos
    - Estado de señales de tráfico
    - Uso de combustible
    - Mantenimiento predictivo

### **Requisitos Regulatorios**

Considera cualquier normativa o estándar de la industria que debas cumplir. Esto es crucial para evitar multas y problemas legales. Algunos ejemplos de requisitos regulatorios incluyen:

- **Normativas Ambientales:** Cumplir con estándares de emisiones y manejo de residuos.
- **Normativas de Seguridad:** Cumplir con regulaciones de seguridad laboral y protección de datos.
- **Normativas de Calidad:** Cumplir con estándares de calidad como ISO 9001.
- **Normativas de Salud:** Cumplir con regulaciones de salud pública, especialmente en industrias como el tratamiento de agua y alimentos.
- **Normativas de Energía:** Cumplir con regulaciones de eficiencia energética y seguridad en el manejo de electricidad.

### **Pasos para Definir tus Necesidades**

1. **Reuniones Iniciales:**
    - Organiza reuniones con stakeholders clave, incluyendo gerentes, operadores, y personal de mantenimiento.
    - Discute los objetivos y necesidades de cada departamento.
2. **Análisis de Procesos:**
    - Realiza un análisis detallado de tus procesos actuales.
    - Identifica puntos críticos y áreas de mejora.
3. **Listado de Parámetros:**
    - Crea una lista completa de los parámetros que necesitas monitorear y controlar.
    - Prioriza estos parámetros según su importancia y criticidad.
4. **Revisión de Normativas:**
    - Revisa las normativas y estándares de la industria relevantes.
    - Documenta los requisitos específicos que debes cumplir.
5. **Documentación:**
    - Documenta todos los objetivos, procesos a monitorear, y requisitos regulatorios.
    - Esta documentación servirá como guía para las etapas siguientes de la implementación.

### **Ejemplo Práctico: Planta de Tratamiento de Agua**

**Objetivos:**

- Monitorear y controlar en tiempo real los procesos de tratamiento de agua.
- Optimizar el uso de químicos para reducir costos.
- Mejorar la seguridad del agua consumible.
- Cumplir con normativas ambientales y de salud pública.

**Procesos a Monitorear:**

- Niveles de cloro
- pH del agua
- Flujo de agua
- Niveles de tanques de almacenamiento
- Presión en tuberías

**Requisitos Regulatorios:**

- Cumplir con la EPA (Environmental Protection Agency) en Estados Unidos o equivalentes en otros países.
- Cumplir con normativas locales de calidad del agua.
- Cumplir con regulaciones de seguridad laboral.

### **2. Diseña tu Sistema**

Una vez que has definido tus necesidades, el siguiente paso es diseñar el sistema SCADA. Este proceso implica seleccionar y configurar los componentes adecuados para asegurar que el sistema cumpla con tus objetivos y requisitos. Aquí te detallo cómo abordar cada aspecto del diseño:

### **Sensores y Dispositivos de Campo**

1. **Selección de Sensores:**
    - **Identifica los Parámetros:** Basándote en los procesos a monitorear, identifica los parámetros que necesitas medir (pH, temperatura, presión, flujo, nivel, etc.).
    - **Especificaciones Técnicas:** Considera la precisión, rango de medición, durabilidad, y condiciones ambientales en las que los sensores operarán.
    - **Compatibilidad:** Asegúrate de que los sensores sean compatibles con los controladores (PLCs) y el software SCADA que planeas usar.
    - **Ejemplos:**
        - **Termómetros:** Para medir temperatura.
        - **Transmisores de Presión:** Para medir presión.
        - **Sensores de Flujo:** Para medir el caudal de líquidos o gases.
        - **Sensores de Nivel:** Para medir el nivel de líquidos en tanques.
2. **Selección de Actuadores:**
    - **Tipos de Actuadores:** Identifica los tipos de actuadores necesarios (válvulas, bombas, relés, inversores de frecuencia, etc.).
    - **Control Preciso:** Asegúrate de que los actuadores puedan responder con precisión a los comandos del PLC.
    - **Durabilidad:** Considera la resistencia a condiciones adversas y la vida útil de los actuadores.
    - **Ejemplos:**
        - **Válvulas:** Para controlar el flujo de líquidos o gases.
        - **Bombas:** Para impulsar fluidos a través de tuberías.
        - **Relés:** Para controlar dispositivos eléctricos.

### **Controladores (PLC)**

1. **Selección de PLCs:**
    - **Compatibilidad:** Asegúrate de que los PLCs sean compatibles con los sensores y actuadores seleccionados.
    - **Capacidad de Procesamiento:** Considera la capacidad de procesamiento del PLC, especialmente si manejarás muchos dispositivos o procesos complejos.
    - **Robustez:** Elige PLCs que sean resistentes a condiciones industriales adversas (temperaturas extremas, vibraciones, polvo, etc.).
    - **Conectividad:** Verifica que los PLCs soporten los protocolos de comunicación necesarios (Modbus, Profibus, EtherNet/IP).
2. **Programación del PLC:**
    - **Lógica de Control:** Define la lógica de control que el PLC deberá seguir, incluyendo secuencias de operación, condiciones de alarma, y respuestas a eventos.
    - **Interfaz con Software SCADA:** Configura el PLC para comunicarse correctamente con el software SCADA.

### **Software SCADA**

1. **Selección de Software:**
    - **Funcionalidades:** Elige software que ofrezca las funcionalidades necesarias (HMI, supervisión, control, alarmas, historial de datos, informes, etc.).
    - **Interfaz de Usuario (HMI):** Asegúrate de que la interfaz sea intuitiva y fácil de usar para los operadores.
    - **Soporte Técnico:** Verifica que el proveedor de software ofrezca soporte técnico y actualizaciones regulares.
    - **Ejemplos de Software:**
        - **Wonderware:** Conocido por su robustez y amplia gama de funcionalidades.
        - **Ignition:** Popular por su facilidad de uso y escalabilidad.
        - **AVEVA Wonderware:** Ofrece soluciones integrales para la gestión de procesos.
2. **Configuración del Software:**
    - **Conexión con PLCs:** Configura el software para comunicarse con los PLCs y recopilar datos en tiempo real.
    - **Interfaz de Usuario:** Diseña pantallas HMI que muestren los datos de manera clara y visual.
    - **Alarmas y Notificaciones:** Configura alarmas y notificaciones para alertar a los operadores sobre condiciones críticas.
    - **Historial de Datos:** Configura el almacenamiento y análisis de datos históricos.

### **Red de Comunicación**

1. **Diseño de la Infraestructura de Red:**
    - **Tipo de Red:** Decide si usarás una red cableada (Ethernet, RS-485) o inalámbrica (Wi-Fi, 4G/5G, radio frecuencia).
    - **Topología de Red:** Elige la topología de red más adecuada (estrella, bus, anillo) basándote en la distribución geográfica de tus dispositivos.
    - **Seguridad:** Implementa medidas de seguridad para proteger la red contra accesos no autorizados y ataques cibernéticos.
2. **Selección de Protocolos de Comunicación:**
    - **Protocolos Estandarizados:** Elige protocolos de comunicación estandarizados para garantizar la interoperabilidad (Modbus, Profibus, EtherNet/IP, OPC UA).
    - **Velocidad y Fiabilidad:** Considera la velocidad y fiabilidad de los protocolos, especialmente en aplicaciones críticas donde la latencia es un factor importante.

### **Ejemplo Práctico: Planta de Tratamiento de Agua**

### **Sensores y Dispositivos de Campo:**

- **Sensores de pH:** Para medir el nivel de acidez del agua.
- **Sensores de Cloro:** Para medir la concentración de cloro.
- **Sensores de Flujo:** Para medir el caudal de agua.
- **Sensores de Nivel:** Para medir el nivel de agua en tanques de almacenamiento.
- **Válvulas:** Para controlar el flujo de agua.
- **Bombas:** Para impulsar el agua a través del sistema.

### **Controladores (PLC):**

- **PLC Robusto:** Elige un PLC que pueda resistir condiciones húmedas y corrosivas.
- **Capacidad de Procesamiento:** Asegúrate de que el PLC pueda manejar múltiples sensores y actuadores simultáneamente.
- **Protocolos de Comunicación:** Usa protocolos como Modbus para comunicarse con los sensores y actuadores.

### **Software SCADA:**

- **HMI Intuitivo:** Diseña pantallas HMI que muestren los niveles de pH, cloro, flujo, y nivel de agua en tiempo real.
- **Alarmas y Notificaciones:** Configura alarmas para alertar sobre niveles de cloro altos o bajas presiones.
- **Historial de Datos:** Almacena datos históricos para análisis y cumplimiento normativo.

### **Red de Comunicación:**

- **Infraestructura Cableada:** Usa Ethernet para conectar los PLCs con el servidor SCADA.
- **Topología de Red:** Implementa una topología de red en estrella para facilitar la expansión futura.
- **Seguridad:** Implementa firewalls y autenticación de usuarios para proteger la red.

### **3. Instálalo**

La etapa de instalación es crucial para asegurar que todos los componentes del sistema SCADA funcionen correctamente y de manera integrada. Esta etapa implica tanto la instalación física de los dispositivos como la configuración del software. Aquí te detallo los pasos para llevar a cabo esta etapa de manera eficiente y efectiva:

### **Instalación Física**

1. **Instalación de Sensores y Actuadores:**
    - **Ubicación Adecuada:** Coloca los sensores y actuadores en las ubicaciones especificadas durante el diseño. Asegúrate de que estén en posiciones que permitan una medición precisa y un control efectivo.
    - **Montaje y Fijación:** Utiliza soportes y fijaciones adecuados para asegurar que los dispositivos permanezcan firmes y resistentes a las condiciones ambientales.
    - **Conexiones Eléctricas:** Conecta los sensores y actuadores a la fuente de alimentación y a los PLCs. Asegúrate de que todas las conexiones sean seguras y libres de interferencias.
2. **Conexión de PLCs y Controladores:**
    - **Montaje de PLCs:** Instala los PLCs en gabinetes o racks adecuados, asegurándote de que tengan ventilación suficiente y estén protegidos de elementos ambientales.
    - **Conexiones de Entrada/Salida (I/O):** Conecta los sensores y actuadores a los módulos de entrada/salida (I/O) del PLC. Verifica que las conexiones sean correctas y seguras.
    - **Conexiones de Red:** Conecta los PLCs a la red de comunicación utilizando cables Ethernet, RS-485, o cualquier otro medio de conexión especificado.
3. **Configuración de la Red de Comunicación:**
    - **Infraestructura de Red:** Instala los switch, routers, y otros dispositivos de red necesarios. Asegúrate de que la red esté diseñada de acuerdo con la topología elegida (estrella, bus, anillo).
    - **Cableado:** Realiza el cableado de la red, asegurando que los cables sean de buena calidad y estén correctamente etiquetados.
    - **Configuración de IP:** Asigna direcciones IP a todos los dispositivos de red, incluyendo PLCs, servidores, y estaciones de trabajo.
    - **Pruebas de Conectividad:** Verifica la conectividad de todos los dispositivos utilizando ping u otras herramientas de diagnóstico.

### **Configuración del Software**

1. **Instalación del Software SCADA:**
    - **Servidores:** Instala el software SCADA en los servidores. Asegúrate de que el servidor tenga las especificaciones mínimas requeridas (procesador, memoria, almacenamiento).
    - **Estaciones de Trabajo:** Instala el software SCADA en las estaciones de trabajo donde los operadores interactuarán con el sistema.
    - **Licencias:** Verifica que tengas las licencias necesarias para el software SCADA y que estén correctamente instaladas y activadas.
2. **Configuración de PLCs:**
    - **Comunicación con el PLC:** Configura la comunicación entre el software SCADA y los PLCs. Asegúrate de que el software pueda leer y escribir datos en los PLCs.
    - **Programación del PLC:** Programa los PLCs con la lógica de control y las secuencias de operación definidas durante el diseño. Utiliza lenguajes de programación como Ladder Logic, Structured Text, o Function Block Diagram.
    - **Pruebas de Funcionamiento:** Verifica que los PLCs estén funcionando correctamente y que estén comunicándose con los sensores y actuadores.
3. **Configuración del Software SCADA:**
    - **Interfaz de Usuario (HMI):** Diseña y configura las pantallas HMI para mostrar los datos de los sensores y permitir el control de los actuadores. Asegúrate de que la interfaz sea intuitiva y fácil de usar.
    - **Alarmas y Notificaciones:** Configura las alarmas y notificaciones para alertar a los operadores sobre condiciones críticas. Define los umbrales y acciones a tomar cuando se activan las alarmas.
    - **Historial de Datos:** Configura el almacenamiento y análisis de datos históricos. Asegúrate de que el sistema pueda registrar y archivar datos de manera eficiente.
    - **Seguridad:** Implementa medidas de seguridad, como autenticación de usuarios, control de acceso, y cifrado de datos, para proteger el sistema contra accesos no autorizados y ataques cibernéticos.

### **Ejemplo Práctico: Planta de Tratamiento de Agua**

### **Instalación Física:**

- **Sensores:**
    - **pH:** Instala sensores de pH en puntos clave del proceso de tratamiento, como en la entrada y salida del sistema.
    - **Cloro:** Coloca sensores de cloro en la línea de dosificación y en puntos de control posteriores.
    - **Flujo:** Instala sensores de flujo en las tuberías principales para monitorear el caudal de agua.
    - **Nivel:** Coloca sensores de nivel en los tanques de almacenamiento.
- **Actuadores:**
    - **Válvulas:** Instala válvulas en las líneas de agua para controlar el flujo.
    - **Bombas:** Coloca bombas en puntos estratégicos para impulsar el agua a través del sistema.
- **PLCs:**
    - Monta los PLCs en gabinetes protegidos y conecta los sensores y actuadores a los módulos de I/O.
    - Conecta los PLCs a la red de comunicación utilizando Ethernet.
- **Red de Comunicación:**
    - Instala switch y routers en la planta.
    - Realiza el cableado de la red y asigna direcciones IP a todos los dispositivos.
    - Verifica la conectividad de la red.

### **Configuración del Software:**

- **Software SCADA:**
    - Instala el software SCADA en el servidor y en las estaciones de trabajo.
    - Configura la comunicación entre el software SCADA y los PLCs.
    - Diseña las pantallas HMI para mostrar los niveles de pH, cloro, flujo, y nivel de agua.
    - Configura alarmas para alertar sobre niveles de cloro altos o bajas presiones.
    - Configura el historial de datos para registrar y analizar los parámetros de proceso.
    - Implementa medidas de seguridad, como autenticación de usuarios y control de acceso.

### **4. Pruebas**

Antes de poner el sistema SCADA en operación, es crucial realizar pruebas exhaustivas para asegurarte de que todos los componentes funcionen correctamente y que el sistema cumpla con tus requisitos y expectativas. Las pruebas se dividen en tres etapas principales: pruebas unitarias, pruebas de integración y pruebas de seguridad. Aquí te detallo cada una de estas etapas:

### **Pruebas Unitarias**

1. **Verificación de Sensores:**
    - **Calibración:** Calibra los sensores para asegurarte de que midan los parámetros correctamente. Utiliza dispositivos de referencia conocidos para verificar la precisión.
    - **Funcionamiento:** Verifica que los sensores envíen datos de manera consistente y que no haya anomalías o errores en las lecturas.
    - **Conexiones:** Asegúrate de que los sensores estén correctamente conectados a los PLCs y que la comunicación sea estable.
2. **Verificación de Actuadores:**
    - **Respuesta a Comandos:** Envía comandos desde el PLC a los actuadores y verifica que respondan de manera adecuada. Por ejemplo, asegúrate de que las válvulas se abran y cierren correctamente, y que las bombas se activen y desactiven según lo esperado.
    - **Funcionamiento Continuo:** Realiza pruebas de funcionamiento continuo para asegurarte de que los actuadores no presenten fallas después de un período prolongado de uso.
    - **Conexiones:** Verifica que los actuadores estén correctamente conectados a los PLCs y que la comunicación sea estable.
3. **Verificación de PLCs:**
    - **Programación:** Verifica que la lógica de control programada en los PLCs funcione correctamente. Simula diferentes condiciones y verifica que el PLC responda de manera adecuada.
    - **Comunicación:** Asegúrate de que los PLCs se comuniquen correctamente con los sensores, actuadores, y el software SCADA.
    - **Diagnósticos:** Utiliza las herramientas de diagnóstico del PLC para identificar y corregir cualquier error o problema.
4. **Verificación del Software SCADA:**
    - **Interfaz de Usuario (HMI):** Verifica que las pantallas HMI muestren los datos de los sensores de manera clara y precisa. Asegúrate de que los operadores puedan interactuar con el sistema de manera intuitiva.
    - **Alarmas y Notificaciones:** Simula condiciones que desencadenen alarmas y verifica que las notificaciones se envíen correctamente (por correo electrónico, SMS, etc.).
    - **Historial de Datos:** Verifica que el sistema registre y almacene los datos históricos de manera correcta y que puedas acceder a ellos para análisis.

### **Pruebas de Integración**

1. **Funcionamiento del Sistema Completo:**
    - **Secuencias de Operación:** Simula diferentes secuencias de operación y verifica que todos los componentes funcionen juntos de manera coordinada. Por ejemplo, en una planta de tratamiento de agua, simula el proceso completo de tratamiento, desde la entrada de agua cruda hasta la salida de agua tratada.
    - **Respuestas a Eventos:** Simula eventos críticos (como un nivel de cloro alto) y verifica que el sistema responda de manera adecuada, activando alarmas y tomando las acciones necesarias.
    - **Interoperabilidad:** Verifica que todos los componentes (sensores, actuadores, PLCs, software SCADA) se comuniquen y funcionen juntos de manera fluida.
2. **Pruebas de Fallos y Recuperación:**
    - **Simulación de Fallos:** Simula fallos en diferentes componentes (sensores, actuadores, PLCs) y verifica que el sistema pueda detectarlos y responder de manera adecuada.
    - **Recuperación:** Verifica que el sistema pueda recuperarse de fallos y volver a un estado de operación normal de manera eficiente.
3. **Pruebas de Rendimiento:**
    - **Tiempo de Respuesta:** Verifica el tiempo de respuesta del sistema ante cambios en los parámetros de proceso. Asegúrate de que el sistema pueda reaccionar de manera rápida y precisa.
    - **Carga del Sistema:** Simula una carga alta en el sistema (por ejemplo, un aumento en el número de dispositivos conectados) y verifica que el sistema pueda manejarla sin problemas.

### **Pruebas de Seguridad**

1. **Accesos No Autorizados:**
    - **Autenticación de Usuarios:** Verifica que el sistema requiera autenticación de usuarios y que solo los usuarios autorizados puedan acceder a las funciones críticas.
    - **Control de Acceso:** Verifica que el sistema tenga un control de acceso robusto, permitiendo que diferentes usuarios tengan diferentes niveles de permisos.
2. **Ataques Cibernéticos:**
    - **Firewalls y Antivirus:** Verifica que el sistema tenga firewalls y antivirus configurados y actualizados para proteger contra ataques externos.
    - **Penetración:** Realiza pruebas de penetración para identificar vulnerabilidades y asegurarte de que el sistema esté protegido contra ataques cibernéticos.
    - **Auditorías de Seguridad:** Realiza auditorías de seguridad periódicas para identificar y corregir cualquier problema de seguridad.
3. **Integridad de Datos:**
    - **Cifrado:** Verifica que los datos sensibles estén cifrados durante el almacenamiento y la transmisión.
    - **Registro de Actividades:** Verifica que el sistema registre todas las actividades de los usuarios y que estos registros sean seguros y accesibles para auditorías.

### **Ejemplo Práctico: Planta de Tratamiento de Agua**

### **Pruebas Unitarias:**

- **Sensores:**
    - Calibra los sensores de pH y cloro.
    - Verifica que los sensores de flujo y nivel muestren lecturas precisas.
- **Actuadores:**
    - Verifica que las válvulas respondan a los comandos del PLC.
    - Verifica que las bombas se activen y desactiven correctamente.
- **PLCs:**
    - Verifica que la lógica de control programada en los PLCs funcione correctamente.
    - Asegúrate de que los PLCs se comuniquen correctamente con los sensores y actuadores.
- **Software SCADA:**
    - Verifica que las pantallas HMI muestren los datos de los sensores de manera clara.
    - Simula condiciones que desencadenen alarmas y verifica que las notificaciones se envíen correctamente.
    - Verifica que el sistema registre y almacene los datos históricos de manera correcta.

### **Pruebas de Integración:**

- **Secuencias de Operación:**
    - Simula el proceso completo de tratamiento de agua, desde la entrada de agua cruda hasta la salida de agua tratada.
    - Verifica que todos los componentes funcionen juntos de manera coordinada.
- **Respuestas a Eventos:**
    - Simula un nivel de cloro alto y verifica que el sistema active las alarmas y ajuste la dosificación de químicos.
    - Simula una baja presión en las tuberías y verifica que el sistema active las alarmas y tome las acciones necesarias.
- **Pruebas de Fallos y Recuperación:**
    - Simula un fallo en un sensor de pH y verifica que el sistema detecte el fallo y active las alarmas.
    - Verifica que el sistema pueda recuperarse de fallos y volver a un estado de operación normal.

### **Pruebas de Seguridad:**

- **Accesos No Autorizados:**
    - Verifica que el sistema requiera autenticación de usuarios y que solo los usuarios autorizados puedan acceder a las funciones críticas.
    - Verifica que el sistema tenga un control de acceso robusto.
- **Ataques Cibernéticos:**
    - Verifica que el sistema tenga firewalls y antivirus configurados y actualizados.
    - Realiza pruebas de penetración para identificar vulnerabilidades.
- **Integridad de Datos:**
    - Verifica que los datos sensibles estén cifrados durante el almacenamiento y la transmisión.
    - Verifica que el sistema registre todas las actividades de los usuarios y que estos registros sean seguros y accesibles para auditorías.

### **5. Capacitación**

Una vez que el sistema SCADA esté instalado y probado, es crucial capacitar a los operadores y personal técnico para asegurarte de que puedan usar el sistema de manera efectiva y segura. La capacitación debe cubrir tanto aspectos básicos como avanzados, dependiendo del rol de cada individuo. Aquí te detallo cómo abordar esta etapa:

### **Formación Básica**

1. **Uso de la Interfaz de Usuario (HMI):**
    - **Navegación:** Enséñales cómo navegar por las pantallas HMI, incluyendo cómo acceder a diferentes vistas y menús.
    - **Monitoreo de Procesos:** Explícales cómo leer y entender los datos mostrados en la interfaz, como niveles de pH, cloro, flujo, y nivel de agua.
    - **Control de Procesos:** Muéstrales cómo controlar los procesos, como abrir y cerrar válvulas, ajustar la velocidad de las bombas, y modificar la dosificación de químicos.
2. **Interpretación de Datos:**
    - **Lecturas de Sensores:** Enséñales a interpretar las lecturas de los sensores y a identificar valores fuera de los rangos normales.
    - **Tendencias y Análisis:** Explícales cómo analizar tendencias de datos y cómo utilizar esta información para optimizar los procesos.
3. **Respuesta a Alarmas:**
    - **Identificación de Alarmas:** Enséñales a identificar diferentes tipos de alarmas y a entender su significado.
    - **Procedimientos de Respuesta:** Proporciona instrucciones claras sobre cómo responder a cada tipo de alarma, incluyendo pasos de mitigación y notificación de personal técnico si es necesario.
4. **Operaciones Diarias:**
    - **Procedimientos Estándar:** Enséñales los procedimientos estándar para operaciones diarias, como arranque y apagado del sistema, y tareas de mantenimiento rutinario.
    - **Registros y Documentación:** Explícales cómo mantener registros de operaciones y cómo documentar incidentes y acciones tomadas.

### **Formación Avanzada**

1. **Programación de PLCs:**
    - **Lenguajes de Programación:** Entrena al personal técnico en lenguajes de programación de PLCs, como Ladder Logic, Structured Text, Function Block Diagram, y Sequential Function Chart.
    - **Desarrollo de Lógica de Control:** Enséñales a desarrollar y modificar la lógica de control para diferentes procesos y secuencias de operación.
    - **Diagnóstico y Depuración:** Proporciona habilidades para diagnosticar y depurar problemas en la programación de PLCs.
2. **Configuración de Software SCADA:**
    - **Configuración de HMI:** Enséñales a configurar y personalizar las pantallas HMI, incluyendo la creación de nuevas vistas y la modificación de existentes.
    - **Configuración de Alarmas y Notificaciones:** Explícales cómo configurar y gestionar alarmas y notificaciones, incluyendo la definición de umbrales y acciones.
    - **Historial de Datos y Informes:** Enséñales a configurar y gestionar el historial de datos, incluyendo la creación de informes y análisis de tendencias.
3. **Mantenimiento y Soporte:**
    - **Mantenimiento Preventivo:** Proporciona conocimientos sobre prácticas de mantenimiento preventivo para asegurar el buen funcionamiento a largo plazo del sistema.
    - **Soporte Técnico:** Enséñales a utilizar recursos de soporte técnico, como manuales de referencia, foros de usuarios, y asistencia del proveedor de software.
4. **Seguridad y Cumplimiento:**
    - **Medidas de Seguridad:** Entrena al personal en medidas de seguridad, incluyendo autenticación de usuarios, control de acceso, y protección contra ataques cibernéticos.
    - **Cumplimiento Normativo:** Enséñales a cumplir con regulaciones y normativas de la industria, incluyendo la documentación y reporting requeridos.

### **Ejemplo Práctico: Planta de Tratamiento de Agua**

### **Formación Básica:**

- **Uso de la Interfaz de Usuario (HMI):**
    - Enséñales a navegar por las pantallas HMI y a acceder a diferentes vistas de los procesos de tratamiento de agua.
    - Explícales cómo leer y entender los datos de pH, cloro, flujo, y nivel de agua.
    - Muéstrales cómo controlar las válvulas y bombas desde la interfaz.
- **Interpretación de Datos:**
    - Enséñales a interpretar las lecturas de los sensores y a identificar valores fuera de los rangos normales.
    - Explícales cómo analizar tendencias de datos para optimizar el proceso de tratamiento.
- **Respuesta a Alarmas:**
    - Enséñales a identificar diferentes tipos de alarmas, como niveles de cloro altos o bajas presiones.
    - Proporciona instrucciones claras sobre cómo responder a cada tipo de alarma, incluyendo pasos de mitigación y notificación de personal técnico.
- **Operaciones Diarias:**
    - Enséñales los procedimientos estándar para arranque y apagado del sistema y tareas de mantenimiento rutinario.
    - Explícales cómo mantener registros de operaciones y documentar incidentes.

### **Formación Avanzada:**

- **Programación de PLCs:**
    - Entrena al personal técnico en lenguajes de programación de PLCs, como Ladder Logic y Structured Text.
    - Enséñales a desarrollar y modificar la lógica de control para diferentes procesos de tratamiento de agua.
    - Proporciona habilidades para diagnosticar y depurar problemas en la programación de PLCs.
- **Configuración de Software SCADA:**
    - Enséñales a configurar y personalizar las pantallas HMI, incluyendo la creación de nuevas vistas y la modificación de existentes.
    - Explícales cómo configurar y gestionar alarmas y notificaciones, incluyendo la definición de umbrales y acciones.
    - Enséñales a configurar y gestionar el historial de datos, incluyendo la creación de informes y análisis de tendencias.
- **Mantenimiento y Soporte:**
    - Proporciona conocimientos sobre prácticas de mantenimiento preventivo para asegurar el buen funcionamiento a largo plazo del sistema.
    - Enséñales a utilizar recursos de soporte técnico, como manuales de referencia y asistencia del proveedor de software.
- **Seguridad y Cumplimiento:**
    - Entrena al personal en medidas de seguridad, incluyendo autenticación de usuarios, control de acceso, y protección contra ataques cibernéticos.
    - Enséñales a cumplir con regulaciones y normativas de la industria, incluyendo la documentación y reporting requeridos.

---

## Conclusión

SCADA emerge como un sistema vital que proporciona supervisión, control y adquisición de datos en tiempo real para procesos industriales. Su implementación, que abarca desde la selección de componentes hasta la capacitación del personal, optimiza operaciones, mejora la toma de decisiones y asegura el cumplimiento normativo, impactando positivamente en la eficiencia y productividad de diversas industrias. En esencia, SCADA no es simplemente una tecnología, sino una herramienta esencial para la transformación y el control operacional.

¿Listo para mirar tus procesos con otros ojos?```

## `blogs/que-es-un-gemelo-digital-en-la-manufactura.mdx`
```mdx
---
title: ¿Qué es un gemelo digital en la manufactura?
date: 2025-01-09
description: Un gemelo digital es una representación virtual precisa de un objeto, sistema o proceso físico. Esta réplica digital permite simular, analizar y monitorear el desempeño del elemento físico en tiempo real o mediante simulaciones.
image: /img/pexels-pavel-danilyuk-7190925.jpg
---
Un gemelo digital es una representación virtual precisa de un objeto, sistema o proceso físico. Esta réplica digital permite simular, analizar y monitorear el desempeño del elemento físico en tiempo real o mediante simulaciones.

En el contexto de la manufactura, un gemelo digital puede representar cualquier cosa, desde una máquina individual hasta una línea de producción completa. En el caso de las estaciones de trabajo, el gemelo digital modela las actividades, recursos y flujos de trabajo que ocurren en ese espacio.

### Componentes clave de un gemelo digital:

1. **Modelo físico:** Datos detallados que describen el diseño y las características de la estación de trabajo. Este modelo incluye información sobre la disposición de los equipos, la configuración de los sensores, los materiales utilizados, las dimensiones físicas, y los sistemas de control y automatización. También puede abarcar aspectos como la ergonomía, la seguridad y las condiciones ambientales, proporcionando una representación completa y precisa de la estación de trabajo en el mundo real.
2. **Datos en tiempo real:** Información capturada a través de sensores, sistemas IoT (Internet de las cosas) y otras fuentes. Estos datos incluyen mediciones de temperatura, humedad, presión, velocidad, posición, consumo de energía, y otros parámetros relevantes para el funcionamiento de la estación de trabajo. La captura y análisis de datos en tiempo real permite la monitorización continua, la detección temprana de problemas, la optimización de procesos y la toma de decisiones basada en información actualizada y precisa.
3. **Simulación y análisis:** Herramientas que permiten predecir comportamientos y optimizar el rendimiento. Estas herramientas utilizan los datos en tiempo real y el modelo físico para crear simulaciones detalladas de la estación de trabajo. A través de la simulación, se pueden probar diferentes escenarios y configuraciones sin afectar el proceso de producción real. Esto ayuda a identificar cuellos de botella, optimizar la eficiencia, predecir fallos y mejorar la calidad del producto. Además, el análisis de datos permite identificar patrones y tendencias que pueden ser utilizados para tomar decisiones informadas y estratégicas, mejorando continuamente el rendimiento de la estación de trabajo.

---

## ¿Cómo funciona un gemelo digital en estaciones de trabajo?

El gemelo digital en estaciones de trabajo utiliza una combinación de hardware, software y conectividad para reflejar fielmente lo que sucede en el entorno físico. A continuación, se describe cómo opera:

1. **Captura de datos:** Sensores y dispositivos IoT instalados en la estación recopilan datos sobre variables como temperatura, tiempo de ciclo, eficiencia de los operadores, consumo de energía, entre otros. Estos dispositivos están diseñados para monitorizar y registrar información en tiempo real, proporcionando una visión detallada del funcionamiento de la estación de trabajo. La captura de datos continua permite detectar anomalías, optimizar procesos, reducir tiempos de inactividad y mejorar la productividad overall. Los datos recopilados son fundamentales para el análisis posterior y la toma de decisiones basada en información precisa y actualizada.
2. **Procesamiento de información:** Estos datos se envían a una plataforma digital donde se integran y analizan. La plataforma recopila los datos de diversos sensores y dispositivos IoT, los organiza y los procesa para extraer insights valiosos. Este procesamiento puede incluir la limpieza de datos, la detección de anomalías, la correlación de diferentes variables y la generación de informes y dashboards en tiempo real. La integración de datos de múltiples fuentes permite una visión holística del funcionamiento de la estación de trabajo, facilitando la identificación de áreas de mejora, la optimización de procesos y la toma de decisiones basada en datos.
3. **Simulación:** Utilizando modelos matemáticos y herramientas de simulación, el gemelo digital prueba diferentes escenarios, como cambios en el diseño del proceso o en la disposición de los recursos. Estas simulaciones permiten prever el impacto de modificaciones antes de implementarlas en el mundo real, lo que reduce los riesgos y los costos asociados con los cambios. Por ejemplo, se pueden simular ajustes en la secuencia de operaciones, la asignación de personal, la configuración de máquinas o la introducción de nuevas tecnologías. La simulación también ayuda a identificar cuellos de botella, optimizar la eficiencia y mejorar la calidad del producto, asegurando que las decisiones tomadas sean las más efectivas y rentables posibles.
4. **Retroalimentación:** Los resultados de la simulación se devuelven al equipo físico, permitiendo ajustes en tiempo real o mejoras futuras basadas en los hallazgos. Esta retroalimentación continua asegura que la estación de trabajo opere de manera óptima, respondiendo rápidamente a cambios en las condiciones operativas o a problemas detectados. Los ajustes pueden incluir modificaciones en los parámetros de operación, la reconfiguración de procesos, la optimización de la asignación de recursos o la implementación de nuevas estrategias de mantenimiento. Esta dinámica de retroalimentación cerrada mejora la eficiencia, la productividad y la calidad, y permite una adaptación ágil a las necesidades cambiantes del entorno de producción.

---

## Aplicaciones de un gemelo digital en estaciones de trabajo

1. **Optimización del diseño:** Antes de implementar una nueva estación de trabajo, el gemelo digital puede simular diferentes configuraciones para identificar el diseño más eficiente. Estas simulaciones permiten evaluar diversas opciones, como la disposición de los equipos, la secuencia de operaciones, la asignación de recursos y la ergonomía del espacio. Al analizar el rendimiento de cada configuración, se pueden identificar las que maximizan la productividad, minimizan los costos y mejoran la calidad del producto. Esta optimización del diseño reduce el riesgo de errores y fallos en la implementación física, asegurando que la estación de trabajo funcione de manera óptima desde el principio. Además, facilita la toma de decisiones informadas y estratégicas, acelerando el proceso de desarrollo y despliegue de nuevas instalaciones.
2. **Mejora de la productividad:** Al analizar los datos operativos en tiempo real, el gemelo digital puede identificar cuellos de botella, tiempos muertos y oportunidades de mejora. Esta capacidad de análisis permite a los equipos de producción tomar medidas específicas para optimizar los procesos, reducir los tiempos de ciclo y aumentar la eficiencia general. Por ejemplo, si se detecta que una máquina está causando retrasos frecuentes, se pueden implementar ajustes de mantenimiento preventivo o mejoras en la configuración de la línea de producción. Además, al monitorear la eficiencia de los operadores y el uso de recursos, se pueden identificar prácticas más efectivas y realizar capacitaciones dirigidas para mejorar el desempeño. En resumen, el gemelo digital proporciona insights valiosos que permiten una gestión más precisa y estratégica, resultando en una productividad significativamente mejorada.
3. **Mantenimiento predictivo:** Con el monitoreo constante, es posible prever fallas en los equipos o herramientas de la estación y programar mantenimiento antes de que ocurra un problema. Los sensores y sistemas de monitoreo recopilan datos en tiempo real sobre el rendimiento y el estado de los equipos, como vibraciones, temperatura, presión y consumo de energía. Al analizar estos datos, el gemelo digital puede identificar patrones anormales que indiquen un posible fallo futuro. Esto permite a los equipos de mantenimiento intervenir proactivamente, realizando reparaciones o ajustes antes de que la falla cause interrupciones en la producción. El mantenimiento predictivo no solo reduce el tiempo de inactividad y los costos de reparación, sino que también prolonga la vida útil de los equipos y mejora la fiabilidad general de la estación de trabajo.
4. **Entrenamiento de operadores:** Los gemelos digitales pueden utilizarse para capacitar al personal mediante simulaciones interactivas, reduciendo riesgos y costos asociados al entrenamiento en el entorno real. Estas simulaciones permiten a los operadores practicar y familiarizarse con los procesos y equipos de la estación de trabajo en un entorno virtual seguro. Pueden aprender a manejar diferentes situaciones, resolver problemas y realizar tareas complejas sin el riesgo de dañar el equipo o interrumpir la producción. Además, las simulaciones pueden personalizarse para abordar escenarios específicos, como emergencias o procedimientos de mantenimiento, lo que mejora la preparación y la confianza del personal. El uso de gemelos digitales para el entrenamiento no solo aumenta la eficiencia y la seguridad, sino que también reduce los costos asociados con el entrenamiento en entornos físicos, ya que no requiere la utilización de recursos y tiempo valiosos en la línea de producción.
5. **Monitoreo de calidad:** Al comparar los datos en tiempo real con los estándares predefinidos, el gemelo digital ayuda a detectar y corregir problemas de calidad de manera temprana. Los sensores y dispositivos IoT recopilan datos sobre parámetros clave, como dimensiones, tolerancias, temperatura y humedad, y los envían a la plataforma digital. El gemelo digital compara estos datos con los estándares de calidad establecidos y genera alertas cuando se detectan desviaciones. Esto permite a los operadores y gerentes intervenir rápidamente para ajustar los procesos, corregir errores y evitar la producción de piezas defectuosas. Además, el monitoreo continuo de la calidad proporciona insights valiosos para la mejora continua, ayudando a identificar las raíces de los problemas y a implementar soluciones duraderas. En resumen, el monitoreo de calidad mediante gemelos digitales asegura que los productos cumplan con los estándares más altos, mejorando la satisfacción del cliente y la reputación de la empresa.

---

## Retos y consideraciones al implementar un gemelo digital

Aunque los beneficios son significativos, implementar un gemelo digital también conlleva ciertos retos:

1. **Costos Iniciales** : La implementación puede requerir una inversión considerable en tecnología y capacitación. Adquirir y configurar sensores, sistemas de monitoreo, plataformas de análisis y herramientas de simulación puede ser costoso. Además, la capacitación del personal para utilizar y mantener estas tecnologías también implica gastos adicionales.
2. **Integración** : Es necesario garantizar que los sistemas existentes puedan conectarse y compartir datos con el gemelo digital. La interoperabilidad entre diferentes sistemas y tecnologías puede ser un desafío, especialmente en entornos industriales donde pueden coexistir sistemas heredados y modernos. La estandarización de protocolos y formatos de datos es crucial para una integración exitosa.
3. **Gestión de Datos** : La gran cantidad de datos generados requiere herramientas avanzadas de análisis y almacenamiento. Manejar y procesar grandes volúmenes de datos en tiempo real exige infraestructuras robustas y soluciones de big data. Además, la seguridad y la privacidad de los datos deben ser prioridades, lo que implica implementar medidas de ciberseguridad sólidas.
4. **Cultura Organizacional** : Es fundamental que los empleados comprendan y adopten el uso de gemelos digitales para maximizar su valor. Cambiar a un enfoque basado en datos y tecnologías avanzadas puede enfrentar resistencia por parte del personal. La formación continua, la comunicación clara de los beneficios y el involucramiento de todos los niveles de la organización son esenciales para superar estas barreras y fomentar una cultura de innovación y mejora continua.

---

## Conclusión

El gemelo digital representa una poderosa herramienta para transformar las estaciones de trabajo en la manufactura. Al proporcionar un modelo virtual que replica el entorno físico, permite optimizar procesos, reducir costos, mejorar la calidad y aumentar la productividad.

Adoptar esta tecnología puede parecer un desafío, pero los beneficios a largo plazo hacen que valga la pena la inversión. Las empresas que implementen gemelos digitales estarán mejor posicionadas para enfrentar los retos del mercado y mantenerse competitivas en un entorno en constante evolución.```

## `blogs/scada-automatizacion-lineas-produccion-manufactura-inteligente.mdx`
```mdx
---
title: SCADA y la Automatización de Líneas de Producción - Claves para la Manufactura Inteligente
date: 2025-02-05
description: a manufactura ha cambiado drásticamente gracias a dos grandes protagonistas; la automatización y los sistemas **SCADA (Sistema de Control de Supervisión y Adquisición de Datos).** Estos avances han transformado por completo la manera en que se diseñan, producen y distribuyen bienes, marcando una nueva era para la industria. Las fábricas de hoy no son ni remotamente parecidas a las de hace tan solo unas décadas; estamos presenciando una evolución industrial sin precedentes.

image: /img/pexels-cottonbro-5474034.jpg
---
La manufactura ha cambiado drásticamente gracias a dos grandes protagonistas: la automatización y los sistemas **SCADA (Sistema de Control de Supervisión y Adquisición de Datos).** Estos avances han transformado por completo la manera en que se diseñan, producen y distribuyen bienes, marcando una nueva era para la industria. Las fábricas de hoy no son ni remotamente parecidas a las de hace tan solo unas décadas; estamos presenciando una evolución industrial sin precedentes.

Vivimos en una era donde todo va más rápido, todo es más preciso y eficiente. La velocidad de producción ya no depende únicamente de la capacidad humana, sino de máquinas inteligentes capaces de operar **24/7** con mínimos márgenes de error. Los sistemas SCADA permiten monitorear y controlar procesos industriales en tiempo real, optimizando el uso de recursos, reduciendo costos operativos y minimizando riesgos asociados a fallos humanos o técnicos. Esta tecnología permite recopilar datos críticos que, al ser analizados, ofrecen insights valiosos para mejorar la toma de decisiones estratégicas y ajustar procesos en función de patrones emergentes.

En este contexto, si una empresa quiere mantenerse competitiva en el mercado global, ya no puede darse el lujo de quedarse atrás. La competencia es feroz, y quienes lideran el sector son aquellos que adoptan rápidamente estas innovaciones tecnológicas. Las empresas tradicionales que aún basan sus operaciones en métodos manuales o sistemas obsoletos enfrentan un reto crucial: adaptarse o desaparecer.

La tecnología ya no es una opción; es una necesidad absoluta. Pero más allá de eso, es un motor de crecimiento y diferenciación. La integración de soluciones avanzadas como la automatización robótica, la inteligencia artificial, el Internet de las Cosas (IoT) y los sistemas SCADA está redefiniendo lo que significa ser productivo. No solo se trata de fabricar más rápido, sino también de hacerlo mejor: productos de mayor calidad, menor impacto ambiental y personalización a gran escala para satisfacer las demandas cada vez más específicas de los consumidores modernos.

Ahora bien, no todas las automatizaciones son iguales. Existen **tres tipos principales de automatización** , y cada uno tiene su propósito específico dependiendo de las necesidades de la empresa:

1. **Automatización fija** : Este tipo está diseñado para procesos repetitivos y de alto volumen. Piensa en una fábrica que produce millones de botellas de refresco al día. Aquí, la precisión y la velocidad son clave, y la automatización fija es perfecta porque está configurada para realizar una tarea específica una y otra vez sin desviarse. Es como tener un equipo de trabajo infalible que nunca se cansa.
    - **Características clave de la automatización fija** :
        - Utiliza máquinas especializadas diseñadas para una única función, como líneas de ensamblaje o sistemas de transporte automatizados.
        - Ideal para productos estandarizados donde no hay variación en el diseño ni en los materiales utilizados.
        - Ejemplo: En la industria automotriz, las líneas de soldadura robotizadas pueden trabajar 24/7 realizando miles de uniones idénticas con precisión milimétrica.
            - **Ventajas específicas** :
                - Alta eficiencia operativa debido a la eliminación de errores humanos.
                - Costos operativos bajos a largo plazo, ya que las máquinas funcionan continuamente sin fatiga.
                - Perfecta para sectores como la fabricación de productos de consumo masivo (refrescos, alimentos enlatados) o componentes industriales (tornillos, piezas metálicas).
            - **Desventajas específicas** :
                - Falta de flexibilidad; si el producto cambia, la infraestructura debe ser rediseñada o reemplazada, lo que implica costos significativos.
                - Inversión inicial alta debido a la necesidad de equipos especializados y la instalación de sistemas complejos.
2. **Automatización programable** : Si tu empresa trabaja con productos personalizados o en lotes pequeños, esta es tu mejor opción. La automatización programable permite ajustar ciertas configuraciones según las necesidades del momento. Por ejemplo, una fábrica que produce diferentes sabores de galletas puede cambiar rápidamente la línea de producción para adaptarse a un nuevo lote sin perder tiempo ni calidad.
    - **Cómo funciona la automatización programable** :
        - Utiliza sistemas controlados por software, como PLCs (Controladores Lógicos Programables), que permiten modificar los parámetros de operación según el producto que se esté fabricando.
        - Ejemplo: Una empresa textil que produce camisetas en varios colores y tallas puede ajustar las máquinas para teñir, cortar y coser diferentes modelos sin detener la producción por largos períodos.
            - **Ventajas específicas** :
                - Mayor versatilidad que la automatización fija, ya que permite cambios rápidos en la línea de producción.
                - Reduce tiempos de inactividad al minimizar los períodos de reconfiguración.
                - Ideal para industrias donde la demanda varía constantemente, como la electrónica, la manufactura ligera o incluso la producción de alimentos personalizados.
            - **Desventajas específicas** :
                - Requiere personal capacitado para realizar los ajustes necesarios, lo que puede aumentar los costos laborales.
                - Puede ser más lenta que la automatización fija en tareas específicas debido a los tiempos de reconfiguración.
                - Dependencia de sistemas de software, lo que puede generar problemas si hay fallos técnicos o actualizaciones pendientes.
3. **Automatización flexible** : Esta es la estrella del espectáculo cuando hablamos de versatilidad. La automatización flexible no solo adapta la producción según la demanda, sino que lo hace sin necesidad de detener las operaciones. Imagina una fábrica que fabrica tanto celulares como tablets en la misma línea de producción. Gracias a esta tecnología, puede alternar entre ambos productos sin interrupciones, garantizando que siempre se cumplan los plazos y las expectativas del cliente.
    - **Qué hace que la automatización flexible sea tan poderosa** :
        - Combina la velocidad de la automatización fija con la adaptabilidad de la programable, utilizando tecnologías avanzadas como robótica colaborativa (cobots), inteligencia artificial (IA) y sistemas de visión artificial.
        - Ejemplo: En una planta de ensamblaje de dispositivos electrónicos, los robots pueden ajustar automáticamente sus herramientas y configuraciones para ensamblar un celular en un momento y una tablet al siguiente.
            - **Tecnologías clave detrás de la automatización flexible** :
                - **Robótica colaborativa (cobots)** : Robots que trabajan junto a humanos, adaptándose a diferentes tareas sin riesgos para la seguridad.
                - **Inteligencia artificial (IA)** : Permite que los sistemas aprendan y se adapten automáticamente a nuevos productos o condiciones de producción.
                - **Sistemas de visión artificial** : Inspeccionan productos en tiempo real para detectar defectos o asegurar la calidad.
            - **Ventajas específicas** :
                - Máxima versatilidad para adaptarse a cambios en la demanda sin interrupciones significativas.
                - Reducción de costos asociados con la reconfiguración de líneas de producción.
                - Compatible con conceptos de Industria 4.0, como la fabricación inteligente y la conectividad en tiempo real.
            - **Desventajas específicas** :
                - Inversión inicial alta debido a la complejidad tecnológica y la necesidad de integrar múltiples sistemas avanzados.
                - Requiere una infraestructura digital robusta y personal altamente capacitado para manejar y mantener los sistemas.
                - Dependencia de la conectividad y los datos, lo que puede ser un riesgo si hay fallas en la red o ciberataques.

Pero aquí viene el verdadero cambio de juego: **SCADA** (Sistema de Control de Supervisión y Adquisición de Datos). ¿Qué es SCADA exactamente? Bueno, imagina un panel de control centralizado desde donde puedes ver, en tiempo real, absolutamente todo lo que ocurre en tu fábrica o instalación. Desde la temperatura de las máquinas hasta el estado de los sensores, pasando por los niveles de inventario, los tiempos de producción, e incluso las condiciones ambientales como humedad o presión. SCADA no solo monitorea estos parámetros; actúa como un asistente inteligente que te avisa si algo va mal, detecta anomalías antes de que se conviertan en problemas graves y te permite hacer ajustes sin necesidad de estar físicamente presente en la máquina.

¿Sabes qué significa eso? Menos desperdicios, menos errores humanos, menos paros innecesarios y, por supuesto, **mayor eficiencia operativa** . Con SCADA, tienes acceso a datos precisos y actualizados en cada momento, lo que te permite tomar decisiones informadas en tiempo real. Esto no solo optimiza tus procesos productivos, sino que también reduce costos significativamente, tanto en términos de recursos materiales como de horas hombre.

Además, SCADA no se limita a observar y reportar; es altamente interactivo. Puedes programarlo para que ejecute acciones automáticas cuando ciertos parámetros cruciales alcancen umbrales específicos. Por ejemplo, si una máquina supera una temperatura crítica, SCADA puede apagarla automáticamente para evitar daños mayores o iniciar protocolos de seguridad predefinidos. Esta capacidad predictiva y correctiva transforma radicalmente la forma en que gestionas tus operaciones industriales.

Imagina tener acceso remoto a este sistema desde cualquier lugar del mundo a través de una tableta o smartphone. Podrías supervisar y controlar tus operaciones mientras estás en una reunión, de vacaciones o incluso durmiendo, ya que el sistema puede configurarse para enviarte notificaciones instantáneas en caso de emergencias. Esto no solo aumenta la flexibilidad operativa, sino que también mejora la calidad del trabajo al reducir la carga sobre los equipos humanos.

Ahora, ¿dónde vemos todo esto en acción en nuestra vida cotidiana? Permíteme darte algunos ejemplos que seguro te resultarán familiares:

- **Industria de alimentos y bebidas** : En esta área, SCADA supervisa cada paso del proceso, desde la mezcla de ingredientes hasta el empaquetado final. Esto garantiza que cada producto cumpla con los más altos estándares de calidad y seguridad alimentaria. ¿Te has preguntado alguna vez cómo las empresas aseguran que cada botella de agua tenga exactamente la misma cantidad de líquido? SCADA tiene mucho que ver con eso.
    - **Cómo funciona SCADA en la industria alimentaria** :
        - Supervisa variables críticas como temperatura, presión, flujo de líquidos y niveles de llenado en tiempo real.
        - Ejemplo: En una planta embotelladora, SCADA controla la cantidad exacta de líquido que se vierte en cada botella, ajustando automáticamente las máquinas si detecta variaciones.
            - **Beneficios específicos** :
                - Garantiza consistencia en el producto final, lo que es crucial para la satisfacción del consumidor.
                - Reduce el desperdicio al minimizar errores en el llenado o el empaquetado.
                - Cumple con normativas estrictas de seguridad alimentaria, como las relacionadas con la higiene y la trazabilidad.
            - **Casos de uso comunes** :
                - En la producción de refrescos, SCADA regula la mezcla precisa de agua, azúcar y gas para mantener el sabor uniforme.
                - En la fabricación de alimentos congelados, monitorea las temperaturas de congelación para evitar la proliferación de bacterias.
- **Industria automotriz** : Aquí, la combinación de automatización y SCADA es simplemente impresionante. Desde soldar piezas metálicas hasta ensamblar motores y colocar neumáticos, todo se realiza con una precisión milimétrica. Y lo mejor de todo es que estos sistemas pueden detectar errores antes de que ocurran, evitando así retrasos costosos.
    - **Qué hace que SCADA sea tan valioso en la automoción** :
        - Controla procesos complejos como la soldadura por puntos, el pintado de carrocerías y el montaje de componentes electrónicos.
        - Ejemplo: En una línea de ensamblaje de vehículos, SCADA supervisa robots que soldan miles de uniones idénticas, asegurando que cada carrocería cumpla con las especificaciones exactas.
            - **Ventajas específicas** :
                - Detecta anomalías en tiempo real, como una soldadura defectuosa o un componente mal alineado, antes de que afecten al producto final.
                - Optimiza el uso de recursos, como energía y materiales, reduciendo costos operativos.
                - Mejora la eficiencia al coordinar múltiples etapas del proceso de fabricación simultáneamente.
            - **Casos de uso comunes** :
                - En la producción de motores, SCADA ajusta automáticamente la presión y la temperatura durante el mecanizado de piezas metálicas.
                - Durante el ensamblaje final, ayuda a verificar que todos los componentes (como luces, frenos y sistemas eléctricos) funcionen correctamente antes de que el vehículo salga de la fábrica.
- **Manufactura electrónica** : En este sector, la precisión es vital. Cada componente debe ser fabricado y ensamblado con la exactitud de un reloj suizo. SCADA y la automatización trabajan juntos para garantizar que cada circuito integrado, cada chip y cada pantalla táctil cumplan con las especificaciones requeridas.
    - **Por qué la precisión es crítica en la electrónica** :
        - Los componentes electrónicos son increíblemente pequeños y delicados, lo que significa que incluso un error mínimo puede hacer que un dispositivo completo sea inservible.
        - Ejemplo: En la fabricación de teléfonos inteligentes, SCADA supervisa robots que colocan chips microscópicos en placas de circuito impreso con una precisión de micras.
            - **Beneficios específicos** :
                - Asegura que cada componente cumpla con las especificaciones técnicas exactas, lo que es esencial para el rendimiento del dispositivo.
                - Reduce el margen de error humano en tareas que requieren una precisión extrema.
                - Facilita la producción en masa sin comprometer la calidad, lo que es crucial para cumplir con la alta demanda de dispositivos electrónicos.
            - **Casos de uso comunes** :
                - En la fabricación de pantallas táctiles, SCADA controla la aplicación de capas ultrafinas de material conductor para garantizar un rendimiento óptimo.
                - Durante la prueba de calidad, verifica que cada dispositivo pase por pruebas rigurosas, como resistencia al calor, vibración y durabilidad, antes de ser enviado al mercado.

Sin embargo, no todo es color de rosa. Implementar SCADA y automatización no es simplemente comprar un software, conectarlo y listo. Hay todo un proceso detrás que requiere planificación cuidadosa y ejecución estratégica. Primero, es fundamental **analizar qué procesos necesitan mejoras** . No todas las áreas de una fábrica se benefician de la misma manera con la automatización, así que identificar las oportunidades clave es el primer paso.

Luego, hay que elegir un software SCADA que se integre perfectamente con los sistemas existentes. Esto incluye conectar todo mediante sensores, PLCs (Controladores Lógicos Programables) y otros dispositivos que permitan recopilar datos en tiempo real. Además, no podemos olvidar la importancia de **capacitar al equipo humano** . Después de todo, la tecnología más avanzada no sirve de nada si las personas que la operan no saben cómo sacarle el máximo provecho.

Y aquí hay un punto crítico que no podemos pasar por alto: **la ciberseguridad** . Un sistema conectado sin protección adecuada es como dejar la puerta de tu casa abierta de par en par. Los hackers están siempre buscando vulnerabilidades, y un ataque cibernético podría detener toda la producción, causando pérdidas millonarias. Por eso, invertir en medidas de seguridad robustas es tan importante como implementar la tecnología misma.

Entonces, ¿vale la pena todo este esfuerzo? **¡Absolutamente sí!** El futuro de la manufactura está claramente orientado hacia lo que llamamos **"manufactura inteligente"** . La combinación de SCADA con tecnologías emergentes como el **Internet de las Cosas (IoT)** , la **inteligencia artificial (IA)** y el **machine learning** está revolucionando la industria. Estamos hablando de fábricas que utilizan algoritmos avanzados para predecir fallos antes de que ocurran, optimizar procesos sin intervención humana y adaptarse rápidamente a cambios en la demanda.

En resumen, si tu empresa aún no ha dado el salto hacia la automatización y SCADA, **es hora de considerarlo seriamente** . La tecnología está ahí para ayudarte a mejorar la eficiencia, reducir costos y tomar decisiones más informadas en tiempo real. No se trata solo de competir; se trata de liderar en un mundo donde la innovación es el motor principal del éxito.

Si necesitas ayuda para implementar SCADA y automatización en tu negocio, **¡aquí estamos para echarte la mano!** Juntos podemos transformar tu operación y llevarla al siguiente nivel. ¿Listo para dar el primer paso hacia el futuro?

```

## `blogs/transformacion-digital-manufactura.mdx`
```mdx
---
title: ¿Qué es la Transformación Digital en Manufactura?
date: 2025-01-05
description: La transformación digital es el proceso de integrar tecnologías digitales en todas las áreas de una organización para cambiar fundamentalmente la forma en que opera y ofrece valor a sus clientes. En el contexto de la manufactura, este proceso implica el uso de herramientas tecnológicas avanzadas.
image: /pexels-googledeepmind-25626520.jpg
---
La transformación digital es el proceso de integrar tecnologías digitales en todas las áreas de una organización para cambiar fundamentalmente la forma en que opera y ofrece valor a sus clientes. En el contexto de la manufactura, este proceso implica el uso de herramientas tecnológicas avanzadas, como:

- **Internet de las Cosas (IoT):** Sensores conectados que recopilan y analizan datos en tiempo real, permitiendo un monitoreo continuo y una respuesta inmediata a cambios en el entorno de producción.
- **Inteligencia Artificial (IA):** Algoritmos que optimizan procesos y predicen fallas, mejorando la eficiencia operativa y reduciendo costos mediante la anticipación y prevención de problemas antes de que ocurran.
- **Big Data y Analítica:** Manejo y análisis de grandes volúmenes de datos para tomar decisiones más informadas, lo que permite a las empresas identificar patrones y tendencias que pueden ser utilizados para mejorar la calidad del producto y la satisfacción del cliente.
- **Automatización y Robótica:** Sistemas que ejecutan tareas repetitivas con alta precisión, aumentando la productividad y liberando a los trabajadores para que se enfoquen en tareas más estratégicas y creativas.
- **Impresión 3D:** Fabricación de prototipos y piezas personalizadas de manera eficiente, acelerando el ciclo de desarrollo de productos y permitiendo una mayor flexibilidad en la producción a pequeña escala.

La transformación digital en la industria manufacturera no solo se limita a la implementación de tecnologías avanzadas en el área de producción, sino que también abarca la sistematización de procesos a través de la integración de sistemas empresariales clave, como:

- **Sistemas de Gestión de Relaciones con Clientes (CRM):** Estos sistemas centralizan y gestionan toda la información relacionada con los clientes, desde datos de contacto hasta historial de interacciones y preferencias. La integración de un CRM permite a las empresas mejorar la experiencia del cliente al ofrecer un servicio más personalizado y eficiente. Además, facilita la comunicación entre departamentos, asegurando que todas las áreas tengan acceso a la información necesaria para tomar decisiones informadas.
- **Sistemas de Planificación de Recursos Empresariales (ERP):** Un ERP integra todos los procesos de negocio, desde la gestión de inventario y finanzas hasta la cadena de suministro y recursos humanos, en un solo sistema. Esto mejora la visibilidad y control sobre todas las operaciones de la empresa, optimizando la eficiencia y reduciendo errores. La integración de un ERP con otros sistemas, como el CRM, permite una sincronización fluida de datos, asegurando que la información sea coherente y actualizada en todo momento.
- **Sistemas de Gestión de la Cadena de Suministro (SCM):** Estos sistemas optimizan la cadena de suministro, desde la adquisición de materias primas hasta la distribución final del producto. La integración de un SCM con un ERP y un CRM permite una coordinación más estrecha entre los proveedores, la producción y los clientes, reduciendo tiempos de entrega y costos logísticos.
- **Plataformas de Colaboración y Comunicación:** Herramientas como Microsoft Teams, Slack o Google Workspace facilitan la colaboración entre equipos, independientemente de su ubicación. Estas plataformas pueden integrarse con CRM y ERP para proporcionar un flujo de trabajo sin interrupciones, donde los empleados pueden acceder a la información necesaria y comunicarse de manera efectiva.
- **Herramientas de Gestión de Proyectos (PM):** Sistemas como Asana, Trello o Jira ayudan a gestionar proyectos de manera más eficiente, permitiendo un seguimiento detallado de tareas, plazos y recursos. La integración de estas herramientas con los sistemas CRM y ERP asegura que los proyectos estén alineados con los objetivos de la empresa y que los recursos se utilicen de manera óptima.

---

## ¿Por qué es Importante la Transformación Digital en Manufactura?

1. **Mejora de la Eficiencia Operativa:**
    
    La automatización y el Internet de las Cosas (IoT) son pilares fundamentales en la transformación digital de la manufactura, permitiendo una monitorización y optimización de los procesos en tiempo real. Estas tecnologías contribuyen significativamente a la reducción de tiempos de inactividad y desperdicios, lo que se traduce en una mayor eficiencia operativa.
    
    - **Monitoreo en Tiempo Real:**
    Sensores y dispositivos conectados a través del IoT recopilan datos continuamente sobre el estado de las máquinas, el rendimiento de los procesos y las condiciones ambientales. Esta información se transmite en tiempo real a plataformas de análisis, donde se procesa y visualiza. Los operadores y gerentes pueden acceder a dashboards y paneles de control que muestran métricas clave, como el estado de las máquinas, los niveles de producción y las alertas de mantenimiento. Esto permite una respuesta inmediata a cualquier anomalía, evitando paradas no programadas y minimizando el tiempo de inactividad.
    - **Optimización de Procesos:**
    Los datos recopilados por los sensores se analizan usando algoritmos avanzados y técnicas de machine learning. Estos análisis identifican patrones y tendencias que pueden ser utilizados para optimizar los procesos. Por ejemplo, se pueden ajustar los parámetros de las máquinas para maximizar la eficiencia energética, reducir el consumo de materiales y mejorar la calidad del producto. La optimización continua de los procesos no solo aumenta la productividad, sino que también reduce los costos operativos.
    - **Reducción de Desperdicios:**
    La monitorización en tiempo real y la optimización de procesos ayudan a identificar y eliminar fuentes de desperdicio. Por ejemplo, se pueden detectar y corregir rápidamente variaciones en la calidad del material de entrada, reduciendo el número de productos defectuosos. Además, la automatización de tareas repetitivas y de bajo valor añadido libera a los trabajadores para que se enfoquen en actividades más estratégicas y creativas, lo que aumenta la eficiencia general de la planta.
    - **Mantenimiento Predictivo:**
    El análisis de datos en tiempo real permite implementar estrategias de mantenimiento predictivo. Los algoritmos de IA pueden predecir cuándo una máquina es probable que falle basándose en su historial de funcionamiento y en los datos de sensores. Esto permite realizar mantenimientos preventivos antes de que ocurran fallas, reduciendo los tiempos de inactividad y prolongando la vida útil de los equipos.
2. **Reducción de Costos:**
    
    La tecnología desempeña un papel crucial en la identificación de áreas de ineficiencia y la aplicación de soluciones precisas, lo que resulta en una disminución significativa de los costos operativos y de producción. Aquí se detallan algunas de las formas en que esto se logra:
    
    - **Identificación de Áreas de Ineficiencia:**
    Las tecnologías como el Internet de las Cosas (IoT), la Inteligencia Artificial (IA) y el Big Data permiten recopilar y analizar grandes volúmenes de datos en tiempo real. Estos datos proporcionan una visión detallada de los procesos de producción, desde el rendimiento de las máquinas hasta el uso de recursos. Al analizar estos datos, las empresas pueden identificar rápidamente áreas de ineficiencia, como tiempos muertos, desperdicio de materiales y fallos en el equipo.
    - **Optimización de Procesos:**
    Una vez identificadas las áreas de ineficiencia, la tecnología permite aplicar soluciones precisas para optimizar los procesos. Por ejemplo:
        - **Automatización:** La automatización de tareas repetitivas y de bajo valor añadido reduce la necesidad de mano de obra intensiva y minimiza errores humanos. Esto no solo reduce los costos laborales, sino que también aumenta la precisión y la velocidad de los procesos.
        - **Ajuste de Parámetros:** Los algoritmos de IA pueden ajustar automáticamente los parámetros de las máquinas para maximizar la eficiencia y la calidad del producto. Esto puede incluir la optimización del consumo de energía, la reducción del uso de materiales y la mejora de la velocidad de producción.
        - **Gestión de Inventarios:** Sistemas de gestión de inventarios basados en tecnologías de Big Data y IA pueden predecir con mayor precisión las necesidades de materiales, reduciendo el exceso de inventario y los costos de almacenamiento.
    - **Mantenimiento Predictivo:**
    La implementación de mantenimiento predictivo, basado en el análisis de datos en tiempo real, permite prever y prevenir fallas antes de que ocurran. Esto reduce los costos asociados con reparaciones urgentes y paradas no programadas, prolongando la vida útil de los equipos y manteniendo un rendimiento óptimo.
    - **Eficiencia Energética:**
    La tecnología también contribuye a la reducción de costos energéticos. Sistemas de monitorización y control de energía pueden identificar y optimizar el consumo de electricidad, gas y otros recursos. Por ejemplo, sensores pueden detectar cuando las máquinas están consumiendo más energía de la necesaria y ajustar su funcionamiento para minimizar el desperdicio.
    - **Mejora de la Calidad:**
    La tecnología ayuda a mejorar la calidad del producto, reduciendo el número de defectos y rechazos. Sensores y sistemas de control de calidad en tiempo real pueden detectar y corregir problemas de fabricación antes de que afecten a la producción en masa. Esto no solo reduce los costos asociados con la rework y los rechazos, sino que también mejora la satisfacción del cliente y la reputación de la marca.
3. **Flexibilidad y Personalización:**
    
    Los sistemas digitales revolucionan la forma en que las empresas manufactureras se adaptan a los cambios en la demanda del mercado y producen bienes personalizados sin aumentar significativamente los costos. Aquí se detallan las principales ventajas y cómo se logran:
    
    Los sistemas digitales revolucionan la forma en que las empresas manufactureras se adaptan a los cambios en la demanda del mercado y producen bienes personalizados sin aumentar significativamente los costos. Aquí se detallan las principales ventajas y cómo se logran:
    
    - **Adaptabilidad Rápida a Cambios en la Demanda:**
        - **Producción Ágil:** Los sistemas digitales, como la automatización y el Internet de las Cosas (IoT), permiten una producción ágil y flexible. Máquinas y líneas de producción pueden ser reconfiguradas rápidamente para adaptarse a diferentes productos o volúmenes de producción. Esto reduce el tiempo de cambioover y permite una respuesta más rápida a las fluctuaciones del mercado.
        - **Planificación Dinámica:** Sistemas de Planificación de Recursos Empresariales (ERP) y Gestión de la Cadena de Suministro (SCM) integrados con tecnologías de Big Data y Inteligencia Artificial (IA) permiten una planificación dinámica de la producción. Estos sistemas pueden ajustar automáticamente los planes de producción en función de la demanda actual y las predicciones futuras, minimizando los tiempos de inactividad y maximizando la eficiencia.
    - **Producción de Bienes Personalizados:**
        - **Impresión 3D:** La impresión 3D (o fabricación aditiva) permite la producción de piezas y productos personalizados de manera eficiente y económica. Sin la necesidad de moldes o herramientas costosas, las empresas pueden fabricar productos únicos o en pequeñas series con mayor rapidez y menor costo.
        - **Configuración en Línea:** Plataformas digitales permiten a los clientes configurar y personalizar productos directamente en línea. Los datos de estas configuraciones se transmiten directamente a los sistemas de producción, donde se utilizan para guiar la fabricación. Esto no solo mejora la experiencia del cliente, sino que también reduce los errores y los tiempos de entrega.
        - **Robótica y Automatización Avanzada:** Robots y sistemas automatizados pueden ser programados para realizar tareas personalizadas con alta precisión y consistencia. Esto es especialmente útil en la producción de productos con especificaciones únicas, donde la flexibilidad y la precisión son cruciales.
    - **Optimización de Recursos:**
        - **Uso Eficiente de Materiales:** Los sistemas digitales permiten un uso más eficiente de los materiales. Por ejemplo, la simulación y el modelado 3D pueden optimizar el diseño de productos para minimizar el desperdicio de materiales. Además, la monitorización en tiempo real de los procesos de producción puede detectar y corregir ineficiencias en el uso de recursos.
        - **Gestión de Inventarios:** Sistemas de gestión de inventarios digitales pueden predecir con mayor precisión las necesidades de materiales, reduciendo el exceso de inventario y los costos de almacenamiento. Esto es particularmente beneficioso en la producción personalizada, donde los requerimientos de materiales pueden variar significativamente.
    - **Mejora de la Experiencia del Cliente:**
        - **Personalización en Tiempo Real:** La integración de sistemas CRM con los sistemas de producción permite una personalización en tiempo real. Los datos del cliente se utilizan para ajustar los procesos de producción, asegurando que los productos cumplen con las expectativas individuales. Esto no solo aumenta la satisfacción del cliente, sino que también puede generar lealtad y repetición de compras.
        - **Transparencia y Seguimiento:** Las plataformas digitales proporcionan transparencia en el proceso de producción, permitiendo a los clientes rastrear el estado de sus pedidos personalizados en tiempo real. Esto mejora la confianza y la comunicación con los clientes, lo que es crucial en la era digital.
4. **Toma de Decisiones Basada en Datos:**
    
    El análisis avanzado de datos brinda a las empresas manufactureras una mejor comprensión de sus operaciones y del mercado, facilitando decisiones estratégicas más informadas y precisas. Aquí se detallan las principales ventajas y cómo se logran:
    
    - **Monitoreo y Análisis en Tiempo Real:**
    Los sistemas de Internet de las Cosas (IoT) y sensores conectados recopilan datos continuamente sobre el estado de las máquinas, el rendimiento de los procesos y las condiciones de trabajo. Estos datos se analizan en tiempo real, proporcionando una visión detallada y actualizada de las operaciones. Dashboards y paneles de control permiten a los gerentes y operadores identificar cuellos de botella, optimizar flujos de trabajo y tomar acciones correctivas de inmediato.
    - **Análisis Predictivo:**
    Técnicas de análisis predictivo, basadas en algoritmos de Inteligencia Artificial (IA) y machine learning, permiten predecir tendencias y comportamientos futuros. Por ejemplo:
        - **Mantenimiento Predictivo:** Se pueden prever fallas de maquinaria antes de que ocurran, optimizando el mantenimiento y evitando paradas no programadas.
        - **Optimización de Producción:** Se pueden ajustar los parámetros de las máquinas y procesos para maximizar la eficiencia y la calidad del producto, reduciendo costos y aumentando la productividad.
    - **Comprendiendo el Mercado:**
        - **Análisis de Big Data:** La recopilación y análisis de grandes volúmenes de datos, tanto internos como externos, permiten a las empresas obtener una comprensión profunda del mercado. Esto incluye datos de ventas, tendencias de consumo, comportamiento de los competidores y opiniones de los clientes.
        - **Predicción de Demandas:** El análisis de Big Data puede revelar patrones y tendencias que ayudan a predecir cambios en la demanda del mercado, permitiendo a las empresas ajustar su producción y estrategias de marketing de manera proactiva.
    - **Optimización de la Cadena de Suministro:**
        - **Planificación Precisa:** Sistemas de Gestión de la Cadena de Suministro (SCM) integrados con tecnologías de Big Data y IA permiten una planificación más precisa de la demanda, la optimización de inventarios y la mejora de la logística.
        - **Colaboración con Proveedores:** El análisis de datos facilita una colaboración más estrecha con los proveedores, mejorando la eficiencia y reduciendo los riesgos en la cadena de suministro.
    - **Mejora Continua:**
        - **Retroalimentación y Aprendizaje:** El análisis de datos proporciona retroalimentación continua sobre el rendimiento de los procesos y productos, permitiendo la implementación de mejoras continuas y la identificación de oportunidades de innovación.
        - **Evaluación de Rendimiento:** KPIs (Indicadores Clave de Rendimiento) y métricas de rendimiento se pueden rastrear y analizar de manera más precisa, proporcionando una evaluación objetiva del desempeño de la empresa y permitiendo ajustes estratégicos basados en datos sólidos.
5. **Sostenibilidad:**
    
    La digitalización optimiza el uso de recursos, lo que contribuye significativamente a reducir el impacto ambiental. Aquí se detallan las principales maneras en que la transformación digital fomenta la sostenibilidad en la industria manufacturera:
    
    - **Eficiencia Energética:**
        - **Monitoreo y Control de Energía:** Sistemas de monitorización de energía basados en IoT permiten rastrear y controlar el consumo de electricidad, gas y otros recursos en tiempo real. Al identificar y optimizar los puntos de alto consumo, las empresas pueden reducir significativamente su huella de carbono.
        - **Optimización de Procesos:** Algoritmos de IA y machine learning pueden ajustar automáticamente los parámetros de las máquinas para maximizar la eficiencia energética. Por ejemplo, pueden programar las máquinas para operar durante horas de menor demanda de energía, reduciendo los costos y el impacto ambiental.
    - **Reducción de Desperdicios:**
        - **Optimización de Materiales:** El análisis de datos permite optimizar el uso de materiales, reduciendo el desperdicio en la producción. Técnicas de diseño asistido por computadora (CAD) y la simulación 3D pueden identificar formas más eficientes de utilizar los recursos.
        - **Reciclaje y Reutilización:** Sistemas de gestión de residuos digitales pueden rastrear y gestionar los residuos generados en el proceso de producción, facilitando su reciclaje y reutilización. Esto no solo reduce el volumen de residuos enviados a vertederos, sino que también puede generar ingresos adicionales a través de la venta de materiales reciclados.
    - **Gestión de la Cadena de Suministro Sostenible:**
        - **Proveedores Sostenibles:** El análisis de datos puede ayudar a identificar y seleccionar proveedores que cumplan con estándares de sostenibilidad. Plataformas digitales permiten evaluar el desempeño ambiental de los proveedores y fomentar prácticas sostenibles a lo largo de toda la cadena de suministro.
        - **Logística Eficiente:** Sistemas de gestión de flotas y rutas basados en IA pueden optimizar las rutas de transporte, reduciendo el consumo de combustible y las emisiones de gases de efecto invernadero. Esto no solo mejora la eficiencia operativa, sino que también contribuye a la sostenibilidad ambiental.
    - **Monitoreo y Reporte Ambiental:**
        - **Cumplimiento Regulatorio:** Sistemas digitales de monitoreo ambiental pueden rastrear y reportar indicadores clave de desempeño ambiental (KPIs) en tiempo real, facilitando el cumplimiento de normativas y regulaciones ambientales. Esto reduce el riesgo de multas y sanciones y mejora la reputación corporativa.
        - **Transparencia y Responsabilidad:** Plataformas digitales permiten a las empresas compartir información sobre sus prácticas sostenibles con stakeholders, incluyendo clientes, inversores y reguladores. La transparencia y la responsabilidad ambiental pueden fortalecer la confianza y la lealtad de los clientes, además de atraer inversiones responsables.
    - **Innovación en Productos y Servicios:**
        - **Productos Sostenibles:** El análisis de datos y la inteligencia de mercado pueden identificar oportunidades para desarrollar productos y servicios más sostenibles. Por ejemplo, el diseño de productos con materiales reciclables o biodegradables puede reducir el impacto ambiental a lo largo de su ciclo de vida.
        - **Servicios de Valor Agregado:** Las empresas pueden ofrecer servicios de valor agregado, como programas de reciclaje, reparación y reacondicionamiento, que no solo contribuyen a la sostenibilidad, sino que también pueden generar nuevas fuentes de ingresos.

---

## Ejemplos Reales de Transformación Digital

1. **Siemens:**
    
    La empresa alemana líder en tecnología industrial, ha sido pionera en la implementación de fábricas inteligentes, donde los sistemas ciberfísicos supervisan y optimizan continuamente la producción. Su fábrica en Amberg, Alemania, es un ejemplo destacado de cómo la transformación digital puede revolucionar la manufactura.
    
    ### **Características de la Fábrica Inteligente de Siemens en Amberg:**
    
    1. **Monitoreo en Tiempo Real:**
        - **Sensores y Dispositivos IoT:** La fábrica está equipada con una red extensa de sensores y dispositivos IoT que recopilan datos continuamente sobre el estado de las máquinas, el rendimiento de los procesos y las condiciones ambientales. Estos datos se transmiten en tiempo real a sistemas de análisis centralizados.
        - **Dashboards y Paneles de Control:** Operadores y gerentes tienen acceso a dashboards y paneles de control que muestran métricas clave, como el estado de las máquinas, los niveles de producción y las alertas de mantenimiento. Esto permite una respuesta inmediata a cualquier anomalía, minimizando el tiempo de inactividad.
    2. **Optimización de Procesos:**
        - **Análisis de Datos y Algoritmos de IA:** Los datos recopilados se analizan usando algoritmos avanzados de Inteligencia Artificial (IA) y machine learning. Estos análisis identifican patrones y tendencias que pueden ser utilizados para optimizar los procesos. Por ejemplo, se pueden ajustar los parámetros de las máquinas para maximizar la eficiencia energética, reducir el consumo de materiales y mejorar la calidad del producto.
        - **Automatización:** La fábrica utiliza robots y sistemas automatizados para realizar tareas repetitivas y de bajo valor añadido. Esto no solo reduce la necesidad de mano de obra intensiva, sino que también minimiza errores humanos, aumentando la precisión y la velocidad de los procesos.
    3. **Mantenimiento Predictivo:**
        - **Análisis Predictivo:** El análisis de datos en tiempo real permite implementar estrategias de mantenimiento predictivo. Los algoritmos de IA pueden predecir cuándo una máquina es probable que falle basándose en su historial de funcionamiento y en los datos de sensores. Esto permite realizar mantenimientos preventivos antes de que ocurran fallas, reduciendo los tiempos de inactividad y prolongando la vida útil de los equipos.
        - **Reducción de Costos de Mantenimiento:** Al prevenir fallas antes de que ocurran, la fábrica reduce significativamente los costos asociados con reparaciones urgentes y paradas no programadas.
    4. **Eficiencia Energética:**
        - **Monitoreo y Control de Energía:** Sistemas de monitorización de energía permiten rastrear y controlar el consumo de electricidad, gas y otros recursos en tiempo real. Al identificar y optimizar los puntos de alto consumo, la fábrica reduce significativamente su huella de carbono y los costos energéticos.
        - **Optimización de Horarios de Producción:** Los algoritmos de IA pueden programar las máquinas para operar durante horas de menor demanda de energía, reduciendo los costos y el impacto ambiental.
    5. **Reducción de Desperdicios:**
        - **Optimización de Materiales:** El análisis de datos permite optimizar el uso de materiales, reduciendo el desperdicio en la producción. Técnicas de diseño asistido por computadora (CAD) y la simulación 3D pueden identificar formas más eficientes de utilizar los recursos.
        - **Reciclaje y Reutilización:** Sistemas de gestión de residuos digitales rastrean y gestionan los residuos generados en el proceso de producción, facilitando su reciclaje y reutilización. Esto no solo reduce el volumen de residuos enviados a vertederos, sino que también puede generar ingresos adicionales a través de la venta de materiales reciclados.
    6. **Flexibilidad y Personalización:**
        - **Producción Ágil:** Los sistemas ciberfísicos permiten una producción ágil y flexible. Máquinas y líneas de producción pueden ser reconfiguradas rápidamente para adaptarse a diferentes productos o volúmenes de producción. Esto reduce el tiempo de cambioover y permite una respuesta más rápida a las fluctuaciones del mercado.
        - **Impresión 3D:** La impresión 3D (o fabricación aditiva) permite la producción de piezas y productos personalizados de manera eficiente y económica. Sin la necesidad de moldes o herramientas costosas, la fábrica puede fabricar productos únicos o en pequeñas series con mayor rapidez y menor costo.
    7. **Mejora Continua:**
        - **Retroalimentación y Aprendizaje:** El análisis de datos proporciona retroalimentación continua sobre el rendimiento de los procesos y productos, permitiendo la implementación de mejoras continuas y la identificación de oportunidades de innovación.
        - **Evaluación de Rendimiento:** KPIs (Indicadores Clave de Rendimiento) y métricas de rendimiento se pueden rastrear y analizar de manera más precisa, proporcionando una evaluación objetiva del desempeño de la fábrica y permitiendo ajustes estratégicos basados en datos sólidos.
    
    ### **Resultados:**
    
    - **Eficiencia de Producción:** La fábrica de Amberg ha logrado una eficiencia de producción del 99%, lo que significa que casi todos los productos fabricados cumplen con los estándares de calidad.
    - **Tasa de Defectos:** La tasa de defectos en la producción es inferior al 0.001%, lo que refleja la alta precisión y calidad de los procesos.
    - **Tiempo de Inactividad:** El tiempo de inactividad se ha reducido significativamente gracias a la implementación de mantenimiento predictivo y la optimización continua de los procesos.
    - **Costos Reducidos:** Los costos operativos y de producción se han reducido considerablemente, mejorando la rentabilidad y la competitividad de Siemens en el mercado global.
2. **General Electric (GE):**
    
    General Electric (GE) ha sido un líder en la transformación digital de la industria manufacturera a través de su plataforma Predix. Predix es una solución de Internet de las Cosas (IoT) diseñada específicamente para la industria industrial, que permite la recopilación y análisis de datos de máquinas industriales para mejorar la eficiencia operativa y reducir costos. Aquí se detallan las principales características y resultados de la implementación de Predix en GE:
    
    ### **Características de la Plataforma Predix:**
    
    1. **Recopilación de Datos en Tiempo Real:**
        - **Sensores y Dispositivos IoT:** Predix utiliza una amplia gama de sensores y dispositivos IoT para recopilar datos en tiempo real de máquinas industriales, como turbinas, motores y generadores. Estos datos incluyen métricas de rendimiento, condiciones de funcionamiento y señales de advertencia.
        - **Integración de Sistemas:** La plataforma se integra con sistemas existentes, como SCADA (Supervisory Control and Data Acquisition) y PLCs (Programmable Logic Controllers), para asegurar una recopilación de datos completa y precisa.
    2. **Análisis Avanzado de Datos:**
        - **Algoritmos de IA y Machine Learning:** Predix utiliza algoritmos de Inteligencia Artificial (IA) y machine learning para analizar los datos recopilados. Estos algoritmos identifican patrones y tendencias que pueden ser utilizados para optimizar los procesos y predecir fallas.
        - **Dashboards y Visualizaciones:** Los datos analizados se presentan en dashboards y visualizaciones intuitivas, permitiendo a los operadores y gerentes monitorear el rendimiento de las máquinas y tomar decisiones informadas en tiempo real.
    3. **Optimización de Procesos:**
        - **Ajuste de Parámetros:** Los algoritmos de Predix pueden ajustar automáticamente los parámetros de las máquinas para maximizar la eficiencia y la calidad del producto. Por ejemplo, pueden optimizar el consumo de energía, reducir el uso de materiales y mejorar la velocidad de producción.
        - **Simulación y Modelado:** La plataforma permite la simulación y modelado de escenarios de producción, lo que ayuda a las empresas a probar y validar cambios antes de implementarlos en el entorno real.
    4. **Mantenimiento Predictivo:**
        - **Detección de Fallas:** Predix utiliza análisis predictivo para detectar signos de fallas antes de que ocurran. Esto permite a las empresas realizar mantenimientos preventivos, reduciendo los tiempos de inactividad y prolongando la vida útil de las máquinas.
        - **Reducción de Costos de Mantenimiento:** Al prevenir fallas antes de que ocurran, las empresas pueden reducir significativamente los costos asociados con reparaciones urgentes y paradas no programadas.
    5. **Eficiencia Energética:**
        - **Monitoreo y Control de Energía:** Predix permite el monitoreo y control del consumo de energía en tiempo real, identificando y optimizando los puntos de alto consumo. Esto reduce la huella de carbono y los costos energéticos.
        - **Optimización de Horarios de Producción:** Los algoritmos de Predix pueden programar las máquinas para operar durante horas de menor demanda de energía, reduciendo los costos y el impacto ambiental.
    6. **Gestión de la Cadena de Suministro:**
        - **Planificación y Pronóstico:** Predix se integra con sistemas de gestión de la cadena de suministro (SCM) para mejorar la planificación y pronóstico de la demanda. Esto permite a las empresas optimizar sus inventarios y mejorar la logística.
        - **Colaboración con Proveedores:** La plataforma facilita una colaboración más estrecha con los proveedores, mejorando la eficiencia y reduciendo los riesgos en la cadena de suministro.
    7. **Seguridad y Compliance:**
        - **Monitoreo de Seguridad:** Predix permite el monitoreo continuo de la seguridad en las instalaciones industriales, identificando y mitigando riesgos antes de que se conviertan en incidentes.
        - **Cumplimiento Regulatorio:** La plataforma ayuda a las empresas a cumplir con normativas y regulaciones industriales, rastreando y reportando indicadores clave de desempeño ambiental y de seguridad.
    
    ### **Resultados:**
    
    - **Eficiencia Operativa:** La implementación de Predix ha permitido a GE y a sus clientes mejorar significativamente la eficiencia operativa. Los procesos de producción son más ágiles y precisos, lo que se traduce en un aumento de la productividad.
    - **Reducción de Costos:** Gracias a la optimización de procesos y el mantenimiento predictivo, GE ha logrado reducir costos operativos y de producción. Las paradas no programadas se han minimizado, y los costos de mantenimiento se han reducido considerablemente.
    - **Mejora de la Calidad:** El análisis de datos y la optimización continua de los procesos han mejorado la calidad del producto, reduciendo la tasa de defectos y aumentando la satisfacción del cliente.
    - **Sostenibilidad:** La plataforma Predix ha ayudado a GE a reducir su huella de carbono y optimizar el uso de recursos, contribuyendo a la sostenibilidad ambiental.
    - **Innovación y Competitividad:** La transformación digital a través de Predix ha permitido a GE innovar y mantenerse competitiva en un mercado cada vez más dinámico y tecnológico.
3. **Tesla:**
    
    Tesla ha sido pionero en la transformación digital de la industria automotriz, utilizando una combinación de robots avanzados, aprendizaje automático y big data para mejorar continuamente sus procesos de fabricación de vehículos. Aquí se detallan las principales características y resultados de la implementación de estas tecnologías en Tesla:
    
    ### **Características de la Transformación Digital en Tesla:**
    
    1. **Robots Avanzados:**
        - **Automatización de Procesos:** Tesla utiliza robots avanzados en todas las etapas de la fabricación, desde la estampación y soldadura de piezas metálicas hasta la pintura y ensamblaje final. Estos robots realizan tareas repetitivas con alta precisión y consistencia, aumentando la velocidad de producción y reduciendo errores humanos.
        - **Flexibilidad y Adaptabilidad:** Los robots en las fábricas de Tesla son programables y reconfigurables, lo que permite una rápida adaptación a diferentes modelos de vehículos y cambios en el diseño. Esto reduce el tiempo de cambioover y permite una producción más ágil y eficiente.
    2. **Aprendizaje Automático (Machine Learning):**
        - **Optimización de Procesos:** Tesla utiliza algoritmos de machine learning para analizar datos de producción y optimizar continuamente los procesos. Estos algoritmos identifican patrones y tendencias que pueden ser utilizados para ajustar los parámetros de las máquinas y mejorar la eficiencia.
        - **Control de Calidad:** El aprendizaje automático se aplica para monitorear y controlar la calidad del producto en tiempo real. Sensores y cámaras capturan imágenes y datos de las piezas y vehículos durante el proceso de fabricación, y los algoritmos de machine learning detectan y clasifican defectos automáticamente, permitiendo una corrección inmediata.
    3. **Big Data:**
        - **Recopilación y Análisis de Datos:** Tesla recopila y analiza grandes volúmenes de datos de sus vehículos y procesos de fabricación. Estos datos incluyen información sobre el rendimiento de las baterías, el comportamiento de los vehículos en la carretera y las condiciones de funcionamiento de las máquinas en la fábrica.
        - **Mejora Continua:** Los datos recopilados se utilizan para identificar áreas de mejora y desarrollar soluciones innovadoras. Por ejemplo, los datos de conducción de los vehículos eléctricos (EVs) se analizan para optimizar el rendimiento de las baterías y mejorar la eficiencia energética.
    4. **Mantenimiento Predictivo:**
        - **Prevención de Fallas:** Tesla utiliza análisis predictivo para prever y prevenir fallas en las máquinas y vehículos. Los algoritmos de machine learning analizan datos de sensores y registros de mantenimiento para identificar signos de desgaste o mal funcionamiento antes de que se conviertan en fallas graves.
        - **Reducción de Tiempos de Inactividad:** Al realizar mantenimientos preventivos basados en datos, Tesla reduce significativamente los tiempos de inactividad y los costos asociados con reparaciones urgentes y paradas no programadas.
    5. **Eficiencia Energética:**
        - **Monitoreo y Control de Energía:** Tesla implementa sistemas de monitoreo de energía para rastrear y controlar el consumo de electricidad y otros recursos en sus fábricas. Estos sistemas identifican y optimizan los puntos de alto consumo, reduciendo la huella de carbono y los costos energéticos.
        - **Optimización de Procesos:** Los algoritmos de machine learning ajustan automáticamente los parámetros de las máquinas para maximizar la eficiencia energética, lo que se traduce en una producción más sostenible y económica.
    6. **Flexibilidad y Personalización:**
        - **Producción Ágil:** La combinación de robots avanzados y sistemas de control basados en datos permite a Tesla adaptarse rápidamente a cambios en la demanda del mercado y producir vehículos personalizados con mayor eficiencia.
        - **Impresión 3D:** Tesla utiliza la impresión 3D para fabricar piezas personalizadas y prototipos de manera rápida y económica, acelerando el ciclo de desarrollo de nuevos productos.
    7. **Seguridad y Compliance:**
        - **Monitoreo de Seguridad:** Tesla utiliza sistemas de monitoreo avanzados para garantizar la seguridad en sus fábricas. Sensores y cámaras detectan y alertan sobre posibles riesgos, permitiendo una respuesta inmediata.
        - **Cumplimiento Regulatorio:** Los datos recopilados y analizados se utilizan para asegurar el cumplimiento de normativas y regulaciones industriales, rastreando y reportando indicadores clave de desempeño y seguridad.
    
    ### **Resultados:**
    
    - **Eficiencia Operativa:** La implementación de robots avanzados, aprendizaje automático y big data ha permitido a Tesla mejorar significativamente la eficiencia operativa. Los procesos de producción son más rápidos, precisos y consistentes, lo que se traduce en un aumento de la productividad.
    - **Calidad del Producto:** El control de calidad basado en machine learning ha reducido la tasa de defectos y mejorado la calidad general de los vehículos Tesla, aumentando la satisfacción del cliente y la reputación de la marca.
    - **Reducción de Costos:** La optimización de procesos y el mantenimiento predictivo han reducido los costos operativos y de producción. Las paradas no programadas se han minimizado, y los costos de mantenimiento se han reducido considerablemente.
    - **Sostenibilidad:** La eficiencia energética y la optimización del uso de recursos han ayudado a Tesla a reducir su huella de carbono y promover prácticas sostenibles en la fabricación.
    - **Innovación y Competitividad:** La transformación digital ha permitido a Tesla innovar constantemente y mantenerse a la vanguardia de la industria automotriz. La capacidad de adaptarse rápidamente a los cambios del mercado y producir vehículos de alta calidad y sostenibles ha fortalecido la posición competitiva de Tesla.

---

## Desafíos de la Transformación Digital

- **Resistencia al Cambio:**
    
    La resistencia al cambio es un desafío común en la implementación de la transformación digital, especialmente en la industria manufacturera. Aunque las tecnologías avanzadas ofrecen numerosos beneficios, algunos empleados y directivos pueden mostrarse reticentes a adoptarlas.
    
    **Miedo a lo Desconocido:** Muchos empleados y directivos pueden sentirse incómodos con tecnologías nuevas y desconocidas. La falta de familiaridad puede generar miedo y ansiedad sobre cómo funcionarán estas tecnologías y cómo afectarán sus roles y responsabilidades. También existe la preocupación de que la automatización y la digitalización puedan resultar en la pérdida de empleos o en la obsolescencia de habilidades actuales.
    
    **Falta de Capacitación:**
    
    - La falta de formación y capacitación adecuada puede hacer que los empleados se sientan inseguros y poco preparados para trabajar con nuevas tecnologías.
    - Algunos empleados pueden resistirse a aprender nuevas habilidades, especialmente si están acostumbrados a métodos tradicionales y ven la capacitación como una carga adicional.
    
    **Cultura Organizacional:**
    
    - En algunas organizaciones, la cultura puede ser conservadora y resistirse a cambios y innovaciones.
    - La falta de un ambiente que fomente la innovación y el cambio puede dificultar la adopción de nuevas tecnologías.
    - Además, si los líderes y directivos no respaldan activamente la transformación digital, los empleados pueden percibir que el cambio no es una prioridad y, por lo tanto, resistirse a él.
    
    **Costos y Recursos:**
    
    - La implementación de tecnologías avanzadas puede requerir una inversión inicial significativa, lo que puede ser un obstáculo para algunas empresas, especialmente las pequeñas y medianas.
    - La falta de recursos, tanto financieros como humanos, puede limitar la capacidad de una empresa para implementar y mantener nuevas tecnologías.
    
    Para superar la resistencia al cambio, es crucial implementar estrategias efectivas.
    
    **Comunicación Transparente:**
    
    - Comunicar claramente los beneficios de la transformación digital, cómo afectará positivamente a los empleados y a la empresa, y cómo se manejarán las preocupaciones relacionadas con el empleo.
    - Crear canales de comunicación abiertos para que los empleados puedan expresar sus preocupaciones y sugerencias.
    - Escuchar y abordar estas preocupaciones puede ayudar a ganar el apoyo de los empleados.
    
    **Capacitación y Desarrollo de Habilidades:**
    
    - Ofrecer programas de capacitación y desarrollo de habilidades para asegurar que los empleados estén preparados para trabajar con nuevas tecnologías.
    - La formación debe ser continua y adaptada a diferentes niveles de experiencia.
    - Proporcionar apoyo y mentoría a los empleados durante el proceso de transición.
    
    **Liderazgo y Compromiso:**
    
    - Los líderes y directivos deben mostrar un compromiso firme con la transformación digital y liderar por ejemplo.
    - Su apoyo visible y activo puede motivar a los empleados a abrazar el cambio.
    - Fomentar una cultura organizacional que valore la innovación y el cambio.
    - Reconocer y premiar a aquellos que adoptan y promueven nuevas tecnologías.
    
    **Pilotos y Proyectos Piloto:**
    
    - Implementar nuevas tecnologías de manera gradual a través de proyectos piloto.
    - Esto permite a los empleados familiarizarse con las tecnologías en un entorno controlado y demostrar los beneficios concretos antes de una implementación a gran escala.
    - Evaluar regularmente los resultados de los proyectos piloto y hacer ajustes según sea necesario.
    - Compartir los éxitos y aprendizajes con toda la organización para generar confianza y apoyo.
    
    **Incentivos y Motivación:**
    
    - Ofrecer incentivos y recompensas a los empleados que adopten y promuevan las nuevas tecnologías.
    - Esto puede incluir bonificaciones, reconocimientos públicos y oportunidades de desarrollo profesional.
    - Destacar cómo la transformación digital puede mejorar la experiencia laboral, reducir tareas repetitivas y aburridas, y crear oportunidades para el crecimiento y el desarrollo personal.
    
    **Participación y Colaboración:**
    
    - Involucrar a los empleados en el proceso de toma de decisiones y en la planificación de la implementación.
    - Solicitar su input y feedback para asegurar que las soluciones sean prácticas y relevantes.
    - Fomentar la colaboración entre diferentes departamentos y equipos para asegurar una implementación exitosa y cohesiva.
- **Costos Iniciales Altos:**
    
    La implementación de tecnologías avanzadas, como sistemas de Internet de las Cosas (IoT), inteligencia artificial (IA), y plataformas de gestión de datos, requiere una inversión significativa. Estos costos incluyen:
    
    - **Adquisición de Tecnología:** La compra de hardware, software y dispositivos IoT puede ser costosa. Esto incluye sensores, robots, servidores, y licencias de software especializado.
    - **Infraestructura:** La actualización o instalación de nueva infraestructura, como redes de alta velocidad, centros de datos y sistemas de seguridad, también representa un gasto importante.
    - **Capacitación y Formación:** Capacitar a los empleados en el uso de nuevas tecnologías y procesos puede requerir programas de formación intensivos y personalizados.
    - **Consultoría y Asesoramiento:** Contratar expertos en transformación digital para guiar el proceso y asegurar una implementación exitosa puede ser un costo adicional.
    
    Estos costos iniciales pueden ser un obstáculo para muchas empresas, especialmente las pequeñas y medianas, que pueden tener recursos limitados. Sin embargo, es importante considerar que, a largo plazo, la transformación digital puede generar importantes ahorros y beneficios, tales como:
    
    - **Eficiencia Operativa:** La automatización y la optimización de procesos pueden reducir significativamente los costos operativos y de producción.
    - **Reducción de Desperdicios:** El análisis de datos y la monitorización en tiempo real permiten identificar y eliminar ineficiencias, reduciendo el desperdicio de materiales y energía.
    - **Mejora de la Calidad:** La implementación de sistemas de control de calidad basados en datos puede reducir la tasa de defectos y mejorar la satisfacción del cliente.
    - **Mantenimiento Predictivo:** El uso de análisis predictivo para prever y prevenir fallas reduce los costos de mantenimiento y minimiza los tiempos de inactividad.
    - **Competitividad:** La transformación digital puede mejorar la capacidad de respuesta ante los cambios del mercado y fomentar la innovación, manteniendo a la empresa competitiva en un entorno empresarial cada vez más dinámico.
    
    Para mitigar los costos iniciales, las empresas pueden considerar estrategias como:
    
    - **Implementación Gradual:** Implementar las tecnologías de manera gradual a través de proyectos piloto para evaluar los beneficios y ajustar según sea necesario antes de una implementación a gran escala.
    - **Financiamiento y Créditos:** Explorar opciones de financiamiento, como préstamos bancarios, créditos fiscales y subvenciones gubernamentales, que pueden ayudar a financiar la transformación digital.
    - **Asociaciones y Colaboraciones:** Formar alianzas con proveedores de tecnología y otras empresas para compartir costos y recursos.
    - **Optimización de Recursos Internos:** Utilizar recursos internos, como equipos de TI existentes, para llevar a cabo parte de la implementación y reducir la dependencia de consultores externos.
- **Falta de Talento:** Implementar tecnologías avanzadas requiere personal capacitado que entienda y gestione estas herramientas.

---

## Conclusión

La transformación digital en manufactura no es solo una tendencia; es una necesidad para mantenerse competitivo en un mundo cada vez más conectado y exigente. Adoptar estas tecnologías permite a las empresas optimizar sus operaciones, adaptarse a las demandas del mercado y asegurar su relevancia en el futuro. Aunque puede presentar desafíos, los beneficios superan con creces los costos y esfuerzos iniciales.

¡Es hora de dar el siguiente paso hacia una manufactura más eficiente, sostenible y competitiva!```

## `components/Banner.jsx`
```jsx
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
}```

## `components/CallToAction/CallToAction.jsx`
```jsx
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

export default CallToAction;```

## `components/ContactAnimation.jsx`
```jsx
"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ContactAnimation() {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetch("/contact-us.json")
          .then((res) => res.json())
          .then((data) => setAnimationData(data));
        observer.disconnect();
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-40 h-40 md:w-64 md:h-64 p-4 bg-white dark:bg-black rounded-xl shadow-lg"
    >
      {animationData && (
        <Lottie
          className="w-full h-full"
          animationData={animationData}
          loop
          autoplay
        />
      )}
    </div>
  );
}
```

## `components/ContactSection.jsx`
```jsx
'use client';
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactSection() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita la recarga de la página al enviar el formulario
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const message = formData.get('message');
    const name = formData.get('name');
    // Incluimos user_id y company_id con los valores especificados
    const data = {
      email,
      message,
      name,
      user_id: 2,
      company_id: 1,
    };
    try {
      const response = await fetch('https://contact.alphaqueb.com/create_lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Agrega cualquier encabezado adicional si es necesario
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }
      const result = await response.json();
      console.log('Respuesta de la API:', result);
      setStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div id='contacto' className="my-4 dark:bg-stone-900 mx-auto px-7 py-16 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-lg mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl xl:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            ¡Contáctanos hoy mismo!
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          ¿Listo para llevar tu industria al siguiente nivel? Completa el formulario y un experto se pondrá en contacto contigo lo antes posible.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="name">
                Nombre
              </Label>
              <Input
                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 shadow-sm focus:border-primary focus:ring-primary sm:text-lg text-zinc-900 dark:text-white bg-white dark:bg-zinc-800"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
                type="text"
                required
              />
            </div>
            <div>
              <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="email">
                Correo electrónico
              </Label>
              <Input
                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 shadow-sm focus:border-primary focus:ring-primary sm:text-lg text-zinc-900 dark:text-white bg-white dark:bg-zinc-800"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                type="email"
                required
              />
            </div>
            <div>
              <Label className="block text-lg font-medium text-zinc-700 dark:text-zinc-200" htmlFor="message">
                Mensaje
              </Label>
              <Textarea
                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 shadow-sm focus:border-primary focus:ring-primary sm:text-lg text-zinc-900 dark:text-white bg-white dark:bg-zinc-800"
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí"
                rows={4}
                required
              />
            </div>
            <Button
              className="w-full justify-center rounded-md border border-transparent bg-custom-orange py-3 px-4 text-lg font-medium text-white shadow-sm hover:bg-custom-orange-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-300"
              type="submit"
            >
              Enviar
            </Button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-green-500">Mensaje enviado con éxito.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-500">Error al enviar el mensaje.</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/contact.jpg"
            alt="Contact Image"
            width={600}
            height={400}
            className="object-cover rounded-lg w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}```

## `components/CookieBanner.jsx`
```jsx
"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

    if (!hasAcceptedCookies) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("cookiesAccepted", "true");

        // 🔹 Hacer tracking solo después de 3 segundos
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "accept_cookies", {
            event_category: "Cookies",
            event_label: "El usuario aceptó las cookies automáticamente",
          });
        }
      }, 5000);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white text-sm p-3 text-center z-50">
      Usamos cookies para mejorar tu experiencia en nuestro sitio. Al continuar navegando, aceptas el uso de cookies. 
      <a 
        href="https://alphaqueb.com/politica-de-coockies" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline text-blue-400 ml-2 hover:text-blue-300"
      >
        Ver política de cookies
      </a>
    </div>
  );
}
```

## `components/CoverageMap.jsx`
```jsx
"use client";
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const activeStates = [
  "Campeche",
  "Yucatán",
  "Nuevo León",
  "Tlaxcala",
  "Querétaro",
  "Jalisco",
  "Ciudad de México",
  "Puebla",
  "Estado de México",
  "Baja California",
];

export default function CoverageMap() {
  const [selectedState, setSelectedState] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleClick = (geo, event) => {
    const name = geo.properties.name;
    if (activeStates.includes(name)) {
      const svg = event.currentTarget.ownerSVGElement;
      const rect = svg.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      setSelectedState(name);
    } else {
      setSelectedState(null);
    }
  };

  return (
    <section className="mx-auto max-w-14xl px-4 py-4">
      <h3 className="text-center text-2xl md:text-3xl font-bold text-custom-orange dark:text-custom-orange-light mb-2">
        Presencia Nacional Activa
      </h3>
      <p className="text-center text-stone-600 dark:text-stone-400 mb-2">
        Lugares donde tenemos proyectos en marcha
      </p>
      <div className="relative flex justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 1000, center: [-102, 24] }}
          width={800}
          height={600}
          aria-label="Mapa de México con proyectos activos"
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography="/mexico.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const isActive = activeStates.includes(geo.properties.name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={(e) => handleClick(geo, e)}
                    tabIndex={-1}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                    className={`${
                      isActive
                        ? "fill-custom-orange dark:fill-custom-orange-light"
                        : "fill-white dark:fill-white"
                    } stroke-stone-400 dark:stroke-stone-500`}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        {selectedState && (
          <div
            className="absolute bg-white text-black dark:bg-stone-800 dark:text-white px-3 py-1 rounded shadow-md"
            style={{ top: tooltipPos.y, left: tooltipPos.x, transform: "translate(-50%, -110%)" }}
          >
            {selectedState}
          </div>
        )}
      </div>
    </section>
  );
}

```

## `components/Faq.jsx`
```jsx
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
    question: "¿Qué tipo de sistemas empresariales implementan?",
    answer: "Implementamos ERP, CRM, sistemas SCADA, y soluciones personalizadas orientadas a optimizar procesos industriales, comerciales y administrativos, adaptándonos a la medida de tu empresa."
  },
  {
    question: "¿Cuánto tiempo tarda en implementarse un sistema nuevo?",
    answer: "El tiempo promedio oscila entre 4 y 12 meses dependiendo del tamaño, la complejidad del proyecto y las integraciones necesarias. Realizamos un análisis inicial para darte un cronograma exacto."
  },
  {
    question: "¿Mi empresa debe detener operaciones durante la implementación?",
    answer: "No es necesario detener operaciones. Nuestras implementaciones se planifican para minimizar el impacto operativo, realizando migraciones graduales o programadas en horas no productivas."
  },
  {
    question: "¿Qué debo tener listo antes de comenzar una implementación de sistema?",
    answer: "Es recomendable contar con documentación básica de procesos internos, asignar responsables internos, y definir claramente objetivos y expectativas del proyecto."
  },
  {
    question: "¿Cómo puedo saber si necesito un ERP o un CRM?",
    answer: "Si necesitas optimizar operaciones internas, controlar inventarios o producción, un ERP es ideal. Si buscas mejorar relaciones comerciales, ventas y atención al cliente, un CRM es más apropiado. Podemos evaluar juntos qué conviene más."
  },
  {
    question: "¿Qué tan seguros estarán mis datos con los sistemas que implementan?",
    answer: "Garantizamos seguridad total con cifrado avanzado, control de accesos por rol, auditorías periódicas y cumplimiento estricto de normativas internacionales de privacidad y protección de datos."
  },
  {
    question: "¿Puedo integrar su sistema con otras aplicaciones que ya tengo funcionando?",
    answer: "Sí, nuestras soluciones son abiertas y flexibles, permitiendo integraciones con múltiples plataformas y aplicaciones existentes, desde sistemas contables hasta herramientas especializadas."
  },
  {
    question: "¿Qué sucede con mis datos actuales al implementar un sistema nuevo?",
    answer: "Nos encargamos de la migración completa y segura de tus datos existentes hacia la nueva plataforma, garantizando integridad, disponibilidad y continuidad operativa desde el día uno."
  },
  {
    question: "¿Proveen capacitación para mi equipo después de implementar el sistema?",
    answer: "Sí, realizamos capacitaciones completas y personalizadas, adaptadas al rol y funciones de cada usuario, asegurando una adopción efectiva del nuevo sistema por parte de tu equipo."
  },
  {
    question: "¿Qué tipo de soporte ofrecen después de la implementación?",
    answer: "Ofrecemos soporte técnico continuo a través de diferentes canales, incluyendo asistencia remota, seguimiento personalizado, y mejoras continuas para asegurar que tu sistema funcione siempre de manera óptima."
  },
  {
    question: "¿Qué criterios debo considerar al elegir un sistema empresarial?",
    answer: "Debes considerar la escalabilidad del sistema, facilidad de uso, soporte técnico disponible, costos de implementación y mantenimiento, además de la capacidad para integrarse con otros sistemas que ya utilizas."
  },
  {
    question: "¿Es posible personalizar un sistema una vez implementado?",
    answer: "Sí, ofrecemos servicios de personalización continua para adaptar el sistema a nuevas necesidades o procesos que puedan surgir con el tiempo, garantizando siempre la máxima eficiencia operativa."
  },
  {
    question: "¿Cómo puedo asegurar una buena adopción del nuevo sistema por parte de mi equipo?",
    answer: "La clave está en una capacitación efectiva, comunicación clara de beneficios, acompañamiento durante la transición y un soporte técnico receptivo para resolver rápidamente dudas o problemas."
  },
  {
    question: "¿Qué hago si experimento problemas técnicos tras la implementación?",
    answer: "Nuestro equipo de soporte técnico está disponible para atender cualquier problema inmediatamente. Puedes comunicarte con nosotros por múltiples canales para asegurar una solución rápida y efectiva."
  },
  {
    question: "¿Cuáles son los principales beneficios de digitalizar mis procesos empresariales?",
    answer: "Los principales beneficios incluyen mayor productividad, reducción de errores humanos, mejor control y visibilidad de operaciones, optimización de costos y una ventaja competitiva importante en tu sector."
  },
  {
    question: "¿Ofrecen soluciones en la nube o solo locales?",
    answer: "Ofrecemos soluciones tanto en la nube como locales, dependiendo de tus necesidades específicas, infraestructura disponible y preferencias operativas."
  },
  {
    question: "¿Cuánto cuesta implementar un sistema empresarial?",
    answer: "El costo varía según la escala y complejidad del proyecto, pero realizamos una evaluación inicial gratuita para ofrecerte una cotización precisa adaptada a tus necesidades específicas."
  },
  {
    question: "¿Qué garantías ofrecen sobre la funcionalidad del sistema implementado?",
    answer: "Garantizamos que nuestros sistemas cumplirán con los objetivos establecidos durante la consultoría inicial. Si existe algún desajuste, trabajamos sin costo adicional hasta cumplir tus expectativas."
  },
  {
    question: "¿Es necesario contar con personal técnico especializado interno para gestionar el sistema?",
    answer: "No es imprescindible. Nuestros sistemas están diseñados para ser amigables con usuarios sin formación técnica avanzada, y además ofrecemos soporte y capacitación continua para facilitar la gestión."
  },
  {
    question: "¿Qué experiencia tiene Alphaqueb en implementaciones exitosas?",
    answer: "Contamos con amplia experiencia y casos de éxito en múltiples sectores industriales, comerciales y administrativos, con empresas que han mejorado significativamente sus resultados operativos tras nuestras implementaciones."
  },
  {
    question: "¿Cuáles son las fases típicas de una implementación de sistemas empresariales?",
    answer: "Las fases incluyen diagnóstico inicial, planificación detallada, personalización del sistema, migración de datos, capacitación del personal, puesta en marcha y soporte continuo posterior a la implementación."
  },
  {
    question: "¿Cómo miden el éxito de una implementación?",
    answer: "Medimos el éxito basado en indicadores específicos (KPIs) definidos conjuntamente con tu empresa, tales como mejora en eficiencia operativa, reducción de costos, satisfacción del usuario final, y cumplimiento de objetivos estratégicos."
  },
  {
    question: "¿Pueden realizar una demostración del sistema antes de contratarlo?",
    answer: "Sí, realizamos demostraciones completas para que puedas evaluar las funcionalidades y beneficios del sistema antes de tomar cualquier decisión de inversión."
  },
  {
    question: "¿Qué ocurre si necesito hacer ajustes en el alcance del proyecto después de iniciado?",
    answer: "Trabajamos con metodologías ágiles que permiten ajustes flexibles durante el proyecto, adaptándonos siempre a nuevas necesidades o cambios de prioridades sin perder eficiencia."
  },
  {
    question: "¿Necesito infraestructura especial para implementar sus soluciones?",
    answer: "No necesariamente. Ofrecemos tanto soluciones en la nube que no requieren infraestructura propia, como opciones locales que pueden adaptarse a tu infraestructura existente."
  },
  {
    question: "¿Ofrecen soluciones móviles o acceso remoto?",
    answer: "Sí, todas nuestras soluciones permiten acceso móvil y remoto seguro, facilitando la gestión operativa desde cualquier lugar y en tiempo real."
  },
  {
    question: "¿Cómo gestionan los riesgos durante la implementación?",
    answer: "Contamos con una metodología estricta de gestión de riesgos que incluye identificación temprana, análisis constante y acciones preventivas para garantizar que los proyectos avancen según lo planeado."
  },
  {
    question: "¿Qué documentos recibo al finalizar la implementación?",
    answer: "Te entregamos documentación técnica completa, manuales de usuario, guías de operación, y reportes detallados del proyecto para asegurar autonomía operativa y continuidad."
  },
  {
    question: "¿Hay costos ocultos que debería considerar en la implementación?",
    answer: "No. Desde el inicio te proporcionamos una cotización clara y detallada, especificando todos los costos relacionados para evitar sorpresas durante o después del proyecto."
  },
  {
    question: "¿Qué pasa con el soporte después del primer año?",
    answer: "Después del primer año puedes optar por renovar el soporte técnico bajo un esquema anual, mensual o según demanda, siempre adaptado a tus necesidades específicas."
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
        {/* Acordeón con dos columnas */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
            {[0, 1].map((colIndex) => (
              <div key={colIndex}>
                <Accordion type="single" collapsible>
                  {FAQ_ITEMS
                    .filter((_, index) => index % 2 === colIndex)
                    .map((item, index) => (
                      <AccordionItem key={index} value={`item-${colIndex}-${index}`}>
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
}```

## `components/Footer.jsx`
```jsx
"use client";
import MyLightImage from '@/public/brand/white.png';
import MyDarkImage from '@/public/brand/dark.png';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from 'react-icons/fa';

const Footer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <footer className="footer py-4 border-t bg-base-200 text-base-content border-base-300 flex flex-col md:flex-row justify-between items-center mt-24 px-8">
            <aside className="flex items-center mb-4 md:mb-0">
                <Link href="/">
                    <div className="cursor-pointer">
                        <Image
                            src={MyDarkImage}
                            alt="Logo de Alphaqueb"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                </Link>
                <p className="text-base pl-4 dark:text-slate-100">
                    Alphaqueb Consulting SAS <br /> Acercando los sistemas industriales a las empresas mexicanas.
                </p>
            </aside>

            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                {/* Enlaces Relevantes */}
                <Link href="/aviso-de-privacidad" className="text-base dark:text-slate-100 hover:text-orange-500">
                    Aviso de Privacidad
                </Link>
                <Link href="/terminos-y-condiciones" className="text-base dark:text-slate-100 hover:text-orange-500">
                    Términos y Condiciones
                </Link>
                <Link href="/politica-de-seguridad" className="text-base dark:text-slate-100 hover:text-orange-500">
                    Política de Seguridad
                </Link>

                {/* Menú Desplegable */}
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="text-base dark:text-slate-100 hover:text-orange-500 flex items-center"
                    >
                        Más Políticas <FaAngleDown className="ml-1" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded shadow-lg z-10">
                            <ul className="py-1">
                                <li>
                                    <Link href="/aviso-de-cumplimiento-ambiental" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Aviso de Cumplimiento Ambiental
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/aviso-legal" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Aviso Legal
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-accesibilidad" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Accesibilidad
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-anti-soborno-y-corrupcion" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Anti-Soborno y Corrupción
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-comentarios-o-contenido-generado-por-usuarios" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Comentarios o Contenido Generado por Usuarios
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-coockies" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Cookies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-cumplimiento-regulatorio" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Cumplimiento Regulatorio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-enlaces-externos" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Enlaces Externos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-etica-empresarial" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Ética Empresarial
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-proteccion-de-datos-personales" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Protección de Datos Personales
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/politica-de-uso-aceptable-de-recursos-tecnologicos" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                        Política de Uso Aceptable de Recursos Tecnológicos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </footer>
    );
};

export default Footer;```

## `components/LastNews/LastNews.jsx`
```jsx
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(postsDirectory);
  return files.map((filename) => {
    const markdownFile = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
    const { data: frontMatter, content } = matter(markdownFile);
    const slug = filename.replace('.mdx', '');
    return {
      frontMatter,
      slug,
    };
  }).sort((a, b) => {
    return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
  });
}

export default function LastNews() {
  const posts = getPosts().slice(0, 45); // Limitar a los últimos 30 posts
  return (
    <section className="py-8 text-center">
      <h2 className="text-3xl font-semibold mb-6 dark:text-white">Últimas noticias</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.slug} className="block rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-zinc-800">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.frontMatter.image}
                alt={post.frontMatter.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{post.frontMatter.title}</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-3">{post.frontMatter.description}</p>
              <span className="text-zinc-500 dark:text-zinc-400 text-sm">
                {new Date(post.frontMatter.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

## `components/MultiCards.jsx`
```jsx
'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaCode } from "react-icons/fa";

// Función para formatear el número con comas como separadores decimales
function formatNumber(value, decimals) {
  return value.toLocaleString('es-ES', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function incrementNumber(value, increment, max, decimals) {
  return Math.min(value + increment, max).toFixed(decimals);
}

function useIncrement(initialValue, increment, max, decimals, interval) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(prev => parseFloat(incrementNumber(prev, increment, max, decimals)));
    }, interval);
    return () => clearInterval(timer);
  }, [increment, max, decimals, interval]);
  return value;
}

export default function MultiCards() {
  const dineroAhorrado = formatNumber(
    useIncrement(28.2, 0.01, 1237, 2, 12100),
    2,
  );
  const proyectosActivos = useIncrement(179, 1, 57, 0, 1800000000); // cada 5 segundos
  const clientesTotales = useIncrement(89, 1, 10000, 0, 180000000); // cada 30 minutos
  const clientesActivos = useIncrement(72, 1, 2000, 0, 180000000); // cada 30 minutos

  const cards = [
    {
      title: "Ahorros Anuales Generados",
      icon: FaDollarSign,
      value: `$${dineroAhorrado} M`,
      description: "+20% desde el año pasado",
    },
    {
      title: "Desarrollos Activos",
      icon: FaCode,
      value: `+${proyectosActivos}`,
      description: "+1 en la última semana",
    },
    {
      title: "Clientes Activos",
      icon: FaUsers,
      value: `+${clientesActivos}`,
      description: "+4 desde el mes pasado",
    },
    {
      title: "Clientes Totales",
      icon: FaUsers,
      value: `+${clientesTotales}`,
      description: "+3 desde el mes pasado",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 py-12">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
          >
            <Card
              className="relative h-full overflow-hidden bg-white/70 dark:bg-stone-900/40 backdrop-blur-xl shadow-sm rounded-3xl border border-white/40 dark:border-stone-700/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] group"
            >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-custom-orange/5 dark:from-white/5 dark:to-custom-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 pt-6 px-6 relative z-10">
              <CardTitle className="text-sm md:text-base font-semibold text-zinc-500 dark:text-zinc-400 tracking-wide uppercase">
                {card.title}
              </CardTitle>
              <div className="p-3 bg-custom-orange/10 dark:bg-custom-orange/20 rounded-2xl group-hover:scale-110 group-hover:bg-custom-orange/20 transition-all duration-300">
                <Icon className="h-5 w-5 text-custom-orange dark:text-orange-400" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10 px-6 pb-6 pt-2">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 transition-all duration-300 group-hover:from-custom-orange group-hover:to-orange-400">
                {card.value}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {card.description}
                </p>
              </div>
            </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-custom-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

```

## `components/Navbar.jsx`
```jsx
"use client";
import MyLightImage from '@/public/brand/white.png';
import MyDarkImage from '@/public/brand/dark.png';
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const COPY = {
  tecnologias: {
    title: "Servicios Industriales",
    mainDescription: "Soluciones tecnológicas diseñadas para transformar la manufactura con innovación y eficiencia.",
    projects: [
    
      {
        href: "/servicios/transformar",
        title: "Transformación Digital",
        description: "Estrategias personalizadas para digitalizar y optimizar operaciones manufactureras."
      },
      {
        href: "/servicios/scada",
        title: "Sistemas SCADA",
        description: "Supervisión y control en tiempo real de procesos industriales para máxima eficiencia."
      },
      {
        href: "/servicios/automatizar",
        title: "Automatización Industrial",
        description: "Implementación de soluciones robóticas que incrementan la productividad hasta un 40%."
      },
    ]
  },
  blogs: {
    title: "Blogs",
    href: "/blogs"
  },
  navigation: {
    about: { href: "/nosotros", title: "Nosotros" },
    contact: { href: "#contacto", title: "Contacto" },
    impulseButton: "Cotizar Proyecto",
    mobileMenu: [
      { href: "/", title: "Inicio" },
      { href: "/servicios/automatizar", title: "Automatización" },
      { href: "/servicios/scada", title: "Sistemas SCADA" },
      { href: "/servicios/transformar", title: "Capacitación" },
      { href: "/nosotros", title: "Nosotros" },
      { href: "#contacto", title: "Contacto" },
      { href: "/blogs", title: "Blogs" }
    ]
  }
};

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
        <Link
            ref={ref}
            href={href}
            className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:text-zinc-100",
                className
            )}
            {...props}
        >
            <div className="text-lg font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
            </p>
        </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4 justify-center"> {/* Ajustado el gap aquí */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:text-zinc-100 font-medium text-lg">{COPY.tecnologias.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                 <Link href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image src="/dark.png" width={210} height={210} alt="logo" />
                    </div>
                    <p className="text-lg leading-tight text-muted-foreground">
                      {COPY.tecnologias.mainDescription}
                    </p>
                  </Link>
              </li>
              {COPY.tecnologias.projects.map((project) => (
                <ListItem key={project.href} href={project.href} title={project.title}>
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href={COPY.blogs.href} className="dark:text-zinc-100 font-medium text-lg">
                {COPY.blogs.title}
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href={COPY.navigation.about.href} className="dark:text-zinc-100 font-medium text-lg">
                {COPY.navigation.about.title}
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
           <Link href={COPY.navigation.contact.href} className="dark:text-zinc-100 font-medium text-lg">
                {COPY.navigation.contact.title}
            </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="flex py-4 w-full justify-between items-center">
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="cursor-pointer">
            <Image
              src={MyDarkImage}
              alt="Logo de Alphaqueb"
              width={45}
              height={45}
            />
          </div>
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenuDemo />
      </div>
      <div className="flex items-center gap-4">
        <Link href="#contacto" className="hidden md:block font-bold dark:text-zinc-100 border rounded-lg text-sm p-2 hover:bg-zinc-100 bg-custom-orange text-zinc-50 dark:hover:bg-orange-600 hover:text-black">
          {COPY.navigation.impulseButton}
        </Link>
        <div className="hidden md:block">
        </div>
        {/* Mobile Menu Button */}
        <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DrawerTrigger asChild>
            <button onClick={toggleMenu} className="md:hidden">
              <AiOutlineMenu size={28} className="dark:text-zinc-100" />
            </button>
          </DrawerTrigger>
          <DrawerContent
            className={`fixed top-0 left-0 h-full w-3/4 bg-white dark:bg-black transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`}
          >
            <DrawerHeader className="flex items-center justify-between p-4">
              <DrawerTitle className="text-xl font-semibold">Menú</DrawerTitle>
              <button onClick={toggleMenu} className="text-xl">
                ✕
              </button>
            </DrawerHeader>
            <DrawerDescription className="flex flex-col gap-4 p-4">
              {COPY.navigation.mobileMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg dark:text-zinc-100"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              ))}
              <div className="mt-4">
              </div>
            </DrawerDescription>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}```

## `components/Plans/Plans.jsx`
```jsx
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

export default Plans;```

## `components/Servicios.jsx`
```jsx
"use client";
import React from "react";
import Link from "next/link";
import {
  Search,
  Target,
  Settings,
  Wrench,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactAnimation from "./ContactAnimation";

/* ───────────── Copy profesional ───────────── */
const copy = {
  hook: "Optimiza tu operación industrial con tecnología confiable.",
  promise: "Integramos soluciones que reducen ineficiencias y elevan la rentabilidad.",
  proof: "Más de 70 proyectos industriales respaldan nuestra metodología.",

  title: "Consultoría tecnológica para la industria",
  subtitle: "Especialistas en ERP, CRM y MES adaptados a tus procesos.",

  problems: [
    "Procesos manuales costosos e ineficientes",
    "Riesgos por incumplimiento normativo",
    "Falta de visibilidad para planear la producción",
    "Decisiones basadas en datos desactualizados",
  ],

  service: {
    title: "Nuestro enfoque de servicio",
    slug: "integracion-sistemas",
    phases: [
      {
        title: "Diagnóstico Operativo",
        description:
          "Analizamos tu operación y definimos indicadores para medir la mejora. Entregamos un informe con oportunidades de optimización.",
        icon: Search,
        highlight: "Visión clara del punto de partida",
      },
      {
        title: "Diseño de la Solución",
        description:
          "Seleccionamos las herramientas que mejor se ajustan a tus objetivos y diseñamos la arquitectura del sistema.",
        icon: Target,
        highlight: "Tecnología alineada al negocio",
      },
      {
        title: "Implementación y Configuración",
        description:
          "Configuramos los sistemas y migramos la información con un plan que asegura la continuidad de la operación.",
        icon: Settings,
        highlight: "Despliegue sin contratiempos",
      },
      {
        title: "Desarrollo Personalizado",
        description:
          "Creamos integraciones y módulos específicos cuando los sistemas estándar no cubren requerimientos críticos.",
        icon: Wrench,
        highlight: "Soluciones a medida",
      },
      {
        title: "Capacitación y Acompañamiento",
        description:
          "Entrenamos a tu equipo con casos reales y damos seguimiento durante el arranque para garantizar la adopción.",
        icon: GraduationCap,
        highlight: "Equipo preparado desde el día uno",
      },
      {
        title: "Soporte y Mejora Continua",
        description:
          "Monitoreamos indicadores clave y proponemos ajustes que mantengan la eficiencia a largo plazo.",
        icon: ShieldCheck,
        highlight: "Acompañamiento permanente",
      },
    ],
  },

  guarantees: [
    "Diagnóstico inicial sin costo",
    "Acompañamiento durante la implementación",
    "Soporte especializado posterior al arranque",
  ],

  cta: "Agenda una consultoría sin costo",
  ctaSubtitle: "Identifica oportunidades de mejora en tu planta",
  urgency: "Disponibilidad limitada cada trimestre",
  learnMore: "Solicita información",
};

/* ───────────── Componente ───────────── */
export default function Servicios() {
  return (
    <section className="mx-auto max-w-14xl px-4 py-16">
      {/* Fases del servicio - 2 por fila */}
      <div className="mb-16">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-custom-orange dark:text-custom-orange-light mb-12">
          {copy.service.title}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {copy.service.phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white/70 dark:bg-stone-900/40 backdrop-blur-xl shadow-sm rounded-3xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] p-8 border border-white/40 dark:border-stone-700/50 relative group overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-custom-orange/5 dark:from-white/5 dark:to-custom-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Número e ícono */}
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div 
                  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 text-white font-black rounded-2xl text-2xl shadow-inner bg-gradient-to-br from-custom-orange to-orange-400 transform group-hover:rotate-6 transition-transform duration-300"
                >
                  {index + 1}
                </div>
                <div className="p-3 md:p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 text-custom-orange">
                  <phase.icon className="w-6 h-6 md:w-8 md:h-8 translate-x-[1px] translate-y-[-1px]" />
                </div>
              </div>

              {/* Contenido */}
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 mb-4">
                  <span className="text-zinc-600 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                    {phase.highlight}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 mb-4 group-hover:from-custom-orange group-hover:to-orange-400 transition-all duration-300">
                  {phase.title}
                </h4>
                <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}```

## `components/theme-provider.jsx`
```jsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false} {...props}>{children}</NextThemesProvider>
}
```

## `components/ThemeMode.jsx`
```jsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dark:bg-stone-900">
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
          />
          <span className="sr-only">Elegir Tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Claro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Oscuro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>Automático</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;
```

## `components/ui/accordion.jsx`
```jsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

## `components/ui/alert-dialog.jsx`
```jsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref} />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props} />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props} />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props} />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
```

## `components/ui/alert.jsx`
```jsx
import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props} />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
```

## `components/ui/aspect-ratio.jsx`
```jsx
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }
```

## `components/ui/badge.jsx`
```jsx
import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
```

## `components/ui/breadcrumb.jsx`
```jsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props} />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props} />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    (<Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props} />)
  );
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props} />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}>
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
```

## `components/ui/button.jsx`
```jsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
```

## `components/ui/calendar.jsx`
```jsx
"use client";
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props} />)
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
```

## `components/ui/card.jsx`
```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## `components/ui/carousel.jsx`
```jsx
"use client";
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef((
  {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  },
  ref
) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    };
  }, [api, onSelect])

  return (
    (<CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}>
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>)
  );
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    (<div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props} />
    </div>)
  );
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    (<div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props} />)
  );
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal"
        ? "-left-12 top-1/2 -translate-y-1/2"
        : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}>
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>)
  );
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute h-8 w-8 rounded-full", orientation === "horizontal"
        ? "-right-12 top-1/2 -translate-y-1/2"
        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}>
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>)
  );
})
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
```

## `components/ui/chart.jsx`
```jsx
"use client";
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
  light: "",
  dark: ".dark"
}

const ChartContext = React.createContext(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    (<ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}>
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>)
  );
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({
  id,
  config
}) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color)

  if (!colorConfig.length) {
    return null
  }

  return (
    (<style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
.map(([key, itemConfig]) => {
const color =
  itemConfig.theme?.[theme] ||
  itemConfig.color
return color ? `  --color-${key}: ${color};` : null
})
.join("\n")}
}
`)
          .join("\n"),
      }} />)
  );
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef((
  {
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey,
  },
  ref
) => {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item.dataKey || item.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        (<div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>)
      );
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    (<div
      ref={ref}
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}>
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            (<div
              key={item.dataKey}
              className={cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              )}>
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                          "h-2.5 w-2.5": indicator === "dot",
                          "w-1": indicator === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent":
                            indicator === "dashed",
                          "my-0.5": nestLabel && indicator === "dashed",
                        })}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor
                          }
                        } />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}>
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="font-mono font-medium tabular-nums text-foreground">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>)
          );
        })}
      </div>
    </div>)
  );
})
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef((
  { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
  ref
) => {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    (<div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}>
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          (<div
            key={item.value}
            className={cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            )}>
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }} />
            )}
            {itemConfig?.label}
          </div>)
        );
      })}
    </div>)
  );
})
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config,
  payload,
  key
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey = key

  if (
    key in payload &&
    typeof payload[key] === "string"
  ) {
    configLabelKey = payload[key]
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === "string"
  ) {
    configLabelKey = payloadPayload[key]
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
```

## `components/ui/checkbox.jsx`
```jsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
```

## `components/ui/collapsible.jsx`
```jsx
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

## `components/ui/command.jsx`
```jsx
"use client";
import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props} />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({
  children,
  ...props
}) => {
  return (
    (<Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>)
  );
}

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props} />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props} />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props} />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}) => {
  return (
    (<span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props} />)
  );
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
```

## `components/ui/context-menu.jsx`
```jsx
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}>
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props} />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props} />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props} />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props} />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}) => {
  return (
    (<span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props} />)
  );
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
```

## `components/ui/dialog.jsx`
```jsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}>
      {children}
      <DialogPrimitive.Close
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
```

## `components/ui/drawer.jsx`
```jsx
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props} />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}>
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props} />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
```

## `components/ui/dropdown-menu.jsx`
```jsx
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}>
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props} />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props} />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props} />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return (
    (<span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props} />)
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
```

## `components/ui/hover-card.jsx`
```jsx
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
```

## `components/ui/input.jsx`
```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
```

## `components/ui/label.jsx`
```jsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

## `components/ui/menubar.jsx`
```jsx
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props} />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props} />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}>
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef((
  { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
  ref
) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props} />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props} />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props} />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}) => {
  return (
    (<span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props} />)
  );
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
```

## `components/ui/navigation-menu.jsx`
```jsx
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props} />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}>
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true" />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props} />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props} />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}>
    <div
      className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
```

## `components/ui/pagination.jsx`
```jsx
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

const Pagination = ({
  className,
  ...props
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props} />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size,
    }), className)}
    {...props} />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
```

## `components/ui/scroll-area.jsx`
```jsx
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}>
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
```

## `components/ui/select.jsx`
```jsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("p-1", position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
```

## `components/ui/separator.jsx`
```jsx
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef((
  { className, orientation = "horizontal", decorative = true, ...props },
  ref
) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props} />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
```

## `components/ui/sheet.jsx`
```jsx
"use client";
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva } from "class-variance-authority";
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref} />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      {children}
      <SheetPrimitive.Close
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props} />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props} />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

## `components/ui/skeleton.jsx`
```jsx
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />);
}

export { Skeleton }
```

## `components/ui/sonner.jsx`
```jsx
"use client";
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props} />)
  );
}

export { Toaster }
```

## `components/ui/switch.jsx`
```jsx
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}>
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )} />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
```

## `components/ui/table.jsx`
```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props} />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props} />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props} />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props} />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props} />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props} />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props} />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

## `components/ui/tabs.jsx`
```jsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## `components/ui/textarea.jsx`
```jsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
```

## `components/ui/toggle-group.jsx`
```jsx
"use client";
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    (<ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(toggleVariants({
        variant: context.variant || variant,
        size: context.size || size,
      }), className)}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>)
  );
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
```

## `components/ui/toggle.jsx`
```jsx
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
```

## `components/ui/tooltip.jsx`
```jsx
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
```

## `components/WhyWe/WhyWe.jsx`
```jsx
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

export default WhyWe;```

## `lib/utils.js`
```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

