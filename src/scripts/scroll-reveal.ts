/**
 * scroll-reveal — IntersectionObserver vanilla (sin librerías) que añade la
 * clase `.is-visible` a cualquier elemento con [data-reveal] al entrar en
 * viewport. Cero dependencias, cero JS framework.
 *
 * Uso desde Astro:
 *   <script>import '~/scripts/scroll-reveal';</script>
 */

const SELECTOR = '[data-reveal]';
const VISIBLE_CLASS = 'is-visible';

function init() {
  const targets = document.querySelectorAll<HTMLElement>(SELECTOR);
  if (!targets.length) return;

  // Si el navegador no soporta IntersectionObserver o el usuario prefiere
  // motion reducido, mostramos todo de una sin transición.
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    targets.forEach((el) => el.classList.add(VISIBLE_CLASS));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(VISIBLE_CLASS);
          io.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  targets.forEach((el) => io.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
