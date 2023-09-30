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
  