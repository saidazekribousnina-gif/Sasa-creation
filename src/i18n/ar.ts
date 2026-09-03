import type { Translations } from './types';

export const ar: Translations = {
  site: {
    title: "ساسا كريشن — حلي يدوية الصنع",
    description:
      "ساسا كريشن ورشة حرفية صغيرة تبتكر حليًا مصنوعة يدويًا — قلادات وأقراط وأسورة وخواتم — تُصنع على مهلٍ، باليد، وبكل حب.",
    language: "ar",
  },

  whatsapp: {
    phoneNumber: "+21690271601",
    orderGreeting: "مرحبًا ساسا كريشن! أودّ تقديم طلب:",
    orderTotalLabel: "المجموع",
    orderOutro: "أرجو تأكيد طلبي. 🙏",
    contactGreeting: "مرحبًا ساسا كريشن! لديّ سؤال:",
  },

  navigation: {
    brandName: "Sasa Creation",
    menuLinks: [
      { label: "المجموعة", href: "#products" },
      { label: "حرفتنا", href: "#craft" },
      { label: "المدوّنة", href: "#journal" },
      { label: "من نحن", href: "#about" },
      { label: "اتصلوا بنا", href: "#contact" },
    ],
    socialLinks: [
      { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
      { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    ],
    searchPlaceholder: "ابحثوا عن قلادات، أقراط، خواتم…",
    cartEmptyText: "سلتكم فارغة — تعالوا اكتشفوا إبداعاتنا.",
    cartCheckoutText: "الطلب عبر واتساب",
    continueShoppingText: "مواصلة التسوّق",
    menuBackgroundImage: "/images/atelier.webp",
    announcementText: "توصيل مجاني من 300 دينار · قطع يدوية فريدة من تونس",
  },

  hero: {
    tagline: "حلي حرفية · مصنوعة يدويًا في تونس",
    title: "كل قطعة تحكي\nحكاية",
    ctaPrimaryText: "اكتشفوا المجموعة",
    ctaPrimaryTarget: "#products",
    ctaSecondaryText: "قصتنا",
    ctaSecondaryTarget: "#about",
    backgroundImage: "/images/hero-portrait.webp",
    trustBadges: ["100% صناعة يدوية في تونس"],
  },

  subHero: {
    tag: "فلسفتنا",
    heading: "حلي تُصنع ببطء، لكل يوم",
    bodyParagraphs: [
      "في ساسا كريشن، لا توجد قطعة تشبه أخرى تمامًا. كل قلادة وكل قرط وكل خاتم يُصنع يدويًا على طاولتنا الصغيرة — حبّة بعد حبّة، وخيطًا بعد خيط — بأحجار وخرزات ومعادن مختارة بعناية فائقة.",
      "نؤمن أنّ الحليّ يجب أن يكون شخصيًا. قطعة تلتقطها كل صباح، تحمل ذكرى أو هدية أو لحظة خاصة. لهذا نصنع كل شيء ببطء وبكميات صغيرة، ونُنهي كل قطعة كأنّها وُجدت لعائلتنا.",
    ],
    linkText: "اكتشفوا قصتنا",
    linkTarget: "#about",
    image1: "/images/atelier.webp",
    image2: "/images/product-4.webp",
    stats: [
      { value: 500, suffix: "+", label: "قطعة صُنعت يدويًا" },
      { value: 100, suffix: "%", label: "صناعة يدوية في ورشتنا" },
      { value: 12, suffix: "", label: "خطوة لكل قطعة" },
    ],
  },

  videoSection: {
    tag: "الحرفة",
    heading: "من أيدينا إلى أيديكم",
    bodyParagraphs: [
      "كل إبداع من ساسا كريشن يولد على طاولة العمل: رسم أولي، اختيار الأحجار، تشكيل السلك وعقد الحرير. نعمل بخرزات الماء العذب والأحجار الطبيعية وخرزات الزجاج والطلاءات الذهبية — مواد مختارة لتكون لطيفة على البشرة وتدوم طويلًا.",
      "لأن كل قطعة مصنوعة يدويًا، فإن الاختلافات الصغيرة جزء من سحرها. حليّك سيكون فريدًا — فلا إنتاج بالجملة ولا صناعة على عجل.",
    ],
    ctaText: "شاهدوا الإبداعات",
    ctaTarget: "#products",
    backgroundImage: "/images/atelier.webp",
  },

  craftSteps: {
    tag: "الحرفة",
    heading: "12 حركة، قطعة واحدة، حكاية واحدة",
    introText:
      "تابعوا التمرير — كل إبداع يمرّ بهذه الحركات الاثنتي عشرة، في ورشتنا، دون أي اختصار.",
    backgroundImage: "/images/atelier.webp",
    progressText: "الخطوة {current} من {total}",
    ctaText: "اكتشفوا المجموعة",
    ctaTarget: "#products",
    steps: [
      {
        number: 1,
        title: "الفكرة",
        description:
          "كل شيء يبدأ برسم قلم رصاص، مستوحى من حجر أو ضوء أو رغبة.",
      },
      {
        number: 2,
        title: "اختيار الأحجار",
        description:
          "كل خرزة وكل حجر يُفرز يدويًا — لا نُبقي إلا تلك التي تلمع على طاولة العمل.",
      },
      {
        number: 3,
        title: "تنسيق المواد",
        description:
          "خرزات الماء العذب والأحجار الطبيعية والزجاج والطلاءات الذهبية: تتناغم المواد مثنى أو ثلاثًا، ولا أكثر.",
      },
      {
        number: 4,
        title: "قصّ الخيط",
        description:
          "يُقصّ خيط الحرير بالطول الدقيق — فلا يكون مشدودًا أكثر من اللازم ولا مرتخيًا أكثر منه.",
      },
      {
        number: 5,
        title: "النَّظْم",
        description:
          "حبّة بعد حبّة على الخيط، يستقر الإيقاع. إنه أطول الحركات وأكثرها تأمّلًا.",
      },
      {
        number: 6,
        title: "العقد",
        description:
          "بين كل حبّة وأخرى، عقدة خفية تحمي الحجر وتمنح الحليّ مرونته.",
      },
      {
        number: 7,
        title: "تشكيل السلك",
        description:
          "بالنسبة للخواتم والقلادات المتدلية، يُثنى السلك ويُلفّ بالملقط، بدقة عُشر المليمتر.",
      },
      {
        number: 8,
        title: "تركيب الأقفال",
        description:
          "يُثبّت القفل الذهبي ثم يُختبر عشر مرات — يجب أن يفتح بسهولة ولا ينفلت أبدًا.",
      },
      {
        number: 9,
        title: "فحص الجودة",
        description:
          "تحت العدسة، تُفحص كل عقدة وكل لحامة. القطعة غير المثالية لا تغادر الورشة أبدًا.",
      },
      {
        number: 10,
        title: "التلميع",
        description:
          "قماش ناعم، وصبر، فتستعيد القطعة كل بريقها.",
      },
      {
        number: 11,
        title: "علبة الهدية",
        description:
          "توضع القطعة في علبة الهدية، على فراش من ورق الحرير.",
      },
      {
        number: 12,
        title: "الإرسال",
        description:
          "من أيدينا إلى أيديكم — مغلّفة بالعناية نفسها التي نغلّف بها هدية لعزيز من العائلة.",
      },
    ],
  },

  products: {
    tag: "مجموعتنا",
    heading: "قطع مختارة، مصنوعة يدويًا",
    description:
      "حلي بكميات صغيرة، تُصنع بخرزات الماء العذب والأحجار الطبيعية والتفاصيل الذهبية. كل قطعة فريدة — إذا غادرت، لا تعود.",
    viewAllText: "شاهدوا كل الإبداعات",
    addToCartText: "أضيفوا إلى السلة",
    addedToCartText: "أُضيفت ✓",
    categories: ["الكل", "قلادات", "أقراط", "أسورة", "خواتم"],
    lowStockThreshold: 3,
    oneOfAKindText: "قطعة فريدة",
    lowStockText: "بقي {n} فقط في المخزون",
    products: [
      {
        id: 1,
        slug: "collier-luna-perle",
        name: "قلادة لونا المرصّعة",
        price: 220,
        compareAtPrice: 260,
        category: "قلادات",
        image: "/images/product-1.webp",
        stock: 2,
        isOneOfAKind: true,
      },
      {
        id: 2,
        slug: "creoles-aurora",
        name: "أقراط أورورا الدائرية",
        price: 140,
        compareAtPrice: 0,
        category: "أقراط",
        image: "/images/product-2.webp",
        stock: 5,
        isOneOfAKind: false,
      },
      {
        id: 3,
        slug: "bracelet-terra",
        name: "سوار تيرا",
        price: 120,
        compareAtPrice: 0,
        category: "أسورة",
        image: "/images/product-3.webp",
        stock: 4,
        isOneOfAKind: false,
      },
      {
        id: 4,
        slug: "bague-solstice",
        name: "خاتم سولستيس",
        price: 160,
        compareAtPrice: 185,
        category: "خواتم",
        image: "/images/product-4.webp",
        stock: 1,
        isOneOfAKind: true,
      },
      {
        id: 5,
        slug: "collier-ivy",
        name: "قلادة آيفي",
        price: 190,
        compareAtPrice: 0,
        category: "قلادات",
        image: "/images/product-5.webp",
        stock: 3,
        isOneOfAKind: false,
      },
      {
        id: 6,
        slug: "pendentifs-mira",
        name: "أقراط ميرا المتدلية",
        price: 150,
        compareAtPrice: 0,
        category: "أقراط",
        image: "/images/product-6.webp",
        stock: 6,
        isOneOfAKind: false,
      },
      {
        id: 7,
        slug: "bracelet-eclat",
        name: "سوار إيكلا",
        price: 130,
        compareAtPrice: 0,
        category: "أسورة",
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
        title: "صناعة يدوية حقيقية",
        description:
          "كل قطعة تُصنع يدويًا في ورشتنا — بلا مصنع، وبلا إنتاج بالجملة.",
      },
      {
        icon: "Leaf",
        title: "مواد لطيفة على البشرة",
        description:
          "مواد مضادة للحساسية، مطلية وذهبية وطبيعية، لطيفة على البشرات الحساسة.",
      },
      {
        icon: "ShieldCheck",
        title: "مصممة لتدوم",
        description:
          "تُفحص في كل خطوة، مع وعد بإصلاح مجاني لمدة عام على كل قطعة.",
      },
      {
        icon: "Truck",
        title: "توصيل كهدية",
        description:
          "مغلّفة بعناية في علبة هدايا ويُوصَّل في جميع أنحاء تونس خلال 2 إلى 4 أيام.",
      },
    ],
  },

  blog: {
    tag: "المدوّنة",
    heading: "ملاحظات من الورشة",
    viewAllText: "شاهدوا كل المقالات",
    readMoreText: "اقرأوا المزيد",
    posts: [
      {
        id: 1,
        title: "كيف تولد قلادة من ساسا كريشن",
        date: "٢ أوت ٢٠٢٦",
        image: "/images/product-1.webp",
        excerpt:
          "من الرسم الأول إلى العقدة الأخيرة — اكتشفوا الخطوات الاثنتي عشرة الدقيقة التي تقف خلف كل قلادة نصنعها يدويًا.",
      },
      {
        id: 2,
        title: "كيف تعتني بحليك الحرفية",
        date: "١٨ جويلية ٢٠٢٦",
        image: "/images/product-5.webp",
        excerpt:
          "عادات بسيطة — تُلبس في الآخر وتُخلع في الأول، مع قماش ناعم — تكفي لتحافظ على بريق خرزاتك وطلاءاتك الذهبية لسنوات.",
      },
      {
        id: 3,
        title: "لماذا نختار خرزات الماء العذب",
        date: "٣٠ جوان ٢٠٢٦",
        image: "/images/product-6.webp",
        excerpt:
          "لا تتشابه خرزات الماء العذب أبدًا — وهذا بالضبط سبب حبنا لها. نظرة قريبة على مادتنا المفضلة.",
      },
    ],
  },

  faq: {
    tag: "المساعدة",
    heading: "أسئلة شائعة",
    ctaText: "سؤال آخر؟ راسلونا",
    ctaTarget: "#contact",
    faqs: [
      {
        id: 1,
        question: "هل كل قطعة مصنوعة يدويًا فعلًا؟",
        answer:
          "نعم. كل إبداع من ساسا كريشن يُصنع يدويًا في ورشتنا الصغيرة — من التركيب إلى التغليف النهائي مرورًا بالتلميع. الاختلافات الطفيفة طبيعية وتجعل قطعتك فريدة.",
      },
      {
        id: 2,
        question: "ما المواد التي تستعملونها؟",
        answer:
          "نعمل بخرزات الماء العذب والأحجار الطبيعية وخرزات الزجاج والطلاءات الذهبية أو الفضة الإسترلينية. جميع المعادن خالية من النيكل ومناسبة لمعظم البشرات الحساسة.",
      },
      {
        id: 3,
        question: "هل تقبلون الطلبات الخاصة؟",
        answer:
          "بالطبع — القطع الخاصة هي مشاريعنا المفضلة. سواء كانت هدية أو طقم زفاف أو قطعة أُعيدت صياغتها من ذكرى عائلية، راسلونا عبر نموذج الاتصال وسنبدع شيئًا معًا.",
      },
      {
        id: 4,
        question: "ما هي آجال التوصيل؟",
        answer:
          "القطع الجاهزة تُشحن خلال يوم عمل إلى يومين وتصل عادة خلال 2 إلى 4 أيام في جميع أنحاء تونس. الطلبات الخاصة تحتاج من أسبوع إلى أسبوعين من الصنع قبل الشحن. كل طلب يصل في علبة هدايا.",
      },
      {
        id: 5,
        question: "ماذا لو انكسر حليّي؟",
        answer:
          "نقدّم وعدًا بإصلاح مجاني لمدة عام على كل قطعة. إذا انفلت قفل أو خيط أو عقدة، أعيدوها لنا وسنصلحها مجانًا — تدفعون الشحن فقط.",
      },
    ],
  },

  about: {
    sections: [
      {
        tag: "قصتنا",
        heading: "كل شيء بدأ على طاولة مطبخ",
        paragraphs: [
          "وُلدت ساسا كريشن مثل كثير من الأشياء الجميلة — في البيت، في المساء، مع علبة خرزات وكثير من الفضول. ما بدأ كهدايا للأحباب تحوّل تدريجيًا، قطعة بعد قطعة، إلى ورشة صغيرة.",
          "واليوم أيضًا، كل إبداع يُرسم ويُصنع ويُغلّف بالأيدي نفسها. اخترنا عن قصد أن نبقى صغارًا: كميات صغيرة، مواد صادقة، وحلي يبدو مصنوعًا لكِ — لأنه كذلك فعلًا.",
        ],
        quote: "",
        attribution: "",
        image: "/images/hero-portrait.webp",
        backgroundColor: "#423d3f",
        textColor: "#ffffff",
      },
      {
        tag: "كلمة من ساسا",
        heading: "صُنع ببطء، وُهِب بحب",
        paragraphs: [],
        quote:
          "من يرتدي إحدى إبداعاتي يحمل معه قليلًا من وقتي واهتمامي. في هذا كلّ معنى حرفتنا — فالحليّ يجب أن يحمل معنى.",
        attribution: "— ساسا، مؤسِّسة وحرفية",
        image: "/images/atelier.webp",
        backgroundColor: "#8b6d4b",
        textColor: "#ffffff",
      },
    ],
  },

  shipping: {
    freeShippingThreshold: 300,
    progressText: "توصيل مجاني",
    unlockedText: "🎉 تم تفعيل التوصيل المجاني!",
    remainingText: "باقي {n} دينار للتوصيل المجاني",
  },

  contact: {
    heading: "لنبدع شيئًا معًا",
    description:
      "سؤال عن قطعة، طلب خاص أو هدية مميزة؟ راسلونا — نقرأ ونردّ على كل رسالة بأنفسنا.",
    locationLabel: "الورشة",
    location: "ورشتنا — زيارات بموعد مسبق",
    emailLabel: "البريد الإلكتروني",
    email: "hello@sasacreation.com",
    phoneLabel: "الهاتف",
    phone: "+216 90 271 601",
    formFields: {
      nameLabel: "اسمك",
      namePlaceholder: "مريم بن علي",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "mariam@example.tn",
      messageLabel: "الرسالة",
      messagePlaceholder:
        "حدثونا عن القطعة التي تتخيلونها — المناسبة، الألوان، الميزانية…",
    },
    submitText: "إرسال الرسالة",
    submittingText: "جارٍ الإرسال…",
    submittedText: "أُرسلت الرسالة ✓",
    successMessage:
      "شكرًا! وصلتنا رسالتك وسنردّ عليك خلال يوم إلى يومين.",
    backgroundImage: "/images/atelier.webp",
  },

  footer: {
    brandName: "Sasa Creation",
    brandDescription:
      "حلي حرفية تُصنع ببطء وبحب — قلادات وأقراط وأسورة وخواتم بكميات صغيرة، من ورشتنا حتى بيتك.",
    newsletterHeading: "انضموا إلى عائلة ساسا",
    newsletterDescription:
      "إبداعات جديدة، حكايات من الورشة، ووصول مبكر إلى الكميات الصغيرة — مرة في الشهر، دون إزعاج.",
    newsletterPlaceholder: "بريدكم الإلكتروني",
    newsletterButtonText: "اشتركوا",
    newsletterSuccessText: "أهلًا بكم في العائلة! ✓",
    linkGroups: [
      {
        title: "المتجر",
        links: [
          { label: "كل الإبداعات", href: "#products" },
          { label: "قلادات", href: "#products" },
          { label: "أقراط", href: "#products" },
          { label: "أسورة", href: "#products" },
          { label: "خواتم", href: "#products" },
        ],
      },
      {
        title: "الورشة",
        links: [
          { label: "قصتنا", href: "#about" },
          { label: "الحرفة", href: "#craft" },
          { label: "المدوّنة", href: "#journal" },
          { label: "الأسئلة الشائعة", href: "#faq" },
        ],
      },
      {
        title: "المساعدة",
        links: [
          { label: "تواصلوا معنا", href: "#contact" },
          { label: "طلبات خاصة", href: "#contact" },
          { label: "الإصلاحات", href: "#faq" },
          { label: "التوصيل", href: "#faq" },
        ],
      },
    ],
    legalLinks: [
      { label: "سياسة الخصوصية", href: "#" },
      { label: "الشروط العامة", href: "#" },
    ],
    copyrightText: "© 2026 ساسا كريشن. صُنع يدويًا بحب.",
    socialLinks: [
      { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
      { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    ],
  },

  pdp: {
    backToCollectionText: "← العودة إلى المجموعة",
    orderViaWhatsAppText: "الطلب عبر واتساب",
    addToCartText: "أضيفوا إلى السلة",
    addedToCartText: "أُضيفت ✓",
    stockText: "بقي {n} فقط في المخزون",
    oneOfAKindBannerText: "قطعة فريدة — لن تتكرر أبدًا",
    includesHeading: "يشمل طلبكم",
    includes: [
      "القطعة في علبة الهدية الخاصة بها",
      "كيس قطني لحفظها",
      "بطاقة العناية من الورشة",
      "وعد الإصلاح المجاني لمدة عام",
    ],
    careHeading: "العناية بها",
    careText: "تُلبس في الآخر وتُخلع في الأول، مع قماش ناعم بعد كل استخدام، بعيدًا عن الرطوبة. هذا كل شيء.",
    shippingHeading: "التوصيل",
    shippingText: "تُشحن خلال يوم إلى يومي عمل، وتصل إلى أي مكان في تونس خلال 2 إلى 4 أيام. توصيل مجاني من 300 دينار.",
    shareText: "شاركوا",
    notFoundText: "هذه القطعة غير موجودة — أو وجدت صاحبتها بالفعل.",
    cartReminderText: "سلتكم تنتظركم — {n} قطعة جاهزة للطلب",
  },

  languageNames: {
    fr: "Français",
    en: "English",
    ar: "العربية",
  },
};
