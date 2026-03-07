/* ══════════════════════════════════════════════
   DOM SAMUCA — utils.js (Utilitários Compartilhados)
   ══════════════════════════════════════════════ */

/**
 * Inicializa o cursor personalizado dourado.
 * Requer: #cursor e #cursor-ring no HTML.
 */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  (function loop() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  // Efeito hover em elementos interativos
  const hoverTargets = 'a, button, .menu-tab, .gallery-item, .featured-card, .item-card, .line-item, .cat-btn';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '16px';
      cursor.style.height = '16px';
      ring.style.width    = '50px';
      ring.style.height   = '50px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '10px';
      cursor.style.height = '10px';
      ring.style.width    = '38px';
      ring.style.height   = '38px';
    });
  });
}

/**
 * Inicializa o efeito de scroll na navbar.
 * Adiciona a classe .scrolled quando o usuário desce mais de 60px.
 */
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/**
 * Inicializa o Intersection Observer para animações de scroll reveal.
 * Elementos com .reveal recebem .visible | Elementos com .rv recebem .vis
 */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'vis');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .rv').forEach(el => observer.observe(el));
  return observer;
}