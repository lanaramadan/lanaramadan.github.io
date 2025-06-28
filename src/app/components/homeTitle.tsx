import Polaroid from "./polaroid";
import Positions from "./positions";
import DownArrowIcon from "./icons/downArrowIcon";

export default function HomeTitle() {
  return (
    <div className="flex flex-col w-full h-screen justify-center align-center items-center leading-[0.8]">
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


    </div>
  );
}
