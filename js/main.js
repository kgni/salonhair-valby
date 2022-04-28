const loader = document.querySelector('.loader-container');
const main = document.querySelector('main');

function init() {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';
		main.style.display = 'block';
		setTimeout(() => (main.style.opacity = 1), 50);
	}, 0);
}

init();

// Slider

const btn1 = document.querySelector('.manual-btn1');
const btn2 = document.querySelector('.manual-btn2');
const btn3 = document.querySelector('.manual-btn3');

btn1.addEventListener('click', () => {
	btn1.classList.add('slide-active');
	btn2.classList.remove('slide-active');
	btn3.classList.remove('slide-active');
});

btn2.addEventListener('click', () => {
	btn2.classList.add('slide-active');
	btn1.classList.remove('slide-active');
	btn3.classList.remove('slide-active');
});

btn3.addEventListener('click', () => {
	btn3.classList.add('slide-active');
	btn1.classList.remove('slide-active');
	btn2.classList.remove('slide-active');
});
