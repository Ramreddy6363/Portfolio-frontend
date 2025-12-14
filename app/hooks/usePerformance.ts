// Performance Utility Hook
import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current device is desktop
 * Used to conditionally enable heavy animations
 */
export const useIsDesktop = (breakpoint: number = 768): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > breakpoint);
    };

    // Initial check
    checkDevice();

    // Listen for resize
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, [breakpoint]);

  return isDesktop;
};

/**
 * Hook to detect user's animation preference
 * Respects prefers-reduced-motion setting
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook to check if the device is a slow connection
 * Uses Network Information API if available
 */
export const useIsSlowConnection = (): boolean => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Check if Network Information API is available
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      const checkConnection = () => {
        // Consider 2G and slow-2g as slow connections
        const slowTypes = ['slow-2g', '2g'];
        setIsSlowConnection(
          slowTypes.includes(connection.effectiveType) || 
          connection.saveData === true
        );
      };

      checkConnection();
      connection.addEventListener('change', checkConnection);

      return () => connection.removeEventListener('change', checkConnection);
    }
  }, []);

  return isSlowConnection;
};

/**
 * Combined hook for optimal performance settings
 * Returns recommended settings based on device capabilities
 */
export const usePerformanceSettings = () => {
  const isDesktop = useIsDesktop();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isSlowConnection = useIsSlowConnection();

  return {
    // Enable heavy animations only on desktop with good connection
    enableHeavyAnimations: isDesktop && !isSlowConnection && !prefersReducedMotion,
    
    // Enable tilt physics only on desktop
    enableTilt: isDesktop && !prefersReducedMotion,
    
    // Enable hover effects on desktop
    enableHoverEffects: isDesktop && !prefersReducedMotion,
    
    // Reduce animation duration on slow connections
    animationDuration: isSlowConnection ? 'fast' : 'normal',
    
    // Device info
    isDesktop,
    isMobile: !isDesktop,
    prefersReducedMotion,
    isSlowConnection,
  };
};
