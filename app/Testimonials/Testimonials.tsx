import { testimonials } from "@/data/enterprise";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Hear from organizations that have successfully transformed their
            workforce through Accredian Enterprise.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between">
                <Quote className="h-10 w-10 text-blue-600" />

                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="mt-6 leading-8 text-gray-600">"{item.review}"</p>

              {/* User */}
              <div className="mt-8 flex items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>

                  <p className="text-sm text-gray-500">{item.role}</p>

                  <p className="text-sm font-medium text-blue-600">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
