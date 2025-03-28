import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { allResearchNews } from "@/lib/researchData";

const ResearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const { isLoading, data: researchArticles } = useQuery({
    queryKey: ["/api/research"],
    // If API is not available, use the local data
    initialData: allResearchNews
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get unique categories from research articles
  const categories = ["all", ...new Set(allResearchNews.map(article => 
    article.category.toLowerCase().replace(/\s+/g, '-')
  ))];
  
  const getFilteredArticles = () => {
    let filtered = researchArticles;
    
    if (activeCategory !== "all") {
      const categoryName = activeCategory.replace(/-/g, ' ').toUpperCase();
      filtered = filtered.filter(article => article.category === categoryName);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(term) ||
        article.summary.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  };

  const filteredArticles = getFilteredArticles();

  return (
    <div className="py-12 px-4 bg-[#f8f5f7]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-[#4a6fa1]/10 text-[#4a6fa1] px-4 py-1 rounded-full text-sm font-medium">LATEST UPDATES</span>
          <h1 className="font-['Montserrat'] text-4xl font-bold my-4 text-[#333333]">Women's Health Research News</h1>
          <p className="text-lg text-[#4b4b4b]">
            Stay informed about the latest studies, breakthroughs, and developments in women's health research from trusted medical sources.
          </p>
        </div>

        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <Input
              placeholder="Search research articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />
          </div>
          
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-white">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="capitalize"
                  >
                    {category === "all" ? "All Articles" : category.replace(/-/g, ' ')}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map(category => (
              <TabsContent key={category} value={category}>
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="inline-block w-8 h-8 border-4 border-[#4a6fa1] border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-[#4b4b4b]">Loading research articles...</p>
                  </div>
                ) : filteredArticles.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#4b4b4b] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-semibold">No articles found</h3>
                    <p className="mt-2 text-[#4b4b4b]">
                      Try adjusting your search or category filter
                    </p>
                    <Button 
                      onClick={() => {
                        setSearchTerm("");
                        setActiveCategory("all");
                      }}
                      className="mt-4 bg-[#4a6fa1]"
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Featured Article (only show for "all" tab and when no search is active) */}
                    {category === "all" && !searchTerm && filteredArticles.length > 0 && (
                      <div className="mb-10">
                        <h2 className="font-['Montserrat'] text-2xl font-bold mb-4 text-[#333333]">Featured Research</h2>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                          <div className="md:flex">
                            <div className="md:w-2/5 h-64 md:h-auto">
                              <img 
                                src={filteredArticles[0].imageUrl} 
                                alt={filteredArticles[0].title} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div className="p-6 md:w-3/5">
                              <span className="inline-block bg-[#47b881]/20 text-[#47b881] px-3 py-1 rounded-full text-xs font-medium mb-3">
                                {filteredArticles[0].category}
                              </span>
                              <h3 className="font-['Montserrat'] text-2xl font-bold mb-3 text-[#333333]">{filteredArticles[0].title}</h3>
                              <p className="text-[#4b4b4b] mb-4">
                                {filteredArticles[0].summary}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-[#4b4b4b]">Published: {formatDate(filteredArticles[0].publishDate)}</span>
                                <Button 
                                  onClick={() => window.open(filteredArticles[0].sourceUrl, '_blank')}
                                  className="bg-[#4a6fa1]"
                                >
                                  Read Full Article
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Research Articles Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* If we're showing all articles and there's no search term, skip the first article since it's featured */}
                      {(category === "all" && !searchTerm ? filteredArticles.slice(1) : filteredArticles).map((article) => (
                        <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={article.imageUrl} 
                              alt={article.title} 
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                            />
                          </div>
                          <CardContent className="flex-grow p-5">
                            <span className={`inline-block ${
                              article.category === 'CLINICAL TRIALS' ? 'bg-[#4a6fa1]/10 text-[#4a6fa1]' :
                              article.category === 'BREAKTHROUGH' ? 'bg-[#d66ba0]/10 text-[#d66ba0]' :
                              article.category === 'NEW STUDY' ? 'bg-[#47b881]/10 text-[#47b881]' :
                              'bg-[#9d65c9]/10 text-[#9d65c9]'
                            } px-3 py-1 rounded-full text-xs font-medium mb-3`}>
                              {article.category}
                            </span>
                            <h3 className="font-['Montserrat'] text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                            <p className="text-[#4b4b4b] text-sm mb-4 line-clamp-3">
                              {article.summary}
                            </p>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center p-5 pt-0">
                            <span className="text-xs text-[#4b4b4b]">{formatDate(article.publishDate)}</span>
                            <Button 
                              onClick={() => window.open(article.sourceUrl, '_blank')}
                              variant="outline" 
                              size="sm"
                              className={`${
                                article.category === 'CLINICAL TRIALS' ? 'text-[#4a6fa1] border-[#4a6fa1]' :
                                article.category === 'BREAKTHROUGH' ? 'text-[#d66ba0] border-[#d66ba0]' :
                                article.category === 'NEW STUDY' ? 'text-[#47b881] border-[#47b881]' :
                                'text-[#9d65c9] border-[#9d65c9]'
                              }`}
                            >
                              Read More
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Research Institutions */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow">
          <h2 className="font-['Montserrat'] text-2xl font-bold mb-6 text-center">Leading Women's Health Research Institutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#4a6fa1]/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a6fa1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">National Institutes of Health</h3>
              <p className="text-sm text-[#4b4b4b]">Office of Research on Women's Health</p>
              <a href="https://orwh.od.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#4a6fa1] hover:underline">Visit Website</a>
            </div>

            <div className="text-center">
              <div className="bg-[#d66ba0]/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d66ba0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Society for Women's Health Research</h3>
              <p className="text-sm text-[#4b4b4b]">Research, Policy and Education</p>
              <a href="https://swhr.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#d66ba0] hover:underline">Visit Website</a>
            </div>

            <div className="text-center">
              <div className="bg-[#9d65c9]/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9d65c9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Women's Health Research Institute</h3>
              <p className="text-sm text-[#4b4b4b]">Northwestern University</p>
              <a href="https://www.womenshealth.northwestern.edu/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#9d65c9] hover:underline">Visit Website</a>
            </div>

            <div className="text-center">
              <div className="bg-[#47b881]/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#47b881]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Center for Women's Health Research</h3>
              <p className="text-sm text-[#4b4b4b]">University of Colorado</p>
              <a href="https://medschool.cuanschutz.edu/cwhr" target="_blank" rel="noopener noreferrer" className="text-xs text-[#47b881] hover:underline">Visit Website</a>
            </div>
          </div>
        </section>

        {/* Research Participation CTA */}
        <section className="mt-12 bg-gradient-to-r from-[#4a6fa1]/10 to-[#d66ba0]/10 p-8 rounded-lg text-center">
          <h2 className="font-['Montserrat'] text-2xl font-bold mb-4">Participate in Women's Health Research</h2>
          <p className="text-[#4b4b4b] mb-6 max-w-3xl mx-auto">
            Clinical trials need diverse participants to ensure treatments work for everyone. 
            By participating in research, you can help advance women's health science and potentially access new treatments.
          </p>
          <Button className="bg-[#4a6fa1]" onClick={() => window.open('https://clinicaltrials.gov/ct2/who_studies', '_blank')}>
            Find Clinical Trials Near You
          </Button>
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;
