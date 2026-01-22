

interface FeatureCardProps {
  iconImage: string;
  borderColor: string; 
  title: string;
  description: string;
}

const MobileFeatureCard = ({ item, index }: { item: FeatureCardProps, index: number }) => {
  // Logic to alternate colors: Even = Dark Blue, Odd = Light Blue
  const isDark = index % 2 === 0;

  return (
    <div 
      className={`
        flex flex-col items-start p-8 min-h-[284px]
        ${isDark ? 'bg-[#0a1e5e] text-white' : 'bg-[#94a3e0] text-[#0a1e5e]'}
        bg-noise-overlay
      `}
    >
      {/* Icon Circle */}
      <div
        className={`
          flex h-16 w-16 items-center justify-center rounded-full border-7 mb-6
          ${isDark ? 'bg-[#1e3a8a] border-white/20' : 'bg-[#7084d6] border-[#0a1e5e]/20'}
        `}
      >
        <img
          src={item.iconImage}
          alt={`${item.title} icon`}
          className="h-8 w-8 object-contain"
          style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }} 
        />
      </div>

      <h3 className="text-2xl font-semibold leading-tight mb-4">
        {item.title}
      </h3>

      <p className={`text-base leading-relaxed ${isDark ? 'text-white/80' : 'text-[#0a1e5e]/80'}`}>
        {item.description}
      </p>
    </div>
  );
};

export default MobileFeatureCard;
