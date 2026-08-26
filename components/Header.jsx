import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-black px-10 mt-10 flex items-center justify-between">

      {/* LEFT: Logo + Tagline */}
      <div>
        <h1 className="text-2xl font-bold text-[#E6C35C]">
          Snehal's Creative Corner
        </h1>
        <p className="text-sm text-[#C9A94F]">
          Creativity Beyond Boundaries
        </p>
      </div>

      {/* RIGHT: Navigation */}
      <div className="hidden md:flex gap-8 text-lg pr-3">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b-2 border-[#E6C35C] pb-1"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }
        >
          Home
        </NavLink>
      

         <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b-2 border-[#E6C35C] pb-1"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }
        >
          Gallery
        </NavLink>

         <NavLink
          to="/videos"
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b-2 border-[#E6C35C] pb-1"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }
        >
          Videos
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b-2 border-[#E6C35C] pb-1"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C35C] border-b-2 border-[#E6C35C] pb-1"
              : "text-[#C9A94F] hover:text-[#E6C35C] transition"
          }
        >
          Contact
        </NavLink>

      </div>
    </div>
  )
}

export default Header
  