let ul = document.querySelector('ul');
let enterButton = document.getElementById('enter');
let input = document.getElementById('userinput');
let listLi = document.querySelectorAll('li');


function toggleDone(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('done');
    }
};

function deleteItem(event) {
    let item = event.target.parentNode;
    item.remove();
};

function createDeleteBtn() {
    let btnDelete = document.createElement('button');
    btnDelete.innerText = "Delete";
    btnDelete.className = "btn-delete";
    btnDelete.addEventListener('click', deleteItem);
    return btnDelete;
};

function createItem() {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(input.value));
    btn = createDeleteBtn();
    item.appendChild(btn);
    ul.appendChild(item);
    input.value = "";
};

function inputLength() {
    return input.value.length;
};

function addItemClick() {
    if (inputLength() > 0) {
        createItem();
    }
};

function addItemEnter(event) {
    if (event.which === 13 && inputLength() > 0) {
        createItem();
    }
};

listLi.forEach(li => {
    li.appendChild(createDeleteBtn());
});

ul.addEventListener('click', toggleDone);
enterButton.addEventListener('click', addItemClick);
input.addEventListener('keypress', addItemEnter);