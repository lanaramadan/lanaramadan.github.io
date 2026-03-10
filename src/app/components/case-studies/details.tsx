import Subtitle from './subtitle'

type DetailsProps = {
  title: string;
  overview: string;
  timeline: string;
  duration: string;
  tools: string[];
  role: string;
  team?: string[];
  textColor: string;
};

export default function Details({
  title,
  overview,
  timeline,
  duration,
  tools,
  role,
  team = [],
  textColor,
}: DetailsProps) {
  return (
    <section>
      {/* Project title */}
      <h1 className={`font-new-spirit-condensed ${textColor} text-6xl mb-4`}>
        {title}
      </h1>

      <div
        className="grid gap-16 grid-cols-5"
      >
        {/* Left: overview */}
        <div className={team.length > 0 ? "col-span-3" : "col-span-4"}>
          <Subtitle text="Project Overview" textColor={textColor} />
          <p className="font-ibm-plex-sans text-text text-lg leading-relaxed whitespace-pre-line">
            {overview}
          </p>
        </div>

        {/* Right: metadata */}
        <div
          className={`${team.length > 0 ? "col-span-2" : "col-span-1"} ${
            team.length > 0
              ? "grid grid-cols-2 gap-y-8 content-start"
              : "flex flex-col gap-8"
          } `}
        >
          {/* Timeline */}
          <div>
            <Subtitle text="Timeline" textColor={textColor} />
            <p className="font-ibm-plex-sans text-text text-lg">{timeline}</p>
            <p className="font-ibm-plex-sans text-text text-lg">{duration}</p>
          </div>

          {/* Role */}
          <div>
            <Subtitle text="Role" textColor={textColor} />
            <p className="font-ibm-plex-sans text-text text-lg">{role}</p>
          </div>

          {/* Tools */}
          <div>
            <Subtitle text="Tools" textColor={textColor} />
            {tools.map((tool) => (
              <p key={tool} className="font-ibm-plex-sans text-text text-lg">
                {tool}
              </p>
            ))}
          </div>

          {/* Team — only if provided */}
          {team.length > 0 && (
            <div>
              <Subtitle text="Team" textColor={textColor} />
              <p className="font-ibm-plex-sans text-text text-lg leading-relaxed">
                {team.join(", ")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
