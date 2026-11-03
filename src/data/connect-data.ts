export interface ConnectItem {
  id: string;
  name: string;
  handle: string;
  url: string;
  group: "social" | "developer" | "contact";
  groupLabel: {
    id: string;
    en: string;
  };
  label: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  actionLabel: {
    id: string;
    en: string;
  };
  iconType: "instagram" | "github" | "tiktok" | "linkedin" | "gmail";
  highlightColor?: string;
}

export const CONNECT_DATA: ConnectItem[] = [
  {
    id: "instagram-content",
    name: "Instagram (Edukasi & Coding)",
    handle: "@uus.code",
    url: "https://www.instagram.com/uus.code/",
    group: "social",
    groupLabel: {
      id: "Media Sosial",
      en: "Social Media",
    },
    label: {
      id: "Content & Coding Education",
      en: "Content & Coding Education",
    },
    description: {
      id: "Akun konten untuk berbagi pembelajaran programming dan AI dengan cara yang sederhana dan mudah dipahami.",
      en: "Content account sharing programming and AI learning tutorials in a clear, beginner-friendly way.",
    },
    actionLabel: {
      id: "Kunjungi Instagram",
      en: "Visit Instagram",
    },
    iconType: "instagram",
    highlightColor: "#E1306C",
  },
  {
    id: "instagram-personal",
    name: "Instagram (Akun Utama)",
    handle: "@usamaahhhh",
    url: "https://www.instagram.com/usamaahhhh/",
    group: "social",
    groupLabel: {
      id: "Media Sosial",
      en: "Social Media",
    },
    label: {
      id: "Personal & Activities",
      en: "Personal & Activities",
    },
    description: {
      id: "Akun utama untuk mengenal perjalanan, kegiatan, dan aktivitas saya di luar proyek programming.",
      en: "Primary personal profile to follow my journey, life updates, and activities beyond coding projects.",
    },
    actionLabel: {
      id: "Kunjungi Instagram",
      en: "Visit Instagram",
    },
    iconType: "instagram",
    highlightColor: "#C13584",
  },
  {
    id: "tiktok",
    name: "TikTok Tech Videos",
    handle: "@ig_usamaahhhh",
    url: "https://www.tiktok.com/@ig_usamaahhhh",
    group: "social",
    groupLabel: {
      id: "Media Sosial",
      en: "Social Media",
    },
    label: {
      id: "Short Tech Videos & Coding",
      en: "Short Tech Videos & Coding",
    },
    description: {
      id: "Video edukasi singkat, eksperimen koding kreatif, dan insight seputar kecerdasan buatan.",
      en: "Short educational video clips, creative coding experiments, and practical artificial intelligence insights.",
    },
    actionLabel: {
      id: "Kunjungi TikTok",
      en: "Visit TikTok",
    },
    iconType: "tiktok",
    highlightColor: "#00f2fe",
  },
  {
    id: "github",
    name: "GitHub Repository",
    handle: "usamah-io",
    url: "https://github.com/usamah-io",
    group: "developer",
    groupLabel: {
      id: "Developer & Open Source",
      en: "Developer & Open Source",
    },
    label: {
      id: "Code & Open Source",
      en: "Code & Open Source",
    },
    description: {
      id: "Jelajahi repository, eksperimen, dan proyek pengembangan yang saya kerjakan.",
      en: "Explore repositories, experiments, open-source code, and software engineering projects I build.",
    },
    actionLabel: {
      id: "Lihat GitHub",
      en: "View GitHub",
    },
    iconType: "github",
    highlightColor: "#9bc1bc",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "muhammad-usamah-abdurrahman",
    url: "https://www.linkedin.com/in/muhammad-usamah-abdurrahman-94064142b/",
    group: "social",
    groupLabel: {
      id: "Jejaring Profesional",
      en: "Professional Network",
    },
    label: {
      id: "Professional Network & Career",
      en: "Professional Network & Career",
    },
    description: {
      id: "Profil profesional, jejaring beasiswa, serta pembaruan seputar proyek dan kompetisi.",
      en: "Professional profile, scholarship network, and updates on projects and competitions.",
    },
    actionLabel: {
      id: "Kunjungi LinkedIn",
      en: "View LinkedIn",
    },
    iconType: "linkedin",
    highlightColor: "#0A66C2",
  },
  {
    id: "gmail",
    name: "Email Resmi (Gmail)",
    handle: "muhammadusamahabdurrahman@gmail.com",
    url: "mailto:muhammadusamahabdurrahman@gmail.com",
    group: "contact",
    groupLabel: {
      id: "Kontak Langsung",
      en: "Direct Contact",
    },
    label: {
      id: "Formal & Professional Email",
      en: "Formal & Professional Email",
    },
    description: {
      id: "Untuk pertanyaan resmi, tawaran kerjasama institusi, atau komunikasi formal profesional.",
      en: "For formal communications, institutional proposals, business inquiries, or partnerships.",
    },
    actionLabel: {
      id: "Kirim Email",
      en: "Send Email",
    },
    iconType: "gmail",
    highlightColor: "#EA4335",
  },
];
