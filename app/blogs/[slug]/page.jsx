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
