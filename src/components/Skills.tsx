const skills = [
  "School Administration",
  "Academic Administration",
  "Admission Management",
  "Office Management",
  "Administrative Operations",
  "Customer Relationship Management",
  "Banking Coordination",
  "Real Estate Administration",
  "MS Office Suite",
  "Advanced Excel",
  "Team Leadership",
  "MIS Reporting",
  "Data Management",
  "Documentation",
  "Event Coordination",
  "Staff Coordination",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] mb-3">
            Expertise
          </p>

          <h2 className="text-5xl font-bold">
            Skills & Competencies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500 transition"
            >
              <h3 className="font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;