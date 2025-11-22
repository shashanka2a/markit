export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-electric to-cyan-500 flex items-center justify-center overflow-hidden">
            <img src="/logo.svg" alt="Markit Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-sans font-extrabold text-lg tracking-tighter text-white">Markit.one</span>
        </div>
        <div className="text-sm text-gray-500">
          &copy; 2025 Markit.one Inc.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-xl">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-xl">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-xl">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

