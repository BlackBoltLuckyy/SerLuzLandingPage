// Conteúdo tipado da landing page do Curso SerLuz.
// Valores marcados como PLACEHOLDER precisam ser substituídos por dados reais antes de publicar.

export interface ParaQuemItem {
  text: string;
}

export const paraQuem: ParaQuemItem[] = [
  { text: "Você sempre quis aprender a desenhar, mas a vida — filhos, casa, trabalho — nunca deixou sobrar tempo pra isso" },
  { text: "Os filhos cresceram, a casa ficou mais silenciosa, e sobrou um vazio que você ainda não sabe bem como preencher" },
  { text: "Você quer um hobby só seu — não mais uma tarefa, não mais uma obrigação pra cumprir por alguém" },
  { text: "Uma parte de você acha que já passou da idade de começar algo novo… e uma parte maior quer provar que não" },
];

export interface Modulo {
  num: string;
  title: string;
  desc: string;
}

export const modulos: Modulo[] = [
  { num: "01", title: "Técnicas fundamentais de mandala", desc: "Do primeiro traço à composição completa, no seu ritmo — sem pressa, sem comparação." },
  { num: "02", title: "Geometria sagrada aplicada", desc: "Estruturas milenares que dão profundidade e propósito a cada desenho." },
  { num: "03", title: "Colorização terapêutica", desc: "As cores como forma de escuta interior e de expressão de quem você é hoje." },
];

export interface Beneficio {
  label: string;
  desc: string;
}

export const beneficios: Beneficio[] = [
  { label: "Aulas gravadas no seu ritmo", desc: 'você assiste quando puder, sem culpa por "atrasar"' },
  { label: "Técnicas de geometria sagrada", desc: "pra criar mandalas com propósito, não só decoração" },
  { label: "Colorização terapêutica", desc: "cores como forma de escuta interior" },
  { label: "Acesso vitalício", desc: "volte sempre que precisar de um respiro" },
  { label: "Comunidade de alunas", desc: "pra se sentir acompanhada, não sozinha nessa jornada" },
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

// PLACEHOLDER: valores fictícios — ajustar para os valores reais da oferta antes de publicar.
export const oferta: OfertaItem[] = [
  { item: "Curso SerLuz — Módulos completos", value: "R$ 497" },
  { item: "Bônus 1: E-book Geometria Sagrada Ilustrada", value: "R$ 97" },
  { item: "Bônus 2: Paleta de cores terapêuticas guiada", value: "R$ 67" },
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
  { q: "Preciso ter experiência prévia com desenho?", a: "Não. As técnicas são ensinadas do zero, passo a passo, pensadas pra quem nunca desenhou." },
  { q: "Existe alguma idade limite pra fazer o curso?", a: "Nenhuma. O SerLuz foi criado pensando em mulheres acima dos 40 — sua experiência de vida é parte do que você traz pro desenho, não um limite." },
  { q: "Quanto tempo preciso dedicar por semana?", a: "Você define seu ritmo. As aulas são curtas e ficam disponíveis pra sempre." },
  { q: "Por quanto tempo tenho acesso ao curso?", a: "O acesso é vitalício — você pode voltar sempre que quiser, no seu tempo." },
  { q: "E se eu não gostar do curso?", a: "Você tem 7 dias de garantia total, com devolução do valor." },
  { q: "Como funciona o acesso após a inscrição?", a: "Assim que a inscrição é confirmada, você recebe o acesso à plataforma na hora." },
  { q: "Quais formas de pagamento?", a: "Cartão, Pix ou boleto, com parcelamento facilitado." },
];

export interface SocialLink {
  name: string;
  icon: string;
}

export const social: SocialLink[] = [
  { name: "Instagram", icon: "IG" },
  { name: "Facebook", icon: "f" },
  { name: "YouTube", icon: "▶" },
];
