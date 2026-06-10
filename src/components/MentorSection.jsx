import mentorImg from "../assets/images/rebien.png";
import SectionContainer from "./SectionContainer";
import viceLogo from "../assets/icons/vice.png";
import adLogo from "../assets/icons/ad.png";
import funxLogo from "../assets/icons/funx.png";
import videolandLogo from "../assets/icons/videoland.png";

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
            {/* Left Content */}
            <div>
              {/* First Paragraph */}
              <p className="text-gray-300 leading-8 mt-10 mb-10">
                Rebien Ghazali, often hailed as the "Sales King," is a renowned
                figure in the world of sales and entrepreneurship. With a proven
                track record of success and an unparalleled passion for
                empowering others, Rebien is the driving force behind Sales
                Mastery. Rebien's commitment to your success goes beyond the
                21-day challenge. As your mentor, he will personally guide you
                through the intricacies of sales, providing mentorship,
                inspiration, and a roadmap to help you excel in your career.
              </p>

              {/* Mobile Image */}
              <div className="lg:hidden mb-10">
                <img
                  src={mentorImg}
                  alt="mentor"
                  className="rounded-2xl w-full max-w-md mx-auto object-cover"
                />
              </div>

              {/* Second Paragraph */}
              <p className="text-gray-300 leading-8">
                Rebien's commitment to your success goes beyond the challenge.
                He personally guides participants through proven sales systems.
              </p>

              {/* Backed By */}
              <div className="mt-14 max-w-5xl mx-auto">
                <p className="text-gray-500 mb-8">Backed by:</p>

                <div className="flex justify-center items-center gap-4 md:gap-10 py-4 ">
                  <img
                    src={viceLogo}
                    alt="VICE"
                    className="h-6 md:h-10 object-contain opacity-70 hover:opacity-100 transition duration-300"
                  />

                  <img
                    src={adLogo}
                    alt="AD"
                    className="h-6 md:h-10 object-contain opacity-70 hover:opacity-100 transition duration-300"
                  />

                  <img
                    src={funxLogo}
                    alt="FUNX"
                    className="h-6 md:h-10 object-contain opacity-70 hover:opacity-100 transition duration-300"
                  />

                  <img
                    src={videolandLogo}
                    alt="VIDEOLAND"
                    className="h-6 md:h-10 object-contain opacity-70 hover:opacity-100 transition duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:flex justify-center">
              <img
                src={mentorImg}
                alt="mentor"
                className="rounded-2xl w-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}