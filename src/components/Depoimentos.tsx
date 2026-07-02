import { depoimentos } from "../data";
import { serif } from "./Mandala";

export default function Depoimentos() {
  return (
    <section className="px-6 py-[92px]">
      <div className="mx-auto max-w-[1040px]">
        <div className="mb-5 text-center">
          <h2 style={serif} className="m-0 text-[clamp(26px,3.6vw,38px)] font-semibold text-[#5C1A2E]">
            Quem já percorreu esse caminho
          </h2>
        </div>
        {/* PLACEHOLDER: cards de exemplo — substituir por depoimentos reais antes de publicar */}
        <p className="m-0 mb-[46px] text-center text-[13px] italic text-[#A9863F]">
          Cards de exemplo — substituir por depoimentos reais antes de publicar
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {depoimentos.map((d, i) => (
            <div key={i} className="flex flex-col gap-[18px] rounded-[18px] border border-[#5C1A2E]/10 bg-[#FAF6F0] p-[30px] shadow-[0_12px_34px_-22px_rgba(92,26,46,0.5)]">
              <div style={serif} className="h-[22px] text-[44px] leading-[.6] text-[#C6A15B]">
                "
              </div>
              <p className="m-0 flex-1 text-[15px] italic leading-[1.65] text-[#7A6A63]">{d.text}</p>
              <div className="flex items-center gap-[14px] border-t border-[#5C1A2E]/10 pt-2">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#E4D3B4] to-[#C6A15B] text-[16px] text-[#5C1A2E]">
                  ♡
                </div>
                <div>
                  <div className="text-[14px] font-bold text-[#5C1A2E]">{d.name}</div>
                  <div className="text-[12px] text-[#A9863F]">{d.focus}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
