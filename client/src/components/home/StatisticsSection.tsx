import { Link } from "wouter";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { keyStatistics } from "@/lib/statData";

const StatisticsSection = () => {
  return (
    <section id="statistics" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium">DATA-DRIVEN INSIGHTS</span>
          <h2 className="text-2xl font-bold mt-3 mb-2 text-gray-800">Understanding the Disparities</h2>
          <p className="text-gray-600">
            Statistics that highlight the gender gap in healthcare research, treatment, and outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Research Funding Gap Chart */}
          <div className="bg-white rounded-md shadow-sm hover:shadow transition-shadow p-5">
            <h3 className="text-lg font-bold mb-3 text-gray-800">Research Funding Gap</h3>
            <div className="h-56 bg-gray-100 rounded mb-3 flex items-center justify-center">
              <BarChart />
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Women's health research receives significantly less funding than other areas, with only <span className="font-semibold text-pink-600">4%</span> of healthcare R&D going to female-specific conditions outside of oncology.
            </p>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Source: WHO Global Health Observatory</span>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Clinical Trial Representation Chart */}
          <div className="bg-white rounded-md shadow-sm hover:shadow transition-shadow p-5">
            <h3 className="text-lg font-bold mb-3 text-gray-800">Clinical Trial Representation</h3>
            <div className="h-56 bg-gray-100 rounded mb-3 flex items-center justify-center">
              <PieChart />
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Women make up only <span className="font-semibold text-pink-600">33%</span> of participants in cardiovascular clinical trials despite heart disease being the leading cause of death for women globally.
            </p>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Source: American Heart Association</span>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Key Statistics Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyStatistics.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-sm text-center">
              <span className="text-2xl font-bold text-pink-600 block mb-1">{stat.value}</span>
              <span className="text-gray-600 text-xs">{stat.description}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/statistics"
            className="inline-block bg-white hover:bg-gray-100 text-pink-600 border border-pink-600 font-medium py-2 px-5 rounded-md transition-all text-sm"
          >
            Explore All Statistics 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
