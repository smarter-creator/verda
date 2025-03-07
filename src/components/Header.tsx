import Logo from "@/svgs/Logo";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='w-full h-[90px] py-3 flex items-center justify-between px-3 max-w-[1400px] mx-auto'>
      <div>
        <Logo />
      </div>
      <div>
        <button className='px-5 font-medium active:opacity-80 py-2.5 rounded-lg text-black bg-white hover:bg-white/90 cursor-pointer '>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
