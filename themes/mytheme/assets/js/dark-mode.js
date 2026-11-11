// Dark mode toggle with localStorage persistence
(function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  if (!toggle) return;

  // Toggle on click
  toggle.addEventListener('click', function() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Listen for system theme changes (only when no manual preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      const isDark = e.matches;
      html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
  });
})();
