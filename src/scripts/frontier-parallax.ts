/**
 * frontier-parallax — parallax por capas para el hero de /servicios/web3-b2b.
 *
 * Dos efectos sobre ELEMENTOS DISTINTOS (sin conflicto de transform):
 *   1. SCROLL  -> elementos [data-parallax] (capa exterior + wordmark-wrap): GSAP
 *      ScrollTrigger desplaza en Y según [data-depth] al hacer scroll por el hero.
 *   2. RATÓN   -> elementos [data-mouse] (wrapper interior): vanilla. En mousemove
 *      se fija transform: translate3d() según [data-depth]; el suavizado lo da una
 *      transición CSS. Estilo colosseum.com/frontier.
 *
 * El parallax de ratón se ENGANCHA SIEMPRE (sin gate de pointer:fine, que en
 * portátiles táctiles da false): en táctil el evento mousemove simplemente no se
 * dispara. Ambos efectos van ligados a interacción, así que no se gatean con
 * prefers-reduced-motion (las animaciones automáticas sí, vía CSS).
 */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const depthOf = (el: HTMLElement) => parseFloat(el.dataset.depth || '0'); // 0..1

export function initFrontierParallax(root: HTMLElement): (() => void) | void {
  // ── 1) SCROLL parallax (GSAP, capa exterior) ──
  const scrollLayers = Array.from(root.querySelectorAll<HTMLElement>('[data-parallax]'));
  const tweens = scrollLayers.map((layer) =>
    gsap.to(layer, {
      yPercent: depthOf(layer) * 45,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    })
  );
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

  // ── 2) RATÓN parallax (vanilla, wrapper interior) ──
  const mouseLayers = Array.from(root.querySelectorAll<HTMLElement>('[data-mouse]'));
  let onMove: ((e: MouseEvent) => void) | undefined;
  let raf = 0;
  if (mouseLayers.length > 0) {
    const MAX = 28; // px de desplazamiento máximo para depth = 1
    let nx = 0;
    let ny = 0;
    const apply = () => {
      raf = 0;
      mouseLayers.forEach((el) => {
        const d = depthOf(el);
        el.style.transform = `translate3d(${(-nx * d * MAX).toFixed(2)}px, ${(-ny * d * MAX).toFixed(2)}px, 0)`;
      });
    };
    onMove = (e: MouseEvent) => {
      nx = e.clientX / window.innerWidth - 0.5; // -0.5..0.5
      ny = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = window.requestAnimationFrame(apply);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
  }

  return () => {
    tweens.forEach((t) => t.scrollTrigger?.kill());
    if (onMove) window.removeEventListener('mousemove', onMove);
    if (raf) cancelAnimationFrame(raf);
  };
}
