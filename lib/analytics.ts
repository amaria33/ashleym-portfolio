/**
 * Analytics Event Logger
 *
 * Placeholder for future analytics integration.
 * Currently logs events to console.
 * Can be easily replaced with Google Analytics, Plausible, or other providers.
 */

export function logEvent(name: string, data?: Record<string, any>) {
  console.log("analytics event", name, data);

  // Future: Add real analytics provider here
  // Example: gtag('event', name, data);
  // Example: plausible(name, { props: data });
}
