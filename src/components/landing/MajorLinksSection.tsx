"use client";

import { quickLinks } from "@/data/portfolio";

export default function MajorLinksSection() {
    return (
        <section className="w-full py-16 md:py-24 border-t border-zinc-900 bg-zinc-950/50" id="quick-links">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
                    주요 링크 <span className="text-zinc-500 font-normal ml-2 text-2xl">/ Quick Links</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {quickLinks.map((link, index) => (
                        <a
                            key={index}
                            className="group block p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="size-10 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    {link.icon === "github" ? (
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                        </svg>
                                    ) : (
                                        <span className="material-symbols-outlined">{link.icon}</span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-50 mb-1">{link.title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{link.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
