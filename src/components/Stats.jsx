export default function Stats() {
  return (
    <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-12">

      <div>
        <h3 className="text-3xl font-bold">
          +200
        </h3>
        <p className="text-sm text-white/50">
          Active Users
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">
          +10,000$
        </h3>
        <p className="text-sm text-white/50">
          Avg profit p/m per client
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">
          +1,200,000$
        </h3>
        <p className="text-sm text-white/50">
          Total capital
        </p>
      </div>

    </div>
  );
}