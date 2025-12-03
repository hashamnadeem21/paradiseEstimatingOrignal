import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ServiceAreas from "./pages/ServiceAreas";
import ServiceAreaDetail from "./pages/ServiceAreaDetail";
import StatePage from "./pages/StatePage";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";
import Category3 from "./pages/Category3";
import Category4 from "./pages/Category4";
import NotFound from "./pages/NotFound";

import ServiceTemplate from "./pages/ServiceTemplate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceTemplate />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/:state/:city" element={<ServiceAreaDetail />} />
          <Route path="/locations/:state" element={<StatePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-free-quote" element={<Contact />} />
          <Route path="/services/category-1" element={<Category1 />} />
          <Route path="/services/category-2" element={<Category2 />} />
          <Route path="/services/category-3" element={<Category3 />} />
          <Route path="/services/category-4" element={<Category4 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
