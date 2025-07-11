import MiniProjectCard from "../miniProjectCard";
import CurvedLine from "../curvedLine";

const featuredProjects = [
  {
    name: "Movie Mania",
    overview: "A movie recommendation system",
    tools: ["Java", "JDBC", "MySQL"],
    links: ["https://github.com/lanaramadan/movie-mania"],
    duration: { start: "2023-01", end: "2023-04" },
    images: ["movie-mania.png"],
    desktop: true,
  },
  {
    name: "Zotgle",
    overview: "A search engine clone",
    tools: ["React", "Node.js", "Express"],
    links: ["https://github.com/lanaramadan/zotgle"],
    duration: { start: "2023-05", end: "2023-08" },
    images: ["zotgle.png"],
    desktop: true,
  },
  {
    name: "La Pena",
    overview: "A cultural guide app",
    tools: ["React Native", "TypeScript"],
    links: ["https://github.com/lanaramadan/la-pena"],
    duration: { start: "2023-09", end: "2023-12" },
    images: ["la-pena.png"],
    desktop: true,
  },
  {
    name: "Gem",
    overview: "A gem trading platform",
    tools: ["Angular", "Java"],
    links: ["https://github.com/lanaramadan/gem"],
    duration: { start: "2024-01", end: "2024-03" },
    images: ["gem-1.png", "gem-2.png", "gem-3.png"],
    desktop: false,
  },
  {
    name: "Dino Docs",
    overview: "A dinosaur encyclopedia",
    tools: ["Next.js", "GraphQL"],
    links: ["https://github.com/lanaramadan/dino-docs"],
    duration: { start: "2024-04", end: "2024-06" },
    images: ["dino-docs.png"],
    desktop: true,
  },
  {
    name: "Crowdy",
    overview: "A social networking app",
    tools: ["Flutter", "Firebase"],
    links: ["https://github.com/lanaramadan/crowdy"],
    duration: { start: "2024-07", end: "2024-09" },
    images: ["crowdy.png"],
    desktop: true,
  },
];

export default function FeaturedProjects() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center pb-6">
        <h2
          className="
            font-medium
            text-xl
            sm:text-5xl
            font-[family-name:var(--font-new-spirit-condensed)]
          "
        >
          Selected Projects
        </h2>
        <CurvedLine />
      </div>

      <p className="font-geist-mono text-lg font-bold">programming</p>
      <div className="flex gap-1 px-12">
        {featuredProjects.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 pr-10 last:pr-0 last:border-none border-dashed-custom"
          >
            <MiniProjectCard project={project} workPage={true} index={index} />
          </div>
        ))}
      </div>

      <p className="font-geist-mono text-lg font-bold">product design</p>
      <div className="flex gap-1 px-12">
        {featuredProjects.slice(3, 6).map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 pr-10 last:pr-0 last:border-none border-dashed-custom"
          >
            <MiniProjectCard project={project} workPage={true} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
