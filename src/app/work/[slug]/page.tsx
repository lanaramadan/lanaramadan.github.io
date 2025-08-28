import Link from "next/link";
import { notFound } from "next/navigation";
import projectData from "@/data/projects.json";
import { Project } from "@/types/project";
import NavigationBar from "@/app/components/navigation/navigationBar";
import Footer from "@/app/components/navigation/footer";
import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
import CurvedLine from "@/app/components/curvedLine";
import BackButton from "@/app/components/backButton";
import StarBulletIcon from "@/app/components/icons/starBulletIcon";

// render webpages
export function generateStaticParams() {
  const slugs = [
    ...projectData.programmingProjects,
    ...projectData.designProjects,
  ].map((p) => ({ slug: p.webpage }));

  return slugs;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const allProjects = [
    ...projectData.programmingProjects,
    ...projectData.designProjects,
  ];

  const project: Project | undefined = allProjects.find(
    (p) => p.webpage === slug
  );

  if (!project) return notFound();

  const { name, images, description, tools, links, color, desktop } = project;
  const { start, end } = project.duration;

  return (
    <div
      className="min-h-screen py-2 px-4 w-full flex flex-col items-center"
      style={{
        color: color,
        zIndex: 0,
        backgroundImage: `linear-gradient(
        320deg,
        #fcfbf7 0%,
        ${color}1F 100%
      )`,
      }}>
      <NavigationBar />

      {/* banner */}
      <div className="relative w-[92vw] rounded-3xl overflow-visible">
        {/* bg */}
        {desktop ? (
          <div
            className="absolute top-0 left-0 w-full h-[75vh] rounded-3xl bg-current opacity-40"
            style={{
              zIndex: 0,
            }}
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-[60vh] rounded-3xl bg-current opacity-40"
            style={{
              zIndex: 0,
            }}
          />
        )}

        <div className="relative w-full flex justify-center pt-5 px-5">
          {/* back arrow */}
          <BackButton />

          {/* banner text */}
          <div className="flex flex-col items-center z-20">
            <h2 className="text-lg font-geist-mono">
              {start === end ? `${start} - Hackathon` : `${start} - ${end}`}
            </h2>
            <h1 className="text-8xl font-[family-name:var(--font-new-spirit-condensed)] mb-2">
              {name.toUpperCase()}
            </h1>
            {desktop ? (
              <DesktopThumbnail image={images[0]} scale={3} />
            ) : (
              <PhoneThumbnail images={images} scale={3} count={4} />
            )}
          </div>
        </div>
      </div>

      {/* overview, tools, links */}
      <div className="flex flex-col md:flex-row justify-between w-[74vw] pt-12 text-xl font-ibm-plex-sans">
        {/* overview */}
        <div className="flex flex-col items-start w-[60%]">
          <div className="flex flex-col items-center">
            <h2 className="font-medium text-4xl mb-[-.1em] font-[family-name:var(--font-new-spirit-condensed)]">
              Overview
            </h2>
            <CurvedLine width={175} stroke={7} />
          </div>

          <div className="text-[#261817]">{description}</div>
        </div>

        <div className="flex flex-col items-center">
          {/* tools */}
          <div>
            <div className="flex flex-col items-center">
              <h2 className="font-medium text-4xl mb-[-.1em] font-[family-name:var(--font-new-spirit-condensed)]">
                Tools
              </h2>
              <CurvedLine width={175} stroke={7} />
            </div>
            <ul className="text-[#261817]">
              {tools.map((tool, idx) => (
                <span key={idx} className="flex gap-1 items-center">
                  <StarBulletIcon color={color} />
                  <li>{tool}</li>
                </span>
              ))}
            </ul>
          </div>

          {/* links */}
          {(links?.github || links?.figmaDemo || links?.pitchDeck) && (
            <div className="flex flex-col pt-4">
              <div className="flex flex-col items-center">
                <h2 className="font-medium text-4xl mb-[-.1em] font-[family-name:var(--font-new-spirit-condensed)]">
                  Links
                </h2>
                <CurvedLine width={175} stroke={7} />
              </div>

              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline italic hover:drop-shadow-[0_0_8px_currentColor] text-current">
                  GitHub Repository
                </a>
              )}

              {links.figmaDemo && (
                <a
                  href={links.figmaDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline italic hover:drop-shadow-[0_0_8px_currentColor] text-current">
                  Figma Demo
                </a>
              )}

              {links.pitchDeck && (
                <a
                  href={links.pitchDeck}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline italic hover:drop-shadow-[0_0_8px_currentColor] text-current">
                  Pitch Deck
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* case study button */}
      {links?.caseStudy === "" ? (
        <button className="px-12 py-2 rounded-2xl bg-current mt-10" disabled>
          <p className="text-2xl font-medium font-geist-mono text-[#FCFBF7]">
            Case Study Coming Soon ✨
          </p>
        </button>
      ) : links?.caseStudy ? (
        <Link href={links.caseStudy} target="_blank" rel="noopener noreferrer">
          <button className="hover:drop-shadow-[0_0_8px_currentColor] px-12 py-2 rounded-2xl bg-current mt-10">
            <p className="text-2xl font-medium font-geist-mono text-[#FCFBF7]">
              View Case Study ↗
            </p>
          </button>
        </Link>
      ) : null}

      <Footer />
    </div>
  );
}
