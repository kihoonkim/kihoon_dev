import { mentorings } from "@/data/portfolio";

export default function MentoringSection() {
    return (
        <section className="w-full py-16 md:py-24 border-t border-zinc-900 bg-zinc-900/10" id="mentoring">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="flex flex-col items-center gap-2 mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Mentoring & Community</h2>
                    <p className="text-zinc-400 max-w-[600px]">
                        I am deeply passionate about sharing knowledge and empowering the next generation of developers through guidance and collaborative learning.
                    </p>
                </div>
                <div className="relative space-y-8 pl-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
                    {mentorings.map((mentoring, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-8 top-1 h-4 w-4 rounded-full border border-zinc-700 bg-zinc-900 ring-4 ring-zinc-950"></div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
                                <h3 className="text-zinc-50 font-medium">
                                    {mentoring.organization}
                                    <span className="text-zinc-400 ml-2 font-normal text-sm">{mentoring.role}</span>
                                </h3>
                                <span className="text-sm font-medium text-zinc-500 shrink-0">{mentoring.period}</span>
                            </div>
                            {mentoring.details.length > 0 && (
                                <ul className="list-disc list-outside ml-4 text-sm text-zinc-400 space-y-2 leading-relaxed">
                                    {mentoring.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
