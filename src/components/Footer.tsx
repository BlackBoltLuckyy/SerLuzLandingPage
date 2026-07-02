import { social } from "../data";
import { serif } from "./Mandala";

export default function Footer() {
  return (
    <footer className="bg-[#3A1420] px-6 py-[52px] text-center text-[#FAF6F0]/70">
      <div style={serif} className="mb-5 text-[22px] text-[#C6A15B]">
        Curso SerLuz
      </div>
      <div className="mb-[22px] flex justify-center gap-[18px]">
        {social.map((s) => (
          <a
            key={s.name}
            href="#"
            aria-label={s.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A15B]/40 text-[15px] text-[#C6A15B] no-underline"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <div className="text-[13px] tracking-[0.02em]">Curso SerLuz&nbsp;&nbsp;•&nbsp;&nbsp;Todos os direitos reservados</div>
    </footer>
  );
}
