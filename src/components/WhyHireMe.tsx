const WhyHireMe = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px]">
            Why Hire Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What I Bring
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Strong Administration
            </h3>

            <p className="text-slate-300">
              Expertise in school administration, admissions and office operations.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Documentation Excellence
            </h3>

            <p className="text-slate-300">
              Accurate record keeping, MIS reporting and compliance management.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Customer Relationship Skills
            </h3>

            <p className="text-slate-300">
              Strong communication and stakeholder management abilities.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Process Improvement
            </h3>

            <p className="text-slate-300">
              Focused on efficiency, organization and service quality.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyHireMe;