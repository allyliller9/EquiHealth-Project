// This file imports all the sections that make up our home page
// and displays them in the correct order

// Import all the section components we need
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import AdvocacySection from "@/components/home/AdvocacySection";
import ResearchNewsSection from "@/components/home/ResearchNewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

// This is our HomePage component
const HomePage = () => {
  // We return all our sections in the order we want them to appear
  return (
    <>
      {/* Hero banner at the top of the page */}
      <HeroSection />
      
      {/* Our mission statement */}
      <MissionSection />
      
      {/* Statistics about women's health disparities */}
      <StatisticsSection />
      
      {/* Resources for learning more */}
      <ResourcesSection />
      
      {/* Ways to advocate for change */}
      <AdvocacySection />
      
      {/* Latest research news */}
      <ResearchNewsSection />
      
      {/* Newsletter signup */}
      <NewsletterSection />
    </>
  );
};

// Export the component so it can be used in other files
export default HomePage;
