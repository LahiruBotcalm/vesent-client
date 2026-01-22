import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
  
  {/* Container with rounded corners */}
  <div className="relative overflow-hidden rounded-3xl pt-[40px] pb-[146px] md:pt-24 md:pb-24 px-8 text-center sm:px-16 md:py-20 shadow-sm">
    
    {/* BACKGROUND IMAGE */}
    <img 
      src="/assets/cta-bg.png" 
      alt="Background Gradient" 
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* Left Phone */}
    <img 
      src="/assets/mobilel.png" 
      alt="Mobile App Left" 
      className="absolute -bottom-15 -left-10 w-32 sm:w-40 md:hidden z-0 rotate-6"
    />
    
    {/* Right Phone */}
    <img 
      src="/assets/mobiler.png" 
      alt="Mobile App Right" 
      className="absolute -bottom-12 -right-10 w-32 sm:w-40 md:hidden z-0 -rotate-6"
    />
    {/* -------------------------------------------------- */}
    
    {/* Content */}
    <div className="relative z-10 mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold tracking-tight text-[#0a1e5e] sm:text-4xl md:text-5xl">
        Ready to Transform Your Compliance Operations?
      </h2>
      
      <p className="mt-6 text-[16px] leading-relaxed text-[#252525]">
        See how VESANT.AI can streamline your compliance workflows and reduce risk.
      </p>

      <div className="mt-10">
        <button className="rounded-lg bg-[#142E82] px-[20px] py-[12px] text-[14px] font-medium font-inter text-white shadow-sm transition-colors hover:bg-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e293b]">
          Schedule Your Demo
        </button>
      </div>
    </div>

  </div>
</div>
    </section>
  );
};

export default CTASection;