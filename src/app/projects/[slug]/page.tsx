import { notFound } from "next/navigation";
import projectData from "@/data/projects.json";

import NavigationBar from "@/app/components/navigation/navigationBar";
import Footer from "@/app/components/navigation/footer";
import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
import CurvedLine from "@/app/components/curvedLine";
import BackButton from "@/app/components/backButton";
import StarBulletIcon from "@/app/components/icons/starBulletIcon";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = projectData.designProjects.find(
    (p) => p.webpage === `projects/${slug}`
  );

  if (!project) return notFound();

  const { name, images, description, tools, color, desktop } = project;
  const { start, end } = project.duration;

  return (
    <div
      className="min-h-screen py-2 px-4 w-full flex flex-col items-center bg-background"
      style={{
        color: color,
        zIndex: 0,
        backgroundImage: `linear-gradient(
        320deg,
        #fcfbf7 0%,
        ${color}1F 100%
      )`,
      }}
    >
      <NavigationBar background={true} />

      {/* banner */}
      <div className="relative w-[92vw] rounded-3xl overflow-visible mt-24">
        {/* bg */}
        {desktop ? (
          <div
            className="absolute top-0 left-0 w-full h-[75vh] rounded-3xl bg-medium"
            style={{
              zIndex: 0,
            }}
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-[60vh] rounded-3xl bg-medium"
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
            <h1 className="text-8xl font-new-spirit-condensed mb-2">
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
            <h2 className="font-medium text-4xl mb-[-.1em] font-new-spirit-condensed text-dark">
              Overview
            </h2>
            <CurvedLine width={175} stroke={7} className="text-dark"/>
          </div>

          <div className="text-text">{description}</div>
        </div>

        <div className="flex flex-col items-center">
          {/* tools */}
          <div>
            <div className="flex flex-col items-center">
              <h2 className="font-medium text-4xl mb-[-.1em] font-new-spirit-condensed text-dark">
                Tools
              </h2>
              <CurvedLine width={175} stroke={7} className="text-dark"/>
            </div>
            <ul className="text-text">
              {tools.map((tool, idx) => (
                <span key={idx} className="flex gap-1 items-center">
                  <StarBulletIcon color={color} />
                  <li>{tool}</li>
                </span>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer mini={true} />
    </div>
  );
}
