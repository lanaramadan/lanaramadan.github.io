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
          
          <div className="flex gap-3 w-[88vw] overflow-x-auto mt-5">
            {programmingProjects.map((project, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 pr-3 last:pr-0 last:border-none dash-line"
              >
                <MiniProjectCard
                  project={project}
                  workPage={true}
                  index={index}
                />
              </div>
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
          
          <div className="flex gap-5 w-[88vw] overflow-x-auto mt-5">
            {designProjects.map((project, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 pr-3 last:pr-0 last:border-none dash-line"
              >
                <MiniProjectCard
                  project={project}
                  workPage={true}
                  index={index}
                />
              </div>
            ))}
          </div>

        </section>



      </div>

      <Footer />
    </div>
  );
}