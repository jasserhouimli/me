const toggle = document.querySelector('.theme-toggle');
const themeText = toggle?.querySelector('.theme-text');
const sections = document.querySelectorAll('section, .site-footer');

const applyTheme = (isDark) => {
  document.body.classList.toggle('dark', isDark);
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(isDark));
  }
  if (themeText) {
    themeText.textContent = isDark ? 'Light' : 'Dark';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

const reveal = () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add('visible');
    }
  });
};

sections.forEach((section) => section.classList.add('fade-in'));
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

if (toggle) {
  toggle.addEventListener('click', () => {
    applyTheme(!document.body.classList.contains('dark'));
  });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme === 'dark');
} else {
  applyTheme(true);
}
