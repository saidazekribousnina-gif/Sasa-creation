// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Sasa Creation — Bijoux faits main",
  description:
    "Sasa Creation est un petit atelier artisanal qui crée des bijoux faits main — colliers, boucles d'oreilles, bracelets et bagues — fabriqués lentement, à la main, avec amour.",
  language: "fr",
};

// ─── WhatsApp ─────────────────────────────────────────────────────────────────

export interface WhatsAppConfig {
  phoneNumber: string;
  orderGreeting: string;
  orderTotalLabel: string;
  orderOutro: string;
  contactGreeting: string;
}

export const whatsappConfig: WhatsAppConfig = {
  phoneNumber: "+21690271601",
  orderGreeting: "Bonjour Sasa Creation ! Je souhaite passer une commande :",
  orderTotalLabel: "Total",
  orderOutro: "Merci de confirmer ma commande. 🙏",
  contactGreeting: "Bonjour Sasa Creation ! J'ai une question :",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
  announcementText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Sasa Creation",
  menuLinks: [
    { label: "Collection", href: "#products" },
    { label: "Notre Savoir-faire", href: "#craft" },
    { label: "Journal", href: "#journal" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
  ],
  searchPlaceholder: "Rechercher colliers, boucles, bagues…",
  cartEmptyText: "Votre panier est vide — venez découvrir nos créations.",
  cartCheckoutText: "Commander sur WhatsApp",
  continueShoppingText: "Continuer mes achats",
  menuBackgroundImage: "/images/atelier.jpg",
  announcementText: "Livraison offerte dès 300 DT · Pièces uniques faites main en Tunisie",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
  trustBadges: string[];
}

export const heroConfig: HeroConfig = {
  tagline: "Bijoux artisanaux · Faits main en Tunisie",
  title: "Chaque pièce raconte\nune histoire faite main",
  ctaPrimaryText: "Découvrir la collection",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "Notre histoire",
  ctaSecondaryTarget: "#about",
  backgroundImage: "/images/hero-portrait.jpg",
  trustBadges: ["100% fait main en Tunisie"],
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "Notre philosophie",
  heading: "Des bijoux créés lentement, pour le quotidien",
  bodyParagraphs: [
    "Chez Sasa Creation, aucune pièce ne ressemble exactement à une autre. Chaque collier, chaque boucle d'oreille et chaque bague est façonné à la main sur notre petit établi — perle après perle, fil après fil — avec des pierres, des perles et des métaux soigneusement choisis.",
    "Nous croyons qu'un bijou doit être personnel. Un objet que l'on attrape chaque matin, qui porte un souvenir, un cadeau, un instant. C'est pourquoi nous créons tout lentement, en petites séries, et finissons chaque pièce comme si elle était destinée à notre famille.",
  ],
  linkText: "Découvrir notre histoire",
  linkTarget: "#about",
  image1: "/images/atelier.jpg",
  image2: "/images/product-4.jpg",
  stats: [
    { value: 500, suffix: "+", label: "Pièces façonnées à la main" },
    { value: 100, suffix: "%", label: "Fait main dans notre atelier" },
    { value: 12, suffix: "", label: "Étapes pour chaque pièce" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "Le savoir-faire",
  heading: "De nos mains aux vôtres",
  bodyParagraphs: [
    "Chaque création Sasa Creation naît sur l'établi : croquis, sélection des pierres, façonnage du fil et nouage de la soie. Nous travaillons avec des perles d'eau douce, des pierres naturelles, des perles de verre et des finitions dorées — des matières choisies pour être douces avec la peau et faites pour durer.",
    "Parce que chaque pièce est faite main, de petites variations font partie de son charme. Votre bijou sera unique — jamais produit en série, jamais pressé.",
  ],
  ctaText: "Voir les créations",
  ctaTarget: "#products",
  backgroundImage: "/images/atelier.jpg",
};

// ─── Étapes de fabrication (scroll narratif) ────────────────────────────────────

export interface CraftStep {
  number: number;
  title: string;
  description: string;
}

export interface CraftStepsConfig {
  tag: string;
  heading: string;
  introText: string;
  backgroundImage: string;
  /** Texte du compteur : {current} et {total} remplacés dynamiquement */
  progressText: string;
  ctaText: string;
  ctaTarget: string;
  steps: CraftStep[];
}

export const craftStepsConfig: CraftStepsConfig = {
  tag: "Le savoir-faire",
  heading: "12 gestes, une pièce, une histoire",
  introText:
    "Faites défiller — chaque création passe par ces douze gestes, dans notre atelier, sans raccourci.",
  backgroundImage: "/images/atelier.jpg",
  progressText: "Étape {current} sur {total}",
  ctaText: "Découvrir la collection",
  ctaTarget: "#products",
  steps: [
    {
      number: 1,
      title: "L'idée",
      description:
        "Tout commence par un croquis au crayon, inspiré d'une pierre, d'une lumière, d'une envie.",
    },
    {
      number: 2,
      title: "Le choix des pierres",
      description:
        "Chaque perle et chaque pierre est triée à la main — seules celles qui brillent sur l'établi sont gardées.",
    },
    {
      number: 3,
      title: "L'association des matières",
      description:
        "Perles d'eau douce, pierres naturelles, verre et dorures : les matières s'accordent par deux ou trois, jamais plus.",
    },
    {
      number: 4,
      title: "La coupe du fil",
      description:
        "Le fil de soie est coupé à la longueur exacte — ni trop tendu, ni trop lâche.",
    },
    {
      number: 5,
      title: "L'enfilage",
      description:
        "Perle après perle, le rythme s'installe. C'est le geste le plus long, et le plus méditatif.",
    },
    {
      number: 6,
      title: "Le nouage",
      description:
        "Entre chaque perle, un nœud discret protège la pierre et donne au bijou sa souplesse.",
    },
    {
      number: 7,
      title: "Le façonnage du fil",
      description:
        "Pour les bagues et pendentifs, le fil est plié et enroulé à la pince, au dixième de millimètre.",
    },
    {
      number: 8,
      title: "La soudure des fermoirs",
      description:
        "Le fermoir doré est fixé puis testé dix fois — il doit s'ouvrir sans effort et ne jamais lâcher.",
    },
    {
      number: 9,
      title: "Le contrôle qualité",
      description:
        "Sous la loupe, chaque nœud, chaque soudure est inspecté. Une pièce imparfaite ne quitte jamais l'atelier.",
    },
    {
      number: 10,
      title: "Le polissage",
      description:
        "Un chiffon doux, de la patience, et la pièce retrouve tout son éclat.",
    },
    {
      number: 11,
      title: "Le coffret",
      description:
        "La pièce est glissée dans son coffret cadeau, sur un lit de papier de soie.",
    },
    {
      number: 12,
      title: "L'envoi",
      description:
        "De nos mains aux vôtres — enveloppée avec le même soin que pour un membre de la famille.",
    },
  ],
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  /** Prix « ancien » optionnel affiché barré (ancrage psychologique). 0 = absent. */
  compareAtPrice: number;
  category: string;
  image: string;
  /** Stock restant — urgence douce si <= lowStockThreshold */
  stock: number;
  /** Vrai si la pièce est totalement unique (badge « Pièce unique ») */
  isOneOfAKind: boolean;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
  /** En dessous de ce stock, afficher l'indicateur d'urgence douce */
  lowStockThreshold: number;
  oneOfAKindText: string;
  lowStockText: string;
}

export const productsConfig: ProductsConfig = {
  tag: "Notre collection",
  heading: "Des pièces choisies, façonnées à la main",
  description:
    "Des bijoux en petites séries, créés avec des perles d'eau douce, des pierres naturelles et des détails dorés. Chaque pièce est unique — une fois partie, elle ne revient pas.",
  viewAllText: "Voir toutes les créations",
  addToCartText: "Ajouter au panier",
  addedToCartText: "Ajouté ✓",
  categories: ["Tout", "Colliers", "Boucles d'oreilles", "Bracelets", "Bagues"],
  lowStockThreshold: 3,
  oneOfAKindText: "Pièce unique",
  lowStockText: "Plus que {n} en stock",
  products: [
    {
      id: 1,
      name: "Collier Luna Perlé",
      price: 220,
      compareAtPrice: 260,
      category: "Colliers",
      image: "/images/product-1.png",
      stock: 2,
      isOneOfAKind: true,
    },
    {
      id: 2,
      name: "Créoles Aurora",
      price: 140,
      compareAtPrice: 0,
      category: "Boucles d'oreilles",
      image: "/images/product-2.png",
      stock: 5,
      isOneOfAKind: false,
    },
    {
      id: 3,
      name: "Bracelet Terra",
      price: 120,
      compareAtPrice: 0,
      category: "Bracelets",
      image: "/images/product-3.png",
      stock: 4,
      isOneOfAKind: false,
    },
    {
      id: 4,
      name: "Bague Solstice",
      price: 160,
      compareAtPrice: 185,
      category: "Bagues",
      image: "/images/product-4.jpg",
      stock: 1,
      isOneOfAKind: true,
    },
    {
      id: 5,
      name: "Collier Ivy",
      price: 190,
      compareAtPrice: 0,
      category: "Colliers",
      image: "/images/product-5.jpg",
      stock: 3,
      isOneOfAKind: false,
    },
    {
      id: 6,
      name: "Pendentifs Mira",
      price: 150,
      compareAtPrice: 0,
      category: "Boucles d'oreilles",
      image: "/images/product-6.jpg",
      stock: 6,
      isOneOfAKind: false,
    },
    {
      id: 7,
      name: "Bracelet Éclat",
      price: 130,
      compareAtPrice: 0,
      category: "Bracelets",
      image: "/images/product-7.jpg",
      stock: 2,
      isOneOfAKind: true,
    },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Heart",
      title: "Véritablement fait main",
      description:
        "Chaque pièce est façonnée à la main dans notre atelier — sans usine, sans production de masse.",
    },
    {
      icon: "Leaf",
      title: "Matières bienveillantes",
      description:
        "Des matières hypoallergéniques, dorées et naturelles, douces pour les peaux sensibles.",
    },
    {
      icon: "ShieldCheck",
      title: "Fait pour durer",
      description:
        "Contrôlé à chaque étape, avec une promesse de réparation d'un an sur chaque pièce.",
    },
    {
      icon: "Truck",
      title: "Livraison cadeau",
      description:
        "Emballé avec soin dans un coffret cadeau et livré partout en Tunisie en 2 à 4 jours.",
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "Journal",
  heading: "Notes de l'atelier",
  viewAllText: "Voir tous les articles",
  readMoreText: "Lire la suite",
  posts: [
    {
      id: 1,
      title: "Comment naît un collier Sasa Creation",
      date: "2 août 2026",
      image: "/images/product-1.png",
      excerpt:
        "Du premier croquis au nœud final — découvrez les douze étapes minutieuses derrière chacun de nos colliers faits main.",
    },
    {
      id: 2,
      title: "Entretenir vos bijoux artisanaux",
      date: "18 juillet 2026",
      image: "/images/product-5.jpg",
      excerpt:
        "Quelques habitudes simples — mis en dernier, retirés en premier, et un chiffon doux — suffisent à faire briller vos perles et finitions dorées pendant des années.",
    },
    {
      id: 3,
      title: "Pourquoi nous choisissons les perles d'eau douce",
      date: "30 juin 2026",
      image: "/images/product-6.jpg",
      excerpt:
        "Deux perles d'eau douce ne sont jamais identiques — et c'est exactement pour cela que nous les aimons. Regard de près sur notre matière préférée.",
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "Assistance",
  heading: "Questions fréquentes",
  ctaText: "Encore une question ? Écrivez-nous",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "Chaque pièce est-elle vraiment faite main ?",
      answer:
        "Oui. Chaque création Sasa Creation est façonnée à la main dans notre petit atelier — du montage au emballage final en passant par le polissage. De légères variations sont naturelles et rendent votre pièce unique.",
    },
    {
      id: 2,
      question: "Quelles matières utilisez-vous ?",
      answer:
        "Nous travaillons avec des perles d'eau douce, des pierres naturelles, des perles de verre et des finitions dorées ou en argent sterling. Tous les métaux sont sans nickel et conviennent à la plupart des peaux sensibles.",
    },
    {
      id: 3,
      question: "Acceptez-vous les commandes sur mesure ?",
      answer:
        "Bien sûr — les pièces sur mesure sont nos projets préférés. Qu'il s'agisse d'un cadeau, d'un ensemble de mariage ou d'une création revisitée à partir d'un souvenir de famille, écrivez-nous via le formulaire de contact et nous créerons quelque chose ensemble.",
    },
    {
      id: 4,
      question: "Quels sont les délais de livraison ?",
      answer:
        "Les pièces prêtes à l'emploi sont expédiées sous 1 à 2 jours ouvrés et arrivent généralement en 2 à 4 jours partout en Tunisie. Les commandes sur mesure demandent 1 à 2 semaines de création avant l'expédition. Chaque commande arrive dans un coffret cadeau.",
    },
    {
      id: 5,
      question: "Que se passe-t-il si mon bijou se casse ?",
      answer:
        "Nous offrons une promesse de réparation d'un an sur chaque pièce. Si un fermoir, un fil ou un nœud cède, renvoyez-la-nous et nous la réparons gratuitement — vous ne payez que l'expédition.",
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "Notre histoire",
      heading: "Tout a commencé sur une table de cuisine",
      paragraphs: [
        "Sasa Creation est née comme beaucoup de belles choses — à la maison, le soir, avec une boîte de perles et beaucoup de curiosité. Ce qui a commencé comme des cadeaux pour les proches s'est peu à peu transformé, pièce après pièce, en un petit atelier.",
        "Aujourd'hui encore, chaque création est dessinée, fabriquée et emballée par les mêmes mains. Nous avons volontairement gardé une petite échelle : petites séries, matières sincères, et des bijoux qui semblent faits pour vous — parce qu'ils le sont.",
      ],
      quote: "",
      attribution: "",
      image: "/images/hero-portrait.jpg",
      backgroundColor: "#423d3f",
      textColor: "#ffffff",
    },
    {
      tag: "Un mot de Sasa",
      heading: "Créé lentement, offert avec amour",
      paragraphs: [],
      quote:
        "Quand quelqu'un porte l'une de mes créations, il emporte un peu de mon temps et de mon attention. C'est tout le sens de notre métier — un bijou doit avoir une signification.",
      attribution: "— Sasa, Fondatrice & Artisane",
      image: "/images/atelier.jpg",
      backgroundColor: "#8b6d4b",
      textColor: "#ffffff",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

// ─── Livraison (réciprocité — seuil gratuit) ────────────────────────────────────

export interface ShippingConfig {
  freeShippingThreshold: number;
  progressText: string;
  unlockedText: string;
  remainingText: string;
}

export const shippingConfig: ShippingConfig = {
  freeShippingThreshold: 300,
  progressText: "Livraison offerte",
  unlockedText: "🎉 Livraison offerte débloquée !",
  remainingText: "Encore {n} DT pour la livraison offerte",
};

export const contactConfig: ContactConfig = {
  heading: "Créons quelque chose ensemble",
  description:
    "Une question sur une pièce, une commande sur mesure ou un cadeau spécial ? Écrivez-nous — nous lisons et répondons personnellement à chaque message.",
  locationLabel: "Atelier",
  location: "Notre atelier — visites sur rendez-vous",
  emailLabel: "E-mail",
  email: "hello@sasacreation.com",
  phoneLabel: "Téléphone",
  phone: "+216 90 271 601",
  formFields: {
    nameLabel: "Votre nom",
    namePlaceholder: "Marie Dupont",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "marie@exemple.tn",
    messageLabel: "Message",
    messagePlaceholder:
      "Parlez-nous de la pièce que vous imaginez — occasion, couleurs, budget…",
  },
  submitText: "Envoyer le message",
  submittingText: "Envoi en cours…",
  submittedText: "Message envoyé ✓",
  successMessage:
    "Merci ! Nous avons bien reçu votre message et répondrons sous 1 à 2 jours.",
  backgroundImage: "/images/atelier.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Sasa Creation",
  brandDescription:
    "Des bijoux artisanaux créés lentement et avec amour — colliers, boucles d'oreilles, bracelets et bagues en petites séries, de notre atelier jusqu'à chez vous.",
  newsletterHeading: "Rejoignez la famille Sasa",
  newsletterDescription:
    "Nouvelles créations, histoires d'atelier et accès anticipé aux petites séries — une fois par mois, sans spam.",
  newsletterPlaceholder: "Votre adresse e-mail",
  newsletterButtonText: "S'inscrire",
  newsletterSuccessText: "Bienvenue dans la famille ! ✓",
  linkGroups: [
    {
      title: "Boutique",
      links: [
        { label: "Toutes les créations", href: "#products" },
        { label: "Colliers", href: "#products" },
        { label: "Boucles d'oreilles", href: "#products" },
        { label: "Bracelets", href: "#products" },
        { label: "Bagues", href: "#products" },
      ],
    },
    {
      title: "Atelier",
      links: [
        { label: "Notre histoire", href: "#about" },
        { label: "Le savoir-faire", href: "#craft" },
        { label: "Journal", href: "#journal" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Assistance",
      links: [
        { label: "Nous contacter", href: "#contact" },
        { label: "Commandes sur mesure", href: "#contact" },
        { label: "Réparations", href: "#faq" },
        { label: "Livraison", href: "#faq" },
      ],
    },
  ],
  legalLinks: [
    { label: "Politique de confidentialité", href: "#" },
    { label: "Conditions générales", href: "#" },
  ],
  copyrightText: "© 2026 Sasa Creation. Fait main avec amour.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
  ],
};
