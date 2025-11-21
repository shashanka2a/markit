export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-midnight/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric to-cyan-500 flex items-center justify-center shadow-lg shadow-electric/20">
            <span className="text-white font-bold font-mono">M</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Markit.one</span>
        </div>
        <button className="md:hidden text-gray-300 hover:text-white p-2">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">Log in</a>
          <button className="px-5 py-2 rounded-full bg-white text-midnight text-sm font-bold hover:bg-gray-200 transition-all">
            Start Building
          </button>
        </div>
      </div>
    </nav>
  );
}

