import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[890px] mx-auto bg-white rounded-[122px] border border-[#fcfcfc] shadow-md shadow-gray-200 flex flex-col md:flex-row items-center justify-between px-8 py-5 mt-6 relative">
      {/* Logo & Hamburger */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/">
          <div
            className="w-11 h-[45px] bg-[url(/clip-path-group.png)] bg-no-repeat bg-contain"
            role="img"
            aria-label="Logo"
          />
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-2 w-full md:w-auto mt-4 md:mt-0`}
      >
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
            className="w-full md:w-auto px-6 py-2 rounded-[10px] font-bold text-[#303030] text-base text-center hover:bg-gray-100 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Create Job Button */}
      <Link
        to="/create-job"
        className="w-full md:w-auto mt-4 md:mt-0 rounded-[30px] px-6 py-2 font-bold text-white text-base bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-center hover:opacity-90 transition-opacity"
      >
        Create Jobs
      </Link>
    </nav>
  );
}
