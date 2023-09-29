console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

let mouseHover = document.querySelector('#cutecat');
let extendCompliment = document.querySelector('#compliment')

mouseHover.addEventListener('hover', extendCompliment);

if (extendCompliment.includes('a'))
	console.log(extendCompliment)
else {
	console.log(extendCompliment)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const divs = document.querySelector('div')
















