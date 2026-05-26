import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(null);
    const { t } = useLanguage();

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        if (!publicKey || !serviceId || !templateId) {
            setStatus("error");
            return;
        }

        emailjs.init(publicKey);
        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(() => {
                setStatus("success");
                form.current.reset();
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <section className="flex justify-center px-6 w-full">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-zinc-950 rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-zinc-800"
            >
                <div className="space-y-3 mb-6">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                        {t("contact.heading")}
                    </h2>
                    <p className="text-zinc-400">{t("contact.subtitle")}</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    <input
                        type="text"
                        name="from_name"
                        placeholder={t("contact.name")}
                        className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition"
                    />

                    <input
                        type="email"
                        name="reply_to"
                        placeholder={t("contact.email")}
                        className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition"
                    />

                    <textarea
                        name="message"
                        placeholder={t("contact.message")}
                        rows={5}
                        className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition resize-none"
                    ></textarea>

                    <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative inline-flex items-center justify-center px-6 py-3 rounded-full
                       bg-gradient-to-r from-sky-500 to-indigo-500
                       text-white text-sm font-bold shadow-md shadow-sky-500/20 overflow-hidden disabled:opacity-50 hover:opacity-90 transition-opacity"
                    >
                        <span className="relative z-10">
                            {status === "sending" ? t("contact.sending") : t("contact.send")}
                        </span>
                        <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-full transition-opacity"></span>
                    </motion.button>

                    {status === "success" && (
                        <p className="text-sky-400 text-sm">{t("contact.success")}</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 text-sm">{t("contact.error")}</p>
                    )}
                </form>

                {/* Social Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <motion.a
                        href="https://github.com/marsimjob"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-full bg-zinc-800 text-white font-bold shadow-lg hover:bg-zinc-700 transition"
                    >
                        {t("contact.github")}
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/mario-simic-985892339/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition"
                    >
                        {t("contact.linkedin")}
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
