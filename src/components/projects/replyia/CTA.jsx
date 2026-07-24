import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

export default function CTA({ id = "cta" }) {
    const { t } = useTranslation("whatsapp");

    return (
        <section
            id={id}
            className="py-16 px-6 sm:px-12 lg:px-20 text-center"
        >
            <h2 className="text-3xl font-bold mb-4">
                {t("cta.title")}
            </h2>

            <p className="text-lg text-gray-700 mb-6">
                {t("cta.desc")}
            </p>

            <a
                href="/contacts"
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
            >
                <span>{t("cta.button")}</span>
                <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                />
            </a>
        </section>
    );
}
