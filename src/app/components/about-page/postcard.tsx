import Image from "next/image";

import Stamp1 from "../icons/stamp1";
import Stamp2 from "../icons/stamp2";

type PostcardProps = {
  side: string;
};

export default function Postcard({ side }: PostcardProps) {
  if (side == "front") {
    return (
      <div className="flex w-full h-full">
        {/* text */}
        <div className="basis-1/2 flex flex-col gap-10 justify-center text-left">
          <p className="text-text font-serif text-4xl">Nice to meet you!</p>
          <div className="text-text text-ibm-plex-sans flex flex-col gap-10 text-lg">
            <p>
              I’m a fourth-year student at UC Irvine studying Computer Science
              and Informatics (Human-Computer Interaction) with a passion for
              storytelling and creating space for human connection through
              design.
            </p>
            <p>
              When I’m not designing, I like to journal, try new cafes, crochet,
              make Pinterest board, and drink matcha lattes.
            </p>
          </div>
        </div>

        {/* vertical line */}
        <div className="w-[4px] self-stretch bg-dark mx-8" />

        {/* right side */}
        <div className="basis-1/2 relative flex flex-col gap-20">
          {/* stamps */}
          <div className="w-full flex justify-end">
            <div className="-mr-10 pb-8">
              <Stamp2 />
            </div>
            <div>
              <Stamp1 />
            </div>
          </div>

          {/* lines container */}
          <div className="relative flex flex-col justify-between h-full">
            {/* horizontal lines */}
            <div className="absolute inset-0 flex flex-col justify-center gap-20 mb-0">
              <div className="w-full border-b-4 border-dark" />
              <div className="w-full border-b-4 border-dark" />
              <div className="w-full border-b-4 border-dark" />
              <div className="w-full border-b-4 border-dark" />
            </div>

            {/* text on top of lines */}
            <div className="relative flex justify-start h-full top-[-3vh] gap-6 text-left">
              <p className="text-2xl font-serif mt-6">To:</p>
              <p className="text-7xl text-text font-eternate leading-[1.2]">
                Whomever it may concern &lt;3
              </p>
            </div>

            {/* <div className="relative flex justify-start h-full top-[-3vh] gap-6">
              <p className="text-2xl font-serif mt-6">From:</p>
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
        src="/beach.png"
        alt="Beach"
        fill={true}
        className="p-8 object-cover drop-shadow-none shadow-now"
      />

      <div className="absolute top-16 right-16 z-10">
        <p className="text-text text-right font-eternate text-9xl leading-[1.35] drop-shadow-[0_0_4px_rgba(38,24,23,0.75)]">
          greetings from
          <br />
          california!
        </p>
      </div>
    </div>
  );
}
