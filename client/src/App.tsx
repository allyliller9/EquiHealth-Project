import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import HomePage from "@/pages/HomePage";
import StatisticsPage from "@/pages/StatisticsPage";
import ResourcesPage from "@/pages/ResourcesPage";
import AdvocacyPage from "@/pages/AdvocacyPage";
import ResearchPage from "@/pages/ResearchPage";
import NotFound from "@/pages/not-found";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/statistics" component={StatisticsPage} />
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/advocacy" component={AdvocacyPage} />
          <Route path="/research" component={ResearchPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-['Open_Sans'] bg-[#f8f5f7] text-[#333333]">
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
