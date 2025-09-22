import { FooterContent } from "./types";

export const footerContent: FooterContent = {
  title: "Bot Milion",
  logo: {
    src: "/logo.svg",
    alt: "Bot Milion Logo",
    width: 45,
    height: 45,
  },
  description:
    "A Bot Milion é um ecossistema que une Inteligência Artificial e ativos do mundo real (RWA) para gerar lucro consistente e sustentável. Nosso token combina inovação, transparência e tecnologia para criar valor sólido a longo prazo.",
  socialLinks: [
    { href: "#", icon: "instagram" },
    { href: "#", icon: "tiktok" },
    { href: "#", icon: "telegram" },
  ],
  usefulLinks: [
    { label: "O Robô", href: "robo" },
    { label: "RWA", href: "rwa" },
    { label: "Tokenomics", href: "#" },
    { label: "RoadMap", href: "#" },
    { label: "Pré-Venda", href: "#" },
  ],
  copyright: "© Copyright BotMilion All Rights Reserved",
};
