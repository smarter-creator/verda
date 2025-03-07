import Header from "@/components/Header";
import StepFive from "@/components/steps/StepFive";
import StepFour from "@/components/steps/StepFour";
import StepOne from "@/components/steps/StepOne";
import StepSix from "@/components/steps/StepSix";
import StepThree from "@/components/steps/StepThree";
import StepTwo from "@/components/steps/StepTwo";
import { Inter } from "next/font/google";
import { useState } from "react";

const geistMono = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const [activeStep, setActiveStep] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);

  const steps = {
    0: <StepOne setActiveStep={setActiveStep} />,
    1: <StepTwo setActiveStep={setActiveStep} />,
    2: <StepThree setActiveStep={setActiveStep} />,
    3: <StepFour setActiveStep={setActiveStep} />,
    4: <StepFive setActiveStep={setActiveStep} />,
    5: <StepSix setActiveStep={setActiveStep} />,
  };
  return (
    <div
      className={`${geistMono.variable} bg-[url("/bg.jpg")] flex flex-col bg-cover bg-center w-full h-screen overflow-y-auto`}
    >
      <Header />
      <div className='flex-1 max-w-[1400px] w-full mx-auto'>
        {steps[activeStep]}
      </div>
    </div>
  );
}
