import { Play } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12">

      <button className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition shadow-[0_0_50px_rgba(249,115,22,0.5)]">
        Join the Challenge Now →
      </button>

      <button className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
          <Play size={14} fill="white" />
        </div>

        <span className="text-orange-400">
          Watch Demo
        </span>
      </button>

    </div>
  );
}