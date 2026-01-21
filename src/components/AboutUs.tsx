import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* 1. Top Section: Header & Description */}
        <div className="mb-24 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* Label (Left side) */}
          <div className="md:w-1/4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              About Us
            </span>
          </div>

          {/* Main Paragraph (Right side) */}
          <div className="md:w-3/4">
            <p className="text-2xl font-light leading-relaxed text-gray-400 sm:text-3xl md:text-4xl">
              <span className="font-bold text-slate-900">VESANT,</span> we offer advanced solutions for high-risk industries. 
              Our compliance platform streamlines regulatory processes, 
              helping businesses meet strict standards while reducing risks. 
              With our innovative tools and expert support, we enable 
              organizations to confidently navigate complex regulations.
            </p>
          </div>
        </div>

        {/* 2. Statistics Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Card 1: Uptime SLA (Deep Blue) */}
          <div className="flex h-64 flex-col items-center justify-center rounded-sm bg-[#0a1e5e] p-8 text-center text-white transition-transform hover:scale-[1.02]">
            <span className="mb-2 text-sm font-medium opacity-80">Uptime SLA</span>
            <span className="text-6xl font-bold">99.9%</span>
          </div>

          {/* Card 2: Response Time (Light Blue) - Staggered Down */}
          {/* md:mt-16 pushes this card down on desktop to match the design */}
          <div className="flex h-64 flex-col items-center justify-center rounded-sm bg-[#94a3e0] p-8 text-center text-white shadow-lg transition-transform hover:scale-[1.02] md:mt-16">
            <span className="mb-2 text-sm font-medium text-slate-900/70">Response Time</span>
            <span className="text-6xl font-bold text-white">&lt;200ms</span>
          </div>

          {/* Card 3: Monitoring (Deep Blue) */}
          <div className="flex h-64 flex-col items-center justify-center rounded-sm bg-[#0a1e5e] p-8 text-center text-white transition-transform hover:scale-[1.02]">
            <span className="mb-2 text-sm font-medium opacity-80">Monitoring</span>
            <span className="text-6xl font-bold">24/7</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;