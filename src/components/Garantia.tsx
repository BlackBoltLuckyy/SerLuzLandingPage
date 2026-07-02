import { serif } from "./Mandala";

export default function Garantia() {
  return (
    <section className="px-6 pb-[84px] pt-5">
      <div className="mx-auto flex max-w-[640px] flex-wrap items-center justify-center gap-7 rounded-[22px] bg-[#5C1A2E] px-[38px] py-11 text-center text-[#FAF6F0]">
        <div className="flex h-[92px] w-[92px] flex-none flex-col items-center justify-center rounded-full border-2 border-[#C6A15B] text-[#C6A15B]">
          <div style={serif} className="text-[30px] font-bold leading-none">
            7
          </div>
          <div className="text-[9px] uppercase tracking-[0.18em]">dias</div>
        </div>
        <div className="min-w-[240px] flex-1 text-left">
          <h3 style={serif} className="m-0 mb-2.5 text-[23px] font-semibold">
            Garantia incondicional de 7 dias
          </h3>
          <p className="m-0 text-[15.5px] leading-[1.65] text-[#FAF6F0]/85">
            Se você entrar no Curso SerLuz e sentir que não é pra você, devolvemos 100% do seu investimento em até 7 dias, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
