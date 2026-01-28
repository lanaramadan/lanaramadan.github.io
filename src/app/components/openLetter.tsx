"use client";

import { motion } from "framer-motion";

type OpenLetterProps = {
  hovered?: boolean;
  scale?: number;

};

export default function OpenLetter({ hovered = false, scale = 1 }: OpenLetterProps) {
  const width = 530 * scale;
  const height = 485 * scale;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 530 485"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* envelope top */}
      <g clipPath="url(#clip0_2036_1085)">
        <g clipPath="url(#clip1_2036_1085)">
          <g filter="url(#filter0_di_2036_1085)">
            <path
              d="M269.17 15.9585C266.302 14.096 262.607 14.096 259.74 15.9585L-17.02 195.719C-24.2474 200.414 -20.9232 211.635 -12.305 211.635L541.214 211.635C549.833 211.635 553.157 200.414 545.93 195.719L269.17 15.9585Z"
              fill="url(#paint0_linear_2036_1085)"
            />
          </g>
        </g>
      </g>

      {/* enevelope back */}
      <rect
        y="184.606"
        width="529.97"
        height="300.316"
        fill="url(#paint1_linear_2036_1085)"
      />

      {/* images */}
      <g>
        <motion.g
          animate={{
            y: hovered ? -240 : 0,
            x: hovered ? -164 : 0,
            rotate: hovered ? -8 : 0,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <g filter="url(#filter1_di_2036_1085)">
            <rect
              width="238.069"
              height="159.383"
              transform="matrix(0.899693 -0.380109 0.413717 0.935304 22.0146 168.163)"
              fill="#F8F4F0"
              shapeRendering="crispEdges"
            />
            <rect
              x="-0.0158056"
              y="-0.00668122"
              width="238.093"
              height="159.407"
              transform="matrix(0.899693 -0.380109 0.413717 0.935304 22.0158 168.157)"
              stroke="#F8F4F0"
              strokeWidth="0.024068"
              shapeRendering="crispEdges"
            />

            <image
              width="225.199"
              height="146.513"
              transform="matrix(0.899693 -0.380109 0.413717 0.935304 30.4663 171.736)"
              href="/coffee.png"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </motion.g>

        <motion.g
          animate={{
            y: hovered ? -130 : 0,
            x: hovered ? 120 : 40,
            rotate: hovered ? -15 : 0,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <g filter="url(#filter5_di_2036_1085)">
            <rect
              width="240.01"
              height="152.645"
              transform="matrix(0.976819 0.222905 -0.193119 0.978162 0.478516 277.087)"
              fill="#F8F4F0"
              shapeRendering="crispEdges"
            />
            <rect
              x="-0.00943106"
              y="-0.0144537"
              width="240.034"
              height="152.669"
              transform="matrix(0.976819 0.222905 -0.193119 0.978162 0.475506 277.089)"
              stroke="#F8F4F0"
              strokeWidth="0.024068"
              shapeRendering="crispEdges"
            />
            <image
              width="227.14"
              height="139.775"
              transform="matrix(0.976819 0.222905 -0.193119 0.978162 5.52148 284.816)"
              href="/waves.png"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </motion.g>

        <motion.g
          animate={{ y: hovered ? -60 : 0, rotate: hovered ? 10 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <g filter="url(#filter2_di_2036_1085)">
            <rect
              width="241.033"
              height="151.328"
              transform="matrix(0.989711 0.115993 -0.0784428 0.999873 280.114 144.29)"
              fill="#F8F4F0"
              shapeRendering="crispEdges"
            />
            <rect
              x="-0.0109662"
              y="-0.0134283"
              width="241.057"
              height="151.352"
              transform="matrix(0.989711 0.115993 -0.0784428 0.999873 280.113 144.291)"
              stroke="#F8F4F0"
              strokeWidth="0.024068"
              shapeRendering="crispEdges"
            />

            <image
              width="228.163"
              height="138.458"
              transform="matrix(0.989711 0.115993 -0.0784428 0.999873 285.978 151.47)"
              href="/working.png"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </motion.g>

        <motion.g
          animate={{
            y: hovered ? -110 : 0,
            x: hovered ? 150 : 0,
            rotate: hovered ? -10 : 0,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <g filter="url(#filter3_di_2036_1085)">
            <rect
              width="236.787"
              height="161.379"
              transform="matrix(0.973096 -0.147884 0.185018 0.998221 129.561 65.0168)"
              fill="#F8F4F0"
              shapeRendering="crispEdges"
            />
            <rect
              x="-0.0139368"
              y="-0.010233"
              width="236.811"
              height="161.403"
              transform="matrix(0.973096 -0.147884 0.185018 0.998221 129.562 65.0148)"
              stroke="#F8F4F0"
              strokeWidth="0.024068"
              shapeRendering="crispEdges"
            />

            <image
              width="223.917"
              height="148.509"
              transform="matrix(0.973096 -0.147884 0.185018 0.998221 137.013 70.4888)"
              href="/beach.jpg"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </motion.g>

        <motion.g
          animate={{
            y: hovered ? -190 : 0,
            x: hovered ? -180 : 0,
            rotate: hovered ? -15 : 0,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <g filter="url(#filter4_di_2036_1085)">
            <rect
              width="239.242"
              height="153.508"
              transform="matrix(0.960392 0.298853 -0.272215 0.954911 176.102 168.474)"
              fill="#F8F4F0"
              shapeRendering="crispEdges"
            />
            <rect
              x="-0.00828154"
              y="-0.0150878"
              width="239.266"
              height="153.532"
              transform="matrix(0.960392 0.298853 -0.272215 0.954911 176.097 168.475)"
              stroke="#F8F4F0"
              strokeWidth="0.024068"
              shapeRendering="crispEdges"
            />

            <image
              width="226.372"
              height="140.638"
              transform="matrix(0.960392 0.298853 -0.272215 0.954911 180.53 176.542)"
              href="/matcha.png"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </motion.g>
      </g>

      {/* envelope bottom */}
      <g clipPath="url(#clip0_2036_1085)">
        {/* envelope sides */}
        <g clipPath="url(#clip2_2036_1085)">
          <g filter="url(#filter6_di_2036_1085)">
            <path
              d="M264.985 334.764L-0.00012207 487.753V181.775L264.985 334.764Z"
              fill="#DBDCD4"
            />
          </g>
          <g filter="url(#filter7_di_2036_1085)">
            <path
              d="M264.985 334.764L529.97 487.753V181.775L264.985 334.764Z"
              fill="#DBDCD4"
            />
          </g>
        </g>

        <g clipPath="url(#clip3_2036_1085)">
          <path
            d="M260.8 290.13C263.667 288.267 267.363 288.267 270.23 290.13L546.99 469.89C554.217 474.585 550.893 485.806 542.275 485.806H-11.2448C-19.8629 485.806 -23.1872 474.585 -15.9598 469.89L260.8 290.13Z"
            fill="url(#paint2_linear_2036_1085)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_di_2036_1085"
          x="-31.7531"
          y="7.84869"
          width="585.702"
          height="211.912"
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
          <feOffset dx="-3.35648" dy="0.706627" />
          <feGaussianBlur stdDeviation="3.70979" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1085"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1085"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="15.0158" />
          <feGaussianBlur stdDeviation="0.52997" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1085"
          />
        </filter>
        <filter
          id="filter1_di_2036_1085"
          x="15.5826"
          y="72.9085"
          width="291.044"
          height="250.48"
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
          <feOffset dx="-0.973967" dy="0.695691" />
          <feGaussianBlur stdDeviation="2.71319" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1085"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1085"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.139138" />
          <feGaussianBlur stdDeviation="0.0695691" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1085"
          />
        </filter>
        <filter
          id="filter2_di_2036_1085"
          x="261.817"
          y="139.532"
          width="261.328"
          height="190.173"
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
          <feOffset dx="-0.973967" dy="0.695691" />
          <feGaussianBlur stdDeviation="2.71319" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1085"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1085"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.139138" />
          <feGaussianBlur stdDeviation="0.0695691" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1085"
          />
        </filter>
        <filter
          id="filter3_di_2036_1085"
          x="123.132"
          y="25.2416"
          width="271.183"
          height="207.016"
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
          <feOffset dx="-0.973967" dy="0.695691" />
          <feGaussianBlur stdDeviation="2.71319" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1085"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1085"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.139138" />
          <feGaussianBlur stdDeviation="0.0695691" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1085"
          />
        </filter>
        <filter
          id="filter4_di_2036_1085"
          x="127.884"
          y="163.713"
          width="282.465"
          height="228.998"
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
          <feOffset dx="-0.973967" dy="0.695691" />
          <feGaussianBlur stdDeviation="2.71319" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1085"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1085"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.139138" />
          <feGaussianBlur stdDeviation="0.0695691" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1085"
          />
        </filter>
        <filter
          id="filter5_di_2036_1085"
          x="-35.4287"
          y="272.327"
          width="274.834"
          height="213.721"
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
          <feOffset dx="-0.973967" dy="0.695691" />
          <feGaussianBlur stdDeviation="2.71319" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2036_1085"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1085"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.139138" />
          <feGaussianBlur stdDeviation="0.0695691" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2036_1085"
          />
        </filter>
        <filter
          id="filter6_di_2036_1085"
          x="-1.05994"
          y="180.185"
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
            result="effect1_dropShadow_2036_1085"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1085"
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
            result="effect2_innerShadow_2036_1085"
          />
        </filter>
        <filter
          id="filter7_di_2036_1085"
          x="258.095"
          y="174.179"
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
            result="effect1_dropShadow_2036_1085"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2036_1085"
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
            result="effect2_innerShadow_2036_1085"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2036_1085"
          x1="264.455"
          y1="12.896"
          x2="264.455"
          y2="180.367"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DBDCD4" />
          <stop offset="1" stopColor="#B5BCB0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2036_1085"
          x1="264.985"
          y1="184.606"
          x2="264.985"
          y2="484.923"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DBDCD4" />
          <stop offset="1" stopColor="#B5BCB0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2036_1085"
          x1="265.515"
          y1="287.067"
          x2="269.136"
          y2="483.509"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B5BCB0" />
          <stop offset="1" stopColor="#DBDCD4" />
        </linearGradient>
        <clipPath id="clip0_2036_1085">
          <rect width="529.97" height="484.923" fill="white" />
        </clipPath>
        <clipPath id="clip1_2036_1085">
          <rect
            width="529.97"
            height="197.855"
            fill="white"
            transform="matrix(-1 0 0 1 529.97 12.896)"
          />
        </clipPath>
        <clipPath id="clip2_2036_1085">
          <rect
            width="529.97"
            height="300.316"
            fill="white"
            transform="translate(0 184.606)"
          />
        </clipPath>
        <clipPath id="clip3_2036_1085">
          <rect
            width="529.97"
            height="197.855"
            fill="white"
            transform="translate(0 287.067)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
