import Polaroid from "./polaroid";
import Positions from "./positions";
import DownArrowIcon from "./icons/downArrowIcon";

export default function HomeTitle() {
  return (
    <div className="flex flex-col relative w-full h-screen justify-between align-center items-center">
        <div className="flex flex-col w-full h-screen justify-center align-center items-center leading-[0.8]">
            <h1 className="text-[20vw] font-medium font-[family-name:var(--font-new-spirit-condensed)]">
                LANA
            </h1>
            <h1 className="text-[20vw] font-medium font-[family-name:var(--font-new-spirit-condensed)]">
                RAMADAN
            </h1>
            <Positions />
        </div>
        <DownArrowIcon className="mb-10"/>


        {/* poloroids */}
        <Polaroid
            src="/beach.png"
            alt="Beach"
            caption="🌿☀️"
            rotation="-20"
            width={180}
            height={180}
            className="absolute top-[-1vh] left-1"
        />
        <Polaroid 
            src="/beach.png"
            alt="Beach"
            caption="🌿☀️"
            rotation="12"
            width={180}
            height={180}
            className="absolute bottom-9 left-[-1vw]"
        />
        <Polaroid 
            src="/beach.png"
            alt="Beach"
            caption="🌿☀️"
            rotation="-13"
            width={180}
            height={180}
            className="absolute top-24 right-8"
        />
        <Polaroid 
            src="/beach.png"
            alt="Beach"
            caption="🌿☀️"
            rotation="13"
            width={180}
            height={180}
            className="absolute bottom-[-6vh] right-48"
        />


    </div>
  );
}
