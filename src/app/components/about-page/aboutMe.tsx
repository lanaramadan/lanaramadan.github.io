export default function AboutMe() {
  return (
    <div className="relative w-full">
      {/* folder bg */}
      <svg
        width="1512"
        height="614"
        viewBox="0 0 1512 614"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 87V614H1512V87H496.5C478.827 87 464.5 72.6731 464.5 55L464.5 32C464.5 14.3269 450.173 0 432.5 0H63C45.3269 0 31 14.3269 31 32V56C31 73.1208 17.1208 87 0 87Z"
          fill="#F6F1E8"
        />
        <text
          x="250"
          y="52"
          textAnchor="middle"
          fontFamily="var(--font-ibm-plex-sans)"
          fontSize="28"
          fontWeight="600"
          fill="#65463F"
        >
          About Me
        </text>
      </svg>

      {/* content overlay */}
      <div className="absolute inset-0 px-16 py-12 overflow-hidden">
        <div
          className="hidden sm:block select-none float-right"
          style={{
            width: 400,
            transform: "rotate(12deg)",
            marginLeft: "2rem",
            marginTop: "-1rem",
            marginRight: "-1rem",
          }}
        >
          <img
            src="/camera.png"
            alt="Camera with a picture of Lana"
            draggable={false}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* text */}
        <div className="font-ibm-plex-sans text-text text-2xl leading-relaxed text-left">
          <p className="mb-6 pt-24">
            Hi there!
            <br />
            I&apos;m a fourth-year Computer Science & Informatics
            (Human-Computer Interaction) student at UC Irvine, passionate about
            storytelling through human-centered design.
          </p>
          <p>
            I blend a designer&apos;s eye with a developer&apos;s mindset to
            build engineer-friendly solutions for user problems. My goal is
            creating interfaces that are both functional, but genuinely human:
            design that tells stories, inspires change, and enhances community
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
