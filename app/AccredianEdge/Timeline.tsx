import { timeline } from "@/data/enterprise";

const Timeline = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-gray-200" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-7">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                >
                  {item.position === "top" && (
                    <>
                      <h3 className="text-center text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-center text-sm text-gray-500">
                        {item.description}
                      </p>
                    </>
                  )}

                  {/* Top Connector */}
                  <div className="h-10 w-[2px] bg-blue-600" />

                  {/* Circle */}
                  <div className="z-10 flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-blue-200 bg-blue-600 shadow-xl transition duration-300 hover:scale-110">
                    <Icon className="text-3xl text-white" />
                  </div>

                  {/* Bottom Connector */}
                  <div className="h-10 w-[2px] bg-blue-600" />

                  {item.position === "bottom" && (
                    <>
                      <h3 className="mt-4 text-center text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-center text-sm text-gray-500">
                        {item.description}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
