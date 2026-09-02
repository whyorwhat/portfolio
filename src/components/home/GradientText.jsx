export default function GradientText({
                                         children,
                                         className = "",
                                         colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
                                         showBorder = false,
                                     }) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    };

    return (
        <div
            className={`relative mx-auto flex max-w-fit flex-row items-center justify-center font-medium backdrop-blur transition-shadow duration-500 overflow-hidden ${className}`}
        >
            {showBorder && (
                <div
                    className="pointer-events-none absolute inset-0 z-0 bg-cover"
                    style={{
                        ...gradientStyle,
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black z-[-1]"
                        style={{
                            width: "calc(100% - 2px)",
                            height: "calc(100% - 2px)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    ></div>
                </div>
            )}
            <div
                className="relative z-2 inline-block bg-cover text-transparent"
                style={{
                    ...gradientStyle,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                }}
            >
                {children}
            </div>
        </div>
    );
}
