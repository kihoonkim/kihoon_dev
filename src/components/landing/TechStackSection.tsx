import { techStack } from "@/data/portfolio";

export default function TechStackSection() {
    return (
        <section className="w-full py-16 md:py-24 border-t border-zinc-900" id="stack">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="flex flex-col items-center gap-2 mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
                    <p className="text-zinc-400">The tools and technologies I use to build robust applications.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card p-6 text-center transition-all hover:bg-zinc-800/50"
                        >
                            <span className={`material-symbols-outlined text-4xl ${tech.iconColorClass || "text-zinc-50"}`}>
                                {tech.icon}
                            </span>
                            <span className="text-sm font-medium">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
