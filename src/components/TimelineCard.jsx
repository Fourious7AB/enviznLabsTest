export default function TimelineCard({
  days,
  title,
  description,
  image,
}) {
  return (
    <div className="relative ">

      {/* Left connector */}
      <div className="hidden md:block absolute -left-8 top-1/2 h-[120px] w-[40px] border-l-2 border-t-2 border-orange-500 rounded-tl-[40px]" />

      <div
        className="
        bg-[#060613]
        border
        border-white/10
        rounded-[20px]
        md:rounded-[24px]
        overflow-hidden
        backdrop-blur-sm
      "
      >
        <div
          className="
          grid
          md:grid-cols-[1fr_480px]
          items-center
          gap-8
          p-5
          md:p-8
          lg:p-10
        "
        >
          <div>
            <p className="text-orange-500 text-xs md:text-sm font-medium">
              {days}
            </p>

            <h3
              className="
              text-white
              font-semibold
              text-2xl
              md:text-4xl
              leading-tight
              mt-3
            "
            >
              {title}
            </h3>

            <p
              className="
              text-gray-400
              text-sm
              md:text-base
              leading-relaxed
              mt-4
              max-w-md
            "
            >
              {description}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src={image}
              alt={title}
              className="
                w-full
                h-[220px]
                md:h-[260px]
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}