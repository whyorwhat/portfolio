import {FaGithub} from "react-icons/fa";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import {TechnologiesIcons} from "@/components/projects/TechnologiesIcons.jsx";
import WindowCard from "@/components/elements/WindowCard.jsx";
import {useNavigate} from "react-router-dom";

const previewLayouts = [
    {left: '2%', rotation: -7, verticalOffset: 7},
    {left: '33%', rotation: 0, verticalOffset: 0},
    {left: '64%', rotation: 7, verticalOffset: 7},
];

function ProjectPreview({imageIds, title}) {
    if (imageIds.length === 1) {
        return (
            <img
                src={`/images/projects/${imageIds[0]}.png`}
                alt={title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
            />
        );
    }

    return (
        <div
            className="flex h-full min-h-[170px] w-full items-center justify-center"
            aria-label={`${title} project previews`}
        >
            <div className="relative flex h-[160px] w-full max-w-[260px] items-end justify-center">
                {imageIds.slice(0, 3).map((imageId, index) => {
                    const layout = previewLayouts[index];

                    return (
                        <div
                            key={imageId}
                            className="absolute bottom-[68px] w-[34%]"
                            style={{
                                left: layout.left,
                                transform: `translateY(${layout.verticalOffset}px) rotate(${layout.rotation}deg)`,
                                zIndex: 30 + index,
                            }}
                        >
                            <img
                                src={`/images/projects/${imageId}.png`}
                                alt={`${title} preview ${index + 1}`}
                                className="aspect-[4/3] w-full rounded border-2 border-slate-600 bg-slate-800 object-cover shadow-md"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function ProjectCard({
                                id,
                                title,
                                description,
                                viewLink,
                                githubLink,
                                technologies,
                                previewImageIds,
                                onOpen,
                                delay = 0 }) {
    const navigate = useNavigate();
    const handleView = (url) => {
        if (url.startsWith('/')) {
            navigate(url);
        } else {
            window.open(url, '_blank', 'noopener');
        }
    };

    const imageIds = previewImageIds ?? [id];

    return (
        <WindowCard
            delay={delay}
            className="flex flex-col p-6 gap-5 min-h-[300px] w-full max-w-3xl overflow-hidden rounded-lg"
        >
            {/* Wrapper flessibile che contiene contenuto + immagine desktop */}
            <div className="flex flex-col md:flex-row flex-grow">
                {/* Contenuto principale */}
                <div className="flex-grow md:pr-6">
                    <h3 className="mb-4 text-xl font-extrabold text-slate-100">{title}</h3>
                    <p className="mb-4 text-sm text-slate-300">{description}</p>

                    <div
                        className="mb-4 flex flex-col text-xs text-slate-400 md:flex-row
                            items-start md:items-center"
                    >
                        <span className="mb-1 md:mb-0 md:mr-2">Made&nbsp;with:</span>
                        <TechnologiesIcons technologies={technologies} />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2">
                        {viewLink && (
                            <button
                                type="button"
                                onClick={() => handleView(viewLink)}
                                className="flex items-center justify-center px-4 py-2 text-xs font-semibold bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 hover:shadow-md transition duration-200"
                            >
                                <FaArrowUpRightFromSquare className="inline-block mr-2" /> View
                            </button>
                        )}
                        {onOpen && (
                            <button
                                type="button"
                                onClick={onOpen}
                                className="flex items-center justify-center rounded-lg bg-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 shadow-sm transition duration-200 hover:bg-slate-600 hover:shadow-md"
                            >
                                Open
                            </button>
                        )}
                        {githubLink && (
                            <button
                                type="button"
                                onClick={() => window.open(githubLink, '_blank', 'noopener')}
                                className="flex items-center justify-center rounded-lg bg-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 shadow-sm transition duration-200 hover:bg-slate-600 hover:shadow-md"
                            >
                                <FaGithub className="inline-block mr-2" /> GitHub
                            </button>
                        )}
                    </div>
                </div>

                <div className="hidden md:block md:w-1/3 lg:w-[34%] flex-shrink-0">
                    <ProjectPreview imageIds={imageIds} title={title} />
                </div>
            </div>

            <div className="block md:hidden w-full mt-4 min-h-[220px]">
                <ProjectPreview imageIds={imageIds} title={title} />
            </div>
        </WindowCard>
    );
}
