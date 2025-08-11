export type Player = { 
  nickname: string; 
  role: string; 
  photo?: string;
  achievements?: string[];
  social?: { platform: string; url: string }[];
};

export type Division = {
  id: string;
  name: string;
  logo: string;
  roster: Player[];
  links: { label: string; href: string }[];
  teamPhoto?: string;
  achievements?: string[];
};

export type Tournament = {
  id: string;
  name: string;
  date: string;
  placement: string;
  prize: string;
  logo: string;
  participants: number;
  region: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  date: string;
  trophy: string;
  category: string;
};

// NOTE: Replace placeholders with your real team data and photo URLs when available
export const divisions: Division[] = [
  {
    id: "lol",
    name: "League of Legends",
    logo: "https://am-a.akamaihd.net/image?resize=1000:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1748868374823_ULF_ESPORTS_OFFICIAL_LOGO_WHITE.png",
    teamPhoto: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    achievements: ["TCL 2024 3. Place", "Istanbul Cup Winners", "Regional Champions"],
    roster: [
      {
        nickname: "Typhoone",
        role: "Top",
        photo: "1717746433928_typhoon.png",
      },
      {
        nickname: "mxe",
        role: "Jungle",
        photo: "1705672356455_MXE.png",
      },
      {
        nickname: "Gori",
        role: "Mid",
        photo: "1705751616648_CFOGori.png",
      },
      {
        nickname: "Kaori",
        role: "ADC",
        photo: "1717746366481_kaori.png",
      },
      {
        nickname: "farfetch",
        role: "Support",
        photo: "1717747402282_farfetch.png",
      },
    ],
    links: [
      { label: "LoL Esports Profili", href: "https://lolesports.com/teams/ulf-esports" },
    ],
  },
  {
    id: "valorant",
    name: "VALORANT",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hMR4xgQe9F6wVms9Vq6bInvN6ziUZ0Dg-g&s",
    teamPhoto: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    achievements: ["VCT Turkey Champions", "Regional Finals", "Community Choice"],
    roster: [
      { 
        nickname: "Vector", 
        role: "IGL",
        photo: "https://nip.gl/cdn/shop/files/Player_img_placeholder_427x530_4_896x.png?v=1718193716",
        achievements: ["Best IGL 2024", "Strategic Mastermind"],
        social: [
          { platform: "X", url: "https://x.com/vector" },
          { platform: "Twitch", url: "https://twitch.tv/vector" }
        ]
      },
      { 
        nickname: "Blaze", 
        role: "Duelist",
        photo: "https://nip.gl/cdn/shop/files/Player_img_placeholder_427x530_4_896x.png?v=1718193716",
        achievements: ["Entry King", "Most First Bloods"],
        social: [
          { platform: "X", url: "https://x.com/blaze" },
          { platform: "Instagram", url: "https://instagram.com/blaze" }
        ]
      },
      { 
        nickname: "Nimbus", 
        role: "Controller",
        photo: "https://nip.gl/cdn/shop/files/Player_img_placeholder_427x530_4_896x.png?v=1718193716",
        achievements: ["Smoke Master", "Best Controller"],
        social: [
          { platform: "X", url: "https://x.com/nimbus" },
          { platform: "YouTube", url: "https://youtube.com/nimbus" }
        ]
      },
      { 
        nickname: "Pulse", 
        role: "Initiator",
        photo: "https://nip.gl/cdn/shop/files/Player_img_placeholder_427x530_4_896x.png?v=1718193716",
        achievements: ["Flash Master", "Best Initiator"],
        social: [
          { platform: "X", url: "https://x.com/pulse" },
          { platform: "Twitch", url: "https://twitch.tv/pulse" }
        ]
      },
      { 
        nickname: "Bulwark", 
        role: "Sentinel",
        photo: "https://nip.gl/cdn/shop/files/Player_img_placeholder_427x530_4_896x.png?v=1718193716",
        achievements: ["Site Holder", "Best Sentinel"],
        social: [
          { platform: "X", url: "https://x.com/bulwark" },
          { platform: "Instagram", url: "https://instagram.com/bulwark" }
        ]
      },
    ],
    links: [
      { label: "X (Takım)", href: "https://x.com/ulfesports_gg?lang=en" },
    ],
  },
  {
    id: "fc24",
    name: "EA FC",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hMR4xgQe9F6wVms9Vq6bInvN6ziUZ0Dg-g&s",
    teamPhoto: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    achievements: ["Turkish League Champions", "Pro Clubs Winners", "FUT Champions"],
    roster: [
      { 
        nickname: "Maestro", 
        role: "CAM",
        photo: "https://nip.gl/cdn/shop/files/Player_img_placeholder_427x530_4_896x.png?v=1718193716",
        achievements: ["Playmaker of the Year", "Most Assists"],
        social: [
          { platform: "X", url: "https://x.com/maestro" },
          { platform: "Twitch", url: "https://twitch.tv/maestro" }
        ]
      },
      { 
        nickname: "StrikerX", 
        role: "ST",
        photo: "https://nip.gl/cdn/shop/files/Player_img_placeholder_427x530_4_896x.png?v=1718193716",
        achievements: ["Golden Boot Winner", "Most Goals"],
        social: [
          { platform: "X", url: "https://x.com/strikerx" },
          { platform: "Instagram", url: "https://instagram.com/strikerx" }
        ]
      },
    ],
    links: [
      { label: "X (Takım)", href: "https://x.com/ulfesports_gg?lang=en" },
    ],
  },
];

