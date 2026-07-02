import { paraQuem } from "../data";
import { serif } from "./Mandala";

export default function ParaQuem() {
  return (
    <section className="bg-[#5C1A2E] px-6 py-[92px] text-[#FAF6F0]">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-[52px] text-center">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#C6A15B]">
            Este curso é pra você que…
          </div>
          <h2 style={serif} className="m-0 text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15]">
            Talvez você se reconheça aqui
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
          {paraQuem.map((p, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-[#C6A15B]/30 bg-[#FAF6F0]/5 px-6 py-6">
              <div style={serif} className="mt-0.5 flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border-[1.5px] border-[#C6A15B] text-[15px] text-[#C6A15B]">
                ✦
              </div>
              <p className="m-0 text-[16px] leading-[1.6] text-[#FAF6F0]/90">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
