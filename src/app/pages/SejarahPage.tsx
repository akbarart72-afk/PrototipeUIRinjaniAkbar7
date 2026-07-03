import { Footer } from "../components/Footer";
import rinjaniImg from "../../imports/image.png";
import heroImg from "../../imports/image-1.png";

const FONT = "'Plus Jakarta Sans', sans-serif";
const HF = "'Playfair Display', Georgia, serif";
const GREEN = "#3a7c1e";
const DARK = "#111808";

// ── Timeline data ─────────────────────────────────────────────────────────────
const timeline = [
  {
    year: "Pra-1900",
    title: "Rinjani dalam Mitologi",
    desc: "Gunung Rinjani telah menjadi pusat kepercayaan spiritual masyarakat Sasak dan Wetu Telu jauh sebelum era modern. Dijurunnya sebagai tempat bersemayamnya Dewata Seda Naya, ruh tertinggi yang mengendalikan keseimbangan alam.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L3 5v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5L9 2z" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    year: "1945",
    title: "Dokumentasi Ilmiah",
    desc: "Ekspedisi ilmiah pertama oleh peneliti pasca-kemerdekaan mendokumentasikan flora, fauna, dan kondisi geologi Rinjani secara sistematis.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="3" y="2" width="12" height="14" rx="2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
        <path d="M6 7h6M6 10h6M6 13h4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    year: "1997",
    title: "Penetapan Taman Nasional",
    desc: "Gunung Rinjani ditetapkan sebagai Taman Nasional Gunung Rinjani (TNGR) melalui SK Menteri Kehutanan. Luas kawasan mencapai 40,523 hektar.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
        <path d="M6 9l2 2 4-4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    year: "2018",
    title: "Gempa & Pemulihan",
    desc: "Gempa bumi besar melanda Lombok, mempengaruhi kondisi fisik jalur pendakian. TNGR melakukan pemulihan dan revitalisasi jalur secara bertahap.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2v4M9 12v4M2 9h4M12 9h4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9" cy="9" r="3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    year: "2023",
    title: "Revitalisasi Jalur",
    desc: "Pembukaan kembali seluruh jalur resmi dengan program revitalisasi komprehensif. Fasilitas basecamp dan pos pendakian diperbaharui.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9a6 6 0 0 1 6-6 6 6 0 0 1 4.5 2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M15 9a6 6 0 0 1-6 6 6 6 0 0 1-4.5-2" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13.5 4.5l1.5-1.5v3h-3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    year: "2025",
    title: "Digitalisasi Informasi",
    desc: "Diluncurkan portal digital resmi untuk TNGR, mengintegrasikan data terinci, peta GPS, dan panduan keselamatan dalam satu platform.",
    isActive: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3" width="14" height="10" rx="2" stroke="white" strokeWidth="1.4" />
        <path d="M6 16h6M9 13v3" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9" cy="8" r="2" stroke="white" strokeWidth="1.4" />
      </svg>
    ),
  },
];

// ── Biodiversity data ──────────────────────────────────────────────────────────
const biodiversity = [
  {
    name: "Edelweis Jawa",
    latin: "Anaphalis javanica",
    badge: "ENDEMIC FLORA",
    badgeColor: "#3a7c1e",
    desc: "Edelweis bunga yang hanya tumbuh di gunung-gunung tinggi Indonesia, dapat ditemukan penuh di Puncak Rinjani.",
    img: "https://images.unsplash.com/photo-1767133891311-14c6e5330036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
  },
  {
    name: "Celepuk Rinjani",
    latin: "Otus jolandae",
    badge: "SATWA LANGKA",
    badgeColor: "#7a4010",
    desc: "Burung hantu endemis yang hanya ditemukan di Lombok. Fauna terancam punah yang sangat dilindungi.",
    img: "https://images.unsplash.com/photo-1553381262-018f39f580c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
  },
  {
    name: "Lutung Rinjani",
    latin: "Trachypithecus auratus",
    badge: "PRIMATA",
    badgeColor: "#1a5a6a",
    desc: "Primata endemis Pulau Lombok yang menjadi salah satu satwa kunci ekosistem kawasan TNGR.",
    img: "https://images.unsplash.com/photo-1669908057654-bac6cdbbcb43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
  },
  {
    name: "Elang Flores",
    latin: "Nisaetus floris",
    badge: "RAPTOR",
    badgeColor: "#5a1a7a",
    desc: "Salah satu raptor paling langka di Indonesia, masih dapat dijumpai di hutan-hutan pegunungan Rinjani.",
    img: "https://images.unsplash.com/photo-1643237664552-48fb2654b84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
  },
  {
    name: "Kijang Lombok",
    latin: "Muntiacus muntjak",
    badge: "SATWA LANGKA",
    badgeColor: "#7a4010",
    desc: "Satu dari beberapa kijang endemis Indonesia. Terdapat di hutan lebih rendah di kawasan TNGR.",
    img: "https://images.unsplash.com/photo-1771407505176-da4518a96af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
  },
  {
    name: "Paku Pohon",
    latin: "Cyathea spp.",
    badge: "ENDEMIC FLORA",
    badgeColor: "#3a7c1e",
    desc: "Tumbuhan pakis pohon yang dapat mencapai 10 meter. Tumbuh subur di hutan basah kawasan TNGR.",
    img: "https://images.unsplash.com/photo-1694508438010-45667fc37b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500",
  },
];

