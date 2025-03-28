import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-[#cdc5cb] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-[#d66ba0] mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19.5 13.5 12 21l-7.5-7.5" />
                  <path d="M12 12V3" />
                  <path d="M6.3 10.8a6 6 0 1 0 11.4 0" />
                </svg>
              </div>
              <h2 className="font-['Montserrat'] font-bold text-xl text-white">EquiHealth</h2>
            </div>
            <p className="mb-4 text-sm">
              Dedicated to highlighting disparities in women's health and advocating for equitable healthcare for all women.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#cdc5cb] hover:text-[#d66ba0]" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.39 4.482A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.919 4.919 0 004.59 3.415A9.873 9.873 0 010 19.543a13.977 13.977 0 007.548 2.213c9.057 0 14.01-7.503 14.01-14.01 0-.214-.005-.428-.014-.64A9.95 9.95 0 0024 4.557z" />
                </svg>
              </a>
              <a href="#" className="text-[#cdc5cb] hover:text-[#d66ba0]" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2V13.5h2v8z" />
                </svg>
              </a>
              <a href="#" className="text-[#cdc5cb] hover:text-[#d66ba0]" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-[#cdc5cb] hover:text-[#d66ba0]" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-['Montserrat'] font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="hover:text-[#d66ba0]">Home</a></Link></li>
              <li><Link href="/statistics"><a className="hover:text-[#d66ba0]">Statistics</a></Link></li>
              <li><Link href="/resources"><a className="hover:text-[#d66ba0]">Resources</a></Link></li>
              <li><Link href="/advocacy"><a className="hover:text-[#d66ba0]">Advocacy</a></Link></li>
              <li><Link href="/research"><a className="hover:text-[#d66ba0]">Research News</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Montserrat'] font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/resources#educational"><a className="hover:text-[#d66ba0]">Educational Materials</a></Link></li>
              <li><Link href="/advocacy#toolkit"><a className="hover:text-[#d66ba0]">Advocacy Toolkit</a></Link></li>
              <li><Link href="/resources#research"><a className="hover:text-[#d66ba0]">Research Directory</a></Link></li>
              <li><Link href="/resources#organizations"><a className="hover:text-[#d66ba0]">Support Organizations</a></Link></li>
              <li><Link href="/resources#policy"><a className="hover:text-[#d66ba0]">Policy Briefs</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Montserrat'] font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2 text-[#d66ba0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@equihealth.org</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2 text-[#d66ba0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-2 text-[#d66ba0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>123 Advocacy Lane<br/>Healthcare City, HC 10101</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#4b4b4b] pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EquiHealth. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-[#d66ba0]">Privacy Policy</a>
            <a href="#" className="hover:text-[#d66ba0]">Terms of Service</a>
            <a href="#" className="hover:text-[#d66ba0]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
