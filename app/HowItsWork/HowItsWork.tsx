import { howItWorks } from "@/data/enterprise";

const HowItWorks = () => {
  return (
    <section id="how" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            How <span className="text-blue-600">It Works</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Our enterprise learning process is simple, scalable, and designed to
            deliver measurable business outcomes.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20">
          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-14 hidden h-1 bg-blue-100 lg:block"></div>

          <div className="grid gap-10 lg:grid-cols-4">
            {howItWorks.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative text-center">
                  {/* Circle */}

                  <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition duration-300 hover:scale-110">
                    <Icon size={38} />
                  </div>

                  {/* Number */}

                  <div className="absolute left-1/2 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-4 items-center justify-center rounded-full bg-white font-bold text-blue-600 shadow-md">
                    {step.id}
                  </div>

                  <h3 className="mt-8 text-xl font-bold">{step.title}</h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
