import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
    return (
        <section className="w-full py-16 md:py-24 border-t border-zinc-900 bg-background" id="contact">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Contact</h2>
                <div className="flex flex-col gap-2 mb-8">
                    <p className="text-lg text-zinc-100">커피챗, 멘토링, 비즈니스 협업 요청은 이메일로 연락주세요.</p>
                    <p className="text-zinc-400 font-medium">For coffee chats, mentoring, or business collaborations, please reach out via email.</p>
                </div>
                <a
                    className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-50 px-8 text-sm font-medium text-zinc-950 shadow transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 gap-2"
                    href={`mailto:${personalInfo.email}`}
                >
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                    Email Me
                </a>
            </div>
        </section>
    );
}
