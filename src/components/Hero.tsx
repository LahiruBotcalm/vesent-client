import React from "react";
import Silk from "./Silk";

function GradientLines() {
  return (
    <div
      className="absolute h-[1131px] left-1/2 top-[calc(50%+78px)] -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] pointer-events-none"
      data-name="Gradient Lines"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 1131"
      >
        <g id="Gradient Lines">
          <line
            id="Line 1"
            stroke="url(#paint0_linear_1_1197)"
            x1="80.5"
            x2="80.5"
            y1="2.18557e-08"
            y2="1131"
          />
          <line
            id="Line 3"
            stroke="url(#paint1_linear_1_1197)"
            x1="720.5"
            x2="720.5"
            y1="2.18557e-08"
            y2="1131"
          />
          <line
            id="Line 2"
            stroke="url(#paint2_linear_1_1197)"
            x1="1360.5"
            x2="1360.5"
            y1="2.18557e-08"
            y2="1131"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_1197"
            x1="79.5"
            x2="79.5"
            y1="-2.18557e-08"
            y2="1131"
          >
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_1_1197"
            x1="719.5"
            x2="719.5"
            y1="-2.18557e-08"
            y2="1131"
          >
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_1_1197"
            x1="1359.5"
            x2="1359.5"
            y1="-2.18557e-08"
            y2="1131"
          >
            <stop stopColor="#142E82" stopOpacity="0" />
            <stop offset="0.5" stopColor="#142E82" />
            <stop offset="1" stopColor="#142E82" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute h-[1287px] left-0 top-0 w-full overflow-hidden z-10"
      data-name="Background"
    >
      <div
        className="absolute h-[1287px] left-0 right-0 top-0 flex justify-center items-center"
        data-name="BG Gradient Image"
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Silk
            speed={5.2}
            scale={0.5}
            color="#132c7e"
            noiseIntensity={0.2}
            rotation={1.2}
          />
        </div>
      </div>
      <GradientLines />
    </div>
  );
}

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 pt-32 text-center sm:px-6 lg:px-8">
      <Background />

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-[#FFFFFF1A] px-4 py-1.5 backdrop-blur-sm font-inter font-normal">
          <span className="text-sm font-medium text-[#ACACAC]">
            Risk Intelligence for the Digital World
          </span>
        </div>

        <h1 className="text-[32px] tracking-tight text-white sm:text-6xl lg:text-[68px] font-inter font-medium">
          <span className="text-[#A3B8FF]">Enterprise Compliance</span> Platform
          <br />
          for High Risk Industries
        </h1>

        <p className="mt-6 max-w-2xl text-[14px] lg:text-[16px] leading-relaxed text-white font-inter font-normal">
          Real time AML screening, fraud prevention, and intelligent case
          management. Built for gaming, crypto, and fintech companies that
          demand institutional grade compliance.
        </p>

        <div className="mt-10 flex items-center gap-[24px] flex-row ">
          <button className="min-w-[160px] rounded-lg border border-[#A3B8FF] bg-transparent px-[20px] py-[12px] text-[14px] font-medium text-[#A3B8FF] transition-all hover:bg-white/5 hover:text-white hover:border-white cursor-pointer duration-300">
            View Features
          </button>

          <button className="min-w-[160px] rounded-lg bg-[#A3B8FF] px-[20px] py-[12px] text-[14px] font-inter font-bold text-slate-900 transition-all hover:bg-[#818cf8] cursor-pointer duration-300">
            Schedule Demo
          </button>
        </div>

        <div className="mt-16 flex w-full max-w-[1200px] justify-center">
          <img
            src="/assets/dashboard-preview.png"
            alt="VESANT.AI Compliance Command Center Dashboard Interface"
            className="h-auto w-full rounded-xl border border-white/10 shadow-2xl shadow-indigo-900/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
