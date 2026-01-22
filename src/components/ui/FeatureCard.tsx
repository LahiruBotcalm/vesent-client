import React from "react";

interface FeatureCardProps {
  iconImage: string;
  /** Optional: The colored version of the icon to show on hover */
  hoverIconImage?: string; 
  borderColor: string;
  title: string;
  description: string;
  hoverBgClass?: string;
  hoverTextClass?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconImage,
  hoverIconImage,
  borderColor,
  title,
  description,
  hoverBgClass = "hover:bg-gray-50",
  hoverTextClass = "group-hover:text-[#142E82]", 
}) => {
  return (
    <div 
      className={`flex flex-col items-start group p-6 transition-colors duration-300 ease-in-out md:h-[320px] ${hoverBgClass} cursor-pointer`} 
    >
      <div
        className={`
          flex h-16 w-16 items-center justify-center rounded-full border-7  
          ${borderColor}
          transition-colors duration-300
        `}
      >
        <div className="relative h-8 w-8">
          {/* 1. Default Icon */}
          <img
            src={iconImage}
            alt={`${title} icon`}
            className={`
              absolute inset-0 h-full w-full object-contain p-1
              transition-opacity duration-300
              ${hoverIconImage ? 'group-hover:opacity-0' : ''}
            `}
          />

          {/* 2. Hover Icon (Only renders if prop is provided) */}
          {hoverIconImage && (
            <img
              src={hoverIconImage}
              alt={`${title} active icon`}
              className="
                absolute inset-0 h-full w-full object-contain p-1
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            />
          )}
        </div>
      </div>

      <h3 
        className={`
          mt-6 text-[20px] md:text-[24px] font-inter font-medium leading-tight text-[#252525] 
          transition-colors duration-300
          ${hoverTextClass}
        `}
      >
        {title}
      </h3>

      <p 
        className={`
          mt-4 text-[14px] font-inter font-normal leading-relaxed text-[#252525]/80 
          transition-colors duration-300
          ${hoverTextClass}
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;