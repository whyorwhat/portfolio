import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import vittoriaLogo from "@/assets/vittoria_logo.png";

const PARTNER_URL = "https://www.vittoriaassicurazioniluino.com/";
const PARTNER_NAME = "Vittoria Assicurazioni Luino";

export default function PartnerSection() {
    const { t } = useTranslation("whatsapp");

    return (
        <section
            className="border-y border-gray-200 bg-gray-50 px-6 py-8 sm:px-12"
            aria-labelledby="partner-title"
        >
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
                <p id="partner-title" className="text-sm text-gray-600 sm:text-base">
                    {t("partner.label")}
                </p>

                <a
                    href={PARTNER_URL}
                    className="group inline-flex items-center gap-2 font-semibold text-gray-900 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("partner.ariaLabel", { partner: PARTNER_NAME })}
                >
                    <img
                        src={vittoriaLogo}
                        alt=""
                        className="h-10 w-10 rounded-md object-cover"
                    />
                    <span>{PARTNER_NAME}</span>
                    <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                </a>
            </div>
        </section>
    );
}
