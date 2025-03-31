import { Link } from "wouter";
import { featuredResearch, recentResearchNews } from "@/lib/researchData";

/**
 * ResearchNewsSection Component
 * 
 * This component displays the latest research news related to women's health.
 * It includes a featured article section and a grid of recent research news items.
 */
const ResearchNewsSection = () => {
  /**
   * Format a date string into a readable format
   * @param dateString - The date string to format
   * @returns Formatted date string (e.g., "January 15, 2025")
   */
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="research" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-[#4a6fa1]/10 text-[#4a6fa1] px-4 py-1 rounded-full text-sm font-medium">LATEST UPDATES</span>
          <h2 className="font-['Montserrat'] text-3xl font-bold my-4 text-[#333333]">Women's Health Research News</h2>
          <p className="text-lg text-[#4b4b4b]">
            Stay informed about the latest studies, breakthroughs, and developments in women's health research.
          </p>
        </div>
        
        {/* Featured Research Article */}
        <div className="bg-[#f8f5f7] rounded-lg overflow-hidden shadow-md mb-12">
          <div className="md:flex">
            <div className="md:w-2/5 h-64 md:h-auto">
              <img 
                src={featuredResearch.imageUrl} 
                alt="Medical researchers in laboratory" 
                className="w-full h-full object-cover" 
                width="600" 
                height="400"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <span className="inline-block bg-[#47b881]/20 text-[#47b881] px-3 py-1 rounded-full text-xs font-medium mb-3">
                {featuredResearch.category}
              </span>
              <h3 className="font-['Montserrat'] text-2xl font-bold mb-3 text-[#333333]">{featuredResearch.title}</h3>
              <p className="text-[#4b4b4b] mb-4">
                {featuredResearch.summary}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#4b4b4b]">Published: {formatDate(featuredResearch.publishDate)}</span>
                <Link href={`/research/${featuredResearch.id}`} className="text-[#4a6fa1] hover:text-[#4a6fa1]/80 font-medium">
                  Read Full Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Research News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentResearchNews.map((news) => (
            <div key={news.id} className="bg-[#f8f5f7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-5">
                {/* Category Badge */}
                <span className={`inline-block ${
                  news.category === 'CLINICAL TRIALS' ? 'bg-[#4a6fa1]/10 text-[#4a6fa1]' :
                  news.category === 'BREAKTHROUGH' ? 'bg-[#d66ba0]/10 text-[#d66ba0]' :
                  'bg-[#9d65c9]/10 text-[#9d65c9]'
                } px-3 py-1 rounded-full text-xs font-medium mb-3`}>
                  {news.category}
                </span>
                
                <h3 className="font-['Montserrat'] text-lg font-bold mb-3 text-[#333333] line-clamp-2">{news.title}</h3>
                <p className="text-[#4b4b4b] text-sm mb-4 line-clamp-3">
                  {news.summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#4b4b4b]">{formatDate(news.publishDate)}</span>
                  <Link 
                    href={`/research/${news.id}`}
                    className={`${
                      news.category === 'CLINICAL TRIALS' ? 'text-[#4a6fa1]' :
                      news.category === 'BREAKTHROUGH' ? 'text-[#d66ba0]' :
                      'text-[#9d65c9]'
                    } hover:underline text-sm`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* "View All" Button */}
        <div className="text-center">
          <Link 
            href="/research"
            className="inline-block bg-white hover:bg-[#e9e3e7] text-[#4a6fa1] border border-[#4a6fa1] font-medium py-3 px-6 rounded-md shadow-sm transition-all"
          >
            View All Research News 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchNewsSection;