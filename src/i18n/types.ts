// ─── Types i18n — agrégation des structures de config existantes ─────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export interface WhatsAppConfig {
  phoneNumber: string;
  orderGreeting: string;
  orderTotalLabel: string;
  orderOutro: string;
  contactGreeting: string;
}

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

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

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
  progressText: string;
  ctaText: string;
  ctaTarget: string;
  steps: CraftStep[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  compareAtPrice: number;
  category: string;
  image: string;
  stock: number;
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
  lowStockThreshold: number;
  oneOfAKindText: string;
  lowStockText: string;
}

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

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

export interface ShippingConfig {
  freeShippingThreshold: number;
  progressText: string;
  unlockedText: string;
  remainingText: string;
}

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

export interface LanguageNames {
  fr: string;
  en: string;
  ar: string;
}

export interface Translations {
  site: SiteConfig;
  whatsapp: WhatsAppConfig;
  navigation: NavigationConfig;
  hero: HeroConfig;
  subHero: SubHeroConfig;
  videoSection: VideoSectionConfig;
  craftSteps: CraftStepsConfig;
  products: ProductsConfig;
  features: FeaturesConfig;
  blog: BlogConfig;
  faq: FaqConfig;
  about: AboutConfig;
  shipping: ShippingConfig;
  contact: ContactConfig;
  footer: FooterConfig;
  languageNames: LanguageNames;
}

export type Language = "fr" | "en" | "ar";

export const LANGUAGES: Language[] = ["fr", "en", "ar"];

export function isRtl(lang: Language): boolean {
  return lang === "ar";
}
