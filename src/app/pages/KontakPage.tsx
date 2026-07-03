import { MapPin, Phone, Mail, Clock, AlertTriangle, ExternalLink } from "lucide-react";
import heroImg from "../../imports/joshua-kettle-weYdqqOmItU-unsplash.jpg";
import { Footer } from "../components/Footer";

const FONT = "'Plus Jakarta Sans', sans-serif";
const HF = "'Playfair Display', Georgia, serif";
const GREEN = "#3a7c1e";
const DARK = "#111808";

export function KontakPage() {
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
            <span style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: "#b5de4a", letterSpacing: "0.18em", textTransform: "uppercase" }}>Hubungi Kami</span>
          </div>
          <h1 style={{ fontFamily: HF, fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "white", margin: "0 0 10px 0", lineHeight: 1.1 }}>
            Hubungi TNGR
          </h1>
          <p style={{ fontFamily: FONT, fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", margin: 0 }}>
            Kami siap membantu rencana pendakianmu
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-6 md:px-14 py-14" style={{ backgroundColor: "#f5faea" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT: Kantor + Kontak Darurat */}
            <div className="flex flex-col gap-8">
              {/* Kantor Pusat */}
              <div>
                <h2 style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: "#1a2010", margin: "0 0 16px 0" }}>Kantor Pusat TNGR</h2>
                <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid #e4f0d0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  {[
                    {
                      icon: <MapPin size={16} color={GREEN} />,
                      label: "Alamat Kantor",
                      value: "Jl. Raya Sembalun, Sembalun Lawang,\nKab. Lombok Timur, NTB 83662",
                    },
                    {
                      icon: <Phone size={16} color={GREEN} />,
                      label: "Nomor Telepon",
                      value: "+62 376 21 685",
                    },
                    {
                      icon: <Mail size={16} color={GREEN} />,
                      label: "Email Resmi",
                      value: "tngr@menlhk.go.id",
                    },
                    {
                      icon: <Clock size={16} color={GREEN} />,
                      label: "Jam Operasional",
                      value: "Senin — Jumat: 08.00 — 16.00 WITA\nSabtu: 08.00 — 13.00 WITA",
                    },
                  ].map((item, i, arr) => (
                    <div key={i} className="flex gap-4 px-6 py-4" style={{ borderBottom: i < arr.length - 1 ? "1px solid #f0f8e8" : "none" }}>
                      <div className="flex items-center justify-center w-9 h-9 rounded-full shrink-0" style={{ backgroundColor: "#e8f5d0" }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ fontFamily: FONT, fontSize: "0.62rem", color: GREEN, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 3px 0" }}>{item.label}</p>
                        <p style={{ fontFamily: FONT, fontSize: "0.85rem", color: "#1a2010", margin: 0, whiteSpace: "pre-line", lineHeight: 1.6 }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kontak Darurat */}
              <div>
                <h2 style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: "#1a2010", margin: "0 0 16px 0" }}>Kontak Darurat Pendakian</h2>
                <div className="rounded-2xl p-5" style={{ backgroundColor: "#1a2a0e" }}>
                  <div className="flex items-center gap-2 mb-5 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <AlertTriangle size={14} color="#f59e0b" />
                    <span style={{ fontFamily: FONT, fontSize: "0.72rem", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>Hubungi dalam situasi darurat saat mendaki</span>
                  </div>
                  {[
                    { icon: <Phone size={16} color="#b5de4a" />, label: "Posko SAR Rinjani", value: "+62 376 21 XXX", mono: true },
                    { icon: <span style={{ fontFamily: FONT, fontSize: "0.65rem", color: "#b5de4a", fontWeight: 700 }}>((·))</span>, label: "Frekuensi Radio", value: "162.550 MHz", mono: true },
                    { icon: <Phone size={16} color="#b5de4a" />, label: "Basarnas Lombok", value: "+62 370 63XXXXX", mono: true },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 mb-4 last:mb-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: "#263815" }}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={{ fontFamily: FONT, fontSize: "0.62rem", color: "#b5de4a", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 2px 0" }}>{item.label}</p>
                        <p style={{ fontFamily: item.mono ? "monospace" : FONT, fontSize: "1rem", color: "white", fontWeight: 700, margin: 0, letterSpacing: item.mono ? "0.05em" : 0 }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Map */}
            <div className="flex flex-col gap-4">
              <h2 style={{ fontFamily: HF, fontSize: "1.5rem", fontWeight: 700, color: "#1a2010", margin: 0 }}>Lokasi Kantor</h2>
              <div className="rounded-2xl overflow-hidden flex-1" style={{ minHeight: "380px", backgroundColor: "#e8f3d4", border: "1px solid #d0e8b0" }}>
                <svg width="100%" height="100%" viewBox="0 0 400 340" style={{ display: "block" }}>
                  <rect width="400" height="340" fill="#e8f3d4" />
                  {/* grid */}
                  {[1, 2, 3, 4, 5].map((n) => (
                    <line key={`h${n}`} x1={0} y1={n * 56} x2={400} y2={n * 56} stroke="#c8e0a4" strokeWidth="0.8" />
                  ))}
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <line key={`v${n}`} x1={n * 57} y1={0} x2={n * 57} y2={340} stroke="#c8e0a4" strokeWidth="0.8" />
                  ))}
                  {/* Road - Jl. Raya Sembalun */}
                  <line x1={0} y1={200} x2={400} y2={200} stroke="#d0d8c0" strokeWidth="8" />
                  <text x={80} y={196} fontSize="9" fill="#8aaa60" fontFamily={FONT}>Jl. Raya Sembalun</text>
                  {/* Vertical road */}
                  <line x1={220} y1={0} x2={220} y2={340} stroke="#d8e8c8" strokeWidth="5" />
                  {/* Compass N */}
                  <text x={375} y={22} fontSize="12" fill="#3a7c1e" fontFamily={FONT} fontWeight="700">N</text>
                  <line x1={381} y1={24} x2={381} y2={34} stroke={GREEN} strokeWidth="1.5" />
                  {/* TNGR marker */}
                  <circle cx={220} cy={200} r={14} fill={GREEN} />
                  <circle cx={220} cy={200} r={6} fill="white" />
                  {/* Info bubble */}
                  <rect x={120} y={218} width={120} height={40} rx={6} fill="white" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))" />
                  <text x={180} y={234} textAnchor="middle" fontSize="8" fill="#1a2010" fontFamily={FONT} fontWeight="700">Kantor TNGR</text>
                  <text x={180} y={248} textAnchor="middle" fontSize="7" fill="#8aaa60" fontFamily={FONT}>Sembalun Lawang, Lombok Timur</text>
                </svg>
              </div>
              <button
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl w-full transition-all hover:brightness-110"
                style={{ backgroundColor: GREEN, color: "white", border: "none", cursor: "pointer", fontFamily: FONT, fontSize: "0.85rem", fontWeight: 600 }}
              >
                <MapPin size={15} />
                Buka di Google Maps
                <ExternalLink size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
