import { useCallback, useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Story, StorySlide } from '../i18n/types';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { trackEvent } from '../lib/analytics';
import { hapticFeedback } from '../lib/haptics';

const SLIDE_DURATION_MS = 5000;

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}

const StoryViewer = ({ story, onClose }: StoryViewerProps) => {
  const { t } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const startTimeRef = useRef<number>(0);
  const elapsedRef = useRef<number>(0);
  const rafRef = useRef<number | undefined>(undefined);

  const slide: StorySlide | undefined = story.slides[slideIndex];

  // Progression animée — respectueuse de prefers-reduced-motion (pas d'auto-avance si réduit)
  useEffect(() => {
    const reduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (reduced) return;

    if (isPaused) return;

    startTimeRef.current = performance.now() - elapsedRef.current;
    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const ratio = Math.min(elapsed / SLIDE_DURATION_MS, 1);
      setProgress(ratio);
      elapsedRef.current = elapsed;
      if (ratio >= 1) {
        // Slide suivante ou fermeture
        if (slideIndex < story.slides.length - 1) {
          setSlideIndex((i) => i + 1);
          elapsedRef.current = 0;
          setProgress(0);
        } else {
          onClose();
          return;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [slideIndex, isPaused, story.slides.length, onClose]);

  const goNext = useCallback(() => {
    if (slideIndex < story.slides.length - 1) {
      setSlideIndex((i) => i + 1);
      elapsedRef.current = 0;
      setProgress(0);
    } else {
      onClose();
    }
  }, [slideIndex, story.slides.length, onClose]);

  const goPrev = useCallback(() => {
    if (slideIndex > 0) {
      setSlideIndex((i) => i - 1);
      elapsedRef.current = 0;
      setProgress(0);
    }
  }, [slideIndex]);

  // Navigation clavier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, onClose]);

  if (!slide) return null;

  const handleCta = () => {
    hapticFeedback(10);
    if (slide.ctaWhatsApp) {
      window.open(
        buildWhatsAppUrl(t.whatsapp.phoneNumber, t.whatsapp.contactGreeting),
        '_blank',
        'noopener,noreferrer'
      );
    } else if (slide.ctaTarget) {
      onClose();
      setTimeout(() => {
        document.querySelector(slide.ctaTarget)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black flex flex-col animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={story.title}
    >
      {/* Barre de progression segmentée — pattern Instagram */}
      <div className="flex gap-1.5 px-4 pt-4" dir="ltr">
        {story.slides.map((_, i) => (
          <div
            key={i}
            className="h-[3px] flex-1 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-white rounded-full"
              style={{
                width:
                  i < slideIndex ? '100%' : i === slideIndex ? `${progress * 100}%` : '0%',
                transition: i === slideIndex ? 'none' : 'width 0.2s ease',
              }}
            />
          </div>
        ))}
      </div>

      {/* Titre + fermeture */}
      <div className="flex items-center justify-between px-4 py-3 text-white" dir="ltr">
        <span className="font-serif text-lg tracking-wide">{story.title}</span>
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="p-2 -mr-2 hover:opacity-70 transition-opacity cursor-pointer"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Image + zones de navigation */}
      <div
        className="flex-1 relative overflow-hidden touch-pan-y"
        onPointerDown={() => setIsPaused(true)}
        onPointerUp={() => setIsPaused(false)}
        onPointerLeave={() => setIsPaused(false)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Zones tap — gauche: précédent, droite: suivant */}
        <button
          onClick={goPrev}
          aria-label="Story précédente"
          className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer"
        />
        <button
          onClick={goNext}
          aria-label="Story suivante"
          className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer"
        />

        {/* Flèches desktop discrètes */}
        {slideIndex > 0 && (
          <button
            onClick={goPrev}
            aria-hidden="true"
            tabIndex={-1}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {slideIndex < story.slides.length - 1 && (
          <button
            onClick={goNext}
            aria-hidden="true"
            tabIndex={-1}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Texte de la story */}
        <p className="absolute bottom-32 left-6 right-6 text-center text-white text-xl md:text-2xl font-serif leading-snug drop-shadow-lg px-4">
          {slide.text}
        </p>

        {/* CTA */}
        {slide.ctaText && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <button
              onClick={handleCta}
              className="px-10 min-h-[48px] bg-white text-[#2b2118] font-semibold tracking-wide text-sm rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer"
            >
              {slide.ctaText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const StoriesRow = () => {
  const { t } = useLanguage();
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  // Verrouille le scroll body quand le viewer est ouvert
  useEffect(() => {
    document.body.style.overflow = activeStory ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeStory]);

  if (t.stories.stories.length === 0) return null;

  const openStory = (story: Story) => {
    hapticFeedback(10);
    trackEvent('story_view', { story_id: story.id, story_title: story.title });
    setActiveStory(story);
  };

  return (
    <>
      <section
        aria-label="Stories Sasa Creation"
        className="py-8 md:py-10 bg-white border-b border-[#efe7da]"
      >
        <div
          className="flex gap-5 md:gap-7 overflow-x-auto scrollbar-hide px-6 lg:px-12 max-w-[1400px] mx-auto"
          dir="ltr"
        >
          {t.stories.stories.map((story) => (
            <button
              key={story.id}
              onClick={() => openStory(story)}
              aria-label={story.title}
              className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer"
            >
              {/* Cercle avec gradient ring — signature Instagram */}
              <span
                className="block w-16 h-16 md:w-20 md:h-20 rounded-full p-[3px]"
                style={{
                  background:
                    'linear-gradient(135deg, #b06c4f 0%, #d4c4a8 50%, #b06c4f 100%)',
                }}
              >
                <span className="block w-full h-full rounded-full p-[3px] bg-white">
                  <span
                    className="block w-full h-full rounded-full bg-cover bg-center transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-95 overflow-hidden"
                    style={{ backgroundImage: `url(${story.slides[0]?.image})` }}
                  />
                </span>
              </span>
              <span className="text-xs text-[#6b5d4f] font-medium tracking-wide max-w-[72px] truncate">
                {story.title}
              </span>
            </button>
          ))}
        </div>
      </section>

      {activeStory && (
        <StoryViewer story={activeStory} onClose={() => setActiveStory(null)} />
      )}
    </>
  );
};

export default StoriesRow;
