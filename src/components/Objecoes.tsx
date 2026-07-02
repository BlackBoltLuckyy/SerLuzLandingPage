import { objecoes } from "../data";
import { serif } from "./Mandala";

export default function Objecoes() {
  return (
    <section className="px-6 py-[92px]">
      <div className="mx-auto max-w-[820px]">
        <div className="mb-12 text-center">
          <h2 style={serif} className="m-0 text-[clamp(26px,3.6vw,38px)] font-semibold text-[#5C1A2E]">
            Talvez você esteja pensando…
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[22px]">
          {objecoes.map((o, i) => (
            <div key={i} className="rounded-2xl bg-[#F1E8DB] px-[26px] py-7">
              <h3 style={serif} className="m-0 mb-3 text-[19px] font-medium italic text-[#5C1A2E]">
                {o.q}
              </h3>
              <p className="m-0 text-[15px] leading-[1.65] text-[#5A4A44]">{o.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
