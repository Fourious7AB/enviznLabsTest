
export default function ChallengeHero() {
  return (
    <section className="bg-[#ff5c22] min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-3xl">
        <h3 className="uppercase tracking-widest text-white/80 mb-4">
          Sales Mastery
        </h3>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Sign up for
          <br />
          21 Days Sales Challenge!
        </h1>

        <p className="text-white/90 mb-8">
          Revolutionize your approach to cold calling and unlock
          your sales potential.
        </p>

        <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition">
          Enroll Now
        </button>
      </div>
    </section>
  );
}