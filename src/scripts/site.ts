// Site-wide behaviour: mobile menu, scroll reveal, motion switch, alpha ribbon, current-section nav.
// No framework. Everything degrades to plain links and visible content without JS.
import { motionOk, setMotionPref } from '../lib/motion';

const root = document.documentElement;

/* ---------- Mobile menu (native <dialog>) ---------- */
const menu = document.querySelector<HTMLDialogElement>('[data-menu]');
const opener = document.querySelector<HTMLButtonElement>('[data-menu-open]');
if (menu && opener) {
  opener.addEventListener('click', () => {
    menu.showModal();
    root.classList.add('is-locked');
  });
  // Following a link moves focus to its target; only Esc / Close return focus to the Menu button.
  let viaLink = false;
  menu.addEventListener('close', () => {
    root.classList.remove('is-locked');
    if (!viaLink) opener.focus();
    viaLink = false;
  });
  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => menu.close());
  menu.querySelectorAll<HTMLAnchorElement>('[data-menu-link]').forEach((a) => a.addEventListener('click', () => {
    viaLink = true;
    menu.close();
    const target = a.hash ? document.getElementById(a.hash.slice(1)) : null;
    if (target) { target.setAttribute('tabindex', '-1'); requestAnimationFrame(() => target.focus({ preventScroll: true })); }
  }));
  menu.addEventListener('click', (e) => { if (e.target === menu) menu.close(); });
}

/* ---------- Alpha ribbon: dismissed per build, stored only after the click ---------- */
const ribbon = document.querySelector<HTMLElement>('[data-ribbon]');
ribbon?.querySelector('[data-ribbon-close]')?.addEventListener('click', () => {
  ribbon.hidden = true;
  try { localStorage.setItem('sf:ribbon', ribbon.dataset.ribbon ?? ''); } catch { /* storage blocked: hide for this page only */ }
  document.getElementById('main')?.focus({ preventScroll: true });
});

/* ---------- Reduce-motion switch (footer) ---------- */
const toggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
if (toggle) {
  const sync = () => toggle.setAttribute('aria-checked', String(!motionOk()));
  sync();
  toggle.addEventListener('click', () => {
    const reduce = motionOk();
    setMotionPref(reduce ? 'reduce' : 'full');
    root.classList.toggle('reduce-motion', reduce);
    root.classList.toggle('motion-ok', !reduce);
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    window.dispatchEvent(new CustomEvent('sf:motion', { detail: { reduce } }));
    sync();
  });
}

/* ---------- Reveal below-the-fold blocks once ---------- */
const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (motionOk() && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-in'));
}

/* ---------- Highlight the nav link of the section in view ---------- */
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.c-nav__links a')];
const sections = navLinks
  .map((a) => document.getElementById(a.hash.slice(1)))
  .filter((s): s is HTMLElement => !!s);
if (sections.length && 'IntersectionObserver' in window) {
  const spy = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      navLinks.forEach((a) => a.setAttribute('aria-current', String(a.hash === `#${e.target.id}`)));
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));
}
