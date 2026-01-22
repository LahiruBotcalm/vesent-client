import React from "react";
import {
  HiOutlineOfficeBuilding,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-[20px] md:px-[80px] border-t border-gray-100">
      <div className="mx-auto">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-5">
            <div className="mb-6 flex items-center">
              <img
                src="/assets/logob.png"
                alt="VESANT.AI logo"
                className="h-[48px] w-auto"
              />
            </div>

            <p className="mb-8 max-w-sm text-[14px] font-inter font-normal leading-relaxed text-[#252525]">
              Enterprise-grade compliance and risk management platform for
              gaming, crypto, and fintech companies.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiOutlineOfficeBuilding className="mt-0.5 h-5 w-5 shrink-0 text-[#1e293b]" />
                <span className="text-[14px] font-inter font-normal text-black">
                  105 E. Reno Ave., Suite 8, Las Vegas, NV 89119.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineMail className="h-5 w-5 shrink-0 text-[#1e293b]" />
                <a
                  href="mailto:info@vesant.ai"
                  className="text-[14px] font-inter font-normal text-black hover:text-indigo-600 transition-colors"
                >
                  info@vesant.ai
                </a>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlinePhone className="h-5 w-5 shrink-0 text-[#1e293b]" />
                <span className="text-[14px] font-inter font-normal text-black">
                  +1 (410) 302-7987
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="text-[14px] font-inter font-bold text-black">
              Legal
            </h3>
            <ul className="mt-6 space-y-4">
              {["Privacy Policy", "Terms of Service", "Compliance"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[14px] font-inter font-normal text-black hover:text-indigo-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <h3 className="text-[14px] font-inter font-bold text-black">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-4">
              {["Industries", "Features", "Solution", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[14px] font-inter font-normal text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">
              2025 VESANT.AI © All Rights Reserved
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-[#334155] transition-colors hover:text-indigo-600"
              >
                <FaLinkedinIn className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-[#334155] transition-colors hover:text-indigo-600"
              >
                <FaFacebookF className="h-4 w-4" />{" "}
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-[#334155] transition-colors hover:text-indigo-600"
              >
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
