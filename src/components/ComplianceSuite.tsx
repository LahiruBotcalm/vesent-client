import React from 'react';
import { 
  HiOutlineClipboardList, 
  HiOutlineShieldCheck, 
  HiOutlineGlobeAlt, 
  HiOutlineIdentification, 
  HiOutlineClipboardCheck, 
  HiOutlineUserGroup, 
  HiOutlineUserCircle, 
  HiOutlineDocumentText 
} from 'react-icons/hi';

// Feature Data Interface
interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
  spacer?: boolean; // Helper to create the empty grid slot
}

const FEATURES: FeatureItem[] = [
  // Row 1
  {
    title: 'AML Watchlist Screening',
    description: 'Integrated Sanctions And PEP Screening Powered By Licensed Third-Party Data Providers. Real-Time Checks Against Global Watchlists To Identify High Risk Entities.',
    icon: HiOutlineClipboardList,
  },
  {
    title: 'Fraud Management',
    description: 'Real-Time Fraud Prevention Through Internal And External Fraud Detection Services. Evaluate Transactions And User Activities For Fraud Risk With Instant Decisioning.',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Geolocation Compliance',
    description: 'Location-Based Controls With Device Integrity Verification. Detect VPN/Proxy Usage And Enforce Regional Restrictions In Real Time.',
    icon: HiOutlineGlobeAlt,
  },
  // Row 2
  {
    title: 'Identity Verification (KYC)',
    description: 'Document Verification And Biometric Checks With Liveness Detection. Waterfall Strategy That Starts With Basic KYC And Escalates Based On Predefined Criteria Or Client Preference.',
    icon: HiOutlineIdentification,
  },
  {
    title: 'Intelligent Case Management',
    description: 'Unified Alert Triage And Investigation Workflows. Visual Storytelling Tools Reveal Linked Entities And Patterns Across All Compliance Data.',
    icon: HiOutlineClipboardCheck,
  },
  // EMPTY SPACER to replicate the gap in the 2nd row, 3rd column
  { title: '', description: '', icon: React.Fragment, spacer: true },
  
  // Row 3
  {
    title: 'Role-Based Access Control',
    description: 'Granular Permissions For Compliance Analysts, Managers, Administrators, And Auditors. Configurable Per Client Requirements With Proper Segregation Of Duties.',
    icon: HiOutlineUserGroup,
  },
  {
    title: '360° Customer Profiles',
    description: 'Complete Compliance View With KYC Data, Risk Scores, Watchlist Status, Device Associations, And Alert History In One Unified Profile.',
    icon: HiOutlineUserCircle,
  },
  {
    title: 'Tax Reporting',
    description: 'Ensure Timely And Accurate Tax Reporting With Integrated 1099 And W-2G Reporting And W-9 Solicitation Tools.',
    icon: HiOutlineDocumentText,
  },
];

const ComplianceSuite: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* 1. Header Section */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-[#0a1e5e] sm:text-5xl">
            Comprehensive Compliance Suite
          </h2>
          <p className="mt-4 text-sm text-slate-500 font-medium uppercase tracking-wide">
            Everything you need to manage risk, conduct investigations, and maintain regulatory compliance
          </p>
        </div>

        {/* 2. Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {FEATURES.map((feature, index) => {
            // Determine borders based on grid position (0-8)
            // Right Border: If not the last item in a row (indices 0, 1, 3, 4, 6, 7)
            const hasRightBorder = (index + 1) % 3 !== 0;
            // Bottom Border: If not in the last row (indices 0-5)
            const hasBottomBorder = index < 6;

            if (feature.spacer) {
              return (
                <div 
                  key={`spacer-${index}`} 
                  className={`hidden md:block ${hasBottomBorder ? 'border-b border-gray-200' : ''}`} 
                />
              );
            }

            return (
              <div 
                key={feature.title} 
                className={`
                  flex flex-col items-start p-8 transition-colors hover:bg-slate-50
                  ${hasRightBorder ? 'md:border-r border-gray-200' : ''}
                  ${hasBottomBorder ? 'border-b border-gray-200' : ''}
                `}
              >
                {/* Icon Circle */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <feature.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-medium text-[#0a1e5e]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3. Bottom Button */}
        <div className="mt-16 flex justify-center">
          <button className="rounded bg-[#1e293b] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f172a]">
            Explore All
          </button>
        </div>

      </div>
    </section>
  );
};

export default ComplianceSuite;