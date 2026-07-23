import Timeline from "./Timeline";
// import DomainCards from "./DomainCards";
// import CourseCards from "./CourseCards";

const AccredianEdge = () => {
  return (
    <section id="edge" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Key Aspects of Our Strategic Training
          </p>
        </div>

        <Timeline />
        {/* <DomainCards />
        <CourseCards /> */}
      </div>
    </section>
  );
};

export default AccredianEdge;
