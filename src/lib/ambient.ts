// Shared pause state for ambient motion (hero video, embers, pillar micro-loops).
// Kept on window so separately bundled component scripts all see the same value.
type W = Window & { __sfAmbientPaused?: boolean };

export const ambientPaused = () => (window as W).__sfAmbientPaused === true;

export function setAmbientPaused(p: boolean) {
  (window as W).__sfAmbientPaused = p;
  window.dispatchEvent(new CustomEvent('sf:ambient', { detail: { paused: p } }));
}
