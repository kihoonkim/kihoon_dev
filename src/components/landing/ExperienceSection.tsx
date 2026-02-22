import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
    return (
        <section className="w-full py-16 md:py-24 border-t border-zinc-900 bg-zinc-900/20" id="experience">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Work Experience</h2>

                <div className="relative space-y-8 pl-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-8 top-1 h-4 w-4 rounded-full border border-zinc-700 bg-zinc-900 ring-4 ring-zinc-950"></div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                <h3 className="text-lg font-semibold text-zinc-50">{exp.role}</h3>
                                <span className="text-sm font-medium text-zinc-500">{exp.period}</span>
                            </div>
                            <p className="text-zinc-400 font-medium mb-2">{exp.company}</p>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
