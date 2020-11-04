let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	let btnDelete = document.createElement('button');
	btnDelete.innerText = "Delete";
	btnDelete.className = "btn-delete";
	btnDelete.addEventListener('click', deleteItem);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btnDelete)
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleFunction(event){
	event.target.classList.toggle('done');
}
function deleteItem(event){
	const clickTarget = event.target;
	if (clickTarget.matches('.btn-delete')){
		clickTarget.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', toggleFunction);

