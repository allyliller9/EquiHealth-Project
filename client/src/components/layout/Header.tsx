import { useState } from "react";
import { Link, useLocation } from "wouter";
import NavMenu from "./NavMenu";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="text-[#d66ba0] mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19.5 13.5 12 21l-7.5-7.5" />
                  <path d="M12 12V3" />
                  <path d="M6.3 10.8a6 6 0 1 0 11.4 0" />
                </svg>
              </div>
              <div>
                <h1 className="font-['Montserrat'] font-bold text-2xl text-[#d66ba0]">EquiHealth</h1>
                <p className="text-xs text-[#4b4b4b]">Bridging the Gender Gap in Healthcare</p>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden rounded-md p-2 text-[#4b4b4b] hover:bg-[#e9e3e7]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Navigation Menu */}
        <NavMenu isOpen={mobileMenuOpen} location={location} onNavClick={() => setMobileMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
