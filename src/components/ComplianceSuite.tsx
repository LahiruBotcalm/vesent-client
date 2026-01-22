import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FeatureCard from './FeatureCard';

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import MobileFeatureCard from './MobileFeatureCard';

// Data Structure
const FEATURES = [
  // ROW 1
  {
    iconImage: "/assets/icon1.png",
    borderColor: "border-[#90A7F7]",
    title: "AML Watchlist Screening",
    description: "Integrated Sanctions And PEP Screening Powered By Licensed Third-Party Data Providers. Real-Time Checks Against Global Watchlists To Identify High Risk Entities."
  },
  {
    iconImage: "/assets/icon2.png",
    borderColor: "border-[#1B3DAC]",
    title: "Fraud Management",
    description: "Real-Time Fraud Prevention Through Internal And External Fraud Detection Services. Evaluate Transactions And User Activities For Fraud Risk With Instant Decisioning."
  },
  {
    iconImage: "/assets/icon1.png",
    borderColor: "border-[#90A7F7]",
    title: "Geolocation Compliance",
    description: "Location-Based Controls With Device Integrity Verification. Detect VPN/Proxy Usage And Enforce Regional Restrictions In Real Time."
  },
  // ROW 2
  {
    iconImage: "/assets/icon2.png",
    borderColor: "border-[#1B3DAC]",
    title: "Identity Verification (KYC)",
    description: "Document Verification And Biometric Checks With Liveness Detection. Waterfall Strategy That Starts With Basic KYC And Escalates Based On Predefined Criteria Or Client Preference."
  },
  {
    iconImage: "/assets/icon2.png",
    borderColor: "border-[#90A7F7]",
    title: "Intelligent Case Management",
    description: "Unified Alert Triage And Investigation Workflows. Visual Storytelling Tools Reveal Linked Entities And Patterns Across All Compliance Data."
  },
  // ROW 3
  {
    iconImage: "/assets/icon2.png",
    borderColor: "border-[#1B3DAC]",
    title: "Role-Based Access Control",
    description: "Granular Permissions For Compliance Analysts, Managers, Administrators, And Auditors. Configurable Per Client Requirements With Proper Segregation Of Duties."
  },
  {
    iconImage: "/assets/icon1.png",
    borderColor: "border-[#90A7F7]",
    title: "360° Customer Profiles",
    description: "Complete Compliance View With KYC Data, Risk Scores, Watchlist Status, Device Associations, And Alert History In One Unified Profile."
  },
  {
    iconImage: "/assets/icon2.png",
    borderColor: "border-[#1B3DAC]",
    title: "Tax Reporting",
    description: "Ensure Timely And Accurate Tax Reporting With Integrated 1099 And W-2G Reporting And W-9 Solicitation Tools."
  }
];


// --- Helper: Chunk Array into groups of 2 ---
const chunkArray = (arr: typeof FEATURES, size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};



// --- Main Component ---
const ComplianceSuite: React.FC = () => {
  // Create chunks of 2 items
  const featureChunks = chunkArray(FEATURES, 2);

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 text-left md:text-center">
           <h2 className="text-4xl font-bold text-[#0a1e5e] sm:text-5xl">
            Comprehensive<br className="md:hidden"/> Compliance Suite
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto hidden md:block">
            Everything you need to manage risk and meet regulatory requirements in one unified platform.
          </p>
          <p className="mt-4 text-lg text-slate-600 md:hidden">
            Everything you need to manage risk, conduct investigations, and maintain regulatory compliance
          </p>
        </div>

        {/* DESKTOP VIEW (Grid) - Unchanged */}
        <div className="hidden md:flex flex-col gap-16 lg:gap-0">
          <div className="relative grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8"><FeatureCard {...FEATURES[0]} /></div>
            <div className="hidden lg:block absolute right-[66.66%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <div className="p-8"><FeatureCard {...FEATURES[1]} /></div>
            <div className="hidden lg:block absolute right-[33.33%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <div className="p-8"><FeatureCard {...FEATURES[2]} /></div>
          </div>
          <div className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
             <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -ml-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
             <div className="p-8 lg:pl-20"><FeatureCard {...FEATURES[3]} /></div>
             <div className="p-8 lg:pl-20"><FeatureCard {...FEATURES[4]} /></div>
          </div>
          <div className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="relative grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8"><FeatureCard {...FEATURES[5]} /></div>
            <div className="hidden lg:block absolute right-[66.66%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <div className="p-8"><FeatureCard {...FEATURES[6]} /></div>
            <div className="hidden lg:block absolute right-[33.33%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <div className="p-8"><FeatureCard {...FEATURES[7]} /></div>
          </div>
        </div>

        {/* ======================= */}
        {/* MOBILE VIEW (Swiper with 2 Rows) */}
        {/* ======================= */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1} // Shows one full column (2 cards) + a peek
            spaceBetween={16}
            centeredSlides={false}
            pagination={{ clickable: true, dynamicBullets: false }}
            className="
                !pb-16
                [&_.swiper-pagination-bullet]:opacity-100
                [&_.swiper-pagination-bullet]:!rounded-none
                [&_.swiper-pagination-bullet]:!w-[40px]
                [&_.swiper-pagination-bullet]:!h-[4px]
                [&_.swiper-pagination-bullet]:bg-slate-200
                [&_.swiper-pagination-bullet-active]:!bg-[#142E82]
                [&_.swiper-pagination-bullet]:mx-[4px]
                [&_.swiper-pagination-bullet]:transition-all
            "
          >
            {/* Map through the CHUNKS, not the individual items */}
            {featureChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={chunkIndex}>
                {/* Vertical Stack Container for 2 Rows */}
                <div className="flex flex-col gap-4">
                  {chunk.map((item, itemIndex) => {
                    // Calculate the original index to maintain correct alternating colors
                    const globalIndex = chunkIndex * 2 + itemIndex;
                    return (
                      <MobileFeatureCard 
                        key={globalIndex} 
                        item={item} 
                        index={globalIndex} 
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 md:mt-16 justify-center hidden md:flex">
          <button className="rounded-[8px] bg-[#142E82] px-[32px] py-[12px] text-[14px] font-medium font-inter text-white shadow-sm hover:bg-[#0f172a] transition-colors">
            Explore All
          </button>
        </div>

      </div>
    </section>
  );
};

export default ComplianceSuite;