import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 pt-32 text-center sm:px-6 lg:px-8">
      
      {/* Background Glow Effect (Centered behind content) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20 bg-indigo-600 blur-[120px]" />

      {/* 1. Badge / Pill */}
      <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-[#FFFFFF1A] px-4 py-1.5 backdrop-blur-sm font-inter font-normal">
        <span className="text-sm font-medium text-[#ACACAC]">
          Risk Intelligence for the Digital World
        </span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="text-[32px] tracking-tight text-white sm:text-6xl lg:text-[68px] font-inter font-medium">
        <span className="text-[#A3B8FF]">Enterprise Compliance</span> Platform
        <br />
        for High Risk Industries
      </h1>

      {/* 3. Subheadline */}
      <p className="mt-6 max-w-2xl text-[14px] lg:text-[16px] leading-relaxed text-white font-inter font-normal">
        Real time AML screening, fraud prevention, and intelligent case management. 
        Built for gaming, crypto, and fintech companies that demand institutional grade compliance.
      </p>

      {/* 4. CTA Buttons */}
      <div className="mt-10 flex items-center gap-[24px] flex-row ">
        {/* 'View Features' - Outlined Button */}
        <button className="min-w-[160px] rounded-lg border border-[#A3B8FF] bg-transparent px-[20px] py-[12px] text-[14px] font-medium text-[#A3B8FF] transition-all hover:bg-white/5 hover:text-white hover:border-white cursor-pointer duration-300">
          View Features
        </button>

        {/* 'Schedule Demo' - Solid Blue Button */}
        <button className="min-w-[160px] rounded-lg bg-[#A3B8FF] px-[20px] py-[12px] text-[14px] font-inter font-bold text-slate-900 transition-all hover:bg-[#818cf8] cursor-pointer duration-300">
          Schedule Demo
        </button>
      </div>

      {/* 5. Dashboard Preview Image */}
      {/* Added margin-top (mt-16) for spacing and container constraints */}
      <div className="mt-16 flex w-full max-w-[1200px] justify-center">
        <img
          src="/assets/dashboard-preview.png" // Ensure this path is correct for your project
          alt="VESANT.AI Compliance Command Center Dashboard Interface"
          // Styling: Rounded corners, subtle border, and a soft indigo shadow for depth
          className="h-auto w-full rounded-xl border border-white/10 shadow-2xl shadow-indigo-900/20"
        />
      </div>

    </section>
  );
};

export default Hero;