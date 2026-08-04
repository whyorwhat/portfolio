// src/components/projects/whatsapp/WhatsappNavbar.jsx
import {useTranslation} from "react-i18next";

export default function ReplyiaNavbar() {
    const { t } = useTranslation("whatsapp");

    return (
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo / brand  */}
                <div className="flex items-center gap-3">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl">
                        <img
                            src="/projects/replyia/replyia_logo.png"
                            className="h-12 w-12 object-contain"
                            alt="Logo ReplyIA"
                        />
                    </div>
                    <div className="min-w-0">
                        <h1 className="text-xl font-extrabold leading-none tracking-tight text-gray-900">
                            Reply<span className="text-emerald-500">IA</span>
                        </h1>
                    </div>
                </div>

                {/* CTA scroll-link */}
                <a
                    href="#cta"
                    className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                    {t("navbar.contactsBtn")}
                </a>
            </div>
        </nav>
    );
}
