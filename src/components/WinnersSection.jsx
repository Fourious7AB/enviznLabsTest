import chat1 from "../assets/chat1.png";
import chat2 from "../assets/chat2.png";
import chat3 from "../assets/chat3.png";

export default function WinnersSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-orange-500">
              Join
            </span>{" "}
            the Winners' Circle
          </h2>

          <p className="text-gray-400 mt-4">
            Guarantee your first sales job within 21 days.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <img
            src={chat1}
            alt=""
            className="rounded-xl w-full"
          />

          <img
            src={chat2}
            alt=""
            className="rounded-xl w-full"
          />

          <img
            src={chat3}
            alt=""
            className="rounded-xl w-full"
          />

        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-medium">
            Join the Challenge Now →
          </button>
        </div>

      </div>

    </section>
  );
}