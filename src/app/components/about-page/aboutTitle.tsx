import Polaroid from "../polaroid";

export default function AboutTitle() {
  return (
    <div className="sticky top-0 text-dark overflow-hidden flex flex-col relative w-full h-screen justify-between align-center items-center">
      <div className="flex flex-col w-full h-screen justify-center align-center items-center leading-[1] text-[15vw] font-medium font-new-spirit-condensed">
        <h1>Designer</h1>
        <h1>Creative Coder</h1>
        <h1>UX Engineer</h1>
      </div>

      {/* polaroids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center group">
        <div className="z-20 translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-out">
          <Polaroid
            src="/beach.jpg"
            alt="Beach"
            caption="@ the beach"
            rotation="-12"
            width={140}
            rotate={false}
          />
        </div>
        <div className="z-10">
          <Polaroid
            src="/matcha.png"
            alt="Coffee & matcha"
            caption="design fuel"
            rotation="5"
            width={200}
            rotate={false}
          />
        </div>
        <div className="z-0 -translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-out">
          <Polaroid
            src="/city.jpg"
            alt="Coffee"
            caption="in the city"
            rotation="17"
            width={150}
            rotate={false}
          />
        </div>
      </div>
    </div>
  );
}