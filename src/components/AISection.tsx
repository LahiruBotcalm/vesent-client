import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

const QUERIES = [
  "Show me all high-risk customers from the last 7 days",
  "How many AML alerts are pending investigation?",
  "Summarize fraud trends by transaction type this month",
  "Which jurisdictions have the highest KYC failure rates?"
];

const AISection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-[#0a1e5e] sm:text-5xl lg:text-6xl">
              Intelligent Compliance Solutions Powered by AI
            </h2>
            
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Ask questions in plain English. VESANT's embedded GPT interface translates natural 
              language into structured queries across your entire compliance dataset. Available on 
              every page, the AI assistant provides instant analysis, retrieves records, and delivers 
              context-aware insights all while maintaining complete data isolation between clients.
            </p>

            {/* Green Accent Subsection */}
            <div className="mt-10 flex gap-4">
              {/* Vertical Green Bar */}
              <div className="w-1.5 shrink-0 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 h-auto self-stretch" />
              
              <div>
                <h3 className="text-2xl font-medium text-slate-900">
                  Enterprise-Grade Data Security
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-600">
                  Your data is strictly isolated. Other clients cannot access your information, 
                  and OpenAI does not use your data for model training. Complete privacy and 
                  confidentiality guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm lg:p-12">
            <h3 className="text-3xl font-medium text-slate-900">
              Example Queries
            </h3>
            <p className="mt-4 text-slate-500">
              Explore some sample queries to quickly understand the types of insights you can retrieve from the system.
            </p>

            {/* Query List */}
            <div className="mt-8 space-y-4">
              {QUERIES.map((query, index) => (
                <button 
                  key={index}
                  className="group flex w-full items-center justify-between rounded-full border border-slate-200 bg-white p-2 pl-6 transition-all hover:border-indigo-300 hover:shadow-md"
                >
                  <span className="text-left text-sm font-medium text-slate-700 sm:text-base">
                    {query}
                  </span>
                  
                  {/* Circle Icon Wrapper */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600">
                    <HiChevronRight className="h-5 w-5" />
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AISection;