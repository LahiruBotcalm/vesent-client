import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 pt-32 text-center sm:px-6 lg:px-8">
      
      {/* Background Glow Effect (Centered behind content) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20 bg-indigo-600 blur-[120px]" />

      {/* 1. Badge / Pill */}
      <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
        <span className="text-sm font-medium text-slate-300">
          Risk Intelligence for the Digital World
        </span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
        <span className="text-indigo-300">Enterprise Compliance</span> Platform
        <br />
        for High Risk Industries
      </h1>

      {/* 3. Subheadline */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        Real time AML screening, fraud prevention, and intelligent case management. 
        Built for gaming, crypto, and fintech companies that demand institutional grade compliance.
      </p>

      {/* 4. CTA Buttons */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        {/* 'View Features' - Outlined Button */}
        <button className="min-w-[160px] rounded-lg border border-slate-700 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-slate-500">
          View Features
        </button>

        {/* 'Schedule Demo' - Solid Blue Button */}
        <button className="min-w-[160px] rounded-lg bg-[#a5b4fc] px-6 py-3 text-sm font-bold text-slate-900 transition-all hover:bg-[#818cf8]">
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