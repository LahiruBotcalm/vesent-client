import React from 'react';

interface FeatureCardProps {
  iconImage: string;
  borderColor: string; // Expected to be a Tailwind border color class like 'border-[#7284d2]'
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconImage,
  borderColor,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start max-w-sm">
      {/* Icon Container with Outer Border */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border-7 bg-white ${borderColor}`}
      >
        {/* Inner Icon Image */}
        <img
          src={iconImage}
          alt={`${title} icon`}
          className="h-8 w-8 object-contain p-1"
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-[20px] md:text-[24px] font-inter font-medium leading-tight text-[#252525]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-[14px] font-inter font-normal leading-relaxed text-[#252525]/80">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;