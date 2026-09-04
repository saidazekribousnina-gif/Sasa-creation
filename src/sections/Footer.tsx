import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { trackEvent } from '../lib/analytics';
import { trackMetaEvent } from '../lib/metaPixel';

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Instagram,
  Facebook,
  Twitter,
};

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!t.footer.brandName) return null;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSending) return;

    setIsSending(true);
    trackEvent('newsletter_submit');
    trackMetaEvent('Subscribe');

    const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined;

    if (endpoint) {
      // Vraie inscription — service externe (Formspree, MailerLite, etc.)
      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      } catch {
        // Échec réseau — l'utilisateur est quand même remercié,
        // l'e-mail reste récupérable via le canal WhatsApp ci-dessous
      }
    } else {
      // Pas d'endpoint configuré — l'inscription passe par WhatsApp
      const message = `${t.whatsapp.contactGreeting}\n\n${t.footer.newsletterHeading} : ${email}`;
      window.open(
        buildWhatsAppUrl(t.whatsapp.phoneNumber, message),
        '_blank',
        'noopener,noreferrer'
      );
    }

    setIsSending(false);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-6">{t.footer.brandName}</h3>
            <p className="text-[#696969] font-light text-sm leading-relaxed mb-6">
              {t.footer.brandDescription}
            </p>
            <div className="flex items-center gap-4">
              {t.footer.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                if (!IconComponent) return null;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-[#696969] hover:text-[#8b6d4b] transition-all duration-300 hover:scale-90"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Groups */}
          {t.footer.linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-[#696969] text-base font-light link-hover inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          {t.footer.newsletterHeading && (
            <div className="lg:col-span-1">
              <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">{t.footer.newsletterHeading}</h4>
              <p className="text-[#696969] text-sm font-light mb-4">
                {t.footer.newsletterDescription}
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder={t.footer.newsletterPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#8b6d4b] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#8b6d4b] text-white text-sm font-light tracking-wider btn-hover disabled:opacity-50 cursor-pointer"
                >
                  {isSubscribed ? (
                    <span>{t.footer.newsletterSuccessText}</span>
                  ) : isSending ? (
                    <span className="animate-pulse">…</span>
                  ) : (
                    <>
                      <span>{t.footer.newsletterButtonText}</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#333] text-xs uppercase tracking-wider font-medium">
              {t.footer.copyrightText}
            </p>
            <div className="flex items-center gap-6">
              {t.footer.legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#696969] text-xs hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
