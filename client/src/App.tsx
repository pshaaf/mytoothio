import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Iphone } from "@/pages/Iphone";
import { Reschedule } from "@/pages/Reschedule";
import { OtpVerificationPage } from "@/pages/OtpVerification";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Reschedule} />
      <Route path="/otp-verification" component={OtpVerificationPage} />
      <Route path="/dashboard" component={Iphone} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-gray-50 md:bg-gradient-to-br md:from-blue-50 md:to-indigo-100 flex items-center justify-center p-0 md:p-4">
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
