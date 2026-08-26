import { ConceptGrid } from "./ConceptGrid";

const LABEL_TONES = {
  red: "text-[#d94b44]",
  green: "text-[#2f8f57]",
};

const UNDERLINE_TONES = {
  red: "decoration-[#e4574f]",
  green: "decoration-[#2f8f57]",
};

function SectionTitle({ title, titleParts, tone }) {
  if (!titleParts) {
    return title;
  }

  return titleParts.map((part, index) =>
    part.highlight ? (
      <span
        key={`${part.text}-${index}`}
        className={`underline decoration-[3px] underline-offset-[7px] ${UNDERLINE_TONES[part.tone ?? tone]}`}
      >
        {part.text}
      </span>
    ) : (
      <span key={`${part.text}-${index}`}>{part.text}</span>
    ),
  );
}

export function StorySection({
  id,
  label,
  tone,
  title,
  titleParts,
  description,
  items,
  columns = 3,
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-[1440px] scroll-mt-18 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-30"
    >
      <div className="grid gap-8 lg:grid-cols-[0.36fr_1fr] lg:gap-14">
        <p
          className={`text-sm font-semibold tracking-[0.12em] uppercase ${LABEL_TONES[tone]}`}
        >
          {label}
        </p>
        <div>
          <h2 className="m-0 max-w-[950px] text-[clamp(2.65rem,5vw,5.2rem)] leading-[0.96] font-semibold tracking-[-0.064em] text-balance">
            <SectionTitle title={title} titleParts={titleParts} tone={tone} />
          </h2>
          <p className="mt-7 max-w-[700px] text-lg leading-8 text-[rgba(23,25,24,0.62)] sm:text-xl sm:leading-9">
            {description}
          </p>
        </div>
      </div>
      <div className="lg:ml-[calc(26.5%+3.5rem)]">
        <ConceptGrid items={items} columns={columns} />
      </div>
    </section>
  );
}
