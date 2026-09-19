(() => {
  const $ = (id) => document.getElementById(id);
  function setTheme(isDark){
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('age-theme', isDark ? 'dark' : 'light');
    const icon = $('themeIcon');
    const button = $('themeBtn');
    if(icon) icon.textContent = isDark ? '◑' : '◐';
    if(button){ button.setAttribute('aria-pressed', String(isDark)); button.title = isDark ? 'Switch to light theme' : 'Switch to dark theme'; }
  }
  const theme = $('themeBtn');
  if(theme){ setTheme(localStorage.getItem('age-theme') === 'dark'); theme.addEventListener('click', () => setTheme(!document.body.classList.contains('dark'))); }
  const menu = $('menuBtn');
  if(menu){ menu.addEventListener('click', () => $('navlinks')?.classList.toggle('open')); document.querySelectorAll('.navlinks a').forEach(a => a.addEventListener('click', () => $('navlinks')?.classList.remove('open'))); }
})();
