import Subtitle from "./subtitle";

type DetailsProps = {
  title: string;
  overview: string;
  timeline: string;
  duration: string;
  tools: string[];
  role: string;
  team?: string[];
  outcome?: string;
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
  outcome = "",
  textColor,
}: DetailsProps) {
  return (
    <section>
      {/* Project title */}
      <h1 className={`font-new-spirit-condensed ${textColor} text-6xl mb-4`}>
        {title}
      </h1>

      <div className="grid gap-16 grid-cols-5">
        {/* overview */}
        <div className={team.length > 0 ? "col-span-3" : "col-span-4"}>
          <Subtitle text="Project Overview" textColor={textColor} />
          <p className="font-ibm-plex-sans text-text text-lg leading-relaxed whitespace-pre-line">
            {overview}
          </p>
        </div>

        {/* metadata */}
        <div
          className={`flex gap-16 ${
            team.length > 0 ? "col-span-2" : "col-span-1"
          }`}
        >
          {/* left metadata */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Timeline */}
            <div>
              <Subtitle text="Timeline" textColor={textColor} />
              <p className="font-ibm-plex-sans text-text text-lg">{timeline}</p>
              <p className="font-ibm-plex-sans text-text text-lg">{duration}</p>
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

            {/* display role if there is no team */}
            { team.length === 0 && (
                <div>
                  <Subtitle text="Role" textColor={textColor} />
                  <p className="font-ibm-plex-sans text-text text-lg">{role}</p>
                </div>
              )
            }

            {/* outcome — only if provided */}
            {outcome && (
              <div>
                <Subtitle text="Outcome" textColor={textColor} />
                <p className="font-ibm-plex-sans text-text text-lg">
                  {outcome}
                </p>
              </div>
            )}
          </div>

          {/* right metdata */}
          {team.length > 0 && (
            <div className="flex flex-col gap-4 flex-1">
              {/* Role */}
              <div>
                <Subtitle text="Role" textColor={textColor} />
                <p className="font-ibm-plex-sans text-text text-lg">{role}</p>
              </div>

              {/* Team — only if provided */}
              <div>
                <Subtitle text="Team" textColor={textColor} />
                <p className="font-ibm-plex-sans text-text text-lg leading-relaxed">
                  {team.join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
