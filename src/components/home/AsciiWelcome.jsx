import { useLayoutEffect, useRef } from "react";
import asciiArt from "@/assets/ascii.txt?raw";

const NATURAL_FONT_SIZE = 10;

export default function AsciiWelcome({ className = "" }) {
    const containerRef = useRef(null);
    const artRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const art = artRef.current;

        if (!container || !art) return undefined;

        const resizeArt = () => {
            const naturalWidth = art.scrollWidth;
            const naturalHeight = art.scrollHeight;

            if (!naturalWidth || !naturalHeight) return;

            const computedMaxHeight = Number.parseFloat(
                window.getComputedStyle(container).maxHeight,
            );
            const heightScale = Number.isFinite(computedMaxHeight)
                ? computedMaxHeight / naturalHeight
                : 1;
            const scale = Math.min(
                1,
                container.clientWidth / naturalWidth,
                heightScale,
            );

            art.style.transform = `translateX(-50%) scale(${scale})`;
            const scaledHeight = `${naturalHeight * scale}px`;

            if (container.style.height !== scaledHeight) {
                container.style.height = scaledHeight;
            }
        };

        resizeArt();

        const resizeObserver = new ResizeObserver(resizeArt);
        resizeObserver.observe(container);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <figure
            ref={containerRef}
            className={`relative w-full overflow-hidden ${className}`}
            role="img"
            aria-label="Ritratto stilizzato di Simone Cotardo"
        >
            <pre
                ref={artRef}
                className="absolute left-1/2 top-0 m-0 w-max origin-top whitespace-pre text-left font-mono font-normal leading-[0.82] text-blue-200"
                style={{ fontSize: `${NATURAL_FONT_SIZE}px` }}
                aria-hidden="true"
            >
                {asciiArt.trimEnd()}
            </pre>
        </figure>
    );
}
