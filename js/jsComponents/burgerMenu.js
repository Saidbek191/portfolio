const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.mobile-menu');

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		
		nav.classList.toggle('active');
		document.body.classList.toggle('no-scroll');
	});

	const links = document.querySelectorAll('.mobile-list a');
	links.forEach(link => {
		link.addEventListener('click', () => {
			burger.classList.remove('active');

			nav.classList.remove('active');
			document.body.classList.remove('no-scroll');
		});
	});


	