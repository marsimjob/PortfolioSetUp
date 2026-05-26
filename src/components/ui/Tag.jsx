export default function Tag({ children }) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/25 font-mono">
      {children}
    </span>
  );
}
