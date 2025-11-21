export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
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

