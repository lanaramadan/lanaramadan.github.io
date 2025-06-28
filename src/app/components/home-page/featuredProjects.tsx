import MiniProjectCard from "../miniProjectCard"
import CurvedLine from "../curvedLine";

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

      <div className="flex-grow flex items-center justify-center gap-10">  
          <MiniProjectCard
            project="Zotgle"
            imageSrc="/zotgle.png"
            link="https://github.com/lanaramadan/zotgle"
            desktop={true}
          />
          <MiniProjectCard
            project="Zotgle"
            imageSrc="/zotgle.png"
            link="https://github.com/lanaramadan/zotgle"
            desktop={true}
          />

          <MiniProjectCard
            project="Zotgle"
            imageSrc="/zotgle.png"
            link="https://github.com/lanaramadan/zotgle"
            desktop={true}
          />

          <MiniProjectCard
            project="Zotgle"
            imageSrc="/zotgle.png"
            link="https://github.com/lanaramadan/zotgle"
            desktop={true}
          />
        </div>
      </div>
  );
}

