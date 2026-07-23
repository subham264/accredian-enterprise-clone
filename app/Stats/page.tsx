import { stats } from "@/data/enterprise";
import StatCard from "@/components/ui/StatCard";
import Container from "@/components/ui/Container";

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">Trusted by Enterprises</h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Empowering organizations through world-class learning, measurable
            outcomes, and industry-focused programs.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCard
              key={item.label}
              number={item.number}
              label={item.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
