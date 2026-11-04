// Dark mode toggle with localStorage persistence
(function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const iconMoon = toggle.querySelector('.icon-moon');
  const iconSun = toggle.querySelector('.icon-sun');
  
  // Get saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply initial theme
  const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  iconMoon.style.display = isDark ? 'none' : 'block';
  iconSun.style.display = isDark ? 'block' : 'none';
  
  // Toggle on click
  toggle.addEventListener('click', function() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    iconMoon.style.display = newTheme === 'dark' ? 'none' : 'block';
    iconSun.style.display = newTheme === 'dark' ? 'block' : 'none';
  });
  
  // Listen for system theme changes (only when no manual preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      const isDark = e.matches;
      html.setAttribute('data-theme', isDark ? 'dark' : 'light');
      iconMoon.style.display = isDark ? 'none' : 'block';
      iconSun.style.display = isDark ? 'block' : 'none';
    }
  });
})();
