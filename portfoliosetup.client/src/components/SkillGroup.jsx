import Card from "./ui/Card.jsx";

// 1. Add 'index' to the props
export default function SkillGroup({ title, items, side = "left", color = "purple", index = 0 }) {

  const colorMap = {
    purple: "text-purple-400 border-purple-500/40 bg-purple-500/10 hover:border-purple-500/60",
    blue: "text-blue-400 border-blue-500/40 bg-blue-500/10 hover:border-blue-500/60",
    emerald: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10 hover:border-emerald-500/60",
  };

  const selectedColor = colorMap[color] || colorMap.purple;

  return (
    <div 
      style={{ animationDelay: `${index * 10}ms` }}
      className={`transition-all duration-1000 animate-in fade-in fill-mode-both 
        ${side === "left" ? "slide-in-from-left" : "slide-in-from-right"}`}
    >
      <Card className={`h-full border-t-4 ${selectedColor.split(' ')[1]}`}>
        <h3 className={`text-xl font-bold mb-4 border-b border-zinc-800 pb-2 ${selectedColor.split(' ')[0]}`}>
          {title}
        </h3>
        
        <div className="grid grid-cols-1 gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 group">
              <div className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedColor}`}>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}