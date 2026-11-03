import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import PageTransition from "@/components/PageTransition";
import FloatingParticles from "@/components/FloatingParticles";
import Navbar from "@/components/navbar";
import ConditionalFooter from "@/components/conditional-footer";
import { AppProvider } from "@/components/app-context";
import { AuthProvider } from "@/components/auth-provider";
import CustomCursor from "@/components/CustomCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://iamusamah.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Usamah — Siswa, Web & AI Developer",
  description: "Portofolio Muhammad Usamah Abdurrahman — Siswa dan pengembang web & AI (belajar mandiri). Menampilkan proyek aplikasi edukatif, pengalaman kompetisi, dan kegiatan sosial.",
  openGraph: {
    title: "Muhammad Usamah — Siswa, Web & AI Developer",
    description: "Portofolio Muhammad Usamah Abdurrahman — Siswa dan pengembang web & AI (belajar mandiri). Menampilkan proyek aplikasi edukatif, pengalaman kompetisi, dan kegiatan sosial.",
    url: siteUrl,
    siteName: "Muhammad Usamah Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/profile-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Usamah — Siswa, Web & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Usamah — Siswa, Web & AI Developer",
    description: "Portofolio Muhammad Usamah Abdurrahman — Siswa dan pengembang web & AI (belajar mandiri).",
    images: ["/profile-v2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-background text-foreground flex flex-col font-sans selection:bg-[var(--accent1)]/30 selection:text-[var(--fg)] transition-colors duration-300 relative overflow-x-hidden"
      >
        <AppProvider>
          <AuthProvider>
            <SmoothScroll>
              <PageTransition>
                <FloatingParticles />
                <CustomCursor />
                <Navbar />
                <div className="flex flex-col flex-1 relative pt-20">
                  {children}
                </div>
                <ConditionalFooter />
              </PageTransition>
            </SmoothScroll>
          </AuthProvider>
        </AppProvider>
      </body>
    </html>
  );
}
