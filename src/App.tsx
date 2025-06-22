
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AccommodationDetail from "./pages/AccommodationDetail";
import Activities from "./pages/Activities";
import Restaurants from "./pages/Restaurants";
import Reviews from "./pages/Reviews";
import Coupons from "./pages/Coupons";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accommodation/:id" element={<AccommodationDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/theme/couple" element={<ThemeCouple />} />
          <Route path="/theme/family" element={<ThemeFamily />} />
          <Route path="/theme/pet" element={<ThemePet />} />
          <Route path="/theme/luxury" element={<ThemeLuxury />} />
          <Route path="/theme/city" element={<ThemeCity />} />
          <Route path="/theme/camping" element={<ThemeCamping />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
