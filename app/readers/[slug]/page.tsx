import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

const readersDir = path.join(process.cwd(), "content", "readers");

// This tells Next.js which slugs exist at build time
export async function generateStaticParams() {
  const files = fs.readdirSync(readersDir).filter((f) => f.endsWith(".md"));

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

async function getReader(slug: string) {
  const filePath = path.join(readersDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    frontmatter: data as {
      title?: string;
      dutchtitle?: string;
      level?: string;
      description?: string;
      coverImage?: string;
    },
    contentHtml,
  };
}

export default async function ReaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;          // ✅ unwrap here
  const reader = await getReader(slug);

  if (!reader) {
    notFound();
  }

  const { frontmatter, contentHtml } = reader;

  return (
    <main className="raleway-font" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 className="orange-text bold-text">{frontmatter.title ?? slug}</h1>
      <h4>{frontmatter.dutchtitle ?? slug}</h4>

      {frontmatter.level ? (
        <p style={{ opacity: 0.8, marginTop: 0 }}>
          <strong>Level:</strong> {frontmatter.level}
        </p>
      ) : null}

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
