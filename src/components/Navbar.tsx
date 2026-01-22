import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { name: "Industries", href: "#industries" },
  { name: "Features", href: "#features" },
  { name: "Solution", href: "#solution" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-gray-900 py-6 transition-all duration-300 ">
      <div className="mx-auto flex items-center justify-between px-[20px] md:px-[80px]">
        <div className="flex-shrink-0 cursor-pointer">
          <img
            src="/assets/logo.png"
            alt="VESANT.AI"
            className="h-[42px] w-auto sm:h-10"
          />
        </div>

        <div className="hidden items-center gap-8 sm:flex">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="rounded-lg border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-slate-500 cursor-pointer duration-300">
            Request Demo
          </button>
        </div>

        <div className="flex sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center rounded-lg bg-slate-800/50 p-2 text-white ring-1 ring-white/10 transition-colors hover:bg-slate-800"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-white/5 bg-[#020617]/95 px-4 py-6 backdrop-blur-md sm:hidden">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full rounded-lg bg-indigo-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-indigo-500">
              Request Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
