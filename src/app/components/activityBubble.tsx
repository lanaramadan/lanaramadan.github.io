interface ActivityBubbleProps {
    prefix: string;
    highlight: string;
  }
  
  export default function ActivityBubble({ prefix, highlight }: ActivityBubbleProps) {
    return (
      <div className="font-ibm-plex-sans relative flex flex-col text-xl">
        <div
          className="absolute inset-0 w-[50%] h-full"
          style={{
            backgroundColor: "currentColor",
            opacity: 0.4,
            zIndex: 10,
          }}
        />
        <div
          className="relative z-20 text-[#261817] p-2"
          style={{ backgroundColor: "transparent" }}
        >
          <p>
            {prefix} <span className="underline italic">{highlight}</span>
          </p>
        </div>
      </div>
    );
  }
  