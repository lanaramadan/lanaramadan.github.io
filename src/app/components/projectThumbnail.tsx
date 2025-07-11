import DesktopThumbnail from "./desktopThumbnail";
import PhoneThumbnail from "./phoneThumbnail";

export default function ProjectThumbnail({
  desktop,
  images,
}: {
  desktop: boolean;
  images: string[];
}) {
  return (
    <div className="relative w-fit h-40 flex pt-6">
      {/* bg */}
      <div 
        className="absolute bottom-4 w-72 h-36  rounded-2xl z-0"  
        style={{
          backgroundColor: "currentColor",
          opacity: 0.4,
        }}
      />

      {desktop ? (
        <DesktopThumbnail image={images[0]} />
      ) : (
        <PhoneThumbnail images={images} /> 
      )}
    </div>
  );
}