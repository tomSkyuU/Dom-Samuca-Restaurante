/* ══════════════════════════════════════════════
   DOM SAMUCA — cardapio.js (Página de Cardápio)
   Depende: utils.js
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Cursor, Nav e Scroll Reveal (utils.js) ── */
  initCursor();
  initNavScroll();
  let revealObserver = initScrollReveal();

  /* ── Tabs de Categoria ── */
  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove estado ativo
      catBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));

      // Ativa a seção correspondente
      btn.classList.add('active');
      const sec = document.getElementById('sec-' + btn.dataset.section);
      if (sec) sec.classList.add('active');

      // Scroll suave até o conteúdo
      document.querySelector('.menu-body')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Re-observa novos elementos de reveal na seção ativa
      setTimeout(() => {
        document.querySelectorAll('.rv:not(.vis), .reveal:not(.visible)').forEach(el => {
          revealObserver.observe(el);
        });
      }, 100);
    });
  });

});