import { domainCards } from "@/data/enterprise";

const DomainCards = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Learning Domains
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Explore Our <span className="text-blue-600">Domain Expertise</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Build high-impact capabilities with curated learning journeys across
            business, technology, leadership, and AI.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {domainCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
              >
                {/* Background Circle */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-50 transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-100"></div>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-8 text-xl font-bold text-gray-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-4 text-sm leading-7 text-gray-600">
                  Industry-focused learning paths designed to accelerate
                  organizational growth and workforce excellence.
                </p>

                {/* Learn More */}
                <button className="relative z-10 mt-8 font-semibold text-blue-600 transition group-hover:translate-x-2">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainCards;
