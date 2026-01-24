import Polaroid from "../polaroid";
import Positions from "./positions";

export default function HomeTitle() {
  return (
    <div className="sticky top-0 text-dark overflow-hidden flex flex-col relative w-full h-screen justify-between align-center items-center">
      <div className="flex flex-col w-full h-screen justify-center align-center items-center leading-[0.8] text-[20vw] font-medium font-new-spirit-condensed">
        <h1>LANA</h1>
        <h1>RAMADAN</h1>
        <Positions />
      </div>

      <div className="pb-8 font-eternate text-2xl">
        ↓ <span className="font-bold">scroll down</span> ↓
      </div>

      {/* poloroids */}
      <Polaroid
        src="/beach.png"
        alt="Beach"
        caption="🌊☀️"
        rotation="20"
        width={180}
        height={180}
        className="absolute top-[-8vh] left-64 hidden sm:block"
      />
      <Polaroid
        src="/matcha.png"
        alt="Coffee & matcha"
        caption="☕️☕️"
        rotation="12"
        width={180}
        height={180}
        className="absolute bottom-9 left-[-1vw] hidden sm:block"
      />
      <Polaroid
        src="/coffee.png"
        alt="Beach"
        caption="🍵🍵"
        rotation="-13"
        width={180}
        height={180}
        className="absolute top-24 right-8 hidden sm:block"
      />
      <Polaroid
        src="/city.png"
        alt="nyc"
        caption="🚕🚕"
        rotation="13"
        width={180}
        height={180}
        className="absolute bottom-[-6vh] right-48 hidden sm:block"
      />
    </div>
  );
}
