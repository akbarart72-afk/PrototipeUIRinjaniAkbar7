import { X } from "lucide-react";
import { motion } from "motion/react";

import aturanTngr from "../../imports/aturan_tngr.png";
import perlengkapanWajib from "../../imports/perlengkapan_wajib.png";
import ketentuanKhusus from "../../imports/ketentuan_khusus.png";
import alurPendakian from "../../imports/alur_pendakian.png";
import kondisiDarurat from "../../imports/kondisi_darurat.png";

export type SafetyItemId =
  | "aturan"
  | "perlengkapan"
  | "ketentuan"
  | "alur"
  | "darurat";

export interface SafetyItem {
  id: SafetyItemId;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const infographicMap: Record<SafetyItemId, string> = {
  aturan: aturanTngr,
  perlengkapan: perlengkapanWajib,
  ketentuan: ketentuanKhusus,
  alur: alurPendakian,
  darurat: kondisiDarurat,
};

interface Props {
  item: SafetyItem;
  onClose: () => void;
}

export function InfographicModal({ item, onClose }: Props) {
  const imgSrc = infographicMap[item.id];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{ maxWidth: "480px", width: "100%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-full w-9 h-9 shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <X size={18} color="white" />
        </button>
        <img
          src={imgSrc}
          alt={item.title}
          className="w-full block rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
