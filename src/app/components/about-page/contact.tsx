export default function Contact() {
  return (
    <div className="relative w-full">
      {/* folder bg */}
      <svg
        width="1512"
        height="584"
        viewBox="0 0 1512 584"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 87V584H1512V87H495.5C477.827 87 463.5 72.6731 463.5 55V32C463.5 14.3269 449.173 0 431.5 0H32C14.3269 0 0 14.3269 0 32V87Z"
          fill="#65463F"
        />

        <text
          x="235"
          y="52"
          textAnchor="middle"
          fontFamily="var(--font-ibm-plex-sans)"
          fontSize="28"
          fontWeight="600"
          fill="#F6F1E8"
        >
          Contact
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
        <div className="font-ibm-plex-sans text-background text-2xl leading-relaxed text-left">
          <p className="mb-6 pt-32">lanamramadan@gmail.com</p>
          <p>linkedin.com/in/lanamramadan</p>
        </div>
      </div>
    </div>
  );
}
