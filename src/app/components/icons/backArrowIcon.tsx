import React from "react";

type BackArrowIconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const BackArrowIcon: React.FC<BackArrowIconProps> = ({
  width = 29,
  height = 50,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26 3L4 25L26 47"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BackArrowIcon;
