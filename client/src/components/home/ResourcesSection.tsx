import { Link } from "wouter";
import { 
  researchReports, 
  educationalMaterials, 
  supportOrganizations 
} from "@/lib/resourcesData";

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-[#4a6fa1]/10 text-[#4a6fa1] px-4 py-1 rounded-full text-sm font-medium">HELPFUL RESOURCES</span>
          <h2 className="font-['Montserrat'] text-3xl font-bold my-4 text-[#333333]">Knowledge is Power</h2>
          <p className="text-lg text-[#4b4b4b]">
            Access curated resources to better understand women's health issues and how to advocate for change.
          </p>
        </div>
        
        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Research & Reports */}
          <div className="bg-[#f8f5f7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="text-[#4a6fa1] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-['Montserrat'] text-xl font-bold mb-3">Research & Reports</h3>
              <ul className="space-y-3">
                {researchReports.map((report, index) => (
                  <li key={index}>
                    <a 
                      href={report.url} 
                      className="flex items-start hover:text-[#d66ba0] group"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 mr-2 text-[#cdc5cb] group-hover:text-[#d66ba0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{report.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Educational Materials */}
          <div className="bg-[#f8f5f7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="text-[#4a6fa1] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-['Montserrat'] text-xl font-bold mb-3">Educational Materials</h3>
              <ul className="space-y-3">
                {educationalMaterials.map((material, index) => (
                  <li key={index}>
                    <a 
                      href={material.url} 
                      className="flex items-start hover:text-[#d66ba0] group"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 mr-2 text-[#cdc5cb] group-hover:text-[#d66ba0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{material.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Organizations & Support */}
          <div className="bg-[#f8f5f7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="text-[#4a6fa1] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-['Montserrat'] text-xl font-bold mb-3">Organizations & Support</h3>
              <ul className="space-y-3">
                {supportOrganizations.map((org, index) => (
                  <li key={index}>
                    <a 
                      href={org.url} 
                      className="flex items-start hover:text-[#d66ba0] group"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 mr-2 text-[#cdc5cb] group-hover:text-[#d66ba0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{org.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Resource Directory CTA */}
        <div className="bg-gradient-to-r from-[#4a6fa1]/10 to-[#d66ba0]/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="font-['Montserrat'] text-2xl font-bold mb-2">Complete Resource Directory</h3>
              <p className="text-[#4b4b4b]">
                Access our comprehensive database of women's health resources, research papers, and support organizations.
              </p>
            </div>
            <Link 
              href="/resources"
              className="whitespace-nowrap inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition-all"
            >
              Browse Directory 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 inline" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
