import { useEffect, useRef, useState } from 'react';
import { Star, BadgeCheck } from 'lucide-react';
import { testimonialsConfig } from '../config';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!testimonialsConfig.heading && testimonialsConfig.testimonials.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#faf6f0]"
      aria-label="Témoignages clientes"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block mb-4 text-sm tracking-[0.2em] text-[#b06c4f] font-semibold uppercase">
            {testimonialsConfig.tag}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2b2118] mb-4">
            {testimonialsConfig.heading}
          </h2>

          {/* Compteur clients — preuve sociale chiffrée */}
          {testimonialsConfig.clientsCount > 0 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex -space-x-2" aria-hidden="true">
                {testimonialsConfig.testimonials.slice(0, 3).map((t) => (
                  <span
                    key={t.id}
                    className="w-9 h-9 rounded-full bg-[#d4c4a8] border-2 border-white flex items-center justify-center font-serif text-sm text-[#2b2118]"
                  >
                    {t.name.charAt(0)}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#6b5d4f]">
                Rejointe par{' '}
                <strong className="font-semibold text-[#2b2118]">
                  +{testimonialsConfig.clientsCount}
                </strong>{' '}
                {testimonialsConfig.clientsLabel}
              </p>
            </div>
          )}
        </div>

        {/* Cartes témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsConfig.testimonials.map((t, index) => (
            <figure
              key={t.id}
              className={`bg-white p-8 flex flex-col card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Note */}
              <div className="flex gap-1 mb-4" aria-label={`Note : ${t.rating} sur 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? 'fill-[#d9a441] text-[#d9a441]' : 'text-gray-300'}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Citation */}
              <blockquote className="text-[#4a3f35] leading-relaxed italic flex-1">
                « {t.text} »
              </blockquote>

              {/* Auteur */}
              <figcaption className="mt-6 pt-6 border-t border-[#ece4d8]">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-[#d4c4a8] flex items-center justify-center font-serif text-lg text-[#2b2118]" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-[#2b2118] text-sm flex items-center gap-1.5">
                      {t.name}
                      <BadgeCheck size={15} className="text-[#6b7b3c]" aria-label="Achat vérifié" />
                    </p>
                    <p className="text-xs text-[#8a7d6d]">
                      {t.location} · a acheté {t.purchasedItem}
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
