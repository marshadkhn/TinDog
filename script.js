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
  
// Dark Theme
let themeToggleBtn = document.querySelector('.toggle-theme');

themeToggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
  console.log('hello');
});
