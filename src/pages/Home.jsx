import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FunPage from "../components/FunPage";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import ChallengeHero from "../components/ChallengeHero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05010B] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <FunPage />
      <Testimonials />
      <FAQSection />
      <ChallengeHero />
      <Footer />
    </div>
  );
}