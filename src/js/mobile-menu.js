//mobile menu
const mobileNavButton = document.querySelector('.header__mobile-btn');
const mobileNavIcon = document.querySelector('.header__mobile-icon');
const mobileNav = document.querySelector('.header__mobile-nav');

export function mobile_menu() {
	mobileNavButton.addEventListener('click', () => {
  	mobileNavIcon.classList.toggle('active');
	  mobileNav.classList.toggle('active');
    document.body.classList.toggle('hidden');
	});
}