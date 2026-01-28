import Image from "next/image";

import Stamp1 from "../icons/stamp1";
import Stamp2 from "../icons/stamp2";

type PostcardProps = {
  side: string;
};

export default function Postcard({ side }: PostcardProps) {
  if (side == "front") {
    return (
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* text */}
        <div className="md:basis-1/2 flex flex-col gap-10 justify-center text-left">
          <p className="text-text font-new-spirit-condensed text-4xl">
            Hi there!
          </p>
          <div className="text-text text-ibm-plex-sans flex flex-col gap-4 md:gap-10 text-lg">
            <p>
              I&apos;m a fourth-year Computer Science & Informatics (Human-Computer
              Interaction) student at UC Irvine, passionate about storytelling
              through human-centered design.
            </p>
            <p>
              I blend a designer&apos;s eye with a developer&apos;s mindset to build
              engineer-friendly solutions for user problems. My goal is creating
              interfaces that aren&apos;t just functional, but genuinely human:
              design that tells stories, inspires change, and enhances community
              experiences.
            </p>
            <p>
              When I&apos;m not designing, I&apos;m probably journaling at a new cafe,
              crocheting, getting lost in Pinterest boards, or sipping on a
              matcha latte.
            </p>
          </div>
        </div>

        {/* vertical line */}
        <div className="hidden md:block w-[4px] self-stretch bg-dark mx-8" />

        {/* right side */}
        <div className="md:basis-1/2 relative flex flex-col gap-20">
          {/* stamps */}
          <div className="hidden md:flex w-full justify-end">
            <div className="-mr-10 pb-8">
              <Stamp2 />
            </div>
            <div>
              <Stamp1 />
            </div>
          </div>

          {/* lines container */}
          <div className="hidden relative md:flex flex-col justify-between h-full">
            {/* horizontal lines */}
            {/* <div className="absolute inset-0 flex flex-col justify-center gap-20 mb-0">
              <div className="w-full border-b-4 border-dark" />
              <div className="w-full border-b-4 border-dark" />
              <div className="w-full border-b-4 border-dark" />
              <div className="w-full border-b-4 border-dark" />
            </div> */}

            {/* text on top of lines */}
            <div className="relative flex justify-start h-full top-[-3vh] gap-6 text-left">
              <p className="text-2xl font-new-spirit-condensed mt-6">To:</p>
              <p className="text-7xl text-text font-eternate leading-[1.2]">
                Whomever it may concern &lt;3
              </p>
            </div>

            {/* <div className="relative flex justify-start h-full top-[-3vh] gap-6">
              <p className="text-2xl font-new-spirit-condensed mt-6">From:</p>
              <p className="text-7xl text-text font-eternate leading-[1.2]">
                Lana Ramadan &lt;3
              </p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Image
        priority
        src="/beach.jpg"
        alt="Beach"
        fill={true}
        className="p-8 object-cover drop-shadow-none shadow-now"
      />

      <div className="absolute top-[-1em] right-16 z-10">
        <p className="text-[#946968] text-right font-new-spirit-condensed text-9xl leading-[.8]">
          <span className="font-ibm-plex-sans text-4xl pr-8">
            greetings from
          </span>
          <br />
          California!
        </p>
      </div>
    </div>
  );
}
