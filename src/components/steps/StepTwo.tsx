import ArrowLeft from "@/svgs/ArrowLeft";
import Logo from "@/svgs/Logo";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setActiveStep: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5>>;
};

const StepTwo = ({ setActiveStep }: Props) => {
  return (
    <div className='flex flex-col h-full px-3'>
      <div>
        <button
          className='cursor-pointer'
          onClick={() => setActiveStep((prev) => (prev - 1) as 0)}
        >
          <ArrowLeft />
        </button>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <div className='max-w-[786px] text-center flex items-center justify-center flex-col gap-6'>
          <div className='max-w-[222px] sm:max-w-[500px]'>
            <Logo width={"100%"} height={"100%"} />
          </div>
          <div className='max-w-[90%]'>
            Building Brands and Cultivating voices that shape culture, through
            methods refined in privacy and results witnessed by billions.
          </div>
          <div className='flex gap-4'>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) as 0)}
              className='px-16 font-medium active:opacity-80 py-3.5 rounded-lg text-black bg-white hover:bg-white/90 cursor-pointer '
            >
              Studio
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) as 0)}
              className='px-16 font-medium active:opacity-80 py-3.5 rounded-lg bg-transparent border border-white hover:text-black text-white hover:bg-white/90 cursor-pointer '
            >
              Talent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
