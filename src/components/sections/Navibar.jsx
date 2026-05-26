import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t("nav.home"),     href: "#hero" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.tech"),     href: "#tech" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-5 py-2.5 rounded-full bg-[#080c14]/85 backdrop-blur-md border border-white/10 shadow-xl shadow-sky-500/5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}

        <span className="w-px h-4 bg-white/10" />

        <a
          href="#contact"
          className="text-sm font-bold px-4 py-1.5 rounded-full
            bg-gradient-to-r from-sky-500 to-indigo-500
            text-white shadow-md shadow-sky-500/20
            hover:opacity-90 transition-opacity"
        >
          {t("nav.contact")}
        </a>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-xs font-bold rounded-full border border-white/10 px-3 py-1 bg-white/5 hover:border-white/20 transition"
        >
          <span className={language === "sv" ? "text-white" : "text-slate-500"}>SV</span>
          <span className="text-slate-600">/</span>
          <span className={language === "en" ? "text-white" : "text-slate-500"}>EN</span>
        </button>
      </div>
    </nav>
  );
}
