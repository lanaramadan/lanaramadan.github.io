import NavigationBar from "../components/navigation/navigationBar";
import Footer from "../components/navigation/footer";
import MiniProjectCard from "../components/miniProjectCard";

import projectData from "../../../public/data/projects.json";

export default function Work() {
  const programmingProjects = projectData.programmingProjects;
  const designProjects = projectData.designProjects;

  return (
    <div className="min-h-screen py-8 px-12">
        <NavigationBar/>

      <div
        className="
          w-full 
          flex 
          flex-col
          gap-12
          justify-between 
          items-center
          pb-10
          px-12
        "
      >
        <section>
          <h2 className="
            font-medium
            text-xl
            sm:text-4xl
            font-[family-name:var(--font-new-spirit-condensed)]
          ">Programming</h2>
          
          <div className="flex gap-5 w-[88vw] overflow-x-auto">
            {programmingProjects.map((project, index) => (
              <MiniProjectCard
                key={index}
                project={project.name}
                imageSrc="/placeholder.png"
                link={project.links[0]}
                desktop={true}
              />
            ))}
          </div>
        </section>

        <hr className="border-t border-2 border-current w-[88vw]" />
        
        <section>
          <h2 className="
            font-medium
            text-xl
            sm:text-4xl
            font-[family-name:var(--font-new-spirit-condensed)]
          ">Product Design</h2>
          
          <div className="flex gap-5 w-[88vw] overflow-x-auto">
            {designProjects.map((project, index) => (
              <MiniProjectCard
                key={index}
                project={project.name}
                imageSrc="/placeholder.png"
                link={project.links[0]}
                desktop={true}
              />
            ))}
          </div>
        </section>



      </div>

      <Footer />
    </div>
  );
}