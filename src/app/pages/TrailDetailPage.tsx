import { useParams, Link } from "react-router";
import { useState } from "react";
import {
  Triangle, MapPin, Clock, BarChart2, CalendarDays, Users,
  ChevronRight, Play, Star, Send, CheckCircle, XCircle,
  ArrowUpRight, Expand,
} from "lucide-react";
import { getTrailById } from "../data/trailsData";
import { Footer } from "../components/Footer";

// ── shared hero background (all trail detail pages) ───────────────────────────
import sharedHeroImg from "../../imports/joshua-kettle-weYdqqOmItU-unsplash.jpg";

// ── trail-specific thumbnail images (for other uses) ─────────────────────────
import imgSembalun from "../../imports/jalur_semablun.jpg";
import imgSenaru from "../../imports/jalur_senaru_1.jpg";
import imgTorean from "../../imports/jalur_torean.jpg";
import imgAikBerik from "../../imports/Rinjani_Via_Aik_Berik8_1.jpg";
import imgTimbanuh from "../../imports/jalur_timbanuh_1_1.jpg";
import imgTeteBatu from "../../imports/jalur_tetebatu_1.jpg";

const heroMap: Record<string, string> = {
  sembalun: imgSembalun,
  senaru: imgSenaru,
  torean: imgTorean,
  "aik-berik": imgAikBerik,
  timbanuh: imgTimbanuh,
  "tete-batu": imgTeteBatu,
};

