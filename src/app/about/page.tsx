import NavigationBar from "@/app/components/navigation/navigationBar";
import Footer from "@/app/components/navigation/footer";
import Polaroid from "@/app/components/polaroid";
import PencilDownIcon from "../components/icons/pencilDownIcon";
import CurvedLine from "../components/curvedLine";
import StarBulletIcon from "../components/icons/starBulletIcon";
import ActivityBubble from "../components/activityBubble";

export default function About() {
  return (
    <div className="py-2 px-4 w-full flex flex-col items-center">
      <NavigationBar />

      <div className="relative w-[92vw]">
        {/* polaroids */}
        <div className="relative w-full">
          {/* Desktop polaroids */}
          <div className="hidden sm:block relative w-[44vw]">
            <Polaroid
              src="/me.png"
              alt="me"
              caption="↑ that's me!!"
              rotation="-25"
              width={240}
              height={240}
              className="absolute z-30 left-[4vw] top-[6vh]"
            />
            <Polaroid
              src="/waves.png"
              alt="beach"
              caption="i <3 the beach 🌊"
              rotation="15"
              width={240}
              height={240}
              className="absolute z-20 left-[16vw] top-[34vh]"
            />
            <Polaroid
              src="/working.png"
              alt="working"
              caption="👩‍💻👩‍💻"
              rotation="-10"
              width={240}
              height={240}
              className="absolute z-10 left-[4vw] top-[60vh]"
            />
          </div>

          {/* Mobile polaroids */}
          <div className="flex sm:hidden justify-center gap-4 py-4 overflow-hidden relative">

            <Polaroid
              src="/me.png"
              alt="me"
              caption="↑ that's me!!"
              rotation="-25"
              // width={120}
              // height={120}
            />
            <Polaroid
              src="/working.png"
              alt="working"
              caption="👩‍💻👩‍💻"
              rotation="20"
              // width={120}
              // height={120}
            />
          </div>
        </div>

        {/* text */}
        <div className="pl-[4vw] pt-[4vh] sm:pl-[44vw] sm:pt-[0vh] flex flex-col gap-5">
          {/* header */}
          <div className="flex items-end">
            <div className="pb-1">
              <PencilDownIcon scale={1.5} />
            </div>
            <div>
              <h1 className="text-6xl font-medium font-[family-name:var(--font-new-spirit-condensed)]">
                Hi! I&apos;m Lana :)
              </h1>
              <CurvedLine width={300} stroke={4} />
            </div>
          </div>

          {/* description */}
          <p className="font-ibm-plex-sans text-[#261817] text-xl leading-relaxed">
            I design experiences that people actually enjoy using. My focus is
            on clarity, usability, and a touch of personality in every
            interface. I think visually, iterate quickly, and care deeply about
            the details that make a product feel polished. I love exploring the
            intersection of aesthetics and functionality, crafting interfaces
            that delight users while solving real problems.
          </p>
          <p className="font-ibm-plex-sans text-[#261817] text-xl leading-relaxed">
            While design is my primary focus, I also bring hands-on development
            experience, which lets me prototype ideas with a developer’s
            mindset. My work spans web and mobile applications and is always
            driven by curiosity, creativity, and a commitment to thoughtful,
            impactful design. I aim to create interfaces that are not just
            functional, but human.
          </p>

          {/* currently */}
          <div>
            <div className="flex flex-col ">
              <h1 className="mb-[-0.2em] text-3xl font-medium font-[family-name:var(--font-new-spirit-condensed)]">
                currently...
              </h1>
              <CurvedLine width={130} stroke={8} />
            </div>

            <div className="flex flex-col font-geist-mono text-lg">
              <span className="flex gap-1 items-center">
                <StarBulletIcon />
                <p>Computer Science & Informatics @ UCI</p>
              </span>
              <span className="flex gap-1 items-center">
                <StarBulletIcon />
                <p>Application Developer Intern @ Esri</p>
              </span>
            </div>
          </div>

          {/* activities */}
          <div>
            <div className="flex flex-col mb-2">
              <h1 className="mb-[-0.2em] text-3xl font-medium font-[family-name:var(--font-new-spirit-condensed)]">
                what I&apos;ve been...
              </h1>
              <CurvedLine width={180} stroke={6} />
            </div>

            <div className="flex flex-col gap-2">
              <ActivityBubble prefix="...learning" highlight="react native" />
              <ActivityBubble prefix="...reading" highlight="intermezzo" />
              <ActivityBubble prefix="...listening to" highlight="hozier" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
