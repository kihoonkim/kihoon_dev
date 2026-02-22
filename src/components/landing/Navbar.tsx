import { personalInfo } from "@/data/portfolio";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-zinc-900/60 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                    <div className="size-6 bg-primary rounded-md flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-[16px]">code</span>
                    </div>
                    {personalInfo.name}
                </div>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
                    <Link className="hover:text-zinc-50 transition-colors" href="#projects">
                        Projects
                    </Link>
                    <Link className="hover:text-zinc-50 transition-colors" href="#experience">
                        Experience
                    </Link>
                    <Link className="hover:text-zinc-50 transition-colors" href="#stack">
                        Stack
                    </Link>
                    <Link className="hover:text-zinc-50 transition-colors" href="#mentoring">
                        Mentoring
                    </Link>
                    <Link className="hover:text-zinc-50 transition-colors" href="#contact">
                        Contact
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        className="text-zinc-400 hover:text-zinc-50 transition-colors"
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                clipRule="evenodd"
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                fillRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
}
