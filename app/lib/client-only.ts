/**
 * Utility to ensure code only runs on the client side
 * Prevents hydration mismatches from server/client differences
 */

export const isClient = typeof window !== 'undefined';

/**
 * Hook to safely run client-side only code
 * Returns true only after hydration is complete
 */
import { useEffect, useState } from 'react';

export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Safe date formatting that works consistently on server and client
 */
export function formatDate(date: string | Date, locale: string = 'en-US') {
  return new Date(date).toISOString().split('T')[0];
}

/**
 * Safe full date formatting for detailed views
 */
export function formatDateLong(date: string | Date, locale: string = 'en-US') {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
