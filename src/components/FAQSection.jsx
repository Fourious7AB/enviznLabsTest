import logo from "../assets/icons/logo.png";
const faqs = [
  "What makes Sales Mastery different from other sales courses?",
  "How does the 21-day challenge work?",
  "Is there a guarantee for joining?",
  "What if I have no prior sales experience?",
  "Can I join Sales Mastery if I'm not located in the Netherlands?",
  "How do I get started with Sales Mastery?"
];

export default function FAQSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#05010B] via-[#12031f] to-[#ff5c22]" />

      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-3">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-300 mb-10">
          Discover in depth answers to your questions about Sales Mastery
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-md"
            >
              <div className="flex items-center justify-between p-4 md:p-5">
                <span className="text-sm md:text-base text-white">
                  {faq}
                </span>

                <img
                  src={logo}
                  alt="logo"
                  className="w-5 h-5 md:w-6 md:h-6 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}