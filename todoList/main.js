const addButton = document.querySelector('.addButton');
// const editButton = document.querySelector('.editButton');
const dateElement = document.getElementById("date");
var input = document.querySelector('.input');
const container = document.querySelector('.container');

let options = { weekday: 'long', month: 'short', day: 'numeric' };
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
//div with class item
class item {
    constructor(itemName) {
        //create the item div
        this.createDiv(itemName);
    }
    createDiv(itemName) {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";
        checkbox.classList.add('check_class');

        let label = document.createElement('label');
        label.htmlFor = "id";
        label.classList.add('label_class');
        // appending the created text to
        // the created label tag
        label.appendChild(document.createTextNode(itemName));

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'X';
        removeButton.classList.add('removeButton');

        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add('editButton');




        container.appendChild(itemBox);
        itemBox.appendChild(checkbox);
        itemBox.appendChild(label);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);


        // editButton.addEventListener('click', () => this.edit(label.innerHTML));

        removeButton.addEventListener('click', () => this.remove(itemBox));

        function change() {

            label.innerHTML = prompt('enter new task');

        }
        editButton.addEventListener('click', change);


    }

    // edit(x) {
    //     var x = window.prompt("Enter new task");
    //     if (x != null) {

    //     }
    // }
    remove(item) {
        container.removeChild(item);
    }

}


function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}
addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})



