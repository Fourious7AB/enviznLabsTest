import winnersImg from "../assets/images/winners-section.png";

export default function WinnersSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-orange-500">Join</span> the Winners' Circle
          </h2>

          <p className="text-gray-400 mt-4">
            Guarantee your first sales job and revel in the victory of earning
            within just 21 days.
          </p>
        </div>

        {/* Image + Button */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src={winnersImg}
            alt="Winners Circle"
            className="w-full rounded-2xl"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-medium shadow-lg whitespace-nowrap">
              Join the Challenge Now →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}