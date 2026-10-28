// Conteúdo tipado da landing page do Curso SerLuz.
// Valores marcados como PLACEHOLDER precisam ser substituídos por dados reais antes de publicar.

export interface ParaQuemItem {
  text: string;
}

export const paraQuem: ParaQuemItem[] = [
  { text: "Você sempre quis desenvolver habilidade para a arte, mas a rotina deixou isso para trás..." },
  { text: "Sempre pensou em um dia ter uma renda extra... fazendo o que mais gosta!" },
  { text: "Você quer um hobby só seu, não mais uma tarefa, não mais uma obrigação pra cumprir." },
];

export interface Modulo {
  num: string;
  title: string;
  desc: string;
}

export const modulos: Modulo[] = [
  { num: "01", title: "Universo das mandalas", desc: "A origem, os significados e a geometria sagrada, além dos benefícios da mandala" },
  { num: "02", title: "Como criar mandalas", desc: "Do primeiro ponto à composição completa, no seu ritmo, sem pressa, sem comparação." },
  { num: "03", title: "Como ter renda com as mandalas", desc: "Transforme o que você aprendeu em uma fonte de renda, vendendo suas criações do seu próprio jeito." },
];

export interface Beneficio {
  label: string;
  desc: string;
}

export const beneficios: Beneficio[] = [
  { label: "Aulas gravadas no seu ritmo", desc: "você assiste quando puder!" },
  { label: "Técnicas de pontilhismo e pincel", desc: "para iniciantes." },
  { label: "Preparativos de materiais", desc: "Materiais utiliazados, mdf, preparação de fundo, marcações na mandala..." },
  { label: "Criando Mandalas", desc: "Diversos modelos de mandalas" },
  { label: "Vendas e Precificação", desc: "Aprenda a calcular o valor da sua mandala e como vende-la" },
  { label: "Acesso vitalício", desc: "Volte sempre que precisar de um respiro" },
  { label: "Módulo com Aulas bônus", desc: "conteúdo extra pra ir ainda mais fundo na sua jornada" },
  { label: "Apostila + ebooks", desc: "material de apoio pra realizar o curso" },
];

export interface Depoimento {
  text: string;
  name: string;
  focus: string;
}

// PLACEHOLDER: substituir pelos depoimentos reais das alunas antes de publicar.
export const depoimentos: Depoimento[] = [
  { text: "Depoimento placeholder — foco em recomeço criativo depois dos 50, sem medo de errar.", name: "[Nome da aluna]", focus: "Recomeço aos 50" },
  { text: "Depoimento placeholder — nunca imaginei que fosse capaz aos 45, e hoje desenho todos os dias.", name: "[Nome da aluna]", focus: "Superação" },
  { text: "Depoimento placeholder — com o ninho vazio, o curso virou um novo propósito pras minhas tardes.", name: "[Nome da aluna]", focus: "Reinvenção pessoal" },
];

export interface OfertaItem {
  item: string;
  value: string;
}

export const oferta: OfertaItem[] = [
  { item: "Curso Mandalas para a Alma — Módulos completos +20 aulas", value: "R$ 497" },
  { item: "Bônus 1: Três produtos para comercializar na técnica de pontilhismo", value: "R$ 97" },
  { item: "Bônus 2: Ebook Domine as Cores na Arte", value: "R$ 67" },
  { item: "Bônus 3: Apostila de Exercícios", value: "R$ 57" },
];

export interface Objecao {
  q: string;
  a: string;
}

export const objecoes: Objecao[] = [
  { q: "Já não tenho mais idade pra começar algo novo…", a: "Tem, sim. A experiência de vida que você já carrega é uma vantagem, não um obstáculo. SerLuz foi pensado pra mãos que talvez nunca tenham desenhado — e nunca é tarde pra começar." },
  { q: "Mas eu não sei desenhar…", a: "Você não precisa saber. As mandalas seguem estrutura geométrica — qualquer mulher consegue aprender, passo a passo, do zero." },
  { q: "Mas eu não tenho tempo…", a: "As aulas são curtas e gravadas. Você assiste quando puder, mesmo que seja 15 minutos entre uma tarefa e outra." },
  { q: "Isso é coisa pra artista, não pra mim…", a: "SerLuz não é sobre técnica perfeita. É sobre se permitir criar, sem julgamento e sem comparação com ninguém." },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  { q: "Preciso ter experiência prévia com arte?", a: "Não. As técnicas são ensinadas do zero, passo a passo, pensadas pra quem nunca teve essa experiência." },
  { q: "Quanto tempo preciso dedicar por semana?", a: "Você define seu ritmo." },
  { q: "Por quanto tempo tenho acesso ao curso?", a: "O acesso é vitalício, você pode voltar sempre que quiser, no seu tempo." },
  { q: "Como funciona o acesso após a inscrição?", a: "Assim que a inscrição é confirmada, você recebe o acesso à plataforma na hora." },
  { q: "Quais formas de pagamento?", a: "Pix e cartão com parcelamento facilitado." },
];

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export const social: SocialLink[] = [
  { name: "Instagram", icon: "IG", url: "https://www.instagram.com/serluz.mandalas?igsh=MXY2YWNyMjR2b3Q0Mw==" },
  { name: "Facebook", icon: "f", url: "#" },
  { name: "YouTube", icon: "▶", url: "#" },
];
