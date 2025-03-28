import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allResources } from "@/lib/resourcesData";

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const { isLoading, data: resources } = useQuery({
    queryKey: ["/api/resources"],
    // If API is not available, use the local data
    initialData: allResources
  });

  const categories = ["all", "research", "educational", "organization", "policy"];
  
  const getFilteredResources = () => {
    let filtered = resources;
    
    if (activeCategory !== "all") {
      filtered = filtered.filter(resource => resource.category === activeCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  };

  const filteredResources = getFilteredResources();

  return (
    <div className="py-12 px-4 bg-[#f8f5f7]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-[#4a6fa1]/10 text-[#4a6fa1] px-4 py-1 rounded-full text-sm font-medium">HELPFUL RESOURCES</span>
          <h1 className="font-['Montserrat'] text-4xl font-bold my-4 text-[#333333]">Women's Health Resource Directory</h1>
          <p className="text-lg text-[#4b4b4b]">
            Access our curated collection of evidence-based resources to better understand women's health issues, 
            find support, and advocate for change.
          </p>
        </div>

        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />
          </div>
          
          <Tabs defaultValue="all" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="capitalize"
                  >
                    {category === "all" ? "All Resources" : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map(category => (
              <TabsContent key={category} value={category}>
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="inline-block w-8 h-8 border-4 border-[#4a6fa1] border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-[#4b4b4b]">Loading resources...</p>
                  </div>
                ) : filteredResources.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#4b4b4b] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-semibold">No resources found</h3>
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
                  <div id={category} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource) => (
                      <Card key={resource.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4a6fa1] hover:underline flex items-center font-medium"
                          >
                            Visit Resource
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <p className="mt-2 text-xs text-[#4b4b4b] capitalize">
                            Category: {resource.category}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#4a6fa1]/10 to-[#d66ba0]/10 p-8 rounded-lg shadow">
          <div className="text-center mb-6">
            <h2 className="font-['Montserrat'] text-2xl font-bold">Suggest a Resource</h2>
            <p className="text-[#4b4b4b] mt-2">
              Know of a valuable women's health resource that should be included in our directory?
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Button className="w-full bg-[#4a6fa1]">
              Submit a Resource
            </Button>
            <p className="text-xs text-center mt-2 text-[#4b4b4b]">
              All submissions are reviewed for accuracy and relevance before being added to the directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
