import { useState } from "react";
import { Download, Eye, EyeOff, Mountain } from "lucide-react";
import heroImg from "../../imports/joshua-kettle-weYdqqOmItU-unsplash.jpg";
import { Footer } from "../components/Footer";
import { trails } from "../data/trailsData";

const FONT = "'Plus Jakarta Sans', sans-serif";
const HF = "'Playfair Display', Georgia, serif";
const GREEN = "#3a7c1e";

const TRAIL_COLORS = ["#3a7c1e", "#5a9c3e", "#7ab85e", "#2a5c0e", "#4a8c2e", "#1a4c0e"];

// SVG route endpoints from central summit – each trail radiates outward
const ROUTES: { cx: number; cy: number; bx: number; by: number }[] = [
  { cx: 220, cy: 160, bx: 370, by: 155 }, // Sembalun – East
  { cx: 220, cy: 160, bx: 180, by: 30 },  // Senaru – North
  { cx: 220, cy: 160, bx: 60, by: 75 },   // Torean – Northwest
  { cx: 220, cy: 160, bx: 175, by: 320 }, // Aik Berik – South
  { cx: 220, cy: 160, bx: 360, by: 290 }, // Timbanuh – Southeast
  { cx: 220, cy: 160, bx: 55, by: 300 },  // Tete Batu – Southwest
];

const BASECAMPS = ["Sembalun", "Senaru", "Torean", "Aik Berik", "Timbanuh", "Tete Batu"];

