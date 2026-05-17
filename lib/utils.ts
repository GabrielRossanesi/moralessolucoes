import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function whatsappUrl(message: string) {
  return `https://wa.me/5511991129696?text=${encodeURIComponent(message)}`;
}
