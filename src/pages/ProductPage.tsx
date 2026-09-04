import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowRight, ShoppingBag, Check, MessageCircle, Share2, Heart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Product } from '../i18n/types';
import { buildOrderMessage, buildWhatsAppUrl } from '../lib/whatsapp';
import { hapticFeedback } from '../lib/haptics';
import { trackEvent } from '../lib/analytics';
import { trackMetaEvent } from '../lib/metaPixel';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import WhatsAppFloat from '../sections/WhatsAppFloat';
import type { CartItem } from '../App';

interface ProductPageProps {
  cartItems: CartItem[];
  onAddToCart: (product: Product, source?: string) => void;
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const ProductPage = ({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity,
}: ProductPageProps) => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const topRef = useRef<HTMLDivElement>(null);
  const [isAdded, setIsAdded] = useState(false);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  const product = useMemo(
    () => t.products.products.find((p) => p.slug === slug),
    [t, slug]
  );

  const relatedProducts = useMemo(
    () =>
      product
        ? t.products.products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 2)
        : [],
    [t, product]
  );

  // SEO — title et JSON-LD spécifiques à la pièce
  useEffect(() => {
    if (!product) return;
    document.title = `${product.name} — Sasa Creation`;
    trackMetaEvent('ViewContent', {
      content_name: product.name,
      content_ids: [`SASA-${product.id}`],
      content_type: 'product',
      value: product.price,
      currency: 'TND',
    });
    return () => {
      document.title = t.site.title;
    };
  }, [product, t.site.title]);

  useEffect(() => {
    if (!product) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'pdp-jsonld';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      image: `https://sasa-creation.vercel.app${product.image}`,
      description: t.products.description,
      sku: `SASA-${product.id}`,
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'TND',
        availability:
          product.stock > 0
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
      },
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById('pdp-jsonld')?.remove();
    };
  }, [product, t.products.description]);

  const handleAddToCart = () => {
    if (!product) return;
    hapticFeedback(10);
    trackEvent('add_to_cart', {
      product_id: product.id,
      price: product.price,
      one_of_a_kind: product.isOneOfAKind,
      source: 'pdp',
    });
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleOrderDirect = () => {
    if (!product) return;
    hapticFeedback(10);
    trackEvent('whatsapp_order_click', {
      items_count: 1,
      total: product.price,
      source: 'pdp_direct',
    });
    const message = buildOrderMessage(
      [{ name: product.name, quantity: 1, price: product.price }],
      {
        orderGreeting: t.whatsapp.orderGreeting,
        orderTotalLabel: t.whatsapp.orderTotalLabel,
        orderOutro: t.whatsapp.orderOutro,
      }
    );
    window.open(
      buildWhatsAppUrl(t.whatsapp.phoneNumber, message),
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleShare = async () => {
    if (!product) return;
    const url = `https://sasa-creation.vercel.app/produit/${product.slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: product.name, url });
      } else {
        await navigator.clipboard.writeText(url);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      }
    } catch {
      // Partage annulé — ne rien faire
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#faf6f0]" ref={topRef}>
        <Navigation
          cartItems={cartItems}
          onRemoveFromCart={onRemoveFromCart}
          onUpdateQuantity={onUpdateQuantity}
        />
        <div className="min-h-[80vh] flex items-center justify-center px-6">
          <div className="text-center">
            <p className="font-serif text-3xl text-[#2b2118] mb-6">{t.pdp.notFoundText}</p>
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-[#b06c4f] text-white font-medium tracking-widest text-sm btn-hover cursor-pointer"
            >
              {t.pdp.backToCollectionText.replace('← ', '')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isLowStock = product.stock > 0 && product.stock <= t.products.lowStockThreshold;

  return (
    <div className="min-h-screen bg-[#faf6f0]" ref={topRef}>
      <Navigation
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onUpdateQuantity={onUpdateQuantity}
      />
      <div className="max-w-[1200px] mx-auto px-6 pt-32 md:pt-36 pb-24">
        {/* Fil de retour */}
        <Link
          to="/"
          onClick={() => topRef.current?.scrollIntoView()}
          className="inline-flex items-center gap-2 text-sm text-[#6b5d4f] hover:text-[#b06c4f] transition-colors mb-8 cursor-pointer"
        >
          {t.pdp.backToCollectionText}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="relative overflow-hidden bg-white shadow-[0_10px_50px_rgba(43,33,24,0.1)]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
            {product.isOneOfAKind && (
              <span className="absolute top-4 left-4 px-4 py-2 bg-[#2b2118]/90 text-[#faf6f0] badge-unique rounded-full backdrop-blur-sm">
                {t.products.oneOfAKindText}
              </span>
            )}
          </div>

          {/* Informations */}
          <div>
            <span className="text-xs text-[#8a7d6d] tracking-[0.15em] uppercase">
              {product.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-[#2b2118] mt-3 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Prix + ancrage */}
            <div className="flex items-baseline gap-3 mb-6">
              <p className="font-serif text-3xl text-[#8f5138]">
                {product.price.toFixed(2)} DT
              </p>
              {product.compareAtPrice > product.price && (
                <p className="text-lg text-[#b0a394] line-through">
                  {product.compareAtPrice.toFixed(2)} DT
                </p>
              )}
            </div>

            {product.isOneOfAKind && (
              <p className="flex items-center gap-2 text-sm text-[#b06c4f] font-medium mb-6 bg-[#b06c4f]/8 border border-[#b06c4f]/20 px-4 py-3 rounded-lg">
                <Heart size={16} aria-hidden="true" />
                {t.pdp.oneOfAKindBannerText}
              </p>
            )}

            {isLowStock && (
              <p className="text-sm text-[#b06c4f] font-medium mb-6 animate-gentle-pulse">
                {t.pdp.stockText.replace('{n}', String(product.stock))}
              </p>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <button
                onClick={handleOrderDirect}
                className="flex-1 min-h-[52px] px-8 py-4 bg-[#b06c4f] text-white font-medium tracking-wide text-sm btn-hover flex items-center justify-center gap-2 cursor-pointer hover:bg-[#8f5138]"
              >
                <MessageCircle size={18} />
                {t.pdp.orderViaWhatsAppText}
              </button>
              <button
                onClick={handleAddToCart}
                aria-label={`${t.pdp.addToCartText} — ${product.name}`}
                className={`flex-1 min-h-[52px] px-8 py-4 font-medium tracking-wide text-sm btn-hover flex items-center justify-center gap-2 cursor-pointer border-2 transition-colors duration-200 ${
                  isAdded
                    ? 'bg-[#6b7b3c] border-[#6b7b3c] text-white'
                    : 'border-[#b06c4f] text-[#b06c4f] hover:bg-[#b06c4f] hover:text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={18} />
                    {t.pdp.addedToCartText}
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    {t.pdp.addToCartText}
                  </>
                )}
              </button>
            </div>

            {/* Partage */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-sm text-[#6b5d4f] hover:text-[#b06c4f] transition-colors mb-10 cursor-pointer"
            >
              <Share2 size={15} aria-hidden="true" />
              {isShared ? '✓' : t.pdp.shareText}
            </button>

            {/* Blocs d'information */}
            <div className="space-y-8 border-t border-[#efe7da] pt-8">
              <div>
                <h2 className="font-serif text-2xl text-[#2b2118] mb-3">
                  {t.pdp.includesHeading}
                </h2>
                <ul className="space-y-2">
                  {t.pdp.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#6b5d4f] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b06c4f] mt-2.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#2b2118] mb-3">
                  {t.pdp.careHeading}
                </h2>
                <p className="text-[#6b5d4f] leading-relaxed">{t.pdp.careText}</p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#2b2118] mb-3">
                  {t.pdp.shippingHeading}
                </h2>
                <p className="text-[#6b5d4f] leading-relaxed">{t.pdp.shippingText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pièces similaires */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-[#efe7da]">
            <h2 className="font-serif text-3xl text-[#2b2118] mb-10 text-center">
              {t.products.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/produit/${p.slug}`}
                  onClick={() => topRef.current?.scrollIntoView()}
                  className="group bg-white card-hover cursor-pointer block"
                >
                  <div className="relative h-72 overflow-hidden bg-[#faf6f0]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-[#2b2118]">{p.name}</h3>
                    <p className="text-[#8f5138] font-semibold mt-1">
                      {p.price.toFixed(2)} DT
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA collection mobile-friendly */}
        <div className="text-center mt-16">
          <Link
            to="/"
            onClick={() => topRef.current?.scrollIntoView()}
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-[#b06c4f] text-[#b06c4f] font-medium tracking-widest text-sm hover:bg-[#b06c4f] hover:text-white transition-all duration-200 cursor-pointer"
          >
            {t.products.viewAllText}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductPage;
