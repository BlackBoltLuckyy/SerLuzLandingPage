import Mandala, { serif } from "./Mandala";

export default function AberturaDor() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <Mandala className="left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-[.05]" />
      <div className="relative mx-auto max-w-[660px] text-center">
        <p style={serif} className="m-0 mb-[34px] text-[clamp(23px,3.2vw,30px)] italic leading-[1.4] text-[#829B71]">
          Quantas vezes você colocou todo mundo na frente… e deixou você para depois?
        </p>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          Foram cuidados com trabalho, casa, filhos e estudos, e agora você sente que chegou sua vez de buscar autoconhecimento e conexão por meio arte.
        </p>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          O Curso "Mandalas para a Alma" nasceu pra devolver esse espaço a você. Um convite pra desacelerar, criar com as próprias mãos e redescobrir uma criatividade que ficou guardada por tempo demais.
        </p>
        <p className="m-0 text-[18px] font-medium leading-[1.75] text-[#3A2A2E]">
          Nunca é tarde. Cada mandala que você criar é um caminho de volta pra si mesmo.
        </p>
      </div>
    </section>
  );
}
