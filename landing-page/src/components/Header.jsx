import React from "react";
import { CommonModal } from ".";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">MyBrand</span>
        </div>

        {/* Middle: Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#gallery" className="hover:text-blue-400 transition">
            Gallery
          </a>
          <a href="#location" className="hover:text-blue-400 transition">
            Location
          </a>
          <a href="#contact" className="hover:text-blue-400 transition" onClick={() => setIsModalOpen(true)}>
            Contact Us
          </a>
        </nav>
        <CommonModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

        {/* Right: Mobile Number */}
        <div className="text-sm font-medium md:text-base">
          <a href="tel:+911234567890" className="hover:text-blue-400 transition">
            +91 12345 67890
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button aria-label="Toggle Menu" className="text-gray-400 hover:text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
