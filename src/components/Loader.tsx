const Loader = () => {
  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col justify-center items-center z-[9999]">

      {/* Profile Photo */}
      <img
        src="/Profile.jpeg"
        alt="Aditi Bhadauria"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6 animate-pulse"
      />

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
        Aditi Bhadauria
      </h1>

      {/* Role */}
      <p className="text-blue-400 tracking-[3px] uppercase text-sm mb-8">
        Administrative Professional
      </p>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 animate-loader"></div>
      </div>

      <p className="mt-4 text-slate-400">
        Preparing Portfolio...
      </p>

    </div>
  );
};

export default Loader;