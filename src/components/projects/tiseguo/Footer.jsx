import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("tiseguo");

  return (
    <footer className="">
      <div className="mx-auto max-w-[1440px] px-5 py-12 text-center text-base text-black sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        {t("footer.text")}
      </div>
    </footer>
  );
}
