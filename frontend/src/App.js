import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Owner } from "@/components/sections/Owner";
import { Reviews } from "@/components/sections/Reviews";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <div className="App" data-testid="lc-app">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Owner />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
