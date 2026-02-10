import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.tech"), href: "#tech" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 shadow-xl shadow-purple-500/5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-xs font-bold rounded-full border border-zinc-700 px-3 py-1 bg-zinc-900 hover:border-zinc-500 transition"
        >
          <span className={language === "sv" ? "text-white" : "text-zinc-500"}>SV</span>
          <span className="text-zinc-600">/</span>
          <span className={language === "en" ? "text-white" : "text-zinc-500"}>EN</span>
        </button>
      </div>
    </nav>
  );
}
