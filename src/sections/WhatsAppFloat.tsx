import { MessageCircle } from 'lucide-react';
import { whatsappConfig } from '../config';
import { buildWhatsAppUrl } from '../lib/whatsapp';

const WhatsAppFloat = () => {
  if (!whatsappConfig.phoneNumber) return null;

  const openChat = () => {
    const message = whatsappConfig.contactGreeting;
    window.open(
      buildWhatsAppUrl(whatsappConfig.phoneNumber, message),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button
      onClick={openChat}
      aria-label="Discuter sur WhatsApp"
      title="Une question ? Écrivez-nous sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-white animate-gentle-pulse" aria-hidden="true" />
    </button>
  );
};

export default WhatsAppFloat;
