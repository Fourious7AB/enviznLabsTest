import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FunPage from "../components/FunPage";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import ChallengeHero from "../components/ChallengeHero";
import Footer from "../components/Footer";
import MentorSection from "../components/MentorSection";
import WinnersSection from "../components/WinnersSection";
import PricingSection from "../components/PricingSection";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05010B] text-white">
      <Navbar />
      <Hero />
      <FunPage />
      <Testimonials />      
      <MentorSection/>
      <PricingSection />
      <WinnersSection/>
      <FAQSection />
      <ChallengeHero />
      <Footer />
    </div>
  );
}