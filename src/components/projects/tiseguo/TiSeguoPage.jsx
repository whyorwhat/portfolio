import { useTranslation } from "react-i18next";
import { ContactSection } from "./ContactSection.jsx";
import { DifferenceSection } from "./DifferenceSection.jsx";
import { FeatureSection } from "./FeatureSection.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
import { Hero } from "./Hero.jsx";

export default function TiSeguoPage() {
  const { t } = useTranslation("tiseguo");

  return (
    <main className="min-h-screen bg-[#fafaf7] text-[#171918]">
      <Header />
      <Hero />
      <FeatureSection
        id="contesto"
        label={t("scenario.label")}
        tone="red"
        title={t("scenario.title")}
        description={t("scenario.description")}
        items={t("scenario.items", { returnObjects: true })}
      />
      <FeatureSection
        id="soluzione"
        label={t("approach.label")}
        tone="green"
        title={t("approach.title")}
        description={t("approach.description")}
        items={t("approach.items", { returnObjects: true })}
        muted
      />
      <DifferenceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
