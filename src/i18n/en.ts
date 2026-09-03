import type { Translations } from './types';

export const en: Translations = {
  site: {
    title: "Sasa Creation — Handmade Jewelry",
    description:
      "Sasa Creation is a small artisan workshop crafting handmade jewelry — necklaces, earrings, bracelets and rings — made slowly, by hand, with love.",
    language: "en",
  },
  whatsapp: {
    phoneNumber: "+21690271601",
    orderGreeting: "Hello Sasa Creation! I would like to place an order:",
    orderTotalLabel: "Total",
    orderOutro: "Please confirm my order. 🙏",
    contactGreeting: "Hello Sasa Creation! I have a question:",
  },
  navigation: {
    brandName: "Sasa Creation",
    menuLinks: [
      { label: "Collection", href: "#products" },
      { label: "Our Craft", href: "#craft" },
      { label: "Journal", href: "#journal" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
      { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
      { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    ],
    searchPlaceholder: "Search for necklaces, earrings, rings…",
    cartEmptyText: "Your cart is empty — come discover our creations.",
    cartCheckoutText: "Order on WhatsApp",
    continueShoppingText: "Continue shopping",
    menuBackgroundImage: "/images/atelier.jpg",
    announcementText:
      "Free shipping over 300 DT · One-of-a-kind handmade pieces from Tunisia",
  },
  hero: {
    tagline: "Artisanal jewelry · Handmade in Tunisia",
    title: "Every piece tells\na story",
    ctaPrimaryText: "Discover the collection",
    ctaPrimaryTarget: "#products",
    ctaSecondaryText: "Our story",
    ctaSecondaryTarget: "#about",
    backgroundImage: "/images/hero-portrait.jpg",
    trustBadges: ["100% handmade in Tunisia"],
  },
  subHero: {
    tag: "Our philosophy",
    heading: "Jewelry made slowly, for everyday life",
    bodyParagraphs: [
      "At Sasa Creation, no two pieces are exactly alike. Every necklace, every pair of earrings and every ring is shaped by hand at our small workbench — bead by bead, thread by thread — with carefully chosen stones, beads and metals.",
      "We believe jewelry should feel personal. Something you reach for every morning, carrying a memory, a gift, a moment. That's why we make everything slowly, in small batches, and finish each piece as if it were meant for our own family.",
    ],
    linkText: "Discover our story",
    linkTarget: "#about",
    image1: "/images/atelier.jpg",
    image2: "/images/product-4.jpg",
    stats: [
      { value: 500, suffix: "+", label: "Pieces shaped by hand" },
      { value: 100, suffix: "%", label: "Handmade in our workshop" },
      { value: 12, suffix: "", label: "Steps for every piece" },
    ],
  },
  videoSection: {
    tag: "The craft",
    heading: "From our hands to yours",
    bodyParagraphs: [
      "Every Sasa Creation piece begins at the workbench: sketching, selecting stones, shaping wire and knotting silk. We work with freshwater pearls, natural stones, glass beads and gold-plated finishes — materials chosen to be gentle on the skin and made to last.",
      "Because each piece is handmade, small variations are part of its charm. Your jewelry will be one of a kind — never mass-produced, never rushed.",
    ],
    ctaText: "See the creations",
    ctaTarget: "#products",
    backgroundImage: "/images/atelier.jpg",
  },
  craftSteps: {
    tag: "The craft",
    heading: "12 gestures, one piece, one story",
    introText:
      "Keep scrolling — every creation goes through these twelve gestures, in our workshop, with no shortcuts.",
    backgroundImage: "/images/atelier.jpg",
    progressText: "Step {current} of {total}",
    ctaText: "Discover the collection",
    ctaTarget: "#products",
    steps: [
      {
        number: 1,
        title: "The Idea",
        description:
          "It all begins with a pencil sketch, inspired by a stone, a light, a wish.",
      },
      {
        number: 2,
        title: "Choosing the Stones",
        description:
          "Every bead and every stone is sorted by hand — only those that shine on the workbench are kept.",
      },
      {
        number: 3,
        title: "Pairing Materials",
        description:
          "Freshwater pearls, natural stones, glass and gold plating: materials are paired two or three at a time, never more.",
      },
      {
        number: 4,
        title: "Cutting the Thread",
        description:
          "The silk thread is cut to the exact length — neither too tight nor too loose.",
      },
      {
        number: 5,
        title: "Stringing",
        description:
          "Bead after bead, a rhythm sets in. It's the longest gesture, and the most meditative one.",
      },
      {
        number: 6,
        title: "Knotting",
        description:
          "Between each bead, a discreet knot protects the stone and gives the piece its suppleness.",
      },
      {
        number: 7,
        title: "Shaping the Wire",
        description:
          "For rings and pendants, the wire is bent and wrapped with pliers, to a tenth of a millimeter.",
      },
      {
        number: 8,
        title: "Attaching Clasps",
        description:
          "The gold clasp is secured then tested ten times — it must open effortlessly and never give way.",
      },
      {
        number: 9,
        title: "Quality Check",
        description:
          "Under the loupe, every knot, every join is inspected. An imperfect piece never leaves the workshop.",
      },
      {
        number: 10,
        title: "Polishing",
        description:
          "A soft cloth, some patience, and the piece shines with all its brilliance again.",
      },
      {
        number: 11,
        title: "The Gift Box",
        description:
          "The piece is slipped into its gift box, resting on a bed of tissue paper.",
      },
      {
        number: 12,
        title: "The Send-Off",
        description:
          "From our hands to yours — wrapped with the same care as for a family member.",
      },
    ],
  },
  products: {
    tag: "Our collection",
    heading: "Handpicked pieces, shaped by hand",
    description:
      "Small-batch jewelry crafted with freshwater pearls, natural stones and golden details. Each piece is one of a kind — once it's gone, it doesn't come back.",
    viewAllText: "See all creations",
    addToCartText: "Add to cart",
    addedToCartText: "Added ✓",
    categories: ["All", "Necklaces", "Earrings", "Bracelets", "Rings"],
    lowStockThreshold: 3,
    oneOfAKindText: "One of a kind",
    lowStockText: "Only {n} left in stock",
    products: [
      {
        id: 1,
        name: "Luna Beaded Necklace",
        price: 220,
        compareAtPrice: 260,
        category: "Necklaces",
        image: "/images/product-1.png",
        stock: 2,
        isOneOfAKind: true,
      },
      {
        id: 2,
        name: "Aurora Hoop Earrings",
        price: 140,
        compareAtPrice: 0,
        category: "Earrings",
        image: "/images/product-2.png",
        stock: 5,
        isOneOfAKind: false,
      },
      {
        id: 3,
        name: "Terra Bracelet",
        price: 120,
        compareAtPrice: 0,
        category: "Bracelets",
        image: "/images/product-3.png",
        stock: 4,
        isOneOfAKind: false,
      },
      {
        id: 4,
        name: "Solstice Ring",
        price: 160,
        compareAtPrice: 185,
        category: "Rings",
        image: "/images/product-4.jpg",
        stock: 1,
        isOneOfAKind: true,
      },
      {
        id: 5,
        name: "Ivy Necklace",
        price: 190,
        compareAtPrice: 0,
        category: "Necklaces",
        image: "/images/product-5.jpg",
        stock: 3,
        isOneOfAKind: false,
      },
      {
        id: 6,
        name: "Mira Drop Earrings",
        price: 150,
        compareAtPrice: 0,
        category: "Earrings",
        image: "/images/product-6.jpg",
        stock: 6,
        isOneOfAKind: false,
      },
      {
        id: 7,
        name: "Éclat Bracelet",
        price: 130,
        compareAtPrice: 0,
        category: "Bracelets",
        image: "/images/product-7.jpg",
        stock: 2,
        isOneOfAKind: true,
      },
    ],
  },
  features: {
    features: [
      {
        icon: "Heart",
        title: "Truly Handmade",
        description:
          "Every piece is shaped by hand in our workshop — no factory, no mass production.",
      },
      {
        icon: "Leaf",
        title: "Kind Materials",
        description:
          "Hypoallergenic, gold-plated and natural materials, gentle on sensitive skin.",
      },
      {
        icon: "ShieldCheck",
        title: "Made to Last",
        description:
          "Checked at every step, with a one-year repair promise on every piece.",
      },
      {
        icon: "Truck",
        title: "Gift Delivery",
        description:
          "Carefully packaged in a gift box and delivered anywhere in Tunisia within 2 to 4 days.",
      },
    ],
  },
  blog: {
    tag: "Journal",
    heading: "Notes from the workshop",
    viewAllText: "See all articles",
    readMoreText: "Read more",    posts: [
      {
        id: 1,
        title: "How a Sasa Creation Necklace Is Born",
        date: "August 2, 2026",
        image: "/images/product-1.png",
        excerpt:
          "From the first sketch to the final knot — discover the twelve meticulous steps behind each of our handmade necklaces.",
      },
      {
        id: 2,
        title: "Caring for Your Handmade Jewelry",
        date: "July 18, 2026",
        image: "/images/product-5.jpg",
        excerpt:
          "A few simple habits — put them on last, take them off first, plus a soft cloth — are all it takes to keep your pearls and gold-plated finishes shining for years.",
      },
      {
        id: 3,
        title: "Why We Choose Freshwater Pearls",
        date: "June 30, 2026",
        image: "/images/product-6.jpg",
        excerpt:
          "No two freshwater pearls are ever alike — and that's exactly why we love them. A close look at our favorite material.",
      },
    ],
  },
  faq: {
    tag: "Support",
    heading: "Frequently asked questions",
    ctaText: "Still have a question? Write to us",
    ctaTarget: "#contact",
    faqs: [
      {
        id: 1,
        question: "Is every piece really handmade?",
        answer:
          "Yes. Every Sasa Creation piece is shaped by hand in our small workshop — from assembly to polishing to final packaging. Slight variations are natural and make your piece unique.",
      },
      {
        id: 2,
        question: "What materials do you use?",
        answer:
          "We work with freshwater pearls, natural stones, glass beads and gold-plated or sterling silver findings. All our metals are nickel-free and suitable for most sensitive skin.",
      },
      {
        id: 3,
        question: "Do you accept custom orders?",
        answer:
          "Of course — custom pieces are our favorite projects. Whether it's a gift, a bridal set or a creation reimagined from a family keepsake, write to us via the contact form and we'll create something together.",
      },
      {
        id: 4,
        question: "What are the delivery times?",
        answer:
          "Ready-to-ship pieces are dispatched within 1 to 2 business days and usually arrive within 2 to 4 days anywhere in Tunisia. Custom orders take 1 to 2 weeks of creation before shipping. Every order arrives in a gift box.",
      },
      {
        id: 5,
        question: "What happens if my jewelry breaks?",
        answer:
          "We offer a one-year repair promise on every piece. If a clasp, thread or knot gives way, send it back and we'll repair it free of charge — you only cover shipping.",
      },
    ],
  },
  about: {
    sections: [
      {
        tag: "Our story",
        heading: "It all began on a kitchen table",
        paragraphs: [
          "Sasa Creation was born the way many beautiful things are — at home, in the evening, with a box of beads and a great deal of curiosity. What started as gifts for loved ones gradually became, piece after piece, a small workshop.",
          "Still today, every creation is designed, made and packaged by the same hands. We deliberately chose to stay small: small batches, honest materials, and jewelry that feels made for you — because it is.",
        ],
        quote: "",
        attribution: "",
        image: "/images/hero-portrait.jpg",
        backgroundColor: "#423d3f",
        textColor: "#ffffff",
      },
      {
        tag: "A word from Sasa",
        heading: "Created slowly, given with love",
        paragraphs: [],
        quote:
          "When someone wears one of my creations, they carry a little of my time and attention. That's the whole meaning of our craft — a piece of jewelry must have meaning.",
        attribution: "— Sasa, Founder & Artisan",
        image: "/images/atelier.jpg",
        backgroundColor: "#8b6d4b",
        textColor: "#ffffff",
      },
    ],
  },
  shipping: {
    freeShippingThreshold: 300,
    progressText: "Free shipping",
    unlockedText: "🎉 Free shipping unlocked!",
    remainingText: "{n} DT away from free shipping",
  },
  contact: {
    heading: "Let's create something together",
    description:
      "A question about a piece, a custom order or a special gift? Write to us — we personally read and reply to every message.",
    locationLabel: "Workshop",
    location: "Our workshop — visits by appointment",
    emailLabel: "Email",
    email: "hello@sasacreation.com",
    phoneLabel: "Phone",
    phone: "+216 90 271 601",
    formFields: {
      nameLabel: "Your name",
      namePlaceholder: "Mary Smith",
      emailLabel: "Email address",
      emailPlaceholder: "mary@example.tn",
      messageLabel: "Message",
      messagePlaceholder:
        "Tell us about the piece you're dreaming of — occasion, colors, budget…",
    },
    submitText: "Send message",
    submittingText: "Sending…",
    submittedText: "Message sent ✓",
    successMessage:
      "Thank you! We've received your message and will reply within 1 to 2 days.",
    backgroundImage: "/images/atelier.jpg",
  },
  footer: {
    brandName: "Sasa Creation",
    brandDescription:
      "Artisanal jewelry created slowly and with love — necklaces, earrings, bracelets and rings in small batches, from our workshop to your home.",
    newsletterHeading: "Join the Sasa family",
    newsletterDescription:
      "New creations, workshop stories and early access to small batches — once a month, no spam.",
    newsletterPlaceholder: "Your email address",
    newsletterButtonText: "Sign up",
    newsletterSuccessText: "Welcome to the family! ✓",
    linkGroups: [
      {
        title: "Shop",
        links: [
          { label: "All creations", href: "#products" },
          { label: "Necklaces", href: "#products" },
          { label: "Earrings", href: "#products" },
          { label: "Bracelets", href: "#products" },
          { label: "Rings", href: "#products" },
        ],
      },
      {
        title: "Workshop",
        links: [
          { label: "Our story", href: "#about" },
          { label: "The craft", href: "#craft" },
          { label: "Journal", href: "#journal" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Contact us", href: "#contact" },
          { label: "Custom orders", href: "#contact" },
          { label: "Repairs", href: "#faq" },
          { label: "Shipping", href: "#faq" },
        ],
      },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
    copyrightText: "© 2026 Sasa Creation. Handmade with love.",
    socialLinks: [
      { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
      { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    ],
  },
  languageNames: { fr: "Français", en: "English", ar: "العربية" },
};
