import Footer from "@/app/components/navigation/footer";
import NavigationBar from "@/app/components/navigation/navigationBar";

import Details from "@/app/components/case-studies/details";
import Header from "@/app/components/case-studies/header";
import Subtitle from "@/app/components/case-studies/subtitle";
import Emphasis from "@/app/components/case-studies/emphasis";

export default async function GemPage() {
  return (
    <div>
      <NavigationBar color="text-offwhite" sticky={true} />

      {/* Case Study  */}
      <div className="bg-offwhite w-full">
        <Header
          gradient="/case-studies/gem/header-gradient.png"
          mockup="/case-studies/gem/header-mockup.png"
          alt="Roam app mockup"
        />

        <div className="px-4 md:px-32">
          <Details
            title="Gem"
            overview={`GEM is a travel discovery app I designed as part of a cross-functional fellowship through Product Association @ UCI. As the sole designer on the team, I owned the full design process — from initial research synthesis and wireframing through two rounds of usability testing and the final high-fidelity prototype.\nThe final product is GEM, a travel discovery app that helps young adults find hidden local gems tailored to their interests, cutting through the noise of social media and overcrowded review platforms to surface experiences that actually feel special.`}
            timeline="Jan 2023 – May 2023"
            duration="5 months"
            role="Product Designer"
            tools={["Figma", "Figjam", "Airtable"]}
            team={[
              "Isabelle (Product Marketer)",
              "Justin (Product Manager)",
              "Gianna (Product Developer)",
              "Nicholas (Product Developer)",
            ]}
            textColor="text-[#065143]"
          />
        </div>

        {/* main body */}
        <div>
          {/* the problem */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="The Problem" textColor="text-[#065143]" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Travel inspiration today is messy. Thirty-four percent of
              travelers turn to TikTok for trip ideas, but extracting useful
              recommendations requires scrolling through hundreds of videos,
              cross-referencing multiple sites, and still often landing at the
              same overrated spots everyone else visits.
              <br />
              <br />
            </p>
            <Emphasis text="How might we help travelers quickly discover hidden local gems that match their unique interests?" />
          </div>

          {/* Research & Discovery */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Research & Discovery" textColor="text-[#065143]" />
            <Emphasis text="User Interviews" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Our target audience was young adults (18–35) seeking authentic,
              personalized travel experiences. After conducting interviews and
              synthesizing findings into personas, three clear pain points
              emerged:
            </p>
            <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
              <li>
                <b>75%</b> felt existing apps didn&apos;t reflect a local&apos;s
                perspective — just tourist traps
              </li>
              <li>
                <b>85%</b> found current app organization cluttered and
                unmanageable
              </li>
              <li>
                <b>71%</b> described finding new places as &quot;time-consuming and
                overwhelming&quot;
              </li>
            </ul>
          </div>

          {/* Personas */}
          <div className="px-4 md:px-32 py-8">
            <Emphasis text="Personas" />
            <p className="font-ibm-plex-sans text-text text-lg">
              To understand who we were designing for, we synthesized the
              interview findings into three personas representing the core range
              of GEM users, from the frequent weekend explorer to the
              spontaneous traveler landing somewhere new.
            </p>
            <img
              src="/case-studies/gem/personas.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* Competitive Analysis */}
          <div className="px-4 md:px-32 py-8">
            <Emphasis text="Competitive Analysis" />
            <p className="font-ibm-plex-sans text-text text-lg">
              I mapped GEM against the main players: TikTok, Yelp, TripAdvisor,
              travel blogs, and niche apps. The pattern was clear: tools with
              wide reach lacked local authenticity, and tools with authentic
              content lacked usability.
              <br />
              GEM was positioned in the Unconventional + Central quadrant:
              mainstream enough to be easy to use, distinctive enough to surface
              genuinely local recommendations.
            </p>
            <img
              src="/case-studies/gem/centrality-distinctiveness-graph.png"
              alt="info"
              style={{ width: "80%", height: "auto" }}
              className="w-screen mx-auto"
            />
            <p className="font-ibm-plex-sans text-text text-lg">
              A feature comparison reinforced the gap. TikTok and Yelp win on
              reach, but neither offers streamlined search, reliable filters, or
              any cross-verification of recommendations. GEM&apos;s differentiators —
              a cross-checking algorithm, faceted search, and auto-sorting —
              directly address the manual research burden users described in
              interviews.
            </p>
            <img
              src="/case-studies/gem/features.png"
              alt="info"
              style={{ width: "80%", height: "auto" }}
              className="w-screen mx-auto"
            />
            <p className="font-ibm-plex-sans text-text text-lg">
              This gap directly shaped the design brief: GEM needed to feel
              curated and personal, not comprehensive and cluttered. Every
              feature decision that followed was filtered through that standard.
            </p>
          </div>
        </div>

        {/* Design Process */}
        <div className="px-4 md:px-32 py-8">
          <Subtitle text="Design Process" textColor="text-[#065143]" />
          <Emphasis text="Sketches & Wireframes" />
          <p className="font-ibm-plex-sans text-text text-lg">
            I began with rough sketches to explore layout options and core
            interaction patterns before committing to any structure. Early
            questions I was working through:
          </p>
          <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
            <li>
              How should users input their preferences without it feeling like a
              survey?
            </li>
            <li>What&apos;s the right level of detail on a discovery card?</li>
            <li>How do we make filtering feel fast, not tedious?</li>
          </ul>
          <p className="font-ibm-plex-sans text-text text-lg">
            I iterated across 20+ screens, consistently testing flows with
            mentors and teammates before moving forward.
          </p>
          <img
            src="/case-studies/gem/wireframes.png"
            alt="info"
            style={{ width: "100%", height: "auto" }}
            className="w-screen mx-auto"
          />
        </div>

        {/* Key Design Decisions */}
        <div className="px-4 md:px-32 py-8">
          <Emphasis text="Key Design Decisions" />
          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Cards over lists.
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            Early designs used list-based layouts for displaying gems —
            familiar, but they required reading to differentiate options. I
            moved to a card-based system with visual metric sliders
            (affordability, photoworthiness, accessibility) so users could
            evaluate a location at a glance without parsing text. This directly
            addressed the 85% of users who described existing apps as cluttered
            and unmanageable.
          </p>

          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Preferences upfront, not buried in settings.
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            The onboarding flow captures user interests before showing any
            recommendations, so the very first thing a user sees is already
            relevant to them. This was a deliberate trade — slightly more
            friction at entry for a significantly better first impression.
            Testing validated it: users who completed onboarding engaged more
            meaningfully with their initial recommendations than those who
            skipped it.
          </p>

          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Cross-checking as the trust mechanism.
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            One of the most common interview frustrations was not knowing
            whether a recommendation was genuinely good or just well-marketed.
            Rather than relying on a single source, GEM&apos;s algorithm
            cross-references multiple signals. I worked with Justin and the
            developers early to understand what was technically feasible, then
            designed the UI to communicate this verification to users in a way
            that felt trustworthy rather than technical.
          </p>

          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Social without social anxiety.
          </p>
          <p className="font-ibm-plex-sans text-text text-lg">
            The &quot;Friends&apos; Picks&quot; feature lets users see where their social
            circle has been without introducing likes, follower counts, or
            public performance pressure. Discovery as a shared conversation, not
            a competition.
          </p>
        </div>

        {/* Branding */}
        <div className="px-4 md:px-32 py-8">
          <Subtitle text="Branding" textColor="text-[#065143]" />
          <p className="font-ibm-plex-sans text-text text-lg">
            GEM&apos;s visual identity is understated and grounded in order to let
            destinations take center stage rather than compete with the UI
            around them.
          </p>
          <img
            src="/case-studies/gem/brand-guidelines.png"
            alt="info"
            style={{ width: "100%", height: "auto" }}
            className="w-screen mx-auto"
          />
        </div>

        {/* Usability Testing */}
        <div className="px-4 md:px-32 py-8">
          <Subtitle text="Usability Testing" textColor="text-[#065143]" />
          <Emphasis text="Key Design Decisions" />
          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Round 1 — Mid-Fidelity
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            A small group of beta users tested the functional prototype.
            Feedback focused on overall flow, navigation clarity, and whether
            the core concept resonated. Mentor designers provided a parallel
            layer of expert critique.
          </p>

          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Round 2 — High-Fidelity
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            With changes implemented, I ran a second round focused on visual
            design, interaction detail, and consistency. I kept our personas
            front of mind throughout, asking at each decision point whether this
            solved the problems our users actually described.
          </p>

          <img
            src="/case-studies/gem/iteration.png"
            alt="info"
            style={{ width: "100%", height: "auto" }}
            className="w-screen mx-auto"
          />

          <p className="font-ibm-plex-sans text-text text-lg pt-4">
            Key improvements across iterations:
          </p>
          <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
            <li>
              Simplified onboarding — reduced steps required before a user saw
              their first recommendations
            </li>
            <li>
              Redesigned card layout — moved from text-heavy descriptions to
              visual metrics (sliders for affordability, photoworthiness,
              accessibility)
            </li>
            <li>
              Saved locations tab — reorganized after users struggled to re-find
              places they&apos;d bookmarked
            </li>
          </ul>
        </div>

        {/* The Solution */}
        <div className="px-4 md:px-32 py-8">
          <Subtitle text="The Solution" textColor="text-[#065143]" />
          <Emphasis text="Feature Walkthrough" />
          <p className="font-ibm-plex-sans text-text text-lg">
            GEM simplifies and personalizes adventure discovery. By learning
            your preferences upfront and applying them consistently, every
            recommendation feels relevant. The core experience is built around
            four actions:
          </p>
          <img
            src="/case-studies/gem/walkthrough.png"
            alt="info"
            style={{ width: "100%", height: "auto" }}
            className="w-screen mx-auto"
          />
        </div>

        {/* final prototype */}
        <div className="px-4 md:px-32 py-8">
          <Emphasis text="Final Prototype" />
          <p className="font-ibm-plex-sans text-text text-lg">
            With two rounds of testing complete and iterations applied, the
            designs came together into a cohesive experience. Here&apos;s the result:
          </p>
          <iframe
            className="mx-auto"
            width="450"
            height="800"
            src="https://embed.figma.com/proto/WtTzpCPMbwdoD1fKm73TUD/GEM-Wireframes?page-id=1%3A9&node-id=276-5103&p=f&viewport=1561%2C409%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=276%3A5103&embed-host=share&hide-ui=1"
            allowFullScreen
          ></iframe>
        </div>

        {/* What's Next */}
        <div className="px-4 md:px-32 py-8">
          <Subtitle text="What's Next" textColor="text-[#065143]" />
          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Expand Testing
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            Run usability studies with a broader, more geographically diverse
            group of travelers to validate that GEM&apos;s model works globally, not
            just for students in a single region. Collect longitudinal feedback
            to understand how GEM fits into real trip planning over time.
          </p>

          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Personalization & Machine Learning
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            Use ML models to improve recommendations over time, learning from
            saved gems, reviews, and travel patterns. Explore mood-based search
            inputs (e.g., &quot;adventurous,&quot; &quot;cozy,&quot; &quot;low-key&quot;) that reflect how
            people actually think when planning.
          </p>

          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Accessibility & Global Reach
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            Add multilingual search and culturally specific recommendations.
            Build an offline mode for travelers who explore without reliable
            connectivity.
          </p>
        </div>

        {/* Key Takeaways */}
        <div className="px-4 md:px-32 py-8">
          <Subtitle text="Key Takeaways" textColor="text-[#065143]" />
          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Narrowing scope created focus.
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            Our original concept was broad, basically a location search tool.
            With mentor guidance, we honed in on hidden gems specifically. That
            constraint gave GEM a clear identity and made every design decision
            easier to evaluate. It also, ultimately, led to winning first place
            in the fellowship.
          </p>

          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            User feedback shaped the product more than any assumption.
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            Nearly every meaningful improvement across our iterations came
            directly from what users showed us during testing, things we could
            not have predicted from behind a screen. This process reinforced how
            much listening matters in the design process.
          </p>

          <p className="font-ibm-plex-sans text-text text-lg font-semibold">
            Cross-functional teams make better products.
          </p>
          <p className="font-ibm-plex-sans text-text text-lg pb-8">
            This was a genuine team effort, from early whiteboarding to
            late-night iteration sessions. Collaborating closely with Isabelle,
            Justin, Gianna, and Nicholas showed me how much stronger a product
            becomes when every discipline is in the room from the start. As the
            sole designer, I also learned to articulate design reasoning to
            non-designers, explaining why a decision mattered, not just
            presenting it. That habit made both my work and the collaboration
            sharper.
          </p>
        </div>
      </div>

      <Footer mini={true} background="bg-offwhite" color="text-[#065143]" />
    </div>
  );
}
