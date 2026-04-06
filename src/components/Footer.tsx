import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight mb-4 block">
              <span className="text-[#DC2626]">D</span>ean <span className="text-[#DC2626]">D</span>iego
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              AI Solutions Architect. I build full-stack platforms, autonomous drone systems, and AI integrations — shipped in days, not months.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Navigation</h4>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm text-gray-400 hover:text-white transition">About</Link>
              <Link href="/services" className="block text-sm text-gray-400 hover:text-white transition">Services</Link>
              <Link href="/work" className="block text-sm text-gray-400 hover:text-white transition">Work</Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-white transition">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Connect</h4>
            <div className="space-y-2.5">
              <a href="https://linkedin.com/in/deandiego" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="https://github.com/xprtsolutionsllc" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition">GitHub</a>
              <a href="https://goxprt.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition">XPRT Cloud</a>
              <a href="mailto:xprtsolutionsllc@gmail.com" className="block text-sm text-gray-400 hover:text-white transition">Email</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>&copy; {new Date().getFullYear()} XPRT Solutions LLC &mdash; Youngstown, Ohio</div>
          <div>Built with AI. Shipped fast.</div>
        </div>
      </div>
    </footer>
  );
}
