import React from 'react';

// Define data structure for easy content management
const INDUSTRIES = [
  {
    title: 'Casinos & Online Gaming',
    description: 'Comprehensive player verification, geolocation enforcement, and responsible gaming controls to meet jurisdiction requirements worldwide.',
    image: '/assets/industry-gaming.png', // Placeholder path
    alt: 'Casino chips and digital interface'
  },
  {
    title: 'Cryptocurrency',
    description: 'Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.',
    image: '/assets/industry-crypto.png', // Placeholder path
    alt: 'Mobile crypto trading and coins'
  },
  {
    title: 'Fintech & Payments',
    description: 'Real-time transaction monitoring, wallet screening, and Travel Rule compliance for digital asset platforms and exchanges.',
    image: '/assets/industry-fintech.png', // Placeholder path
    alt: 'Digital wallet and credit card'
  }
];

const Industries: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* 1. Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl font-bold text-[#0a1e5e] sm:text-5xl">
            Built for Regulated Industries
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Real time AML screening, fraud prevention, and intelligent case management. 
            Built for gaming, crypto, and fintech companies that demand institutional grade compliance.
          </p>
        </div>

        {/* 2. Three-Column Grid with Dividers */}
        <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0 md:border-t-0">
          
          {INDUSTRIES.map((item, index) => (
            <div key={index} className="flex flex-col pt-8 md:pt-0 md:px-8 first:md:pl-0 last:md:pr-0">
              
              {/* Text Content */}
              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-medium text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image at bottom */}
              {/* mt-auto ensures image sits at the bottom if text lengths vary */}
              <div className="mt-auto">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-auto object-contain max-h-48 md:max-h-56" 
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Industries;