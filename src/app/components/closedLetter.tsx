type ClosedLetterProps = {
  rotate?: number;
  scale?: number;
};

export default function ClosedLetter({ rotate = 0, scale = 1 }: ClosedLetterProps) {
  const width = 530 * scale;
  const height = 301 * scale;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 530 301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <rect
        width="529.97"
        height="300.316"
        fill="url(#paint0_linear_2036_1033)"
      />
      <g clipPath="url(#clip0_2036_1033)">
        <g filter="url(#filter0_di_2036_1033)">
          <path
            d="M264.985 150.158L0.00012207 303.147V-2.83102L264.985 150.158Z"
            fill="#DBDCD4"
          />
        </g>
        <g filter="url(#filter1_di_2036_1033)">
          <path
            d="M264.985 150.158L529.97 303.147V-2.83102L264.985 150.158Z"
            fill="#DBDCD4"
          />
        </g>
      </g>
      <g clipPath="url(#clip1_2036_1033)">
        <g filter="url(#filter2_di_2036_1033)">
          <path
            d="M260.8 105.523C263.667 103.661 267.363 103.661 270.23 105.523L546.99 285.284C554.217 289.979 550.893 301.2 542.275 301.2H-11.2448C-19.8629 301.2 -23.1872 289.979 -15.9598 285.284L260.8 105.523Z"
            fill="url(#paint1_linear_2036_1033)"
          />
        </g>
      </g>
      <g clipPath="url(#clip2_2036_1033)">
        <g filter="url(#filter3_di_2036_1033)">
          <path
            d="M260.8 194.793C263.667 196.655 267.363 196.655 270.23 194.793L546.99 15.0322C554.217 10.3379 550.893 -0.88327 542.275 -0.88327H-11.2448C-19.8629 -0.88327 -23.1872 10.3379 -15.9598 15.0322L260.8 194.793Z"
            fill="url(#paint2_linear_2036_1033)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_di_2036_1033"
          x="-1.0597"
          y="-4.42096"
          width="267.105"
          height="309.865"
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
          <feOffset dy="-0.52997" />
          <feGaussianBlur stdDeviation="0.52997" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1033"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1033"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.29654" />
          <feGaussianBlur stdDeviation="1.50158" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1033"
          />
        </filter>
        <filter
          id="filter1_di_2036_1033"
          x="258.095"
          y="-10.4273"
          width="278.764"
          height="319.757"
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
          <feOffset dy="-0.706627" />
          <feGaussianBlur stdDeviation="3.4448" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1033"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1033"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.29654" />
          <feGaussianBlur stdDeviation="1.50158" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1033"
          />
        </filter>
        <filter
          id="filter2_di_2036_1033"
          x="-20.6234"
          y="104.127"
          width="572.277"
          height="198.486"
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
          <feOffset dy="0.706627" />
          <feGaussianBlur stdDeviation="0.353313" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1033"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1033"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.64985" />
          <feGaussianBlur stdDeviation="0.52997" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1033"
          />
        </filter>
        <filter
          id="filter3_di_2036_1033"
          x="-20.6234"
          y="-0.883301"
          width="572.277"
          height="198.486"
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
          <feOffset dy="0.706627" />
          <feGaussianBlur stdDeviation="0.353313" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1033"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1033"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.64985" />
          <feGaussianBlur stdDeviation="0.52997" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1033"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2036_1033"
          x1="264.985"
          y1="0"
          x2="264.985"
          y2="300.316"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DBDCD4" />
          <stop offset="1" stopColor="#B5BCB0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2036_1033"
          x1="265.515"
          y1="102.461"
          x2="269.136"
          y2="298.903"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B5BCB0" />
          <stop offset="1" stopColor="#DBDCD4" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2036_1033"
          x1="265.515"
          y1="197.855"
          x2="265.515"
          y2="-1.5899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B5BCB0" />
          <stop offset="1" stopColor="#DBDCD4" />
        </linearGradient>
        <clipPath id="clip0_2036_1033">
          <rect width="529.97" height="300.316" fill="white" />
        </clipPath>
        <clipPath id="clip1_2036_1033">
          <rect
            width="529.97"
            height="197.855"
            fill="white"
            transform="translate(0 102.461)"
          />
        </clipPath>
        <clipPath id="clip2_2036_1033">
          <rect
            width="529.97"
            height="197.855"
            fill="white"
            transform="matrix(1 0 0 -1 0 197.855)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
