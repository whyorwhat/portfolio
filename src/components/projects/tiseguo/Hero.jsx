import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation("tiseguo");

  return (
    <section className="relative flex min-h-[100svh] w-full overflow-hidden bg-[#eeece5] px-5 py-24 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-[rgba(239,157,114,0.18)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-36 -right-24 h-[480px] w-[480px] rounded-full bg-[#8eb39a]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-[13%] h-48 w-48 rounded-full border border-[rgba(23,25,24,0.07)] sm:h-72 sm:w-72"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[9%] right-[7%] h-64 w-64 rounded-full border border-[rgba(23,25,24,0.07)] sm:h-96 sm:w-96"
      />

      <div className="relative z-10 m-auto flex w-full max-w-[900px] flex-col items-center text-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/80 bg-[rgba(255,255,255,0.82)] shadow-[0_24px_70px_rgba(23,25,24,0.13)] backdrop-blur-md sm:h-32 sm:w-32 sm:rounded-[2.25rem]">
          <img
            src="/projects/tiseguo/brand-mark.webp"
            alt={t("brand.logoAlt")}
            width={76}
            height={76}
            className="h-[4.5rem] w-[4.5rem] object-contain sm:h-20 sm:w-20"
          />
        </div>

        <h1 className="mt-8 text-[clamp(4rem,9vw,8rem)] leading-[0.88] font-semibold tracking-[-0.075em]">
          Ti Seguo
        </h1>

        <p className="mt-9 max-w-4xl text-[clamp(1.25rem,2.15vw,2rem)] leading-[1.4] font-medium tracking-[-0.032em] text-[rgba(23,25,24,0.66)] text-balance">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
}
