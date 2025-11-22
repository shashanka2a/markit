export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-midnight/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric to-cyan-500 flex items-center justify-center shadow-lg shadow-electric/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 overflow-hidden">
            <img src="/logo.svg" alt="Markit Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-sans font-extrabold text-xl tracking-tighter text-white group-hover:text-gray-200 transition-colors">Markit.one</span>
        </div>
        <button className="md:hidden text-gray-300 hover:text-white p-2">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors relative group/link">
            Product
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover/link:w-full"></span>
          </a>
          <a href="#" className="hover:text-white transition-colors relative group/link">
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover/link:w-full"></span>
          </a>
          <a href="#" className="hover:text-white transition-colors relative group/link">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover/link:w-full"></span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</a>
          <button className="px-5 py-2 rounded-full bg-white text-midnight text-sm font-bold hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            Start Building
          </button>
        </div>
      </div>
    </nav>
  );
}

