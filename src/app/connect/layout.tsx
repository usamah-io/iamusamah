import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koneksi & Kontak — Muhammad Usamah",
  description:
    "Temukan seluruh akun sosial media, profil GitHub, kanal konten edukasi, dan kontak langsung Muhammad Usamah Abdurrahman.",
  openGraph: {
    title: "Koneksi & Kontak — Muhammad Usamah",
    description:
      "Terhubung dengan Muhammad Usamah: Instagram (uus.code & usamaahhhh), GitHub (usamah-io), TikTok, WhatsApp, dan Gmail.",
    type: "website",
  },
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
