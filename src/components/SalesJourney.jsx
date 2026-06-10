import HeroDetailes from "../components/HeroDetailes";
import Timeline from "../components/Timeline";

export default function SalesJourney() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03030F]">

      {/* Orange glow */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[180px]" />

      {/* Blue glow */}
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[180px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <HeroDetailes />
        <Timeline />
      </div>

    </main>
  );
}