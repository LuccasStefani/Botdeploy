import { CtaContent } from "./types";

export const ctaContent: CtaContent = {
  title: "Pré venda aberta por tempo ilimitado",
  endDate: "00/00/00", // igual a original
  description:
    "O Bot Milion não é apenas mais uma moeda – é um ecossistema inteligente que combina inteligência artificial + ativos reais (RWA) para gerar valor sólido e crescimento contínuo. Os primeiros investidores entram com preço exclusivo e participam da fase mais lucrativa do projeto.",
  buttons: [
    {
      label: "Comprar Agora",
      primary: true,
      href: "#comprar",
    },
    {
      label: "Comunidade bot Milion",
      primary: false,
      href: "#comunidade",
      icon: {
        src: "/telegram.svg",
        alt: "TelegramIcon",
        width: 25,
        height: 25,
      },
    },
  ],
};
