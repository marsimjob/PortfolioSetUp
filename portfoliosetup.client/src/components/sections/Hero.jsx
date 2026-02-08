import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";
import HeroTestimonials from "./HeroTestimonials";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center py-20 px-3 space-y-16">
            {/* Background glow */}
            <div className="absolute -top-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full -z-10" />
            <div className="flex flex-col md:flex-row items-center gap-14 max-w-6xl w-full">
                {/* Slide from left */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-shrink-0"
                >
                    <ProfileImage size="w-36 h-52 md:w-56 md:h-72" />
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
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mt-2 mb-2">
                                SOFTWARE ENGINEER
                            </span>
                        </h1>
                    </div>

                    {/* Mission */}
                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                        <span className="text-zinc-200">Mission:</span> Building high-performance{" "}
                        <span className="text-zinc-200">backend systems</span> and modern{" "}
                        <span className="text-zinc-200">React interfaces</span> with precision and
                        clean architecture.
                    </p>

                    {/* GitHub Contributions */}
                    <GitHubContributions gitHubUserName="marsimjob" />

                    {/* Testimonials */}
                    <HeroTestimonials />

                    {/* Gradient separator */}
                    <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full" />

                    {/* Buttons side by side */}
                    <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                        {/* Scroll to Projects button */}
                        <motion.button
                            onClick={scrollToProjects}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
                            className="group relative inline-flex items-center justify-center px-8 py-6 rounded-full 
                         bg-gradient-to-r from-purple-400 to-emerald-400 text-white font-bold shadow-lg overflow-hidden
                         transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                ⇓ Click to know how I can help you!
                                <span className="group-hover:translate-x-1 transition-transform">⇓</span>
                            </span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
                        </motion.button>

                        {/* OR separator */}
                        <span className="text-zinc-400 text-sm hidden md:inline">OR</span>

                        {/* Download CV */}
                        <a
                            href="/documents/Mario_Alexandar_Simic_CV.pdf"
                            download
                            className="px-8 py-6 rounded-full border border-zinc-700 text-white hover:bg-zinc-800 transition"
                        >
                            📄 Download CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function GitHubContributions({ gitHubUserName }) {
    return (
        <div className="w-full overflow-x-auto rounded-xl bg-zinc-900 p-4 border border-zinc-800">
            <img
                src={`https://ghchart.rshah.org/7c3aed/${gitHubUserName}`}
                alt="GitHub Contributions"
                className="w-full"
            />
        </div>
    );
}

function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
    });
}