export const tournaments: Tournament[] = [
  {
    id: "tcl-2024",
    name: "TCL 2024 Spring",
    date: "March 2024",
    placement: "3rd Place",
    prize: "$15,000",
    logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    participants: 8,
    region: "Turkey"
  },
  {
    id: "vct-turkey",
    name: "VCT Turkey Championship",
    date: "February 2024",
    placement: "1st Place",
    prize: "$25,000",
    logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    participants: 16,
    region: "Turkey"
  },
  {
    id: "fc24-league",
    name: "EA FC 24 Turkish League",
    date: "January 2024",
    placement: "1st Place",
    prize: "$10,000",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    participants: 32,
    region: "Turkey"
  },
  {
    id: "istanbul-cup",
    name: "Istanbul Gaming Cup",
    date: "December 2023",
    placement: "1st Place",
    prize: "$8,000",
    logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    participants: 24,
    region: "Istanbul"
  },
  {
    id: "regional-finals",
    name: "Regional Finals",
    date: "November 2023",
    placement: "2nd Place",
    prize: "$12,000",
    logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    participants: 12,
    region: "Europe"
  },
  {
    id: "community-cup",
    name: "Community Choice Cup",
    date: "October 2023",
    placement: "1st Place",
    prize: "$5,000",
    logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    participants: 64,
    region: "Online"
  }
];

export const achievements: Achievement[] = [
  {
    id: "mvp-spring",
    title: "MVP Spring 2024",
    description: "WolfPeak named Most Valuable Player in TCL Spring Split",
    date: "March 2024",
    trophy: "🏆",
    category: "Individual"
  },
  {
    id: "best-jungler",
    title: "Best Jungler 2024",
    description: "Emerald recognized as the top jungler in Turkish League",
    date: "February 2024",
    trophy: "🥇",
    category: "Individual"
  },
  {
    id: "team-champions",
    title: "VCT Turkey Champions",
    description: "VALORANT team wins Turkish Championship",
    date: "February 2024",
    trophy: "🏆",
    category: "Team"
  },
  {
    id: "fc24-winners",
    title: "EA FC 24 League Winners",
    description: "FC 24 team dominates Turkish League",
    date: "January 2024",
    trophy: "🏆",
    category: "Team"
  },
  {
    id: "community-choice",
    title: "Community Choice Award",
    description: "Voted best team by gaming community",
    date: "December 2023",
    trophy: "👑",
    category: "Recognition"
  },
  {
    id: "regional-finalists",
    title: "Regional Finalists",
    description: "Reached finals in European Regional Championship",
    date: "November 2023",
    trophy: "🥈",
    category: "Team"
  }
];

export const teamPhotos = [
  {
    id: "team-practice",
    title: "Takım Antrenmanı",
    description: "Profesyonel antrenman seansları",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    category: "Training"
  },
  {
    id: "tournament-win",
    title: "Turnuva Zaferi",
    description: "Büyük turnuva zaferi anı",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    category: "Victory"
  },
  {
    id: "team-bonding",
    title: "Takım Bağı",
    description: "Takım arkadaşlığı ve eğlence",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    category: "Team"
  },
  {
    id: "fans-meet",
    title: "Hayran Buluşması",
    description: "Hayranlarla buluşma etkinliği",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop",
    category: "Fans"
  },
  {
    id: "gaming-setup",
    title: "Gaming Setup",
    description: "Profesyonel gaming ekipmanları",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop",
    category: "Equipment"
  },
  {
    id: "championship-celebration",
    title: "Şampiyonluk Kutlaması",
    description: "Şampiyonluk sonrası kutlama",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=600&fit=crop",
    category: "Celebration"
  }
];


