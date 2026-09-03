import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { buildWhatsAppUrl } from '../lib/whatsapp';
import { hapticFeedback } from '../lib/haptics';

const WhatsAppFloat = () => {
  const { t } = useLanguage();

  if (!t.whatsapp.phoneNumber) return null;

  const openChat = () => {
    hapticFeedback(10);
    const message = t.whatsapp.contactGreeting;
    window.open(
      buildWhatsAppUrl(t.whatsapp.phoneNumber, message),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button
      onClick={openChat}
      aria-label={t.whatsapp.contactGreeting}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] flex items-center justify-center hover:scale-110 active:scale-90 transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-white animate-gentle-pulse" aria-hidden="true" />
    </button>
  );
};

export default WhatsAppFloat;
