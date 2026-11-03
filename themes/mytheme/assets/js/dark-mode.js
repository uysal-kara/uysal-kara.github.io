// Dark mode toggle with localStorage persistence
(function() {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const iconMoon = toggle.querySelector('.icon-moon');
  const iconSun = toggle.querySelector('.icon-sun');
  
  // Get saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply initial theme
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-mode');
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block';
  }
  
  // Toggle on click
  toggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    iconMoon.style.display = isDark ? 'none' : 'block';
    iconSun.style.display = isDark ? 'block' : 'none';
  });
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      // No saved preference, follow system
      if (e.matches) {
        body.classList.add('dark-mode');
        iconMoon.style.display = 'none';
        iconSun.style.display = 'block';
      } else {
        body.classList.remove('dark-mode');
        iconMoon.style.display = 'block';
        iconSun.style.display = 'none';
      }
    }
  });
})();
