function ItemTitle({ item }) {
  if (item.title) {
    return item.title;
  }

  return item.titleParts.map((part, index) => (
    <span key={`${part.text}-${index}`}>{part.text}</span>
  ));
}

export function SolutionSection({ approachItems, outcomeItems }) {
  return (
    <section
      id="soluzione"
      className="scroll-mt-24 bg-[#17392b] text-[#f7f7f2]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-30">
        <div className="grid gap-8 lg:grid-cols-[0.36fr_1fr] lg:gap-14">
          <p className="text-sm font-semibold tracking-[0.12em] text-[#a9d0b5] uppercase">
            La soluzione
          </p>
          <div>
            <h2 className="m-0 max-w-[950px] text-[clamp(2.65rem,5vw,5.2rem)] leading-[0.96] font-semibold tracking-[-0.064em] text-balance">
              Il contesto non si ricostruisce. Rimane disponibile.
            </h2>
            <p className="mt-7 max-w-[710px] text-lg leading-8 text-[rgba(255,255,255,0.62)] sm:text-xl sm:leading-9">
              Ti Seguo crea un unico livello operativo intorno al sinistro. Le
              persone restano nei propri ruoli, ma lavorano sullo stesso
              percorso e sanno sempre qual è il prossimo passo.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-y border-[rgba(255,255,255,0.15)] lg:grid-cols-3">
          {approachItems.map((item, index) => (
            <article
              key={item.icon}
              className="border-b border-[rgba(255,255,255,0.15)] py-8 last:border-b-0 lg:border-r lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="text-sm font-semibold text-[#a9d0b5]">
                0{index + 1}
              </span>
              <h3 className="mt-14 max-w-[330px] text-2xl leading-tight font-semibold tracking-[-0.035em]">
                <ItemTitle item={item} />
              </h3>
              <p className="mt-4 max-w-[330px] text-[0.95rem] leading-7 text-[rgba(255,255,255,0.56)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-18 grid gap-8 lg:grid-cols-[0.36fr_1fr] lg:gap-14">
          <p className="text-sm font-semibold tracking-[0.12em] text-[#a9d0b5] uppercase">
            Cosa cambia
          </p>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {outcomeItems.map((item) => (
              <article key={item.icon} className="border-t border-[rgba(255,255,255,0.15)] pt-5">
                <h3 className="text-lg font-semibold tracking-[-0.025em]">
                  <ItemTitle item={item} />
                </h3>
                <p className="mt-3 max-w-[420px] text-sm leading-6 text-[rgba(255,255,255,0.54)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
