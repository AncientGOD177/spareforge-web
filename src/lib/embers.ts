// Forge embers: at most 40 square sparks rising from the bottom edge.
// Runs only while the host is on screen and the tab is visible; never under reduced motion or Save-Data.
import { skipHeavyMedia, motionOk } from './motion';

type Spark = { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; hot: boolean };

export function startEmbers(canvas: HTMLCanvasElement, host: HTMLElement): (() => void) | null {
  if (skipHeavyMedia()) return null;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const MAX = window.innerWidth < 640 ? 22 : 40;
  const css = getComputedStyle(document.documentElement);
  const HOT = css.getPropertyValue('--ember-300').trim();
  const WARM = css.getPropertyValue('--ember-500').trim();
  const sparks: Spark[] = [];
  let w = 0, h = 0, px = 2, raf = 0, visible = true, running = true, last = performance.now();

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    px = Math.max(2, Math.round(window.devicePixelRatio || 1));
    w = Math.floor(r.width / px); h = Math.floor(r.height / px);
    canvas.width = w; canvas.height = h; // 1 canvas px = px CSS px, scaled up crisp
    ctx.imageSmoothingEnabled = false;
  };
  const spawn = (): Spark => ({
    x: Math.random() * w, y: h + Math.random() * 20,
    vx: (Math.random() - 0.5) * 6, vy: -(12 + Math.random() * 26),
    life: 0, max: 3 + Math.random() * 4, size: Math.random() < 0.25 ? 2 : 1, hot: Math.random() < 0.4,
  });

  const frame = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    ctx.clearRect(0, 0, w, h);
    if (sparks.length < MAX && Math.random() < 0.35) sparks.push(spawn());
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.life += dt; s.x += (s.vx + Math.sin((s.life + i) * 2) * 4) * dt; s.y += s.vy * dt;
      const k = 1 - s.life / s.max;
      if (k <= 0 || s.y < -4) { sparks.splice(i, 1); continue; }
      ctx.globalAlpha = Math.min(1, k * 1.4);
      ctx.fillStyle = s.hot ? HOT : WARM;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), s.size, s.size);
    }
    ctx.globalAlpha = 1;
    if (running && visible && !document.hidden) raf = requestAnimationFrame(frame);
  };
  const kick = () => { cancelAnimationFrame(raf); if (running && visible && !document.hidden && motionOk()) { last = performance.now(); raf = requestAnimationFrame(frame); } };

  resize();
  const ro = new ResizeObserver(resize); ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }); io.observe(host);
  document.addEventListener('visibilitychange', kick);
  kick();

  return () => {
    running = false; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
    document.removeEventListener('visibilitychange', kick); ctx.clearRect(0, 0, w, h);
  };
}
