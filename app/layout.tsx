import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush Sharma | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, Node.js, real-time systems, and data-driven applications.",
  keywords: [
    "Piyush Sharma",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "WebSockets",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Piyush Sharma" }],
  creator: "Piyush Sharma",

  openGraph: {
    title: "Piyush Sharma | Full Stack Developer",
    description:
      "Projects, experience, and achievements in full-stack development, real-time systems, and modern web technologies.",
    url: "https://myportfolio-eight-kappa-26.vercel.app",
    siteName: "Piyush Sharma Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Piyush Sharma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Piyush Sharma | Full Stack Developer",
    description:
      "Full Stack Developer | Next.js | Node.js | Real-time systems",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
