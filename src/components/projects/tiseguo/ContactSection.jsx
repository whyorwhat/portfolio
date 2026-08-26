import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation("tiseguo");

  return (
    <section id="contatti" className="bg-[#fafaf7]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <h2 className="text-center text-[clamp(2rem,3.2vw,3.35rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-balance sm:whitespace-nowrap">
          {t("contact.title")}
        </h2>
        <a
          rel="noopener noreferrer"
          href={"/contacts"}
          className="group inline-flex min-h-14 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-[#171918] px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#315f44] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171918] motion-reduce:transition-none"
        >
          {t("contact.button")}
          <ArrowUpRight
            aria-hidden="true"
            size={19}
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
          />
        </a>
      </div>
    </section>
  );
}
