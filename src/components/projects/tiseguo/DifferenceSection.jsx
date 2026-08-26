import { useTranslation } from "react-i18next";

export function DifferenceSection() {
  const { t } = useTranslation("tiseguo");

  return (
    <section id="differenza" className="bg-[#171918] text-[#f7f7f2]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <h2 className="mx-auto max-w-[980px] text-[clamp(2.7rem,5vw,5.3rem)] leading-[0.96] font-semibold tracking-[-0.065em] text-left text-balance">
          {t("difference.title")}
        </h2>

        <div className="mx-auto mt-14 max-w-[980px] space-y-7 text-left text-[clamp(1.25rem,2.1vw,1.9rem)] leading-[1.45] tracking-[-0.03em] text-[rgba(255,255,255,0.66)]">
          <p>{t("difference.paragraph1")}</p>
          <p>{t("difference.paragraph2")}</p>
          <p>{t("difference.paragraph3")}</p>
          <p>{t("difference.partnerParagraph")}</p>
          <p>
            {t("difference.integrationBefore")}{" "}
            <span className="inline rounded-[0.3em] bg-[#b9d9c0] px-[0.24em] py-[0.04em] font-semibold text-[#17392b] box-decoration-clone">
              {t("difference.highlight")}
            </span>
            {t("difference.paragraph4After")}
          </p>
        </div>
      </div>
    </section>
  );
}
