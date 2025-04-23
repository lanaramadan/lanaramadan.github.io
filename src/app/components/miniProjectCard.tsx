import Image from "next/image";

type MiniProjectCardProps = {
  project: string;
  imageSrc: string;
  link: string;
  desktop: boolean
};

export default function MiniProjectCard({ project, imageSrc, link, desktop }: MiniProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#946968] underline underline-offset-2 hover:text-[#946968] no-underline"
    >
      <div 
        className="pt-6 pl-6 pr-6 font-serif"
        style={{
          paddingBottom: '0.5px',
          backgroundImage: 'repeating-linear-gradient(0deg, #946968, #946968 16px, transparent 16px, transparent 23px, #946968 23px), repeating-linear-gradient(90deg, #946968, #946968 16px, transparent 16px, transparent 23px, #946968 23px), repeating-linear-gradient(180deg, #946968, #946968 16px, transparent 16px, transparent 23px, #946968 23px), repeating-linear-gradient(270deg, #946968, #946968 16px, transparent 16px, transparent 23px, #946968 23px)',
          backgroundSize: '2px 100%, 100% 2px, 2px 100% , 100% 2px',
          backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        <div className="relative flex justify-center mb-3 h-36"> {/* Adjust height as needed */}
          {/* Background rectangle */}
          <div className="absolute bg-[#D0C0BE] rounded-2xl w-[240px] h-[120px] top-1/2 -translate-y-[70%]"></div>

          {/* Image */}
          <Image
            src={imageSrc}
            alt={`${project} screenshot`}
            width={220}
            height={140}
            className="relative z-10 rounded-md"
          />
        </div>

        <p className="text-xl font-bold text-center mb-2">{project}</p>
      </div>
    </a>
  );
}

