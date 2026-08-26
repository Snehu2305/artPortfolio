import React from 'react'
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] px-10 py-6">

      {/* TOP ROW */}
     <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">

        {/* LEFT */}
        <div>
          <h1 className="text-lg font-bold text-[#E6C35C]">
            Snehal's Creative Corner
          </h1>
          <p className="text-xs text-[#C9A94F]">
            Creativity Beyond Boundaries
          </p>
        </div>

        {/* CENTER - NOW HORIZONTAL ✅ */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">

          <NavLink to="/" className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b border-[#E6C35C]"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }>
            Home
          </NavLink>

          <NavLink to="/gallery" className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b border-[#E6C35C]"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }>
            Gallery
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b border-[#E6C35C]"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b border-[#E6C35C]"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }>
            Contact
          </NavLink>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 justify-center sm:justify-end">
             <p className="text-[#E6C35C] text-base font-semibold flex items-center gap-2">✨ Follow Me</p>

          <a href="https://www.instagram.com/creativitycorner235/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#C9A94F] hover:text-[#E6C35C] text-lg transition hover:scale-110" />
          </a>

          <a href="https://www.youtube.com/@SnehalKumbhar-r4j" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-[#C9A94F] hover:text-[#E6C35C] text-lg transition hover:scale-110" />
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-4 border-t border-[#2a2a2a] pt-3 text-center">
        <p className="text-xs text-[#8C6F2C]">
          From Snehal’s hands 🎨, through Gouri’s soul ✨
        </p>
      </div>

    </footer>
  )
}

export default Footer;