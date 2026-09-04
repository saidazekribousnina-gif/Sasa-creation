import type { Translations } from './types';

// ─── Bundle français — source de vérité historique (config.ts) ────────────────

export const fr: Translations = {
  site: {
    title: "Sasa Creation — Bijoux faits main",
    description:
      "Sasa Creation est un petit atelier artisanal qui crée des bijoux faits main — colliers, boucles d'oreilles, bracelets et bagues — fabriqués lentement, à la main, avec amour.",
    language: "fr",
  },

  whatsapp: {
    phoneNumber: "+21690271601",
    orderGreeting: "Bonjour Sasa Creation ! Je souhaite passer une commande :",
    orderTotalLabel: "Total",
    orderOutro: "Merci de confirmer ma commande. 🙏",
    contactGreeting: "Bonjour Sasa Creation ! J'ai une question :",
  },

  navigation: {
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
    cartTitle: "Panier",
    menuBackgroundImage: "/images/atelier.webp",
    announcementText: "Livraison offerte dès 300 DT · Pièces uniques faites main en Tunisie",
  },

  hero: {
    tagline: "Bijoux artisanaux · Faits main en Tunisie",
    title: "Chaque pièce\nraconte une histoire",
    ctaPrimaryText: "Découvrir la collection",
    ctaPrimaryTarget: "#products",
    ctaSecondaryText: "Notre histoire",
    ctaSecondaryTarget: "#about",
    backgroundImage: "/images/hero-portrait.webp",
    trustBadges: ["100% fait main en Tunisie"],
  },

  subHero: {
    tag: "Notre philosophie",
    heading: "Des bijoux créés lentement, pour le quotidien",
    bodyParagraphs: [
      "Chez Sasa Creation, aucune pièce ne ressemble exactement à une autre. Chaque collier, chaque boucle d'oreille et chaque bague est façonné à la main sur notre petit établi — perle après perle, fil après fil — avec des pierres, des perles et des métaux soigneusement choisis.",
      "Nous croyons qu'un bijou doit être personnel. Un objet que l'on attrape chaque matin, qui porte un souvenir, un cadeau, un instant. C'est pourquoi nous créons tout lentement, en petites séries, et finissons chaque pièce comme si elle était destinée à notre famille.",
    ],
    linkText: "Découvrir notre histoire",
    linkTarget: "#about",
    image1: "/images/atelier.webp",
    image2: "/images/product-4.webp",
    stats: [
      { value: 500, suffix: "+", label: "Pièces façonnées à la main" },
      { value: 100, suffix: "%", label: "Fait main dans notre atelier" },
      { value: 12, suffix: "", label: "Étapes pour chaque pièce" },
    ],
  },

  videoSection: {
    tag: "Le savoir-faire",
    heading: "De nos mains aux vôtres",
    bodyParagraphs: [
      "Chaque création Sasa Creation naît sur l'établi : croquis, sélection des pierres, façonnage du fil et nouage de la soie. Nous travaillons avec des perles d'eau douce, des pierres naturelles, des perles de verre et des finitions dorées — des matières choisies pour être douces avec la peau et faites pour durer.",
      "Parce que chaque pièce est faite main, de petites variations font partie de son charme. Votre bijou sera unique — jamais produit en série, jamais pressé.",
    ],
    ctaText: "Voir les créations",
    ctaTarget: "#products",
    backgroundImage: "/images/atelier.webp",
  },

  craftSteps: {
    tag: "Le savoir-faire",
    heading: "12 gestes, une pièce, une histoire",
    introText:
      "Faites défiler — chaque création passe par ces douze gestes, dans notre atelier, sans raccourci.",
    backgroundImage: "/images/atelier.webp",
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
  },

  products: {
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
        slug: "collier-luna-perle",
        name: "Collier Luna Perlé",
        price: 220,
        compareAtPrice: 260,
        category: "Colliers",
        image: "/images/product-1.webp",
        stock: 2,
        isOneOfAKind: true,
      },
      {
        id: 2,
        slug: "creoles-aurora",
        name: "Créoles Aurora",
        price: 140,
        compareAtPrice: 0,
        category: "Boucles d'oreilles",
        image: "/images/product-2.webp",
        stock: 5,
        isOneOfAKind: false,
      },
      {
        id: 3,
        slug: "bracelet-terra",
        name: "Bracelet Terra",
        price: 120,
        compareAtPrice: 0,
        category: "Bracelets",
        image: "/images/product-3.webp",
        stock: 4,
        isOneOfAKind: false,
      },
      {
        id: 4,
        slug: "bague-solstice",
        name: "Bague Solstice",
        price: 160,
        compareAtPrice: 185,
        category: "Bagues",
        image: "/images/product-4.webp",
        stock: 1,
        isOneOfAKind: true,
      },
      {
        id: 5,
        slug: "collier-ivy",
        name: "Collier Ivy",
        price: 190,
        compareAtPrice: 0,
        category: "Colliers",
        image: "/images/product-5.webp",
        stock: 3,
        isOneOfAKind: false,
      },
      {
        id: 6,
        slug: "pendentifs-mira",
        name: "Pendentifs Mira",
        price: 150,
        compareAtPrice: 0,
        category: "Boucles d'oreilles",
        image: "/images/product-6.webp",
        stock: 6,
        isOneOfAKind: false,
      },
      {
        id: 7,
        slug: "bracelet-eclat",
        name: "Bracelet Éclat",
        price: 130,
        compareAtPrice: 0,
        category: "Bracelets",
        image: "/images/product-7.webp",
        stock: 2,
        isOneOfAKind: true,
      },
    ],
  },

  features: {
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
  },

  blog: {
    tag: "Journal",
    heading: "Notes de l'atelier",
    viewAllText: "Voir tous les articles",
    readMoreText: "Lire la suite",
    posts: [
      {
        id: 1,
        title: "Comment naît un collier Sasa Creation",
        date: "2 août 2026",
        image: "/images/product-1.webp",
        excerpt:
          "Du premier croquis au nœud final — découvrez les douze étapes minutieuses derrière chacun de nos colliers faits main.",
      },
      {
        id: 2,
        title: "Entretenir vos bijoux artisanaux",
        date: "18 juillet 2026",
        image: "/images/product-5.webp",
        excerpt:
          "Quelques habitudes simples — mis en dernier, retirés en premier, et un chiffon doux — suffisent à faire briller vos perles et finitions dorées pendant des années.",
      },
      {
        id: 3,
        title: "Pourquoi nous choisissons les perles d'eau douce",
        date: "30 juin 2026",
        image: "/images/product-6.webp",
        excerpt:
          "Deux perles d'eau douce ne sont jamais identiques — et c'est exactement pour cela que nous les aimons. Regard de près sur notre matière préférée.",
      },
    ],
  },

  faq: {
    tag: "Assistance",
    heading: "Questions fréquentes",
    ctaText: "Encore une question ? Écrivez-nous",
    ctaTarget: "#contact",
    faqs: [
      {
        id: 1,
        question: "Chaque pièce est-elle vraiment faite main ?",
        answer:
          "Oui. Chaque création Sasa Creation est façonnée à la main dans notre petit atelier — du montage au polissage en passant par l'emballage final. De légères variations sont naturelles et rendent votre pièce unique.",
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
  },

  about: {
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
        image: "/images/hero-portrait.webp",
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
        image: "/images/atelier.webp",
        backgroundColor: "#8b6d4b",
        textColor: "#ffffff",
      },
    ],
  },

  shipping: {
    freeShippingThreshold: 300,
    progressText: "Livraison offerte",
    unlockedText: "🎉 Livraison offerte débloquée !",
    remainingText: "Encore {n} DT pour la livraison offerte",
  },

  contact: {
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
    backgroundImage: "/images/atelier.webp",
  },

  footer: {
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
  },

  pdp: {
    backToCollectionText: "← Retour à la collection",
    orderViaWhatsAppText: "Commander sur WhatsApp",
    addToCartText: "Ajouter au panier",
    addedToCartText: "Ajouté ✓",
    stockText: "Plus que {n} en stock",
    oneOfAKindBannerText: "Pièce unique — il n'en existera pas d'autre",
    includesHeading: "Votre commande comprend",
    includes: [
      "La pièce, emballée dans son coffret cadeau",
      "Une pochette en coton pour le transport",
      "La carte de soin de l'atelier",
      "La promesse de réparation d'un an",
    ],
    careHeading: "Prendre soin",
    careText:
      "Dernier bijou mis, premier retiré. Un chiffon doux après le port, à l'abri de l'humidité. C'est tout.",
    shippingHeading: "Livraison",
    shippingText:
      "Expédiée sous 1 à 2 jours ouvrés, livrée partout en Tunisie en 2 à 4 jours. Livraison offerte dès 300 DT.",
    shareText: "Partager",
    notFoundText: "Cette pièce n'existe pas ou a déjà trouvé sa propriétaire.",
    cartReminderText: "Votre panier vous attend — {n} pièce{s} prête{s} à commander",
  },

  wishlist: {
    tabText: "Favoris",
    emptyText: "Aucun favori pour l'instant — double-cliquez sur une pièce qui vous plaît ♥",
    addToCartText: "Ajouter au panier",
    doubleTapAriaLabel: "Ajouter aux favoris",
  },

  stories: {
    viewAllText: "Voir tout",
    stories: [
      {
        id: 1,
        title: "Nouveautés",
        slides: [
          {
            text: "Les dernières créations de l'atelier, tout juste terminées",
            ctaText: "Découvrir les nouveautés",
            ctaTarget: "#products",
            ctaWhatsApp: false,
            image: "/images/product-1.webp",
          },
        ],
      },
      {
        id: 2,
        title: "Pièces uniques",
        slides: [
          {
            text: "Il n'en existera jamais d'autre. Vraiment.",
            ctaText: "Voir les pièces uniques",
            ctaTarget: "#products",
            ctaWhatsApp: false,
            image: "/images/product-4.webp",
          },
        ],
      },
      {
        id: 3,
        title: "Coulisses",
        slides: [
          {
            text: "Perle après perle, dans notre atelier tunisien",
            ctaText: "Les 12 gestes du savoir-faire",
            ctaTarget: "#craft",
            ctaWhatsApp: false,
            image: "/images/atelier.webp",
          },
        ],
      },
      {
        id: 4,
        title: "Commander",
        slides: [
          {
            text: "Une question ? Écrivez-nous directement sur WhatsApp",
            ctaText: "Discuter sur WhatsApp",
            ctaTarget: "",
            ctaWhatsApp: true,
            image: "/images/hero-portrait.webp",
          },
        ],
      },
    ],
  },

  languageNames: {
    fr: "Français",
    en: "English",
    ar: "العربية",
  },
};
