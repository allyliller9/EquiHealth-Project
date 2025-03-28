import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Left Column - Logo & Description */}
          <div>
            <div className="flex items-center mb-3">
              <div className="text-pink-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19.5 13.5 12 21l-7.5-7.5" />
                  <path d="M12 12V3" />
                  <path d="M6.3 10.8a6 6 0 1 0 11.4 0" />
                </svg>
              </div>
              <h2 className="font-bold text-lg text-white">EquiHealth</h2>
            </div>
            <p className="text-sm mb-4">
              Dedicated to highlighting disparities in women's health and advocating for equitable healthcare.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(social => (
                <a key={social} href="#" className="text-gray-400 hover:text-pink-500" aria-label={social}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Middle Column - Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { path: "/", label: "Home" },
                { path: "/statistics", label: "Statistics" },
                { path: "/resources", label: "Resources" },
                { path: "/advocacy", label: "Advocacy" },
                { path: "/research", label: "Research" }
              ].map(item => (
                <div key={item.path}>
                  <Link href={item.path} className="hover:text-pink-500">
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Contact */}
          <div>
            <h3 className="font-semibold text-white mb-3">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>info@equihealth.org</p>
              <p>(555) 123-4567</p>
              <p>123 Advocacy Lane, Healthcare City</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-xs">
          <p>&copy; {currentYear} EquiHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
