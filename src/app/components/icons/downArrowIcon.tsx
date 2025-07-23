import React from "react";

type DownArrowIconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const DownArrowIcon: React.FC<DownArrowIconProps> = ({
  width = 23,
  height = 34,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.4393 33.0607C11.0251 33.6464 11.9749 33.6464 12.5607 33.0607L22.1066 23.5147C22.6924 22.9289 22.6924 21.9792 22.1066 21.3934C21.5208 20.8076 20.5711 20.8076 19.9853 21.3934L11.5 29.8787L3.01472 21.3934C2.42893 20.8076 1.47919 20.8076 0.893399 21.3934C0.307613 21.9792 0.307613 22.9289 0.893399 23.5147L10.4393 33.0607ZM11.5 0L10 6.55671e-08L10 32L11.5 32L13 32L13 -6.55671e-08L11.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DownArrowIcon;
