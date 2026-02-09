import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    console.log("SUCCESS:", result.text);
                    alert("Message sent!");
                },
                (error) => {
                    console.error("FAILED:", error);
                    alert("Failed to send message");
                }
            );
    };

    return (
        <section className="flex justify-center px-6">
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bg-zinc-900 rounded-2xl shadow-2xl p-8 w-full max-w-lg"
            >
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mb-6">
                    Contact Me
                </h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your name"
                        className="w-full p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />

                    <input
                        type="email"
                        name="reply_to"
                        placeholder="Your email"
                        className="w-full p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />

                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        className="w-full p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
                    ></textarea>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative inline-flex items-center justify-center px-6 py-3 rounded-full 
                       bg-gradient-to-r from-purple-400 to-emerald-400 
                       text-black font-bold shadow-lg overflow-hidden"
                    >
                        <span className="relative z-10">Send Message</span>
                        <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-full transition-opacity"></span>
                    </motion.button>
                </form>

                {/* Social Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <motion.a
                        href="https://github.com/marsimjob"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-full bg-zinc-800 text-white font-bold shadow-lg hover:bg-zinc-700 transition"
                    >
                        GitHub
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/mario-simic-985892339/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition"
                    >
                        LinkedIn
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
