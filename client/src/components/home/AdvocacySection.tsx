import { Link } from "wouter";
import { 
  personalAdvocacyTips, 
  communityAdvocacyTips, 
  policyAdvocacyTips 
} from "@/lib/advocacyData";

const AdvocacySection = () => {
  return (
    <section id="advocacy" className="py-16 bg-[#f8f5f7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-[#9d65c9]/10 text-[#9d65c9] px-4 py-1 rounded-full text-sm font-medium">TAKE ACTION</span>
          <h2 className="font-['Montserrat'] text-3xl font-bold my-4 text-[#333333]">Advocacy Tips & Strategies</h2>
          <p className="text-lg text-[#4b4b4b]">
            Practical advice for advocating for better women's healthcare at personal, community, and policy levels.
          </p>
        </div>
        
        {/* Advocacy Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Personal Advocacy */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-[#9d65c9]/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#9d65c9]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4 text-[#333333]">Personal Advocacy</h3>
              <ul className="space-y-4">
                {personalAdvocacyTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9d65c9] mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">{tip.title}</h4>
                      <p className="text-sm text-[#4b4b4b]">{tip.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/advocacy#personal">
                <a className="inline-block mt-6 text-[#9d65c9] font-medium hover:underline">
                  Read More Tips →
                </a>
              </Link>
            </div>
          </div>
          
          {/* Community Advocacy */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-[#d66ba0]/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#d66ba0]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4 text-[#333333]">Community Advocacy</h3>
              <ul className="space-y-4">
                {communityAdvocacyTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d66ba0] mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">{tip.title}</h4>
                      <p className="text-sm text-[#4b4b4b]">{tip.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/advocacy#community">
                <a className="inline-block mt-6 text-[#d66ba0] font-medium hover:underline">
                  Read More Tips →
                </a>
              </Link>
            </div>
          </div>
          
          {/* Policy Advocacy */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-[#4a6fa1]/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#4a6fa1]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4 text-[#333333]">Policy Advocacy</h3>
              <ul className="space-y-4">
                {policyAdvocacyTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a6fa1] mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">{tip.title}</h4>
                      <p className="text-sm text-[#4b4b4b]">{tip.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/advocacy#policy">
                <a className="inline-block mt-6 text-[#4a6fa1] font-medium hover:underline">
                  Read More Tips →
                </a>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Advocacy Toolkit CTA */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="font-['Montserrat'] text-2xl font-bold mb-4">Complete Advocacy Toolkit</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Download our comprehensive advocacy toolkit with templates, scripts, and strategies for creating meaningful change.
          </p>
          <Link href="/advocacy#toolkit">
            <a className="inline-block bg-[#9d65c9] hover:bg-[#9d65c9]/90 text-white font-medium py-3 px-8 rounded-md shadow-md transition-all">
              Download Free Toolkit 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 inline" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvocacySection;
