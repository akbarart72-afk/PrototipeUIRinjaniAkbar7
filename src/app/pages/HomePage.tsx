import { useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { TrailSection } from "../components/TrailSection";
import { SafetySection } from "../components/SafetySection";
import { Footer } from "../components/Footer";
import { InfographicModal } from "../components/InfographicModal";
import type { SafetyItem } from "../components/InfographicModal";

export function HomePage() {
  const [activeModal, setActiveModal] = useState<SafetyItem | null>(null);
  return (
    <>
      <HeroSection />
      <TrailSection />
      <SafetySection onOpenModal={setActiveModal} />
      <Footer />
      {activeModal && (
        <InfographicModal item={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
