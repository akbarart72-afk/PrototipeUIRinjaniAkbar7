import { ChevronDown, Download, Compass } from "lucide-react";

const HEADING_FONT = "'Playfair Display', Georgia, serif";
const HERO_IMG =
  "https://images.unsplash.com/photo-1698267703889-06c41f9acba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaW5qYW5pJTIwbW91bnRhaW4lMjB2b2xjYW5vJTIwTG9tYm9rJTIwSW5kb25lc2lhfGVufDF8fHx8MTc4Mjk2ODczMXww&ixlib=rb-4.1.0&q=80&w=1080";

const FONT = "'Plus Jakarta Sans', sans-serif";

export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Gunung Rinjani" className="w-full h-full object-cover" />
        {/* Multi-stop gradient for realism */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,16,5,0.95) 0%, rgba(10,16,5,0.6) 40%, rgba(10,16,5,0.15) 70%, rgba(10,16,5,0.0) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,16,5,0.45) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-14 pb-24" style={{ maxWidth: "680px" }}>
        <p
          className="mb-5 tracking-widest uppercase"
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.62rem",
            fontFamily: FONT,
            letterSpacing: "0.18em",
          }}
        >
          Taman Nasional Gunung Rinjani
        </p>

        <h1
          className="mb-5"
          style={{
            color: "white",
            fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            fontFamily: HEADING_FONT,
            margin: 0,
          }}
        >
          Enam Jalur,
          <br />
          Satu Puncak
          <br />
          <em
            style={{
              color: "#b5de4a",
              fontStyle: "italic",
              fontWeight: 800,
            }}
          >
            Rinjani.
          </em>
        </h1>

        <p
          className="mb-10"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            fontFamily: FONT,
            maxWidth: "420px",
            fontWeight: 400,
          }}
        >
          Temukan jalur pendakian yang sesuai dengan kemampuan dan tujuanmu.
          Panduan lengkap, peta interaktif, dan informasi terkini resmi TNGR.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: "#3a7c1e",
              color: "white",
              fontSize: "0.82rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              fontFamily: FONT,
            }}
          >
            <Compass size={14} />
            Jelajahi Jalur
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all hover:bg-white/10 active:scale-95"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "0.82rem",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.28)",
              cursor: "pointer",
              fontFamily: FONT,
              backdropFilter: "blur(4px)",
            }}
          >
            <Download size={14} />
            Unduh Peta GPX
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <span
          style={{
            color: "rgba(255,255,255,0.38)",
            fontSize: "0.56rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: FONT,
          }}
        >
          Gulir ke Bawah
        </span>
        <ChevronDown size={14} color="rgba(255,255,255,0.38)" className="animate-bounce" />
      </div>
    </section>
  );
}
