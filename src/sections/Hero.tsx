import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!t.hero.title) return null;

  const scrollToNext = () => {
    const nextSection = document.querySelector('#subhero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleLines = t.hero.title.split('\n');

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${t.hero.backgroundImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="inline-block mb-4 text-sm tracking-[0.3em] font-light uppercase">
            {t.hero.tagline}
          </span>
        </div>

        <h1
          className={`font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          {t.hero.ctaPrimaryText && (
            <a
              href={t.hero.ctaPrimaryTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(t.hero.ctaPrimaryTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-4 bg-[#b06c4f] text-white font-medium tracking-widest text-sm btn-hover cursor-pointer"
            >
              {t.hero.ctaPrimaryText}
            </a>
          )}
          {t.hero.ctaSecondaryText && (
            <a
              href={t.hero.ctaSecondaryTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(t.hero.ctaSecondaryTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-4 border border-white text-white font-medium tracking-widest text-sm hover:bg-white hover:text-[#2b2118] transition-all duration-200 cursor-pointer"
            >
              {t.hero.ctaSecondaryText}
            </a>
          )}
        </div>

        {/* Badge confiance — un seul, l'essentiel */}
        {t.hero.trustBadges.length > 0 && (
          <div
            className={`mt-12 flex flex-wrap justify-center gap-3 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <span className="px-5 py-2.5 text-xs tracking-[0.15em] uppercase text-white/95 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full">
              {t.hero.trustBadges[0]}
            </span>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce transition-opacity duration-1000 ${
          isVisible ? 'opacity-70' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;
