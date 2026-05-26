
/* LANGUAGE SWITCHER */ 
const currentBtn = document.querySelector('.language__current');
const langList = document.querySelector('.language__list');

currentBtn.addEventListener('click', () => {
	langList.classList.toggle('active');

	currentBtn.classList.toggle('active');
});

const langItems = document.querySelectorAll('[data-lang]');
	langItems.forEach(item => {
		item.addEventListener('click', () => {
			const selectedLang = item.dataset.lang;

			currentBtn.textContent = selectedLang.toUpperCase();

			localStorage.setItem('language', selectedLang);

			langList.classList.remove('active');

			currentBtn.classList.remove('active');
		});
	});
	
	const savedLang = localStorage.getItem('language');

	if(savedLang) {
		currentBtn.textContent = savedLang.toUpperCase();
	}

	document.addEventListener('click', (e) => {
		if(!e.target.closest('.language')) {
			langList.classList.remove('active');

			currentBtn.classList.remove('active');
			
		}
	});