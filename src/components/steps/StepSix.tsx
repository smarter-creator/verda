import ArrowLeft from "@/svgs/ArrowLeft";
import CompletedIcon from "@/svgs/CompletedIcon";
import StudioIcon from "@/svgs/StudioIcon";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setActiveStep: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5>>;
};

const StepSix = ({ setActiveStep }: Props) => {
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
          <div
            className='flex gap-4 py-12 sm:px-0 px-3 max-w-[568px] flex-col justify-center items-center rounded-4xl border my-5 border-[#7763C366] backdrop-blur-md'
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(254, 248, 255, 0.05) 100%)",
            }}
          >
            <span>
              <CompletedIcon />
            </span>
            <div className='text-4xl font-bold'>Thank You</div>
            <div className='sm:max-w-lg max-w-[320px]'>
              All that information should be sent in an email to
              marketing@verdastudios.com
            </div>
            <button
              onClick={() => setActiveStep(0)}
              className='px-8 font-medium active:opacity-80 py-3.5 rounded-lg text-black bg-white hover:bg-white/90 cursor-pointer '
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSix;
