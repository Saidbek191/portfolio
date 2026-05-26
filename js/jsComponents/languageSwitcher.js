
/* LANGUAGE SWITCHER */ 
const languages = document.querySelectorAll('.language');
languages.forEach(language => {
	const currentBtn = language.querySelector('.language__current');
	const langList = language.querySelector('.language__list');
	const langItems = language.querySelectorAll('[data-lang]');

	currentBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		
		langList.classList.toggle('active');
		currentBtn.classList.toggle('active');
	});
	
	document.addEventListener('click', (e) => {
		if(!e.target.closest('.language')) {
			langList.classList.remove('active');
	
			currentBtn.classList.remove('active');
			
		}
	});

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

});