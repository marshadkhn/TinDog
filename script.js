document.querySelector('.custom-toggler').addEventListener('click', function () {
  const navbarTogglerIcon = document.getElementById('navbar-toggler');
  if (this.getAttribute('aria-expanded') === 'false') {
    navbarTogglerIcon.classList.remove('btn-close-white');
    navbarTogglerIcon.classList.remove('btn-close');
    navbarTogglerIcon.classList.add('navbar-toggler-icon');
  } else {
    navbarTogglerIcon.classList.add('btn-close-white');
    navbarTogglerIcon.classList.add('btn-close');
    navbarTogglerIcon.classList.remove('navbar-toggler-icon');
  }
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
  if (this.checked) {
    // Enable dark mode
    body.classList.add('dark-mode');
    // Save dark mode preference to local storage
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    // Disable dark mode
    body.classList.remove('dark-mode');
    // Remove dark mode preference from local storage
    localStorage.setItem('dark-mode', 'disabled');
  }
});

// Check the user's dark mode preference from local storage
const userDarkMode = localStorage.getItem('dark-mode');

if (userDarkMode === 'enabled') {
  // Enable dark mode if the preference is set to 'enabled'
  darkModeToggle.checked = true;
  body.classList.add('dark-mode');
}
