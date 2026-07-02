// Ornamento de mandala dourada translúcida, usado como fundo decorativo animado.
// PLACEHOLDER: asset esperado em /public/mandala-gold.png (PNG com fundo transparente).
const MANDALA_SRC = "/mandala-gold.png";

export const serif = { fontFamily: "'Playfair Display', serif" };

export function MandalaStyle() {
  return <style>{`@keyframes slz-spin{to{transform:rotate(360deg)}}`}</style>;
}

export default function Mandala({ className }: { className: string }) {
  return (
    <img
      src={MANDALA_SRC}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute select-none ${className}`}
    />
  );
}
