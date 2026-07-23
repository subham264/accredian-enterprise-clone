import Stats from "@/app/Stats/page";
import Hero from "@/components/Sections/Hero";
import Clients from "./Clients/Clients";
import AccredianEdge from "@/app/AccredianEdge/AccredianEdge";
import DomainCards from "./DomainCards/DomainCard";
import CAT from "./CAT/CAT";
import HowItWorks from "./HowItsWork/HowItsWork";
import FAQ from "@/app/FAQs/FAQ";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "@/app/Footer/Footer";
import Contact from "./Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainCards />
      <CAT />
      <HowItWorks />
      <Contact />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
