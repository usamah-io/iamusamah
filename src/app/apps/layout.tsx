import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Aplikasi — Muhammad Usamah",
  description:
    "Katalog aplikasi web dan platform digital yang dikembangkan oleh Muhammad Usamah Abdurrahman: SKS-Master, Quran Search, Studee, dan PyQuest.",
  openGraph: {
    title: "Katalog Aplikasi — Muhammad Usamah",
    description:
      "Koleksi aplikasi dan eksperimen digital: SKS-Master (Platform Ujian AI), Quran Search, Studee, dan PyQuest.",
    type: "website",
  },
};

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
