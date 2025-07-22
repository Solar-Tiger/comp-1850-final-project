const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileNavMenu = document.querySelector('#mobile-nav-menu');
const mobileNavOverlay = document.querySelector('#mobile-nav-overlay');

hamburgerMenu.addEventListener('click', (e) => {
    if (mobileNavMenu.classList.contains('mobile-nav-menu--open')) {
        mobileNavMenu.classList.remove('mobile-nav-menu--open');
        mobileNavOverlay.style.display = 'none';
    } else {
        mobileNavMenu.classList.add('mobile-nav-menu--open');
        mobileNavOverlay.style.display = 'block';
    }
});
