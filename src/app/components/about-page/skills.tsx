export default function Skills() {
  return (
    <div className="relative w-full">
      {/* folder bg */}
      <svg
        width="1512"
        height="644"
        viewBox="0 0 1512 644"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 87V644H1512V87H907C889.327 87 875 72.6731 875 55V32C875 14.3269 860.673 0 843 0H483.5C465.827 0 451.5 14.3269 451.5 32V55C451.5 72.6731 437.173 87 419.5 87H0Z"
          fill="#6D5A56"
        />

        <text
          x="670"
          y="52"
          textAnchor="middle"
          fontFamily="var(--font-ibm-plex-sans)"
          fontSize="28"
          fontWeight="600"
          fill="#F6F1E8"
        >
          Skills
        </text>
      </svg>

      {/* content overlay */}
      <div className="absolute inset-0 px-16 py-12 overflow-hidden">
        <div
          className="hidden sm:block select-none float-right"
          style={{
            width: 700,
            transform: "rotate(0deg)",
            marginLeft: "2rem",
            marginTop: "-4rem",
            marginRight: "-2rem",
          }}
        >
          <img
            src="/skills.png"
            alt="Laptop"
            draggable={false}
            style={{ width: "100%", height: "80%", display: "block" }}
          />
        </div>

        {/* text */}
        <div className="font-ibm-plex-sans text-background text-2xl leading-relaxed">
          <p className="mb-6 pt-36">
            <span className="font-medium">Design Skills</span>
            <br />
            User Research · Usability Testing ·  Iterative Design · Journey
            Mapping · Persona Development · Competitive Analysis · Storyboarding
            · Information Architecture · Design Systems
          </p>
          <p>
            <span className="font-medium">Design Tools</span>
            <br />
            Figma · Adobe Creative Suite · HTML · CSS · JavaScript · TypeScript
            · Angular · React{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
