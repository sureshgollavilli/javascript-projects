var output = document.getElementById('output');
var buttons = document.getElementById('buttons');
var clear = document.getElementById('clear');
var backspace = document.getElementById('backspace');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var subtract = document.getElementById('subtract');
var add = document.getElementById('add');
var equals = document.getElementById('equals');
var zero = document.getElementById('zero');
var decimal = document.getElementById('decimal');

buttons.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		if (event.target.textContent === 'C') {
			output.textContent = '';
		} else if (event.target.textContent === 'Del') {
			output.textContent = output.textContent.slice(0, -1);
		} else if (event.target.textContent === '=') {
			output.textContent = eval(output.textContent);
		} else {
			output.textContent += event.target.textContent;
		}
	}
});
