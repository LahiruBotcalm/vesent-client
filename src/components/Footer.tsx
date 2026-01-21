import React from 'react';
import { HiOutlineOfficeBuilding, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6'; 

// Note: If you don't have react-icons/fa6 installed, you can use 'react-icons/fa' 
// and swap FaXTwitter for FaTwitter, or install the latest version.

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT COLUMN: Brand & Contact (Spans 5 columns on large screens) */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="mb-6 flex items-center">
               {/* Using text to replicate logo if image isn't available, 
                   or use <img src="/assets/logo.png" /> */}
              <span className="text-3xl font-bold tracking-tight text-[#0a1e5e]">
                VESANT<span className="text-[#0a1e5e]">.AI</span>
              </span>
            </div>

            <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-600">
              Enterprise-grade compliance and risk management platform for gaming, crypto, and fintech companies.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <HiOutlineOfficeBuilding className="mt-0.5 h-5 w-5 shrink-0 text-[#1e293b]" />
                <span className="text-sm text-slate-700">
                  105 E. Reno Ave., Suite 8, Las Vegas, NV 89119.
                </span>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <HiOutlineMail className="h-5 w-5 shrink-0 text-[#1e293b]" />
                <a href="mailto:info@vesant.ai" className="text-sm text-slate-700 hover:text-indigo-600 transition-colors">
                  info@vesant.ai
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <HiOutlinePhone className="h-5 w-5 shrink-0 text-[#1e293b]" />
                <span className="text-sm text-slate-700">
                  +1 (410) 302-7987
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Links Columns (Spans remaining space) */}
          {/* Spacer column (optional) or just justify-end logic */}
          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="text-sm font-bold text-slate-900">Legal</h3>
            <ul className="mt-6 space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Compliance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <h3 className="text-sm font-bold text-slate-900">Quick Links</h3>
            <ul className="mt-6 space-y-4">
              {['Industries', 'Features', 'Solution', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Divider, Copyright, Socials */}
        <div className="mt-16 border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            
            {/* Copyright */}
            <p className="text-sm text-slate-400">
              2025 VESANT.AI © All Rights Reserved
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="#" className="text-[#334155] transition-colors hover:text-indigo-600">
                <FaLinkedinIn className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-[#334155] transition-colors hover:text-indigo-600">
                <FaFacebookF className="h-4 w-4" /> {/* Slightly smaller to visually match height */}
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-[#334155] transition-colors hover:text-indigo-600">
                <FaXTwitter className="h-4 w-4" />
                <span className="sr-only">X (Twitter)</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;