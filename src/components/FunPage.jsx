import {
  Users,
  BarChart3,
  LayoutGrid,
} from "lucide-react";

export default function FunPage() {
  const cards = [
    {
      icon: <LayoutGrid size={34} />,
      title:
        "Exclusive Access to Elite Training by Rebien Ghazli",
      description:
        "Immerse yourself in top-notch training curated by Rebien Ghazli. Gain insights, techniques, and proven strategies that guarantee success."
    },
    {
      icon: <BarChart3 size={34} />,
      title:
        "Secure your future with a guaranteed, High-income sales job.",
      description:
        "Upon course completion, land a Dutch agency role and start building your future with confidence."
    },
    {
      icon: <Users size={34} />,
      title:
        "Stay Motivated and Connected through our Community.",
      description:
        "Join like-minded individuals, receive support, and stay accountable throughout your journey."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-orange-500/20 blur-[140px] rounded-full" />
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-orange-500/10 blur-[140px] rounded-full" />

      {/* Floating Spheres */}
      <div className="absolute left-20 top-40 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" />
      <div className="absolute right-20 bottom-40 w-40 h-40 bg-orange-500/20 rounded-full blur-xl" />
      <div className="absolute left-1/2 bottom-20 w-28 h-28 bg-orange-400/20 rounded-full blur-xl" />

      <div className="container-custom relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Revolutionise Your Approach
              <br />
              to Cold Calling and Get
              <br />
              Closer to Your{" "}
              <span className="text-orange-500">
                Dream Career
              </span>
              <br />
              <span className="text-orange-500">
                and Financial Freedom!
              </span>
            </h2>

            <p className="mt-6 text-white/70 max-w-lg leading-relaxed">
              Embark on a transformative 21-day journey and discover
              the secrets to effective communication.
            </p>

            <button
              className="
                mt-8
                px-6
                py-3
                rounded-full
                bg-orange-500
                hover:bg-orange-600
                transition-all
                duration-300
                font-medium
              "
            >
              Book a Free Call →
            </button>
          </div>

          {/* Right Side Avatars */}
          {/* Right Side Avatars */}
<div className="relative h-[500px] hidden md:block">
  <div className="absolute top-0 left-10 w-36 h-36 rounded-full bg-pink-200 border-4 border-white/20" />
  <div className="absolute top-5 right-10 w-32 h-32 rounded-full bg-violet-200 border-4 border-white/20" />
  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-neutral-200 border-4 border-white/20" />
  <div className="absolute bottom-32 left-0 w-32 h-32 rounded-full bg-cyan-200 border-4 border-white/20" />
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-yellow-200 border-4 border-white/20" />
  <div className="absolute bottom-32 right-0 w-36 h-36 rounded-full bg-sky-200 border-4 border-white/20" />
</div>
        </div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                backdrop-blur-xl
                bg-white/[0.04]
                border
                border-white/10
                rounded-3xl
                p-6
                min-h-[280px]
                hover:border-orange-500/30
                transition-all
                duration-300
              "
            >
              <div className="text-orange-500 mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-medium leading-tight">
                {card.title}
              </h3>

              <p className="mt-4 text-white/70 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}