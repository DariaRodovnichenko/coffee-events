import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className="relative h-[400px] w-full bg-hero bg-cover bg-center bg-no-repeat hero-bg">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

      {/* Header/Navbar */}
      <header className="relative z-10 px-10 py-4 flex justify-between items-center">
        <h1 className="text-white font-medium text-lg">Conscious Coffee</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-white font-medium text-lg">
            <li>
              <a href="#workshops" className="hover:underline">
                Workshops
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-green-900 z-20">
          <ul className="flex flex-col items-center py-4 text-white font-medium text-lg gap-4">
            <li>
              <a href="#workshops" onClick={() => setIsMenuOpen(false)}>
                Workshops
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center h-[320px] text-center justify-center px-4">
        <h2 className="text-white text-4xl md:text-6xl font-bold">
          Coffee Events
        </h2>
        <p className="mt-4 text-white text-lg max-w-md">
          Join us for engaging coffee workshops at your office.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-green-900 font-semibold rounded shadow hover:bg-gray-100">
          Book Now
        </button>
      </div>
    </section>
  );
};
// This code defines a HeroSection component that serves as a hero section for a webpage.
// It includes a background image, an overlay, a header with navigation links, and a call-to-action button.
