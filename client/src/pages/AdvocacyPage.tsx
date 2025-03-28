import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  personalAdvocacyTips, 
  communityAdvocacyTips, 
  policyAdvocacyTips,
  additionalPersonalAdvocacyTips,
  additionalCommunityAdvocacyTips,
  additionalPolicyAdvocacyTips,
  advocacyToolkit
} from "@/lib/advocacyData";

const AdvocacyPage = () => {
  const [downloadingToolkit, setDownloadingToolkit] = useState(false);

  const allPersonalTips = [...personalAdvocacyTips, ...additionalPersonalAdvocacyTips];
  const allCommunityTips = [...communityAdvocacyTips, ...additionalCommunityAdvocacyTips];
  const allPolicyTips = [...policyAdvocacyTips, ...additionalPolicyAdvocacyTips];

  const handleDownloadToolkit = (sectionUrl: string) => {
    setDownloadingToolkit(true);
    // Simulate download delay
    setTimeout(() => setDownloadingToolkit(false), 1500);
    // In a real implementation, this would trigger an actual file download
    window.open(sectionUrl, '_blank');
  };

  return (
    <div className="bg-[#f8f5f7]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#9d65c9]/10 to-[#d66ba0]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="bg-[#9d65c9]/10 text-[#9d65c9] px-4 py-1 rounded-full text-sm font-medium">TAKE ACTION</span>
            <h1 className="font-['Montserrat'] text-4xl font-bold my-4 text-[#333333]">
              Advocacy Tips & Strategies
            </h1>
            <p className="text-lg text-[#4b4b4b] mb-8">
              Practical advice and strategies for advocating for better women's healthcare at personal, community, and policy levels. 
              Learn how to make a meaningful difference in women's health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="personal">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                <TabsTrigger value="personal">Personal Advocacy</TabsTrigger>
                <TabsTrigger value="community">Community Advocacy</TabsTrigger>
                <TabsTrigger value="policy">Policy Advocacy</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="personal" id="personal">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="h-48 bg-[#9d65c9]/20 flex items-center justify-center rounded-lg mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#9d65c9]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="font-['Montserrat'] text-2xl font-bold mb-4 text-[#333333]">
                    Personal Advocacy
                  </h2>
                  <p className="text-[#4b4b4b] mb-6">
                    Taking control of your own healthcare experience is the first step toward better health outcomes. 
                    These strategies will help you navigate medical appointments, communicate effectively with healthcare providers, 
                    and ensure your concerns are taken seriously.
                  </p>
                </div>

                <div className="space-y-6">
                  {allPersonalTips.map((tip) => (
                    <div key={tip.id} className="bg-white p-5 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9d65c9] mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h3 className="font-semibold mb-2">{tip.title}</h3>
                          <p className="text-sm text-[#4b4b4b]">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 bg-gradient-to-r from-[#9d65c9]/10 to-white p-6 rounded-lg">
                <h3 className="font-['Montserrat'] text-xl font-bold mb-3">Additional Resources for Personal Advocacy</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#4b4b4b]">
                  <li>Keep a health journal documenting symptoms, treatments, and outcomes</li>
                  <li>Prepare a list of questions before appointments and take notes during them</li>
                  <li>Research your conditions using reliable sources like medical journals and government health websites</li>
                  <li>Bring a trusted friend or family member to important appointments as an advocate</li>
                  <li>Request copies of all test results and medical records</li>
                  <li>Don't hesitate to seek second opinions when serious conditions are suspected</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="community" id="community">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="h-48 bg-[#d66ba0]/20 flex items-center justify-center rounded-lg mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#d66ba0]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="font-['Montserrat'] text-2xl font-bold mb-4 text-[#333333]">
                    Community Advocacy
                  </h2>
                  <p className="text-[#4b4b4b] mb-6">
                    Working together amplifies our voices and increases our impact. By organizing at the community level, 
                    we can create support networks, educate others, and influence local healthcare providers and systems 
                    to better address women's health needs.
                  </p>
                </div>

                <div className="space-y-6">
                  {allCommunityTips.map((tip) => (
                    <div key={tip.id} className="bg-white p-5 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d66ba0] mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h3 className="font-semibold mb-2">{tip.title}</h3>
                          <p className="text-sm text-[#4b4b4b]">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 bg-gradient-to-r from-[#d66ba0]/10 to-white p-6 rounded-lg">
                <h3 className="font-['Montserrat'] text-xl font-bold mb-3">Community Advocacy Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Mobile Mammography Program</h4>
                    <p className="text-sm text-[#4b4b4b]">A community coalition in rural Ohio successfully lobbied for a mobile mammography unit that now serves five counties, increasing screening rates by 45% in just two years.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Maternal Health Initiative</h4>
                    <p className="text-sm text-[#4b4b4b]">A community group in Atlanta created a doula program for underserved women, resulting in improved birth outcomes and a 30% reduction in complications for participants.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="policy" id="policy">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="h-48 bg-[#4a6fa1]/20 flex items-center justify-center rounded-lg mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#4a6fa1]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h2 className="font-['Montserrat'] text-2xl font-bold mb-4 text-[#333333]">
                    Policy Advocacy
                  </h2>
                  <p className="text-[#4b4b4b] mb-6">
                    Systemic change requires policy action. By engaging with lawmakers, regulatory agencies, and other decision-makers, 
                    we can push for increased research funding, better healthcare access, and policies that address women's health disparities.
                  </p>
                </div>

                <div className="space-y-6">
                  {allPolicyTips.map((tip) => (
                    <div key={tip.id} className="bg-white p-5 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a6fa1] mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h3 className="font-semibold mb-2">{tip.title}</h3>
                          <p className="text-sm text-[#4b4b4b]">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 bg-gradient-to-r from-[#4a6fa1]/10 to-white p-6 rounded-lg">
                <h3 className="font-['Montserrat'] text-xl font-bold mb-3">Policy Advocacy Priorities</h3>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Research Funding Equity</h4>
                    <p className="text-sm text-[#4b4b4b]">Advocate for equal funding of women's health research, particularly for conditions that primarily affect women.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Clinical Trial Diversity</h4>
                    <p className="text-sm text-[#4b4b4b]">Support policies requiring appropriate representation of women in all phases of clinical trials.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2">Maternal Healthcare Access</h4>
                    <p className="text-sm text-[#4b4b4b]">Push for expanded access to quality maternal healthcare, particularly for underserved communities.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advocacy Toolkit Section */}
      <section id="toolkit" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-['Montserrat'] text-3xl font-bold mb-4">Complete Advocacy Toolkit</h2>
              <p className="text-lg text-[#4b4b4b]">
                Download our comprehensive advocacy toolkit with templates, scripts, and strategies for creating meaningful change.
              </p>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#9d65c9]/10 to-[#d66ba0]/10 p-6 rounded-t-lg">
                  <h3 className="font-['Montserrat'] text-2xl font-bold mb-2">{advocacyToolkit.title}</h3>
                  <p className="text-[#4b4b4b]">{advocacyToolkit.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {advocacyToolkit.sections.map((section, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-[#e9e3e7] pb-4 last:border-0">
                        <div>
                          <h4 className="font-semibold">{section.title}</h4>
                          <p className="text-sm text-[#4b4b4b]">{section.description}</p>
                        </div>
                        <Button 
                          onClick={() => handleDownloadToolkit(section.downloadLink)}
                          className="bg-[#9d65c9] hover:bg-[#9d65c9]/90 text-white"
                          disabled={downloadingToolkit}
                        >
                          {downloadingToolkit ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Downloading...
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              Download
                            </>
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-[#f8f5f7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-['Montserrat'] text-3xl font-bold mb-4">Advocacy Success Stories</h2>
            <p className="text-lg text-[#4b4b4b] max-w-3xl mx-auto">
              Celebrating milestones and achievements in women's health advocacy, where individual and collective efforts have led to meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-[#d66ba0]/20 to-[#d66ba0]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#d66ba0]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-['Montserrat'] text-xl font-bold mb-2">Women's Health Research Equity Act</h3>
                <p className="text-[#4b4b4b] mb-4">
                  After years of grassroots advocacy, this landmark legislation mandated proportional inclusion of women in clinical trials and established an Office of Women's Health Research.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4b4b4b]">Impact: High</span>
                  <span className="text-[#4b4b4b]">Year: 2020</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-[#9d65c9]/20 to-[#9d65c9]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#9d65c9]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-['Montserrat'] text-xl font-bold mb-2">Maternal Health Initiative</h3>
                <p className="text-[#4b4b4b] mb-4">
                  Community-led initiative that expanded access to prenatal care in underserved areas, resulting in a 40% reduction in maternal and infant mortality rates.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4b4b4b]">Impact: High</span>
                  <span className="text-[#4b4b4b]">Year: 2021</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-[#4a6fa1]/20 to-[#4a6fa1]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#4a6fa1]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-['Montserrat'] text-xl font-bold mb-2">Endometriosis Awareness Campaign</h3>
                <p className="text-[#4b4b4b] mb-4">
                  A patient-led campaign that increased public awareness of endometriosis, leading to improved diagnostic protocols and a doubling of research funding.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4b4b4b]">Impact: Medium</span>
                  <span className="text-[#4b4b4b]">Year: 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvocacyPage;
