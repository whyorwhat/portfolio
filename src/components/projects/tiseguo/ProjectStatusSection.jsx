import { ConceptGrid } from "./ConceptGrid";

export function ProjectStatusSection({ items }) {
  return (
    <section id="progetto" className="mx-auto w-full max-w-[1440px] scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-30">
      <p className="mb-7 text-sm font-semibold tracking-[0.12em] text-[#2f8f57] uppercase">
        Dove siamo
      </p>
      <h2 className="m-0 max-w-[900px] text-[clamp(2.35rem,4.3vw,4.35rem)] leading-[1.01] font-semibold tracking-[-0.058em] text-balance">
        Non è solo una visione. È già un progetto concreto.
      </h2>
      <p className="mt-5 max-w-[720px] text-lg leading-8 text-[rgba(23,25,24,0.64)]">
        Il lavoro svolto permette di discutere una soluzione concreta, non un
        semplice concept, e di adattarla ai processi reali di una Compagnia.
      </p>

      <ConceptGrid items={items} columns={4} />
    </section>
  );
}
