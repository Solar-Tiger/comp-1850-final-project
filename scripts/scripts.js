const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileNavMenu = document.querySelector('#mobile-nav-menu');

hamburgerMenu.addEventListener('click', (e) => {
    if (mobileNavMenu.classList.contains('mobile-nav-menu--open')) {
        mobileNavMenu.classList.remove('mobile-nav-menu--open');
    } else {
        mobileNavMenu.classList.add('mobile-nav-menu--open');
    }
});
