import React from "react";
import { HiChevronRight } from "react-icons/hi";

const QUERIES = [
  "Show me all high-risk customers from the last 7 days",
  "How many AML alerts are pending investigation?",
  "Summarize fraud trends by transaction type this month",
  "Which jurisdictions have the highest KYC failure rates?",
];

const AISection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* UPDATED GRID LAYOUT:
          - lg:grid-cols-5: Creates a 5-column grid.
          - Left column uses lg:col-span-3 (60%).
          - Right column uses lg:col-span-2 (40%).
        */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-20 lg:items-center">
          {/* LEFT COLUMN: Text Content (60%) */}
          <div className="lg:col-span-11">
            <h2 className="text-[32px] md:text-[56px] font-medium font-inter leading-tight text-[#142E82]">
              Intelligent Compliance Solutions Powered by AI
            </h2>

            <p className="mt-8 text-[16px] font-normal font-inter leading-relaxed text-[#252525]">
              Ask questions in plain English. VESANT's embedded GPT interface
              translates natural language into structured queries across your
              entire compliance dataset. Available on every page, the AI
              assistant provides instant analysis, retrieves records, and
              delivers context-aware insights all while maintaining complete
              data isolation between clients.
            </p>

            {/* Green Accent Subsection */}
            <div className="mt-10 flex gap-4">
              {/* Vertical Green Bar */}
              <div className="w-1.5 shrink-0 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 h-auto self-stretch" />

              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium font-inter  text-[#252525]">
                  Enterprise-Grade Data Security
                </h3>
                <p className="mt-3 text-[16px] font-normal font-inter leading-relaxed text-[#252525]">
                  Your data is strictly isolated. Other clients cannot access
                  your information, and OpenAI does not use your data for model
                  training. Complete privacy and confidentiality guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Card (40%) */}
          <div
            className="lg:col-span-9 relative overflow-hidden rounded-2xl border border-slate-100 shadow-sm p-8 lg:p-12 
    bg-gradient-to-br from-[#b0c6ff] to-white md:bg-none md:bg-white"
          >
            {/* Star Asset - Visible only below MD */}
            <img
              src="/assets/stars.png"
              alt="Decorative stars"
              className="absolute -right-6 -top-6 w-40 object-contain pointer-events-none md:hidden"
            />

            <div className="relative z-10">
              <h3 className="text-[28px] md:text-[40px] font-medium font-inter leading-relaxed text-[#252525]">
                Example Queries
              </h3>
              <p className="mt-4 text-[14px] font-normal font-inter leading-relaxed text-[#252525]">
                Explore some sample queries to quickly understand the types of
                insights you can retrieve from the system.
              </p>

              {/* Query List */}
              <div className="mt-8 space-y-4">
                {QUERIES.map((query, index) => (
                  <button
                    key={index}
                    className="group flex w-full items-center justify-between rounded-full border border-slate-200 p-2 pl-6 transition-all hover:border-indigo-300 hover:shadow-md
            bg-white/80 md:bg-white"
                  >
                    <span className="truncate  text-left text-[14px] font-medium text-[#252525]">
                      {query}
                    </span>

                    {/* Circle Icon Wrapper */}
                    {/* Mobile: Blue Gradient | Desktop (md+): Grey with Indigo Hover */}
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm transition-all 
            bg-gradient-to-b from-[#6384ff] to-[#466ae6] text-white 
            md:bg-none md:bg-slate-50 md:text-slate-400 
            md:group-hover:bg-indigo-50 md:group-hover:text-indigo-600 md:group-hover:scale-100 group-hover:scale-105"
                    >
                      <HiChevronRight className="h-5 w-5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
