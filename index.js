/* ══════════════════════════════════════════════
   DOM SAMUCA — index.js (Página Principal)
   Depende: utils.js
   ══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Cursor, Nav e Scroll Reveal (utils.js) ── */
  initCursor();
  initNavScroll();
  initScrollReveal();

  /* ── Hamburger / Menu Mobile ── */
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');

  if (ham && mob) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        ham.classList.remove('open');
        mob.classList.remove('open');
      });
    });
  }

  /* ── Tabs do Cardápio ── */
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove estado ativo de todos
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));

      // Ativa o tab clicado
      tab.classList.add('active');
      const panel = document.getElementById('tab-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Formulário de Reservas ── */
  const btnReserva = document.getElementById('btnReserva');
  if (btnReserva) {
    btnReserva.addEventListener('click', enviarReserva);
  }

  /* ── Data mínima no input de data ── */
  const dateInput = document.getElementById('data');
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }

});

/* ── Funções de Reserva ── */
function enviarReserva() {
  const nome  = document.getElementById('nome')?.value.trim();
  const data  = document.getElementById('data')?.value;
  const toast = document.getElementById('toast');
  if (!toast) return;

  if (!nome || !data) {
    toast.textContent = '⚠ Por favor, preencha nome e data.';
  } else {
    toast.textContent = '✓ Reserva enviada! Em breve entraremos em contato.';
    document.getElementById('reservaForm')?.reset();
  }

  mostrarToast(toast);
}

function mostrarToast(toastEl) {
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 4000);
}