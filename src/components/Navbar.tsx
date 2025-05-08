import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[890px] mx-auto bg-white rounded-[122px] border border-[#fcfcfc] shadow-[0px_0px_8px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-5 mt-6 relative">
      {/* Logo & Hamburger */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="flex">
          <div
            className="w-11 h-[45px] bg-[url(/Logo.png)] bg-no-repeat bg-contain"
            role="img"
            aria-label="Logo"
          />
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${
          isMenuOpen ? "fixed" : "hidden"
        } md:hidden inset-0 bg-white z-50 flex flex-col py-4 px-6`}
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between w-full pb-4 border-b border-gray-100">
          <Link to="/" className="flex">
            <div
              className="w-11 h-[45px] bg-[url(/Logo.png)] bg-no-repeat bg-contain"
              role="img"
              aria-label="Logo"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Mobile Menu Items */}
        <div className="flex flex-col items-center gap-4 w-full mt-8">
          {[
            { label: "Home", path: "/" },
            { label: "Find Jobs", path: "/find-jobs" },
            { label: "Find Talents", path: "/find-talents" },
            { label: "About us", path: "/about" },
            { label: "Testimonials", path: "/testimonials" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="w-full py-3 font-bold text-[#303030] text-lg text-center hover:bg-gray-100 transition-colors rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Create Job Button for mobile */}
          <Link
            to="/create-job"
            className="w-full mt-4 rounded-[30px] px-6 py-3 font-bold text-white text-base bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-center hover:opacity-90 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            Create Jobs
          </Link>
        </div>
      </div>

      {/* Desktop Menu Links (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-2">
        {[
          { label: "Home", path: "/" },
          { label: "Find Jobs", path: "/find-jobs" },
          { label: "Find Talents", path: "/find-talents" },
          { label: "About us", path: "/about" },
          { label: "Testimonials", path: "/testimonials" },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="px-6 py-2 rounded-[10px] font-bold text-[#303030] text-base text-center hover:bg-gray-100 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Create Job Button for desktop */}
      <Link
        to="/create-job"
        className="hidden md:block rounded-[30px] px-6 py-2 font-bold text-white text-base bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-center hover:opacity-90 transition-opacity"
      >
        Create Jobs
      </Link>
    </nav>
  );
}