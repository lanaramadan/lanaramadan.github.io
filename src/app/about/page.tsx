import NavigationBar from "@/app/components/navigation/navigationBar";
import Footer from "@/app/components/navigation/footer";
import Polaroid from "@/app/components/polaroid";
import PencilDownIcon from "../components/icons/pencilDownIcon";
import CurvedLine from "../components/curvedLine";
import StarBulletIcon from "../components/icons/starBulletIcon";
import ActivityBubble from "../components/activityBubble";

export default function About() {
  return (
    <div className="min-h-screen py-2 px-12 w-full flex flex-col items-center">
      <NavigationBar />

      <div className="relative w-[88vw] h-[90vh]">
        {/* poloroids */}
        <div className="relative w-[44vw]">
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
        {/* text */}
        <div className="pl-[40vw] flex flex-col gap-5">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
