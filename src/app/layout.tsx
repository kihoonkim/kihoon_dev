import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kihoon.dev"),
  title: "kihoon.dev | 소프트웨어 엔지니어 김기훈 포트폴리오",
  description: "소프트웨어 엔지니어링과 AI를 활용해 고객의 문제를 해결하는 김기훈의 포트폴리오입니다.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "kihoon.dev | 소프트웨어 엔지니어 김기훈 포트폴리오",
    description: "소프트웨어 엔지니어링과 AI를 활용해 고객의 문제를 해결하는 김기훈의 포트폴리오입니다.",
    url: "https://kihoon.dev",
    siteName: "kihoon.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "kihoon.dev Portfolio",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${interFont.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
