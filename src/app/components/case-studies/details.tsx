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
          <h2
            className={`font-new-spirit-condensed ${textColor} text-3xl mb-2`}
          >
            Project Overview
          </h2>
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
            <h3
              className={`font-new-spirit-condensed ${textColor} text-3xl mb-2`}
            >
              Timeline
            </h3>
            <p className="font-ibm-plex-sans text-text text-lg">{timeline}</p>
            <p className="font-ibm-plex-sans text-text text-lg">{duration}</p>
          </div>

          {/* Role */}
          <div>
            <h3
              className={`font-new-spirit-condensed ${textColor} text-3xl mb-2`}
            >
              Role
            </h3>
            <p className="font-ibm-plex-sans text-text text-lg">{role}</p>
          </div>

          {/* Tools */}
          <div>
            <h3
              className={`font-new-spirit-condensed ${textColor} text-3xl mb-2`}
            >
              Tools
            </h3>
            {tools.map((tool) => (
              <p key={tool} className="font-ibm-plex-sans text-text text-lg">
                {tool}
              </p>
            ))}
          </div>

          {/* Team — only if provided */}
          {team.length > 0 && (
            <div>
              <h3
                className={`font-new-spirit-condensed ${textColor} text-3xl mb-2`}
              >
                Team
              </h3>
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
