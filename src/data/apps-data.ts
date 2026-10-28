export interface AppItem {
  id: string;
  name: string;
  url: string;
  category: {
    id: string;
    en: string;
  };
  status: {
    type: "active" | "development";
    label: {
      id: string;
      en: string;
    };
    note?: {
      id: string;
      en: string;
    };
  };
  icon: string;
  mascot?: string;
  tech: string[];
  description: {
    id: string;
    en: string;
  };
  features: {
    id: string[];
    en: string[];
  };
  primaryAction: {
    label: {
      id: string;
      en: string;
    };
  };
  repoUrl?: string;
}

export const APPS_DATA: AppItem[] = [
  {
    id: "sks-master",
    name: "SKS-Master",
    url: "https://sksmaster.vercel.app/",
    category: {
      id: "AI & Education",
      en: "AI & Education",
    },
    status: {
      type: "active",
      label: {
        id: "Aktif & Terverifikasi",
        en: "Verified / Production",
      },
    },
    icon: "/assets/apps/sks-master.svg",
    tech: ["Gemini AI", "Next.js", "TypeScript", "Tailwind CSS", "PWA", "Serverless"],
    description: {
      id: "Platform belajar dan latihan soal berbantuan AI yang membantu pengguna membuat kuis adaptif, memahami pembahasan mendalam, dan mengevaluasi progres belajar.",
      en: "AI-assisted learning and exam platform helping users generate adaptive quizzes, master comprehensive explanations, and evaluate study progress.",
    },
    features: {
      id: [
        "Kuis berbantuan Gemini AI secara instan dan adaptif",
        "Pembahasan soal & analisis pilihan jawaban mendalam",
        "Ekspor ringkasan & catatan jawaban salah ke format TXT",
        "Penyimpanan progres belajar via LocalStorage (Tanpa Database)",
      ],
      en: [
        "Instant and adaptive quiz generation powered by Gemini AI",
        "In-depth answer explanations & distractor analysis",
        "Export incorrect answer reviews directly to TXT",
        "Learning progress persistence via LocalStorage (Serverless & DB-Free)",
      ],
    },
    primaryAction: {
      label: {
        id: "Buka Aplikasi",
        en: "Open Application",
      },
    },
    repoUrl: "https://github.com/usamah-io/Hekaton-Gemini2026",
  },
  {
    id: "quran-search",
    name: "Quran Search",
    url: "https://quransearch-puce.vercel.app/",
    category: {
      id: "Islamic Technology",
      en: "Islamic Technology",
    },
    status: {
      type: "active",
      label: {
        id: "Aktif & Terverifikasi",
        en: "Verified / Production",
      },
    },
    icon: "/assets/apps/quran-search.png",
    tech: ["SvelteKit", "Tailwind CSS", "Al-Qur'an API", "Audio Streaming", "PWA"],
    description: {
      id: "Aplikasi Al-Qur'an modern yang membantu pengguna mencari ayat, membaca terjemahan, mendengarkan murottal, dan menelusuri konteks ayat.",
      en: "Modern Quran application helping users search verses, read translations, listen to murottal recitations, and explore contextual backgrounds.",
    },
    features: {
      id: [
        "Pencarian ayat Al-Qur'an dan tema tematik dalam satu antarmuka",
        "Pembacaan mushaf 114 surat lengkap dengan terjemahan bahasa Indonesia",
        "Murottal audio streaming dengan 5 pilihan qari ternama",
        "Penelusuran latar belakang turunnya ayat (Asbabun Nuzul)",
      ],
      en: [
        "Unified search for Quranic verses and thematic topics",
        "114 surahs reading view with complete translations",
        "Murottal audio streaming featuring 5 renowned reciters",
        "Contextual background of revelation (Asbabun Nuzul)",
      ],
    },
    primaryAction: {
      label: {
        id: "Buka Aplikasi",
        en: "Open Application",
      },
    },
  },
  {
    id: "studee",
    name: "Studee",
    url: "https://studee-ten.vercel.app/",
    category: {
      id: "E-Learning",
      en: "E-Learning",
    },
    status: {
      type: "development",
      label: {
        id: "Dalam Pengembangan (Work in Progress)",
        en: "In Development (Work in Progress)",
      },
      note: {
        id: "Aplikasi ini sedang dalam tahap pengembangan aktif dan saat ini menampilkan antarmuka loading preview awal.",
        en: "This application is currently under active development and currently displays an early preview loading interface.",
      },
    },
    icon: "/assets/apps/studee.svg",
    tech: ["Next.js", "TypeScript", "Prisma ORM", "Tailwind CSS", "PWA"],
    description: {
      id: "Platform e-learning yang sedang dikembangkan untuk mengeksplorasi pengalaman belajar digital, quiz otomatis, dan pelacakan konsistensi belajar.",
      en: "E-learning platform under development exploring digital learning experiences, automated quizzes, and study consistency tracking.",
    },
    features: {
      id: [
        "Eksplorasi antarmuka quiz interaktif modern berbasis web",
        "Sistem streak provider untuk memantau konsistensi belajar",
        "Manajemen materi kursus modular dan progres belajar",
        "Status: Tahap pengembangan & preview (Work in Progress)",
      ],
      en: [
        "Exploration of modern interactive web-based quiz interfaces",
        "Streak provider system to track daily learning consistency",
        "Modular course material management and study progress",
        "Status: Development stage & preview (Work in Progress)",
      ],
    },
    primaryAction: {
      label: {
        id: "Lihat Preview",
        en: "View Preview",
      },
    },
    repoUrl: "https://github.com/usamah-io/Studee-x-Python",
  },
  {
    id: "pyquest",
    name: "PyQuest",
    url: "https://pyquest-sigma.vercel.app/",
    category: {
      id: "EdTech & Game",
      en: "EdTech & Game",
    },
    status: {
      type: "active",
      label: {
        id: "Aktif & Terverifikasi",
        en: "Verified / Production",
      },
    },
    icon: "/assets/apps/pyquest.svg",
    mascot: "/assets/apps/pybot.webp",
    tech: ["SvelteKit", "Python Logic Engine", "Tailwind CSS", "PWA"],
    description: {
      id: "Game edukasi untuk belajar logika pemrograman Python melalui labirin, misi interaktif, dan tantangan kode bersama robot PyBot.",
      en: "Educational game for learning Python programming logic through code mazes, interactive missions, and coding challenges with PyBot.",
    },
    features: {
      id: [
        "30+ Misi labirin pemrograman dan blok logika perintah",
        "50 Soal kuis interaktif algoritma & pemahaman sintaks Python",
        "10 Lencana prestasi level dan pencapaian progres pemain",
        "Didukung maskot visual robot PyBot yang interaktif",
      ],
      en: [
        "30+ Coding maze missions and command logic blocks",
        "50 Interactive quiz questions on Python syntax & algorithms",
        "10 Level achievement badges and player milestones",
        "Supported by the interactive PyBot robot visual mascot",
      ],
    },
    primaryAction: {
      label: {
        id: "Buka Aplikasi",
        en: "Open Application",
      },
    },
  },
];
