import { useEffect, useRef, useState } from 'react';
import { craftStepsConfig } from '../config';
import type { CraftStep } from '../config';

interface StepProps {
  step: CraftStep;
  total: number;
  isActive: boolean;
  onVisible: (number: number) => void;
}

const StepItem = ({ step, total, isActive, onVisible }: StepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const hasReported = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(step.number);
          if (!hasReported.current) {
            hasReported.current = true;
          }
        }
      },
      { threshold: 0.6 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, [step.number, onVisible]);

  return (
    <div
      ref={stepRef}
      className={`min-h-[60vh] lg:min-h-[75vh] flex items-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'
      }`}
      aria-current={isActive ? 'step' : undefined}
    >
      <div className="flex items-start gap-6 lg:gap-10">
        {/* Numéro — grand, typographique */}
        <span
          className={`font-serif text-6xl lg:text-8xl leading-none transition-colors duration-700 ${
            isActive ? 'text-[#b06c4f]' : 'text-[#d4c4a8]'
          }`}
          aria-hidden="true"
        >
          {String(step.number).padStart(2, '0')}
        </span>

        <div className="pt-2 lg:pt-4 max-w-md">
          <h3 className="font-serif text-2xl lg:text-4xl text-[#2b2118] mb-3">
            {step.title}
          </h3>
          <p className="text-[#6b5d4f] text-base lg:text-lg leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
      <span className="sr-only">
        {craftStepsConfig.progressText
          .replace('{current}', String(step.number))
          .replace('{total}', String(total))}
      </span>
    </div>
  );
};

const CraftSteps = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleStepVisible = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  if (craftStepsConfig.steps.length === 0) return null;

  const progressPercent = (currentStep / craftStepsConfig.steps.length) * 100;

  return (
    <section
      id="craft"
      ref={sectionRef}
      className="relative bg-[#faf6f0]"
      aria-label="Les étapes de fabrication"
    >
      {/* En-tête narratif */}
      <div ref={headerRef} className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-20 lg:pb-28">
        <div
          className={`max-w-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block mb-5 text-sm tracking-[0.2em] text-[#b06c4f] font-semibold uppercase">
            {craftStepsConfig.tag}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2b2118] leading-tight mb-6">
            {craftStepsConfig.heading}
          </h2>
          <p className="text-[#6b5d4f] text-lg leading-relaxed">
            {craftStepsConfig.introText}
          </p>
        </div>
      </div>

      {/* Corps narratif : image fixée + étapes défilantes */}
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:grid lg:grid-cols-2 lg:gap-24">
          {/* Image atelier — fixée pendant que les étapes défilent */}
          <div className="hidden lg:block">
            <div className="sticky top-0 h-screen flex items-center">
              <div className="relative w-full">
                <div
                  className="absolute -inset-6 rounded-[3rem] overflow-hidden"
                  aria-hidden="true"
                >
                  <div
                    className="w-full h-full bg-cover bg-center scale-105"
                    style={{ backgroundImage: `url(${craftStepsConfig.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-[#2b2118]/25" />
                </div>

                {/* Compteur d'étape — flottant sur l'image */}
                <div className="relative z-10 -ml-14 bg-[#faf6f0] px-8 py-6 inline-block shadow-[0_10px_40px_rgba(43,33,24,0.15)]">
                  <p className="text-xs tracking-[0.15em] uppercase text-[#8a7d6d] mb-1">
                    {craftStepsConfig.progressText
                      .replace('{current}', String(currentStep))
                      .replace('{total}', String(craftStepsConfig.steps.length))}
                  </p>
                  <p className="font-serif text-5xl text-[#2b2118] leading-none">
                    {String(currentStep).padStart(2, '0')}
                  </p>

                  {/* Ligne de progression discrète */}
                  <div className="mt-4 w-32 h-1 bg-[#efe7da] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#b06c4f] rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Étapes — défilent, s'illuminent une à une */}
          <div className="relative pb-32 lg:py-0">
            {/* Ligne verticale guide (desktop) */}
            <div
              className="hidden lg:block absolute left-[-24px] top-0 bottom-0 w-px bg-[#efe7da]"
              aria-hidden="true"
            />

            {craftStepsConfig.steps.map((step) => (
              <StepItem
                key={step.number}
                step={step}
                total={craftStepsConfig.steps.length}
                isActive={currentStep === step.number}
                onVisible={handleStepVisible}
              />
            ))}

            {/* CTA final — la boucle est bouclée */}
            {craftStepsConfig.ctaText && (
              <div className="pt-8 pb-24 lg:min-h-[50vh] lg:flex lg:items-center">
                <div className="text-center w-full">
                  <p className="font-serif text-3xl lg:text-4xl text-[#2b2118] mb-8 italic">
                    « Et voilà. Votre pièce n'existait pas hier. »
                  </p>
                  <a
                    href={craftStepsConfig.ctaTarget}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(craftStepsConfig.ctaTarget)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center px-10 py-4 bg-[#b06c4f] text-white font-medium tracking-widest text-sm btn-hover cursor-pointer hover:bg-[#8f5138]"
                  >
                    {craftStepsConfig.ctaText}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Compteur mobile — fixé en haut pendant le défilement */}
        <div className="lg:hidden sticky top-[70px] z-30 bg-[#faf6f0]/95 backdrop-blur-md border-b border-[#efe7da]">
          <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
            <p className="text-xs tracking-[0.15em] uppercase text-[#8a7d6d]">
              {craftStepsConfig.progressText
                .replace('{current}', String(currentStep))
                .replace('{total}', String(craftStepsConfig.steps.length))}
            </p>
            <div className="w-24 h-1 bg-[#efe7da] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#b06c4f] rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftSteps;
