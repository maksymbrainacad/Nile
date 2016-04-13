window.addEventListener('load', function() {
	var container = document.querySelector('[data-id="container"]'),
		third = document.querySelector('[data-id="third"]'),
		second = document.querySelector('[data-id="second"]'),
		first = document.querySelector('[data-id="first"]');

	function toggle(el, className) {
		if(el.classList.contains(className)) {
			el.classList.remove(className);
		} else {el.classList.add(className)}
	}

	toggle(third, 'green');
	toggle(first, 'green');
	toggle(second, 'green');
	toggle(second, 'red');
	toggle(first, 'green');
})