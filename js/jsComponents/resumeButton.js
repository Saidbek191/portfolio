const resumeBtn = document.querySelector('.header__btn-resume');
const resumeIcon = document.querySelector('.header__btn-resume-icon');

resumeBtn.addEventListener('click', () => {
	resumeBtn.classList.toggle('active');
	resumeIcon.classList.toggle('active');
});

document.addEventListener('click', (e) => {
	if(!e.target.closest('.header__btn-resume')) {
			resumeBtn.classList.remove('active');

			resumeIcon.classList.remove('active');
	}
});
