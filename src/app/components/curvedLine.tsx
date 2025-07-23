import React from "react";

type CurvedLineProps = {
  width?: number | string;
  height?: number | string;
  stroke?: number | string;
  className?: string;
};

const CurvedLine: React.FC<CurvedLineProps> = ({
  width = 348,
  height = 16,
  stroke = 5.5,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 348 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.03683 7.64984C128 0.695915 216.336 3.23492 344.96 12.332"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CurvedLine;
