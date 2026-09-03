import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '../i18n/types';
import { useLanguage } from '../i18n/LanguageContext';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import SubHero from '../sections/SubHero';
import CraftSteps from '../sections/CraftSteps';
import Products from '../sections/Products';
import Features from '../sections/Features';
import Blog from '../sections/Blog';
import FAQ from '../sections/FAQ';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import type { CartItem } from '../App';

interface HomeProps {
  cartItems: CartItem[];
  onAddToCart: (product: Product, source?: string) => void;
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export default function Home({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity,
}: HomeProps) {
  const { language, t } = useLanguage();
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    // Remonte en haut lors du retour sur la page d'accueil
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // Relance panier abandonné — bandeau si panier existant au chargement
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    if (total > 0) {
      const dismissed = sessionStorage.getItem('sasa-cart-reminder-dismissed');
      if (!dismissed) {
        const timer = setTimeout(() => setShowReminder(true), 2500);
        return () => clearTimeout(timer);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- intentionnel : une seule fois au montage

  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white" lang={language}>
      <Navigation
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onUpdateQuantity={onUpdateQuantity}
      />

      {/* Bandeau relance panier — apparaît après 2,5 s si panier existant */}
      {showReminder && cartTotal > 0 && (
        <div className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 z-40 bg-[#2b2118] text-[#faf6f0] p-4 pr-10 shadow-[0_10px_40px_rgba(43,33,24,0.35)] rounded-lg animate-fade-up">
          <button
            onClick={() => {
              setShowReminder(false);
              sessionStorage.setItem('sasa-cart-reminder-dismissed', '1');
            }}
            aria-label="Fermer"
            className="absolute top-2 right-2 text-[#faf6f0]/60 hover:text-[#faf6f0] cursor-pointer p-1"
          >
            ×
          </button>
          <p className="flex items-center gap-2 text-sm font-medium mb-3">
            <ShoppingBag size={16} className="text-[#d4c4a8]" aria-hidden="true" />
            {t.pdp.cartReminderText
              .replace('{n}', String(cartTotal))
              .replace('{s}', cartTotal > 1 ? 's' : '')}
          </p>
          <Link
            to="/"
            onClick={() => {
              setShowReminder(false);
              sessionStorage.setItem('sasa-cart-reminder-dismissed', '1');
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block text-xs tracking-widest uppercase text-[#d4c4a8] hover:text-white transition-colors cursor-pointer"
          >
            {t.products.viewAllText} →
          </Link>
        </div>
      )}

      <main>
        <Hero />
        <SubHero />
        <CraftSteps />
        <Products onAddToCart={onAddToCart} />
        <Features />
        <Blog />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
