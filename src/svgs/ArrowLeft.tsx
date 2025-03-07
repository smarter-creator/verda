import React, { SVGProps } from "react";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M30 15.9375H3.66211L15.1904 27.4658L13.8721 28.7842L0.0878906 15L13.8721 1.21582L15.1904 2.53418L3.66211 14.0625H30V15.9375Z'
        fill='white'
      />
    </svg>
  );
};

export default ArrowLeft;
