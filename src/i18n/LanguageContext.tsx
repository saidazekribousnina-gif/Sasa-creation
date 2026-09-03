import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import { fr } from './fr';
import { en } from './en';
import { ar } from './ar';
import type { Translations, Language } from './types';
import { LANGUAGES, isRtl } from './types';

export const STORAGE_KEY = 'sasa-creation-language';

const bundles: Record<Language, Translations> = { fr, en, ar };

interface LanguageContextValue {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Persistance tolérante aux échecs (mode privé, quota, etc.) */
function getSafeLocalStorage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/** Langue mémorisée, sinon langue du navigateur si supportée, sinon FR */
export function detectInitialLanguage(): Language {
  const storage = getSafeLocalStorage();
  if (storage) {
    const saved = storage.getItem(STORAGE_KEY);
    if (saved && (LANGUAGES as string[]).includes(saved)) {
      return saved as Language;
    }
  }

  const navLangs =
    typeof navigator !== 'undefined' ? navigator.languages ?? [navigator.language] : [];
  for (const navLang of navLangs) {
    const short = navLang.toLowerCase().split('-')[0];
    if ((LANGUAGES as string[]).includes(short)) {
      return short as Language;
    }
  }

  return 'fr';
}

/** Crée ou met à jour une balise meta (name ou property) */
function setMetaTag(
  key: string,
  content: string,
  attribute: 'name' | 'property' = 'name'
): void {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

interface LanguageProviderProps {
  children: ReactNode;
  /** Pour les tests — force la langue initiale */
  initialLanguage?: Language;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(
    () => initialLanguage ?? detectInitialLanguage()
  );

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = isRtl(language) ? 'rtl' : 'ltr';

    // Métadonnées dynamiques — SEO par langue
    const bundle = bundles[language];
    document.title = bundle.site.title;
    setMetaTag('description', bundle.site.description);
    setMetaTag('og:title', bundle.site.title, 'property');
    setMetaTag('og:description', bundle.site.description, 'property');
    setMetaTag('og:locale', language === 'fr' ? 'fr_FR' : language === 'en' ? 'en_US' : 'ar_TN', 'property');

    const storage = getSafeLocalStorage();
    if (storage) {
      try {
        storage.setItem(STORAGE_KEY, language);
      } catch {
        // Écriture impossible — la langue reste en mémoire pour la session
      }
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      t: bundles[language],
      setLanguage,
      isRtl: isRtl(language),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage doit être utilisé dans un LanguageProvider');
  }
  return ctx;
}
