import TimelineIntro from "./TimelineIntro";
import TimelineCard from "./TimelineCard";
import timelineData from "../data/timelineData";

export default function Timeline() {
  return (
    <section className="relative  pb-20">

      {/* Center Line */}
     <div
  className="
    hidden
    md:block
    absolute
    left-1/2
    top-[70px]
    bottom-0
    w-[2px]
    bg-orange-500
    -translate-x-1/2
  "
/>

      <TimelineIntro />

      <div className="space-y-8 md:space-y-12 lg:space-y-16">
        {timelineData.map((item) => (
          <TimelineCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}