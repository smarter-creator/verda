import React, { SVGProps } from "react";

const BagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='15'
      height='13'
      viewBox='0 0 15 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.5938 6.91553V12.0718H1.40625V6.91553M7.5 9.25928V7.38428M9.375 2.69678C9.375 2.69678 9.375 0.821777 7.5 0.821777C5.625 0.821777 5.625 2.69678 5.625 2.69678M0.9375 2.69678H14.0625V6.44678C14.0625 6.44678 11.25 8.32178 7.5 8.32178C3.75 8.32178 0.9375 6.44678 0.9375 6.44678V2.69678Z'
        stroke='white'
        stroke-width='1.2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default BagIcon;
