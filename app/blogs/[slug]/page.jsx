import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  if (!params?.slug) return {};
  const post = await getPost({ slug: params.slug });
  const siteUrl = "https://alphaqueb.com";
  const imageUrl = new URL(post.frontMatter.image, siteUrl).href;
  return { title: post.frontMatter.title || "Alphaqueb", description: post.frontMatter.description, openGraph: { title: post.frontMatter.title, description: post.frontMatter.description, url: `${siteUrl}/blogs/${params.slug}`, images: [{ url: imageUrl, width: 1200, height: 630, alt: post.frontMatter.title }] }, twitter: { card: "summary_large_image", title: post.frontMatter.title, description: post.frontMatter.description, images: [imageUrl] }, metadataBase: new URL(siteUrl) };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "blogs");
  return fs.readdirSync(postsDirectory).map((filename) => ({ slug: filename.replace(".mdx", "") }));
}

async function getPost({ slug }) {
  const filePath = path.join(process.cwd(), "blogs", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();
  const markdownFile = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter, content } = matter(markdownFile);
  if (!frontMatter.title) notFound();
  return { frontMatter, slug, content };
}

export default async function BlogPostPage({ params }) {
  if (!params?.slug) notFound();
  const post = await getPost({ slug: params.slug });
  return <article className="aq-blog-article"><div className="aq-eyebrow">Insight · {new Date(post.frontMatter.date).toLocaleDateString("es-MX")}</div><h1>{post.frontMatter.title}</h1><div className="aq-blog-cover"><Image src={post.frontMatter.image} alt={post.frontMatter.title} fill priority /></div><div className="aq-mdx"><MDXRemote source={post.content} /></div></article>;
}
