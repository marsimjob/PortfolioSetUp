// src/components/ui/Tag.jsx
export default function Tag({ children }) {
  return (
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
      {children}
    </span>
  );
}