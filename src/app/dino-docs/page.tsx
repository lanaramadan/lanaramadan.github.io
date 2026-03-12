import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

import Details from "@/app/components/case-studies/details";
import Header from "@/app/components/case-studies/header";
import Subtitle from "@/app/components/case-studies/subtitle";
import Emphasis from "@/app/components/case-studies/emphasis";

export default async function DinoDocsPage() {
  return (
    <div>
      <NavigationBar color="text-offwhite" sticky={true} />

      {/* Case Study  */}
      <div className="bg-offwhite w-full">
        <Header
          gradient="/case-studies/dino-docs/header-gradient.png"
          mockup="/case-studies/dino-docs/header-mockup.png"
          alt="Dino Docs app mockup"
        />

        <div className="px-4 md:px-32">
          <Details
            title="Dino Docs"
            overview={`Dino Docs is a kid-friendly, collaborative document editor that makes writing, collaboration, and creative learning feel approachable for elementary school students. As the sole designer on the team, I led the full design process while working closely with my teammates on ideation, strategy, and feature scoping. The result is a platform that gives children the tools to create and share schoolwork while giving teachers and parents the visibility they need to support them.`}
            timeline="Nov 2024 – Dec 2024"
            duration="2 months"
            role="UX/UI Design Lead"
            tools={["Figma", "Figjam"]}
            team={[
              "Cyrus Liu",
              "Calvin Nhat Nguyen",
              "Elane Elza Shane",
              "Benjamin Wargowski",
            ]}
            textColor="text-[#80C079]"
          />
        </div>

        {/* main body */}
        <div>
          {/* the problem */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="The Problem" textColor="text-[#80C079]" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Many students struggle to stay engaged with digital learning
              tools, especially at younger ages. Traditional platforms feel
              overwhelming, repetitive, or designed for adults — making it hard
              for kids to build consistent study habits or express themselves
              creatively. Teachers and parents, meanwhile, need structure and
              oversight without sacrificing the playfulness that keeps kids
              engaged.
              <br />
              <br />
            </p>
            <p className="font-ibm-plex-sans text-text text-lg">
              Three questions guided the project:
            </p>
            <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
              <li>
                How should users input their preferences without it feeling like
                a survey?
              </li>
              <li>
                What&apos;s the right level of detail on a discovery card?
              </li>
              <li>How do we make filtering feel fast, not tedious?</li>
            </ul>
          </div>

          {/* Personas */}
          <div className="px-4 md:px-32 py-8">
          <Subtitle text="Understanding the Users" textColor="text-[#80C079]" />
            <Emphasis text="Personas" />
            <p className="font-ibm-plex-sans text-text text-lg">
            We built three personas to represent the full ecosystem of people this product serves, including students and teachers.
            </p>
            <img
              src="/case-studies/dino-docs/personas.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>
        </div>

        <Footer mini={true} background="bg-offwhite" color="text-[#80C079]" />
      </div>
    </div>
  );
}
