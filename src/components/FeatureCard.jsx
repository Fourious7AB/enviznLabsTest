export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[rgba(35,12,20,0.55)]
        backdrop-blur-xl
        p-6
        min-h-[260px]
        transition-all
        duration-300
        hover:border-orange-500/30
      "
    >
      <div className="mb-5 text-orange-500">
        {icon}
      </div>

      <h3 className="text-white text-2xl font-medium leading-tight">
        {title}
      </h3>

      <p className="mt-4 text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}