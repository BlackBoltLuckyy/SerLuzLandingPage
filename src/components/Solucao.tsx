import { serif } from "./Mandala";

export default function Solucao() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-[680px] text-center">
        <h2 style={serif} className="m-0 mb-[30px] text-[clamp(27px,3.6vw,38px)] font-semibold leading-[1.2] text-[#829B71]">
          A arte da mandala como caminho de volta a si
        </h2>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          O Curso une técnicas de pontilhismo e pinceladas para iniciantes, dando segurança para quem nunca criou.
        </p>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          Você não precisa de talento para começar. Somente vontade!
        </p>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          Quem guia esse caminho é Cláudia Alves, artísta visual dedicada há quase uma década à técnica da mandala. Cláudia acredita que toda pessoa carrega um artista interior, e que a experiência de vida é ponto de partida, não obstáculo.
        </p>
        <p style={serif} className="m-0 mt-[34px] text-[22px] italic text-[#829B71]">
          Você não precisa saber pintar. Precisa só se permitir começar.
        </p>
      </div>
    </section>
  );
}
