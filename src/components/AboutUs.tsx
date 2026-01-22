import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-20 ">
      <div className="mx-auto max-w-7xl">
        
        {/* 1. Top Section: Header & Description */}
        <div className="mb-24 flex flex-col gap-10 md:flex-row md:items-start md:justify-between px-[20px] md:px-[80px]">
          
          {/* Label (Left side) */}
          <div className="md:w-1/4">
            <span className="text-[14px] font-inter font-normal uppercase  text-[#767676]">
              About Us
            </span>
          </div>

          {/* Main Paragraph (Right side) */}
          <div className="md:w-3/4">
            <p className="text-[28px] lg:text-[32px] leading-relaxed text-[#B0B0B0] font-inter font-medium">
              <span className="text-[#252525]">VESANT,</span> we offer advanced solutions for high-risk industries. 
              Our compliance platform streamlines regulatory processes, 
              helping businesses meet strict standards while reducing risks. 
              With our innovative tools and expert support, we enable 
              organizations to confidently navigate complex regulations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">

          <div className="flex h-64 flex-col justify-center bg-[#1b2c7c] p-8 text-left text-white transition-transform hover:scale-[1.02] cursor-pointer duration-300">
            <span className="mb-2 text-[20px] font-inter font-medium text-[#8FA9FF]">Uptime SLA</span>
            <span className="text-[68px] md:text-[80px] font-inter font-bold text-white">99.9%</span>
          </div>

          <div className="flex h-64 flex-col justify-center bg-[#A3B8FF] p-8 text-left md:text-center text-white shadow-lg transition-transform hover:scale-[1.02] md:mt-63 cursor-pointer duration-300">
            <span className="mb-2 text-[20px] font-medium text-[#142E82]">Response Time</span>
            <span className="text-[68px] md:text-[80px] font-inter font-bold text-white">&lt;200ms</span>
          </div>

          <div className="flex h-64 flex-col justify-center bg-[#1b2c7c] p-8 text-left md:text-right text-white transition-transform hover:scale-[1.02] cursor-pointer duration-300">
            <span className="mb-2 text-[20px] font-inter font-medium text-[#8FA9FF]">Monitoring</span>
            <span className="text-[68px] md:text-[80px] font-inter font-bold text-white">24/7</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;