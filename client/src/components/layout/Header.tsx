import { useState } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/statistics", label: "Statistics" },
    { path: "/resources", label: "Resources" },
    { path: "/advocacy", label: "Advocacy" },
    { path: "/research", label: "Research" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-pink-600 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19.5 13.5 12 21l-7.5-7.5" />
              <path d="M12 12V3" />
              <path d="M6.3 10.8a6 6 0 1 0 11.4 0" />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-xl text-pink-600">EquiHealth</h1>
            <p className="text-xs text-gray-600">Bridging the Gender Gap in Healthcare</p>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Navigation Menu */}
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    location === item.path
                      ? "text-pink-600 font-medium"
                      : "text-gray-600 hover:text-pink-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
