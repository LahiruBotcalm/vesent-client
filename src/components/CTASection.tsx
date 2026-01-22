import React from "react";
import { motion, type Variants } from "framer-motion";

const CTASection: React.FC = () => {
  // Animation for the image coming from the left
  const slideRightVariants: Variants = {
    rest: { x: -150, opacity: 0 },
    hover: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", bounce: 0.3 },
    },
  };

  // Animation for the image coming from the right
  const slideLeftVariants: Variants = {
    rest: { x: 150, opacity: 0 },
    hover: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <section id="contact" className="bg-white md:py-24 px-[20px] md:px-[80px]">
      <div className="mx-auto">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="
            relative overflow-hidden rounded-3xl 
            pt-[40px] pb-[146px] md:py-24 
            px-8 text-center sm:px-16 
            shadow-sm
            /* Ensure the background color is solid white behind the image if needed */
            bg-white
          "
        >
          {/* 1. Default Background Image (Always Visible) */}
          <img
            src="/assets/cta-bg.png"
            alt="Background Gradient"
            className="absolute inset-0 h-full w-full object-cover z-0"
          />

          {/* 2. Left Hover Image (Slides in from Left) */}
          <motion.img
            src="/assets/mobilel.png"
            alt="Mobile App Left"
            variants={slideRightVariants}
            className="
              absolute bottom-0 left-0 
              w-32 sm:w-40 md:w-56 lg:w-64 
              z-1 pointer-events-none
              object-contain rotate-6 translate-y-4
            "
          />

          {/* 3. Right Hover Image (Slides in from Right) */}
          <motion.img
            src="/assets/mobiler.png"
            alt="Mobile App Right"
            variants={slideLeftVariants}
            className="
              absolute bottom-0 right-0 
              w-32 sm:w-40 md:w-56 lg:w-64 
              z-1 pointer-events-none
              object-contain -rotate-6 translate-y-4
            "
          />

          {/* 4. Content (Sits on top) */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-[28px] md:text-[56px] font-medium font-inter leading-[40px] md:leading-[64px] text-[#0a1e5e]">
              Ready to Transform Your Compliance Operations?
            </h2>

            <p className="mt-6 text-[16px] font-inter font-normal leading-relaxed text-[#252525]">
              See how VESANT.AI can streamline your compliance workflows and
              reduce risk.
            </p>

            <div className="mt-10">
              <button className="rounded-lg bg-[#142E82] px-[20px] py-[12px] text-[14px] font-medium font-inter text-white shadow-sm transition-colors hover:bg-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e293b] cursor-pointer duration-300">
                Schedule Your Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;