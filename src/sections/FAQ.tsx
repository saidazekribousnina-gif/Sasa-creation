import { useEffect, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import { faqConfig } from '../config';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

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

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (!faqConfig.heading && faqConfig.faqs.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-44 bg-[#faf6f0]"
    >
      <div className="max-w-[900px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block mb-5 text-sm tracking-[0.2em] text-[#b06c4f] font-semibold uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {faqConfig.tag}
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-[#2b2118] mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {faqConfig.heading}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqConfig.faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openId === faq.id}
                className={`w-full flex items-center justify-between px-6 lg:px-8 py-6 bg-white border border-[#efe7da] text-left transition-shadow duration-300 hover:shadow-[0_2px_16px_rgba(43,33,24,0.08)] cursor-pointer ${
                  openId === faq.id ? 'border-b-0' : ''
                }`}
              >
                <span className="font-sans text-lg text-[#3c3c3b] font-light pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center border border-[#c3bab0] rounded-full transition-transform ${
                    openId === faq.id ? 'rotate-45' : ''
                  }`}
                  style={{ transition: 'transform 0.7s cubic-bezier(0.55, 0.055, 0.675, 0.19)' }}
                >
                  <Plus size={14} strokeWidth={1.5} className="text-[#b06c4f]" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 lg:px-8 py-6 bg-white border border-t-0 border-[#e9e9e9]">
                  <p className="text-[#6b5d4f] text-base font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {faqConfig.ctaText && (
          <div
            className={`text-center mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <p className="text-[#6b5d4f] mb-4">{faqConfig.ctaText}</p>
            <a
              href={faqConfig.ctaTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(faqConfig.ctaTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-[#b06c4f] font-medium tracking-wide hover:gap-4 transition-all duration-300"
            >
              {faqConfig.ctaText}
              <span className="text-lg">&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
