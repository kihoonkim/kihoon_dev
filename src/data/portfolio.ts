export interface Project {
    title: string;
    description: string;
    link: string;
    image: string;
    imageAlt: string;
    tags: string[];
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface Mentoring {
    role: string;
    organization: string;
    period: string;
    details: string[];
}

export interface TechStackItem {
    name: string;
    icon: string;
    iconColorClass?: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    subtitle: string;
    availableForHire: boolean;
    github: string;
    twitter?: string;
    linkedin?: string;
    resumeFile?: string;
    profileImage?: string;
    email?: string;
}

export const personalInfo: PersonalInfo = {
    name: "kihoon.dev",
    title: "Solving customer problems with engineering and AI.",
    subtitle: `안녕하세요, ${new Date().getFullYear() - 2011}년 차 소프트웨어 엔지니어 김기훈입니다. 소프트웨어 엔지니어링 기술로 고객의 문제를 발굴하고 해결하는 과정을 즐깁니다. 최근에는 AI와의 적극적인 협업을 통해 그 문제 해결 능력을 더욱 극대화하고 있습니다.`,
    availableForHire: true,
    github: "https://github.com",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/kihoon-kim-4630ba13b/",
    email: "kihoon.dev@gmail.com",
    resumeFile: "#",
    profileImage: "/profile_image.png",
};

export const projects: Project[] = [
    {
        title: "UJET (Google CCAIP)",
        description:
            "Google OEM CCAIP 기반 실리콘밸리 스타트업에서 Voip 기술을 활용한 Agent to Agent Extension Call 및 Open API Monetization 팀 개발 리딩",
        link: "https://ujet.cx",
        image:
            "https://kihoon.dev/assets/ujetcx-5695d22c.jpeg",
        imageAlt: "UJET platform interface showing Twilio and MS Teams integration",
        tags: ["Ruby", "MySql", "Redis", "React", "Typescript"],
    },
    {
        title: "BuffAI",
        description:
            "게임 Asset을 Stable Diffusion 기반으로 다양하게 생성해 주는 AI 플랫폼. AWS Sagemaker 기반 아키텍쳐 수립 및 F/E, B/E 개발 리딩",
        link: "https://buffai.io",
        image:
            "https://kihoon.dev/assets/buffai-7560f167.jpeg",
        imageAlt: "BuffAI platform generating game assets using AI",
        tags: ["Typescript", "React", "Nest.js", "MongoDB", "AWS"],
    },
    {
        title: "Wez NFT Gallery",
        description:
            "여러 지갑을 연결하여 NFT를 한번에 모아서 볼 수 있는 APP. B/E 및 Android 개발",
        link: "https://we-z.xyz",
        image:
            "https://kihoon.dev/assets/wez-gallery-a743ab37.png",
        imageAlt: "Wez NFT Gallery app displaying various NFTs",
        tags: ["Typescript", "Nest.js", "Kotlin", "Jetpack Compose", "AWS"],
    },
    {
        title: "NPX Teraark",
        description:
            "스타트업 빌더 Teraark의 공식 웹사이트 초기 개발 (Single player)",
        link: "http://teraark.com",
        image:
            "https://kihoon.dev/assets/npx-homepages-ba5d7721.png",
        imageAlt: "NPX Teraark official website homepage",
        tags: ["Typescript", "React", "Gatsby", "Styled-components"],
    },
    {
        title: "Marimba",
        description:
            "화이트보드, 채팅, 비디오콜 기능이 있는 온라인 협업 툴. F/E, B/E 개발리딩 및 쿠버네티스 기반 아키텍쳐 구현",
        link: "https://marimba.team",
        image:
            "https://kihoon.dev/assets/marimba-6956be04.png",
        imageAlt: "Marimba collaborative whiteboarding and communication tool",
        tags: ["Javascript", "React.js", "Konva.js", "Socket.io", "AWS"],
    },
];

export const experiences: Experience[] = [
    {
        role: "Software Engineer Manager",
        company: "UJET",
        period: "2023. 07 — Present",
        description:
            "Google OEM CCAIP 기반 실리콘밸리 시리즈D 스타트업에서 APAC(베트남, 방글라데시, 필리핀) 글로벌 개발팀을 리딩하고 있습니다. 기존 기술 스택을 React 19, Tailwind CSS, Zustand, shadcn/ui로 성공적으로 마이그레이션하였으며, Agent Extension Call 및 API Monetization 영역을 주도하여 회사의 제품 경쟁력 및 수익 모델 확장에 기여하고 있습니다.",
    },
    {
        role: "Principal Software Engineer & SRE",
        company: "NPX TeraArk",
        period: "2021. 11 — 2023. 07",
        description:
            "글로벌 벤처 스튜디오의 핵심 엔지니어로서 여러 교육 및 웹툰 스타트업의 아키텍처 설계와 TDD 문화를 성공적으로 안착시켰습니다. Web3 및 AI 기반 신제품의 초기 기획부터 개발까지 주도하며 최신 기술 기반의 서비스 런칭을 이끌었습니다.",
    },
    {
        role: "소프트웨어 아키텍트 / 책임 엔지니어",
        company: "Samsung SDS",
        period: "2011. 08 — 2021. 11",
        description:
            "Agile Core Team과 SW Architect 팀에 소속되어 전사적인 애자일 환경 및 TDD 문화 전파를 핵심적으로 이끌었습니다. 사내 전문 강사로서 엔지니어링 실무 역량 강화 교육을 주도하며 전반적인 소프트웨어 품질과 생산성 향상에 크게 기여했습니다.",
    },
    {
        role: "Computer Science 학사",
        company: "서울시립대학교",
        period: "2005. 03 — 2011. 07",
        description:
            "컴퓨터과학 전공 지식을 학습하고 프로그래밍 기초를 다졌습니다.",
    },
];

export const techStack: TechStackItem[] = [
    { name: "React", icon: "code", iconColorClass: "text-blue-500" },
    { name: "Next.js", icon: "data_object", iconColorClass: "text-zinc-50" },
    { name: "Tailwind", icon: "css", iconColorClass: "text-cyan-400" },
    { name: "TypeScript", icon: "integration_instructions", iconColorClass: "text-blue-600" },
    { name: "Node.js", icon: "terminal", iconColorClass: "text-green-500" },
    { name: "Java", icon: "coffee", iconColorClass: "text-red-500" },
    { name: "Ruby", icon: "diamond", iconColorClass: "text-red-600" },
    { name: "MySQL", icon: "database", iconColorClass: "text-blue-400" },
    { name: "MongoDB", icon: "dns", iconColorClass: "text-green-600" },
    { name: "Redis", icon: "memory", iconColorClass: "text-red-600" },
    { name: "Docker", icon: "deployed_code", iconColorClass: "text-white" },
    { name: "AWS", icon: "cloud", iconColorClass: "text-yellow-400" },
    { name: "Git", icon: "polymer", iconColorClass: "text-red-500" },
    { name: "Antigravity", icon: "rocket_launch", iconColorClass: "text-blue-300" },
    { name: "Claude Code", icon: "smart_toy", iconColorClass: "text-purple-400" },
    { name: "Augment Code", icon: "auto_awesome", iconColorClass: "text-pink-400" },
];

export const mentorings: Mentoring[] = [
    {
        role: "멘토링",
        organization: "코디세이 AI 올인원 Term-Project",
        period: "2025. 11. 10 — 28",
        details: []
    },
    {
        role: "멘토링",
        organization: "오픈이노베이션아카데미 IA x AI 해커톤",
        period: "2025. 11. 02",
        details: []
    },
    {
        role: "멘토링",
        organization: "US:CODE 의성 해커톤",
        period: "2025. 06. 27 — 29",
        details: []
    },
    {
        role: "디지털리터러시 특강",
        organization: "대신고등학교",
        period: "2024. 11. 25 — 28",
        details: []
    },
    {
        role: "운영진",
        organization: "애자일 코리아 컨퍼런스",
        period: "2017 — 2018",
        details: []
    }
];
export interface QuickLink {
    title: string;
    description: string;
    link: string;
    icon: string;
}

export const quickLinks: QuickLink[] = [
    {
        title: "Tech Notes",
        description: "학습한 기술을 정리한 테크노트",
        link: "https://descr.dev/",
        icon: "menu_book",
    },
    {
        title: "Side Projects",
        description: "직접 기획하고 개발한 제품들",
        link: "https://products.descr.dev/",
        icon: "rocket_launch",
    },
    {
        title: "Newsletter",
        description: "정기적으로 발행하는 뉴스레터",
        link: "https://newsletter.descr.dev/",
        icon: "mail",
    },
];
