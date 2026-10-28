import Mandala, { serif } from "./Mandala";

export default function SobreProfessora() {
  return (
    <section className="relative overflow-hidden bg-[#829B71] px-6 py-[92px] text-[#FAF6F0]">
      <Mandala className="-bottom-56 -right-52 h-[560px] w-[560px] opacity-[.07] [animation:slz-spin_280s_linear_infinite]" />
      <div className="relative mx-auto flex max-w-[860px] flex-wrap items-center justify-center gap-12">
        <div className="flex-none">
          <img
            src="/professora-cláudia.jpg"
            alt="Cláudia Alves"
            className="h-[290px] w-[230px] rounded-2xl border-[1.5px] border-[#A76D5E]/40 object-cover"
          />
        </div>
        <div className="min-w-[280px] max-w-[460px] flex-1">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#481925]">
            Sobre Mim
          </div>
          <h2 style={serif} className="m-0 mb-[22px] text-[34px] font-semibold leading-[1.15]">
            Cláudia Alves
          </h2>
          <p className="m-0 text-[17px] leading-[1.75] text-[#FAF6F0]/85">
            Sou artísta visual, onde tenho dedicado a há quase uma década a estudar e aprimorar cada vez mais à técnica do pontilhismo em mandalas, bem como uso de pinceis e diversas outras técnicas. Assim compartilho com vocês meu conhecimento através deste curso elaborado com muito carinho!
          </p>
        </div>
      </div>
    </section>
  );
}
