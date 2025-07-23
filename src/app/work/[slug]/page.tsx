import { notFound } from "next/navigation";
import projectData from "@/data/projects.json";
import { Project } from "@/types/project";
import NavigationBar from "@/app/components/navigation/navigationBar";
import Footer from "@/app/components/navigation/footer";
import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
import CurvedLine from "@/app/components/curvedLine";
// import { FaArrowLeft } from "react-icons/fa";


type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
};

// render webpages
export async function generateStaticParams() {
  const slugs = [
    ...projectData.programmingProjects,
    ...projectData.designProjects,
  ].map((p) => ({ slug: p.webpage }));

  return slugs;
}

export default function ProjectPage({ params }: Props) {
  // function goBack() {
  //   if (typeof window !== "undefined") {
  //     window.history.back();
  //   }
  // }

  const allProjects = [
    ...projectData.programmingProjects,
    ...projectData.designProjects,
  ];

  const project: Project | undefined = allProjects.find(
    (p) => p.webpage === params.slug
  );

  if (!project) return notFound();

  const { name, images, description, tools, links, color, desktop } = project;
  const { start, end } = project.duration;
  
  return (
    <div className="min-h-screen py-2 px-12 w-full flex flex-col items-center" style={{ color: color }}>
        <NavigationBar/>

        {/* banner */}
        <div className="relative w-[88vw] rounded-3xl overflow-visible">
          {/* bg */}
          <div
            className="absolute top-0 left-0 w-full h-[75vh] rounded-3xl bg-current opacity-40"
            style={{
              zIndex: 0,
            }}
          />

          {/* back arrow top-left */}
          {/* <button
            aria-label="Go back"
            onClick={}
            className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 transition"
          >
            <CurvedLine width={175} stroke={7}/>
          </button> */}
          

          {/* banner text */}
          <div className="relative flex flex-col items-center z-20 pt-8">
            <h2 className="text-lg font-geist-mono">{start} - {end}</h2>
            <h1 className="text-8xl font-[family-name:var(--font-new-spirit-condensed)] mb-2">{name.toUpperCase()}</h1>
            {desktop ? (
              <DesktopThumbnail image={images[0]} scale={3}/>
            ) : (
              <PhoneThumbnail images={images} scale={3}/>
            )}
          </div>
      
      </div>

      {/* overview, tools, links */}
      <div className="flex flex-col md:flex-row justify-between w-[68vw] pt-12 text-xl font-ibm-plex-sans">
        
        {/* overview */}
        <div className="flex flex-col items-start w-[60%]">
          <div className="flex flex-col items-center">
            <h2 className="font-medium text-4xl mb-[-.1em] font-[family-name:var(--font-new-spirit-condensed)]">Overview</h2>
            <CurvedLine width={175} stroke={7}/>
          </div>
          
          <div className="text-[#261817]">
            {description}
          </div>
        </div>

        <div className="flex flex-col items-center">
          {/* tools */}
          <div>
            <div className="flex flex-col items-center">
              <h2 className="font-medium text-4xl mb-[-.1em] font-[family-name:var(--font-new-spirit-condensed)]">Tools</h2>
              <CurvedLine width={175} stroke={7}/>
            </div>
            <ul className="text-[#261817]">
              {tools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>

          {/* links */}
          {links?.github && (
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h2 className="font-medium text-4xl mb-[-.1em] font-[family-name:var(--font-new-spirit-condensed)]">Links</h2>
                <CurvedLine width={175} stroke={7}/>
              </div>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline italic hover:drop-shadow-[0_0_8px_currentColor] text-[#261817]"
              >
                GitHub Repository
              </a>
            </div>
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
}
