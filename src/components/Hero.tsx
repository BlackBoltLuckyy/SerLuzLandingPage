import Mandala, { serif } from "./Mandala";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#5C1A2E] px-6 pb-[104px] pt-[88px] text-center text-[#FAF6F0]">
      <Mandala className="-right-64 -top-64 h-[760px] w-[760px] opacity-[.09] [animation:slz-spin_240s_linear_infinite]" />
      <Mandala className="-bottom-60 -left-56 h-[560px] w-[560px] opacity-[.07] [animation:slz-spin_300s_linear_infinite_reverse]" />
      <div className="relative mx-auto max-w-[820px]">
        <div className="mb-[30px] text-[12px] font-semibold uppercase tracking-[0.42em] text-[#C6A15B]">
          Curso SerLuz · com Claudia Alves
        </div>
        <h1 style={serif} className="m-0 mb-[26px] text-[clamp(38px,6.4vw,72px)] font-semibold leading-[1.08] tracking-[-0.01em]">
          Depois de cuidar de todo mundo,
          <br />
          agora é a sua vez de criar
        </h1>
        <p className="mx-auto mb-10 max-w-[600px] text-[clamp(17px,2.1vw,21px)] font-light leading-[1.62] text-[#FAF6F0]/85">
          Um curso de mandalas para mulheres acima dos 40 que querem redescobrir a criatividade que ficou pra depois — sem pressa, sem comparação, no seu tempo.
        </p>
        <a
          href="#inscricao"
          className="inline-block rounded-full bg-[#C6A15B] px-[46px] py-[19px] text-[16px] font-bold tracking-[0.02em] text-[#3A1420] shadow-[0_14px_40px_-12px_rgba(198,161,91,0.7)] transition-transform hover:-translate-y-0.5"
        >
          Quero me inscrever
        </a>
        <div className="mt-5 text-[13px] tracking-[0.04em] text-[#FAF6F0]/60">
          Acesso imediato&nbsp;&nbsp;•&nbsp;&nbsp;Garantia de 7 dias
        </div>
      </div>
    </section>
  );
}
