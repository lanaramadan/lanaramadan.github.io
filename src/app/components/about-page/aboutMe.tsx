import Stamp1 from "../icons/stamp1";
import Stamp2 from "../icons/stamp2";

export default function AboutMe() {
  return (
    <div
      className="
      sticky 
      top-0 
      text-dark 
      overflow-hidden 
      flex 
      flex-col 
      relative 
      w-full 
      h-screen 
      justify-between 
      items-center 
      px-48 
      py-24
      bg-[url('/green-bg.png')] 
      bg-cover 
      bg-center"
    >
      {/* postcard */}
      <div className="h-full w-full bg-[rgba(181,188,176,0.25)] drop-shadow-[0_0_16px_rgba(115,132,111,0.75)] p-8 flex">
        {/* text */}
        <div className="basis-1/2 flex flex-col gap-10 justify-center">
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

        <div className="w-[4px] bg-dark mx-8" />
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
            <div className="relative flex justify-start h-full top-[-3vh] gap-6">
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
    </div>
  );
}