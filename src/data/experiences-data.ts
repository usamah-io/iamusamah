export type ExperienceCategory =
  | "speaking"
  | "hackathon"
  | "volunteer"
  | "education"
  | "other";

export interface ExperienceItem {
  id: string;
  category: ExperienceCategory;
  badge: {
    id: string;
    en: string;
  };
  title: {
    id: string;
    en: string;
  };
  role: {
    id: string;
    en: string;
  };
  organizer?: {
    id: string;
    en: string;
  };
  date: {
    id: string;
    en: string;
  };
  periodYear: string;
  location: {
    id: string;
    en: string;
  };
  shortSummary: {
    id: string;
    en: string;
  };
  fullDescription: {
    id: string;
    en: string;
  };
  tags: string[];
  image: string;
  orientation?: "portrait" | "landscape";
  targetUrl?: string;
  externalUrl?: string;
  score?: string;
  relatedProject?: string;
  featuredHome?: boolean;
  featuredAbout?: boolean;
  cardStyle: {
    bgColor: string;
    accentTag: string;
    btnClass: string;
  };
}

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "speaking-seminar-nasional",
    category: "speaking",
    badge: {
      id: "SPEAKING #01",
      en: "SPEAKING #01",
    },
    title: {
      id: "SEMINAR NASIONAL PROGRAMMING",
      en: "NATIONAL PROGRAMMING SEMINAR",
    },
    role: {
      id: "Speaker — Python for Data Science Fundamentals",
      en: "Speaker — Python for Data Science Fundamentals",
    },
    organizer: {
      id: "Engineering Education",
      en: "Engineering Education",
    },
    date: {
      id: "7 November 2026",
      en: "November 7, 2026",
    },
    periodYear: "2026",
    location: {
      id: "Online via Zoom",
      en: "Online via Zoom",
    },
    shortSummary: {
      id: "Menjadi pembicara dalam Seminar Nasional Programming membawakan topik Python for Data Science Fundamentals dengan 9 modul terstruktur.",
      en: "Keynote speaker at the National Programming Seminar delivering Python for Data Science Fundamentals across 9 structured modules.",
    },
    fullDescription: {
      id: "Menjadi pembicara dalam Seminar Nasional Programming yang diselenggarakan oleh Engineering Education. Membawakan topik 'Langkah Awal Membangun Karier Sebagai Data Scientist: Panduan Esensial Mengolah Big Data Berstandar Industri' dengan 9 modul materi mencakup NumPy, Pandas, Matplotlib, hingga demonstrasi analitik interaktif.",
      en: "Keynote speaker at the National Programming Seminar organized by Engineering Education, delivering 'First Steps to Build a Career as a Data Scientist: Essential Guide to Industry-Standard Big Data Processing' covering 9 modules spanning NumPy, Pandas, Matplotlib, and data analytics workflows.",
    },
    tags: [
      "Speaker",
      "Python",
      "Data Science",
      "Pandas",
      "Engineering Education",
      "YouTube Live",
    ],
    image: "/assets/seminar-nasional-programming.webp",
    orientation: "portrait",
    targetUrl: "/experience/seminar-nasional-programming",
    featuredHome: true,
    featuredAbout: true,
    cardStyle: {
      bgColor: "bg-[#1e3d59] text-white border-white/25",
      accentTag: "bg-white/10 text-cyan-300 border-white/20",
      btnClass: "bg-cyan-400 text-zinc-950 hover:bg-cyan-300",
    },
  },
  {
    id: "hackathon-gemini-2026",
    category: "hackathon",
    badge: {
      id: "HACKATHON #01",
      en: "HACKATHON #01",
    },
    title: {
      id: "Gemini Innovation Hackathon 2026",
      en: "Gemini Innovation Hackathon 2026",
    },
    role: {
      id: "Lead Developer — SKS Master (Platform Ujian AI)",
      en: "Lead Developer — SKS Master (AI Exam Platform)",
    },
    organizer: {
      id: "Google Student Ambassador & UKM KPM UNSIL",
      en: "Google Student Ambassador & UKM KPM UNSIL",
    },
    date: {
      id: "28 Juli 2026",
      en: "July 28, 2026",
    },
    periodYear: "2026",
    location: {
      id: "Tasikmalaya (Remote / Hybrid)",
      en: "Tasikmalaya (Remote / Hybrid)",
    },
    score: "86,4",
    relatedProject: "sks-master",
    shortSummary: {
      id: "Memimpin tim perancang platform ujian adaptif AI SKS-Master hingga meraih Top 4 Finalis dari 186 peserta (Nilai Akhir 86,4).",
      en: "Led the development of AI-driven exam platform SKS-Master, achieving Top 4 Finalist out of 186 participants (Score 86.4).",
    },
    fullDescription: {
      id: "Memimpin tim SKS-Master merancang & membangun platform ujian interaktif berbasis AI Google Gemini pada ajang Gemini Innovation Hackathon at Gemini Unity Festival 2026. Meraih Top 4 Finalis dari 186 peserta dengan Nilai Akhir Resmi 86,4.",
      en: "Led the SKS-Master team designing & building an interactive AI exam platform powered by Google Gemini API at Gemini Innovation Hackathon at Gemini Unity Festival 2026. Placed Top 4 Finalist out of 186 participants with official score 86.4.",
    },
    tags: [
      "Hackathon",
      "Gemini AI",
      "Next.js",
      "Lead Developer",
      "Top 4 Finalist",
    ],
    image: "/assets/sks-master-certificate.png",
    orientation: "landscape",
    targetUrl: "/hackathon-recap",
    featuredHome: true,
    featuredAbout: true,
    cardStyle: {
      bgColor: "bg-[#9bc1bc] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
    },
  },
  {
    id: "competition-icc-2026",
    category: "other",
    badge: {
      id: "KOMPETISI #01",
      en: "COMPETITION #01",
    },
    title: {
      id: "INDONESIA CREATIVE COMPETITION 2026",
      en: "INDONESIA CREATIVE COMPETITION 2026",
    },
    role: {
      id: "Peserta — Creative Code Teens",
      en: "Participant — Creative Code Teens",
    },
    organizer: {
      id: "PLN, MLEB & Sekelas",
      en: "PLN, MLEB & Sekelas",
    },
    date: {
      id: "27 September 2026",
      en: "September 27, 2026",
    },
    periodYear: "2026",
    location: {
      id: "TMII, Jakarta",
      en: "TMII, Jakarta",
    },
    shortSummary: {
      id: "Berpartisipasi dalam ajang Indonesia Creative Competition Batch 2 kategori Creative Code Teens di Museum Listrik dan Energi Baru, TMII.",
      en: "Participated in Indonesia Creative Competition Batch 2 under Creative Code Teens at Museum Listrik dan Energi Baru, TMII, Jakarta.",
    },
    fullDescription: {
      id: "Berpartisipasi dalam Indonesia Creative Competition Batch 2 pada kategori Creative Code Teens di Museum Listrik dan Energi Baru, TMII, Jakarta. Sebuah kompetisi yang mengangkat kreativitas dan inovasi di bidang teknologi pemrograman bagi remaja.",
      en: "Participated in Indonesia Creative Competition Batch 2 under Creative Code Teens category at Museum Listrik dan Energi Baru, TMII, Jakarta, showcasing technology innovation and coding creativity among young developers.",
    },
    tags: ["Competition", "Creative Code Teens", "TMII Jakarta", "PLN & MLEB"],
    image: "/assets/icc-2026-certificate.jpg",
    orientation: "landscape",
    featuredHome: true,
    featuredAbout: false,
    cardStyle: {
      bgColor: "bg-[#ed6a5a] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
    },
  },
  {
    id: "competition-telkom-pyquest",
    category: "other",
    badge: {
      id: "KOMPETISI #02",
      en: "COMPETITION #02",
    },
    title: {
      id: "Kompetisi Coding Telkom 2026",
      en: "Telkom Coding Competition 2026",
    },
    role: {
      id: "Inovator & Developer — PyQuest",
      en: "Innovator & Developer — PyQuest",
    },
    organizer: {
      id: "Telkom Indonesia",
      en: "Telkom Indonesia",
    },
    date: {
      id: "Oktober 2026",
      en: "October 2026",
    },
    periodYear: "2026",
    location: {
      id: "Online",
      en: "Online",
    },
    relatedProject: "pyquest",
    shortSummary: {
      id: "Mengikuti kompetisi coding yang diselenggarakan oleh Telkom dengan proyek game edukasi logika pemrograman PyQuest.",
      en: "Participated in the Telkom coding competition presenting the PyQuest interactive Python logic learning game.",
    },
    fullDescription: {
      id: "Mengembangkan dan mengikutsertakan aplikasi PyQuest dalam ajang kompetisi coding Telkom hingga tahap evaluasi 25 Oktober 2026. PyQuest memadukan game labirin interaktif dan modul logika pemrograman Python bersama robot PyBot.",
      en: "Engineered and submitted the PyQuest application to the Telkom coding competition through October 25, 2026. PyQuest combines interactive coding mazes and Python programming logic blocks guided by the PyBot mascot.",
    },
    tags: ["Telkom", "Competition", "PyQuest", "Python Game", "EdTech"],
    image: "/assets/apps/pyquest.svg",
    orientation: "landscape",
    targetUrl: "/apps",
    featuredHome: false,
    featuredAbout: false,
    cardStyle: {
      bgColor: "bg-[#2b5876] text-white border-white/25",
      accentTag: "bg-white/10 text-cyan-300 border-white/20",
      btnClass: "bg-cyan-400 text-zinc-950 hover:bg-cyan-300",
    },
  },
  {
    id: "volunteer-san",
    category: "volunteer",
    badge: {
      id: "KOMUNITAS #01",
      en: "COMMUNITY #01",
    },
    title: {
      id: "Komunitas Senyum Anak Nusantara (SAN)",
      en: "Senyum Anak Nusantara Community (SAN)",
    },
    role: {
      id: "Relawan Edukasi & Dokumentasi Sosial (Kominfo/PDD)",
      en: "Youth Education & Field Documentation Volunteer",
    },
    organizer: {
      id: "Senyum Anak Nusantara Chapter Tasikmalaya",
      en: "Senyum Anak Nusantara Tasikmalaya Chapter",
    },
    date: {
      id: "2024 - Sekarang",
      en: "2024 - Present",
    },
    periodYear: "2024 - 2026",
    location: {
      id: "Tasikmalaya, Jawa Barat",
      en: "Tasikmalaya, West Java",
    },
    shortSummary: {
      id: "Relawan divisi Kominfo/PDD dalam program pendampingan edukatif, literasi digital, dan dokumentasi visual aksi sosial anak-anak nusantara.",
      en: "Media and documentation volunteer conducting educational mentoring, digital literacy, and visual storytelling for youth initiatives.",
    },
    fullDescription: {
      id: "Berkontribusi aktif dalam inisiatif sosial Senyum Anak Nusantara (SAN) di Tasikmalaya yang berfokus pada pendampingan edukatif anak, literasi digital, keceriaan bersama, serta memimpin produksi konten visual dokumentasi kegiatan kerelawanan pemuda.",
      en: "Actively contributed to Senyum Anak Nusantara youth initiatives in Tasikmalaya focusing on educational mentoring, digital literacy, and leading visual media production documenting youth community projects.",
    },
    tags: ["Community", "Volunteer", "Senyum Anak Nusantara", "Documentation", "Tasikmalaya"],
    image: "/assets/Senyumanaknusantara.jpg",
    orientation: "portrait",
    targetUrl: "/experience/senyum-anak-nusantara",
    featuredHome: true,
    featuredAbout: true,
    cardStyle: {
      bgColor: "bg-[#36c9c6] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
    },
  },
  {
    id: "volunteer-cisarua",
    category: "volunteer",
    badge: {
      id: "VOLUNTEER #02",
      en: "VOLUNTEER #02",
    },
    title: {
      id: "Aksi Tanggap Darurat Bencana Longsor Cisarua",
      en: "Cisarua Landslide Relief & Emergency Response",
    },
    role: {
      id: "Tim Relawan Tanggap Darurat & Posko Logistik",
      en: "Emergency Response & Logistics Post Volunteer",
    },
    date: {
      id: "2024 - 2025",
      en: "2024 - 2025",
    },
    periodYear: "2024",
    location: {
      id: "Cisarua, Bandung Barat",
      en: "Cisarua, West Bandung",
    },
    shortSummary: {
      id: "Terjun langsung dalam aksi kemanusiaan bencana longsor Cisarua: pendataan warga, penyaluran logistik sembako, dan posko dapur umum.",
      en: "Field volunteer in landslide disaster relief: aid logistics distribution, emergency food relief coordination, and community support.",
    },
    fullDescription: {
      id: "Terjun langsung dalam aksi kemanusiaan bencana longsor Cisarua, Bandung Barat: briefing koordinasi tim relawan, pendataan dan penyaluran sembako ke rumah warga, operasional dapur umum posko, dan dokumentasi penutupan aksi relawan.",
      en: "Participated directly in humanitarian relief for the Cisarua landslide disaster in West Bandung: volunteer coordination briefings, door-to-door food package distribution, soup kitchen operations, and field documentation.",
    },
    tags: ["Volunteer", "Tanggap Darurat", "Distribusi Sembako", "Posko Logistik", "Bandung Barat"],
    image: "/assets/volunteerr.jpg",
    orientation: "portrait",
    targetUrl: "/volunteer",
    featuredHome: true,
    featuredAbout: true,
    cardStyle: {
      bgColor: "bg-[#141414] text-white border-white/20",
      accentTag: "bg-white/10 text-emerald-400 border-white/20",
      btnClass: "bg-emerald-500 text-black hover:bg-emerald-400",
    },
  },
  {
    id: "volunteer-han-tasik",
    category: "volunteer",
    badge: {
      id: "VOLUNTEER #03",
      en: "VOLUNTEER #03",
    },
    title: {
      id: "Hari Anak Nasional 2026 & Forum Anak Daerah",
      en: "National Children's Day 2026 & Regional Children's Forum",
    },
    role: {
      id: "Volunteer Divisi Dokumentasi & Operator Audio/Stream",
      en: "Documentation Volunteer & Audio/Stream Operator",
    },
    organizer: {
      id: "Dinsos PPKB P3A Kab. Tasikmalaya",
      en: "Dinsos PPKB P3A Tasikmalaya Regency",
    },
    date: {
      id: "30 Agustus 2026",
      en: "August 30, 2026",
    },
    periodYear: "2026",
    location: {
      id: "Pendopo Baru, Kab. Tasikmalaya",
      en: "Pendopo Baru, Tasikmalaya Regency",
    },
    shortSummary: {
      id: "Volunteer dokumentasi serta operator sound system, audio mixing, dan live stream peringatan Hari Anak Nasional.",
      en: "Documentation volunteer and sound system, audio mixing, and live stream operator for National Children's Day.",
    },
    fullDescription: {
      id: "Bertugas aktif sebagai Volunteer Divisi Dokumentasi sekaligus operator sound system, audio mixing, dan live stream dalam menyukseskan Peringatan Hari Anak Nasional 2026 Tingkat Kab. Tasikmalaya bersama Dinsos PPKB P3A dan Forum Anak Daerah.",
      en: "Actively served as Documentation Division Volunteer and sound system, audio mixing, and live stream operator for the 2026 National Children's Day in Tasikmalaya Regency with Dinsos PPKB P3A and Regional Children's Forum.",
    },
    tags: ["Volunteer", "Dokumentasi", "Hari Anak Nasional", "Forum Anak Daerah", "Tasikmalaya"],
    image: "/assets/sertif-forum-anak.jpg",
    orientation: "landscape",
    featuredHome: false,
    featuredAbout: false,
    cardStyle: {
      bgColor: "bg-[#f4f1bb] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
    },
  },
  {
    id: "project-budiman",
    category: "other",
    badge: {
      id: "PROJECT #01",
      en: "PROJECT #01",
    },
    title: {
      id: "Budiman Cendikia School Platform",
      en: "Budiman Cendikia School Platform",
    },
    role: {
      id: "Full-Stack Developer & System Designer",
      en: "Full-Stack Developer & System Designer",
    },
    date: {
      id: "2025 - 2026",
      en: "2025 - 2026",
    },
    periodYear: "2025 - 2026",
    location: {
      id: "Tasikmalaya, Jawa Barat",
      en: "Tasikmalaya, West Java",
    },
    relatedProject: "budiman-cendikia",
    shortSummary: {
      id: "Mengembangkan platform informasi sekolah Budiman Cendikia dengan Decoupled Architecture Next.js & PHP Blade.",
      en: "Engineered official school profile and portal for Budiman Cendikia with Decoupled Next.js & PHP Blade architecture.",
    },
    fullDescription: {
      id: "Mengembangkan website profil dan sistem informasi sekolah Budiman Cendikia dengan Decoupled Architecture memakai Next.js, TypeScript, PHP Blade, dan integrasi basis data SQL yang cepat, aman, dan responsif.",
      en: "Engineered the official school profile website and portal architecture for Budiman Cendikia utilizing Next.js, TypeScript, PHP Blade, and optimized SQL databases.",
    },
    tags: ["Web Architecture", "Decoupled", "Next.js", "PHP Blade", "Full-Stack"],
    image: "/assets/projects/budiman-cendikia.png",
    orientation: "landscape",
    featuredHome: true,
    featuredAbout: false,
    cardStyle: {
      bgColor: "bg-[#e6ebe0] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
    },
  },
  {
    id: "education-jazacademy",
    category: "education",
    badge: {
      id: "EDUCATION #01",
      en: "EDUCATION #01",
    },
    title: {
      id: "JAZACADEMY KOMUNITAS BELAJAR",
      en: "JAZACADEMY LEARNING COMMUNITY",
    },
    role: {
      id: "Siswa Aktif — Software Engineering & AI Workflows",
      en: "Active Student — Software Engineering & AI Workflows",
    },
    date: {
      id: "2024 - Sekarang",
      en: "2024 - Present",
    },
    periodYear: "2024 - 2027",
    location: {
      id: "Tasikmalaya, Jawa Barat",
      en: "Tasikmalaya, West Java",
    },
    externalUrl: "https://jazacademy.id",
    shortSummary: {
      id: "Menempuh pendidikan homeschooling mandiri berasrama di Jazacademy Tasikmalaya, mendalami pemrograman web dan pembuatan konten teknologi.",
      en: "Pursuing boarding-style homeschooling at Jazacademy Tasikmalaya, focusing on full-stack web engineering and tech education content.",
    },
    fullDescription: {
      id: "Mengikuti pendidikan akselerasi teknologi di Jaz Academy: memperdalam Full-Stack Web Development (Next.js, TypeScript), arsitektur perangkat lunak modern, integrasi AI Gemini, serta pembuatan konten edukasi pemrograman.",
      en: "Accelerating modern software engineering capabilities at Jaz Academy: mastering Full-Stack Next.js/TypeScript architecture, Gemini AI integration, and digital educational tech content creation.",
    },
    tags: ["Homeschooling", "Jazacademy", "Next.js", "Software Engineering", "AI Workflows"],
    image: "/assets/jazacademy.png",
    orientation: "landscape",
    featuredHome: true,
    featuredAbout: true,
    cardStyle: {
      bgColor: "bg-[#f08080] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
    },
  },
  {
    id: "education-smpt-bugelan",
    category: "education",
    badge: {
      id: "EDUCATION #02",
      en: "EDUCATION #02",
    },
    title: {
      id: "SMPT Bugelan Tasikmalaya",
      en: "SMPT Bugelan Tasikmalaya",
    },
    role: {
      id: "Siswa — Evaluasi & Ujian Akademik Jenjang SMP",
      en: "Student — Junior High School Academic Examinations",
    },
    date: {
      id: "2024 - 2027",
      en: "2024 - 2027",
    },
    periodYear: "2024 - 2027",
    location: {
      id: "Tasikmalaya, Jawa Barat",
      en: "Tasikmalaya, West Java",
    },
    shortSummary: {
      id: "Institusi tempat mengikuti evaluasi akademik dan ujian jenjang sekolah menengah pertama secara resmi.",
      en: "Official institution for junior high school academic evaluations and national curriculum examinations.",
    },
    fullDescription: {
      id: "Institusi pendidikan resmi tempat saya mengikuti evaluasi akademik dan ujian jenjang Sekolah Menengah Pertama (SMP) sesuai dengan kurikulum pendidikan nasional.",
      en: "The official educational institution where I take junior high school academic evaluations and examinations aligned with the national curriculum.",
    },
    tags: ["SMP", "Pendidikan Formal", "Tasikmalaya"],
    image: "/assets/jazacademy.png",
    orientation: "landscape",
    featuredHome: false,
    featuredAbout: false,
    cardStyle: {
      bgColor: "bg-[#e6ebe0] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
    },
  },
  {
    id: "education-sdit-mardhiyah",
    category: "education",
    badge: {
      id: "EDUCATION #03",
      en: "EDUCATION #03",
    },
    title: {
      id: "SDIT Swasta Mardhiyah",
      en: "SDIT Swasta Mardhiyah",
    },
    role: {
      id: "Alumni — Sekolah Dasar Islam Terpadu (SDIT)",
      en: "Alumni — Integrated Islamic Elementary School",
    },
    date: {
      id: "2018 - 2024",
      en: "2018 - 2024",
    },
    periodYear: "2018 - 2024",
    location: {
      id: "Binjai, Sumatera Utara",
      en: "Binjai, North Sumatra",
    },
    externalUrl: "https://www.instagram.com/sekolah.mardhiyah/",
    shortSummary: {
      id: "Pendidikan Dasar Islam Terpadu dengan fondasi akademik dan karakter.",
      en: "Integrated Islamic Elementary Education building strong academic and character foundations.",
    },
    fullDescription: {
      id: "Menyelesaikan jenjang Pendidikan Dasar Islam Terpadu di SDIT Swasta Mardhiyah, Binjai, Sumatera Utara dengan fondasi akademik dan pembentukan karakter yang kuat.",
      en: "Completed elementary education at SDIT Swasta Mardhiyah in Binjai, North Sumatra, with a strong foundation in academics and character building.",
    },
    tags: ["SDIT", "Binjai", "Sumatera Utara", "Alumni"],
    image: "",
    orientation: "landscape",
    featuredHome: false,
    featuredAbout: false,
    cardStyle: {
      bgColor: "bg-[#f4f1bb] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
    },
  },
];

// Helper Functions
export function getFeaturedHomeExperiences(): ExperienceItem[] {
  return EXPERIENCES_DATA.filter((exp) => exp.featuredHome);
}

export function getFeaturedAboutExperiences(): ExperienceItem[] {
  return EXPERIENCES_DATA.filter((exp) => exp.featuredAbout);
}

export function getExperiencesByCategory(category: ExperienceCategory): ExperienceItem[] {
  return EXPERIENCES_DATA.filter((exp) => exp.category === category);
}

export function getExperienceById(id: string): ExperienceItem | undefined {
  return EXPERIENCES_DATA.find((exp) => exp.id === id);
}

export function getExperienceByProject(projectId: string): ExperienceItem | undefined {
  return EXPERIENCES_DATA.find((exp) => exp.relatedProject === projectId);
}
