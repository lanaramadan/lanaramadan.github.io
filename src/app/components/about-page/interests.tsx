export default function Interests() {
  return (
    <div className="relative w-full">
      {/* folder bg */}
      <svg
        width="1512"
        height="628"
        viewBox="0 0 1512 628"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1512 87V628H0V87H1016.5C1034.17 87 1048.5 72.6731 1048.5 55V32C1048.5 14.3269 1062.83 0 1080.5 0H1480C1497.67 0 1512 14.3269 1512 32V87Z"
          fill="#E3D8CE"
        />
        <text
          x="1280"
          y="52"
          textAnchor="middle"
          fontFamily="var(--font-ibm-plex-sans)"
          fontSize="28"
          fontWeight="600"
          fill="#65463F"
        >
          Interests
        </text>
      </svg>

      {/* content overlay */}
      <div className="absolute inset-0 px-16 py-12 overflow-hidden">
        <div
          className="hidden sm:block select-none float-left"
          style={{
            width: 700,
            transform: "rotate(0deg)",
            marginLeft: "2rem",
            marginTop: "-4rem",
            marginRight: "-4rem",
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
        <div className="font-ibm-plex-sans text-text text-2xl leading-relaxed">
          <p className="mb-6 pt-40 text-left">
            When I&apos;m not designing, you&apos;ll probably catch me crocheting,
            developing my film, getting lost in Pinterest boards, going to the
            beach, or sipping on a matcha latte &lt;3
          </p>
        </div>
      </div>
    </div>
  );
}
