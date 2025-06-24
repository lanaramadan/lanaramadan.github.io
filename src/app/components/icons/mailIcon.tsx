{/* <svg width="61" height="54" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.06494 19.0992L26.0573 3.48162C27.59 2.39316 29.6038 2.25643 31.2696 3.12771L58.4128 17.3246" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M3.81921 18.5294L26.8841 32.3859C28.4201 33.3087 30.3324 33.339 31.8969 32.4653L58.7515 17.4678" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M38.8477 28.8818L57.3259 47.3601" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M4.06494 49.534L22.5432 31.0557" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M2.97803 49.4975C8.49158 50.4313 21.7466 52.1587 30.6583 51.5985C39.57 51.0382 52.1499 49.2641 57.3259 48.447" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M58.4126 18.0122L57.3257 48.447" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M4.06498 19.0992L2.97803 49.534" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
</svg> */}


import React from "react";

type MailIconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const MailIcon: React.FC<MailIconProps> = ({
  width = 61,
  height = 54,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 61 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4.06494 19.0992L26.0573 3.48162C27.59 2.39316 29.6038 2.25643 31.2696 3.12771L58.4128 17.3246" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M3.81921 18.5294L26.8841 32.3859C28.4201 33.3087 30.3324 33.339 31.8969 32.4653L58.7515 17.4678" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M38.8477 28.8818L57.3259 47.3601" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M4.06494 49.534L22.5432 31.0557" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M2.97803 49.4975C8.49158 50.4313 21.7466 52.1587 30.6583 51.5985C39.57 51.0382 52.1499 49.2641 57.3259 48.447" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M58.4126 18.0122L57.3257 48.447" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
<path d="M4.06498 19.0992L2.97803 49.534" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
};

export default MailIcon;
