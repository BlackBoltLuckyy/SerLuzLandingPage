import Mandala, { serif } from "./Mandala";

export default function SobreProfessora() {
  return (
    <section className="relative overflow-hidden bg-[#5C1A2E] px-6 py-[92px] text-[#FAF6F0]">
      <Mandala className="-bottom-56 -right-52 h-[560px] w-[560px] opacity-[.07] [animation:slz-spin_280s_linear_infinite]" />
      <div className="relative mx-auto flex max-w-[860px] flex-wrap items-center justify-center gap-12">
        <div className="flex-none">
          {/* PLACEHOLDER de foto — substituir por foto real da Claudia Alves antes de publicar */}
          <div className="flex h-[290px] w-[230px] flex-col items-center justify-center gap-3 rounded-2xl border-[1.5px] border-[#C6A15B]/40 bg-gradient-to-br from-[#7A2A40] to-[#4A1424] p-5 text-center text-[#FAF6F0]/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] border-[#C6A15B]/50 text-[26px] text-[#C6A15B]">
              ☺
            </div>
            <div className="text-[12px] leading-[1.5]">Placeholder de foto — substituir por foto real da Claudia</div>
          </div>
        </div>
        <div className="min-w-[280px] max-w-[460px] flex-1">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#C6A15B]">
            Sobre a professora
          </div>
          <h2 style={serif} className="m-0 mb-[22px] text-[34px] font-semibold leading-[1.15]">
            Claudia Alves
          </h2>
          <p className="m-0 text-[17px] leading-[1.75] text-[#FAF6F0]/85">
            Claudia Alves é professora dedicada há anos à técnica da mandala e à geometria sagrada aplicada ao desenho. Acredita que toda mulher carrega uma artista interior — e que a experiência de vida não é limite, é ponto de partida.
          </p>
        </div>
      </div>
    </section>
  );
}
