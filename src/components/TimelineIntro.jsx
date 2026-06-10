import { Pencil } from "lucide-react";
import psychologyIcon from "../assets/images/psychology-icon.png";
import coursePreview from "../assets/images/course-preview.png";
export default function TimelineIntro() {
  return (
    <div className="relative  pb-32">

      {/* Horizontal Line */}
      <div className="hidden md:block absolute top-[70px] left-[160px] right-[160px] h-[2px] bg-orange-500" />

      
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">

        {/* LEFT SIDE */}
        <div className="relative ">

        <img
  src={coursePreview}
  alt="Course Preview"
  className="
    w-[220px]
    md:w-[280px]
    lg:w-[320px]
    rounded-lg
    mb-6
  "
/>

          <p className="text-orange-500 text-xs">
            Day 1-4
          </p>

          <h3 className="text-white text-3xl font-semibold mt-2">
            Mindset Shift
          </h3>

          <p className="text-gray-400 text-sm mt-3 max-w-[260px]">
            Forge a winning mindset to set the stage for
            success in the world of sales.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 text-left md:text-right">

          <img
  src={psychologyIcon}
  alt="Psychology"
  className="
    w-[100px]
    md:w-[120px]
    lg:w-[140px]
    md:ml-auto
    mb-6
  "
/>

          <p className="text-orange-500 text-xs">
            Day 5-8
          </p>

          <h3 className="text-white text-3xl font-semibold mt-2">
            Understanding
            <br />
            Human Psychology
          </h3>

          <p className="text-gray-400 text-sm mt-3 md:ml-auto max-w-[280px]">
            Dive deep into the psychology of your
            audience, mastering the art of persuasion.
          </p>

        </div>

      </div>
    </div>
  );
}