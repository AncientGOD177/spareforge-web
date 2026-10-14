// Motion preference. The <head> script already put `motion-ok` or `reduce-motion` on <html>
// from prefers-reduced-motion plus the footer switch (localStorage `sf:motion`).
export type MotionPref = 'reduce' | 'full' | null;

export const motionOk = () => document.documentElement.classList.contains('motion-ok');

export function getMotionPref(): MotionPref {
  try { return localStorage.getItem('sf:motion') as MotionPref; } catch { return null; }
}

export function setMotionPref(p: Exclude<MotionPref, null>) {
  try { localStorage.setItem('sf:motion', p); } catch { /* storage blocked: applies to this page only */ }
}

/** True when heavy media (background video) should be skipped: reduced motion, Save-Data or a slow link. */
export function skipHeavyMedia(): boolean {
  if (!motionOk()) return true;
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  return !!c && (c.saveData === true || /(^|-)2g$|^3g$/.test(c.effectiveType ?? ''));
}
