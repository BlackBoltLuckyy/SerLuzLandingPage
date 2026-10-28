import Mandala, { serif } from "./Mandala";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#829B71] px-6 pb-[104px] pt-[88px] text-center text-[#FAF6F0]">
      <Mandala className="-right-64 -top-64 h-[760px] w-[760px] opacity-[.09] [animation:slz-spin_240s_linear_infinite]" />
      <Mandala className="-bottom-60 -left-56 h-[560px] w-[560px] opacity-[.07] [animation:slz-spin_300s_linear_infinite_reverse]" />
      <div className="relative mx-auto max-w-[820px]">
        <div className="mb-[15px] text-[12px] font-semibold uppercase tracking-[0.42em] text-[#481925]">
          SerLuz Mandalas por Cláudia Alves
        </div>
        <div className="mb-[30px] text-[15px] font-semibold uppercase tracking-[0.42em] text-[#481925]">
          Curso "Mandalas para a Alma" caminho de criatividade e autoconhecimento
        </div>
        <h1 style={serif} className="m-0 mb-[26px] text-[clamp(38px,6.4vw,72px)] font-semibold leading-[1.08] tracking-[-0.01em]">
          Transforme seu estresse em paz, sua rotina em conexão e sua jornada em autoconhecimento
          <br />
        </h1>
        <p className="mx-auto mb-10 max-w-[600px] text-[clamp(17px,2.1vw,21px)] font-light leading-[1.62] text-[#FAF6F0]/85">
          Aprenda a criar mandalas do zero com a técnica do pontilhismo e pinceladas
        </p>
        <a
          href="#inscricao"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("btn-inscricao")?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="inline-block rounded-full bg-[#A76D5E] px-[46px] py-[19px] text-[16px] font-bold tracking-[0.02em] text-white shadow-[0_14px_40px_-12px_rgba(198,161,91,0.7)] transition-transform hover:-translate-y-0.5"
        >
          Quero me inscrever
        </a>
        <div className="mt-5 text-[13px] tracking-[0.04em] text-[#00000]/60">
          Acesso imediato&nbsp;&nbsp;•&nbsp;&nbsp;Garantia de 7 dias
        </div>
      </div>
    </section>
  );
}
