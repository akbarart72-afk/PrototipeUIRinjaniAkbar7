import { ArrowRight, Clock, MapPin, Triangle } from "lucide-react";
import { Link } from "react-router";

const HEADING_FONT = "'Playfair Display', Georgia, serif";

import imgSembalun from "../../imports/jalur_semablun.jpg";
import imgSenaru from "../../imports/jalur_senaru_1.jpg";
import imgTorean from "../../imports/jalur_torean.jpg";
import imgAikBerik from "../../imports/Rinjani_Via_Aik_Berik8_1.jpg";
import imgTimbanuh from "../../imports/jalur_timbanuh_1_1.jpg";
import imgTeteBatu from "../../imports/jalur_tetebatu_1.jpg";

const FONT = "'Plus Jakarta Sans', sans-serif";

interface Trail {
  id: string;
  name: string;
  location: string;
  elevation: string;
  distance: string;
  duration: string;
  description: string;
  status: "BUKA" | "TUTUP";
  image: string;
}

const trails: Trail[] = [
  {
    id: "sembalun",
    name: "Jalur Sembalun",
    location: "Sembalun Lawang, Lombok Timur",
    elevation: "3,726m",
    distance: "15 km",
    duration: "3-4 Hari",
    description:
      "Jalur paling populer via padang savana luas dengan pemandangan 360 derajat.",
    status: "BUKA",
    image: imgSembalun,
  },
  {
    id: "senaru",
    name: "Jalur Senaru",
    location: "Senaru, Lombok Utara",
    elevation: "2,641m",
    distance: "10 km",
    duration: "2-3 Hari",
    description:
      "Jalur hutan lebat melewati keanekaragaman hayati luar biasa menuju pijawatan senaru.",
    status: "BUKA",
    image: imgSenaru,
  },
  {
    id: "torean",
    name: "Jalur Torean",
    location: "Torean, Lombok Utara",
    elevation: "2,000m",
    distance: "12,5 km",
    duration: "3-4 Hari",
    description:
      "Jalur dengan lembah dan tebing yang indah, dilengkapi dengan air terjun.",
    status: "BUKA",
    image: imgTorean,
  },
  {
    id: "aik-berik",
    name: "Jalur Aik Berik",
    location: "Aik Berik, Lombok Tengah",
    elevation: "2,500m",
    distance: "12 km",
    duration: "2-3 Hari",
    description:
      "Jalur tenang melewati perkebunan kopi dan padang edelweis yang memukau.",
    status: "BUKA",
    image: imgAikBerik,
  },
  {
    id: "timbanuh",
    name: "Jalur Timbanuh",
    location: "Timbanuh, Lombok Timur",
    elevation: "2,820m",
    distance: "10.5 km",
    duration: "2-3 Hari",
    description:
      "Jalur dengan hutan tropis asri, padang savana serta panorama magis Danau Segara Anak dari Puncak Selatan.",
    status: "BUKA",
    image: imgTimbanuh,
  },
  {
    id: "tete-batu",
    name: "Jalur Tete Batu",
    location: "Tete Batu, Lombok Timur",
    elevation: "3,200m",
    distance: "16 km",
    duration: "3-4 Hari",
    description:
      "Jalur terpanjang melewati kampung pencil dan hutan primordial yang autentik.",
    status: "BUKA",
    image: imgTeteBatu,
  },
];

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 flex-1">
      <div style={{ color: "#4a8c2a", marginBottom: "2px" }}>{icon}</div>
      <span
        style={{
          color: "#1a2010",
          fontSize: "0.85rem",
          fontWeight: 700,
          fontFamily: FONT,
        }}
      >
        {value}
      </span>
      <span
        style={{
          color: "#8aaa60",
          fontSize: "0.65rem",
          fontFamily: FONT,
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function TrailCard({ trail }: { trail: Trail }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col group"
      style={{
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)";
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <img
          src={trail.image}
          alt={trail.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* BUKA badge */}
        <span
          className="absolute top-3 right-3 px-2.5 py-0.5 rounded-sm"
          style={{
            backgroundColor: trail.status === "BUKA" ? "#3a7c1e" : "#b91c1c",
            color: "white",
            fontSize: "0.6rem",
            fontWeight: 700,
            fontFamily: FONT,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {trail.status}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Name */}
        <h3
          style={{
            color: "#1a2010",
            fontSize: "1rem",
            fontWeight: 700,
            fontFamily: HEADING_FONT,
            margin: "0 0 4px 0",
            lineHeight: 1.3,
          }}
        >
          {trail.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 mb-4">
          <MapPin size={11} color="#7aaa4a" strokeWidth={2} />
          <span
            style={{
              color: "#7aaa4a",
              fontSize: "0.72rem",
              fontFamily: FONT,
              fontWeight: 400,
            }}
          >
            {trail.location}
          </span>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center mb-4 pb-4"
          style={{ borderBottom: "1px solid #eaf3d8" }}
        >
          <StatItem
            icon={<Triangle size={12} strokeWidth={2} />}
            value={trail.elevation}
            label="Elevasi"
          />
          <div style={{ width: "1px", height: "28px", backgroundColor: "#eaf3d8" }} />
          <StatItem
            icon={<MapPin size={12} strokeWidth={2} />}
            value={trail.distance}
            label="Jarak"
          />
          <div style={{ width: "1px", height: "28px", backgroundColor: "#eaf3d8" }} />
          <StatItem
            icon={<Clock size={12} strokeWidth={2} />}
            value={trail.duration}
            label="Waktu"
          />
        </div>

        {/* Description */}
        <p
          className="flex-1 mb-4"
          style={{
            color: "#627a44",
            fontSize: "0.78rem",
            lineHeight: 1.65,
            fontFamily: FONT,
            fontWeight: 400,
          }}
        >
          {trail.description}
        </p>

        {/* CTA */}
        <Link
          to={`/jalur/${trail.id}`}
          className="flex items-center gap-1.5 group/btn"
          style={{
            color: "#3a7c1e",
            fontSize: "0.78rem",
            fontWeight: 700,
            textDecoration: "none",
            fontFamily: FONT,
          }}
        >
          Lihat Detail
          <ArrowRight
            size={13}
            strokeWidth={2.5}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}

export function TrailSection() {
  return (
    <section className="py-20 px-6 md:px-14" style={{ backgroundColor: "#dff0c4" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p
          className="mb-2 uppercase tracking-widest"
          style={{
            color: "#4a8c2a",
            fontSize: "0.62rem",
            fontFamily: FONT,
            fontWeight: 600,
            letterSpacing: "0.18em",
          }}
        >
          Jalur Resmi Pendakian
        </p>

        {/* Heading */}
        <h2
          className="mb-3"
          style={{
            color: "#1a2010",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            fontFamily: HEADING_FONT,
            lineHeight: 1.1,
            letterSpacing: "0",
            margin: "0 0 12px 0",
          }}
        >
          Pilih Jalurmu
        </h2>

        <p
          className="mb-12"
          style={{
            color: "#5a7040",
            fontSize: "0.88rem",
            fontFamily: FONT,
            lineHeight: 1.6,
            maxWidth: "380px",
          }}
        >
          Setiap jalur memiliki karakteristik unik. Rencanakan pendakianmu dengan
          bijak.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      </div>
    </section>
  );
}
