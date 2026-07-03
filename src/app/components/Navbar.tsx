import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Beranda", to: "/" },
  { label: "Peta", to: "/peta" },
  { label: "Sejarah", to: "/sejarah" },
  { label: "Kontak", to: "/kontak" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  const showBg = scrolled || hovered || menuOpen;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10"
      style={{
        height: "60px",
        backgroundColor: showBg ? "#141e0a" : "transparent",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-center w-7 h-7 rounded-md" style={{ backgroundColor: "#3d7a1e" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 13L6 6l3 4 2-3 3 6H2z" fill="white" />
          </svg>
        </div>
        <span style={{ color: "white", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.01em" }}>
          Rinjani Trail
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              style={{
                color: isActive(link.to) ? "white" : "rgba(255,255,255,0.6)",
                fontSize: "0.82rem",
                fontWeight: isActive(link.to) ? 600 : 400,
                textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "color 0.15s",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col py-3 md:hidden"
          style={{ backgroundColor: "#141e0a", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-6 py-3"
              style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
