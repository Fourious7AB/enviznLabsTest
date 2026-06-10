export default function PricingSection() {
  const features = [
    "21-Day Challenge Access",
    "Elite Training by Rebien Ghazali",
    "Free Call To Join",
    "Community Support",
    "Bonus 1-on-1 Coaching Session",
    "Enhanced Job Placement Opportunities",
    "Commission Tracking Features",
    "CRM Integration",
    "30-Day Mentorship",
    "VIP Networking"
  ];

  return (
    <section className="py-24 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-purple-500/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-orange-500">
              Tailored Packages
            </span>{" "}
            to Elevate Your Sales Journey
          </h2>

          <p className="text-gray-400 mt-4">
            Explore Exclusive Sales Mastery Packages
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="grid md:grid-cols-[300px_1fr] gap-10 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="text-center">

              <h4 className="text-lg font-semibold">
                Elite
              </h4>

              <div className="mt-4">
                <span className="text-6xl font-bold">
                  €500
                </span>

                <span className="ml-3 line-through text-gray-500">
                  €999
                </span>
              </div>

              <p className="text-gray-400 mt-2">
                One-time, 50% off
              </p>

              <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full">
                APPLY TO JOIN
              </button>

            </div>

            <div className="space-y-4">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <span className="text-green-400">
                    ✓
                  </span>

                  <span className="text-gray-200">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}