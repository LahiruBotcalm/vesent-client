import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Container with rounded corners */}
        <div className="relative overflow-hidden rounded-3xl py-16 px-8 text-center sm:px-16 md:py-20 shadow-sm">
          
          {/* BACKGROUND IMAGE */}
          {/* This image sits behind the content and covers the entire container */}
          <img 
            src="/assets/cta-bg.png" 
            alt="Background Gradient" 
            className="absolute inset-0  h-full w-full object-cover"
          />
          
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#0a1e5e] sm:text-4xl md:text-5xl">
              Ready to Transform Your Compliance Operations?
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              See how VESANT.AI can streamline your compliance workflows and reduce risk.
            </p>

            <div className="mt-10">
              <button className="rounded-lg bg-[#1e293b] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e293b]">
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