import { beneficios } from "../data";
import { serif } from "./Mandala";

export default function Beneficios() {
  return (
    <section className="px-6 py-[92px]">
      <div className="mx-auto max-w-[840px]">
        <div className="mb-12 text-center">
          <h2 style={serif} className="m-0 text-[clamp(26px,3.6vw,38px)] font-semibold text-[#5C1A2E]">
            Tudo que está incluído
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-10 gap-y-[14px]">
          {beneficios.map((b, i) => (
            <div key={i} className="flex items-start gap-4 border-b border-[#5C1A2E]/10 py-4">
              <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#C6A15B] text-[14px] font-bold text-[#3A1420]">
                ✓
              </div>
              <p className="m-0 text-[16px] leading-[1.55] text-[#5A4A44]">
                <strong className="font-bold text-[#5C1A2E]">{b.label}</strong> — {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
