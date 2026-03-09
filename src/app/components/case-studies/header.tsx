type HeaderProps = {
  gradient: string;
  mockup: string;
  alt?: string;
};

export default function Header({ gradient, mockup, alt = "App mockup" }: HeaderProps) {
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
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 h-[85%] object-contain"
        draggable={false}
      />
    </div>
  );
}