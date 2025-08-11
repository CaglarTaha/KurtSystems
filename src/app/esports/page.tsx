"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/contexts/LocaleContext";
import { ExternalLink, Gamepad2, Trophy, Users, Award, Calendar, TrendingUp, Star, Zap, Target, Crown, ArrowRight, Sparkles } from "lucide-react";
import { divisions, Player, Division } from "@/data/esports";

function PlayerCard({ player, useLolImage }: { player: Player; useLolImage: boolean }) {
  const buildLolEsportsImageUrl = (nickname: string) => {
    const slug = nickname
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z0-9-]/g, "");
    const target = `http://static.lolesports.com/players/${slug}.png`;
    const encoded = encodeURIComponent(target);
    return `https://am-a.akamaihd.net/image?resize=750:&f=${encoded}`;
  };

  const buildLolPlayersUrlFromFilename = (filename: string) => {
    const target = `http://static.lolesports.com/players/${filename}`;
    return `https://am-a.akamaihd.net/image?resize=750:&f=${encodeURIComponent(target)}`;
  };

  const silhouetteUrl = "https://nip.gl/cdn/shop/files/Player_img_placeholder_427x530_4_896x.png?v=1718193716";

  const [imgError, setImgError] = useState(false);
  let candidateSrc: string | undefined;
  if (useLolImage) {
    if (player.photo) {
      // If photo is a full URL, use as is; if it's a filename, build LoL players URL
      candidateSrc = /^(https?:)?\/\//.test(player.photo)
        ? player.photo
        : buildLolPlayersUrlFromFilename(player.photo);
    } else {
      // Fallback to nickname-based slug
      candidateSrc = buildLolEsportsImageUrl(player.nickname);
    }
  } else {
    candidateSrc = player.photo;
  }
  const displaySrc = imgError || !candidateSrc ? silhouetteUrl : candidateSrc;
  const ulfLogoUrl = "https://am-a.akamaihd.net/image?resize=1000:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1748868374823_ULF_ESPORTS_OFFICIAL_LOGO_WHITE.png";
  
  return (
    <div className="w-70 h-95 rounded-xl border border-gray-300/30 bg-gradient-to-br from-slate-800 via-gray-900 to-black overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/50">
      {/* ULF Logo Background */}
      <div
        className="absolute inset-0 opacity-25 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url("${ulfLogoUrl}")`,
        }}
      />
      
      {displaySrc ? (
        <Image 
          src={displaySrc} 
          alt={player.nickname} 
          fill 
          className="object-cover relative z-10"
          sizes="280px"
          onError={imgError ? undefined : () => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center relative z-10">
          <Users className="w-16 h-16 text-gray-500" />
        </div>
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none z-20" />
      
      {/* Player Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-30">
        <h4 className="text-xl font-bold mb-2 text-shadow-lg">
          {player.nickname}
        </h4>
        <p className="text-sm text-gray-300 uppercase tracking-wider font-medium">
          {player.role}
        </p>
      </div>
    </div>
  );
}

function DivisionSection({ division, idx, t }: { division: Division; idx: number; t: (k: string) => string }) {
  return (
    <section className="mb-16">
      {/* Division Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className="mb-8 flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gray-400/30">
            <Image 
              src={division.logo} 
              alt={`${division.name} Logo`} 
              fill 
              className="object-cover" 
              sizes="48px"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">{division.name}</h3>
        </div>
        <div className="flex items-center gap-3">
          {division.links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              {link.label}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Players Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center sm:justify-items-start">
          {division.roster.map((player, playerIndex) => (
            <motion.div
              key={player.nickname}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: playerIndex * 0.1 }}
            >
              <PlayerCard player={player} useLolImage={division.id === 'lol'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EsportsPage() {
  const { t, locale } = useLocale();
  return (
    <main className="relative min-h-screen bg-black overflow-hidden will-change-transform">
      {/* Enhanced Background Pattern with More Neon Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Base Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Enhanced Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.03),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(128,128,128,0.06),transparent_60%)]" />
        
        {/* Dynamic Neon Gray Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gray-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gray-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Subtle Moving Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(128,128,128,0.03)_50%,transparent_51%)] bg-[size:200px_200px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Team Logo Background */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.02] bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                'url("https://am-a.akamaihd.net/image?resize=1000:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1748868374823_ULF_ESPORTS_OFFICIAL_LOGO_WHITE.png")',
            }}
          />
          {/* Floating Neon Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-40 right-32 w-1 h-1 bg-gray-400 rounded-full shadow-[0_0_8px_rgba(128,128,128,0.6)]"
            />
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7)]"
            />
          </div>

          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 relative"
            >
              {/* Enhanced Title with More Neon Effects */}
              <div className="relative">
                <h1 className="text-7xl sm:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] relative">
                  ULF
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(255,255,255,0.3)",
                        "0 0 40px rgba(255,255,255,0.5)",
                        "0 0 20px rgba(255,255,255,0.3)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent opacity-20 blur-sm"
                  >
                    ULF
                  </motion.div>
                </h1>
                <h1 className="text-6xl sm:text-7xl font-light text-gray-400 mt-2 drop-shadow-[0_0_20px_rgba(128,128,128,0.5)] relative">
                  E-SPORTS
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        "0 0 15px rgba(128,128,128,0.4)",
                        "0 0 30px rgba(128,128,128,0.6)",
                        "0 0 15px rgba(128,128,128,0.4)"
                      ]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent opacity-15 blur-sm"
                  >
                    E-SPORTS
                  </motion.div>
                </h1>
                
                {/* Enhanced Divider with Animation */}
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                  animate={{ 
                    boxShadow: [
                      "0 0 15px rgba(255,255,255,0.6)",
                      "0 0 25px rgba(255,255,255,0.8)",
                      "0 0 15px rgba(255,255,255,0.6)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating Sparkles */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-4 -right-4 text-white/30"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-4 -left-4 text-gray-400/40"
                >
                  <Star className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_15px_rgba(128,128,128,0.3)] relative"
            >
              {t("esports_intro_1")} 
              {t("esports_intro_2")}
              <motion.span
                animate={{ 
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/10 to-transparent blur-sm"
              />
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-6 flex-wrap"
            >
              <motion.a 
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] relative overflow-hidden"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://x.com/ulfesports_gg?lang=en"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    x: ["-100%", "100%"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span>{t("x_ulf_esports")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                className="flex items-center gap-3 px-8 py-4 border border-gray-400/40 text-white font-semibold hover:bg-gray-400/10 transition-all duration-300 shadow-[0_0_20px_rgba(128,128,128,0.3)] hover:shadow-[0_0_35px_rgba(128,128,128,0.5)] hover:border-gray-400/60 relative overflow-hidden"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://lolesports.com/teams/ulf-esports"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    x: ["-100%", "100%"]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent"
                />
                <span>{t("lol_esports_profile")}</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Divisions Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative">
              {t("divisions_title")}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(255,255,255,0.3)",
                    "0 0 25px rgba(255,255,255,0.5)",
                    "0 0 15px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent opacity-15 blur-sm"
              >
                {t("divisions_title")}
              </motion.div>
            </h2>
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              animate={{ 
                boxShadow: [
                  "0 0 15px rgba(255,255,255,0.6)",
                  "0 0 25px rgba(255,255,255,0.8)",
                  "0 0 15px rgba(255,255,255,0.6)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div className="grid gap-16">
            {divisions.map((d, idx) => (
              <DivisionSection key={d.id} division={d} idx={idx} t={t} />
            ))}
          </div>
        </section>

        {/* Enhanced Team Features Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative">
              {t("team_features_title")}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(255,255,255,0.3)",
                    "0 0 25px rgba(255,255,255,0.5)",
                    "0 0 15px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent opacity-15 blur-sm"
              >
                {t("team_features_title")}
              </motion.div>
            </h2>
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              animate={{ 
                boxShadow: [
                  "0 0 15px rgba(255,255,255,0.6)",
                  "0 0 25px rgba(255,255,255,0.8)",
                  "0 0 15px rgba(255,255,255,0.6)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t("esports_feat_professional_title"), desc: t("esports_feat_professional_desc"), Icon: Users },
              { title: t("esports_feat_tournaments_title"), desc: t("esports_feat_tournaments_desc"), Icon: Trophy },
              { title: t("esports_feat_community_title"), desc: t("esports_feat_community_desc"), Icon: Gamepad2 },
              { title: t("esports_feat_progress_title"), desc: t("esports_feat_progress_desc"), Icon: TrendingUp },
              { title: t("esports_feat_sponsorship_title"), desc: t("esports_feat_sponsorship_desc"), Icon: Award },
              { title: t("esports_feat_calendar_title"), desc: t("esports_feat_calendar_desc"), Icon: Calendar },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className="relative border border-gray-400/30 bg-black/60 backdrop-blur-sm hover:border-gray-400/50 transition-all duration-300 p-8 shadow-[0_0_25px_rgba(128,128,128,0.15)] hover:shadow-[0_0_40px_rgba(128,128,128,0.25)] overflow-hidden">
                  {/* Animated Background Glow */}
                  <motion.div
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-400/5"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 bg-gray-400/15 flex items-center justify-center mb-6 group-hover:bg-gray-400/25 transition-colors duration-300 shadow-[0_0_15px_rgba(128,128,128,0.3)] group-hover:shadow-[0_0_25px_rgba(128,128,128,0.5)]"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <card.Icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                    </motion.div>
                    <h3 className="font-bold text-xl text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{card.title}</h3>
                    <p className="text-gray-400 leading-relaxed drop-shadow-[0_0_8px_rgba(128,128,128,0.3)]">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced Achievements Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative">
              {t("achievements_title")}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(255,255,255,0.3)",
                    "0 0 25px rgba(255,255,255,0.5)",
                    "0 0 15px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent opacity-15 blur-sm"
              >
                {t("achievements_title")}
              </motion.div>
            </h2>
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              animate={{ 
                boxShadow: [
                  "0 0 15px rgba(255,255,255,0.6)",
                  "0 0 25px rgba(255,255,255,0.8)",
                  "0 0 15px rgba(255,255,255,0.6)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: t("esports_stat_participations"), value: 25, suffix: "+", icon: Target },
              { label: t("esports_stat_top3"), value: 8, suffix: "", icon: Crown },
              { label: t("esports_stat_players"), value: 12, suffix: "", icon: Users },
              { label: t("esports_stat_years_experience"), value: 3, suffix: "", icon: Zap },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="border border-gray-400/30 bg-black/60 backdrop-blur-sm p-8 hover:border-gray-400/50 transition-all duration-300 shadow-[0_0_25px_rgba(128,128,128,0.15)] hover:shadow-[0_0_40px_rgba(128,128,128,0.25)] overflow-hidden relative">
                  {/* Animated Background Glow */}
                  <motion.div
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-400/5"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gray-400/15 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(128,128,128,0.4)]"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <stat.icon className="w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    </motion.div>
                    <div className="text-4xl font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">{stat.value}{stat.suffix}</div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wider drop-shadow-[0_0_8px_rgba(128,128,128,0.4)]">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative border border-gray-400/30 bg-black/60 backdrop-blur-sm p-12 shadow-[0_0_40px_rgba(128,128,128,0.2)] overflow-hidden"
          >
            {/* Animated Background Glow */}
            <motion.div
              animate={{ 
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-400/5"
            />
            
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <h2 className="text-4xl font-black text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative">
                {t("contact_us_title")}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 15px rgba(255,255,255,0.3)",
                      "0 0 25px rgba(255,255,255,0.5)",
                      "0 0 15px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent opacity-15 blur-sm"
                >
                  BİZE ULAŞIN
                </motion.div>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed drop-shadow-[0_0_15px_rgba(128,128,128,0.3)]">
                Sponsor iş birlikleri, provalar, oyuncu başvuruları ve genel sorularınız için sosyal medya hesaplarımızdan mesaj atın. Size en kısa sürede dönüş yapacağız.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <motion.a 
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_45px_rgba(255,255,255,0.6)] relative overflow-hidden"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://x.com/ulfesports_gg?lang=en"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ 
                      x: ["-100%", "100%"]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <span>{t("x_ulf_esports")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a 
                  className="flex items-center gap-3 px-8 py-4 border border-gray-400/40 text-white font-semibold hover:bg-gray-400/10 transition-all duration-300 shadow-[0_0_25px_rgba(128,128,128,0.3)] hover:shadow-[0_0_40px_rgba(128,128,128,0.5)] hover:border-gray-400/60 relative overflow-hidden"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://lolesports.com/teams/ulf-esports"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ 
                      x: ["-100%", "100%"]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent"
                  />
                  <span>LoL Esports</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Quick Access Section */}
        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative">
              {t("quick_access")}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 15px rgba(255,255,255,0.3)",
                    "0 0 25px rgba(255,255,255,0.5)",
                    "0 0 15px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent opacity-15 blur-sm"
              >
                HIZLI ERİŞİM
              </motion.div>
            </h2>
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              animate={{ 
                boxShadow: [
                  "0 0 15px rgba(255,255,255,0.6)",
                  "0 0 25px rgba(255,255,255,0.8)",
                  "0 0 15px rgba(255,255,255,0.6)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-center gap-6 flex-wrap"
          >
              <motion.a 
                href={`/${locale}`} 
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_45px_rgba(255,255,255,0.6)] relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ 
                  x: ["-100%", "100%"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span>Ana Sayfa</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
              <motion.a 
                href={`/${locale}/about`} 
              className="flex items-center gap-3 px-8 py-4 border border-gray-400/40 text-white font-semibold hover:bg-gray-400/10 transition-all duration-300 shadow-[0_0_25px_rgba(128,128,128,0.3)] hover:shadow-[0_0_40px_rgba(128,128,128,0.5)] hover:border-gray-400/60 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ 
                  x: ["-100%", "100%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent"
              />
              <span>{t("about")}</span>
            </motion.a>
              <motion.a 
                href={`/${locale}/contact`} 
              className="flex items-center gap-3 px-8 py-4 border border-gray-400/40 text-white font-semibold hover:bg-gray-400/10 transition-all duration-300 shadow-[0_0_25px_rgba(128,128,128,0.3)] hover:shadow-[0_0_40px_rgba(128,128,128,0.5)] hover:border-gray-400/60 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ 
                  x: ["-100%", "100%"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent"
              />
              <span>{t("contact")}</span>
            </motion.a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}


