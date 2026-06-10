const achievements = [
  {
    title: "Admission Management",
    desc: "Managed complete admission lifecycle including documentation and enrollment."
  },
  {
    title: "MIS Reporting",
    desc: "Prepared reports and operational dashboards for management decisions."
  },
  {
    title: "School Administration",
    desc: "Coordinated daily school operations and staff administration."
  },
  {
    title: "Customer Relations",
    desc: "Handled customer and parent communication effectively."
  }
];

const Achievements = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px]">
            Achievements
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Key Highlights
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;