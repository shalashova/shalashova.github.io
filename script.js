let elem = document.querySelector('#elem');
let text = document.querySelector('#text');

elem.addEventListener('blur', function() {
	text.textContent = elem.value * elem.value;
});
elem.addEventListener('focus', function() {
    elem.value = ""
	text.textContent = "";
});
