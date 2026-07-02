import { useState, type FormEvent } from "react";
import { oferta } from "../data";
import Mandala, { serif } from "./Mandala";

export default function OfertaInscricao() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !consent) {
      setShowError(true);
      return;
    }
    setSubmitted(true);
    // TODO: integrar com o provedor real de checkout / e-mail marketing
  }

  return (
    <section id="inscricao" className="relative overflow-hidden bg-[#F1E8DB] px-6 py-[92px]">
      <Mandala className="-left-64 -top-52 h-[700px] w-[700px] opacity-[.06] [animation:slz-spin_320s_linear_infinite]" />
      <div className="relative mx-auto max-w-[600px]">
        <div className="mb-9 text-center">
          <div className="mb-[14px] text-[12px] font-semibold uppercase tracking-[0.34em] text-[#A9863F]">
            Sua vaga no Curso SerLuz
          </div>
          <h2 style={serif} className="m-0 text-[clamp(28px,4vw,42px)] font-semibold text-[#5C1A2E]">
            Comece hoje
          </h2>
        </div>
        <div className="rounded-[22px] border-[1.5px] border-[#C6A15B]/50 bg-[#FAF6F0] p-[34px] shadow-[0_24px_60px_-30px_rgba(92,26,46,0.6)]">
          {/* PLACEHOLDER: stack de valor — valores fictícios, ajustar para os reais antes de publicar */}
          <div className="mb-6 flex flex-col gap-0.5">
            {oferta.map((o, i) => (
              <div key={i} className="flex justify-between gap-4 border-b border-[#5C1A2E]/10 py-3 text-[15px] text-[#5A4A44]">
                <span className="flex gap-[10px]">
                  <span className="font-bold text-[#C6A15B]">✓</span>
                  {o.item}
                </span>
                <span className="flex-none text-[#7A6A63] line-through">{o.value}</span>
              </div>
            ))}
          </div>
          <div className="mb-1 mt-[18px] text-center">
            <div className="mb-0.5 text-[14px] text-[#7A6A63]">Hoje por</div>
            {/* PLACEHOLDER: preço final — ajustar antes de publicar */}
            <div style={serif} className="text-[52px] font-bold leading-none text-[#5C1A2E]">
              R$ 297
            </div>
            <div className="mt-1 text-[15px] font-semibold text-[#A9863F]">ou 10x de R$ 29,70</div>
            <div className="mt-2 text-[13px] text-[#7A6A63]">Pagamento: cartão, Pix ou boleto</div>
          </div>

          {submitted ? (
            <div className="mt-[26px] rounded-[14px] border border-[#C6A15B]/50 bg-[#C6A15B]/10 px-[22px] py-7 text-center">
              <div style={serif} className="mb-2 text-[22px] text-[#5C1A2E]">
                Que bom te ter aqui ✦
              </div>
              <p className="m-0 text-[15px] leading-[1.6] text-[#5A4A44]">
                Recebemos sua inscrição. Em instantes você recebe o acesso à plataforma no seu e-mail.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-[26px] flex flex-col gap-3">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setShowError(false);
                }}
                placeholder="Seu nome"
                className="w-full rounded-xl border-[1.5px] border-[#5C1A2E]/20 bg-white px-[18px] py-[15px] text-[15px] text-[#3A2A2E] outline-none focus:border-[#C6A15B]"
              />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setShowError(false);
                }}
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full rounded-xl border-[1.5px] border-[#5C1A2E]/20 bg-white px-[18px] py-[15px] text-[15px] text-[#3A2A2E] outline-none focus:border-[#C6A15B]"
              />
              <label className="flex cursor-pointer items-start gap-[11px] px-0.5 py-1 text-[12.5px] leading-[1.5] text-[#7A6A63]">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    setShowError(false);
                  }}
                  className="mt-0.5 h-4 w-4 flex-none cursor-pointer accent-[#5C1A2E]"
                />
                <span>Ao se inscrever, você concorda com nossa Política de Privacidade e com o tratamento dos seus dados conforme a LGPD.</span>
              </label>
              {showError && (
                <div className="rounded-lg bg-[#5C1A2E]/10 px-3 py-2 text-[12.5px] text-[#5C1A2E]">
                  Preencha nome, e-mail e aceite os termos para continuar.
                </div>
              )}
              <button
                type="submit"
                className="mt-1.5 w-full rounded-full border-none bg-[#5C1A2E] py-[18px] text-[16px] font-bold tracking-[0.02em] text-[#FAF6F0] shadow-[0_14px_36px_-14px_rgba(92,26,46,0.8)] transition-transform hover:-translate-y-0.5"
              >
                Quero me inscrever
              </button>
              <div className="mt-0.5 text-center text-[12px] text-[#7A6A63]">
                Acesso imediato&nbsp;&nbsp;•&nbsp;&nbsp;Garantia de 7 dias
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