export function PetaPage() {
  const [visible, setVisible] = useState<boolean[]>(trails.map(() => true));

  const toggle = (i: number) =>
    setVisible((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: "44vh" }}>
        <div className="absolute inset-0">
          <img src={heroImg} alt="Gunung Rinjani" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,14,4,0.96) 0%, rgba(8,14,4,0.55) 50%, rgba(8,14,4,0.2) 100%)" }} />
        </div>
        <div className="relative z-10 px-6 md:px-14 pb-14 pt-32 max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-3">
            <div style={{ width: "24px", height: "1px", backgroundColor: "#b5de4a" }} />
            <span style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: "#b5de4a", letterSpacing: "0.18em", textTransform: "uppercase" }}>Navigasi Jalur</span>
          </div>
          <h1 style={{ fontFamily: HF, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "white", margin: "0 0 10px 0", lineHeight: 1.1 }}>
            Peta 6 Jalur Rinjani
          </h1>
          <p style={{ fontFamily: FONT, fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", margin: 0 }}>
            Jelajahi semua jalur dalam satu tampilan peta interaktif
          </p>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="px-6 md:px-14 py-12" style={{ backgroundColor: "#f5faea" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map SVG */}
            <div className="flex-1 rounded-2xl overflow-hidden" style={{ backgroundColor: "#e8f3d4", border: "1px solid #d0e8b0", minHeight: "380px" }}>
              <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid #d0e8b0" }}>
                <Mountain size={14} color={GREEN} />
                <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 600, color: "#3a7c1e" }}>Gunung Rinjani</span>
              </div>
              <svg width="100%" viewBox="0 0 440 360" style={{ display: "block", padding: "12px" }}>
                {/* grid */}
                {[1, 2, 3, 4, 5].map((n) => (
                  <line key={`h${n}`} x1={0} y1={n * 60} x2={440} y2={n * 60} stroke="#c8e0a4" strokeWidth="0.6" />
                ))}
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <line key={`v${n}`} x1={n * 60} y1={0} x2={n * 60} y2={360} stroke="#c8e0a4" strokeWidth="0.6" />
                ))}
                {/* trail routes */}
                {ROUTES.map((r, i) =>
                  visible[i] ? (
                    <g key={i}>
                      <line x1={r.cx} y1={r.cy} x2={r.bx} y2={r.by} stroke={TRAIL_COLORS[i]} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 3" />
                      {/* basecamp dot */}
                      <circle cx={r.bx} cy={r.by} r={5} fill="white" stroke={TRAIL_COLORS[i]} strokeWidth="2" />
                      <text x={r.bx + (r.bx > 220 ? 8 : -8)} y={r.by + 4}
                        textAnchor={r.bx > 220 ? "start" : "end"}
                        fontSize="8" fill={TRAIL_COLORS[i]} fontFamily={FONT} fontWeight="600">
                        {BASECAMPS[i]}
                      </text>
                    </g>
                  ) : null
                )}
                {/* Summit */}
                <circle cx={220} cy={160} r={10} fill={GREEN} />
                <circle cx={220} cy={160} r={14} fill="none" stroke={GREEN} strokeWidth="1.5" strokeOpacity="0.4" />
                <text x={220} y={146} textAnchor="middle" fontSize="8" fill={GREEN} fontFamily={FONT} fontWeight="700">3,726m</text>
                <text x={220} y={136} textAnchor="middle" fontSize="7" fill="#5a8a40" fontFamily={FONT}>Puncak Rinjani</text>
              </svg>
              {/* Expand button */}
              <div className="flex justify-end px-4 pb-3">
                <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full" style={{ border: `1px solid ${GREEN}`, color: GREEN, backgroundColor: "transparent", fontFamily: FONT, fontSize: "0.72rem", fontWeight: 600, cursor: "pointer" }}>
                  <Download size={12} /> Ekspor Peta
                </button>
              </div>
            </div>

            {/* Legend */}
            <div className="lg:w-56 shrink-0">
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "white", border: "1px solid #e4f0d0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div className="px-4 py-3" style={{ borderBottom: "1px solid #e4f0d0" }}>
                  <p style={{ fontFamily: HF, fontSize: "0.95rem", fontWeight: 700, color: "#1a2010", margin: 0 }}>Legenda Jalur</p>
                </div>
                <div className="px-4 py-3 flex flex-col gap-3">
                  {trails.map((t, i) => (
                    <div key={t.id} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div style={{ width: "24px", height: "3px", backgroundColor: TRAIL_COLORS[i], borderRadius: "2px", opacity: visible[i] ? 1 : 0.3 }} />
                        <span style={{ fontFamily: FONT, fontSize: "0.75rem", color: visible[i] ? "#1a2010" : "#aaa", fontWeight: 500 }}>{t.name}</span>
                      </div>
                      <button onClick={() => toggle(i)} style={{ background: "none", border: "none", cursor: "pointer", color: "#8aaa60", padding: "2px" }}>
                        {visible[i] ? <Eye size={14} /> : <EyeOff size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4">
                  <p style={{ fontFamily: FONT, fontSize: "0.65rem", color: "#8aaa60", lineHeight: 1.5, margin: 0 }}>
                    Klik jalur atau nama untuk toggle visibilitas. Klik titik start untuk detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GPX DOWNLOAD ── */}
      <section className="px-6 md:px-14 pb-16" style={{ backgroundColor: "#f5faea" }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontFamily: FONT, fontSize: "0.62rem", fontWeight: 600, color: GREEN, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "4px" }}>Peta GPX</p>
          <h2 style={{ fontFamily: HF, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1a2010", margin: "0 0 24px 0" }}>Unduh Peta GPS per Jalur</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trails.map((t, i) => (
              <div key={t.id} className="rounded-xl p-5 bg-white" style={{ border: "1px solid #e4f0d0", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl mb-3" style={{ backgroundColor: "#e8f5d0" }}>
                  <Mountain size={18} color={TRAIL_COLORS[i]} />
                </div>
                <h3 style={{ fontFamily: HF, fontSize: "1rem", fontWeight: 700, color: "#1a2010", margin: "0 0 4px 0" }}>{t.name}</h3>
                <p style={{ fontFamily: FONT, fontSize: "0.72rem", color: "#8aaa60", margin: "0 0 12px 0" }}>
                  {t.gpxDistance} &nbsp;·&nbsp; {t.gpxDuration}
                </p>
                <p style={{ fontFamily: FONT, fontSize: "0.65rem", color: "#aac080", margin: "0 0 14px 0" }}>Diperbarui: {t.gpxUpdated}</p>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg transition-all hover:brightness-110"
                  style={{ backgroundColor: GREEN, color: "white", border: "none", cursor: "pointer", fontFamily: FONT, fontSize: "0.78rem", fontWeight: 600 }}>
                  <Download size={14} /> Unduh GPX
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GPX INFO (dark) ── */}
      <section className="px-6 md:px-14 py-16" style={{ backgroundColor: "#111808" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: HF, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "white", margin: "0 0 14px 0" }}>Apa itu Peta GPX?</h2>
            <p style={{ fontFamily: FONT, fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "14px" }}>
              GPX (GPS Exchange Format) adalah format file standar yang menyimpan data koordinat GPS dalam bentuk waypoints, rute, dan trek. File GPX dapat dibuka di berbagai aplikasi navigasi offline sehingga kamu bisa mengikuti rute bahkan tanpa koneksi internet.
            </p>
            <p style={{ fontFamily: FONT, fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}>
              Peta GPX TNGR diperbarui secara berkala sesuai kondisi jalur terkini, memastikan kamu selalu mendapatkan informasi rute yang akurat dan aman.
            </p>
            {/* Icon box — Mobile · Navigation · Mountain */}
            <div
              className="flex items-center justify-center gap-8 mt-8 rounded-2xl"
              style={{
                backgroundColor: "rgba(176,206,136,0.08)",
                border: "1px solid rgba(176,206,136,0.15)",
                height: "120px",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              {/* Smartphone */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="11" y="4" width="18" height="32" rx="3" stroke="#B0CE88" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="30" r="1" fill="#B0CE88" />
              </svg>

              {/* Navigation arrow (smaller, semi-transparent) */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ opacity: 0.5 }}>
                <path d="M4 14L24 4L14 24L12 16L4 14Z" stroke="#B0CE88" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Mountain */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5 32L16 12L22 22L27 16L35 32H5Z" stroke="#B0CE88" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: HF, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "white", margin: "0 0 20px 0" }}>Cara Menggunakan Peta GPX</h2>
            {[
              { num: "01", title: "Unduh file gpx", desc: "Pilih jalur yang ingin didaki dan unduh file GPX dari halaman ini." },
              { num: "02", title: "Instal aplikasi navigasi", desc: "Gunakan Wikiloc, Gaia GPS, OsmAnd, atau Maps.me yang mendukung format GPX." },
              { num: "03", title: "Impor file GPX", desc: "Buka aplikasi dan impor file .gpx yang sudah diunduh ke dalam aplikasi." },
              { num: "04", title: "Aktifkan GPS dan mendaki", desc: "Aktifkan GPS perangkatmu dan mulai navigasi. Pastikan baterai penuh sebelum mendaki." },
            ].map((s) => (
              <div key={s.num} className="flex gap-4 mb-5">
                <span style={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 700, color: "#b5de4a", minWidth: "28px", paddingTop: "2px" }}>{s.num}</span>
                <div>
                  <p style={{ fontFamily: FONT, fontSize: "0.85rem", fontWeight: 600, color: "white", margin: "0 0 3px 0" }}>{s.title}</p>
                  <p style={{ fontFamily: FONT, fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const DARK = "#111808";
