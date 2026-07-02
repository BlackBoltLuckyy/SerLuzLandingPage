import Mandala, { serif } from "./Mandala";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-[#5C1A2E] px-6 py-[100px] text-center text-[#FAF6F0]">
      <Mandala className="left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 opacity-[.06] [animation:slz-spin_260s_linear_infinite]" />
      <div className="relative mx-auto max-w-[640px]">
        <p className="m-0 mb-2 text-[19px] leading-[1.7] text-[#FAF6F0]/90">
          Imagine terminar o dia com as mãos sujas de cor e o coração mais leve, sabendo que esse tempo foi só seu.
        </p>
        <h2 style={serif} className="m-0 mb-[38px] mt-6 text-[clamp(26px,4vw,40px)] font-semibold italic leading-[1.2]">
          Essa artista já existe dentro de você.
          <br />
          O Curso SerLuz é o caminho até ela.
        </h2>
        <a
          href="#inscricao"
          className="inline-block rounded-full bg-[#C6A15B] px-[46px] py-[19px] text-[16px] font-bold tracking-[0.02em] text-[#3A1420] shadow-[0_14px_40px_-12px_rgba(198,161,91,0.7)] transition-transform hover:-translate-y-0.5"
        >
          Quero me inscrever
        </a>
      </div>
    </section>
  );
}
