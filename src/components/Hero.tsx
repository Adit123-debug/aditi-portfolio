const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION */}
        <div>

          <p className="uppercase tracking-[4px] text-blue-300 mb-4">
            Administrative Professional
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Aditi
            <span className="block text-blue-300">
              Bhadauria
            </span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
            Results-driven Administrative Professional with
            8+ years of experience in School Administration,
            Admission Management, Academic Operations,
            Documentation and Customer Relationship Management.
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
            href="/Aditi_Resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 transition px-7 py-4 rounded-xl font-semibold inline-block"
            >
            Download Resume
            </a>
            <a
              href="mailto:aditibhadauria230@gmail.com?subject=Portfolio Inquiry&body=Hello Aditi,"
              className="border border-slate-400 hover:bg-white hover:text-black transition px-7 py-4 rounded-xl inline-block"
            >
              Email Me
            </a>
            <a
              href="tel:+919834303423"
              className="border border-slate-400 hover:bg-white hover:text-black transition px-7 py-4 rounded-xl inline-block"
            >
              Call Me
            </a>
            <a
            href="https://www.linkedin.com/in/aditi-bhadauria-305502390"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white transition px-7 py-4 rounded-xl inline-block"
            >
            LinkedIn
          </a>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center">

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 w-full max-w-md">

            <div className="flex justify-center mb-6">

              <img
                src="/Profile.jpeg"
                alt="Aditi Bhadauria"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                />

            </div>

            <h3 className="text-2xl font-semibold text-center mb-2">
              Aditi Bhadauria
            </h3>

            <p className="text-center text-slate-300 mb-8">
              Administration Assistant
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/10 rounded-xl p-4 text-center">
                <h4 className="text-3xl font-bold">8+</h4>
                <p className="text-sm text-slate-300">
                  Years Experience
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4 text-center">
                <h4 className="text-3xl font-bold">3+</h4>
                <p className="text-sm text-slate-300">
                  Industries
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4 text-center">
                <h4 className="text-3xl font-bold">100%</h4>
                <p className="text-sm text-slate-300">
                  Documentation Accuracy
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4 text-center">
                <h4 className="text-3xl font-bold">24/7</h4>
                <p className="text-sm text-slate-300">
                  Operational Support
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;