import Logo from "@/svgs/Logo";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setActiveStep: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5>>;
};

const StepOne = ({ setActiveStep }: Props) => {
  return (
    <div className='flex flex-col h-full'>
      <div></div>
      <div className='flex flex-1 justify-center items-center'>
        <div className='max-w-[786px] text-center flex items-center justify-center flex-col gap-6'>
          <div className='max-w-[222px] sm:max-w-[500px]'>
            <Logo width={"100%"} height={"100%"} />
          </div>
          <div className='max-w-[90%]'>
            At Verda Production, our work stays behind the scenes, but the
            impact is undeniable. We craft brands that shape culture through a
            team of digital experts who navigate the ever-evolving landscape.
          </div>
          <button
            onClick={() => setActiveStep((prev) => prev + 1 as 0)}
            className='px-16 font-medium active:opacity-80 py-3.5 rounded-lg text-black bg-white hover:bg-white/90 cursor-pointer '
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
