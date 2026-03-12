import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

import Details from "@/app/components/case-studies/details";
import Header from "@/app/components/case-studies/header";
import Subtitle from "@/app/components/case-studies/subtitle";
import Emphasis from "@/app/components/case-studies/emphasis";

export default async function HeirloomPage() {
  return (
    <div>
      <NavigationBar color="text-offwhite" sticky={true} />

      {/* Case Study  */}
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

        {/* main body */}
        <div>
          {/* the problem */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="The Problem" textColor="text-[#918432]" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Think about the last time a grandparent or elder cooked something
              for you. They probably didn&apos;t follow a recipe. They knew when the
              dough felt right, how long to simmer something &quot;until it smells
              ready,&quot; which spice to add &quot;a little extra of&quot; without measuring.
              That knowledge is exactly what traditional recipe apps can&apos;t
              capture.
              <br />
              <br />
              When elders pass, that knowledge often goes with them.
              <br />
              <br />
              Existing recipe platforms are built for optimization: clean
              ingredient lists, precise measurements, step-by-step instructions.
              They&apos;re useful, but they&apos;re not human. They don&apos;t capture a
              grandmother&apos;s voice, the story of where a dish came from, or the
              feeling of standing beside someone in a kitchen and learning just
              by being there.
              <br />
              <br />
            </p>
            <Emphasis text="How might we preserve the full emotional and cultural experience of family cooking — not just the recipe itself?" />
          </div>

          {/* Research */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Research" textColor="text-[#918432]" />

            <Emphasis text="The Generational Divide" />
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Generational communication gaps within families have reached
              concerning levels. Research indicates that 50% of adolescents and
              40% of parents acknowledge a meaningful gap exists — yet the same
              research emphasizes that empathy-driven, shared activities can
              effectively bridge these divides. Cooking together is exactly that
              kind of activity.
            </p>

            <Emphasis text="Recipes as Cultural Memory" />
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              55% of Americans have a treasured family recipe passed down
              through generations, with over 52% of those recipes being more
              than 25 years old. Research on food-evoked nostalgia shows that
              revisiting familiar dishes promotes social connection and identity
              continuity across the lifespan. A recipe isn&apos;t just a method —
              it&apos;s a memory, an identity, a piece of someone.
            </p>

            <Emphasis text="Market Landscape" />
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              The global recipe app market was valued at approximately $724
              million in 2024 and is projected to reach $2.27 billion by 2033.
              81% of U.S. consumers prepare more than half of their meals at
              home, and 53% used a recipe app or website at least once a month
              in 2023. Most tellingly: social and sharing features influence
              approximately 45% of user interactions on recipe platforms. People
              don&apos;t just want instructions — they want community and shared
              experience alongside them.
            </p>

            <Emphasis text="Design Implications" />
            <p className="font-ibm-plex-sans text-text text-lg">
              These findings pointed toward a specific and underserved gap: a
              recipe platform that acts as an intergenerational bridge,
              transforming cooking into a storytelling practice that evokes
              nostalgia, reinforces identity and belonging, and creates
              meaningful human connection across generations — while being
              genuinely accessible to the elders at the heart of it.
            </p>
          </div>

          {/* Design decisions */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Design Decisions" textColor="text-[#918432]" />

            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Every decision in Heirloom was made in direct response to
              something the research revealed. In a 48-hour sprint, there&apos;s no
              room for arbitrary choices, every hour spent on a feature is an
              hour not spent on another. Each decision below reflects that
              constraint.
            </p>

            <Emphasis text="Accessibility First" />
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Because Heirloom is built for multiple generations, accessibility
              wasn&apos;t a feature to add at the end. It was a design constraint
              from the start. I implemented WCAG AA-compliant high-contrast
              colors, selected legible and scannable typefaces, and avoided
              overly dense layouts. Touch targets and spacing were designed for
              users with motor challenges. Clear hierarchy and generous spacing
              reduce cognitive load while keeping the interface visually
              engaging for younger users.
              <br />
              The goal was an app that an 80-year-old could pick up and navigate
              independently, because if elders can&apos;t use it comfortably, the
              whole concept falls apart.
            </p>

            <Emphasis text="Voice-First Features" />
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              The insight that many recipes can&apos;t be written down led directly
              to Heirloom&apos;s most distinctive feature: elder narration. Recipes
              are paired with recorded audio walkthroughs so younger users are
              guided through cooking as if standing beside someone in the
              kitchen. This preserves dialects, personality, and the kind of
              lived context that a typed recipe can never hold.
            </p>

            <Emphasis text="No Likes. No Followers" />
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Likes and followers were excluded entirely. The reasoning:
              Heirloom&apos;s primary user, the elder sharing a recipe, shouldn&apos;t
              have to worry about engagement metrics or social performance. That
              anxiety would undermine the whole experience.
              <br />
              At the same time, the research showed that social features drive
              45% of recipe app engagement. So rather than ignoring community
              entirely, I channeled it into something more intentional: &quot;Passed
              to You&quot; — a section that surfaces recipes shared directly by
              family and friends. This mirrors how recipes have always actually
              been passed down, through personal relationships rather than
              public broadcasts.
            </p>

            <Emphasis text="Story Before Instructions" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Research showed that recipes are deeply tied to memory and
              identity, people seek family dishes because they evoke nostalgia
              and emotional comfort. This informed the decision to lead each
              recipe with a personal story, placing it before the instructions.
              The cooking is still there. But the meaning comes first.
            </p>
          </div>
        </div>
      </div>

      <Footer mini={true} background="bg-offwhite" color="text-[#918432]" />
    </div>
  );
}
