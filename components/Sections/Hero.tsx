import Image from "next/image";
import Button from "../ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="hero" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Enterprise Learning Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Upskill Your Workforce with
              <span className="text-blue-600"> Industry Experts</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empower your teams with job-ready programs, live mentorship, and
              measurable learning outcomes tailored for enterprises.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Book a Demo</Button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/home.jpg"
              alt="Home"
              width={700}
              height={600}
              loading="eager"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
