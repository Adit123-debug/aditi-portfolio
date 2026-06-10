const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] mb-3">
            Education
          </p>

          <h2 className="text-5xl font-bold">
            Academic Background
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-400">
              MBA
            </h3>
            <p className="mt-3">
              NMIMS University
            </p>
            <p className="text-slate-400">
              Score: 60%
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-400">
              B.Com
            </h3>
            <p className="mt-3">
              University of Uttar Pradesh
            </p>
            <p className="text-slate-400">
              Score: 55%
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-400">
              HSC
            </h3>
            <p className="mt-3">
              CBSE Board
            </p>
            <p className="text-slate-400">
              Score: 69%
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;