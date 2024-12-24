import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateKey(length: number = 8): string {
  const base62 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const base62Length = base62.length;

  // Secure randomness
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);

  // Map random values to the base62 set
  return Array.from(randomValues, (value) => base62[value % base62Length]).join('');
}
