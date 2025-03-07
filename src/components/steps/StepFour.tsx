import ArrowLeft from "@/svgs/ArrowLeft";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setActiveStep: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5>>;
};

const StepFour = ({ setActiveStep }: Props) => {
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
            className='flex gap-4 p-6 sm:min-w-[672px] rounded-4xl border my-5 border-[#7763C366] backdrop-blur-md'
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(254, 248, 255, 0.05) 100%)",
            }}
          >
            <form className='w-full flex flex-col gap-3.5'>
              <h1 className='text-3xl font-bold'>
                Verda Studios Application Form
              </h1>
              <div className='flex flex-col items-start gap-0.5'>
                <label className='flex items-center gap-2 font-medium'>
                  TikToK
                </label>
                <input
                  type='text'
                  placeholder='Enter Link of Tiktok Profile'
                  className='w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#939292] focus-within:border-white outline-none'
                />
              </div>
              <div className='flex flex-col items-start gap-0.5'>
                <label className='flex items-center gap-2 font-medium'>
                  Facebook
                </label>
                <input
                  type='text'
                  placeholder='Enter Link of Facebook Profile'
                  className='w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#939292] focus-within:border-white outline-none'
                />
              </div>
              <div className='flex flex-col items-start gap-0.5'>
                <label className='flex items-center gap-2 font-medium'>
                  Instagram
                </label>
                <input
                  type='text'
                  placeholder='Enter Link of Instagram Profile'
                  className='w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#939292] focus-within:border-white outline-none'
                />
              </div>
              <div className='flex flex-col items-start gap-0.5'>
                <label className='flex items-center gap-2 font-medium'>
                  Discord Username
                </label>
                <input
                  type='text'
                  placeholder='YourName#123'
                  className='w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#939292] focus-within:border-white outline-none'
                />
              </div>
              <div className='flex flex-col items-start gap-0.5'>
                <label className='flex items-center gap-2 font-medium'>
                  Favourite Youtube Video
                </label>
                <input
                  type='text'
                  placeholder='Enter Link of your favorite Youtube video you ‘ve ever seen'
                  className='w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#939292] focus-within:border-white outline-none'
                />
              </div>
              <div className='flex flex-col items-start gap-0.5'>
                <label className='flex items-center gap-2 font-medium'>
                  Describe your portfolio
                </label>
                <textarea
                  placeholder='e.g., I have 5 years of experience in video editing....'
                  className='w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#939292] focus-within:border-white outline-none'
                />
              </div>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) as 0)}
                className='px-14 font-semibold active:opacity-80 py-2.5 rounded-lg text-black bg-white hover:bg-white/90 cursor-pointer '
              >
                Submit
              </button>
            </form>
            {/* <button className='px-16 font-medium active:opacity-80 py-3.5 rounded-lg bg-transparent border border-white hover:text-black text-white hover:bg-white/90 cursor-pointer '>
          Talent
        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
