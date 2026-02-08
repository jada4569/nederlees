import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

type ReaderCard = {
  slug: string;
  title: string;
  level: "A0" | "A1" | "A2" | "B1" | string;
  summary?: string;
  coverImage?: string;
};

const readersDir = path.join(process.cwd(), "content", "readers");
const LEVELS = ["A0", "A1", "A2", "B1"] as const;

function getAllReaders(): ReaderCard[] {
  const files = fs.readdirSync(readersDir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(readersDir, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: (data.title as string) ?? slug,
      coverImage: (data.coverImage as string) ?? "",
      level: (data.level as string) ?? "A0",
      summary: (data.summary as string) ?? "",
    };
  });
}

function groupByLevel(readers: ReaderCard[]) {
  const grouped: Record<string, ReaderCard[]> = {};
  for (const lvl of LEVELS) grouped[lvl] = [];

  for (const r of readers) {
    if (!grouped[r.level]) grouped[r.level] = [];
    grouped[r.level].push(r);
  }

  for (const lvl of Object.keys(grouped)) {
    grouped[lvl].sort((a, b) => a.title.localeCompare(b.title));
  }

  return grouped;
}

export default function Readers() {
  const readers = getAllReaders();
  const grouped = groupByLevel(readers);

  return (
    <div>
      <main>
        <div className="container raleway-font off-white-bg py-5">
          <div className="align-center">
            <Image className="image-border-radius img-fluid" src="/book.jpg" alt="Open book" width={550} height={550} />
          </div>

          <h2 className="bold-font orange-text align-center py-3">
            All Our Readers
          </h2>

          <p className="dark-gray-text align-center mb-4">
            Browse graded readers by CEFR level.
          </p>

          <div className="row justify-content-center g-2">
            {LEVELS.map((level) => (
              <div className="col-6 col-md-3" key={level}>
                <a
                  href={`#${level}`}
                  className="reader-button w-100 py-2 align-center d-block"
                >
                  {level}
                </a>
              </div>
            ))}
          </div>

          {LEVELS.map((level) => (
            <div className="reader-section" id={level} key={level}>
              <h4 className="dark-green-text bold-font pt-4 pt-md-5 mb-3">
                Level {level} Readers
              </h4>

              <div className="row g-3">
                {(grouped[level] ?? []).map((r) => (
                  <div className="col-12 col-sm-6 col-lg-3" key={r.slug}>
                    <div className="card h-100">
                      {r.coverImage ? (
                        <Image src={r.coverImage} className="card-img-top" alt={`${r.title} cover`} width={300} height={200} style={{ objectFit: "cover" }} />
                      ) : null}

                      <div className="card-body">
                        <h5 className="card-title dark-green-text bold-font">
                          {r.title}
                        </h5>

                        {r.summary ? (
                          <p className="card-text dark-gray-text">
                            {r.summary}
                          </p>
                        ) : null}

                        <Link href={`/readers/${r.slug}`} className="btn green-button w-100">
                          Read Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {(grouped[level] ?? []).length === 0 ? (
                  <p className="dark-gray-text">
                    No {level} readers yet.
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
