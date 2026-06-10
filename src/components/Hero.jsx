import Stats from "./Stats";
import CTAButtons from "./CTAButtons";
import VideoSection from "./VideoSection";

export default function Hero() {
  return (
    <>
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="w-[900px] h-[900px] rounded-full bg-orange-500/20 blur-[180px]" />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 text-center">

        <div className="inline-flex px-4 py-1 rounded-full border border-orange-400/20 bg-orange-500/10 text-xs">
          ⚡ Limited Seats
        </div>

        <h1 className="mt-8 font-bold leading-[0.95] text-[44px] sm:text-[58px] lg:text-[76px] tracking-tight">
          Guarantee your first sales
          <br />

          job and{" "}
          <span className="text-orange-500">
            start earning
          </span>{" "}
          hard

          <br />

          earned cash in{" "}
          <span className="text-orange-500">
            21 days.
          </span>
        </h1>

        <p className="mt-8 text-white/70 max-w-2xl mx-auto">
          Discover Elite Sales Strategies,
          Transform Your Mindset, and Make Every
          Moment Count in Your Path to Sales Mastery!
        </p>

        <Stats />

        <CTAButtons />

        <VideoSection />
      </section>
    </>
  );
}