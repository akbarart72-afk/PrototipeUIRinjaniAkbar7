import { ArrowUpRight } from "lucide-react";
import type { SafetyItem, SafetyItemId } from "./InfographicModal";

const FONT = "'Plus Jakarta Sans', sans-serif";
const HEADING_FONT = "'Playfair Display', Georgia, serif";

/* ── Icon SVGs matching Container.png reference ── */

/* 1. Open book */
function IconAturan() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 18V5"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M3 16.5V4.5C3 4.5 6 3.5 11 5C16 3.5 19 4.5 19 4.5V16.5C19 16.5 16 15.5 11 17C6 15.5 3 16.5 3 16.5Z"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinejoin="round"
      />
    </svg>
  );
}

/* 2. Mountain with peak (perlengkapan/hiking) */
function IconPerlengkapan() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M2 18L8.5 7L12 12L15 9L20 18H2Z"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinejoin="round"
      />
      <circle cx="15.5" cy="5.5" r="2" stroke="#b5de4a" strokeWidth="1.5" />
    </svg>
  );
}

/* 3. Shield outline */
function IconKetentuan() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 2L3 5.5V11C3 15.4 6.4 19.5 11 20.5C15.6 19.5 19 15.4 19 11V5.5L11 2Z"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinejoin="round"
      />
    </svg>
  );
}

/* 4. Folded map */
function IconAlur() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M1 5L8 3L14 5L21 3V17L14 19L8 17L1 19V5Z"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinejoin="round"
      />
      <line x1="8" y1="3" x2="8" y2="17" stroke="#b5de4a" strokeWidth="1.5" />
      <line x1="14" y1="5" x2="14" y2="19" stroke="#b5de4a" strokeWidth="1.5" />
    </svg>
  );
}

/* 5. Broadcast / signal waves */
function IconDarurat() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="1.5" fill="#b5de4a" />
      <path
        d="M7.5 14.5A5 5 0 0 1 7.5 7.5"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M14.5 7.5A5 5 0 0 1 14.5 14.5"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M4.5 17.5A9 9 0 0 1 4.5 4.5"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M17.5 4.5A9 9 0 0 1 17.5 17.5"
        stroke="#b5de4a" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

const safetyItems: (SafetyItem & { icon: React.ReactNode })[] = [
  {
    id: "aturan" as SafetyItemId,
    title: "Aturan Wajib TNGR",
    description:
      "Setiap pendaki wajib mematuhi peraturan resmi TNGR. Ketidakpatuhan dapat berakibat larangan mendaki.",
    icon: <IconAturan />,
  },
  {
    id: "perlengkapan" as SafetyItemId,
    title: "Perlengkapan Standar",
    description:
      "Pastikan membawa perlengkapan yang sesuai standar keamanan pendakian gunung berapi tropis.",
    icon: <IconPerlengkapan />,
  },
  {
    id: "ketentuan" as SafetyItemId,
    title: "Ketentuan Khusus",
    description:
      "Beberapa area memiliki ketentuan khusus terkait perlindungan ekosistem dan zona konservasi.",
    icon: <IconKetentuan />,
  },
  {
    id: "alur" as SafetyItemId,
    title: "Alur Pendakian Aman",
    description:
      "Ikuti rute resmi yang telah ditetapkan TNGR. Jangan membuat jalur baru di luar rute resmi.",
    icon: <IconAlur />,
  },
  {
    id: "darurat" as SafetyItemId,
    title: "Panduan Darurat",
    description:
      "Pelajari prosedur darurat dan nomor kontak SAR sebelum memulai pendakian.",
    icon: <IconDarurat />,
  },
];

interface Props {
  onOpenModal: (item: SafetyItem) => void;
}

function SafetyCard({
  item,
  onOpen,
}: {
  item: typeof safetyItems[0];
  onOpen: () => void;
}) {
  return (
    <div
      className="flex flex-col p-5 rounded-xl cursor-pointer group"
      style={{
        backgroundColor: "#1c2a0e",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#223412";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(181,222,74,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "#1c2a0e";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
      }}
      onClick={onOpen}
    >
      {/* Icon container */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
        style={{ backgroundColor: "#263815" }}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3
        className="mb-2"
        style={{
          color: "white",
          fontSize: "0.95rem",
          fontWeight: 700,
          fontFamily: HEADING_FONT,
          lineHeight: 1.3,
          margin: "0 0 8px 0",
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="flex-1 mb-5"
        style={{
          color: "rgba(255,255,255,0.42)",
          fontSize: "0.75rem",
          lineHeight: 1.65,
          fontFamily: FONT,
          fontWeight: 400,
        }}
      >
        {item.description}
      </p>

      {/* CTA */}
      <button
        className="flex items-center gap-1 group/btn"
        style={{
          background: "none",
          border: "none",
          color: "#b5de4a",
          fontSize: "0.75rem",
          fontWeight: 700,
          cursor: "pointer",
          padding: 0,
          fontFamily: FONT,
        }}
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
      >
        Lihat Detail
        <ArrowUpRight
          size={13}
          strokeWidth={2.5}
          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      </button>
    </div>
  );
}

export function SafetySection({ onOpenModal }: Props) {
  return (
    <section className="py-20 px-6 md:px-14" style={{ backgroundColor: "#111808" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-2">
          {/* leaf icon */}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1C6 1 1 4 1 7.5C1 9.9 3.5 11 6 11C8.5 11 11 9.9 11 7.5C11 4 6 1 6 1Z"
              stroke="#b5de4a"
              strokeWidth="1"
              fill="none"
            />
            <path d="M6 11V5" stroke="#b5de4a" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <p
            className="uppercase tracking-widest"
            style={{
              color: "#b5de4a",
              fontSize: "0.6rem",
              fontFamily: FONT,
              fontWeight: 600,
              letterSpacing: "0.18em",
            }}
          >
            Keselamatan Pendaki
          </p>
        </div>

        {/* Heading */}
        <h2
          className="mb-2"
          style={{
            color: "white",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            fontFamily: HEADING_FONT,
            lineHeight: 1.1,
            letterSpacing: "0",
            margin: "0 0 10px 0",
          }}
        >
          Pendaki Aman, Alam Lestari
        </h2>

        <p
          className="mb-12"
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.85rem",
            fontFamily: FONT,
          }}
        >
          Pahami aturan dan persiapan sebelum memulai pendakian.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {safetyItems.map((item) => (
            <SafetyCard
              key={item.id}
              item={item}
              onOpen={() => onOpenModal(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
