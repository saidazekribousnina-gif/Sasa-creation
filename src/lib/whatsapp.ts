import { whatsappConfig } from '../config';

export interface WhatsAppOrderItem {
  name: string;
  quantity: number;
  price: number;
}

export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

export function formatPrice(amount: number): string {
  return `${amount.toFixed(2)} DT`;
}

export function buildOrderMessage(items: WhatsAppOrderItem[]): string {
  const lines = items.map(
    (item) => `- ${item.name} × ${item.quantity} — ${formatPrice(item.price * item.quantity)}`
  );
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return [
    whatsappConfig.orderGreeting,
    '',
    ...lines,
    '',
    `${whatsappConfig.orderTotalLabel} : ${formatPrice(total)}`,
    '',
    whatsappConfig.orderOutro,
  ].join('\n');
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const normalized = normalizePhoneNumber(phoneNumber);
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}
