import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import HeroTestimonials from "./HeroTestimonials";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
    const { t, language } = useLanguage();

    return (
        <section className="relative flex flex-col items-center justify-center px-6 space-y-16">
            <div className="tech-grid absolute -inset-x-12 -top-24 -bottom-8 -z-10 pointer-events-none" />
            <div className="pulse-glow absolute -top-20 left-1/4 w-96 h-96 bg-sky-500/10 blur-[140px] rounded-full -z-10 pointer-events-none" />
            <div className="pulse-glow-delayed absolute top-1/3 right-0 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full -z-10 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-shrink-0"
                >
                    <ProfileImage size="w-44 h-64 md:w-64 md:h-96" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-3xl"
                >
                    <div className="space-y-2">
                        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                            Mario Alexandar Simic
                            <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mt-2 mb-2 ${language === "sv" ? "" : "tracking-[0.25em]"}`}>
                                {t("hero.subtitle")}
                            </span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                        <span className="text-zinc-200">{t("hero.mission.label")}</span> {t("hero.mission.before")}{" "}
                        <span className="text-zinc-200">{t("hero.mission.backend")}</span> {t("hero.mission.mid")}{" "}
                        <span className="text-zinc-200">{t("hero.mission.react")}</span> {t("hero.mission.after")}
                    </p>

                    <GitHubContributions gitHubUserName="marsimjob" t={t} />

                    <HeroTestimonials />

                    <div className="w-full h-px bg-gradient-to-r from-sky-400 via-indigo-400 to-transparent rounded-full opacity-60" />

                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                        <motion.button
                            onClick={scrollToProjects}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
                                bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-bold
                                shadow-md shadow-sky-500/20 hover:opacity-90 transition-opacity"
                        >
                            {t("hero.cta")}
                            <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                        </motion.button>

                        <span className="text-slate-600 text-sm">{t("hero.or")}</span>

                        <a
                            href={`${import.meta.env.BASE_URL}documents/Mario_Alexandar_Simic_CV.pdf`}
                            download
                            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold
                                border border-white/10 text-slate-300 hover:border-white/20 hover:text-white transition"
                        >
                            <span className="paper-pop absolute left-1/2 top-0 text-3xl" aria-hidden>
                                📄
                            </span>
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
            <h3 className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 mb-3">
                {t("hero.github.heading")}
            </h3>
            <div className="overflow-x-auto rounded-lg bg-zinc-950 p-3 border border-zinc-700">
                <img
                    src={`https://ghchart.rshah.org/0ea5e9/${gitHubUserName}`}
                    alt="GitHub Contributions"
                    className="w-full"
                />
            </div>
        </div>
    );
}

function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}
