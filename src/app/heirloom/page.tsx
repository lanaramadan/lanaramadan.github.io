import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

import Details from "@/app/components/case-studies/details";
import Header from "@/app/components/case-studies/header";

export default async function HeirloomPage() {
  return (
    <div>
      <NavigationBar
        color="text-offwhite"
        sticky={true}
      />
      <div className="bg-offwhite w-full">
        <Header
          gradient="/case-studies/heirloom/header-gradient.png"
          mockup="/case-studies/heirloom/header-mockup.png"
          alt="Heirloom app mockup"
          
        />

        <div className="px-4 md:px-32">
          <Details
            title="Heirloom"
            overview={`Heirloom was designed solo in 48 hours for the 2026 Rice Design-A-Thon, with the prompt: "Design a platform that helps bridge generational gaps." Rather than approach generational connection abstractly, I anchored the concept in something concrete, the family kitchen, and the knowledge that lives there and nowhere else.\nHeirloom is a digital space where family recipes are preserved the way they were originally taught, through voice, memory, and shared experience. It bridges generational gaps by capturing not just ingredients and instructions, but the stories, dialects, and lived wisdom behind each dish. Designed to be slow, human, and intergenerational, Heirloom preserves more than flavor. It carries memory, belonging, and culture from one kitchen to the next.`}
            timeline="Jan 30 – Feb 1, 2026"
            duration="48 Hour Design-A-Thon"
            role="UX/UI Designer"
            tools={["Figma"]}
            textColor="text-[#918432]"
          />
        </div>
      </div>

      <Footer mini={true} background="bg-offwhite" color="text-[#918432]" />
    </div>
  );
}
