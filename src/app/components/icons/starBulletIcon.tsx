import React from "react";

type StarBulletIconProps = {
    width?: number | string;
    height?: number | string;
};

const StarBulletIcon: React.FC<StarBulletIconProps> = ({
    width = 19,
    height = 22,
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2653 2.64062L12.2941 4.82509C12.3324 7.72131 13.6246 10.4586 15.8363 12.3289L16.9163 13.2421L15.5117 13.4081C12.6353 13.7481 10.0475 15.3186 8.41806 17.7133L7.18903 19.5194L7.16017 17.3349C7.1219 14.4387 5.82975 11.7014 3.61802 9.83114L2.53805 8.91791L3.9426 8.75189C6.81905 8.4119 9.40677 6.84142 11.0363 4.44678L12.2653 2.64062Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    )
}

export default StarBulletIcon