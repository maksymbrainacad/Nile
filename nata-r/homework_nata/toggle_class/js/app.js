window.addEventListener('load', function() {
	var container = document.querySelector('[data-id="container"]'),
		third = document.querySelector('[data-id="third"]'),
		second = document.querySelector('[data-id="second"]'),
		first = document.querySelector('[data-id="first"]');

	function toggle(el, className) {

		var attrib = el.getAttribute('class') || '';
		var	attribArr = attrib.split(' '),
			index = attribArr.indexOf(className);

		if(index === -1) {
			attribArr.push(className);
		} else {
			attribArr.splice(index, 1);
		}

		var attribStr = attribArr.join(' ');
		el.className = attribStr;
	}

	toggle(third, 'green');
	toggle(first, 'green');
	toggle(second, 'green');
	toggle(second, 'red');
	toggle(first, 'green');
})