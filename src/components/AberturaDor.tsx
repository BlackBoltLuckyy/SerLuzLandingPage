import Mandala, { serif } from "./Mandala";

export default function AberturaDor() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <Mandala className="left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-[.05]" />
      <div className="relative mx-auto max-w-[660px] text-center">
        <p style={serif} className="m-0 mb-[34px] text-[clamp(23px,3.2vw,30px)] italic leading-[1.4] text-[#5C1A2E]">
          Quantas vezes você colocou todo mundo na frente… e deixou você para depois?
        </p>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          Foram décadas cuidando de filhos, casa, trabalho, de todo mundo ao seu redor. E agora, talvez com o ninho mais vazio ou a rotina mais silenciosa, sobrou um tempo que você não sabe muito bem como preencher — ou que ainda precisa conquistar, um pedaço de cada vez.
        </p>
        <p className="m-0 mb-[22px] text-[18px] leading-[1.75] text-[#5A4A44]">
          O Curso SerLuz nasceu pra devolver esse espaço a você. Um convite pra desacelerar, criar com as próprias mãos e redescobrir uma criatividade que ficou guardada por tempo demais.
        </p>
        <p className="m-0 text-[18px] font-medium leading-[1.75] text-[#3A2A2E]">
          Nunca é tarde. Cada mandala que você desenha é um caminho de volta pra si mesma.
        </p>
      </div>
    </section>
  );
}
