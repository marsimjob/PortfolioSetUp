export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Tech", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 shadow-xl shadow-purple-500/5">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}