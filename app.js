'use strict';
document.documentElement.classList.replace('no-js', 'js');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton.hidden = false;
function closeMenu() {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  updateHeaderHeight();
});
document.querySelector('#mw-panel').addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !link.hash || !link.href.startsWith(location.href.split('#')[0])) return;
  closeMenu();
  // Keep keyboard focus at the requested section after the mobile menu closes.
  const target = document.getElementById(link.hash.slice(1));
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

const root = document.documentElement;
const theme = document.querySelector('#pt-theme-toggle a');
const width = document.querySelector('#pt-fixedwidth-toggle a');
function updateHeaderHeight() {
  root.style.setProperty('--header-height', `${document.querySelector('#mw-head').getBoundingClientRect().height}px`);
}
function toggleTheme(event) {
  event.preventDefault();
  const light = root.dataset.mode !== 'light';
  root.dataset.mode = light ? 'light' : 'dark';
  theme.className = light ? 'is-light' : 'is-dark';
  theme.textContent = light ? 'Dark theme' : 'Light theme';
  theme.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
  theme.setAttribute('aria-pressed', String(light));
  document.querySelector('meta[name="theme-color"]').content = light ? '#f5ede0' : '#241c16';
}
theme.addEventListener('click', toggleTheme);
width.addEventListener('click', (event) => {
  event.preventDefault();
  const expanded = width.classList.contains('is-fixed');
  root.style.setProperty('--fixed-width', expanded ? '100%' : 'min(1450px, 90vw)');
  width.className = expanded ? 'is-fullscreen' : 'is-fixed';
  width.textContent = expanded ? 'Fixed width' : 'Full width';
  width.setAttribute('aria-label', `Switch to ${expanded ? 'fixed-width' : 'full-width'} layout`);
  width.setAttribute('aria-pressed', String(expanded));
});
[theme, width].forEach((control) => control.addEventListener('keydown', (event) => {
  if (event.key === ' ') { event.preventDefault(); control.click(); }
}));
window.addEventListener('resize', updateHeaderHeight);
if ('ResizeObserver' in window) new ResizeObserver(updateHeaderHeight).observe(document.querySelector('#mw-head'));
document.fonts.ready.then(updateHeaderHeight);
updateHeaderHeight();

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
  document.querySelector('#project-search-input').value = search.value;
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
document.querySelector('#project-search').addEventListener('submit', (event) => {
  event.preventDefault();
  search.value = document.querySelector('#project-search-input').value;
  filterReferences();
  closeMenu();
  document.querySelector('.reference-panel').scrollIntoView({ block: 'start' });
  search.focus({ preventScroll: true });
});
document.addEventListener('click', (event) => {
  if (menuButton.getAttribute('aria-expanded') === 'true' && !document.querySelector('#mw-panel').contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
window.matchMedia('(max-width: 800px)').addEventListener('change', closeMenu);

// In-page citations remain useful even after a reference search has hidden their target.
document.querySelectorAll('a[href^="#ref-"]').forEach((link) => {
  link.addEventListener('click', () => { search.value = ''; filterReferences(); });
});

const sections = Array.from(document.querySelectorAll('main > section'));
let activeFramePending = false;
function updateActiveSection() {
  const activationLine = Math.max(0, document.querySelector('.site-header').getBoundingClientRect().bottom) + 100;
  let current = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= activationLine) current = section;
  });
  nav.querySelectorAll('a').forEach((link) => {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  activeFramePending = false;
}
function scheduleActiveSection() {
  if (activeFramePending) return;
  activeFramePending = true;
  requestAnimationFrame(updateActiveSection);
}
window.addEventListener('scroll', scheduleActiveSection, { passive: true });
window.addEventListener('resize', scheduleActiveSection);
updateActiveSection();
