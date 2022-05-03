const loader = document.querySelector('.loader-container');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

function init() {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = 'none';
		main.style.display = 'block';
		footer.style.display = 'block';
		setTimeout(() => (main.style.opacity = 1), 50);
	}, 3000);
}

init();

// Slider

const btn1 = document.querySelector('.manual-btn1');
const btn2 = document.querySelector('.manual-btn2');
const btn3 = document.querySelector('.manual-btn3');

let counter = 1;

btn1.addEventListener('click', () => {
	counter = 1;
});

btn2.addEventListener('click', () => {
	counter = 2;
});

btn3.addEventListener('click', () => {
	counter = 3;
});

setInterval(() => {
	if (counter === 1) {
		document.getElementById('radio' + counter).checked = true;
		counter++;
	} else if (counter === 2) {
		document.getElementById('radio' + counter).checked = true;
		counter++;
	} else if (counter === 3) {
		document.getElementById('radio' + counter).checked = true;
		counter++;
	}

	if (counter > 3) {
		counter = 1;
	}
}, 5000);
