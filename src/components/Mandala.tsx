// Ornamento de mandala translúcida, usado como fundo decorativo animado.
// A imagem /public/mandala-gold.png é usada como máscara e pintada com a cor de fundo (bg-[#5C1F2E]).
const MANDALA_SRC = "/mandala-gold.png";

export const serif = { fontFamily: "'Playfair Display', serif" };

export function MandalaStyle() {
  return <style>{`@keyframes slz-spin{to{transform:rotate(360deg)}}`}</style>;
}

export default function Mandala({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none bg-[#5C1F2E] ${className}`}
      style={{
        WebkitMaskImage: `url(${MANDALA_SRC})`,
        maskImage: `url(${MANDALA_SRC})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
