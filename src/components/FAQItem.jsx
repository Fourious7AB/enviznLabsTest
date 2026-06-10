import logo from "../assets/logo.png";

export default function FAQItem({ question }) {
  return (
    <div className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
      <div className="flex items-center justify-between p-4 md:p-5">
        <span className="text-sm md:text-base text-white">
          {question}
        </span>

        <img
          src={logo}
          alt="logo"
          className="w-5 h-5 md:w-6 md:h-6 object-contain"
        />
      </div>
    </div>
  );
}