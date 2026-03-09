import { useState } from "react";

function HoverScaleText({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "inline-block",
        transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        cursor: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

export default HoverScaleText