import { useState, useCallback, useEffect } from 'react';
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
import { getSafeStorage, loadCart, saveCart } from '../lib/cartStorage';
import { hapticFeedback } from '../lib/haptics';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Home() {
  const { language } = useLanguage();
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storage = getSafeStorage();
    return storage ? loadCart(storage) : [];
  });

  useEffect(() => {
    const storage = getSafeStorage();
    if (storage) saveCart(storage, cartItems);
  }, [cartItems]);

  const handleAddToCart = useCallback((product: Product) => {
    hapticFeedback(10);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ];
    });
  }, []);

  const handleRemoveFromCart = useCallback((id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const handleUpdateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white" lang={language}>
      <Navigation
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <main>
        <Hero />
        <SubHero />
        <CraftSteps />
        <Products onAddToCart={handleAddToCart} />
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
