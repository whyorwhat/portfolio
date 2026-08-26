import { ConceptIcon } from "./ConceptIcon";

const UNDERLINE_TONES = {
  red: "decoration-[#e4574f]",
  green: "decoration-[#2f8f57]",
};

function ConceptTitle({ item }) {
  if (!item.titleParts) {
    return item.title;
  }

  return item.titleParts.map((part, index) =>
    part.highlight ? (
      <span
        key={`${part.text}-${index}`}
        className={`underline decoration-2 underline-offset-4 ${UNDERLINE_TONES[part.tone ?? item.tone]}`}
      >
        {part.text}
      </span>
    ) : (
      <span key={`${part.text}-${index}`}>{part.text}</span>
    ),
  );
}

export function ConceptGrid({ items, columns = 3 }) {
  const gridColumns =
    columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";

  return (
    <div
      className={`mt-11 grid gap-px border-y border-[#171918]/10 bg-[#171918]/10 ${gridColumns}`}
    >
      {items.map((item) => (
        <article
          key={item.title ?? item.titleParts.map((part) => part.text).join("")}
          className="min-h-48 bg-[#fafaf7] px-1 py-6 md:px-6 md:py-7 md:first:pl-0 md:last:pr-0"
        >
          <ConceptIcon name={item.icon} tone={item.tone ?? "green"} />
          <h3 className="mt-8 text-[1.2rem] leading-tight font-semibold tracking-[-0.03em]">
            <ConceptTitle item={item} />
          </h3>
          <p className="mt-3 max-w-[310px] text-[0.9rem] leading-6 text-[#171918]/60">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
