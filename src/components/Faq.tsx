import { useState } from "react";
import { faqs } from "../data";
import { serif } from "./Mandala";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section className="bg-[#F1E8DB] px-6 py-[92px]">
      <div className="mx-auto max-w-[720px]">
        <div className="mb-11 text-center">
          <div className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.34em] text-[#A9863F]">
            Perguntas frequentes
          </div>
          <h2 style={serif} className="m-0 text-[clamp(26px,3.6vw,38px)] font-semibold text-[#5C1A2E]">
            Ainda com dúvidas?
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className="overflow-hidden rounded-[14px] border border-[#5C1A2E]/10 bg-[#FAF6F0]">
                <button
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-[22px] py-5 text-left text-[16px] font-semibold text-[#5C1A2E]"
                >
                  <span>{f.q}</span>
                  <span className={`flex-none text-[22px] leading-none text-[#C6A15B] transition-transform ${open ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {open && <div className="px-[22px] pb-[22px] text-[15px] leading-[1.65] text-[#5A4A44]">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
