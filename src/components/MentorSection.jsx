import mentorImg from "../assets/rebien.jpg";
import SectionContainer from "./SectionContainer";
export default function MentorSection() {
  return (
    <section className="py-24">
        <SectionContainer>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet <span className="text-orange-500">Rebien Ghazali 👋</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Discover the Sales King Behind Sales Mastery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-gray-300 leading-8 mb-6">
              Rebien Ghazali, often hailed as the "Sales King,"
              is a renowned figure in the world of sales and
              entrepreneurship.
            </p>

            <p className="text-gray-300 leading-8">
              Rebien's commitment to your success goes beyond
              the challenge. He personally guides participants
              through proven sales systems.
            </p>

            <div className="flex flex-wrap gap-8 mt-10 text-xl font-bold">
              <span>VICE</span>
              <span>AD</span>
              <span>FUNX</span>
              <span>VIDEOLAND</span>
            </div>
          </div>

          <div>
            <img
              src={mentorImg}
              alt="mentor"
              className="rounded-2xl w-full"
            />
          </div>

        </div>

      </div>
        </SectionContainer>
    </section>
  );
}