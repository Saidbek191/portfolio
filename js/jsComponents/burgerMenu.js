const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.mobile-menu');

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');

		nav.classList.toggle('active');
	});