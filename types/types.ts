export interface HeroContent {
    preText: string;
    titleDesktop: string;
    titleMobile: string;
    subtitle: string;
    socialProof: string;
    socialImages: string[];
    buttons: {
        label: string;
        href: string;
        primary?: boolean;
    }[];
}

export const heroContent: HeroContent = {
    preText: "Pré Venda já Liberada por tempo limitado",
    titleDesktop: "Revolucionando o mercado  de Trade com a IA do Bot Milion",
    titleMobile:
        "Revolucionando o   mercado de Trade com  a IA do Bot Milion",
    subtitle: "Transforme sua forma de investir com tecnologia inteligente e sustentável",
    socialProof: "Confie em +1200 Membros",
    socialImages: [
        "slide1.avif",
        "slide2.avif",
        "slide3.avif",
        "slide4.avif",
        "slide5.avif",
    ],
    buttons: [
        {
            label: "Comprar com PIX",
            href: "https://app.pixswap.trade/pre-venda/btmilion ",
            primary: true,
        },
        {
            label: "Comprar com USDT",
            href: "https://presale.botmilion.com",
            primary: false,
        },
    ],
};


export const botContent = {
    splineScene: "https://prod.spline.design/4TEoPkFM7huKWFWY/scene.splinecode",
    stats: [
        { title: "Liquidez", value: "+40%", subtitle: "" },
        {
            title: "Transições pagas",
            value: "+10k",
            subtitle: "Mais de 10k pago em Dólar",
        },
        {
            title: "Impulsionamento do Bot",
            value: "99%",
            subtitle: "Crescendo e disparando",
        },
    ],
};


export interface MetodoStep {
    text: string;
    icon: string;
}

export interface MetodoContent {
    title: string;
    headline: string;
    headlineImage: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    intro: string;
    steps: MetodoStep[];
    complement: string[];
}

export const metodoContent: MetodoContent = {
    title: "Nosso Método",
    headline: "Nosso método para deixar a moeda sustentável",
    headlineImage: {
        src: "/textimg2.png",
        alt: "Bot Milion",
        width: 40,
        height: 40,
    },
    intro:
        "Tokens RWA, ou Ativos do Mundo Real, são representações digitais de ativos físicos ou financeiros — como imóveis, obras de arte, commodities ou recebíveis — registradas em blockchain, permitindo que ativos reais sejam convertidos em tokens digitais.",
    steps: [
        { text: "Identificação e avaliação do ativo real", icon: "/arrowText.svg" },
        { text: "Criação de um token que representa esse ativo na blockchain", icon: "/arrowText.svg" },
        { text: "Garantia legal e custódia do ativo físico ou do direito associado", icon: "/arrowText.svg" },
        { text: "Disponibilização do token para negociação ou investimento", icon: "/arrowText.svg" },
    ],
    complement: [
        "Por exemplo, um imóvel pode ser tokenizado em 1.000 tokens RWA, e qualquer pessoa pode adquirir uma fração desse imóvel comprando uma ou mais unidades desses tokens.",
        "Benefícios dos Tokens RWA: Acesso democratizado — permite que pequenos investidores tenham acesso a ativos antes restritos a grandes players.",
        "Liquidez aumentada — a possibilidade de negociar frações dos ativos em mercados secundários aumenta a liquidez.",
        "Transparência e segurança — o uso da blockchain oferece rastreabilidade, transparência e resistência a fraudes.",
        "Eficiência e automação — contratos inteligentes (smart contracts) podem automatizar pagamentos, distribuição de lucros, etc.",
    ],
};


export const bentoContent = {
    preText: "Entenda o Nosso Robô",
    title: {
        desktop: `Pontecialize com o Bot Milion <img src="/textimg2.png" alt="Bot Milion" width="40" height="40" class="inline-block ml-2 align-middle" />`,
        mobile: `Pontecialize com o <br /> Bot Milion <img src="/textimg2.png" alt="Bot Milion" width="30" height="30" class="inline-block ml-2 align-middle" />`,
    },
};

export const poderSectionContent = {
    title: "Descubra o Poder do BOTMILION",
    subtitle: `Um token sustentável, movido por IA e ativos reais (RWA),\nque garante solidez e valorização contínua.`,
    cards: [
        {
            src: "/iconCard1.svg",
            title: "Lucro com Inteligência Artificial",
            description:
                "Operações no par XAU/USD através de um robô próprio, testado por 2 anos.",
        },
        {
            src: "/iconCard2.svg",
            title: "Tokenômica Sustentável",
            description:
                "Parte dos recursos é direcionada a RWAs, garantindo valorização e segurança.",
        },
        {
            src: "/iconCard3.svg",
            title: "Recompra e Queima de Tokens",
            description:
                "Mecanismo que reduz oferta e aumenta o valor de mercado ao longo do tempo.",
        },
        {
            src: "/iconCard4.svg",
            title: "Receita Independente do Cripto",
            description:
                "Ganhos vindos de ativos reais e ouro, além da especulação em cripto..",
        },
        {
            src: "/iconCard5.svg",
            title: "Governança Descentralizada",
            description:
                "A comunidade define os rumos e participa ativamente das decisões..",
        },
        {
            src: "/iconCard6.svg",
            title: "Segurança e Escalabilidade",
            description:
                "Estrutura pensada para crescer de forma segura e atender grandes demandas.",
        },
    ],
};


export interface RoadMapImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export interface RoadMapItem {
    title: string;
    image: RoadMapImage;
    text: string;
}


export interface RwaStep {
    text: string;
    icon?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        className?: string;
    };
}

export interface RwaContent {
    shinyText: string;
    headline: {
        text: string;
        image: {
            src: string;
            alt: string;
            width: number;
            height: number;
            className?: string;
        };
    };
    introText: string;
    steps: RwaStep[];
    complementText: string[];
}

export interface CtaButton {
    label: string;
    href?: string;
    primary?: boolean;
    icon?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

export interface CtaContent {
    title: string;
    endDate: string;
    description: string;
    buttons: CtaButton[];
}



export interface SocialLink {
    href: string;
    icon: "instagram" | "tiktok" | "telegram";
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterContent {
    title: string;
    logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    description: string;
    socialLinks: SocialLink[];
    usefulLinks: FooterLink[];
    copyright: string;
}
