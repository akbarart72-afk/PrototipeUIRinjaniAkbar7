import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router";

const FONT = "'Plus Jakarta Sans', sans-serif";
const HEADING_FONT = "'Playfair Display', Georgia, serif";

const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "6 Jalur Pendakian", to: "/" },
  { label: "Peta Interaktif", to: "/peta" },
  { label: "Sejarah Rinjani", to: "/sejarah" },
  { label: "Panduan Keselamatan", to: "/" },
  { label: "Kontak TNGR", to: "/kontak" },
];

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-white/10"
      style={{
        backgroundColor: "#1e2d10",
        border: "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
        color: "rgba(255,255,255,0.55)",
      }}
    >
      {children}
    </button>
  );
}

/* Simple social SVG icons */
function IgIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YtIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="none" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0c1507" }}>
      <div
        className="max-w-6xl mx-auto px-6 md:px-14 pt-14 pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4" style={{ textDecoration: "none" }}>
              <div
                className="flex items-center justify-center w-7 h-7 rounded-md"
                style={{ backgroundColor: "#3d7a1e" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 13L6 6l3 4 2-3 3 6H2z" fill="white" />
                </svg>
              </div>
              <span
                style={{
                  color: "white",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  fontFamily: FONT,
                }}
              >
                Rinjani Trail
              </span>
            </Link>

            <p
              className="mb-5"
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: "0.78rem",
                lineHeight: 1.7,
                fontFamily: FONT,
                maxWidth: "220px",
              }}
            >
              Portal informasi 6 Jalur Pendakian Gunung Rinjani: Temukan Rute
              Terbaik Menuju Puncak
            </p>

            <div className="flex items-center gap-2">
              <SocialIcon><IgIcon /></SocialIcon>
              <SocialIcon><FbIcon /></SocialIcon>
              <SocialIcon><YtIcon /></SocialIcon>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-4"
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 700,
                fontFamily: HEADING_FONT,
              }}
            >
              Navigasi Cepat
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    style={{
                      color: "rgba(255,255,255,0.42)",
                      fontSize: "0.78rem",
                      textDecoration: "none",
                      fontFamily: FONT,
                      fontWeight: 400,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="mb-4"
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 700,
                fontFamily: HEADING_FONT,
              }}
            >
              Informasi TNGR
            </p>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} color="#b5de4a" className="mt-0.5 shrink-0" />
                <span
                  style={{
                    color: "rgba(255,255,255,0.42)",
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                    fontFamily: FONT,
                  }}
                >
                  Jl. Raya Sembalun, Sembalun Lawang,
                  <br />
                  Kab. Lombok Timur, NTB 83662
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} color="#b5de4a" className="shrink-0" />
                <span
                  style={{
                    color: "rgba(255,255,255,0.42)",
                    fontSize: "0.75rem",
                    fontFamily: FONT,
                  }}
                >
                  +62 376 21 685
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} color="#b5de4a" className="shrink-0" />
                <span
                  style={{
                    color: "rgba(255,255,255,0.42)",
                    fontSize: "0.75rem",
                    fontFamily: FONT,
                  }}
                >
                  tngr@menlhk.go.id
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={13} color="#b5de4a" className="mt-0.5 shrink-0" />
                <span
                  style={{
                    color: "rgba(255,255,255,0.42)",
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                    fontFamily: FONT,
                  }}
                >
                  Sen–Jum: 08.00–16.00 WITA
                  <br />
                  Sabtu: 08.00–13.00 WITA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.22)",
              fontSize: "0.7rem",
              fontFamily: FONT,
            }}
          >
            © 2025 Taman Nasional Gunung Rinjani. Seluruh informasi bersifat
            resmi dan informatif.
          </p>
        </div>
      </div>
    </footer>
  );
}
