"use client";

import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"
            ></motion.div>

            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                    <div className="lg:col-span-8 flex flex-col items-start gap-6">
                        {personalInfo.availableForHire && (
                            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm font-medium text-zinc-50 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Available for hire
                            </motion.div>
                        )}

                        <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            {personalInfo.title.split("with").map((text, index) => (
                                <span key={index}>
                                    {index === 1 ? (
                                        <>
                                            <br className="hidden md:block" /> with{" "}
                                            <span className="text-zinc-400">{text.trim()}</span>
                                        </>
                                    ) : (
                                        text
                                    )}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p variants={itemVariants} className="max-w-[700px] text-lg text-zinc-400 md:text-xl leading-relaxed">
                            {personalInfo.subtitle}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
                            <a
                                href="#projects"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 group"
                            >
                                View Projects
                                <span className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-800 bg-transparent px-8 text-sm font-medium text-zinc-50 shadow-sm transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="lg:col-span-4 flex justify-center lg:justify-end mt-12 lg:mt-0"
                    >
                        {personalInfo.profileImage && (
                            <div className="relative">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-zinc-800/50 p-2 bg-zinc-900/30 backdrop-blur-sm">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center border border-zinc-800">
                                        <Image
                                            src={personalInfo.profileImage}
                                            alt={`${personalInfo.name} profile`}
                                            className="w-full h-full object-cover scale-110 translate-y-4"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
