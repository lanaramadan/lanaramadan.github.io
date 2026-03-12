type HeaderProps = {
  gradient: string;
  mockup: string;
  alt?: string;
  desktop?: boolean;
};

export default function Header({ gradient, mockup, alt = "App mockup", desktop = false }: HeaderProps) {
  return (
    <div className="relative w-full h-[75vh] overflow-hidden mb-8 rounded-b-[6em] -mt-[76px]">
      <img
        src={gradient}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <img
        src={mockup}
        alt={alt}
        className={`absolute ${!desktop ? "bottom-[5%]" : "bottom-[0%]"} left-1/2 -translate-x-1/2 h-[85%] object-contain`}
        draggable={false}
      />
    </div>
  );
}