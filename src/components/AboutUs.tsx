import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-0 md:pt-20 md:pb-20 bg-white">
      <img
        src="/assets/bg-star.png"
        alt="Background"
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 
                   w-[90%] md:w-[80%] lg:w-[1200px] opacity-100 object-contain"
      />

      <div className="mx-auto">
        <div className="mb-24 flex flex-col gap-10 md:flex-row md:items-start md:justify-between px-[20px] md:px-[80px]">
          <div className="md:w-1/4">
            <span className="text-[14px] font-inter font-normal uppercase text-slate-600">
              About Us
            </span>
          </div>

          <div className="md:w-[963px]">
            <p className="text-[28px] lg:text-[32px] leading-relaxed text-[#252525] font-inter font-medium text-right">
              <span className="font-bold text-black">VESANT,</span> we offer
              advanced solutions for high-risk industries. Our compliance
              platform streamlines regulatory processes, helping businesses meet
              strict standards while reducing risks. With our innovative tools
              and expert support, we enable organizations to confidently
              navigate complex regulations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          <div className="flex h-64 flex-col justify-center bg-[#1b2c7c]/95 backdrop-blur-sm p-8 text-left text-white transition-transform hover:scale-[1.02] cursor-pointer duration-300">
            <span className="mb-2 text-[20px] font-inter font-medium text-[#8FA9FF]">
              Uptime SLA
            </span>
            <span className="text-[68px] md:text-[80px] font-inter font-bold text-white">
              99.9%
            </span>
          </div>

          <div className="flex h-64 flex-col justify-center bg-[#A3B8FF]/95 backdrop-blur-sm p-8 text-left md:text-center text-white shadow-lg transition-transform hover:scale-[1.02] md:mt-63 cursor-pointer duration-300">
            <span className="mb-2 text-[20px] font-medium text-[#142E82]">
              Response Time
            </span>
            <span className="text-[68px] md:text-[80px] font-inter font-bold text-white">
              &lt;200ms
            </span>
          </div>

          <div className="flex h-64 flex-col justify-center bg-[#1b2c7c]/95 backdrop-blur-sm p-8 text-left md:text-right text-white transition-transform hover:scale-[1.02] cursor-pointer duration-300">
            <span className="mb-2 text-[20px] font-inter font-medium text-[#8FA9FF]">
              Monitoring
            </span>
            <span className="text-[68px] md:text-[80px] font-inter font-bold text-white">
              24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
