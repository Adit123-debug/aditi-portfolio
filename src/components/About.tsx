const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-[4px] mb-3">
            About Me
          </p>

          <h2 className="text-5xl font-bold">
            Professional Summary
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <h3 className="text-3xl font-semibold mb-6">
              Administrative Professional with 8+ Years Experience
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Results-driven Administrative Professional with
              extensive experience across school administration,
              academic coordination, customer relationship
              management and real estate operations.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Experienced in admission management, documentation,
              MIS reporting, staff coordination, event management
              and parent–school communication. Known for strong
              organizational planning, operational efficiency and
              process improvement.
            </p>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-4xl font-bold text-blue-400">
                8+
              </h3>
              <p className="text-slate-400 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-4xl font-bold text-blue-400">
                3+
              </h3>
              <p className="text-slate-400 mt-2">
                Industries
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-4xl font-bold text-blue-400">
                100%
              </h3>
              <p className="text-slate-400 mt-2">
                Documentation Accuracy
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-4xl font-bold text-blue-400">
                MIS
              </h3>
              <p className="text-slate-400 mt-2">
                Reporting Expert
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;