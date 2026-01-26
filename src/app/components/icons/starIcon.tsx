import React from "react";

type StarIconProps = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

const StarIcon: React.FC<StarIconProps> = ({
  width = 50,
  height = 48,
  color = "currentColor",
  className,
}) => {
  const angle = Math.random() * 360;
  const cx = width / 2;
  const cy = height / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
        <g transform={`rotate(${angle} ${cx} ${cy})`} filter="url(#filter0_d_1832_1905)">
        <path
          d="M26.6217 39.354L20.1186 25.1991L4.52103 26.4425L16.0994 16.4508L9.59634 2.29587L23.2553 10.2756L34.8337 0.28397L31.697 15.2074L45.3559 23.1872L29.7584 24.4306L26.6217 39.354Z"
          fill={color}
        />
        <path
          d="M21.0291 24.8118L20.7243 24.1478L7.51618 25.2007L16.7727 17.2131L17.3201 16.7396L17.01 16.0634L11.7995 4.72149L22.7688 11.1301L23.3967 11.4961L23.9282 11.0376L33.2286 3.01318L30.7145 14.9708L30.5642 15.6838L31.2112 16.062L42.13 22.4414L28.9229 23.4942L28.776 24.1942L26.2554 36.1886L21.0291 24.8118Z"
          stroke="url(#paint0_linear_1832_1905)"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1832_1905"
          x="0.521484"
          y="0.28418"
          width="48.834"
          height="47.0698"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.45098 0 0 0 0 0.517647 0 0 0 0 0.435294 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1832_1905"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1832_1905"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1832_1905"
          x1="45.6539"
          y1="16.6013"
          x2="2.89439"
          y2="21.5515"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor="#FCFBF7" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default StarIcon;
