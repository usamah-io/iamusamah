import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Beasiswa SMA — Muhammad Usamah Abdurrahman",
  description:
    "Profil beasiswa, latar belakang pendidikan, rekam jejak inovasi web & AI, dan kontribusi sosial Muhammad Usamah Abdurrahman untuk seleksi beasiswa jenjang SMA.",
  openGraph: {
    title: "Profil Beasiswa SMA — Muhammad Usamah Abdurrahman",
    description:
      "Profil beasiswa, latar belakang pendidikan, rekam jejak inovasi web & AI, dan kontribusi sosial Muhammad Usamah Abdurrahman untuk seleksi beasiswa jenjang SMA.",
    type: "website",
    url: "https://iamusamah.vercel.app/scholarship",
  },
};

export default function ScholarshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
