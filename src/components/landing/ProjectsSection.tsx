"use client";

import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function ProjectsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98] as any,
            },
        },
    };

    return (
        <section className="w-full py-16 md:py-24 border-t border-zinc-900" id="projects">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col gap-2 mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
                    <p className="text-zinc-400">A collection of projects I&apos;ve worked on recently.</p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group rounded-xl border border-border bg-card overflow-hidden hover:border-zinc-700 transition-colors flex flex-col"
                        >
                            <div className="aspect-video w-full overflow-hidden bg-zinc-900 relative">
                                <img
                                    alt={project.imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={project.image}
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
                                </div>
                                <p className="text-zinc-400 mb-6 text-sm leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 text-[10px] font-semibold text-zinc-50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
