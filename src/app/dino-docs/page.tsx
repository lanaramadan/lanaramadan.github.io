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
          desktop={true}
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
            <Subtitle
              text="Understanding the Users"
              textColor="text-[#80C079]"
            />
            <Emphasis text="Personas" />
            <p className="font-ibm-plex-sans text-text text-lg">
              We built three personas to represent the full ecosystem of people
              this product serves, including students and teachers.
            </p>
            <img
              src="/case-studies/dino-docs/personas.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* User Stories */}
          {/* Research & Discovery */}
          <div className="px-4 md:px-32 py-8">
            <Emphasis text="User Stories" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Building on our personas, I translated each user&apos;s needs into
              concrete stories with explicit acceptance criteria. These kept
              design decisions grounded in real requirements rather than
              assumptions and gave the team a shared, testable definition of
              &quot;done.&quot;
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pt-2">
              <b>Students</b>
            </p>
            <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
              <li>
                Collaborating with classmates in real-time, with live edits
                shown through colored highlights indicating who is editing where
              </li>
              <li>
                Autosaving automatically, with a visible confirmation so kids
                never worry about losing work
              </li>
              <li>
                Working offline and syncing changes when reconnected, with a
                simple conflict resolution flow (&quot;Keep Old Widget&quot; / &quot;Combine
                Changes&quot;) designed for younger users
              </li>
              <li>
                Adding images easily, without layout complications — images
                insert as full-width widgets with caption options
              </li>
            </ul>

            <p className="font-ibm-plex-sans text-text text-lg pt-2">
              <b>International & Accessibility Needs</b>
            </p>
            <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
              <li>
                Language selection that translates UI elements, making the app
                usable for non-English-speaking students
              </li>
              <li>
                High-contrast mode and screen reader compatibility for students
                with visual impairments
              </li>
              <li>
                Guided navigation mode with step-by-step interactive prompts for
                users who need additional support
              </li>
            </ul>

            <p className="font-ibm-plex-sans text-text text-lg pt-2">
              <b>Parents & Teachers</b>
            </p>
            <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
              <li>
                Linked parent accounts with supervisory capabilities over a
                child&apos;s profile
              </li>
              <li>
                Alerts for flagged or inappropriate content so teachers can
                address issues quickly
              </li>
              <li>
                Collaboration restrictions allowing parents to control exactly
                who a student can share documents with
              </li>
              <li>
                A teacher dashboard with document activity logs, contribution
                history, and the ability to comment or assign tasks directly in
                the app
              </li>
            </ul>

            <p className="font-ibm-plex-sans text-text text-lg pt-2">
              These stories gave the team a shared language for what &quot;done&quot;
              looked like, and helped prevent scope creep by grounding feature
              discussions in user needs.
            </p>
          </div>

          {/* Ideation */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Ideation" textColor="text-[#80C079]" />
            <Emphasis text="Exploring Three Directions" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Rather than jumping to a solution, I led the team through a
              structured evaluation of three fundamentally different approaches
              to the problem. The goal was to pressure-test assumptions before
              committing to any direction.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pt-2">
              <b>Approach 1 — Simplified Google Docs</b>
            </p>
            <p className="font-ibm-plex-sans text-text text-lg">
              A pared-down version of Google Docs, keeping only the most
              essential features for kids: a simple toolbar, fixed layouts,
              real-time collaboration.
            </p>
            <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
              <li>
                Key Features: Simple toolbar, fixed layouts, real-time
                collaboration.
              </li>
              <li>Pros: Familiar, uncluttered, and collaborative.</li>
              <li>
                Cons: Still requires some guidance; may feel too close to
                “grown-up” tools.
              </li>
            </ul>
            <p className="font-ibm-plex-sans text-text text-lg pt-2">
              <b>Approach 2 — Modular Widgets</b>
            </p>
            <p className="font-ibm-plex-sans text-text text-lg">
              Selected Documents built from self-contained drag-and-drop blocks:
              title, subtitle, paragraph, image, list. Children add, remove, or
              rearrange widgets without needing to understand formatting rules
              or layout logic. Each widget surfaces only the tools relevant to
              it — text blocks show formatting options, image blocks show
              caption and alignment tools. Clean, structured, and naturally
              encourages logical thinking about how documents are organized.
            </p>
            <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
              <li>
                Key Features: Widget-based sections, drag-and-drop reordering,
                minimal context-specific tools.
              </li>
              <li>
                Pros: Easy to understand, keeps interface clean, encourages
                structured thinking.
              </li>
              <li>Cons: Limited flexibility compared to free-form editing. </li>
              <li>Preliminary sketches:</li>
            </ul>
            <img
              src="/case-studies/dino-docs/first-sketch.png"
              alt="info"
              style={{ width: "20%", height: "auto" }}
              className="w-screen ml-8 mt-2"
            />
            <p className="font-ibm-plex-sans text-text text-lg pt-2">
              <b>Approach 3 — Guided Prompts</b>
            </p>
            <p className="font-ibm-plex-sans text-text text-lg">
              A step-by-step experience walking students through pre-defined
              sections with structured prompts (&quot;What&apos;s your document about?
              Type your title here!&quot;).
            </p>
            <ul className="font-ibm-plex-sans text-text text-lg list-disc ml-8">
              <li>
                Key Features: Pre-defined sections, structured prompts, simple
                formatting.
              </li>
              <li>
                Pros: Provides structure, reduces confusion, great for
                beginners.
              </li>
              <li>Cons: Too restrictive for older/more advanced kids. </li>
            </ul>
            <p className="font-ibm-plex-sans text-text text-lg pt-2">
              <b>Why Modular Widgets Won</b>
            </p>
            <p className="font-ibm-plex-sans text-text text-lg">
              I built a mindmap to crystallize the decision, mapping solution
              properties, document organization options, accessibility
              requirements, and a keep/refine/remove audit of Google Docs
              features. Three things made Approach 2 the clear choice: it was
              accessible enough for a 7-year-old, flexible enough for a
              12-year-old, and structured enough that a teacher could trust what
              students were producing.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg">
              The mindmap also surfaced which Google Docs features to retain
              (real-time collaboration, autosave, lists, basic formatting,
              sharing), which to refine (image placement, inline-only rather
              than free-float, to avoid layout chaos), and which to discard
              entirely (columns, tables, sub-menus, advanced formatting).
            </p>
            <img
              src="/case-studies/dino-docs/mindmap.png"
              alt="info"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* Key Design Decisions */}
          <div className="px-4 md:px-32 py-8">
            <Emphasis text="Key Design Decisions" />
            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Context-aware toolbars, not a universal toolbar.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              One of the most consistent frustrations across child-facing apps
              is toolbars that show every possible option at once. I designed
              each widget to surface only the tools relevant to its content
              type: a text widget shows bold, italic, font size, alignment; an
              image widget shows caption and placement. This kept the interface
              uncluttered and made the right action feel obvious without
              requiring a child to scan through irrelevant options.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Widget locking during collaboration.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Real-time collaboration with young users creates a specific
              problem: two children editing the same sentence simultaneously
              produces confusion, not collaboration. The solution was to lock
              the widget a user is actively editing, preventing conflicts at the
              source rather than trying to resolve them after. Only the active
              widget is locked so collaboration feels fluid rather than
              constrained.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Offline-first conflict resolution designed for children.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              When a student edits offline and reconnects, traditional merge UIs
              (diff views, version trees) are completely inaccessible to a
              9-year-old. I designed a simple reconciliation flow that
              duplicates the conflicting widget and presents two clear options:
              &quot;Keep Old Widget&quot; or &quot;Combine Changes.&quot; No technical language, no
              overwhelming comparison view, just two clearly labeled choices
              with a plain-language explanation of what happened.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Removing features was as important as adding them.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Columns, tables, free-form image placement, sub-menus, custom
              fonts all were deliberately excluded. Not because they&apos;re not
              useful, but because they add cognitive load without adding value
              for a child completing a school assignment. Every feature that
              wasn&apos;t included was a considered decision, not an oversight.
            </p>
          </div>

          {/* style guide */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Design" textColor="text-[#80C079]" />
            <Emphasis text="Style Guide" />
            <p className="font-ibm-plex-sans text-text text-lg">
              The visual language had to strike a specific balance: playful and
              safe enough that kids feel at home, but structured and clean
              enough that teachers and parents trust it with classroom work. The
              color palette, typography, and mascot system were all developed
              with this balance in mind.
            </p>
            <img
              src="/case-studies/dino-docs/style-guide.png"
              alt="style guide"
              style={{ width: "100%", height: "auto" }}
              className="w-screen mx-auto"
            />
          </div>

          {/* final design */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Final Design" textColor="text-[#80C079]" />
            <p className="font-ibm-plex-sans text-text text-lg">
              Dino Docs provides a playful yet structured learning environment
              where students can create, edit, and share projects with ease.
              Mascots appear throughout the experience to guide, celebrate, and
              encourage, without getting in the way of actual work.
            </p>

            <Emphasis text="Feature Walkthrough" />
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img
                  src="/case-studies/dino-docs/product-1.png"
                  alt="style guide"
                  style={{ width: "40%", height: "auto" }}
                  className="w-screen mx-auto"
                />
                <div>
                  <Emphasis text="Welcome & Onboarding" />
                  <p className="font-ibm-plex-sans text-text text-lg">
                    Onboarding introduces the mascot and sets the tone
                    immediately: friendly, safe, and easy.
                    <br />
                    Students select their role (student, teacher, parent),
                    choose a username, set a password, and pick a profile
                    avatar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src="/case-studies/dino-docs/product-2.png"
                  alt="style guide"
                  style={{ width: "40%", height: "auto" }}
                  className="w-screen mx-auto"
                />
                <div>
                  <Emphasis text="File System & Folder Organization " />
                  <p className="font-ibm-plex-sans text-text text-lg">
                    Students land on a home screen showing their folders and
                    documents.
                    <br />
                    Color-coded folders let children organize their work
                    visually without needing to read labels.
                    <br />
                    Creating a new document prompts for a name and a template
                    (Essay Outline, Meeting Notes, blank), then drops the user
                    directly into the editor.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src="/case-studies/dino-docs/product-3.png"
                  alt="style guide"
                  style={{ width: "40%", height: "auto" }}
                  className="w-screen mx-auto"
                />
                <div>
                  <Emphasis text="Modular Widget File Editor " />
                  <p className="font-ibm-plex-sans text-text text-lg">
                    The core editing experience. Students tap the &quot;+&quot; button to
                    add a widget, choose the content type (title, subtitle,
                    paragraph, list, image), and see context-specific tools
                    appear for whichever widget is selected.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src="/case-studies/dino-docs/product-4.png"
                  alt="style guide"
                  style={{ width: "40%", height: "auto" }}
                  className="w-screen mx-auto"
                />
                <div>
                  <Emphasis text="Parent & Teacher View" />
                  <p className="font-ibm-plex-sans text-text text-lg">
                    A shared dashboard showing all documents linked to the
                    account, incoming sharing requests, and the ability to
                    accept or deny collaboration.
                    <br />
                    Teachers see class-level activity; parents see their child&apos;s
                    document history.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img
                  src="/case-studies/dino-docs/product-5.png"
                  alt="style guide"
                  style={{ width: "40%", height: "auto" }}
                  className="w-screen mx-auto"
                />
                <div>
                  <Emphasis text="Accessibility Settings" />
                  <p className="font-ibm-plex-sans text-text text-lg">
                    Light/dark mode, small/medium/large text sizing, and
                    language selection (English, Spanish, French, Japanese
                    shown) are accessible from a single settings screen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="What's Next" textColor="text-[#80C079]" />
            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Usability testing with actual children.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Every design decision in Dino Docs was grounded in research and
              careful reasoning — but none of it was tested with the primary
              users due to project limitations. The single highest-value next
              step is putting the prototype in front of real 7–12 year olds and
              watching what breaks. Children interact with interfaces in ways
              adults don&apos;t predict, and the conflict resolution flow in
              particular needs real-world validation before it can be considered
              solved.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Teacher assignment and template integration.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Right now, teachers can monitor student documents but can&apos;t
              initiate work from their side. A direct &quot;assign document&quot; flow,
              where a teacher creates a template, assigns it to students, and
              receives completed work, would transform Dino Docs from a tool
              students use independently into a genuine classroom workflow tool.
              That integration is what would drive adoption at the school level
              rather than just the individual level.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Refining the collaboration locking model.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Widget-level locking prevents editing conflicts, but it also means
              a student can block a section of a document indefinitely simply by
              having it selected. A timeout system — locking releases after a
              period of inactivity — would make collaboration feel more fluid
              without reintroducing the conflict problem the locking was
              designed to solve.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="px-4 md:px-32 py-8">
            <Subtitle text="Key Takeaways" textColor="text-[#80C079]" />
            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Designing for multiple stakeholders requires holding all of them
              in mind simultaneously.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Dino Docs isn&apos;t a product for kids, it&apos;s a product for kids and
              teachers and parents and students with disabilities and
              international students. Every decision had to work for a
              7-year-old creating their first document and a teacher monitoring
              thirty students at once. The moments where those needs conflicted
              were the most interesting design problems on the project.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              User stories made abstract needs concrete and kept the team
              aligned.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Turning persona insights into explicit user stories with
              acceptance criteria changed how the team talked about features.
              Instead of debating what &quot;collaboration&quot; should look like, we had
              a testable definition to design toward. It also made scope
              decisions easier, if a proposed feature couldn&apos;t be expressed as a
              user story with a clear acceptance criterion, it probably wasn&apos;t
              ready to be built.
            </p>

            <p className="font-ibm-plex-sans text-text text-lg font-semibold">
              Constraints fuel creativity.
            </p>
            <p className="font-ibm-plex-sans text-text text-lg pb-8">
              Designing for young children meant removing nearly every default
              design assumption, no complex navigation, no dense text, no hidden
              features. Working within those constraints pushed us toward
              solutions that were genuinely simpler and more intentional than
              what we might have built for a general audience.
            </p>
          </div>
        </div>

        <Footer mini={true} background="bg-offwhite" color="text-[#80C079]" />
      </div>
    </div>
  );
}
