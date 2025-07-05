import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generates a unique client ID and stores it in session storage for persistence across page reloads.
 * If a client ID already exists in session storage, it returns the existing one.
 * 
 * @returns {string} A unique client identifier that persists for the duration of the browser session
 * 
 * @example
 * ```typescript
 * const clientId = getOrCreateClientId();
 * console.log(clientId); // "550e8400-e29b-41d4-a716-446655440000"
 * ```
 */

export function getOrCreateClientId(): string {
  const key = 'client_id';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID(); // Or any unique ID generator
    sessionStorage.setItem(key, id);
  }
  return id;
}
