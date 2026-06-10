const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-blue-400 uppercase tracking-[4px] mb-3">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Let's Connect
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Open to administrative, school operations,
          office management, and customer relationship roles.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h3 className="font-bold text-xl mb-2">
              Email
            </h3>

            <p className="text-slate-400">
              aditibhadauria230@gmail.com
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h3 className="font-bold text-xl mb-2">
              Phone
            </h3>

            <p className="text-slate-400">
              +91 9834303423
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h3 className="font-bold text-xl mb-2">
              Location
            </h3>

            <p className="text-slate-400">
              Uttar Pradesh
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;