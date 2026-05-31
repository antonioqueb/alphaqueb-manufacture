import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

function getPosts() {
  const postsDirectory = path.join(process.cwd(), "blogs");
  const files = fs.readdirSync(postsDirectory);
  return files.map((filename) => {
    const markdownFile = fs.readFileSync(path.join(postsDirectory, filename), "utf-8");
    const { data: frontMatter } = matter(markdownFile);
    const slug = filename.replace(".mdx", "");
    return { frontMatter, slug };
  }).sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date));
}

export default function LastNews() {
  const posts = getPosts().slice(0, 45);
  return <section className="aq-blog-list"><div className="aq-wrap"><div className="aq-section-head"><span className="aq-section-tag">Insights</span><div><h1 className="aq-section-title">Lecturas para equipos que <span className="accent">deciden</span>.</h1><p className="aq-section-lead">Notas técnicas, marcos de decisión y aprendizajes para manufactura, SCADA, automatización y transformación digital.</p></div></div><div className="aq-insights-grid">{posts.map((post) => <Link href={`/blogs/${post.slug}`} key={post.slug} className="aq-blog-card"><div className="aq-blog-img"><Image src={post.frontMatter.image} alt={post.frontMatter.title} fill /></div><div className="aq-blog-body"><h3 className="aq-blog-title">{post.frontMatter.title}</h3><p className="aq-blog-desc">{post.frontMatter.description}</p><span className="aq-blog-date">{new Date(post.frontMatter.date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}</span></div></Link>)}</div></div></section>;
}
