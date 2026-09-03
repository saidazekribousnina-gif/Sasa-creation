import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { productsConfig } from '../config';
import type { Product } from '../config';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const Products = ({ onAddToCart }: ProductsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(productsConfig.categories[0] || 'All');
  const [addedItems, setAddedItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProducts = activeCategory === productsConfig.categories[0]
    ? productsConfig.products
    : productsConfig.products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setAddedItems(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  if (!productsConfig.heading && productsConfig.products.length === 0) return null;

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-[#b06c4f] font-semibold uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {productsConfig.tag}
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {productsConfig.heading}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-[#696969] text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {productsConfig.description}
          </p>
        </div>

        {/* Category Filter */}
        {productsConfig.categories.length > 0 && (
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {productsConfig.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[44px] px-6 py-2 text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#b06c4f] text-white'
                    : 'bg-[#faf6f0] text-[#6b5d4f] hover:bg-[#f0e8db] border border-[#efe7da]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => {
            const isLowStock = product.stock > 0 && product.stock <= productsConfig.lowStockThreshold;
            const isAdded = addedItems.includes(product.id);

            return (
              <div
                key={product.id}
                className={`group bg-[#faf6f0] border border-[#efe7da] card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden bg-[#faf6f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />

                  {/* Badge « Pièce unique » — rareté authentique */}
                  {product.isOneOfAKind && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-[#2b2118]/90 text-[#faf6f0] badge-unique rounded-full backdrop-blur-sm">
                      {productsConfig.oneOfAKindText}
                    </span>
                  )}

                  {/* Ancrage prix — ancien prix barré */}
                  {product.compareAtPrice > product.price && (
                    <span className="absolute top-4 right-4 px-3 py-1.5 bg-[#b06c4f] text-white badge-unique rounded-full">
                      -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                    </span>
                  )}

                  {/* Quick Add Button — toujours visible sur mobile, hover sur desktop */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    aria-label={`${productsConfig.addToCartText} — ${product.name}`}
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 min-h-[44px] px-6 py-3 flex items-center gap-2 text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                      isAdded
                        ? 'bg-[#6b7b3c] text-white'
                        : 'bg-[#b06c4f] text-white md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 hover:bg-[#8f5138]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={16} />
                        {productsConfig.addedToCartText}
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} />
                        {productsConfig.addToCartText}
                      </>
                    )}
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5 bg-white">
                  <span className="text-xs text-[#8a7d6d] tracking-wide uppercase">{product.category}</span>
                  <h3 className="font-serif text-xl text-[#2b2118] mt-1">{product.name}</h3>

                  {/* Prix avec ancrage */}
                  <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-[#8f5138] font-semibold">{product.price.toFixed(2)} DT</p>
                    {product.compareAtPrice > product.price && (
                      <p className="text-sm text-[#b0a394] line-through">
                        {product.compareAtPrice.toFixed(2)} DT
                      </p>
                    )}
                  </div>

                  {/* Urgence douce — stock réel, honnête */}
                  {isLowStock && (
                    <p className="text-xs text-[#b06c4f] font-medium mt-2 animate-gentle-pulse">
                      {productsConfig.lowStockText.replace('{n}', String(product.stock))}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        {productsConfig.viewAllText && (
          <div
            className={`text-center mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <button className="px-12 py-4 border-2 border-[#8b6d4b] text-[#8b6d4b] font-light tracking-widest text-sm hover:bg-[#8b6d4b] hover:text-white transition-all duration-300">
              {productsConfig.viewAllText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
