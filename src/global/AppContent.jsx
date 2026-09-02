import { Routes, Route, useLocation } from "react-router-dom";
import HomeView from "@/views/HomeView.jsx";
import Footer from "@/global/Footer.jsx";
import Navbar from "@/global/Navbar.jsx";
import AboutMeView from "@/views/AboutMeView.jsx";
import ProjectsView from "@/views/ProjectsView.jsx";
import ContactsView from "@/views/ContactsView.jsx";
import TiSeguoView from "@/views/projects/TiSeguoView.jsx";
import CustomerRadarView from "@/views/projects/CustomerRadarView.jsx";
import ReplyiaView from "@/views/projects/ReplyiaView.jsx";
import AnimateOnLang from "@/global/multiLang/AnimateOnLang.jsx";

export default function AppContent() {
    const location = useLocation();
    const hasProjectFooter = location.pathname === "/ti-seguo";
    const isHomePage = location.pathname === "/";

    return (
        <div className="flex min-h-[100svh] flex-col bg-[var(--color-background)] font-sans text-slate-100">
            <Navbar />

            <main className={isHomePage ? "flex flex-grow" : "flex-grow"}>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/me" element={<AboutMeView />} />
                    <Route path="/projects" element={<ProjectsView />} />
                    <Route path="/contacts" element={<ContactsView />} />
                    <Route
                        path="/ti-seguo"
                        element={
                            <AnimateOnLang id="tiseguo">
                                <TiSeguoView />
                            </AnimateOnLang>
                        }
                    />
                    <Route path="/customer-radar" element={<CustomerRadarView />} />
                    <Route
                        path="/replyia"
                        element={
                            <AnimateOnLang id="replyia">
                                <ReplyiaView />
                            </AnimateOnLang>
                        }
                    />
                </Routes>
            </main>

            {!hasProjectFooter && <Footer light={location.pathname === "/replyia"} />}
        </div>
    );
}
