import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Image from "next/image";

const readersDir = path.join(process.cwd(), "content", "readers");

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
      dutchTitle?: string;
      coverImage?: string;
      level?: string;
      summary?: string;
      vocab?: string;
    },
    contentHtml,
  };
}

export default async function ReaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reader = await getReader(slug);

  if (!reader) {
    notFound();
  }

  const { frontmatter, contentHtml } = reader;
  const coverSrc = frontmatter.coverImage;

  return (
    <main className="raleway-font align-center" style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      {coverSrc ? (
        <Image className="image-border-radius" src={coverSrc} alt="Cover" width={700} height={300} />
      ) : null}
      <h1 className="orange-text bold-text">{frontmatter.title ?? slug}</h1>
      <h4 className="dark-gray-text">{frontmatter.dutchTitle ?? slug}</h4>

      {frontmatter.level ? (
        <p style={{ opacity: 0.8, marginTop: 0 }}>
          <strong>Level:</strong> {frontmatter.level}
        </p>
      ) : null}

      <div className="dark-gray-text align-left raleway-font" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
