
window.addEventListener('load', function() {
	var inputText = document.querySelector('[data-id="inputText"]'),
		submitData = document.querySelector('[data-id="submit"]'),
		itemList = document.querySelector('[data-id="item-list"]'),
		checkAll = document.querySelector('[data-id="checking-all"]'),
		footer = document.querySelector('[data-id="footer"]'),
		footerCount = document.querySelector('[data-id="footer-count"]'),
		clearAllBtn = document.querySelector('[data-id="clear-all"]');

		var allItems =JSON.parse(localStorage.getItem('values')) || [];
		console.log(allItems);


		function checkLength() {
			if(itemList.children.length > 0) {
		checkAll.classList.remove('display-none');
		footer.classList.remove('display-none');
	} else if (itemList.children.length === 0){
		checkAll.classList.add('display-none');
		footer.classList.add('display-none');
		checkAll.checked = false;
		inputText.value = '';
	}
		};
	
	submitData.addEventListener('submit', function (e) {
		if (inputText.value) {
			var li = document.createElement('li');
				li.className = "item-list-style";


			var checkItem = document.createElement('input');
				checkItem.type = "checkbox";
				checkItem.className = "item-checkbox";
			
			var spanItem = document.createElement('span');
				spanItem.className = "item-inner";
				spanItem.innerHTML = inputText.value;

			var destroyItem = document.createElement('button');
				destroyItem.className = "destroying-item display-none";
				destroyItem.innerHTML = "X";

		itemList.appendChild(li);
		li.appendChild(checkItem);
		li.appendChild(spanItem);
		li.appendChild(destroyItem);

   			if(allItems.indexOf(spanItem.innerHTML) === -1){
          allItems.push(spanItem.innerHTML); 
          localStorage.setItem('values', JSON.stringify(allItems))
        }
	
	
		inputText.value = '';
			checkLength();
		}


		li.addEventListener('mouseover', function(e) {
			destroyItem.classList.remove('display-none');
		})

		li.addEventListener('mouseout', function(e) {
			destroyItem.classList.add("display-none");
		})

		destroyItem.addEventListener('click', function(e) {
			var parent = e.target.parentNode;
			parent.remove();
			footerCount.innerHTML = itemList.children.length;

			checkLength();

			var index = allItems.indexOf(parent.children[1].innerHTML);

           allItems.splice(index, 1);
           localStorage.setItem('values', JSON.stringify(allItems));
			console.log(localStorage.values);

		});

		footerCount.innerHTML = itemList.children.length;


		clearAllBtn.addEventListener('click', function(e) {
			Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner checked"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	if(check.checked === true) {
			 		//localStorage.removeItem('values');
			 		var indexN = allItems.indexOf(span.innerHTML);

           			allItems.splice(indexN, 1);
           			localStorage.setItem('values', JSON.stringify(allItems));
			 		listIt.remove();
				checkLength();
				footerCount.innerHTML = itemList.children.length;
			 	}
			 })
		});

		li.addEventListener('dblclick', function(e) {
			var target = e.target;
			if(target.className == 'item-list-style'){
			var	spanCollection = target.getElementsByTagName('span'),
				span = spanCollection[0],
				a = span.innerHTML,
				spanInnerHtml = span.innerHTML;
			//var formItem = document.createElement('form'),
			var	inputItem = document.createElement('input');
				inputItem.className = "item-inner-input";
				inputItem.value = spanInnerHtml;
				span.remove();
				//target.appendChild(formItem);
				target.appendChild(inputItem);
				inputItem.focus();


				
			} else if (target.className == 'item-inner') {
				var targetInner = target.innerHTML;
				//var formItem = document.createElement('form'),
				inputItem = document.createElement('input');
				inputItem.className = "item-inner-input";
				inputItem.value = targetInner;
				var parent = e.currentTarget;
				target.remove();
				parent.appendChild(inputItem);
				inputItem.focus();
			}
			inputItem.addEventListener('change', function(e) {
				spanValue = inputItem.value;
			var spanItem = document.createElement('span');
				spanItem.className = "item-inner";
				spanItem.innerHTML = spanValue;
			var parentInput = inputItem.parentNode;
				inputItem.remove();
				parentInput.appendChild(spanItem);

				if(!spanValue) {
					parentInput.remove();
					checkLength();
					footerCount.innerHTML = itemList.children.length;
				}


				var indexRemove = allItems.indexOf(a);
				console.log(inputItem.value);
           		allItems.splice(indexRemove, 1, inputItem.value);
           		localStorage.setItem('values', JSON.stringify(allItems));


		
			checkItem.addEventListener('click', function(e) {
			spanItem.classList.add("checked");

			if (!checkItem.checked) {
				spanItem.classList.remove("checked");
			}
		});

		checkAll.addEventListener('click', function(e) {

		 	Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	spanItem.classList.add("checked");
			 	check.checked = true;
			 })

			 if (!checkAll.checked) {
			 	Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	spanItem.classList.remove("checked");
			 	check.checked = false;
			 })
		 	}
		});
		})	
