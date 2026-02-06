import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qcmems4",
      "template_8dyvbpk",
      form.current,
      "f-P3G5Y9NbDEMLiXr"
    );
  };

  return (
    <section className="space-y-4">
      <h2 className="text-4xl font-bold text-accent">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md">
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          className="w-full p-3 rounded bg-zinc-800"
        />

        <input
          type="email"
          name="reply_to"
          placeholder="Your email"
          className="w-full p-3 rounded bg-zinc-800"
        />

        <textarea
          name="message"
          placeholder="Your message"
          className="w-full p-3 rounded bg-zinc-800"
        ></textarea>

        <button className="px-5 py-3 bg-accent text-black font-semibold rounded">
          Send
        </button>
      </form>
    </section>
  );
}
