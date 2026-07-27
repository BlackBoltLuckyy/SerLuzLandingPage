import { modulos } from "../data";
import { serif } from "./Mandala";

export default function Modulos() {
  return (
    <section className="bg-[#F1E8DB] px-6 py-[92px]">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-[54px] text-center">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#A9863F]">
            O que você vai aprender
          </div>
          <h2 style={serif} className="m-0 text-[clamp(28px,4vw,42px)] font-semibold text-[#5C1A2E]">
            Uma jornada completa
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
          {modulos.map((m) => (
            <div key={m.num} className="rounded-[18px] border border-[#5C1A2E]/10 bg-[#FAF6F0] p-8 shadow-[0_10px_30px_-20px_rgba(92,26,46,0.4)]">
              <h3 style={serif} className="m-0 mb-[10px] text-[20px] font-semibold leading-[1.25] text-[#5C1A2E]">
                {m.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#7A6A63]">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
