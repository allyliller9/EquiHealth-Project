import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { healthDisparitiesData } from "@/lib/statData";

const StatisticsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const { isLoading, data: statistics } = useQuery({
    queryKey: ["/api/statistics"],
    // If API is not available, use the local data
    initialData: healthDisparitiesData
  });

  const categories = ["all", ...new Set(healthDisparitiesData.map(stat => stat.category.toLowerCase()))];
  
  const filteredStats = activeCategory === "all" 
    ? statistics 
    : statistics?.filter(stat => stat.category.toLowerCase() === activeCategory);

  return (
    <div className="py-12 px-4 bg-[#f8f5f7]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-[#d66ba0]/10 text-[#d66ba0] px-4 py-1 rounded-full text-sm font-medium">DATA-DRIVEN INSIGHTS</span>
          <h1 className="font-['Montserrat'] text-4xl font-bold my-4 text-[#333333]">Women's Health Disparities Statistics</h1>
          <p className="text-lg text-[#4b4b4b]">
            Explore detailed statistics that highlight gender disparities in healthcare research, funding, treatment, and outcomes. 
            All data is sourced from reputable medical journals and health organizations.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="space-y-8">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block w-8 h-8 border-4 border-[#d66ba0] border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-4 text-[#4b4b4b]">Loading statistics...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredStats && filteredStats.map((stat) => (
                    <Card key={stat.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl mb-1">{stat.title}</CardTitle>
                            <CardDescription>
                              <span className="bg-[#4a6fa1]/10 text-[#4a6fa1] px-2 py-0.5 rounded-full text-xs">
                                {stat.category}
                              </span>
                            </CardDescription>
                          </div>
                          <div className="text-3xl font-bold text-[#d66ba0]">
                            {stat.value}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-56 bg-[#e9e3e7]/50 mb-4 rounded-md flex items-center justify-center">
                          {stat.chartType === "bar" ? (
                            <BarChart />
                          ) : stat.chartType === "pie" ? (
                            <PieChart />
                          ) : (
                            <div className="flex items-center justify-center h-full text-[#4b4b4b]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-[#4b4b4b] mb-4">{stat.description}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-[#4b4b4b]">Source: {stat.source}</span>
                          {stat.sourceUrl && (
                            <a 
                              href={stat.sourceUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#4a6fa1] hover:underline flex items-center"
                            >
                              View Source
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="font-['Montserrat'] text-2xl font-bold mb-4 text-center">How to Use This Data for Advocacy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-[#d66ba0] pl-4">
              <h3 className="font-semibold mb-2">Personal Conversations</h3>
              <p className="text-sm text-[#4b4b4b]">Share these statistics when discussing healthcare experiences with your doctors, family, and friends to raise awareness about systemic issues.</p>
            </div>
            <div className="border-l-4 border-[#9d65c9] pl-4">
              <h3 className="font-semibold mb-2">Community Initiatives</h3>
              <p className="text-sm text-[#4b4b4b]">Use this data to support grant applications, community health programs, and educational workshops focused on women's health.</p>
            </div>
            <div className="border-l-4 border-[#4a6fa1] pl-4">
              <h3 className="font-semibold mb-2">Policy Advocacy</h3>
              <p className="text-sm text-[#4b4b4b]">Reference these statistics in communications with elected officials to advocate for increased research funding and policy changes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
