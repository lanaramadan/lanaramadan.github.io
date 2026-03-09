import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

import Details from "@/app/components/case-studies/details";
import Header from "@/app/components/case-studies/header";

export default async function RoamPage() {
  return (
    <div>
      <NavigationBar
        color="text-offwhite"
        sticky={true}
      />
      <div className="bg-offwhite w-full">
        <Header
          gradient="/case-studies/roam/header-gradient.png"
          mockup="/case-studies/roam/header-mockup.png"
          alt="Roam app mockup"
          
        />

        <div className="px-4 md:px-32">
          <Details
            title="Roam"
            overview={`Roam is a scavenger-hunt style exploration app that turns everyday outings into guided adventures. Users create or join "roams" — customizable, bite-sized routes through their city — then earn points, share experiences with friends, and discover local spots they'd never find on their own.\nAs design lead, I guided the team's design direction, established the shared design system that allowed us to work in parallel, and led all usability testing. Individual sections were wireframed collaboratively, with each designer owning a core flow before we reconciled everything into a unified system.`}
            timeline="Oct 2025 – Dec 2025"
            duration="3 months"
            role="UX/UI Design Lead"
            tools={["Figma", "Figjam", "Airtable"]}
            team={[
              "Pacey Diep",
              "Souzen Khan",
              "Samanta Jimenez Sandate",
              "Lana Wang",
              "Fatima Waqar",
            ]}
            textColor="text-[#6E1622]"
          />
        </div>
      </div>

      <Footer mini={true} background="bg-offwhite" color="text-[#6E1622]" />
    </div>
  );
}
