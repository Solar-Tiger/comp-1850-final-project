const hamburgerMenu = document.querySelector('#hamburger-menu');

const mobileNavMenu = document.querySelector('#mobile-nav-menu');
const mobileNavOverlay = document.querySelector('#mobile-nav-overlay');
const documentBody = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
	mobileNavMenu.classList.add('mobile-nav-menu--open');
	mobileNavOverlay.style.display = 'block';
	documentBody.classList.add('overflow-body--hidden');
});

document.body.addEventListener('click', (e) => {
	if (
		e.target.classList.contains('mobile-nav-overlay') ||
		e.target.classList.contains('close-x-icon')
	) {
		mobileNavMenu.classList.remove('mobile-nav-menu--open');
		mobileNavOverlay.style.display = 'none';
		documentBody.classList.remove('overflow-body--hidden');
	}
});
