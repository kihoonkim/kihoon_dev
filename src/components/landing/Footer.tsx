import { personalInfo } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="w-full py-12 border-t border-zinc-900 bg-background" id="contact">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold text-zinc-50">Let&apos;s build something together.</p>
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-center gap-4">
                    {personalInfo.twitter && personalInfo.twitter !== "#" && (
                        <a
                            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50 transition-colors"
                            href={personalInfo.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Twitter</span>
                            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                    )}

                    {personalInfo.email && (
                        <a
                            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50 transition-colors"
                            href={`mailto:${personalInfo.email}`}
                        >
                            <span className="sr-only">Email</span>
                            <span className="material-symbols-outlined text-[20px] block">mail</span>
                        </a>
                    )}

                    {personalInfo.linkedin && personalInfo.linkedin !== "#" && (
                        <a
                            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50 transition-colors"
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
                    )}
                </div>
            </div>
        </footer>
    );
}
