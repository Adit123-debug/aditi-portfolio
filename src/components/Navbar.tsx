const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-white text-xl font-bold"
        >
          Aditi Bhadauria
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-300">

          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#experience"
            className="hover:text-blue-400 transition"
          >
            Experience
          </a>

          <a
            href="#skills"
            className="hover:text-blue-400 transition"
          >
            Skills
          </a>

          <a
            href="#education"
            className="hover:text-blue-400 transition"
          >
            Education
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;