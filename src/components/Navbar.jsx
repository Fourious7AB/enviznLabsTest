import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/icons/logo.png";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
<header className="relative z-50 w-full pt-4 overflow-hidden">
  <div className="container-custom">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none">
        <div className="w-[700px] h-[180px] bg-orange-500/20 blur-[120px] rounded-full" />
      </div>

      <nav
        className="
          relative
          overflow-hidden
          mx-auto
          w-full
          max-w-7xl
          rounded-[32px]
          border
          border-[#332638]
          bg-[#0a040d]/95
          backdrop-blur-xl
          px-4
          sm:px-6
          md:px-8
          py-4
        "
      >
        {/* Right Corner Navbar Glow */}
        <div
          className="
            absolute
            top-0
            right-0
            w-[280px]
            h-[120px]
            bg-[#ff6a00]
            opacity-40
            blur-[80px]
            rounded-full
            pointer-events-none
          "
        />

        {/* Main Navbar */}
        <div className="relative z-10 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Sales Mastery"
                className="w-7 h-7 object-contain"
              />

              <span className="text-white text-[14px] sm:text-[17px] font-medium whitespace-nowrap">
                Sales Mastery
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <a
                href="#"
                className="text-sm text-white transition hover:text-orange-400"
              >
                Testimonials
              </a>

              <a
                href="#"
                className="text-sm text-white transition hover:text-orange-400"
              >
                Pricing
              </a>

              <a
                href="#"
                className="text-sm text-white transition hover:text-orange-400"
              >
                FAQs
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            {/* Desktop Button */}
            <button className="relative hidden md:block">
              {/* Button Glow */}
              <div
                className="
                  absolute
                  -top-4
                  right-6
                  w-36
                  h-8
                  bg-[#ff6a00]
                  opacity-90
                  blur-[24px]
                  rounded-full
                  pointer-events-none
                "
              />

              {/* Orange Highlight Line */}
              <div
                className="
                  absolute
                  top-0
                  right-10
                  w-24
                  h-[2px]
                  bg-[#ff8a3d]
                  blur-[2px]
                  rounded-full
                  pointer-events-none
                "
              />

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  gap-3
                  min-w-[180px]
                  px-10
                  py-[17px]
                  rounded-full
                  border
                  border-[#44405a]
                  bg-[#030112]
                  text-white
                  text-[15px]
                  font-medium
                  transition-all
                  duration-300
                "
              >
                Enroll Now
                <ChevronRight size={18} />
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                md:hidden
                flex
                items-center
                justify-center
                h-10
                w-10
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-300
              "
            >
              {mobileMenu ? (
                <X size={20} className="text-white" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div
            className="
              md:hidden
              mt-4
              border-t
              border-white/10
              pt-4
              pb-2
              flex
              flex-col
              gap-4
              relative
              z-10
            "
          >
            <a
              href="#"
              className="text-white/80 text-sm hover:text-orange-400 transition"
            >
              Testimonials
            </a>

            <a
              href="#"
              className="text-white/80 text-sm hover:text-orange-400 transition"
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-white/80 text-sm hover:text-orange-400 transition"
            >
              FAQs
            </a>

            <button
              className="
                mt-2
                w-full
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#44405a]
                bg-[#030112]
                py-3
                text-sm
                font-medium
                text-white
              "
            >
              Enroll Now
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </nav>
    </div>
    </header>
  );
}