const RINJANI_AERIAL =
  "https://images.unsplash.com/photo-1698267703889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700";

export function SejarahPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: "60vh" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Kawah Gunung Rinjani dan Danau Segara Anak"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(8,14,4,0.95) 0%, rgba(8,14,4,0.55) 45%, rgba(8,14,4,0.15) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,14,4,0.4) 0%, transparent 60%)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-14 pb-16 pt-32 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div style={{ width: "24px", height: "1px", backgroundColor: "#b5de4a" }} />
            <span style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: "#b5de4a", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Warisan Alam &amp; Budaya
            </span>
          </div>
          <h1 style={{ fontFamily: HF, fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)", fontWeight: 800, color: "white", margin: "0 0 14px 0", lineHeight: 1.08, letterSpacing: "-0.01em" }}>
            Sejarah Gunung Rinjani
          </h1>
          <p style={{ fontFamily: FONT, fontSize: "0.92rem", color: "rgba(255,255,255,0.6)", margin: "0 0 6px 0", lineHeight: 1.6, maxWidth: "480px" }}>
            Dari legenda Sasak hingga Taman Nasional Internasional
          </p>
          <p style={{ fontFamily: FONT, fontSize: "0.8rem", color: "rgba(255,255,255,0.38)", margin: 0, letterSpacing: "0.02em" }}>
            Rinjani · 3,726 mdpl · Lombok, Indonesia
          </p>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="px-6 md:px-14 py-14" style={{ backgroundColor: "#f8fdf2" }}>
        <div className="max-w-3xl mx-auto">
          <blockquote style={{ margin: 0, padding: "0 0 0 20px", borderLeft: `3px solid #c0de90` }}>
            <p style={{
              fontFamily: HF,
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              fontStyle: "italic",
              color: "#2a3a18",
              lineHeight: 1.8,
              margin: 0,
            }}>
              "Gunung Rinjani bukan sekadar gunung. Ia adalah ruh dan identitas masyarakat Lombok
              — saksi bisu peradaban yang terus berdiri kokoh menenbus awan, menyimpan rahasia
              bumi yang jutaan tahun terbentuk."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── TIMELINE (dark section) ── */}
      <section className="px-6 md:px-14 py-14" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: "#b5de4a", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 4px 0" }}>
            Lembaran Rinjani
          </p>
          <h2 style={{ fontFamily: HF, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "white", margin: "0 0 36px 0", lineHeight: 1.1 }}>
            Perjalanan Panjang Sang Puncak
          </h2>

          <div className="relative max-w-2xl">
            {/* vertical line */}
            <div className="absolute" style={{ left: "19px", top: "24px", bottom: "24px", width: "2px", backgroundColor: "rgba(255,255,255,0.1)" }} />

            <div className="flex flex-col gap-5">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-5 relative">
                  {/* Circle icon */}
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 z-10"
                    style={{
                      backgroundColor: item.isActive ? GREEN : "#1e2d10",
                      border: `2px solid ${item.isActive ? "#b5de4a" : "rgba(255,255,255,0.12)"}`,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-xl p-5"
                    style={{
                      backgroundColor: item.isActive ? "rgba(58,124,30,0.12)" : "#192410",
                      border: `1px solid ${item.isActive ? "rgba(181,222,74,0.25)" : "rgba(255,255,255,0.06)"}`,
                    }}
                  >
                    <span style={{ fontFamily: FONT, fontSize: "0.62rem", fontWeight: 700, color: item.isActive ? "#b5de4a" : "#6a9a4a", letterSpacing: "0.1em" }}>
                      {item.year}
                    </span>
                    <h3 style={{ fontFamily: HF, fontSize: "1rem", fontWeight: 700, color: "white", margin: "4px 0 6px 0", lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: FONT, fontSize: "0.78rem", color: "rgba(255,255,255,0.48)", lineHeight: 1.7, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RINJANI DALAM BUDAYA SASAK ── */}
      <section className="px-6 md:px-14 py-16" style={{ backgroundColor: "#f5faea" }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: GREEN, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 4px 0" }}>
            Budaya &amp; Sasak
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-2">
            {/* Text */}
            <div>
              <h2 style={{ fontFamily: HF, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1a2010", margin: "0 0 18px 0", lineHeight: 1.15 }}>
                Rinjani dalam Budaya<br />Sasak
              </h2>
              <p style={{ fontFamily: FONT, fontSize: "0.85rem", color: "#4a6030", lineHeight: 1.85, marginBottom: "14px" }}>
                Bagi masyarakat Sasak, Gunung Rinjani bukan sekadar gunung biasa. Dalam kepercayaan Wetu Telu, gunung ini dilihat sebagai manifestasi fisik dan dunia spiritual. Dalam kepercayaan ini, gunung ini dipercayai sebagai tempat bersemayamnya Dewata Seda Naya, ruh tertinggi yang mengendalikan keseimbangan alam.
              </p>
              <p style={{ fontFamily: FONT, fontSize: "0.85rem", color: "#4a6030", lineHeight: 1.85, marginBottom: "14px" }}>
                Tradisi melempar gelang ke Danau Segara Anak masih dilakukan hingga kini sebagai ungkapan rasa syukur dan permohonan restu kepada Upcara Mulang Pakelem, sebuah ritual yang penuh makna menghubungkan manusia dan gunung.
              </p>
              <p style={{ fontFamily: FONT, fontSize: "0.85rem", color: "#4a6030", lineHeight: 1.85 }}>
                Nama "Rinjani" sendiri berasal dari bahasa Kawi kuno yang berarti "raja" atau "penguasa" — mencerminkan posisi gunung ini sebagai pusat gravitasi budaya dan spiritual seluruh Pulau Lombok.
              </p>
            </div>

            {/* Circular image */}
            <div className="flex items-center justify-center">
              <div
                className="overflow-hidden"
                style={{
                  width: "clamp(260px, 40vw, 400px)",
                  height: "clamp(260px, 40vw, 400px)",
                  borderRadius: "50%",
                  border: "5px solid #d0e8a0",
                  boxShadow: "0 8px 40px rgba(58,124,30,0.15)",
                }}
              >
                <img
                  src={rinjaniImg}
                  alt="Gunung Rinjani Lombok"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEANEKARAGAMAN HAYATI ── */}
      <section className="px-6 md:px-14 py-16" style={{ backgroundColor: DARK }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: "#b5de4a", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 4px 0" }}>
            Biodiversitas
          </p>
          <h2 style={{ fontFamily: HF, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "white", margin: "0 0 6px 0" }}>
            Keanekaragaman Hayati
          </h2>
          <p style={{ fontFamily: FONT, fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", margin: "0 0 28px 0", maxWidth: "520px" }}>
            TNGR menjadi rumah bagi ratusan spesies flora dan fauna, termasuk banyak di antaranya yang bersifat endemik dan terancam punah.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {biodiversity.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "#0d1508",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.88 }}
                  />
                  {/* Badge */}
                  <span
                    className="absolute bottom-3 left-3 px-2 py-0.5 rounded-sm"
                    style={{
                      backgroundColor: item.badgeColor,
                      color: "white",
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      fontFamily: FONT,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 style={{ fontFamily: HF, fontSize: "0.95rem", fontWeight: 700, color: "white", margin: "0 0 2px 0" }}>
                    {item.name}
                  </h3>
                  <p style={{ fontFamily: FONT, fontSize: "0.65rem", color: "#b5de4a", fontStyle: "italic", margin: "0 0 8px 0" }}>
                    {item.latin}
                  </p>
                  <p style={{ fontFamily: FONT, fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEOLOGI ── */}
      <section className="px-6 md:px-14 py-16" style={{ backgroundColor: "#f5faea" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mountain cross-section SVG */}
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "#e8f3d4", border: "1px solid #d0e8b0", padding: "32px", aspectRatio: "4/3" }}
            >
              <svg viewBox="0 0 360 280" width="100%" style={{ display: "block" }}>
                {/* Sky */}
                <rect width="360" height="280" fill="#e8f3d4" rx="12" />

                {/* Mountain body */}
                <polygon points="180,20 30,220 330,220" fill="#c0e090" />
                <polygon points="180,20 90,220 270,220" fill="#a8d070" />
                <polygon points="180,20 130,220 230,220" fill="#90c058" />

                {/* Caldera rim */}
                <ellipse cx="180" cy="120" rx="52" ry="20" fill="none" stroke={GREEN} strokeWidth="1.8" strokeDasharray="5 3" />

                {/* Caldera label */}
                <text x="180" y="108" textAnchor="middle" fontSize="9" fill={GREEN} fontFamily={FONT} fontWeight="700">Kaldera</text>
                <text x="180" y="118" textAnchor="middle" fontSize="7.5" fill="#5a8a40" fontFamily={FONT}>6 × 8.5 km</text>

                {/* Danau Segara Anak */}
                <ellipse cx="160" cy="148" rx="28" ry="12" fill="#7ab8d8" opacity="0.7" />
                <text x="160" y="152" textAnchor="middle" fontSize="6" fill="#1a5070" fontFamily={FONT} fontWeight="600">Segara Anak</text>

                {/* Gunung Baru Jari */}
                <polygon points="200,120 188,148 212,148" fill="#8ab850" />
                <text x="204" y="115" fontSize="6" fill="#3a6010" fontFamily={FONT}>Gn. Baru</text>

                {/* Elevation label */}
                <text x="180" y="16" textAnchor="middle" fontSize="8" fill={GREEN} fontFamily={FONT} fontWeight="700">3,726 mdpl</text>

                {/* Base line */}
                <line x1="30" y1="220" x2="330" y2="220" stroke="#8aaa60" strokeWidth="1.5" />

                {/* Layer indicators */}
                {[["Lava", "230"], ["Piroklastik", "242"], ["Batuan Dasar", "254"]].map(([label, y]) => (
                  <g key={label}>
                    <line x1="100" y1={Number(y)} x2="260" y2={Number(y)} stroke="#aad080" strokeWidth="0.8" strokeDasharray="4 3" />
                    <text x="265" y={Number(y) + 3} fontSize="6" fill="#6a9a4a" fontFamily={FONT}>{label}</text>
                  </g>
                ))}

                {/* Title */}
                <text x="180" y="272" textAnchor="middle" fontSize="8" fill="#5a7040" fontFamily={FONT}>Penampang Stratigrafis Gunung Rinjani</text>
              </svg>
            </div>

            {/* Text */}
            <div>
              <p style={{ fontFamily: FONT, fontSize: "0.6rem", fontWeight: 600, color: GREEN, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 4px 0" }}>
                Geologi
              </p>
              <h2 style={{ fontFamily: HF, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1a2010", margin: "0 0 16px 0", lineHeight: 1.15 }}>
                Geologi &amp; Pembentukan
              </h2>
              <p style={{ fontFamily: FONT, fontSize: "0.85rem", color: "#4a6030", lineHeight: 1.85, marginBottom: "14px" }}>
                Gunung Rinjani adalah stratovolkano aktif yang terbentuk sekitar 15 juta tahun lalu melalui aktivitas lempeng tektonik dan material piroklastik. Kaldera Rinjani memiliki diameter sekitar 6×8,5 km, salah satu yang terbesar di Indonesia.
              </p>
              <p style={{ fontFamily: FONT, fontSize: "0.85rem", color: "#4a6030", lineHeight: 1.85 }}>
                Di dalam kaldera terdapat Danau Segara Anak pada ketinggian sekitar 2,008 mdpl, dengan diameter sekitar 8 km. Erupsi terkini memunculkan kerucut gunung berapi baru bernama Gunung Baru Jari yang masih aktif hingga saat ini — menjadikan Rinjani salah satu gunung berapi paling dinamis yang masih bisa dipanjat di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
