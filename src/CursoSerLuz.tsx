
/**
 * Curso SerLuz — Landing page
 *
 * Requisitos:
 * - Tailwind CSS instalado no projeto (usa apenas classes utilitárias + valores arbitrários).
 * - Fontes Playfair Display + Mulish. Adicione ao <head> do seu index.html:
 *   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Mulish:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
 * - Ornamento de mandala dourada (PNG com fundo transparente) em /public/mandala-gold.png
 *
 * Paleta: vinho #5C1A2E · dourado #C6A15B · off-white #FAF6F0 · tinta #3A2A2E
 *
 * Estrutura: cada seção é um componente em components/, com o conteúdo textual
 * centralizado em data.ts. Itens marcados como PLACEHOLDER (foto da professora,
 * depoimentos, valores da oferta) precisam ser substituídos antes de publicar.
 */
import { MandalaStyle } from "./components/Mandala";
import Hero from "./components/Hero";
import AberturaDor from "./components/AberturaDor";
import ParaQuem from "./components/ParaQuem";
import Solucao from "./components/Solucao";
import Modulos from "./components/Modulos";
import Beneficios from "./components/Beneficios";
import SobreProfessora from "./components/SobreProfessora";
import OfertaInscricao from "./components/OfertaInscricao";
import Objecoes from "./components/Objecoes";
import Garantia from "./components/Garantia";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";
import Ps from "./components/Ps";
import Footer from "./components/Footer";

export default function CursoSerLuz() {
  return (
    <div className="w-full overflow-hidden bg-[#FAF6F0] font-['Mulish',system-ui,sans-serif] text-[#3A2A2E] antialiased">
      <MandalaStyle />
      <Hero />
      <AberturaDor />
      <ParaQuem />
      <Solucao />
      <Modulos />
      <Beneficios />
      <SobreProfessora />
      <OfertaInscricao />
      <Objecoes />
      <Garantia />
      <Faq />
      <CtaFinal />
      <Ps />
      <Footer />
    </div>
  );
}
