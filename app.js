'use strict';
document.documentElement.classList.replace('no-js', 'js');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton.hidden = false;
function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  // Keep keyboard focus at the requested section after the mobile menu closes.
  const target = document.querySelector(link.hash);
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

const crtButton = document.querySelector('#crt-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let effects = false;
try { effects = localStorage.getItem('deadlock-crt') === 'on'; } catch (_) { /* Storage may be unavailable. */ }
function renderEffects() {
  const enabled = effects && !reducedMotion.matches;
  document.body.classList.toggle('crt-on', enabled);
  crtButton.setAttribute('aria-pressed', String(enabled));
  crtButton.textContent = reducedMotion.matches ? 'CRT: REDUCED' : `CRT: ${enabled ? 'ON' : 'OFF'}`;
  crtButton.disabled = reducedMotion.matches;
  crtButton.title = reducedMotion.matches ? 'CRT effects follow your reduced-motion preference.' : 'Toggle optional CRT scanlines and subtle candle flicker.';
}
crtButton.hidden = false;
renderEffects();
crtButton.addEventListener('click', () => {
  effects = !effects;
  try { localStorage.setItem('deadlock-crt', effects ? 'on' : 'off'); } catch (_) { /* Preference still works for this visit. */ }
  renderEffects();
});
reducedMotion.addEventListener('change', renderEffects);

const stages = {
  '5': ['Minute 5 · early economy', "Use only samples recorded at or before 05:00. Compare early team differences with each player's available soul history, growth, team share, and within-team spread."],
  '10': ['Minute 10 · developing advantage', "Use only samples recorded at or before 10:00. Compare team-only inputs with team inputs plus player soul progression. Keep the same eligible matches and chronological split as the other stages."],
  '15': ['Minute 15 · mid-game transition', "Use only samples recorded at or before 15:00. Study whether the later observable economy and its distribution improve prediction. The common cohort excludes matches ending by this cutoff."]
};
document.querySelectorAll('[data-cutoff]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-cutoff]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    const [heading, description] = stages[button.dataset.cutoff];
    document.querySelector('#cutoff-description h3').textContent = heading;
    document.querySelector('#cutoff-description p').textContent = description;
  });
});

const search = document.querySelector('#reference-search');
const filter = document.querySelector('#reference-filter');
const references = Array.from(document.querySelectorAll('#reference-list > li'));
function filterReferences() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  references.forEach((item) => {
    const matches = `${item.textContent} ${item.dataset.topic}`.toLocaleLowerCase().includes(query);
    item.hidden = !matches;
    if (matches) visible += 1;
  });
  document.querySelector('#reference-count').textContent = query ? `Showing ${visible} of ${references.length} references.` : `Showing all ${references.length} references.`;
  document.querySelector('#no-references').hidden = visible !== 0;
}
search.addEventListener('input', filterReferences);
filter.addEventListener('submit', (event) => { event.preventDefault(); filterReferences(); });
filter.addEventListener('reset', () => { search.value = ''; filterReferences(); });
// In-page citations remain useful even after a reference search has hidden their target.
document.querySelectorAll('a[href^="#ref-"]').forEach((link) => {
  link.addEventListener('click', () => { search.value = ''; filterReferences(); });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll('a').forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach((section) => observer.observe(section));
}
