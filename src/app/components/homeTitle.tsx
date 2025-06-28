import Polaroid from "./polaroid";
import Positions from "./positions";

export default function HomeTitle() {
  return (
    <div className="flex flex-col w-full h-screen justify-center align-center items-center leading-[0.8]">
      <h1 className="text-[20vw] font-medium font-[family-name:var(--font-new-spirit-condensed)]">
        LANA
      </h1>
      <h1 className="text-[20vw] font-medium font-[family-name:var(--font-new-spirit-condensed)]">
        RAMADAN
      </h1>
      <Positions />
    </div>
  );
}
