import { serif } from "./Mandala";

export default function Solucao() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-[680px] text-center">
        <h2 style={serif} className="m-0 mb-[30px] text-[clamp(27px,3.6vw,38px)] font-semibold leading-[1.2] text-[#5C1A2E]">
          A arte da mandala como caminho de volta a si
        </h2>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          O Curso SerLuz une técnica de desenho e geometria sagrada aplicada. Cada traço segue uma estrutura milenar — e é essa estrutura que dá segurança pra quem nunca desenhou.
        </p>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          Você não precisa de talento nem de juventude para começar. Precisa só de vontade — o resto o método te dá, passo a passo, no seu ritmo.
        </p>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          Quem guia esse caminho é Claudia Alves, professora dedicada há anos à técnica da mandala. Claudia acredita que toda mulher carrega uma artista interior — e que a experiência de vida é ponto de partida, não obstáculo.
        </p>
        <p style={serif} className="m-0 mt-[34px] text-[22px] italic text-[#5C1A2E]">
          Você não precisa saber desenhar. Precisa só se permitir começar.
        </p>
      </div>
    </section>
  );
}
