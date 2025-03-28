import { Link } from "wouter";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { keyStatistics } from "@/lib/statData";

const StatisticsSection = () => {
  return (
    <section id="statistics" className="py-16 bg-[#f8f5f7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-[#d66ba0]/10 text-[#d66ba0] px-4 py-1 rounded-full text-sm font-medium">DATA-DRIVEN INSIGHTS</span>
          <h2 className="font-['Montserrat'] text-3xl font-bold my-4 text-[#333333]">Understanding the Disparities</h2>
          <p className="text-lg text-[#4b4b4b]">
            Exploring key statistics that highlight the gender gap in healthcare research, treatment, and outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Research Funding Gap Chart */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4 text-[#333333]">Research Funding Gap</h3>
              <div className="h-64 bg-[#e9e3e7] rounded-lg mb-4 flex items-center justify-center p-4">
                <BarChart />
              </div>
              <p className="text-[#4b4b4b] mb-4">
                Women's health research receives significantly less funding than other areas. Conditions primarily affecting women are chronically underfunded, with only <span className="font-['Merriweather'] font-bold text-[#d66ba0]">4%</span> of healthcare R&D going to female-specific conditions outside of oncology.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#4b4b4b]">Source: WHO Global Health Observatory</span>
                <button className="text-[#4a6fa1] hover:text-[#4a6fa1]/80 text-sm font-medium flex items-center">
                  View Full Report 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Clinical Trial Representation Chart */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4 text-[#333333]">Clinical Trial Representation</h3>
              <div className="h-64 bg-[#e9e3e7] rounded-lg mb-4 flex items-center justify-center p-4">
                <PieChart />
              </div>
              <p className="text-[#4b4b4b] mb-4">
                Women make up only <span className="font-['Merriweather'] font-bold text-[#d66ba0]">33%</span> of participants in cardiovascular clinical trials despite heart disease being the leading cause of death for women globally. This underrepresentation leads to treatments tested primarily on male subjects.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#4b4b4b]">Source: American Heart Association</span>
                <button className="text-[#4a6fa1] hover:text-[#4a6fa1]/80 text-sm font-medium flex items-center">
                  View Full Report 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Statistics Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyStatistics.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <span className="text-4xl font-bold text-[#d66ba0] block mb-2">{stat.value}</span>
              <span className="text-[#4b4b4b] text-sm">{stat.description}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/statistics"
            className="inline-block bg-white hover:bg-[#e9e3e7] text-[#d66ba0] border border-[#d66ba0] font-medium py-3 px-6 rounded-md shadow-sm transition-all"
          >
            Explore All Statistics 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
