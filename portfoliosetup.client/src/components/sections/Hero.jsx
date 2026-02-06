export default function Hero() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-5xl font-bold text-accent">
        Mario Alexandar Simic, Software Engineer.
      </h1>
      <p className="text-xl max-w-xl mx-auto">
        Fullstack developer building clean backend systems and modern React UIs.
      </p>
      <button
  onClick={scrollToProjects}
  className="mt-8 inline-flex items-center gap-2 rounded-lg
             bg-zinc-100 px-6 py-3 text-zinc-900
             hover:bg-white transition font-medium"
>
  Click here to get to know me more →
</button>
    </section>
  );
}
function scrollToProjects() {
  document.getElementById("projects")?.scrollIntoView({
    behavior: "smooth",
  });
}