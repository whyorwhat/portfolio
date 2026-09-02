import { FaPaperPlane, FaQuoteLeft, FaTerminal } from "react-icons/fa";
import GradientText from "@/components/home/GradientText.jsx";
import AsciiWelcome from "@/components/home/AsciiWelcome.jsx";
import FancyButton from "@/components/elements/FancyButton.jsx";

export default function HeaderHome() {
    return (
        <header className="w-full px-4 py-6 text-center sm:py-10 lg:py-20">
            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center justify-items-center gap-y-6 sm:gap-y-10 lg:grid-cols-[minmax(0,22rem)_minmax(32rem,1fr)] lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-8">
                <div className="row-start-1 lg:col-start-2 lg:row-start-1">
                    <GradientText
                        colors={["#ADD8E6", "#87CEEB", "#6495ED", "#4169E1", "#1E90FF"]}
                        showBorder={false}
                        className="text-7xl font-semibold sm:text-8xl"
                    >
                        Ciao!
                    </GradientText>

                    <GradientText
                        colors={["#00BFFF", "#1E90FF", "#4169E1", "#0000FF"]}
                        showBorder={false}
                        className="mt-4 text-2xl font-light tracking-wide opacity-90 sm:text-3xl"
                    >
                        It’s Simone Cotardo.
                    </GradientText>
                </div>

                <AsciiWelcome className="row-start-2 max-h-[32svh] max-w-[22rem] sm:max-h-[36svh] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:max-h-none" />

                <div className="row-start-3 flex flex-wrap justify-center gap-6 lg:col-start-2 lg:row-start-2 lg:flex-nowrap lg:gap-4">
                    <FancyButton
                        to="/me"
                        icon={FaQuoteLeft}
                        text="About Me"
                        color="#366EF0"
                    />

                    <FancyButton
                        to="/projects"
                        icon={FaTerminal}
                        text="Projects"
                        color="#255AC8"
                    />

                    <FancyButton
                        to="/contacts"
                        icon={FaPaperPlane}
                        text="Contact"
                        color="#1C4A9E"
                    />
                </div>
            </div>
        </header>
    );
}
