import { useState } from "react";
export default function InfoDisplay({ project }) {
    if (!project) return null;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* 1. Header Area */}
            <div>
                <h2 className="text-4xl font-black text-white">{project.title}</h2>
                <div className="flex gap-2 mt-3">
                    {project.highlights.map((h) => (
                        <span key={h} className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                            {h}
                        </span>
                    ))}
                </div>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                {project.details}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`${project.title} screenshot ${index}`}
                        className="rounded-lg border border-zinc-800 bg-zinc-900 object-cover"
                    />
                ))}
            </div>
        </div>
    );
}