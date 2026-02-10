import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import HeroTestimonials from "./HeroTestimonials";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
    const { t, language } = useLanguage();

    return (
        <section className="relative flex flex-col items-center justify-center px-6 space-y-16">
            {/* Background glow */}
            <div className="absolute -top-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full -z-10" />
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
                {/* Slide from left */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-shrink-0"
                >
                    <ProfileImage size="w-44 h-64 md:w-64 md:h-96" />
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-3xl"
                >
                    {/* Name + Title */}
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
                            Mario Alexandar Simic
                            <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mt-2 mb-2 ${language === "sv" ? "" : "tracking-[0.25em]"}`}>
                                {t("hero.subtitle")}
                            </span>
                        </h1>
                    </div>

                    {/* Mission */}
                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                        <span className="text-zinc-200">{t("hero.mission.label")}</span> {t("hero.mission.before")}{" "}
                        <span className="text-zinc-200">{t("hero.mission.backend")}</span> {t("hero.mission.mid")}{" "}
                        <span className="text-zinc-200">{t("hero.mission.react")}</span> {t("hero.mission.after")}
                    </p>

                    {/* GitHub Contributions */}
                    <GitHubContributions gitHubUserName="marsimjob" t={t} />

                    {/* Testimonials */}
                    <HeroTestimonials />

                    {/* Gradient separator */}
                    <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full" />

                    {/* Buttons side by side */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
                        {/* Scroll to Projects button */}
                        <motion.button
                            onClick={scrollToProjects}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
                            className="group relative flex-1 inline-flex items-center justify-center px-8 py-6 rounded-full
                         bg-gradient-to-r from-purple-400 to-emerald-400 text-white font-bold shadow-lg overflow-hidden
                         transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t("hero.cta")}
                                <span className="group-hover:translate-x-1 transition-transform">{"\u21D3"}</span>
                            </span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
                        </motion.button>

                        {/* OR separator */}
                        <span className="text-zinc-400 text-sm font-medium">{t("hero.or")}</span>

                        {/* Download CV */}
                        <a
                            href="/documents/Mario_Alexandar_Simic_CV.pdf"
                            download
                            className="flex-1 text-center px-8 py-6 rounded-full border border-zinc-700 text-white hover:bg-zinc-800 transition"
                        >
                            {t("hero.downloadCv")}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function GitHubContributions({ gitHubUserName, t }) {
    return (
        <div className="w-full rounded-2xl bg-zinc-900 p-5 border border-zinc-800 shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mb-3">
                {t("hero.github.heading")}
            </h3>
            <div className="overflow-x-auto rounded-lg bg-zinc-950 p-3 border border-zinc-700">
                <img
                    src={`https://ghchart.rshah.org/7c3aed/${gitHubUserName}`}
                    alt="GitHub Contributions"
                    className="w-full"
                />
            </div>
        </div>
    );
}

function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
    });
}
