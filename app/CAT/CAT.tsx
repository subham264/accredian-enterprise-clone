import { catTracks } from "@/data/enterprise";

const CAT = () => {
  return (
    <section id="cat" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Career Accelerator Tracks
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Learn Through Our{" "}
            <span className="text-blue-600">CAT Programs</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Industry-designed learning journeys that help professionals build
            future-ready skills and accelerate career growth.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {catTracks.map((track) => {
            const Icon = track.icon;

            return (
              <div
                key={track.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Gradient Header */}
                <div
                  className={`bg-gradient-to-r ${track.color} flex h-36 items-center justify-center`}
                >
                  <Icon className="text-6xl text-white transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {track.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {track.description}
                  </p>

                  <button className="mt-8 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
                    Explore Track →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CAT;
