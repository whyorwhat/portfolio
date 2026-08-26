import { ConceptIcon } from "./ConceptIcon";

const LABEL_TONES = {
  red: "text-[#d35d50]",
  green: "text-[#2f7f50]",
};

function ItemTitle({ item }) {
  if (item.title) {
    return item.title;
  }

  return item.titleParts.map((part) => part.text).join("");
}

export function FeatureSection({
  id,
  label,
  title,
  description,
  items,
  tone,
  muted = false,
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[4.5rem] ${muted ? "bg-[#FAFAFA]" : "bg-[#F5F5F5]"}`}
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[5.5rem]">
        <div className="grid gap-5 lg:grid-cols-[190px_1fr] lg:gap-8">
          <p
            className={`text-sm font-semibold tracking-[0.12em] uppercase ${LABEL_TONES[tone]}`}
          >
            {label}
          </p>
          <div>
            <h2 className="max-w-[860px] text-[clamp(2.2rem,3.8vw,3.9rem)] leading-[1] font-semibold tracking-[-0.055em] text-balance">
              {title}
            </h2>
            <p className="mt-4 max-w-[660px] text-base leading-7 text-[rgba(23,25,24,0.58)] sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-11 grid gap-x-8 gap-y-10 md:grid-cols-3 lg:ml-[222px] lg:mt-14 lg:gap-x-12">
          {items.map((item) => (
            <article key={item.icon} className="flex items-start gap-4">
              <ConceptIcon name={item.icon} tone={tone} />
              <div className="min-w-0">
                <h3 className="text-[1.1rem] leading-[1.4] font-semibold tracking-[-0.025em] sm:text-[1.2rem]">
                  <ItemTitle item={item} />
                </h3>
                <p className="mt-1.5 text-[1.05rem] leading-[1.45] font-normal tracking-[-0.018em] text-[rgba(23,25,24,0.55)] sm:text-[1.15rem]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
