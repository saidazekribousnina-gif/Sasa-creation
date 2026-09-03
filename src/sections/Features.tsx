import { useEffect, useRef, useState } from 'react';
import { Truck, ShieldCheck, Leaf, Heart } from 'lucide-react';
import { featuresConfig } from '../config';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Truck,
  ShieldCheck,
  Leaf,
  Heart,
};

const Features = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (featuresConfig.features.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 bg-[#faf6f0]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {featuresConfig.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className={`p-10 lg:p-14 border-b md:border-b-0 md:border-r border-[#efe7da] last:border-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {IconComponent && (
                  <IconComponent
                    size={32}
                    strokeWidth={1.2}
                    className="text-[#b06c4f] mb-8"
                  />
                )}
                <h3 className="font-serif text-2xl lg:text-[28px] text-[#2b2118] mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#6b5d4f] text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
