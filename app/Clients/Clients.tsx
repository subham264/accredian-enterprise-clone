import Image from "next/image";
import { clients } from "@/data/enterprise";

const Clients = () => {
  return (
    <section
      id="clients"
      className="overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Our Clients
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Trusted by <span className="text-blue-600">Leading Companies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Organizations across industries trust Accredian Enterprise to
            transform their workforce through world-class learning programs.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative mt-16 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-8">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={60}
                  className="h-auto w-auto max-h-12 object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
