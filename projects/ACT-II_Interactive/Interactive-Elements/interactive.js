
let colour = ['#06182F', '#1C3A5F ', '#436794', '#6A8AB2', '#97B1D3', '#C8D8EE']; 
let counter = 0;
let width, height, xpos, ypos;

// user landing variables
let landing = document.getElementById('header');
let main = document.getElementById('main');

// user landing page interaction
function getNext() {
	if (event.key == 'c') {
	landing.style.opacity = '0';
	main.style.opacity = '1';
	}
}

landing.addEventListener('onkeyup', getNext);

// interaction page variables
let text = document.getElementById('input');
let errorText = document.getElementById('errorText1');
let output = document.getElementById('output');

// user input interaction / get text element, addtext to array, display array elements
function getText() {
	counter++;
	width = Math.floor(Math.random() * 300);
	height = width;

	xpos = Math.random() * 100;
	ypos = Math.random() * 100;

	let randColour = colour[Math.floor(Math.random() * colour.length)]; 


	// interaction page variables
	let text = document.getElementById('input');
	let errorText = document.getElementById('errorText1');
	let output = document.getElementById('output');

	if (event.key == 'Enter') {
		if (text.value.length >= 2) {
		counter++;
		width = Math.floor(Math.random() * 300);
		height = width;

		xpos = Math.random() * 100;
		ypos = Math.random() * 100;

		let randColour = colour[Math.floor(Math.random() * colour.length)];

		$('body').append(`<div class="draggable" id="draggable-${counter}"></div>`);
		$(`#draggable-${counter}`).css('background-color', randColour).css('width',width).css('height',height).css('left',xpos + '%').css('top',ypos + '%');
		$(`#draggable-${counter}`).html(text.value);
		$('.draggable').draggable();
		
		text.value = '';
		errorText.style.visibility = 'hidden';
		} 

		else {
		errorText.style.visibility = 'visible';
		text.value= '';
		}
	}
}

text.addEventListener('onkeyup', getText);