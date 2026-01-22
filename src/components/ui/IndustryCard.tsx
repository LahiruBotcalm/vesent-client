import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface IndustryCardProps {
  title: string;
  description: string;
  mainImage: string;
  hoverImageLeft: string;
  hoverImageRight: string;
  imageAlt?: string;
  className?: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  mainImage,
  hoverImageLeft,
  hoverImageRight,
  imageAlt,
  className = '',
}) => {

  const leftImageVariants: Variants = {
    rest: { opacity: 0, x: -60, y: 60 },
    hover: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.5, type: 'spring', bounce: 0.3 } 
    },
  };

  const rightImageVariants: Variants = {
    rest: { opacity: 0, x: 60, y: 60 },
    hover: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.5, type: 'spring', bounce: 0.3, delay: 0.1 } 
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`
        group relative flex flex-col
        /* Enforce fixed height on all screens */
        h-[460px] w-full 
        overflow-hidden 
        shadow-sm hover:shadow-2xl
        transition-all duration-500
        bg-white
        ${className}
      `}
    >

      <div className="absolute inset-0 z-0 pointer-events-none">
        

        <motion.div 
          className="absolute inset-0 w-full h-full"
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 0, transition: { duration: 0.4 } }
          }}
        >
          <img 
            src={mainImage} 
            alt={imageAlt || "Background"} 
            className="w-full h-full object-cover object-bottom"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent" />
        </motion.div>

        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_top,#b1c1f7,#fafafa)]"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.4 } }
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none flex items-end justify-between overflow-hidden">
        {/* Left Pop-up */}
        <motion.img
          src={hoverImageLeft}
          alt="Decoration Left"
          variants={leftImageVariants}
          className="w-[50%] max-w-[240px] h-auto object-contain -ml-4 -mb-4"
        />

        {/* Right Pop-up */}
        <motion.img
          src={hoverImageRight}
          alt="Decoration Right"
          variants={rightImageVariants}
          className="w-[40%] max-w-[200px] h-auto object-contain -mr-4 -mb-4"
        />
      </div>

      <div className="relative z-20 p-8 md:p-10 h-full flex flex-col pointer-events-none">
        <h2 className="text-[32px] font-medium font-inter text-[#252525] leading-tight mb-6 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-[#252525] leading-relaxed font-normal font-inter text-[16px]opacity-90 transition-colors duration-300">
          {description}
        </p>
      </div>

    </motion.div>
  );
};