// ── Per-trail curated gallery: [photo1, photo2, photo3, photo4, videoThumb]
// Each array = 4 grid photos + 1 video thumbnail
const TRAIL_GALLERIES: Record<string, string[]> = {
  sembalun: [
    // 1. Danau Segara Anak dari udara — ikon utama Sembalun
    "https://images.unsplash.com/photo-1698267703889-06c41f9acba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 2. Puncak Rinjani muncul di atas lautan awan
    "https://images.unsplash.com/photo-1698396962125-48eeb1f9e22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 3. Awan putih di atas puncak gunung hitam
    "https://images.unsplash.com/photo-1604069871320-e96f5f1c47d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 4. Tenda pendaki di kaki Rinjani dekat Segara Anak
    "https://images.unsplash.com/photo-1517807289433-f0282e362596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // video thumbnail: rombongan pendaki naik gunung
    "https://images.unsplash.com/photo-1669901529685-8cdba1222953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  ],
  senaru: [
    // 1. Air terjun kecil di tengah hutan Indonesia
    "https://images.unsplash.com/photo-1710812030602-4a3662eb0135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 2. Air terjun besar di hutan lebat
    "https://images.unsplash.com/photo-1695306651771-be64af55a39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 3. Rombongan pendaki di depan air terjun
    "https://images.unsplash.com/photo-1691422740547-2701175fc794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 4. Air terjun besar di hutan tropis
    "https://images.unsplash.com/photo-1726621074167-f879167f9e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // video thumbnail: kanopi hijau hutan tropis dari udara
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  ],
  torean: [
    // 1. Aerial gunung dengan danau kawah — Rinjani
    "https://images.unsplash.com/photo-1698799330469-e53f68a91c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 2. Burung camar terbang di atas gunung berkabut
    "https://images.unsplash.com/photo-1764957079577-6b07e670e8ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 3. Danau gunung saat sunrise langit berwarna
    "https://images.unsplash.com/photo-1760989111100-30e2c481c98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 4. Danau dikelilingi pegunungan
    "https://images.unsplash.com/photo-1654862048364-72d809f46a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // video thumbnail: aerial Rinjani dan Segara Anak
    "https://images.unsplash.com/photo-1698267703889-06c41f9acba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  ],
  "aik-berik": [
    // 1. Siluet pegunungan berlapis saat matahari terbenam
    "https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 2. Pegunungan berlapis di golden hour
    "https://images.unsplash.com/photo-1654362248566-6804dbcc5bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 3. Ladang hijau dengan gunung latar belakang Indonesia
    "https://images.unsplash.com/photo-1671965448417-0582cb361168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 4. Pegunungan saat sunset dramatis
    "https://images.unsplash.com/photo-1694507482314-a429436d4a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // video thumbnail: gunung berkabut dari udara
    "https://images.unsplash.com/photo-1512895356176-c49e710676ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  ],
  timbanuh: [
    // 1. Hutan tropis lebat dari udara
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 2. Pepohonan di lereng gunung
    "https://images.unsplash.com/photo-1556648011-e01aca870a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 3. Pohon kelapa di hutan berkabut tropis
    "https://images.unsplash.com/photo-1432298026442-0eabd0a98870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 4. Hutan hijau diselimuti kabut tebal
    "https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // video thumbnail: hutan konservasi lebat Indonesia
    "https://images.unsplash.com/photo-1782291928869-9a607a45385b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  ],
  "tete-batu": [
    // 1. Siluet berlapis pegunungan saat sunset
    "https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 2. Siluet pegunungan dramatis (Annie Spratt)
    "https://images.unsplash.com/photo-1544896916-6c9b00a2ca30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 3. Pegunungan berlapis di sore hari keemasan
    "https://images.unsplash.com/photo-1767591467268-35aa0c96d0c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // 4. Aerial gunung dan danau saat golden hour
    "https://images.unsplash.com/photo-1698799330469-e53f68a91c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    // video thumbnail: sunset pegunungan berlapis
    "https://images.unsplash.com/photo-1654362248566-6804dbcc5bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  ],
};

const FONT = "'Plus Jakarta Sans', sans-serif";
const HF = "'Playfair Display', Georgia, serif";
const GREEN = "#3a7c1e";
const DARK = "#111808";

// ── mock reviews (same set across all trails) ─────────────────────────────────
const REVIEWS = [
  { initials: "AF", name: "Ahmad Fajri", stars: 5, date: "13 Feb 2025", text: "Jalur ini sangat mengesankan namun memacu adrenalin. Pemandangan dari puncak luar biasa indah. Danau Segara Anak, dan sekitarnya. Wajib dicoba!" },
  { initials: "SR", name: "Sri Rahayu", stars: 4, date: "5 April 2025", text: "Perjalanan yang tak terlupakan. Jalurnya cukup panjang tapi pemandangan hutan sepanjang perjalanan sangat memukau. Pemandu sangat membantu." },
  { initials: "BS", name: "Budi Santosa", stars: 5, date: "12 Maret 2025", text: "Summit attack yang seru! Perjuangan yang sangat berat tapi worthit. Sunrise dari puncak adalah pengalaman spiritual yang tak terlupakan." },
  { initials: "MP", name: "Maya Putri", stars: 4, date: "28 Februari 2025", text: "Sangat merekomendasikan jalur ini untuk pendaki menengah. Persiapan fisik dengan baik dan bawa air yang cukup. Jangan lupa menikmati setiap momen." },
];

// ── Star rating component ─────────────────────────────────────────────────────
function StarRating({ value, onChange, size = 18 }: { value: number; onChange?: (v: number) => void; size?: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          fill={n <= value ? "#f59e0b" : "none"}
          color={n <= value ? "#f59e0b" : "#d1d5db"}
          style={{ cursor: onChange ? "pointer" : "default" }}
          onClick={() => onChange?.(n)}
        />
      ))}
    </div>
  );
}

// ── Trail map SVG ─────────────────────────────────────────────────────────────
function TrailMapSVG({ waypoints }: { waypoints: { name: string }[] }) {
  const count = waypoints.length;
  const pts = waypoints.map((_, i) => ({
    x: 80 + (i / (count - 1)) * 220,
    y: 120 - (i / (count - 1)) * 80,
  }));
  return (
    <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: "#e8f3d4", border: "1px solid #d0e8b0" }}>
      <svg width="100%" viewBox="0 0 380 140" style={{ display: "block" }}>
        {/* grid lines */}
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={0} y1={140 * f} x2={380} y2={140 * f} stroke="#c8e0a4" strokeWidth="0.5" />
        ))}
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={380 * f} y1={0} x2={380 * f} y2={140} stroke="#c8e0a4" strokeWidth="0.5" />
        ))}
        {/* trail line */}
        <polyline
          points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke={GREEN}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* waypoint dots */}
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={i === 0 || i === count - 1 ? 6 : 4}
              fill={i === count - 1 ? GREEN : "white"}
              stroke={GREEN} strokeWidth="2"
            />
          </g>
        ))}
        {/* labels for first and last */}
        <text x={pts[0].x} y={pts[0].y + 14} textAnchor="middle" fontSize="7" fill="#3a7c1e" fontFamily={FONT}>
          {waypoints[0].name.split(" ").slice(0, 2).join(" ")}
        </text>
        <text x={pts[count - 1].x} y={pts[count - 1].y - 8} textAnchor="middle" fontSize="7" fill="#3a7c1e" fontFamily={FONT}>
          {waypoints[count - 1].elevation}
        </text>
      </svg>
      <div className="flex items-center justify-end px-4 pb-3">
        <button
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white transition-all hover:brightness-110"
          style={{ backgroundColor: GREEN, fontSize: "0.75rem", fontWeight: 600, fontFamily: FONT, border: "none", cursor: "pointer" }}
        >
          <Expand size={12} />
          Lihat Peta Lengkap
        </button>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export function TrailDetailPage() {
  const { trailId = "sembalun" } = useParams();
  const trail = getTrailById(trailId);
  const [reviewStars, setReviewStars] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!trail) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: "#f5faea" }}>
        <p style={{ fontFamily: FONT, fontSize: "1.1rem", color: "#5a7040" }}>Jalur tidak ditemukan.</p>
        <Link to="/" style={{ color: GREEN, fontFamily: FONT, marginTop: "12px" }}>← Kembali ke Beranda</Link>
      </div>
    );
  }

  const heroImg = sharedHeroImg;
  const galleryImgs = TRAIL_GALLERIES[trailId] ?? TRAIL_GALLERIES["sembalun"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewName && reviewStars > 0) {
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); setReviewName(""); setReviewText(""); setReviewStars(0); }, 3000);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex flex-col justify-end" style={{ minHeight: "52vh" }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt={trail.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,16,5,0.92) 0%, rgba(10,16,5,0.5) 50%, rgba(10,16,5,0.15) 100%)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-14 pb-12 pt-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 mb-4" style={{ fontSize: "0.72rem", fontFamily: FONT, color: "rgba(255,255,255,0.55)" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Beranda</Link>
            <ChevronRight size={11} />
            <span>Jalur</span>
            <ChevronRight size={11} />
            <span style={{ color: "white" }}>{trail.name}</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, fontFamily: HF, lineHeight: 1.1, margin: 0 }}>
            {trail.name}
          </h1>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ backgroundColor: "#f5faea" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-14 py-12">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── LEFT COLUMN ── */}
            <div className="flex-1 min-w-0">

              {/* Tentang Jalur */}
              <div className="mb-10">
                <h2 style={{ fontFamily: HF, fontSize: "1.6rem", fontWeight: 700, color: "#1a2010", margin: "0 0 12px 0" }}>
                  Tentang {trail.name}
                </h2>
                <p style={{ fontFamily: FONT, fontSize: "0.88rem", lineHeight: 1.75, color: "#4a6030", marginBottom: "16px" }}>
                  {trail.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {trail.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full" style={{ backgroundColor: "#d4edb0", color: "#2a5a10", fontSize: "0.72rem", fontWeight: 600, fontFamily: FONT }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pos Perjalanan */}
              <div className="mb-10">
                <p style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: GREEN, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "4px" }}>Dari Basecamp Hingga Puncak</p>
                <h2 style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: "#1a2010", margin: "0 0 20px 0" }}>Pos Perjalanan</h2>
                <div className="relative">
                  {/* vertical line */}
                  <div className="absolute left-4 top-0 bottom-0" style={{ width: "2px", backgroundColor: "#d4edb0", marginLeft: "-1px" }} />
                  <div className="flex flex-col gap-4">
                    {trail.waypoints.map((wp, i) => (
                      <div key={i} className="flex gap-4 pl-10 relative">
                        {/* dot */}
                        <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full text-white shrink-0 z-10"
                          style={{ backgroundColor: wp.isSummit ? GREEN : "white", border: `2px solid ${GREEN}`, fontSize: "0.7rem", fontWeight: 700, fontFamily: FONT, color: wp.isSummit ? "white" : GREEN }}>
                          {wp.isSummit ? "🏔" : i + 1}
                        </div>
                        <div className="flex-1 bg-white rounded-xl p-4" style={{ border: "1px solid #e4f0d0", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <span style={{ fontFamily: HF, fontSize: "0.95rem", fontWeight: 700, color: "#1a2010" }}>{wp.name}</span>
                            <div className="flex items-center gap-3 shrink-0">
                              <span style={{ fontFamily: FONT, fontSize: "0.7rem", color: GREEN, fontWeight: 600 }}>{wp.elevation}</span>
                              <span style={{ fontFamily: FONT, fontSize: "0.7rem", color: "#8aaa60" }}>{wp.time}</span>
                            </div>
                          </div>
                          <p style={{ fontFamily: FONT, fontSize: "0.78rem", color: "#5a7040", lineHeight: 1.6, margin: 0 }}>{wp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Peta Jalur Interaktif */}
              <div className="mb-10">
                <h2 style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: "#1a2010", margin: "0 0 14px 0" }}>Peta Jalur Interaktif</h2>
                <TrailMapSVG waypoints={trail.waypoints} />
              </div>

              {/* Aturan & Larangan */}
              <div className="mb-10">
                <h2 style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: "#1a2010", margin: "0 0 14px 0" }}>Aturan &amp; Larangan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl p-5" style={{ backgroundColor: "white", border: "1px solid #e4f0d0" }}>
                    <p style={{ fontFamily: HF, fontSize: "0.95rem", fontWeight: 700, color: "#1a2010", marginBottom: "12px" }}>Aturan Wajib</p>
                    <ul className="flex flex-col gap-2">
                      {trail.rules.wajib.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={14} color={GREEN} className="shrink-0 mt-0.5" />
                          <span style={{ fontFamily: FONT, fontSize: "0.78rem", color: "#4a6030", lineHeight: 1.5 }}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl p-5" style={{ backgroundColor: "#fff8f5", border: "1px solid #fde8df" }}>
                    <p style={{ fontFamily: HF, fontSize: "0.95rem", fontWeight: 700, color: "#9a2010", marginBottom: "12px" }}>Larangan</p>
                    <ul className="flex flex-col gap-2">
                      {trail.rules.larangan.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <XCircle size={14} color="#e05030" className="shrink-0 mt-0.5" />
                          <span style={{ fontFamily: FONT, fontSize: "0.78rem", color: "#7a3020", lineHeight: 1.5 }}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Galeri Visual */}
              <div className="mb-10">
                <h2 style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: "#1a2010", margin: "0 0 14px 0" }}>
                  Galeri Visual
                </h2>

                {/* ── 2×2 Photo Grid ── */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {galleryImgs.slice(0, 4).map((src, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl cursor-pointer group"
                      style={{ aspectRatio: "3/2" }}
                    >
                      <img
                        src={src}
                        alt={`${trail.name} foto ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* ── Video Dokumentasi label ── */}
                <div className="flex items-center gap-2 mb-3">
                  <div style={{ width: "20px", height: "2px", backgroundColor: GREEN, borderRadius: "1px" }} />
                  <p style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: "#4a8a2a", letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>
                    Video Dokumentasi
                  </p>
                </div>

                {/* ── 1 Video card ── */}
                {(() => {
                  const vid = trail.videos[0];
                  const thumb = galleryImgs[4] ?? galleryImgs[0];
                  return (
                    <div className="cursor-pointer group">
                      {/* Thumbnail */}
                      <div
                        className="relative rounded-xl overflow-hidden mb-2"
                        style={{ aspectRatio: "16/9" }}
                      >
                        <img
                          src={thumb}
                          alt={vid.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Dark overlay */}
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: "rgba(0,0,0,0.28)" }}
                        />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.90)",
                              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                            }}
                          >
                            <Play size={22} fill={GREEN} color={GREEN} style={{ marginLeft: "2px" }} />
                          </div>
                        </div>
                        {/* HD badge */}
                        <span
                          className="absolute bottom-3 right-3 px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: "rgba(0,0,0,0.55)",
                            color: "white",
                            fontSize: "0.6rem",
                            fontFamily: FONT,
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                          }}
                        >
                          HD
                        </span>
                      </div>
                      {/* Title & channel below card */}
                      <p style={{ fontFamily: FONT, fontSize: "0.88rem", fontWeight: 700, color: "#1a2010", margin: "0 0 3px", lineHeight: 1.4 }}>
                        {vid.title}
                      </p>
                      <p style={{ fontFamily: FONT, fontSize: "0.72rem", color: GREEN, margin: 0, fontWeight: 500 }}>
                        {vid.channel}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Ulasan Pendaki */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <h2 style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: "#1a2010", margin: 0 }}>Ulasan Pendaki</h2>
                  <div className="flex items-center gap-1.5">
                    <Star size={16} fill="#f59e0b" color="#f59e0b" />
                    <span style={{ fontFamily: FONT, fontSize: "0.95rem", fontWeight: 700, color: "#1a2010" }}>{trail.rating}</span>
                    <span style={{ fontFamily: FONT, fontSize: "0.78rem", color: "#8aaa60" }}>({trail.reviewCount} ulasan)</span>
                  </div>
                </div>

                {/* Review form */}
                <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: "white", border: "1px solid #e4f0d0" }}>
                  <h3 style={{ fontFamily: HF, fontSize: "1rem", fontWeight: 700, color: "#1a2010", margin: "0 0 14px 0" }}>Tulis Ulasanmu</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      placeholder="Nama Pendaki"
                      style={{ padding: "10px 14px", border: "1px solid #d4edb0", borderRadius: "8px", fontFamily: FONT, fontSize: "0.82rem", outline: "none", color: "#1a2010", backgroundColor: "#f8fdf2" }}
                    />
                    <div className="flex items-center gap-2">
                      <span style={{ fontFamily: FONT, fontSize: "0.78rem", color: "#8aaa60" }}>Nilai:</span>
                      <StarRating value={reviewStars} onChange={setReviewStars} size={20} />
                    </div>
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      rows={3}
                      placeholder="Ceritakan pengalamanmu mendaki jalur ini... (minimal 30 karakter)"
                      style={{ padding: "10px 14px", border: "1px solid #d4edb0", borderRadius: "8px", fontFamily: FONT, fontSize: "0.82rem", outline: "none", resize: "vertical", color: "#1a2010", backgroundColor: "#f8fdf2" }}
                    />
                    <button
                      type="submit"
                      className="flex items-center gap-2 self-start px-5 py-2.5 rounded-full transition-all hover:brightness-110"
                      style={{ backgroundColor: GREEN, color: "white", border: "none", cursor: "pointer", fontFamily: FONT, fontSize: "0.82rem", fontWeight: 600 }}
                    >
                      <Send size={13} />
                      {submitted ? "Terima kasih!" : "Kirim Ulasan"}
                    </button>
                  </form>
                </div>

                {/* Review list */}
                <div className="flex flex-col gap-4">
                  {REVIEWS.map((r, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ backgroundColor: "white", border: "1px solid #e4f0d0" }}>
                      <div className="flex items-center justify-center w-9 h-9 rounded-full shrink-0" style={{ backgroundColor: GREEN, color: "white", fontSize: "0.72rem", fontWeight: 700, fontFamily: FONT }}>
                        {r.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                          <span style={{ fontFamily: FONT, fontSize: "0.85rem", fontWeight: 700, color: "#1a2010" }}>{r.name}</span>
                          <span style={{ fontFamily: FONT, fontSize: "0.68rem", color: "#8aaa60" }}>{r.date}</span>
                        </div>
                        <StarRating value={r.stars} size={13} />
                        <p style={{ fontFamily: FONT, fontSize: "0.78rem", color: "#4a6030", lineHeight: 1.65, margin: "6px 0 0" }}>{r.text}</p>
                      </div>
                    </div>
                  ))}
                  <button className="self-center flex items-center gap-1.5 px-5 py-2 rounded-full transition-all hover:bg-opacity-80"
                    style={{ border: `1px solid ${GREEN}`, color: GREEN, backgroundColor: "transparent", fontFamily: FONT, fontSize: "0.78rem", fontWeight: 600, cursor: "pointer" }}>
                    Muat Lebih Banyak Ulasan
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Statistik Jalur (sticky) ── */}
            <div className="lg:w-72 shrink-0">
              <div className="sticky top-20 rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>
                {/* Header */}
                <div className="px-5 py-3" style={{ backgroundColor: GREEN }}>
                  <p style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>Statistik Jalur</p>
                </div>
                {/* Stats */}
                <div className="bg-white">
                  {[
                    { icon: <Triangle size={15} color={GREEN} />, label: "Elevasi Tertinggi", value: `${trail.elevation} mdpl` },
                    { icon: <MapPin size={15} color={GREEN} />, label: "Total Jarak", value: trail.distance },
                    { icon: <Clock size={15} color={GREEN} />, label: "Estimasi Waktu", value: trail.duration },
                    { icon: <BarChart2 size={15} color={GREEN} />, label: "Tingkat Kesulitan", value: trail.difficulty },
                    { icon: <CalendarDays size={15} color={GREEN} />, label: "Musim Terbaik", value: trail.season },
                    { icon: <Users size={15} color={GREEN} />, label: "Kapasitas", value: trail.capacity },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3.5" style={{ borderBottom: "1px solid #f0f8e8" }}>
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{ backgroundColor: "#e8f5d0" }}>
                        {s.icon}
                      </div>
                      <div>
                        <p style={{ fontFamily: FONT, fontSize: "0.62rem", color: "#8aaa60", margin: 0, fontWeight: 500 }}>{s.label}</p>
                        <p style={{ fontFamily: FONT, fontSize: "0.85rem", fontWeight: 700, color: "#1a2010", margin: 0 }}>{s.value}</p>
                      </div>
                    </div>
                  ))}
                  <div className="px-5 py-4">
                    <p style={{ fontFamily: FONT, fontSize: "0.65rem", color: "#8aaa60", margin: "0 0 8px 0" }}>Diperbarui: {trail.lastUpdated}</p>
                    <span className="inline-block px-3 py-1 rounded-full" style={{ backgroundColor: trail.status === "BUKA" ? "#d4edb0" : "#fde8df", color: trail.status === "BUKA" ? "#2a5a10" : "#9a2010", fontSize: "0.72rem", fontWeight: 700, fontFamily: FONT }}>
                      ● {trail.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
