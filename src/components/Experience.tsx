const experiences = [
  {
    company: "DK International School",
    role: "Administration Assistant",
    period: "Mar 2023 - Present",
    description:
      "Managed admissions, student records, MIS reporting, parent communication, staff coordination, and school events.",
  },
  {
    company: "Samruddhi Group",
    role: "Administrative & Sales Coordinator",
    period: "2019 - 2022",
    description:
      "Handled customer records, banking coordination, loan documentation, project documentation, and sales support.",
  },
  {
    company: "Brighter Builders",
    role: "Administrative & Customer Relations Executive",
    period: "2018 - 2019",
    description:
      "Managed front-office operations, customer service, documentation, and inventory coordination.",
  },
  {
    company: "Customer Care Executive",
    role: "Customer Service Representative",
    period: "2017",
    description:
      "Resolved customer queries, handled complaints, and maintained service records.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] mb-3">
            Career Journey
          </p>

          <h2 className="text-5xl font-bold">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    {exp.company}
                  </h3>

                  <p className="text-lg">
                    {exp.role}
                  </p>
                </div>

                <span className="text-slate-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-300">
                {exp.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;