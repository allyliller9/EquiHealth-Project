// Import the required libraries and components
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Import all our website pages
import HomePage from "@/pages/HomePage";
import StatisticsPage from "@/pages/StatisticsPage";
import ResourcesPage from "@/pages/ResourcesPage";
import AdvocacyPage from "@/pages/AdvocacyPage";
import ResearchPage from "@/pages/ResearchPage";
import NotFound from "@/pages/not-found";

// Import header and footer components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Main App function - this is where everything starts
function App() {
  return (
    // This provides our data fetching capabilities
    <QueryClientProvider client={queryClient}>
      {/* Main container with styling */}
      <div className="font-sans bg-gray-50 text-gray-800">
        {/* Flex container to make footer stick to bottom */}
        <div className="flex flex-col min-h-screen">
          {/* Website header with navigation */}
          <Header />
          
          {/* Main content area */}
          <main className="flex-grow">
            {/* This handles our page routing */}
            <Switch>
              <Route path="/" component={HomePage} />
              <Route path="/statistics" component={StatisticsPage} />
              <Route path="/resources" component={ResourcesPage} />
              <Route path="/advocacy" component={AdvocacyPage} />
              <Route path="/research" component={ResearchPage} />
              <Route component={NotFound} />
            </Switch>
          </main>
          
          {/* Website footer */}
          <Footer />
        </div>
        
        {/* This shows toast notifications */}
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
