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

(()=>{const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();document.querySelectorAll('.navlinks a').forEach(a=>{const href=(a.getAttribute('href')||'').split('#')[0].split('?')[0].toLowerCase()||'index.html';if(href===current){a.classList.add('active');a.setAttribute('aria-current','page')}})})();

/* nav-active-v2 */
(()=>{const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();const hash=(location.hash||'#home').toLowerCase();document.querySelectorAll('.navlinks a').forEach(a=>{a.classList.remove('active');a.removeAttribute('aria-current');const parts=(a.getAttribute('href')||'').toLowerCase().split('#');const file=(parts[0]||'index.html').split('/').pop();const target=parts[1]?('#'+parts[1]):'';const ok=current==='index.html'?file==='index.html'&&target===hash:file===current;if(ok){a.classList.add('active');a.setAttribute('aria-current','page')}})})();
