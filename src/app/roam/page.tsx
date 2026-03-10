import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

import Details from "@/app/components/case-studies/details";
import Header from "@/app/components/case-studies/header";
import Subtitle from "@/app/components/case-studies/subtitle";
import Emphasis from "@/app/components/case-studies/emphasis";

export default async function RoamPage() {
  return (
    <div>
      <NavigationBar color="text-offwhite" sticky={true} />

      {/* Case Study  */}
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

        {/* main body */}
        <div>
          {/* the problem */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="The Problem" textColor="text-[#6E1622]" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Picture this: It&apos;s Saturday afternoon and you want to do
              something new. You open Yelp, scroll for twenty minutes,
              don&apos;t love anything, switch to TikTok for inspiration, get
              distracted, eventually text your friends — and end up at the same
              place you always go.
              <br />
              <br />
              This isn&apos;t a lack of options. It&apos;s a lack of the right
              tool.
              <br />
              <br />
              Boredom and social disconnection are quietly growing problems in
              the U.S.: 1 in 5 adults report feeling lonely and disconnected,
              and 27% say their lives feel &quot;a bit boring.&quot; Meanwhile,
              people who do want to get out are cobbling together a patchwork of
              apps — Yelp for reviews, TikTok for inspiration, Google Maps for
              navigation — none of which were built for guided, real-world
              exploration, and none of which talk to each other.
              <br />
              <br />
              The result is decision fatigue, duplicate effort, and a lot of
              cancelled plans.
              <br />
              <br />
            </p>
            <Emphasis text="How might we help people break out of routine and discover their surroundings, without the friction?" />
          </div>

          {/* Research */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Research" textColor="text-[#6E1622]" />
            <Emphasis text="User Surveys" />
            <p className="font-ibm-plex-sans text-text text-lg">
              We surveyed 33 participants about how they currently discover
              activities and plan outings. About 60% relied on Google Maps,
              Yelp, or TikTok — none purpose-built for interactive, guided
              exploration. Over half said they genuinely wanted to get out and
              try new things more often but didn&apos;t have a clear path to act
              on it.
            </p>
            <img
              src="/case-studies/roam/user-surveys.png"
              alt="info"
              style={{ width: "80%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          <div className="px-4 md:px-32 py-8">
            <Emphasis text="Competitive Analysis" />
            <p className="font-ibm-plex-sans text-text text-lg">
              We mapped eight competitors, Telp, TikTok, Google Maps,
              Smore&apos;s App, Beli, Let&apos;s Roam, Too Good To Go, and Bump,
              against five criteria: personalized discovery, map functionality,
              gamification, social engagement beyond reviews, and real-world
              everyday exploration.
              <br />
              No single competitor checked all five boxes. Bump came closest at
              four, but still lacked personalized discovery. That gap was our
              opening, and it directly shaped which features Roam needed to lead
              with. A product that didn&apos;t offer all five wouldn&apos;t be
              meaningfully different from what already existed.
            </p>
            <img
              src="/case-studies/roam/competitive-analysis.png"
              alt="info"
              style={{ width: "80%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          <div className="px-4 md:px-32 py-8">
            <Emphasis text="User Personas" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Roam is for people who feel stuck in routine and want an easier,
              more exciting way to discover what&apos;s around them. We
              developed three personas to capture the range of users, from the
              college student bored of the same five spots, to the mother of
              three trying to plan a weekend everyone will actually enjoy, to
              the new-to-town software engineer who doesn&apos;t want to feel
              like a tourist.
            </p>
            <img
              src="/case-studies/roam/personas.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* Design Process */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Design Process" textColor="text-[#6E1622]" />
            <Emphasis text="Information Architecture" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Before touching wireframes, we mapped the full structure of the
              app to give the team a shared foundation. This was critical given
              that six designers were about to work in parallel across five
              different sections.
              <br />
              <br />
              The IA is organized around five main pillars accessible from the
              homepage: Home, Leaderboard, Profile, Notifications, and
              Points/Rewards. Home houses the core user flow — creating roams,
              joining friends, browsing community routes, and accessing nearby
              notifications. The active Scavenger Hunt experience lives nested
              within Home as the primary action. Leaderboard branches into
              Friends, Community/County, and Global views. Profile covers
              identity, saved routes, and settings.
              <br />
              <br />
              Getting this structure right upfront meant that when teammates
              worked on different sections, everything could be reconciled into
              a single, coherent system.
            </p>
            <img
              src="/case-studies/roam/information-architecture.png"
              alt="info"
              style={{ width: "80%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* Wireframes */}
          <div className="px-4 md:px-32 py-8">
            <Emphasis text="Wireframes" />
            <p className="font-ibm-plex-sans text-text text-lg">
              We moved through three fidelity stages: low-fi sketches to explore
              layout, mid-fidelity grayscale frames to establish structure, and
              multiple high-fidelity rounds where branding and real content were
              introduced. Each major section — Feed, Profile, Scavenger Hunt,
              Leaderboard, Points — was wireframed by individual team members
              working from the shared IA, then reconciled through a shared
              design system I established.
            </p>
          </div>

          {/* Branding */}
          <div className="px-4 md:px-32 py-8">
            <Emphasis text="Branding" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Roam&apos;s visual identity leans into the spirit of adventure: warm,
              earthy, and a little playful. The mascot, a small pirate bear,
              sets the whimsical, exploratory tone without sacrificing the
              legibility and professionalism the interface needs to actually
              function.
            </p>
            <img
              src="/case-studies/roam/brand-guidelines.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Usability Testing" textColor="text-[#6E1622]" />
            <p className="font-ibm-plex-sans text-text text-lg">
              With our high-fidelity prototype ready, we ran usability tests and
              surfaced three significant pain points.
            </p>
            <img
              src="/case-studies/roam/pain-points.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
            <p className="font-ibm-plex-sans text-text text-lg">
              Each finding mapped directly to a design change — no guessing
              required.
            </p>
            <img
              src="/case-studies/roam/changes.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* Iteration */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Iteration" textColor="text-[#6E1622]" />
            <p className="font-ibm-plex-sans text-text text-lg">
              <b>Home</b>
              <br />
              The home screen shows the most visible evolution across the
              project. It moved from a rough sketch through a mid-fi wireframe
              with placeholders, then a first high-fidelity pass that introduced
              branding but conflated two distinct user needs, discovery and
              social, into a single cluttered screen. The second iteration made
              the most significant structural change: splitting the home screen
              into two separate pages. The Roam page became focused purely on
              starting and joining roams, while the Feed became its own
              dedicated space for social activity. This separation clarified the
              product&apos;s hierarchy and gave each mode room to breathe. The final
              version refined the Roam page further with the drawer layout,
              making the primary CTA impossible to miss while keeping
              recommended roams and daily deals within reach.
            </p>
            <img
              src="/case-studies/roam/home-iteration.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />

            <p className="font-ibm-plex-sans text-text text-lg pt-8">
              <b>Leaderboard</b>
              <br />
              The leaderboard went from a plain ranked list to a podium-style
              top-three display with profile photos, real-time location context,
              and dual filter dropdowns. The final version feels like a
              competitive social feature, not just a table.{" "}
            </p>
            <img
              src="/case-studies/roam/leaderboard-iteration.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* Final Design */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Final Design" textColor="text-[#6E1622]" />
            <Emphasis text="Feature Walkthrough" />

            <img
              src="/case-studies/roam/walkthrough.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* prototype */}
          <div className="px-4 md:px-32 py-8">
            <Emphasis text="Final Prototype" />
            <p className="font-ibm-plex-sans text-text text-lg">
              After three months of research, iteration, and testing, here is
              the finished product:
            </p>
            <iframe
              className="mx-auto"
              width="450"
              height="800"
              src="https://embed.figma.com/proto/tSP0CKD6Bl9bGpqrP7FXaM/Wireframes?page-id=130%3A19707&node-id=130-23953&viewport=-1736%2C650%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=130%3A23953&show-proto-sidebar=1&embed-host=share&hide-ui=1"
              allowFullScreen
            ></iframe>
          </div>

          {/* Key Takeaways */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Key Takeaways" textColor="text-[#6E1622]" />
            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Nothing feels intuitive until you watch someone actually use it.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Features we thought were obvious, such as reward redemption, roam
              creation, needed significant rethinking once real users got their
              hands on the prototype. Usability testing didn&apos;t just surface
              bugs; it changed our understanding of the product&apos;s hierarchy
              entirely. What felt logical to us as designers was invisible to
              someone encountering the app for the first time.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Restraint is a design decision.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              The IA we built is ambitious, and there were moments where we had
              to deliberately scope down in order to build any one feature well.
              Every decision became a negotiation between what was ideal and
              what was executable. Learning to make that call, and justify it,
              was one of the most valuable skills this project sharpened.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Structure enables parallel work.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              With six designers working simultaneously, the IA and shared
              design system weren&apos;t just organizational tools, they were what
              made collaboration possible. Building that foundation early meant
              we could move fast without stepping on each other, and reconcile
              our work without starting over.
            </p>
          </div>
        </div>
      </div>

      <Footer mini={true} background="bg-offwhite" color="text-[#6E1622]" />
    </div>
  );
}