//end of 'onchange'


		});

		checkItem.addEventListener('click', function(e) {
			spanItem.classList.add("checked");

			if (!checkItem.checked) {
				spanItem.classList.remove("checked");
			}
		});

		checkAll.addEventListener('click', function(e) {

		 	Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	spanItem.classList.add("checked");
			 	check.checked = true;
			 })

			 if (!checkAll.checked) {
			 	Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	spanItem.classList.remove("checked");
			 	check.checked = false;
			 })
		 	}
		});


		e.preventDefault();
		return false;
	});



//allItems =JSON.parse(localStorage.getItem('values'));
allItems.forEach(function (item) {
		var li = document.createElement('li');
				li.className = "item-list-style";

			var checkItem = document.createElement('input');
				checkItem.type = "checkbox";
				checkItem.className = "item-checkbox";
			
			var spanItem = document.createElement('span');
				spanItem.className = "item-inner";
				spanItem.innerHTML = item;

			var destroyItem = document.createElement('button');
				destroyItem.className = "destroying-item display-none";
				destroyItem.innerHTML = "X";

		itemList.appendChild(li);
		li.appendChild(checkItem);
		li.appendChild(spanItem);
		li.appendChild(destroyItem);
		checkLength();
		footerCount.innerHTML = itemList.children.length;

		li.addEventListener('mouseover', function(e) {
			destroyItem.classList.remove('display-none');
		})

		li.addEventListener('mouseout', function(e) {
			destroyItem.classList.add("display-none");
		})

		destroyItem.addEventListener('click', function(e) {
			var parent = e.target.parentNode;
			parent.remove();
			footerCount.innerHTML = itemList.children.length;

			checkLength();

			var index = allItems.indexOf(parent.children[1].innerHTML);

           allItems.splice(index, 1);
           localStorage.setItem('values', JSON.stringify(allItems));
			console.log(localStorage.values);

		});
				footerCount.innerHTML = itemList.children.length;

		checkItem.addEventListener('click', function(e) {
			spanItem.classList.add("checked");

			if (!checkItem.checked) {
				spanItem.classList.remove("checked");
			}
		});

		checkAll.addEventListener('click', function(e) {

		 	Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	spanItem.classList.add("checked");
			 	check.checked = true;
			 })

			 if (!checkAll.checked) {
			 	Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	spanItem.classList.remove("checked");
			 	check.checked = false;
			 })
		 	}
		});
		

		clearAllBtn.addEventListener('click', function(e) {
			Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner checked"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	if(check.checked === true) {
			 		//localStorage.removeItem('values');
			 		var indexN = allItems.indexOf(span.innerHTML);

           			allItems.splice(indexN, 1);
           			localStorage.setItem('values', JSON.stringify(allItems));
			 		listIt.remove();
				checkLength();
				footerCount.innerHTML = itemList.children.length;
			 	}
			 })
		});



		li.addEventListener('dblclick', function(e) {
			var target = e.target;
			if(target.className == 'item-list-style'){
			var	spanCollection = target.getElementsByTagName('span'),
				span = spanCollection[0],
				a = span.innerHTML,
				spanInnerHtml = span.innerHTML;
			//var formItem = document.createElement('form'),
			var	inputItem = document.createElement('input');
				inputItem.className = "item-inner-input";
				inputItem.value = spanInnerHtml;
				span.remove();
				//target.appendChild(formItem);
				target.appendChild(inputItem);
				inputItem.focus();


				
			} else if (target.className == 'item-inner') {
				var targetInner = target.innerHTML;
				//var formItem = document.createElement('form'),
				inputItem = document.createElement('input');
				inputItem.className = "item-inner-input";
				inputItem.value = targetInner;
				var parent = e.currentTarget;
				target.remove();
				parent.appendChild(inputItem);
				inputItem.focus();
			}
			inputItem.addEventListener('change', function(e) {
				spanValue = inputItem.value;
			var spanItem = document.createElement('span');
				spanItem.className = "item-inner";
				spanItem.innerHTML = spanValue;
			var parentInput = inputItem.parentNode;
				inputItem.remove();
				parentInput.appendChild(spanItem);

				if(!spanValue) {
					parentInput.remove();
					checkLength();
					footerCount.innerHTML = itemList.children.length;
				}


				var indexRemove = allItems.indexOf(a);
				console.log(inputItem.value);
           		allItems.splice(indexRemove, 1, inputItem.value);
           		localStorage.setItem('values', JSON.stringify(allItems));


		
			checkItem.addEventListener('click', function(e) {
			spanItem.classList.add("checked");

			if (!checkItem.checked) {
				spanItem.classList.remove("checked");
			}
		});

		checkAll.addEventListener('click', function(e) {

		 	Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	spanItem.classList.add("checked");
			 	check.checked = true;
			 })

			 if (!checkAll.checked) {
			 	Array.prototype.forEach.call(itemList.children, function(listIt) {
		 		var span = listIt.querySelector('[class="item-inner"]');
		 		var check = listIt.querySelector('[class="item-checkbox"]');
			 	spanItem.classList.remove("checked");
			 	check.checked = false;
			 })
		 	}
		});
		})	
//end of 'onchange'


		});



})
//end of 'forEach' localStorage

});