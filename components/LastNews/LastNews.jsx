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
  const posts = getPosts();
  return (
    <section className="py-8 text-center ">
      <h2 className="text-3xl font-semibold mb-6 dark:text-white">Últimas noticias</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {posts.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.slug} className="block rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-zinc-800">
            <div className="relative h-48 overflow-hidden ">
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