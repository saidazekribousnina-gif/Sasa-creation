import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { heroConfig } from '../config';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!heroConfig.title) return null;

  const scrollToNext = () => {
    const nextSection = document.querySelector('#subhero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleLines = heroConfig.title.split('\n');

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
          backgroundImage: `url(${heroConfig.backgroundImage})`,
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
            {heroConfig.tagline}
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
          {heroConfig.ctaPrimaryText && (
            <a
              href={heroConfig.ctaPrimaryTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(heroConfig.ctaPrimaryTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-4 bg-[#b06c4f] text-white font-medium tracking-widest text-sm btn-hover cursor-pointer"
            >
              {heroConfig.ctaPrimaryText}
            </a>
          )}
          {heroConfig.ctaSecondaryText && (
            <a
              href={heroConfig.ctaSecondaryTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(heroConfig.ctaSecondaryTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-4 border border-white text-white font-medium tracking-widest text-sm hover:bg-white hover:text-[#2b2118] transition-all duration-200 cursor-pointer"
            >
              {heroConfig.ctaSecondaryText}
            </a>
          )}
        </div>

        {/* Badges confiance */}
        {heroConfig.trustBadges.length > 0 && (
          <div
            className={`mt-12 flex flex-wrap justify-center gap-3 max-w-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            {heroConfig.trustBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 text-xs tracking-wide text-white/95 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full"
              >
                {badge}
              </span>
            ))}
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
