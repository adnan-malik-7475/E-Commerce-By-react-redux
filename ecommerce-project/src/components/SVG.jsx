import React from "react";

const SVGPath = {
  Search:
    "M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z",
  Wishlist:
    "M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z",
  Cart1:
    "M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z",
  Cart2:
    "M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z",
  Cart3: "M3 5H7L10 22H26",
  Cart4:
    "M10 16.6665H25.59C25.7056 16.6666 25.8177 16.6266 25.9072 16.5533C25.9966 16.48 26.0579 16.378 26.0806 16.2646L27.8806 7.26463C27.8951 7.19206 27.8934 7.11717 27.8755 7.04536C27.8575 6.97355 27.8239 6.90662 27.7769 6.8494C27.73 6.79218 27.6709 6.74609 27.604 6.71446C27.5371 6.68283 27.464 6.66645 27.39 6.6665H8",
  logo:
    "M3.5 12H20M20 12L13 5M20 12L13 19"
};

const SVG = ({
  fill,
  width,
  height,
  pathName,
  strokeWidth,
  strokeLinejoin,
  strokeLinecap,
  className,
  viewBox,
  strokeColor,
  pathName2,
  pathName3,
  pathName4,
}) => {
  const path = SVGPath[pathName];
  const path2 = SVGPath[pathName2];
  const path3 = SVGPath[pathName3];
  const path4 = SVGPath[pathName4];

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={viewBox}
      fill="none"
    >
      <path
        d={path}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
      <path
        d={path2}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
      <path
        d={path3}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
      <path
        d={path4}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
    </svg>


  )
 
};

export default SVG;
