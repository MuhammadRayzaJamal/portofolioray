/**
 * Toggle Dark / Light Mode
 */
const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.id = 'toggle-theme';
toggleThemeBtn.textContent = '🌙 Dark Mode';
toggleThemeBtn.classList.add('btn', 'btn-secondary');
document.body.prepend(toggleThemeBtn); // taruh di atas body atau navbar

// Set mode default dari localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  toggleThemeBtn.textContent = '☀️ Light Mode';
}

toggleThemeBtn.addEventListener('click', () => {
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    toggleThemeBtn.textContent = '🌙 Dark Mode';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleThemeBtn.textContent = '☀️ Light Mode';
  }
});
