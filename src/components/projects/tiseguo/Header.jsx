import { Brand } from "./Brand";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation("tiseguo");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#171918]/10 bg-[rgba(238,236,229,0.82)] text-[#171918] backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Brand />
        <a
          href={"/contacts"}
          className="inline-flex h-10 items-center justify-center rounded-full bg-[#171918] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#343735] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171918] motion-reduce:transition-none sm:px-5"
        >
          {t("header.contact")}
        </a>
      </div>
    </header>
  );
}
