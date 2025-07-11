import { notFound } from "next/navigation";
import projectData from "@/data/projects.json";
import { Project } from "@/types/project";
import NavigationBar from "@/app/components/navigation/navigationBar";
import Footer from "@/app/components/navigation/footer";
import DesktopThumbnail from "@/app/components/desktopThumbnail";
import PhoneThumbnail from "@/app/components/phoneThumbnail";
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

  const { name, images, desktop} = project;
  const { start, end } = project.duration;

  return (
    <div className="min-h-screen py-2 px-12 w-full flex flex-col items-center">
        <NavigationBar/>

        {/* banner */}
        <div className="relative w-[88vw] rounded-3xl overflow-visible">
          {/* bg */}
          <div
            className="absolute top-0 left-0 w-full h-[75vh] rounded-3xl bg-current opacity-40"
            style={{
              // transform: "translateY(-10%)",
              zIndex: 0,
            }}
          />

          {/* back arrow top-left */}
          {/* <button
            aria-label="Go back"
            onClick={goBack}
            className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 transition"
          >
            <FaArrowLeft className="w-5 h-5 text-black" />
          </button> */}
          

          {/* content - todo overlay onto of bg (bg should be off centered so laptop is slightly below the bottom edge of bg) */}
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

        
    {/* <div className="p-12">
      <h1 className="text-4xl font-geist-mono mb-4">{project.name}</h1>
      <p className="text-lg font-ibm-plex-sans text-[#261817] mb-6">
        {project.description}
      </p>
      <ul className="list-disc ml-5 text-md">
        {project.tools.map((tool, idx) => (
          <li key={idx}>{tool}</li>
        ))}
      </ul> */}

      <Footer />
    </div>
  );
}
